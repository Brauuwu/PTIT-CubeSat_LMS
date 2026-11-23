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

const float BUS_VOLTAGE_TURN_OFF = 3.5;
const float BUS_VOLTAGE_TURN_ON  = 3.7;
bool buck_is_on = true;

unsigned long lastTelemetryTime = 0;
const unsigned long TELEMETRY_INTERVAL = 3000;

void downlink_hk_data() {
    eps.update();
    sensor.update();
    camera.selectGPS();
    gps.update();

    // 1. JSON Telemetry Snapshot cho Serial C&DH và Thẻ nhớ SD
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
}

void handle_command(char cmd) {
    cdh.printf("Received command: %c\n", cmd);
    com.sendMessage("ACK: " + String(cmd));

    switch (cmd) {
        case 'a': // Beacon test
            for (uint8_t i = 0; i < 5; i++) {
                com.sendMessage("Hello PTITCube");
                cdh.println("Hello PTITCube");
                delay(500);
            }
            break;

        case 'b': { // SD Card log & readback
            cdh.println("Saving voltages to the SD card...");
            storage.writeFile("/voltage.txt", "");
            for (uint8_t i = 0; i < 5; i++) {
                eps.update();
                storage.appendFile("/voltage.txt", ("Bus voltage: " + String(eps.getBatteryVoltage(), 2) + " V\r\n").c_str());
                delay(500);
            }
            cdh.println("Done saving voltages to the SD card.");
            cdh.println("Reading voltages from the SD card...");
            String content = storage.readFile("/voltage.txt");
            com.sendMessage(content);
            cdh.print(content);
            cdh.println("Done reading voltages from the SD card.");
            break;
        }

        case 'c': // Accelerometer
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                String msg = "Acceleration: ax=" + String(sensor.getAccX(), 2) + ", ay=" + String(sensor.getAccY(), 2) + ", az=" + String(sensor.getAccZ(), 2) + " m/s^2";
                com.sendMessage(msg);
                cdh.println(msg);
                delay(500);
            }
            break;

        case 'd': // Gyroscope
            for (uint8_t i = 0; i < 5; i++) {
                sensor.update();
                String msg = "Gyroscope: gx=" + String(sensor.getGyroX(), 2) + ", gy=" + String(sensor.getGyroY(), 2) + ", gz=" + String(sensor.getGyroZ(), 2) + " rad/s";
                com.sendMessage(msg);
                cdh.println(msg);
                delay(500);
            }
            break;

        case 'e': // GPS
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

        case 'f': { // Camera ESP32-CAM
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

        // HEPTA-SAT Power Hysteresis
        float bus_v = eps.getBatteryVoltage();
        if (buck_is_on && bus_v < BUS_VOLTAGE_TURN_OFF) {
            cdh.println("Bus voltage is low! Switching off Buck converter to save power.");
            eps.setBuckState(false);
            buck_is_on = false;
        } else if (!buck_is_on && bus_v > BUS_VOLTAGE_TURN_ON) {
            cdh.println("Bus voltage recovered. Switching on Buck converter.");
            eps.setBuckState(true);
            buck_is_on = true;
        } else {
            cdh.printf("Buck converter is %s.\n", buck_is_on ? "on" : "off");
        }
    }

    gps.update();

    String cmd = com.update();
    if (cmd.length() > 0) {
        cmd.trim();
        handle_command(cmd.charAt(0));
    }
    delay(10);
}
