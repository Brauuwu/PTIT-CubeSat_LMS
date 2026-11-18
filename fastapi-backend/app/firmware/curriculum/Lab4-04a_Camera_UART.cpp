// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-04a_Camera_UART/blob/e5b4b99d474998c36b6a149c4ffb0b7f0f65d266/src/main.cpp
/**
 * VÍ DỤ 4-4a: CHỤP ẢNH BẰNG GIAO TIẾP UART THUẦN VÀ LƯU VÀO THẺ NHỚ MICROSD
 * 
 * Mục đích:
 * - Minh họa giao thức bắt tay nhị phân mức thấp (Raw Handshake Protocol) giữa
 *   On-Board Computer (ESP32) và module Camera phụ (ESP32-CAM) qua UART2.
 * - Dữ liệu ảnh JPEG nhị phân nhận được từ UART2 sẽ được ghi trực tiếp theo luồng (streaming)
 *   vào thẻ nhớ MicroSD thông qua giao tiếp SPI, đóng vai trò như Hộp đen lưu trữ dữ liệu (Black Box).
 * 
 * Sơ đồ kết nối phần cứng:
 * 1. ESP32-CAM <-> ESP32 OBC (UART2):
 *    - CAM TX2 (GPIO 14) -> ESP32 RX2 (GPIO 16)
 *    - CAM RX2 (GPIO 15) -> ESP32 TX2 (GPIO 17)
 *    - GND               -> GND
 * 2. MicroSD Card <-> ESP32 OBC (SPI Bus):
 *    - SD_CS   -> GPIO 13
 *    - SD_SCK  -> GPIO 18
 *    - SD_MISO -> GPIO 19
 *    - SD_MOSI -> GPIO 23
 * 3. MUX 74HC4066 (Bộ chia kênh UART2 dùng chung với GPS - nếu có):
 *    - MUX_GPS_PIN -> GPIO 12 (LOW khi chụp ảnh)
 *    - MUX_CAM_PIN -> GPIO 14 (HIGH khi chụp ảnh)
 * 
 * Giao thức bắt tay UART giữa OBC và ESP32-CAM:
 *    OBC                          ESP32-CAM
 *     | --- "p\n" -------------->    |  (OBC yêu cầu chụp)
 *     | <--- "SIZE:<bytes>\n" ---    |  (CAM chụp xong và báo kích thước JPEG)
 *     | --- "OK\n" ------------->    |  (OBC sẵn sàng nhận luồng dữ liệu)
 *     | <--- [Binary JPEG Stream] -  |  (CAM truyền byte nhị phân ảnh)
 *     | (Ghi trực tiếp vào SD)       |
 *     | --- "DONE\n" ----------->    |  (OBC báo đã nhận đủ)
 */

#include <Arduino.h>

#include <PTITCube.h>
#include <SPI.h>
#include <SD.h>
#include <base64.h>

PTIT_CDH cdh;

// Định nghĩa chân SPI thẻ nhớ MicroSD (OBC)
#define SD_CS_PIN   13
#define SD_SCK_PIN  18
#define SD_MISO_PIN 19
#define SD_MOSI_PIN 23

// Định nghĩa chân UART2 giao tiếp với ESP32-CAM
#define CAM_RX_PIN  16
#define CAM_TX_PIN  17
#define CAM_BAUD    115200

// Định nghĩa chân chuyển mạch MUX 74HC4066
#define MUX_GPS_PIN 12
#define MUX_CAM_PIN 14

static int photoCounter = 0;
static bool sdReady = false;

// Hàm chọn kênh giao tiếp cho Camera trên MUX 74HC4066 (Break-Before-Make)
void selectCameraChannel() {
    pinMode(MUX_GPS_PIN, OUTPUT);
    pinMode(MUX_CAM_PIN, OUTPUT);

    // Tắt GPS trước
    digitalWrite(MUX_GPS_PIN, LOW);
    delayMicroseconds(50);
    // Bật kênh Camera sau
    digitalWrite(MUX_CAM_PIN, HIGH);
}

// Khởi tạo thẻ nhớ MicroSD qua SPI
bool initMicroSD() {
    cdh.println("[SD] Khoi tao giao tiep SPI cho the nho MicroSD...");
    SPI.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

    if (!SD.begin(SD_CS_PIN, SPI, 8000000)) {
        cdh.println("[SD] LOI: Khong the mount the nho MicroSD!");

        return false;
    }

    uint64_t cardSize = SD.cardSize() / (1024 * 1024);
    cdh.printf("[SD] Mount thanh cong! Dung luong the: %llu MB\n", cardSize);

    // Đảm bảo thư mục /photos tồn tại
    if (!SD.exists("/photos")) {
        if (SD.mkdir("/photos")) {
            cdh.println("[SD] Da tao thu muc /photos.");
        } else {
            cdh.println("[SD] Canh bao: Khong the tao thu muc /photos!");
        }
    }

    return true;
}

// Gửi ảnh đã lưu trên thẻ SD về trình duyệt qua Serial theo từng khối base64 (Camera Viewer).
// Giao thức: IMG_BEGIN:<số byte> -> nhiều dòng IMG_CHUNK:<base64 của 384 byte> -> IMG_END
static bool sendImageOverSerial(const char* path) {
    File file = SD.open(path, FILE_READ);
    if (!file) { cdh.println("ERROR:IMG_OPEN"); return false; }
    const size_t size = file.size();
    if (size == 0 || size > 262144) {
        file.close();
        cdh.printf("ERROR:IMG_SIZE:%u\n", (unsigned)size);
        return false;
    }
    cdh.printf("IMG_BEGIN:%u\n", (unsigned)size);
    uint8_t chunk[384];
    size_t sent = 0;
    while (sent < size) {
        const size_t count = file.read(chunk, sizeof(chunk));
        if (count == 0) break;
        cdh.print("IMG_CHUNK:");
        cdh.println(base64::encode(chunk, count));
        sent += count;
        delay(2);
    }
    file.close();
    if (sent != size) { cdh.println("ERROR:IMG_READ"); return false; }
    cdh.println("IMG_END");
    return true;
}

// Hàm chụp ảnh qua UART thuần và ghi trực tiếp vào thẻ nhớ
bool captureAndSaveToSD() {
    if (!sdReady) {
        cdh.println("[LOI] The nho SD chua san sang! Khong the luu anh.");
        return false;
    }

    // 1. Chuyển kênh MUX sang Camera
    selectCameraChannel();

    // 2. Dọn sạch bộ đệm UART2
    while (Serial2.available()) {
        Serial2.read();
    }

    // 3. Gửi lệnh chụp 'p\n' đến ESP32-CAM
    cdh.println("\n[UART-CAM] Gui lenh chup anh ('p') toi ESP32-CAM...");
    Serial2.print("p\n");
    Serial2.flush();

    // 4. Chờ ESP32-CAM phản hồi kích thước ảnh: "SIZE:<bytes>"
    cdh.println("[UART-CAM] Cho phan hoi SIZE tu ESP32-CAM (Timeout: 5s)...");
    unsigned long startTime = millis();
    long imageSize = 0;
    bool sizeReceived = false;

    while (millis() - startTime < 5000) {
        if (Serial2.available()) {
            String line = Serial2.readStringUntil('\n');
            line.trim();

            if (line.startsWith("SIZE:")) {
                imageSize = line.substring(5).toInt();
                // Từ chối kích thước bất thường thay vì xác nhận OK cho luồng không lưu được
                if (imageSize < 4 || imageSize > 512L * 1024L) {
                    cdh.printf("[UART-CAM] LOI: SIZE khong hop le (%ld bytes)\n", imageSize);
                    return false;
                }
                sizeReceived = true;
                break;
            } else if (line.startsWith("ERROR:")) {
                cdh.printf("[UART-CAM] ESP32-CAM bao loi: %s\n", line.c_str());
                return false;
            }
        }
        delay(1);
    }

    if (!sizeReceived || imageSize <= 0) {
        cdh.println("[UART-CAM] LOI: Khong nhan duoc phan hoi SIZE hoac kich thuoc = 0!");
        return false;
    }

    cdh.printf("[UART-CAM] ESP32-CAM san sang truyen anh, kich thuoc: %ld bytes (%.2f KB)\n", 
                  imageSize, imageSize / 1024.0);

    // 5. Mở file mới trên thẻ MicroSD để ghi dữ liệu JPEG
    // Không ghi đè ảnh cũ: bỏ qua các tên file đã tồn tại trên thẻ nhớ
    char filePath[32];
    do {
        snprintf(filePath, sizeof(filePath), "/photos/uart_img_%d.jpg", photoCounter++);
    } while (SD.exists(filePath));
    
    File file = SD.open(filePath, FILE_WRITE);
    if (!file) {
        cdh.printf("[SD] LOI: Khong the tao file ghi tren the nho: %s\n", filePath);
        return false;
    }

    // 6. Gửi xác nhận "OK\n" để ESP32-CAM bắt đầu truyền luồng nhị phân
    Serial2.print("OK\n");
    Serial2.flush();
    cdh.printf("[SD] Bat dau ghi du lieu truc tiep vao file: %s ...\n", filePath);

    // 7. Tiếp nhận luồng byte qua UART2 và ghi theo khối vào thẻ nhớ
    uint8_t buffer[256];
    long totalBytesReceived = 0;
    bool writeOK = true;
    uint8_t first[2] = {0, 0}, last[2] = {0, 0};
    startTime = millis();
    unsigned long lastProgressTime = 0;

    while (totalBytesReceived < imageSize && (millis() - startTime < 15000)) {
        if (Serial2.available()) {
            int availableBytes = Serial2.available();
            if (availableBytes > (int)sizeof(buffer)) {
                availableBytes = sizeof(buffer);
            }
            if (availableBytes > imageSize - totalBytesReceived) {
                availableBytes = imageSize - totalBytesReceived;
            }

            int bytesRead = Serial2.readBytes(buffer, availableBytes);
            if (bytesRead > 0) {
                if (file.write(buffer, bytesRead) != (size_t)bytesRead) { writeOK = false; break; }
                for (int i = 0; i < bytesRead; ++i) {
                    if (totalBytesReceived + i < 2) first[totalBytesReceived + i] = buffer[i];
                    last[0] = last[1]; last[1] = buffer[i];
                }
                totalBytesReceived += bytesRead;
                startTime = millis(); // Reset timeout khi dang nhan du lieu lien tuc
            }
        }

        // In tiến độ mỗi 500ms
        if (millis() - lastProgressTime >= 500) {
            float percent = (float)totalBytesReceived / imageSize * 100.0f;
            cdh.printf("  -> Da nhan: %ld / %ld bytes (%.1f%%)\n", totalBytesReceived, imageSize, percent);
            lastProgressTime = millis();
        }
    }

    // 8. Đóng file và kiểm tra tính toàn vẹn
    file.flush();
    file.close();

    bool success = false;
    // JPEG hợp lệ phải bắt đầu bằng 0xFFD8 (SOI) và kết thúc bằng 0xFFD9 (EOI)
    const bool validJpeg = first[0] == 0xFF && first[1] == 0xD8 && last[0] == 0xFF && last[1] == 0xD9;
    if (!writeOK) {
        Serial2.print("DONE\n");
        cdh.printf("[LOI] Ghi the nho that bai; file %s khong day du.\n", filePath);
    } else if (totalBytesReceived == imageSize && !validJpeg) {
        Serial2.print("DONE\n");
        cdh.printf("[LOI] Du lieu nhan du %ld bytes nhung khong phai JPEG hop le (SOI/EOI).\n", totalBytesReceived);
    } else if (totalBytesReceived == imageSize) {
        Serial2.print("DONE\n");
        Serial2.flush();

        cdh.printf("[THANH CONG] Da luu anh vao the nho: %s\n", filePath);
        cdh.printf("             Tong dung luong: %ld bytes\n", totalBytesReceived);
        success = true;
        sendImageOverSerial(filePath);
    } else {
        cdh.printf("[LOI] Timeout truyen nhan! Chi nhan duoc %ld / %ld bytes.\n", 
                      totalBytesReceived, imageSize);
        success = false;
    }

    return success;
}

void setup() {
    cdh.begin(115200);
    delay(1000);

        cdh.println("   LAB 4-04a: CHUP ANH UART THUAN & LUU VAO THE NHO SD  ");
    
    // Khởi tạo thẻ nhớ MicroSD
    sdReady = initMicroSD();
    if (!sdReady) {
        cdh.println("[CANH BAO] Thao tac ghi file se khong kha dung neu khong co the nho!");
    }

    // Khởi tạo UART2 kết nối với module ESP32-CAM
    Serial2.begin(CAM_BAUD, SERIAL_8N1, CAM_RX_PIN, CAM_TX_PIN);
    cdh.printf("[UART-CAM] UART2 da khoi dong (Baudrate: %d, RX: %d, TX: %d)\n", 
                  CAM_BAUD, CAM_RX_PIN, CAM_TX_PIN);

    cdh.println("[READY] Nhap 'p' tren cdh Monitor de chup anh va luu vao MicroSD.");
}

void loop() {
    // Lắng nghe lệnh từ cdh Monitor
    if (cdh.available()) {
        char cmd = cdh.read();

        // Bỏ qua ký tự xuống dòng
        if (cmd == '\r' || cmd == '\n') {
            return;
        }

        if (cmd == 'p' || cmd == 'P') {
            captureAndSaveToSD();
        } else {
            cdh.printf("[INFO] Ky tu '%c' khong hop le. Vui long nhap 'p' de chup anh.\n", cmd);
        }
    }
}
