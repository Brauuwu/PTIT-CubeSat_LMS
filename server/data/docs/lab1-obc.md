# Lab 1: Máy tính trên bo mạch (OBC)

## Mục tiêu
Làm quen với "Bộ não" của vệ tinh CubeSat: vi xử lý ESP32.

## Khái niệm

ESP32 là vi điều khiển mạnh mẽ với 2 nhân (Dual-Core) chạy ở tốc độ 240MHz. Nó đóng vai trò là OBC (On-Board Computer), xử lý mọi tác vụ trên vệ tinh.

Trên vệ tinh, OBC giao tiếp với các module thông qua các chân (Pins):
- **Digital Pins**: Bật/tắt thiết bị (HIGH = Bật, LOW = Tắt).
- **Analog Pins (ADC)**: Đọc giá trị điện áp (0-4095).
- **Giao thức chuẩn**: I2C (Cảm biến), SPI (Thẻ nhớ), UART (LoRa, GPS).

## Hướng dẫn thực hành

1. Chuyển sang tab **💻 Thực hành**.
2. Ở phần Blockly (bên trái), mở mục **🔧 Cơ bản (Arduino)**.
3. Kéo thả khối `pinMode` và chọn chân số 2 (chân LED có sẵn trên ESP32), chế độ `OUTPUT`.
4. Dùng khối `digitalWrite` để bật (`HIGH`) hoặc tắt (`LOW`) chân số 2.
5. Xem mã C++ tự động sinh ra ở khung **Mã nguồn (C++)**.
6. Nhấn **Biên dịch** để hệ thống kiểm tra code.
7. (Tùy chọn) Kết nối mạch qua cáp USB và nhấn **Nạp code**.
