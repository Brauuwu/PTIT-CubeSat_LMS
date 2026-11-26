/**
 * VÍ DỤ 2-1b: QUẢN LÝ PHÂN HỆ NGUỒN (EPS) VỚI THƯ VIỆN PTITCUBE (MAX17048)
 */
#include <Arduino.h>
#include <PTITCube.h>

PTIT_EPS eps;

const float LOW_VOLTAGE_THRESHOLD = 3.70f;  // Dưới 3.70V
const float LOW_SOC_THRESHOLD     = 25.0f;  // Hoặc dưới 25% dung lượng

void setup() {
    Serial.begin(115200);
    eps.init();
}

void loop() {
    eps.update();

    bool connected   = eps.isConnected();
    float voltage    = connected ? eps.getBatteryVoltage()  : 0.0f;
    float percent    = connected ? eps.getBatteryPercent()  : 0.0f;
    float chargeRate = connected ? eps.getChargeRate()      : 0.0f;

    // Điều kiện tiết kiệm năng lượng: Chưa bật/tắt vệ tinh (!connected) hoặc pin yếu
    bool isLowPower = !connected || (voltage < LOW_VOLTAGE_THRESHOLD) || (percent < LOW_SOC_THRESHOLD);

    if (isLowPower) {
        eps.setBuckState(false);
        Serial.printf("EPS: Power Saving Mode (V: %.2fV, SOC: %.1f%%)\n", voltage, percent);
        delay(3000);
    } else {
        eps.setBuckState(true);
        Serial.printf("V: %.3f V | SOC: %.1f %% | Rate: %+.2f %%/h\n", voltage, percent, chargeRate);
        delay(2000);
    }
}
