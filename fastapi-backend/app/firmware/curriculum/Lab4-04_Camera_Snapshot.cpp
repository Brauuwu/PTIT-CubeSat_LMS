// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-04_Camera_Snapshot/blob/7ce21ac459b7eb6d96bdb7603b67803ba6b12053/src/main.cpp
// Lab4-04: OBC MUX pins 12/14; send p to capture. Preserve existing SD images.
// Source: https://github.com/PTITCube/Lab4-04_Camera_Snapshot
/**
 * @file 1_Capture_To_SD.cpp
 * @brief Ví dụ cơ bản về khởi tạo Camera và chụp ảnh lưu vào thẻ MicroSD.
 * 
 * Mô tả:
 * - Khởi tạo module ESP32-CAM và thẻ nhớ MicroSD.
 * - Khi nhận p/P qua Serial, chụp một bức ảnh và lưu vào thẻ nhớ với tên 
 *   tuần tự (VD: /photos/image_0.jpg, /photos/image_1.jpg).
 * 
 * Lưu ý: 
 * - Đảm bảo chân CS của thẻ nhớ đã được cấu hình đúng (Mặc định: GPIO 13).
 */

#include <Arduino.h>

#include <PTITCube.h>
#include <SD.h>

PTIT_CDH cdh;

PTIT_Camera camera;
int imageCount = 0;

void setup() {
    cdh.begin(115200);
    delay(2000);
    
    cdh.println("\n--- CAMERA / SD INITIALIZATION ---");

    if (!camera.init(12, 14)) {
        cdh.println("[Loi] Khong the khoi tao the nho!");
        cdh.println("[SD] Kiem tra the; gui p de thu mount/chup lai.");
    }

    cdh.println("[OK] Nhap 'p' de chup anh.");
}

void loop() {
    if (cdh.available() > 0) {
        char command = cdh.read();

        if (command == 'p' || command == 'P') {
            String path;
            do { path = "/photos/image_" + String(imageCount++) + ".jpg"; } while (SD.exists(path.c_str()));
            cdh.println("[Camera] Dang chup: " + path);

            if (camera.captureToFile(path.c_str())) {
                cdh.println("[OK] Da luu anh: " + path);

            } else {
                cdh.println("[Loi] Chup anh that bai.");
            }
        }

        // Consume CR/LF from the same cdh Monitor command.
        while (cdh.available() > 0) {
            char trailing = cdh.peek();
            if (trailing != '\r' && trailing != '\n') {
                break;
            }
            cdh.read();
        }
    }
    delay(5);
}
