// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-01a_MicroSD_SPI/blob/f915167003c54bab762118d7e168f7aec25d599c/src/main.cpp
/**
 * VÍ DỤ 3-1a: GIAO TIẾP THẺ NHỚ BẰNG SPI THUẦN (SD.h)
 * 
 * Mô tả:
 * Sử dụng thư viện SD gốc (giao tiếp SPI) để ghi log thẻ nhớ.
 * Định nghĩa chuẩn xác chân phần cứng CubeSat: CS=13, SCK=18, MISO=19, MOSI=23.
 * Tích hợp đối tượng cdh (PTIT_CDH) chuẩn hóa phân hệ C&DH.
 */

#include <Arduino.h>
#include <SD.h>
#include <SPI.h>
#include <PTITCube.h>

PTIT_CDH cdh;

#define SD_CS_PIN   13
#define SD_SCK_PIN  18
#define SD_MISO_PIN 19
#define SD_MOSI_PIN 23

bool sdReady = false;

// Trả về true chỉ khi toàn bộ dòng (kể cả ký tự xuống dòng) đã được ghi xuống thẻ nhớ.
bool logData(const char* data) {
    if (!sdReady) return false;
    File file = SD.open("/log.txt", FILE_APPEND);
    if (!file) {
        cdh.println("[SD] Open /log.txt failed");
        return false;
    }
    const size_t expected = strlen(data) + 2;
    const size_t written = file.println(data);
    file.close();
    if (written != expected) {
        cdh.printf("[SD] Short write: %u/%u bytes\n", (unsigned)written, (unsigned)expected);
        return false;
    }
    return true;
}

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("[CDH] MicroSD SPI Init");
    SPI.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

    if (!SD.begin(SD_CS_PIN, SPI, 8000000)) {
        cdh.println("[SD] Mount failed");
        sdReady = false;
        return;
    }

    cdh.printf("[SD] OK. Total: %llu MB, Used: %llu MB\n", 
               SD.totalBytes() / (1024 * 1024), 
               SD.usedBytes() / (1024 * 1024));
    sdReady = true;

    logData("BOOT: PTITCUBE C&DH");
}

void loop() {
    static int counter = 0;
    char buf[64];
    snprintf(buf, sizeof(buf), "[DATA] #%d | Uptime: %lums", counter++, millis());
    
    cdh.println(buf);
    if (sdReady) cdh.println(logData(buf) ? "[SD] Saved to /log.txt" : "[SD] Write failed; entry not saved");

    delay(3000);
}
