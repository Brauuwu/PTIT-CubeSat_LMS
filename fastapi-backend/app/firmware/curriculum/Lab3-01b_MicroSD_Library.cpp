/**
 * VÍ DỤ 3-1b: LƯU TRỮ LOG VÀO THẺ NHỚ VỚI THƯ VIỆN PTITCUBE
 */
#include <Arduino.h>
#include <PTITCube.h>

PTIT_CDH cdh;
PTIT_EPS eps;
PTIT_Storage myDisk;

void setup() {
    cdh.begin();

    // Kích hoạt hạ áp cấp nguồn ngoại vi trên PCB vệ tinh qua thư viện EPS
    eps.setBuckState(true);

    myDisk.init();
    myDisk.logData("BOOT: PTITCUBE C&DH");
}

void loop() {
    static int counter = 0;
    
    char buf[64];
    snprintf(buf, sizeof(buf), "Hello World #%d", counter++);
    cdh.println(buf);
    
    myDisk.logData(buf);
    delay(3000);
}
