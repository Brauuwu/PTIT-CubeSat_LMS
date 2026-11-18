#ifndef CDH_H
#define CDH_H

#include <Arduino.h>
#include <Stream.h>
#include <type_traits>

// The console port type differs per board: HardwareSerial on ESP32 (UART0),
// HWCDC/USBCDC on ESP32-S3 when ARDUINO_USB_CDC_ON_BOOT=1. Upstream v1.1.0 hard-codes
// HardwareSerial&, which does not compile on ESP32-S3.
using PTIT_ConsoleSerial = std::remove_reference<decltype(Serial)>::type;

/**
 * @class PTIT_CDH
 * @brief Phân hệ Xử lý Dữ liệu và Lệnh điều khiển (Command and Data Handling).
 *
 * PTIT_CDH kế thừa từ Stream (và Print) để đóng gói toàn bộ các phương thức
 * giao tiếp dữ liệu nối tiếp của Serial (print, println, printf, read, write, available, v.v.),
 * giúp ẩn phần cứng Serial bên dưới và chuẩn hóa giao tiếp trong hệ thống PTITCube.
 */
class PTIT_CDH : public Stream {
private:
    PTIT_ConsoleSerial& _serial;

public:
    PTIT_CDH(PTIT_ConsoleSerial& serial = Serial);

    // Khởi tạo WiFi, MQTT và vòng lặp phân hệ CDH
    void init();
    void update();
    void publishData(const char* topic, const char* payload);

    // Các phương thức quản lý cổng Serial của OBC
    void begin(unsigned long baud = 115200);
    // On a USB CDC console the frame/pin arguments do not apply and are ignored.
    void begin(unsigned long baud, uint32_t config, int8_t rxPin = -1, int8_t txPin = -1,
               bool invert = false, unsigned long timeout_ms = 20000UL, uint8_t rxfifo_full_thrhd = 112);
    void end();
    operator bool() const;

    // Stream interface
    int available() override;
    int read() override;
    int peek() override;
    void flush() override;

    // Print interface
    size_t write(uint8_t c) override;
    size_t write(const uint8_t *buffer, size_t size) override;
    using Print::write;
};

#endif
