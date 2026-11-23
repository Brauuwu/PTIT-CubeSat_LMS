/**
 * LAB 7-01: TÍCH HỢP HỆ THỐNG VỆ TINH TOÀN DIỆN (HEPTA-SAT PATTERN)
 * Tích hợp: C&DH, EPS, Sensor, GPS, Camera, Storage, COM (LoRa Chunking).
 */
#include <Arduino.h>
#include <ArduinoJson.h>
#include <PTITCube.h>

PTIT_CDH cdh;
PTIT_EPS eps;
PTIT_Sensor sensor;
PTIT_GPS gps;
PTIT_Camera camera;
PTIT_Storage storage;
PTIT_COM com;

// Ngưỡng bảo vệ nguồn & Chế độ tiết kiệm năng lượng
const float VOLTAGE_LOW_THRES   = 3.5;  // V
const float VOLTAGE_HIGH_THRES  = 3.7;  // V
const float PERCENT_LOW_THRES   = 20.0; // %
const float PERCENT_HIGH_THRES  = 25.0; // %
bool isPowerSaving = false;

unsigned long lastTelemetryTime = 0;
const unsigned long TELEMETRY_INTERVAL = 3000;

void check_power_mode() {
    float vbat = eps.getBatteryVoltage();
    float pct  = eps.getBatteryPercentage();

    if (!isPowerSaving && (vbat < VOLTAGE_LOW_THRES || pct < PERCENT_LOW_THRES)) {
        isPowerSaving = true;
        eps.setBuckState(false);
        cdh.println("Power saving mode ENABLED (Low battery). Sensors, camera and storage disabled.");
        com.sendMessage("ALERT: Power saving mode ENABLED");
    } else if (isPowerSaving && vbat > VOLTAGE_HIGH_THRES && pct > PERCENT_HIGH_THRES) {
        isPowerSaving = false;
        eps.setBuckState(true);
        cdh.println("Power saving mode DISABLED (Battery recovered). All subsystems active.");
        com.sendMessage("ALERT: Power saving mode DISABLED");
    }
}

void downlink_hk_data() {
    eps.update();
    check_power_mode();

    camera.selectGPS();
    gps.update();

    if (!isPowerSaving) {
        sensor.update();

        // 1. Snapshot JSON cho Serial C&DH và Thẻ nhớ SD
        JsonDocument doc;
        JsonObject epsObj = doc["eps"].to<JsonObject>();
        epsObj["v"]    = eps.getBatteryVoltage();
        epsObj["pct"]  = eps.getBatteryPercentage();
        epsObj["rate"] = eps.getChargeRate();

        JsonObject envObj = doc["env"].to<JsonObject>();
        envObj["temp"]  = sensor.getTemperature();
        envObj["press"] = sensor.getPressure();

        JsonObject imuObj = doc["imu"].to<JsonObject>();
        imuObj["roll"]    = sensor.getRoll();
        imuObj["pitch"]   = sensor.getPitch();
        imuObj["yaw"]     = sensor.getHeading();
        imuObj["ax_ms2"]  = sensor.getAccX();
        imuObj["ay_ms2"]  = sensor.getAccY();
        imuObj["az_ms2"]  = sensor.getAccZ();
        imuObj["gx_rads"] = sensor.getGyroX();
        imuObj["gy_rads"] = sensor.getGyroY();
        imuObj["gz_rads"] = sensor.getGyroZ();

        if (gps.hasFix()) {
            JsonObject gpsObj = doc["gps"].to<JsonObject>();
            gpsObj["lat"]  = gps.getLatitude();
            gpsObj["lng"]  = gps.getLongitude();
            gpsObj["alt"]  = gps.getAltitude();
            gpsObj["sats"] = gps.getSatellites();
        }

        String telem;
        serializeJson(doc, telem);
        cdh.printf("[TELEM] %s\n", telem.c_str());
        storage.appendFile("/datalog.txt", (telem + "\n").c_str());
        cdh.println("[SD] Telemetry saved");

        // 2. Chia nhỏ HK Telemetry thành các Chunk (< 58 bytes) truyền qua LoRa
        String chunks[] = {
            "{\"eps\":{\"v\":" + String(eps.getBatteryVoltage(), 2) + ",\"pct\":" + String(eps.getBatteryPercentage(), 1) + "}}",
            "{\"env\":{\"temp\":" + String(sensor.getTemperature(), 2) + ",\"press\":" + String(sensor.getPressure(), 2) + "}}",
            "{\"imu\":{\"roll\":" + String(sensor.getRoll(), 1) + ",\"pitch\":" + String(sensor.getPitch(), 1) + ",\"head\":" + String(sensor.getHeading(), 1) + "}}",
            gps.hasFix() ? ("{\"gps\":{\"lat\":" + String(gps.getLatitude(), 5) + ",\"lng\":" + String(gps.getLongitude(), 5) + "}}") : ""
        };
        for (const auto& c : chunks) {
            if (c.length() > 0) {
                com.sendMessage(c);
                delay(100);
            }
        }
    } else {
        // Chế độ Power Saving: Cảm biến và Storage bị tắt, chỉ giữ LoRa và GPS
        String epsChunk = "{\"eps\":{\"v\":" + String(eps.getBatteryVoltage(), 2) + ",\"pct\":" + String(eps.getBatteryPercentage(), 1) + ",\"pwr_save\":true}}";
        cdh.printf("[TELEM] %s\n", epsChunk.c_str());
        com.sendMessage(epsChunk);
        delay(100);

        if (gps.hasFix()) {
            String gpsChunk = "{\"gps\":{\"lat\":" + String(gps.getLatitude(), 5) + ",\"lng\":" + String(gps.getLongitude(), 5) + "}}";
            com.sendMessage(gpsChunk);
            delay(100);
        }
    }
}

void handle_command(char cmd) {
    cdh.printf("Received command: %c\n", cmd);
    com.sendMessage("ACK: " + String(cmd));

    switch (cmd) {
        case 'a': // Beacon test (LoRa hoạt động bình thường)
            for (uint8_t i = 0; i < 5; i++) {
                com.sendMessage("Hello PTITCube");
                cdh.println("Hello PTITCube");
                delay(500);
            }
            break;

        case 'b': // SD Card log (Vô hiệu hóa trong Power Saving)
            if (isPowerSaving) {
                cdh.println("ERR: Storage disabled in power saving mode!");
                com.sendMessage("ERR: Storage disabled in power saving mode");
                break;
            }
            cdh.println("Saving voltages to the SD card...");
            storage.writeFile("/voltage.txt", "");
            for (uint8_t i = 0; i < 5; i++) {
                eps.update();
                storage.appendFile("/voltage.txt", ("Bus voltage: " + String(eps.getBatteryVoltage(), 2) + " V\r\n").c_str());
                delay(500);
            }
            cdh.println("Done saving voltages to the SD card.");
            cdh.println("Reading voltages from the SD card...");
            cdh.print(storage.readFile("/voltage.txt"));
            cdh.println("Done reading voltages from the SD card.");
            break;

        case 'c': // Accelerometer (Vô hiệu hóa trong Power Saving)
            if (isPowerSaving) {
                cdh.println("ERR: Sensors disabled in power saving mode!");
                com.sendMessage("ERR: Sensors disabled in power saving mode");
                break;
            }
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                String msg = "Acceleration: ax=" + String(sensor.getAccX(), 2) + ", ay=" + String(sensor.getAccY(), 2) + ", az=" + String(sensor.getAccZ(), 2) + " m/s^2";
                com.sendMessage(msg);
                cdh.println(msg);
                delay(500);
            }
            break;

        case 'd': // Gyroscope (Vô hiệu hóa trong Power Saving)
            if (isPowerSaving) {
                cdh.println("ERR: Sensors disabled in power saving mode!");
                com.sendMessage("ERR: Sensors disabled in power saving mode");
                break;
            }
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                String msg = "Gyroscope: gx=" + String(sensor.getGyroX(), 2) + ", gy=" + String(sensor.getGyroY(), 2) + ", gz=" + String(sensor.getGyroZ(), 2) + " rad/s";
                com.sendMessage(msg);
                cdh.println(msg);
                delay(500);
            }
            break;

        case 'e': // GPS (Vẫn hoạt động bình thường qua MUX)
            camera.selectGPS();
            delay(100);
            for (uint8_t i = 0; i < 5; i++) {
                gps.update();
                String msg = gps.hasFix() 
                    ? ("GPS: Lat=" + String(gps.getLatitude(), 6) + ", Lng=" + String(gps.getLongitude(), 6) + ", Alt=" + String(gps.getAltitude(), 1) + "m")
                    : "GPS: Waiting for fix...";
                com.sendMessage(msg);
                cdh.println(msg);
                delay(500);
            }
            break;

        case 'f': { // Camera ESP32-CAM (Vô hiệu hóa trong Power Saving)
            if (isPowerSaving) {
                cdh.println("ERR: Camera disabled in power saving mode!");
                com.sendMessage("ERR: Camera disabled in power saving mode");
                break;
            }
            cdh.println("Capturing photo with ESP32-CAM...");
            camera.selectCamera();
            delay(200);
            static int idx = 0;
            String path = "/photos/cam_" + String(idx++) + ".jpg";
            bool ok = camera.captureToFile(path.c_str());
            camera.selectGPS();
            String msg = ok ? ("Photo captured and saved to SD: " + path) : "Camera capture failed!";
            com.sendMessage(msg);
            cdh.println(msg);
            break;
        }

        default:
            com.sendMessage("Unknown command");
            cdh.println("Unknown command");
            break;
    }
}

void setup() {
    cdh.begin();
    eps.setBuckState(true);

    eps.init();
    sensor.init();
    gps.init();
    storage.init();
    camera.init();
    com.init();

    com.setChannel(23);
    com.setTransmissionMode(0);
    camera.selectGPS();
    cdh.println("[BOOT] PTITCube Satellite System Ready");
}

void loop() {
    unsigned long now = millis();
    if (now - lastTelemetryTime >= TELEMETRY_INTERVAL) {
        lastTelemetryTime = now;
        downlink_hk_data();
    }

    gps.update();

    String cmd = com.update();
    if (cmd.length() > 0) {
        cmd.trim();
        handle_command(cmd.charAt(0));
    }
    delay(10);
}
