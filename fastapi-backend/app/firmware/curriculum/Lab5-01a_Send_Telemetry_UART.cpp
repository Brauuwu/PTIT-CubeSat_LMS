// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab5-01a_Send_Telemetry_UART/blob/8656aa9766a8d7f229b3da1f366b3a49a65dcf74/src/main.cpp
/**
 * VÍ DỤ 5-1a: GỬI DỮ LIỆU TẦM XA BẰNG MODULE LORA (UART THUẦN)
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

    cdh.println("\n[VỆ TINH] Khởi tạo module LoRa phát dữ liệu...");
    // Chân theo thư viện PTIT_COM: UART1 RX26/TX25, M0=32, M1=33, AUX=27 (GPIO35 chỉ là ngõ vào, không lái được M1)
    Serial1.begin(9600, SERIAL_8N1, LORA_RX, LORA_TX);
    Serial1.setTimeout(100);
    pinMode(LORA_AUX, INPUT);
    
    // Cấu hình chân Mode (M0=0, M1=0: Chế độ hoạt động bình thường Transparent Mode)
    pinMode(LORA_M0, OUTPUT);
    pinMode(LORA_M1, OUTPUT);
    digitalWrite(LORA_M0, LOW);
    digitalWrite(LORA_M1, LOW);

    cdh.println("[COM] LoRa Module OK");
}

void loop() {
    static int counter = 0;
    counter++;

    String payload = "PACKET #" + String(counter) + " - CUBESAT TELEMETRY DATA";
    
    cdh.print("Đang phát xuống mặt đất: ");
    cdh.println(payload);
    
    // Đẩy chuỗi vào UART1 (LoRa) khi module rảnh (AUX = HIGH)
    const uint32_t started = millis();
    while (digitalRead(LORA_AUX) == LOW && millis() - started < 1000) delay(1);
    if (digitalRead(LORA_AUX) == HIGH) Serial1.println(payload);
    else cdh.println("[WARNING] LoRa AUX busy; TX skipped, no reception confirmed.");
    
    delay(2000);
}

