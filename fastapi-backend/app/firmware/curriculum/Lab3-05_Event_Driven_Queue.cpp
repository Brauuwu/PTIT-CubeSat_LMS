/**
 * VÍ DỤ 3-05: KIẾN TRÚC HƯỚNG SỰ KIỆN (EVENT-DRIVEN) VỚI FREERTOS QUEUE
 */
#include <Arduino.h>
#include <PTITCube.h>

PTIT_CDH cdh;

#define LED_PIN    2
#define BUTTON_PIN 5   // Chân nút nhấn ngoài GPIO 5 (tránh GPIO 4 - chân Buck nguồn cảm biến)

enum EventType {
    EVENT_BUTTON,
    EVENT_TEMP_ALERT,
    EVENT_COMMAND
};

struct SystemEvent {
    EventType type;
    uint32_t timestamp;
    int32_t value;
};

PTIT_Queue<SystemEvent> eventQueue;

void IRAM_ATTR buttonISR() {
    SystemEvent evt = { EVENT_BUTTON, millis(), 0 };
    eventQueue.sendFromISR(&evt);
}

void sensorTask(void* pvParameters) {
    for (;;) {
        cdh.delayMs(1000);
        int temp = random(20, 35);
        if (temp > 30) {
            SystemEvent evt = { EVENT_TEMP_ALERT, millis(), temp };
            eventQueue.send(&evt);
        }
    }
}

void serialTask(void* pvParameters) {
    for (;;) {
        if (cdh.available() > 0) {
            String str = cdh.readStringUntil('\n');
            str.trim();
            if (str.length() > 0) {
                SystemEvent evt = { EVENT_COMMAND, millis(), str[0] };
                eventQueue.send(&evt);
            }
        }
        cdh.delayMs(50);
    }
}

void dispatcherTask(void* pvParameters) {
    SystemEvent evt;
    bool ledState = false;

    for (;;) {
        if (eventQueue.receive(&evt)) {
            switch (evt.type) {
                case EVENT_BUTTON:
                    ledState = !ledState;
                    digitalWrite(LED_PIN, ledState);
                    cdh.printf("Event: Button (t=%lums) -> LED: %s\n", evt.timestamp, ledState ? "ON" : "OFF");
                    break;
                case EVENT_TEMP_ALERT:
                    cdh.printf("Event: Temp Alert: %d C (t=%lums)\n", evt.value, evt.timestamp);
                    break;
                case EVENT_COMMAND:
                    cdh.printf("Event: Cmd: '%c' (t=%lums)\n", (char)evt.value, evt.timestamp);
                    break;
            }
        }
    }
}

void setup() {
    cdh.begin();

    pinMode(LED_PIN, OUTPUT);
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), buttonISR, FALLING);

    eventQueue.init(10);

    cdh.createTask(dispatcherTask, "Dispatcher", 2048, 3);
    cdh.createTask(sensorTask,     "Sensor",     2048, 1);
    cdh.createTask(serialTask,     "Serial",     2048, 2);
}

void loop() {
}
