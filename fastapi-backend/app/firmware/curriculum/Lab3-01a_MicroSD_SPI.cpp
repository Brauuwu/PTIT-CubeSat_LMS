/**
 * VÍ DỤ 3-1a: GIAO TIẾP THẺ NHỚ BẰNG SPI THUẦN (SD.h)
 */
#include <Arduino.h>
#include <SD.h>
#include <SPI.h>
#include <PTITCube.h>

PTIT_CDH cdh;
PTIT_EPS eps;

#define SD_CS_PIN   13
#define SD_SCK_PIN  18
#define SD_MISO_PIN 19
#define SD_MOSI_PIN 23

bool sdReady = false;

void logData(const char* message) {
    if (!sdReady) return;

    File file = SD.open("/log.txt", FILE_APPEND);
    if (file) {
        file.println(message);
        file.flush();
        file.close();
    }
}

void setup() {
    cdh.begin();

    // Kích hoạt hạ áp cấp nguồn ngoại vi trên PCB vệ tinh qua thư viện EPS
    eps.setBuckState(true);

    SPI.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);
    if (!SD.begin(SD_CS_PIN, SPI, 8000000)) {
        cdh.println("SD: Mount failed");
        return;
    }
    sdReady = true;
    logData("BOOT: PTITCUBE C&DH");
}

void loop() {
    static int counter = 0;
    char buf[64];
    snprintf(buf, sizeof(buf), "Hello World #%d", counter++);
    
    cdh.println(buf);
    logData(buf);

    delay(3000);
}
