// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab5-01_Send_Telemetry/blob/4a5c168f6a445783f3fe3d7de7bc87dca9fc7f06/src/main.cpp
/**
 * VÍ DỤ: VỆ TINH GỬI DỮ LIỆU (TELEMETRY) QUA LORA
 * 
 * Mô tả:
 * Board mạch CubeSat sẽ định kỳ gửi dữ liệu trạng thái (Telemetry) 
 * xuống Trạm mặt đất. Trạm mặt đất sẽ dùng USB-TTL cắm vào máy tính 
 * để nhận sóng LoRa này.
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

PTIT_COM myLoRa;

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[VỆ TINH] Khởi tạo module LoRa phát dữ liệu...");
    myLoRa.init();

    // Cấu hình Kênh và Địa chỉ sử dụng hệ THẬP PHÂN (Decimal) cho dễ hiểu
    // Ví dụ: Kênh 23, Địa chỉ High = 0, Địa chỉ Low = 161
    myLoRa.setChannel(23);
    myLoRa.setAddress(0, 0);
    myLoRa.setTransmissionMode(0); // Chế độ 0 là Transparent (phát tự do)
}

void loop() {
    static int counter = 0;
    counter++;

    String payload = "PACKET #" + String(counter) + " - CUBESAT TELEMETRY DATA";
    
    cdh.print("Đang phát xuống mặt đất: ");
    cdh.println(payload);
    
    myLoRa.sendMessage(payload);

    delay(2000);
}
