// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-03a_GPS_UART/blob/233fe53980255406268c2834bf33fe2a4772120a/src/main.cpp
/**
 * LAB 4 - VÍ DỤ 03a: ĐỌC DỮ LIỆU ĐỊNH VỊ NMEA THÔ BẰNG UART THUẦN
 * 
 * Mục tiêu:
 * - Khởi tạo cổng truyền thông nối tiếp phần cứng UART2 (GPIO 16 RX / GPIO 17 TX)
 *   với tốc độ baud chuẩn của module GPS là 9600 bps.
 * - Điều khiển chân MUX 74HC4066 (chọn GPS: GPIO 12 HIGH, ngắt Camera: GPIO 14 LOW).
 * - Đọc trực tiếp từng byte ký tự ASCII từ module GPS và in thẳng ra cdh Monitor.
 * - Đầu ra hiển thị trực tiếp các dòng câu tin NMEA 0183 thô ($GNRMC, $GNGGA, $GNVTG, $GNGSA, $GNGSV).
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

// GPS kết nối vào UART2 trên ESP32
#define GPS_RX 16
#define GPS_TX 17
#define GPS_BAUD 9600

// Chân điều khiển IC chuyển mạch MUX 74HC4066 (chọn GPS, ngắt Camera)
#define MUX_GPS_PIN 12
#define MUX_CAM_PIN 14

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    // Cấu hình chuyển mạch MUX: Break-Before-Make để bảo vệ đường UART
    pinMode(MUX_GPS_PIN, OUTPUT);
    pinMode(MUX_CAM_PIN, OUTPUT);
    digitalWrite(MUX_CAM_PIN, LOW);   // 1. Tắt Camera trước
    delayMicroseconds(50);
    digitalWrite(MUX_GPS_PIN, HIGH);  // 2. Mở kết nối GPS sau

        cdh.println("  PTITCUBE - LAB 4-03a: ĐỌC NMEA THÔ BẰNG UART2   ");
        cdh.println("[INFO] Đang khởi tạo UART2 ở tốc độ 9600 baud...");
    cdh.println("[INFO] Bắt đầu đọc luồng byte NMEA thô từ module GPS...");
    cdh.println("[INFO] Dang doc luong NMEA tho...");

    cdh.println("\n[RAW] Đọc dữ liệu NMEA trực tiếp từ module GPS qua UART2...");
    
    // Khởi tạo Serial2 cho GPS
    pinMode(12, OUTPUT); pinMode(14, OUTPUT);
    digitalWrite(12, HIGH); digitalWrite(14, LOW); // Select GPS on PTIT OBC MUX.
    Serial2.begin(GPS_BAUD, SERIAL_8N1, GPS_RX, GPS_TX);
}

void loop() {
    // Đọc byte thô trực tiếp từ GPS và in thẳng ra cdh màn hình
    while (Serial2.available() > 0) {
        char c = (char)Serial2.read();
        cdh.print(c);
    }
    delay(1);
}
