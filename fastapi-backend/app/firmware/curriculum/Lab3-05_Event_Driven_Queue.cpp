// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-05_Event_Driven_Queue/blob/e1d3ffdf2811df17635747a8dc54ae25721e5ad8/src/main.cpp
/**
 * LAB 3 - VÍ DỤ 05: KIẾN TRÚC HƯỚNG SỰ KIỆN (EVENT-DRIVEN) & HÀNG ĐỢI FREERTOS QUEUE
 * 
 * Mục tiêu:
 * - Thay vì liên tục thăm dò (Polling) gây lãng phí chu kỳ CPU và năng lượng pin của vệ tinh,
 *   hệ thống chuyển sang kiến trúc Hướng sự kiện (Event-Driven).
 * - Sử dụng hàng đợi FreeRTOS Queue (QueueHandle_t) để truyền thông điệp bất đồng bộ
 *   từ các nguồn phát sự kiện (Event Producers) đến Tác vụ xử lý tập trung (Event Consumer).
 * - Tác vụ xử lý ngủ sâu trong trạng thái Blocked (tiết kiệm điện) cho đến khi có sự kiện xuất hiện.
 * 
 * Các nguồn phát sinh sự kiện (Sử dụng hoàn toàn ngoại vi Lab 1 & Dữ liệu giả lập):
 * 1. Sự kiện Ngắt Nút nhấn (GPIO 4 - Lab 1) mô phỏng tín hiệu khẩn cấp từ công tắc phần cứng.
 * 2. Tác vụ Giám sát Viễn trắc Giả lập (Mock Telemetry Monitor) phát sự kiện cảnh báo khi điện áp/nhiệt độ vượt ngưỡng.
 * 3. Lệnh điều khiển gửi từ trạm mặt đất qua cổng cdh Monitor (UART - Lab 1).
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

#define LED_PIN         2   // LED hiển thị trạng thái (Lab 1)
#define BUTTON_PIN      4   // Nút nhấn phát sinh sự kiện (Lab 1)

// Định nghĩa các loại sự kiện trong hệ thống C&DH
enum EventType {
    EVENT_BUTTON_INTERRUPT,  // Sự kiện ngắt nút nhấn phần cứng
    EVENT_TELEMETRY_ALERT,   // Sự kiện cảnh báo viễn trắc giả lập
    EVENT_COMMAND_RECEIVED   // Sự kiện nhận lệnh từ trạm mặt đất qua cdh
};

// Cấu trúc thông điệp sự kiện được truyền qua FreeRTOS Queue
struct SatelliteEvent {
    EventType type;
    uint32_t  timestamp;     // Thời điểm xảy ra sự kiện (millis)
    int32_t   param;         // Dữ liệu hoặc mã tham số kèm theo
};

// Khai báo handle cho hàng đợi Queue
static QueueHandle_t eventQueue = NULL;

// Biến lưu thời điểm chống rung nút nhấn (Debounce)
static volatile unsigned long lastDebounceTime = 0;

// Trình phục vụ ngắt phần cứng (ISR) cho Nút nhấn GPIO 4
void IRAM_ATTR buttonISR() {
    unsigned long currentTime = millis();
    if (currentTime - lastDebounceTime > 250) { // Chống rung phím 250ms
        lastDebounceTime = currentTime;
        
        SatelliteEvent ev;
        ev.type = EVENT_BUTTON_INTERRUPT;
        ev.timestamp = currentTime;
        ev.param = 1;

        BaseType_t xHigherPriorityTaskWoken = pdFALSE;
        // Đẩy sự kiện vào Queue từ bên trong ngắt ISR
        xQueueSendFromISR(eventQueue, &ev, &xHigherPriorityTaskWoken);
        if (xHigherPriorityTaskWoken == pdTRUE) {
            portYIELD_FROM_ISR();
        }
    }
}

// Producer Task 1: Tác vụ quan trắc viễn trắc giả lập (Chạy chu kỳ 1000ms)
void telemetryMonitorTask(void* pvParameters) {
    for (;;) {
        // Tạo số liệu giả lập: Nhiệt độ mạch C&DH giả lập từ 20 đến 35°C
        int simulatedTemp = 20 + random(0, 16);

        // Ngưỡng cảnh báo nhiệt độ giả lập: > 30°C
        if (simulatedTemp > 30) {
            SatelliteEvent ev;
            ev.type = EVENT_TELEMETRY_ALERT;
            ev.timestamp = millis();
            ev.param = simulatedTemp;

            // Đẩy sự kiện cảnh báo vào Queue
            xQueueSend(eventQueue, &ev, pdMS_TO_TICKS(100));
        }

        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

// Producer Task 2: Tác vụ đọc lệnh từ cổng cdh Monitor (Chạy chu kỳ 100ms)
void serialCommandTask(void* pvParameters) {
    for (;;) {
        if (cdh.available() > 0) {
            char cmd = cdh.read();
            if (cmd != '\r' && cmd != '\n') {
                SatelliteEvent ev;
                ev.type = EVENT_COMMAND_RECEIVED;
                ev.timestamp = millis();
                ev.param = (int32_t)cmd;

                xQueueSend(eventQueue, &ev, pdMS_TO_TICKS(100));
            }
        }
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

// Consumer Task: Tác vụ phân phối và xử lý sự kiện trung tâm (Event Dispatcher)
// Tác vụ này chạy với độ ưu tiên cao nhất, ngủ hoàn toàn khi Queue trống!
void eventDispatcherTask(void* pvParameters) {
    SatelliteEvent receivedEvent;
    static bool ledState = false;

    for (;;) {
        // Chờ nhận sự kiện từ Queue với thời gian chờ vô hạn (portMAX_DELAY)
        // Khi không có sự kiện, Task ở trạng thái BLOCKED, tiêu thụ 0% CPU!
        if (xQueueReceive(eventQueue, &receivedEvent, portMAX_DELAY) == pdTRUE) {
                        cdh.printf("[DISPATCHER] Nhận sự kiện tại t = %lu ms: ", receivedEvent.timestamp);

            switch (receivedEvent.type) {
                case EVENT_BUTTON_INTERRUPT:
                    cdh.println("SỰ KIỆN NÚT NHẤN (GPIO 4)!");
                    cdh.println("[ACTION] Đảo trạng thái LED báo hiệu OBC.");
                    ledState = !ledState;
                    digitalWrite(LED_PIN, ledState ? HIGH : LOW);
                    break;

                case EVENT_TELEMETRY_ALERT:
                    cdh.printf("CẢNH BÁO VIỄN TRẮC! Nhiệt độ C&DH vượt ngưỡng: %d°C\n", receivedEvent.param);
                    cdh.println("[ACTION] Kích hoạt chế độ tản nhiệt mô phỏng (Nháy LED cảnh báo 3 lần).");
                    for (int i = 0; i < 3; i++) {
                        digitalWrite(LED_PIN, HIGH); vTaskDelay(pdMS_TO_TICKS(80));
                        digitalWrite(LED_PIN, LOW);  vTaskDelay(pdMS_TO_TICKS(80));
                    }
                    digitalWrite(LED_PIN, ledState ? HIGH : LOW);
                    break;

                case EVENT_COMMAND_RECEIVED:
                    cdh.printf("LỆNH MẶT ĐẤT NHẬN TỪ SERIAL: '%c' (Mã ASCII: %d)\n", 
                                  (char)receivedEvent.param, receivedEvent.param);
                    cdh.println("[ACTION] Đã phân tích và thực thi mã lệnh thành công.");
                    break;
            }
                    }
    }
}

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    pinMode(LED_PIN, OUTPUT);
    digitalWrite(LED_PIN, LOW);

    // Cấu hình Nút nhấn GPIO 4 với ngắt ngoài (FALLING edge)
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), buttonISR, FALLING);

        cdh.println("   PTITCUBE - LAB 3: EVENT-DRIVEN QUEUE SYSTEM    ");
        cdh.println("[INFO] Khởi tạo Hàng đợi FreeRTOS Queue (Dung lượng 10 sự kiện)...");

    // Tạo hàng đợi chứa tối đa 10 phần tử SatelliteEvent
    eventQueue = xQueueCreate(10, sizeof(SatelliteEvent));
    if (eventQueue == NULL) {
        cdh.println("[LỖI] Không thể khởi tạo FreeRTOS Queue!");
        return;
    }

    cdh.println("[HƯỚNG DẪN TEST]:");
    cdh.println("  1. Nhấn Nút nhấn (GPIO 4): Kích hoạt ngắt phần cứng -> Đảo trạng thái LED.");
    cdh.println("  2. Tác vụ viễn trắc tự động sinh số liệu mỗi 1s; nếu nhiệt độ > 30°C -> Gửi cảnh báo.");
    cdh.println("  3. Gõ ký tự bất kỳ vào cdh Monitor (vd: 'A', '1') -> Gửi lệnh mặt đất.");
    cdh.println("  -> Mọi sự kiện đều được đẩy vào FreeRTOS Queue và xử lý tức thì!");
    cdh.println("==================================================\n");

    // Tạo Consumer Task (Độ ưu tiên 3 - cao nhất)
    xTaskCreatePinnedToCore(eventDispatcherTask, "Dispatcher", 3072, NULL, 3, NULL, 1);

    // Tạo Producer Tasks (Độ ưu tiên 1 và 2)
    xTaskCreatePinnedToCore(telemetryMonitorTask, "TelemMonitor", 2048, NULL, 1, NULL, 1);
    xTaskCreatePinnedToCore(serialCommandTask,    "SerialCmd",    2048, NULL, 2, NULL, 1);
}

void loop() {
    // Để trống. Hệ thống hoàn toàn vận hành theo mô hình hướng sự kiện (Event-Driven).
}
