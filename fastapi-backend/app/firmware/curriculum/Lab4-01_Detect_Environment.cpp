// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-01_Detect_Environment/blob/a85ab2534b7905e7a722b13f045f47bdd328a1c8/src/main.cpp
/**
 * VÍ DỤ 4-1: ĐỌC CẢM BIẾN MÔI TRƯỜNG (BMP280)
 * 
 * Mô tả:
 * Ví dụ này minh họa cách giao tiếp với cảm biến áp suất và nhiệt độ BMP280 
 * thông qua chuẩn giao tiếp I2C bằng thư viện PTITCube.
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

// Khởi tạo đối tượng cảm biến
PTIT_Sensor mySensor;

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[EXAMPLE] Bắt đầu bài test Cảm biến Môi trường (BMP280)...");
    
    // Hàm init() sẽ tự động kết nối với BMP280, MPU6500 và QMC5883 qua I2C
    mySensor.init(true, false, false);
}

void loop() {
    // Phải gọi update() liên tục để cập nhật giá trị mới nhất từ các cảm biến
    mySensor.update();

    static unsigned long lastPrint = 0;
    if (millis() - lastPrint > 2000) {
        lastPrint = millis();
        
                float temp = mySensor.getTemperature();
        float pres = mySensor.getPressure();

        cdh.print("Nhiệt độ (Temperature) : ");
        cdh.print(temp);
        cdh.println(" *C");
        
        cdh.print("Áp suất (Pressure)     : ");
        cdh.print(pres); // PTIT_Sensor::getPressure() already returns hPa
        cdh.println(" hPa");
    }
}
