// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-01b_MicroSD_Library/blob/985ba8bbeab459aaf8dee0e0f793db3d64c53cd6/src/main.cpp
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
    const bool bootSaved = myDisk.appendFile("/datalog.txt", "=== SYSTEM BOOT: CUBESAT V1 ===\n");
    cdh.println(bootSaved ? "[SD] log saved" : "[SD] log write failed/not ready");
}

void loop() {
    static int counter = 0;
    
    String data = "Hello world #" + String(counter) + " - Uptime: " + String(millis()) + "ms";
    cdh.println(data);
    
    const String line = data + "\n";
    const bool saved = myDisk.appendFile("/datalog.txt", line.c_str());
    cdh.println(saved ? "[SD] log saved" : "[SD] log write failed/not ready");
    
    counter++;
    delay(3000);
}
