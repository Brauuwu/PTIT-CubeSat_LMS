// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab2-02_Power_Saving/blob/fdeeea28f882ec2bf35305b4db547dd1aed34502/src/main.cpp
/**
 * VÍ DỤ 2-2: QUẢN LÝ TIẾT KIỆM NĂNG LƯỢNG - ĐIỀU KHIỂN DÒNG RA/VÀO MẠCH HẠ ÁP
 * 
 * Mô tả:
 * Năng lượng là tài nguyên quý giá nhất trên vệ tinh CubeSat. Trên bo mạch phân hệ
 * năng lượng (EPS), đầu ra của mạch hạ áp (DC-DC Buck Converter) chịu trách nhiệm
 * cấp nguồn 3.3V cho toàn bộ khối tải tiêu thụ ngoại vi.
 * 
 * Nếu duy trì cấp nguồn liên tục cho mạch hạ áp và tải tiêu thụ, dòng rò và công suất
 * tiêu thụ tĩnh sẽ nhanh chóng làm cạn kiệt pin trong vùng tối quỹ đạo (Eclipse).
 * 
 * Sơ đồ điều khiển phần cứng:
 * - Chân điều khiển: ESP32 GPIO 4
 *   + GPIO 4 = Mức 1 (HIGH): Ngắt dòng đi vào hạ áp -> Cắt nguồn tải tiêu thụ đầu ra.
 *   + GPIO 4 = Mức 0 (LOW):  Cho phép dòng đi vào hạ áp -> Cấp nguồn 3.3V cho tải tiêu thụ.
 * 
 * Quy trình thực thi theo chu kỳ (Power Gating / Duty Cycling):
 * 1. Khởi động: Kéo GPIO 4 lên mức 1 để ngắt dòng đi vào hạ áp (Bảo toàn dung lượng pin).
 * 2. Khi đến chu kỳ thu thập: Xuất GPIO 4 mức 0 để cho phép dòng vào hạ áp, cấp nguồn cho tải.
 * 3. Chờ 100ms cho nguồn ổn định, đọc thông số pin (MAX17048) và kiểm tra trạng thái tải.
 * 4. Hoàn tất: Kéo GPIO 4 lên mức 1 để ngắt dòng vào hạ áp, đưa dòng tiêu thụ về 0 mA.
 */

#include <Arduino.h>
#include <PTITCube.h>

// Chân GPIO 4 điều khiển dòng đi vào mạch hạ áp
#define PIN_BUCK_CTRL 4

// Định nghĩa mức logic điều khiển dòng đi vào hạ áp
#define BUCK_POWER_ON   LOW   // Mức 0: Cho phép dòng đi vào hạ áp (Bật nguồn tải)
#define BUCK_POWER_OFF  HIGH  // Mức 1: Ngắt dòng đi vào hạ áp (Cắt nguồn tải)

PTIT_EPS eps;

// Khoảng thời gian nghỉ giữa các chu kỳ (ms)
const unsigned long LOAD_OFF_DURATION = 5000;
// Thời gian giữ nguồn bật để tải khởi động và hoạt động (ms)
const unsigned long LOAD_ON_DURATION  = 1500;

void setBuckConverterState(bool enable) {
    if (enable) {
        digitalWrite(PIN_BUCK_CTRL, BUCK_POWER_ON); // GPIO 4 = 0
        Serial.println("[EPS-BUCK] BAT nguon ha ap 3.3V (GPIO 4=0)");
    } else {
        digitalWrite(PIN_BUCK_CTRL, BUCK_POWER_OFF); // GPIO 4 = 1
        Serial.println("[EPS-BUCK] TAT nguon ha ap (GPIO 4=1)");
    }
}

void setup() {
    Serial.begin(115200);
    while (!Serial) { delay(10); }

        Serial.println("[LAB 2-02] ĐIỀU KHIỂN DÒNG RA/VÀO MẠCH HẠ ÁP QUA GPIO 4");
    
    // Cấu hình GPIO 4 là OUTPUT
    pinMode(PIN_BUCK_CTRL, OUTPUT);
    // Khởi tạo ban đầu: Kéo GPIO 4 lên mức 1 để ngắt dòng đi vào hạ áp
    setBuckConverterState(false);

    // Khởi tạo IC giám sát pin MAX17048 trên phân hệ EPS (Giao tiếp I2C)
    if (!eps.init()) {
        Serial.println("[EPS] Cảnh báo: Không tìm thấy IC MAX17048, kiểm tra đường truyền I2C!");
    } else {
        Serial.println("[EPS] Đã kết nối IC MAX17048 giám sát nhiên liệu pin.");
    }

    Serial.println("[SYSTEM] Bắt đầu chu trình tối ưu hóa năng lượng quỹ đạo...\n");
}

void loop() {
            
    // 1. Cho phép dòng đi vào mạch hạ áp (GPIO 4 = 0) để cấp điện cho tải
    setBuckConverterState(true);

    // 2. Chờ mạch hạ áp ổn định điện áp đầu ra và nạp tụ nguồn (50 - 100 ms)
        delay(100);

    // 3. Đọc dữ liệu trạng thái pin từ IC MAX17048
    eps.update();
    float vcell = eps.getBatteryVoltage();
    float soc   = eps.getBatteryPercent();
    Serial.printf("[EPS] Trạng thái Pin: Điện áp = %.2f V | Dung lượng = %.1f %%\n", vcell, soc);

    // 4. Giả lập hoạt động của tải tiêu thụ khi mạch hạ áp đang cấp nguồn
            
    // Duy trì nguồn trong khoảng thời gian hoạt động định mức
    delay(LOAD_ON_DURATION);

    // 5. Hoàn tất chu kỳ -> Kéo GPIO 4 lên mức 1 để ngắt dòng đi vào hạ áp
        setBuckConverterState(false);

    // 6. Nghỉ trong khoảng thời gian LOAD_OFF_DURATION
    Serial.printf("[SYSTEM] Chuyển sang trạng thái tiết kiệm điện trong %lu ms...\n", LOAD_OFF_DURATION);
        
    delay(LOAD_OFF_DURATION);
}
