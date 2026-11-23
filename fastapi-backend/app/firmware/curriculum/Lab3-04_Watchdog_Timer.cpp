/**
 * VÍ DỤ 3-04: GIÁM SÁT HỆ THỐNG VỚI WATCHDOG TIMER & TỰ PHỤC HỒI
 */
#include <Arduino.h>
#include <PTITCube.h>

PTIT_CDH cdh;

#define LED_PIN         2
#define BUTTON_PIN      4
#define WDT_TIMEOUT_SEC 3

static volatile bool simulateFault = false;

void heartbeatTask(void* pvParameters) {
    cdh.wdtAdd();
    bool ledState = false;

    for (;;) {
        if (!simulateFault) {
            cdh.wdtFeed();
            ledState = !ledState;
            digitalWrite(LED_PIN, ledState);
        } else {
            cdh.println("WDT: Treo he thong! Ngung feed WDT -> Tu dong khoi dong lai sau 3s...");
            digitalWrite(LED_PIN, HIGH);
            while (1) delay(100);
        }
        cdh.delayMs(500);
    }
}

void faultMonitorTask(void* pvParameters) {
    for (;;) {
        if (digitalRead(BUTTON_PIN) == LOW) {
            simulateFault = true;
        }
        if (cdh.available() > 0) {
            String cmd = cdh.readStringUntil('\n');
            cmd.trim();
            if (cmd.equalsIgnoreCase("fault") || cmd.equalsIgnoreCase("freeze") || cmd.equalsIgnoreCase("f")) {
                simulateFault = true;
            }
        }
        cdh.delayMs(100);
    }
}

void setup() {
    cdh.begin();

    pinMode(LED_PIN, OUTPUT);
    pinMode(BUTTON_PIN, INPUT_PULLUP);

    cdh.printf("BOOT: Nguyen nhan khoi dong: %s\n", 
               cdh.wasWatchdogReset() ? "Task Watchdog Reset (TWDT da tu phuc hoi)" : "Normal Power-on/Reset");

    cdh.wdtInit(WDT_TIMEOUT_SEC);

    cdh.createTask(heartbeatTask,    "HeartbeatWDT", 2048, 2);
    cdh.createTask(faultMonitorTask, "FaultMonitor", 2048, 1);
}

void loop() {
}
