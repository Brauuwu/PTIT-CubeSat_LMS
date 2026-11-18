// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-01_Save_To_MicroSD/blob/11d24de76647ec9066e2be3ca6ed0c142c8adca7/src/main.cpp
/**
 * VÍ DỤ: LƯU TRỮ LOG VÀO THẺ NHỚ
 * 
 * Mô tả:
 * Sử dụng phân hệ Storage (Giao tiếp SPI với MicroSD) để ghi log.
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

PTIT_Storage myDisk;

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[EXAMPLE] Khởi tạo thẻ nhớ...");
    myDisk.init();
    
    // Ghi thử một dòng Boot vào log
    myDisk.logData("=============================");
    myDisk.logData("SYSTEM BOOT: CUBESAT V1");
    myDisk.logData("=============================");
}

void loop() {
    static int counter = 0;
    
    String data = "Hello world #" + String(counter) + " - Uptime: " + String(millis()) + "ms";
    cdh.println(data);
    
    myDisk.logData(data.c_str());
    
    counter++;
    delay(3000);
}
