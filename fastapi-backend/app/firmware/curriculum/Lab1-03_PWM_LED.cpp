// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab1-03_PWM_LED/blob/ccf36bf63c7cf6638409eb900fca7c7024a7324b/src/main.cpp
/**
 * VÍ DỤ 1-03: ĐIỀU CHẾ ĐỘ RỘNG XUNG LEDC PWM (BREATHING LED)
 * 
 * Mô tả:
 * - Vi điều khiển ESP32 tích hợp bộ điều khiển LEDC PWM phần cứng 16 kênh độc lập.
 * - Bài thực hành sử dụng LEDC để điều chế độ rộng xung (Duty Cycle) thay đổi
 *   điện áp hiệu dụng cấp cho đèn LED chỉ thị (GPIO 2).
 * - Tạo hiệu ứng đèn thở (Breathing LED): sáng dần lên (Fade In) và tối dần đi (Fade Out).
 * 
 * Cấu hình thông số LEDC:
 * - Chân điều khiển LED: GPIO 2
 * - Kênh PWM (Channel): 0 (trong dải 0 - 15)
 * - Tần số xung (Frequency): 5000 Hz (5 kHz)
 * - Độ phân giải (Resolution): 8-bit (giá trị Duty Cycle từ 0 đến 255)
 */
#include <Arduino.h>

const int LED_PIN = 2;
const int PWM_CHANNEL = 0;
const int PWM_FREQ = 5000;       // Tần số xung 5 kHz
const int PWM_RESOLUTION = 8;    // Độ phân giải 8-bit (0 - 255)

void setup() {
    Serial.begin(115200);
    while (!Serial) { delay(10); }

        Serial.println("[LAB 1-03] ĐIỀU CHẾ XUNG LEDC PWM ĐIỀU KHIỂN ĐỘ SÁNG LED");
    
    // 1. Cấu hình kênh PWM: kênh, tần số và độ phân giải
    ledcSetup(PWM_CHANNEL, PWM_FREQ, PWM_RESOLUTION);

    // 2. Gắn chân GPIO của đèn LED vào kênh PWM vừa cấu hình
    ledcAttachPin(LED_PIN, PWM_CHANNEL);

    Serial.printf("[LEDC] Cấu hình kênh %d: Tần số = %d Hz, Độ phân giải = %d-bit\n", 
                  PWM_CHANNEL, PWM_FREQ, PWM_RESOLUTION);
    Serial.println("[SYSTEM] Bắt đầu chu trình hiệu ứng Breathing LED...\n");
}

void loop() {
    Serial.println("[PWM] >>> Đèn LED sáng dần lên (Fade In)...");
    // Tăng dần độ rộng xung từ 0 (tắt) lên 255 (sáng tối đa)
    for (int duty = 0; duty <= 255; duty++) {
        ledcWrite(PWM_CHANNEL, duty);
        delay(8); // Bước chuyển mượt mà
    }

    delay(200); // Giữ mức sáng tối đa trong 200ms

    Serial.println("[PWM] <<< Đèn LED mờ dần đi (Fade Out)...");
    // Giảm dần độ rộng xung từ 255 về 0
    for (int duty = 255; duty >= 0; duty--) {
        ledcWrite(PWM_CHANNEL, duty);
        delay(8);
    }

    delay(500); // Giữ mức tắt trong 500ms trước khi lặp lại chu trình
}
