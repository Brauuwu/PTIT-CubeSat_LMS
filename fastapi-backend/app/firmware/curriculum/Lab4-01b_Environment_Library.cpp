/**
 * VÍ DỤ 4-1b: ĐỌC CẢM BIẾN MÔI TRƯỜNG (BMP280) BẰNG THƯ VIỆN PTITCUBE
 */
#include <Arduino.h>
#include <PTITCube.h>

PTIT_CDH cdh;
PTIT_EPS eps;
PTIT_Sensor sensor;

void setup() {
    cdh.begin();

    // Kích hoạt hạ áp nuôi cảm biến qua thư viện EPS
    eps.setBuckState(true);

    sensor.init(true, false, false); // Chỉ bật BMP280
}

void loop() {
    sensor.update();

    float temp = sensor.getTemperature();
    float pres = sensor.getPressure();

    cdh.printf("Temp: %.2f C | Press: %.1f hPa\n", temp, pres);
    delay(2000);
}
