/**
 * LAB 7-01: TÍCH HỢP HỆ THỐNG VỆ TINH TOÀN DIỆN (HEPTA-SAT PATTERN)
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

const float VOLTAGE_THRES = 3.5;  // V
const float PERCENT_THRES = 20.0; // %
bool isPowerSaving = false;
bool isTelemetryPaused = false;
unsigned long lastTelemetryTime = 0;
const unsigned long TELEMETRY_INTERVAL = 4000;

void notify(const String& msg) {
    com.sendMessage(msg);
    cdh.println(msg);
}

void check_power_mode() {
    float vbat = eps.getBatteryVoltage();
    float pct  = eps.getBatteryPercentage();
    if (vbat <= 0.5f) return;

    if (!isPowerSaving && (vbat < VOLTAGE_THRES || pct < PERCENT_THRES)) {
        isPowerSaving = true;
        eps.setBuckState(false);
        notify("ALERT: Power saving mode ENABLED");
        cdh.println("Power saving mode ENABLED (Low battery). Sensors and camera disabled.");
    } else if (isPowerSaving && vbat >= VOLTAGE_THRES && pct >= PERCENT_THRES) {
        isPowerSaving = false;
        eps.setBuckState(true);
        notify("ALERT: Power saving mode DISABLED");
        cdh.println("Power saving mode DISABLED (Battery recovered). All subsystems active.");
    }
}

void downlink_hk_data() {
    eps.update();
    check_power_mode();

    camera.selectGPS();
    gps.update();

    if (!isPowerSaving) {
        sensor.update();

        // 1. Snapshot JSON viễn trắc lưu SD và Serial
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

        // 2. Chunks truyền qua LoRa (< 58 bytes)
        String chunks[] = {
            "{\"eps\":{\"v\":" + String(eps.getBatteryVoltage(), 2) + ",\"pct\":" + String(eps.getBatteryPercentage(), 1) + "}}",
            "{\"env\":{\"temp\":" + String(sensor.getTemperature(), 2) + ",\"press\":" + String(sensor.getPressure(), 2) + "}}",
            "{\"imu\":{\"roll\":" + String(sensor.getRoll(), 1) + ",\"pitch\":" + String(sensor.getPitch(), 1) + ",\"head\":" + String(sensor.getHeading(), 1) + "}}",
            gps.hasFix() ? ("{\"gps\":{\"lat\":" + String(gps.getLatitude(), 5) + ",\"lng\":" + String(gps.getLongitude(), 5) + "}}") : ""
        };
        for (const auto& c : chunks) {
            if (c.length() > 0) {
                com.sendMessage(c);
                delay(120);
            }
        }
    } else {
        String epsChunk = "{\"eps\":{\"v\":" + String(eps.getBatteryVoltage(), 2) + ",\"pct\":" + String(eps.getBatteryPercentage(), 1) + ",\"pwr_save\":true}}";
        cdh.printf("[TELEM] %s\n", epsChunk.c_str());
        com.sendMessage(epsChunk);
        delay(120);

        if (gps.hasFix()) {
            String gpsChunk = "{\"gps\":{\"lat\":" + String(gps.getLatitude(), 5) + ",\"lng\":" + String(gps.getLongitude(), 5) + "}}";
            com.sendMessage(gpsChunk);
            delay(120);
        }
    }
}

void handle_command(char cmd) {
    lastTelemetryTime = millis();
    delay(80);

    cdh.printf("Received command: %c\n", cmd);
    com.sendMessage("ACK: " + String(cmd));
    delay(100);

    switch (cmd) {
        case 'a':
            for (uint8_t i = 0; i < 5; i++) {
                notify("Hello PTITCube");
                delay(400);
            }
            break;

        case 'b': {
            notify("Saving battery data to SD card...");
            storage.writeFile("/voltage.txt", "");
            for (uint8_t i = 1; i <= 5; i++) {
                eps.update();
                String line = "[" + String(i) + "/5] Bat: " + String(eps.getBatteryVoltage(), 2) + "V, " + String(eps.getBatteryPercentage(), 1) + "%";
                storage.appendFile("/voltage.txt", (line + "\r\n").c_str());
                delay(200);
            }
            notify("Done saving. Reading from SD card:");
            delay(100);

            String content = storage.readFile("/voltage.txt");
            cdh.print(content);
            int startIdx = 0;
            while (startIdx < (int)content.length()) {
                int endIdx = content.indexOf('\n', startIdx);
                if (endIdx < 0) endIdx = content.length();
                String line = content.substring(startIdx, endIdx);
                line.trim();
                if (line.length() > 0) {
                    com.sendMessage(line);
                    delay(120);
                }
                startIdx = endIdx + 1;
            }
            notify("Done reading from SD card.");
            break;
        }

        case 'c':
            if (isPowerSaving) { notify("ERR: Sensors disabled in power saving mode"); break; }
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                notify("Acceleration: ax=" + String(sensor.getAccX(), 2) + ", ay=" + String(sensor.getAccY(), 2) + ", az=" + String(sensor.getAccZ(), 2) + " m/s^2");
                delay(400);
            }
            break;

        case 'd':
            if (isPowerSaving) { notify("ERR: Sensors disabled in power saving mode"); break; }
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                notify("Gyroscope: gx=" + String(sensor.getGyroX(), 2) + ", gy=" + String(sensor.getGyroY(), 2) + ", gz=" + String(sensor.getGyroZ(), 2) + " rad/s");
                delay(400);
            }
            break;

        case 'e':
            camera.selectGPS();
            delay(100);
            for (uint8_t i = 0; i < 5; i++) {
                gps.update();
                notify(gps.hasFix() 
                    ? ("GPS: Lat=" + String(gps.getLatitude(), 6) + ", Lng=" + String(gps.getLongitude(), 6) + ", Alt=" + String(gps.getAltitude(), 1) + "m")
                    : "GPS: Waiting for fix...");
                delay(400);
            }
            break;

        case 'f': {
            if (isPowerSaving) { notify("ERR: Camera disabled in power saving mode"); break; }
            cdh.println("Capturing photo with ESP32-CAM...");
            camera.selectCamera();
            delay(200);
            static int idx = 0;
            String path = "/photos/cam_" + String(idx++) + ".jpg";
            bool ok = camera.captureToFile(path.c_str());
            camera.selectGPS();
            notify(ok ? ("Photo captured and saved to SD: " + path) : "Camera capture failed!");
            break;
        }

        case 'p':
            isTelemetryPaused = true;
            notify("Telemetry PAUSED");
            break;

        case 'r':
            isTelemetryPaused = false;
            notify("Telemetry RESUMED");
            break;

        default:
            notify("Unknown command");
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
    if (!isTelemetryPaused && (now - lastTelemetryTime >= TELEMETRY_INTERVAL)) {
        lastTelemetryTime = now;
        downlink_hk_data();
    }

    gps.update();

    String rawCmd = com.update();
    if (rawCmd.length() > 0) {
        String cleanCmd = "";
        for (unsigned int i = 0; i < rawCmd.length(); i++) {
            char c = rawCmd.charAt(i);
            if (c >= 32 && c <= 126) cleanCmd += c;
        }
        cleanCmd.trim();
        if (cleanCmd.length() > 0) {
            handle_command(cleanCmd.charAt(0));
        }
    }
    delay(10);
}
