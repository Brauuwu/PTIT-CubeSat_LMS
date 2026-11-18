// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-03_Multitasking_Scheduler/blob/0e0b0a1e21aff76efb419c64091d574d280f0f3b/src/main.cpp
/**
 * LAB 3 - VÍ DỤ 03: ĐA NHIỆM (MULTITASKING) & BẢO VỆ TÀI NGUYÊN BẰNG MUTEX
 * 
 * Mục tiêu:
 * - Sử dụng bộ lập lịch FreeRTOS (thông qua PTIT_Scheduler) để phân chia hệ thống
 *   thành các tác vụ (Tasks) chạy độc lập theo chu kỳ.
 * - Sử dụng khóa Mutex (PTIT_BUS_SERIAL) để bảo vệ tài nguyên dùng chung (cổng cdh),
 *   ngăn chặn hiện tượng xung đột dữ liệu (Race Condition) khi nhiều tác vụ cùng in log.
 * - Sử dụng ngoại vi từ Lab 1 (LED chân GPIO 2) và dữ liệu viễn trắc giả lập (Mock Telemetry).
 *   Tuyệt đối KHÔNG phụ thuộc vào cảm biến hay phần cứng của các bài lab sau.
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

PTIT_Scheduler scheduler;

// Cấu trúc gói tin viễn trắc giả lập (Housekeeping Telemetry Packet)
struct MockTelemetry {
    uint32_t packetId;
    float batteryVoltage; // Điện áp pin giả lập (V)
    float boardTemp;      // Nhiệt độ mạch C&DH giả lập (°C)
    uint32_t uptimeSec;   // Thời gian hoạt động (giây)
};

static MockTelemetry currentTelemetry;

// Task 1: Nhấp nháy LED nhịp tim (Heartbeat LED) - Chạy trên Core 1, chu kỳ 200ms
void ledHeartbeatTask() {
    static bool ledState = false;
    digitalWrite(2, ledState ? HIGH : LOW);
    ledState = !ledState;
}

// Task 2: Sinh dữ liệu viễn trắc giả lập & in log định kỳ - Chạy trên Core 1, chu kỳ 1000ms
void telemetryGeneratorTask() {
    static uint32_t counter = 0;
    counter++;

    // Tạo số liệu giả lập với dao động nhỏ quanh giá trị thực tế
    currentTelemetry.packetId = counter;
    currentTelemetry.batteryVoltage = 3.70 + (float)(random(0, 50)) / 100.0; // 3.70V - 4.20V
    currentTelemetry.boardTemp = 25.0 + (float)(random(0, 60)) / 10.0;       // 25.0°C - 31.0°C
    currentTelemetry.uptimeSec = millis() / 1000;

    // Sử dụng Mutex để xin quyền in ra cdh Monitor an toàn
    if (PTIT_Scheduler::lock(PTIT_BUS_SERIAL, 100)) {
        cdh.printf("[HK-TELEM] Gói #%04u | Pin: %.2fV | Nhiệt độ C&DH: %.1fC | Uptime: %lus\n",
                      currentTelemetry.packetId,
                      currentTelemetry.batteryVoltage,
                      currentTelemetry.boardTemp,
                      currentTelemetry.uptimeSec);
        PTIT_Scheduler::unlock(PTIT_BUS_SERIAL);
    }
}

// Task 3: Tác vụ tự chẩn đoán hệ thống (Diagnostic Task) - Chạy trên Core 0, chu kỳ 3000ms
// Mô phỏng tác vụ nặng, in nhiều dòng log và giữ bus lâu hơn
void systemDiagnosticTask() {
    // Giả lập thời gian tính toán và kiểm tra bộ nhớ NGOÀI vùng khóa Mutex:
    // giữ khóa trong lúc chờ sẽ khiến tác vụ viễn trắc (chờ tối đa 100ms) bị bỏ lượt in.
    delay(200);
    const uint32_t freeHeap = ESP.getFreeHeap();
    if (PTIT_Scheduler::lock(PTIT_BUS_SERIAL, 200)) {
        cdh.println("[DIAGNOSTIC] >>> Bắt đầu tự kiểm tra trạng thái C&DH (Core 0) <<<");
        cdh.printf("[DIAGNOSTIC] Bộ nhớ Heap còn trống: %u bytes\n", freeHeap);
        cdh.printf("[DIAGNOSTIC] Tần số CPU: %u MHz | Chip Model: %s\n", ESP.getCpuFreqMHz(), ESP.getChipModel());
        cdh.println("[DIAGNOSTIC] >>> Hoàn thành kiểm tra - Trạng thái: BÌNH THƯỜNG <<<");
        PTIT_Scheduler::unlock(PTIT_BUS_SERIAL);
    }
}

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    // Khởi tạo chân LED trên bo mạch (GPIO 2 - Lab 1)
    pinMode(2, OUTPUT);
    digitalWrite(2, LOW);

        cdh.println("   PTITCUBE - LAB 3: C&DH MULTITASKING SCHEDULER   ");
        cdh.println("[INFO] Khởi động hệ thống đa nhiệm FreeRTOS với Mutex...");

    // Cấu hình các Task: (Tên, Hàm, Chu kỳ ms, Core, Độ ưu tiên)
    scheduler.addTask("HeartbeatLED", ledHeartbeatTask,        200,  1, 2);
    scheduler.addTask("TelemGen",     telemetryGeneratorTask, 1000, 1, 2);
    scheduler.addTask("SysDiag",      systemDiagnosticTask,   3000, 0, 1); // Chạy trên Core 0

    // Bắt đầu lập lịch FreeRTOS
    scheduler.start();
}

void loop() {
    delay(1000); // Yield the Arduino loop task while scheduler tasks run.
}
