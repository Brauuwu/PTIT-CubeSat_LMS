// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab2-01_Detect_Battery_Voltage/blob/c7f92b12185ebccd9af2ff5d60508dd48d61688e/src/main.cpp
/**
 * VÍ DỤ 2-1: KIỂM TRA PHÂN HỆ NGUỒN (EPS) - ĐO ĐIỆN ÁP PIN
 * 
 * Mô tả:
 * Ví dụ này minh họa cách đọc điện áp Pin (Li-ion/Li-po) của vệ tinh qua
 * IC đo nhiên liệu MAX17048 (I2C 0x36) bằng lớp PTIT_EPS của thư viện PTITCube.
 * Qua đó, mạch có thể tự động đưa ra các quyết định ngắt nguồn hoặc sạc.
 */

#include <Arduino.h>
#include <PTITCube.h>

// KHAI BÁO ĐỐI TƯỢNG PHÂN HỆ NGUỒN
PTIT_EPS myBattery;

void setup() {
    Serial.begin(115200);
    while (!Serial) { delay(10); }

    Serial.println("\n[EXAMPLE] Bắt đầu bài test Phân hệ Nguồn (EPS)...");

    // Khởi tạo đối tượng
    myBattery.init();
    
    
}

void loop() {
    // Đọc điện áp thực tế của Pin thông qua phương thức của đối tượng myBattery
    float voltage = myBattery.getBatteryVoltage();
    
    // Đóng gói thông tin
    String logString = "[Uptime: " + String(millis() / 1000) + "s] ";
    logString += "Battery Voltage: " + String(voltage, 2) + "V";

    // Hiển thị ra màn hình
    Serial.println(logString);

    // Cảnh báo nếu pin yếu
    if (voltage < 3.2 && voltage > 1.0) {
        Serial.println(" ---> [WARNING] Điện áp pin quá thấp. Hệ thống nên chuyển sang chế độ tiết kiệm pin!");
    } else if (voltage > 4.1) {
        Serial.println(" ---> [INFO] Pin đầy.");
    }

    // Đợi 2 giây trước khi đọc lần tiếp theo
    delay(2000);
}
