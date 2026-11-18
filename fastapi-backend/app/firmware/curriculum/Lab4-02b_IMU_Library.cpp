// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-02b_IMU_Library/blob/a77fd33fe9c8a2a085ebc51fe9b8796730265d53/src/main.cpp
// Source: https://github.com/PTITCube/Lab4-02b_IMU_Library (local corrected example)
/**
 * VÍ DỤ 4-2: ĐỌC DỮ LIỆU CẢM BIẾN QUÁN TÍNH 9 TRỤC (IMU 9-DOF)
 * 
 * Mô tả:
 * Ví dụ này minh họa cách thu thập toàn bộ dữ liệu 9 trục từ cảm biến:
 * - 3 trục Gia tốc (Accelerometer - MPU6500)
 * - 3 trục Con quay hồi chuyển (Gyroscope - MPU6500)
 * - 3 trục La bàn từ trường (Magnetometer - QMC5883P)
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

PTIT_Sensor mySensor;

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[EXAMPLE] Bắt đầu bài test Cảm biến Quán tính 9 trục (IMU)...");
    mySensor.init(false, true, true);
}

void loop() {
    // Phải gọi update() liên tục để lấy giá trị mới nhất
    mySensor.update();

    static unsigned long lastPrint = 0;
    if (millis() - lastPrint > 1000) {
        lastPrint = millis();
        
        float ax = mySensor.getAccX();
        float ay = mySensor.getAccY();
        float az = mySensor.getAccZ();
        float gx = mySensor.getGyroX();
        float gy = mySensor.getGyroY();
        float gz = mySensor.getGyroZ();
        // PTIT_Sensor trả từ trường theo Gauss; 1 Gauss = 100 microTesla (uT)
        float mx = mySensor.getMagX() * 100.0f;
        float my = mySensor.getMagY() * 100.0f;
        float mz = mySensor.getMagZ() * 100.0f;

        // Tính Góc nghiêng (Roll & Pitch)
        float roll = atan2(ay, az) * 180.0 / PI;
        float pitch = atan2(-ax, sqrt(ay * ay + az * az)) * 180.0 / PI;

        // Tính góc hướng La bàn
        float heading = atan2(my, mx) * 180.0 / PI;
        if (heading < 0) heading += 360.0;

                
        // 1. Dữ liệu Gia tốc (m/s^2)
        cdh.println(">>> GIA TỐC (ACCELEROMETER) <<<");
        cdh.printf("  X: %6.2f m/s^2 | Y: %6.2f m/s^2 | Z: %6.2f m/s^2\n", 
                      ax, ay, az);

        // 2. Dữ liệu Vận tốc góc (rad/s)
        cdh.println(">>> CON QUAY HỒI CHUYỂN (GYROSCOPE) <<<");
        cdh.printf("  X: %6.2f rad/s | Y: %6.2f rad/s | Z: %6.2f rad/s\n", 
                      gx, gy, gz);

        // 3. Góc nghiêng (Tilt Angle)
        cdh.println(">>> GÓC NGHIÊNG (TILT ANGLE) <<<");
        cdh.printf("  Roll (Lắc ngang)  : %6.2f° | Pitch (Chúc/Ngóc) : %6.2f°\n", 
                      roll, pitch);

        // 4. Dữ liệu Từ trường (uT) & La bàn (Heading)
        cdh.println(">>> LA BÀN TỪ TRƯỜNG (MAGNETOMETER) <<<");
        cdh.printf("  X: %6.2f uT    | Y: %6.2f uT    | Z: %6.2f uT    | Heading: %6.2f°\n", 
                      mx, my, mz, heading);
        
    
    }
}
