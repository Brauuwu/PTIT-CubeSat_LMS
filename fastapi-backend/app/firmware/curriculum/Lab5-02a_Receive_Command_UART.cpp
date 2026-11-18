// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab5-02a_Receive_Command_UART/blob/12b36c92b2a01978841254e225274c7462113ecb/src/main.cpp
/**
 * VÍ DỤ 5-2a: NHẬN DỮ LIỆU TẦM XA TỪ LORA (UART THUẦN)
 */
#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

// Chân giao tiếp với module LoRa E32
#define LORA_RX 26
#define LORA_TX 25
#define LORA_M0 32
#define LORA_M1 33
#define LORA_AUX 27 // GPIO35 is input-only on ESP32 and cannot drive M1.

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[VỆ TINH] Khởi tạo module LoRa chờ nhận lệnh...");
    // Chân theo thư viện PTIT_COM: UART1 RX26/TX25, M0=32, M1=33, AUX=27 (GPIO35 chỉ là ngõ vào, không lái được M1)
    Serial1.begin(9600, SERIAL_8N1, LORA_RX, LORA_TX);
    Serial1.setTimeout(100);
    pinMode(LORA_AUX, INPUT);
    
    // Cấu hình chân Mode (M0=0, M1=0: Chế độ hoạt động bình thường)
    pinMode(LORA_M0, OUTPUT);
    pinMode(LORA_M1, OUTPUT);
    digitalWrite(LORA_M0, LOW);
    digitalWrite(LORA_M1, LOW);

    cdh.println("[COM] LoRa Module OK");
    cdh.println("[VỆ TINH] Đang lắng nghe lệnh từ trạm mặt đất...");
}

void loop() {
    // Kiểm tra xem có dữ liệu đến từ sóng không gian hay không
    if (Serial1.available() > 0) {
        String data = Serial1.readStringUntil('\n');
        data.trim();
        cdh.print("[COM] Nhận được tin nhắn LoRa: ");
        cdh.println(data);
    }
    delay(2);
}

