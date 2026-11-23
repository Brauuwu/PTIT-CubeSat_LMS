/**
 * ============================================================================
 * LAB 7 - VÍ DỤ 01: TÍCH HỢP HỆ THỐNG VỆ TINH TOÀN DIỆN (SEQUENTIAL LOOP)
 * ============================================================================
 * Theo kiến trúc chuẩn vệ tinh HEPTA-SAT Lab 6 tích hợp đầy đủ phân hệ PTITCube:
 * - C&DH: Xử lý trung tâm & cổng Serial
 * - EPS: Quản lý nguồn & giám sát điện áp ngưỡng (Hysteresis)
 * - Sensor: Cảm biến môi trường và tư thế (BMP280, MPU6500, QMC5883P)
 * - GPS: Định vị tọa độ qua bộ chuyển mạch MUX 74HC4066
 * - Camera: Chụp ảnh ESP32-CAM qua MUX và lưu vào thẻ nhớ SD
 * - Storage: Lưu trữ dữ liệu viễn trắc vào thẻ MicroSD qua VSPI
 * - COM: Thu phát vô tuyến LoRa, chia nhỏ gói tin viễn trắc (Chunking)
 * ============================================================================
 */

#include <Arduino.h>
#include <ArduinoJson.h>
#include <math.h>
#include <PTITCube.h>

// 1. Khởi tạo đối tượng tất cả các phân hệ vệ tinh PTITCube
PTIT_CDH cdh;
PTIT_EPS eps;
PTIT_Sensor sensor;
PTIT_GPS gps;
PTIT_Camera camera;
PTIT_Storage storage;
PTIT_COM com;

// 2. Ngưỡng điện áp quản lý năng lượng (Power Management Hysteresis như HEPTA-SAT)
const float BUS_VOLTAGE_TURN_OFF = 3.5; // Dưới 3.5V: ngắt Buck để tiết kiệm năng lượng
const float BUS_VOLTAGE_TURN_ON  = 3.7; // Trên 3.7V: bật lại Buck cấp nguồn cho toàn bộ cảm biến
bool buck_is_on = true;

// 3. Quản lý chu kỳ truyền viễn trắc
unsigned long lastTelemetryTime = 0;
const unsigned long TELEMETRY_INTERVAL = 3000; // 3 giây gửi viễn trắc 1 lần

/**
 * @brief Truyền dữ liệu viễn trắc (Housekeeping Data Downlink)
 * - Đóng gói JSON đầy đủ xuất ra C&DH Serial và ghi lưu thẻ nhớ MicroSD
 * - Chia nhỏ dữ liệu thành từng Chunk để truyền qua mạng LoRa tránh tràn bộ đệm
 */
void downlink_hk_data(void) {
    eps.update();
    sensor.update();

    camera.selectGPS();
    gps.update();

    float vbat  = eps.getBatteryVoltage();
    float vpct  = eps.getBatteryPercentage();
    float vrate = eps.getChargeRate();

    float temp  = sensor.getTemperature();
    float press = sensor.getPressure();

    float ax = sensor.getAccX();
    float ay = sensor.getAccY();
    float az = sensor.getAccZ();
    float gx = sensor.getGyroX();
    float gy = sensor.getGyroY();
    float gz = sensor.getGyroZ();
    float roll  = sensor.getRoll();
    float pitch = sensor.getPitch();
    float yaw   = sensor.getHeading();

    // Đóng gói JSON hoàn chỉnh cho Serial C&DH và lưu trữ MicroSD
    JsonDocument doc;
    JsonObject epsObj = doc["eps"].to<JsonObject>();
    epsObj["v"]    = vbat;
    epsObj["pct"]  = vpct;
    epsObj["rate"] = vrate;

    JsonObject envObj = doc["env"].to<JsonObject>();
    envObj["temp"]  = temp;
    envObj["press"] = press;

    JsonObject imuObj = doc["imu"].to<JsonObject>();
    imuObj["roll"]    = roll;
    imuObj["pitch"]   = pitch;
    imuObj["yaw"]     = yaw;
    imuObj["ax_ms2"]  = ax;
    imuObj["ay_ms2"]  = ay;
    imuObj["az_ms2"]  = az;
    imuObj["gx_rads"] = gx;
    imuObj["gy_rads"] = gy;
    imuObj["gz_rads"] = gz;

    if (gps.hasFix()) {
        JsonObject gpsObj = doc["gps"].to<JsonObject>();
        gpsObj["lat"]  = gps.getLatitude();
        gpsObj["lng"]  = gps.getLongitude();
        gpsObj["alt"]  = gps.getAltitude();
        gpsObj["sats"] = gps.getSatellites();
    }

    String telemetryString;
    serializeJson(doc, telemetryString);

    // Xuất ra Serial chuẩn viễn trắc cho C&DH
    cdh.printf("[TELEM] %s\n", telemetryString.c_str());

    // Ghi vào thẻ nhớ MicroSD
    const String line = telemetryString + "\n";
    const bool saved = storage.appendFile("/datalog.txt", line.c_str());
    cdh.println(saved ? "[SD] Telemetry saved" : "[SD] Write failed / card not ready");

    // ========================================================================
    // TRUYỀN HK DATA QUA LORA THEO TỪNG CHUNK (< 58 bytes / gói)
    // ========================================================================
    // Chunk 1: Phân hệ Năng lượng (EPS)
    String chunk1 = "{\"eps\":{\"v\":" + String(vbat, 2) + 
                    ",\"pct\":" + String(vpct, 1) + 
                    ",\"rate\":" + String(vrate, 1) + "}}";
    com.sendMessage(chunk1);
    delay(100);

    // Chunk 2: Phân hệ Môi trường (ENV)
    String chunk2 = "{\"env\":{\"temp\":" + String(temp, 2) + 
                    ",\"press\":" + String(press, 2) + "}}";
    com.sendMessage(chunk2);
    delay(100);

    // Chunk 3: Phân hệ Tư thế IMU (Attitude)
    String chunk3 = "{\"imu\":{\"roll\":" + String(roll, 1) + 
                    ",\"pitch\":" + String(pitch, 1) + 
                    ",\"yaw\":" + String(yaw, 1) + "}}";
    com.sendMessage(chunk3);
    delay(100);

    // Chunk 4: Phân hệ Định vị GPS (nếu đã chốt tọa độ)
    if (gps.hasFix()) {
        String chunk4 = "{\"gps\":{\"lat\":" + String(gps.getLatitude(), 5) + 
                        ",\"lng\":" + String(gps.getLongitude(), 5) + 
                        ",\"alt\":" + String(gps.getAltitude(), 1) + 
                        ",\"sats\":" + String(gps.getSatellites()) + "}}";
        com.sendMessage(chunk4);
        delay(100);
    }
}

void setup() {
    cdh.begin();

    // Kích hoạt hạ áp cấp nguồn ngoại vi trên PCB vệ tinh qua EPS
    eps.setBuckState(true);

    eps.init();
    sensor.init();
    gps.init();
    storage.init();
    camera.init();
    com.init();

    com.setChannel(23);
    com.setTransmissionMode(0);

    camera.selectGPS(); // Mặc định mở đường UART2 cho GPS

    cdh.println("[BOOT] PTITCube Satellite System Ready");
}

void loop() {
    unsigned long currentMillis = millis();

    // 1. Định kỳ phát Housekeeping Telemetry (xuất C&DH, ghi SD và chia chunk gửi LoRa)
    if (currentMillis - lastTelemetryTime >= TELEMETRY_INTERVAL) {
        lastTelemetryTime = currentMillis;
        downlink_hk_data();

        // 2. Giám sát điện áp và chuyển chế độ tiết kiệm điện (Hysteresis như HEPTA-SAT)
        float bus_voltage = eps.getBatteryVoltage();
        if (buck_is_on && bus_voltage < BUS_VOLTAGE_TURN_OFF) {
            com.sendMessage("Bus voltage is low! Switching off Buck converter to save power.");
            cdh.println("Bus voltage is low! Switching off Buck converter to save power.");
            eps.setBuckState(false);
            buck_is_on = false;
        } else if (!buck_is_on && bus_voltage > BUS_VOLTAGE_TURN_ON) {
            com.sendMessage("Bus voltage recovered. Switching on Buck converter.");
            cdh.println("Bus voltage recovered. Switching on Buck converter.");
            eps.setBuckState(true);
            buck_is_on = true;
        } else {
            cdh.printf("Buck converter is %s.\n", buck_is_on ? "on" : "off");
        }
    }

    // 3. Cập nhật dữ liệu GPS
    gps.update();

    // 4. Nhận và xử lý lệnh điều khiển từ trạm mặt đất qua LoRa
    String cmdStr = com.update();
    if (cmdStr.length() > 0) {
        cmdStr.trim();
        char cmd = cmdStr.charAt(0);
        cdh.printf("Received command: %c\n", cmd);
        com.sendMessage("ACK CMD: " + String(cmd));

        switch (cmd) {
            case 'a': {
                for (uint8_t i = 0; i < 5; i++) {
                    com.sendMessage("Hello PTITCube");
                    cdh.println("Hello PTITCube");
                    delay(500);
                }
                break;
            }

            case 'b': {
                com.sendMessage("Saving voltages to the SD card...");
                cdh.println("Saving voltages to the SD card...");
                storage.writeFile("/voltage.txt", ""); // Xóa hoặc tạo mới file
                for (uint8_t i = 0; i < 5; i++) {
                    eps.update();
                    float bus_voltage = eps.getBatteryVoltage();
                    String line = "Bus voltage: " + String(bus_voltage, 2) + " V\r\n";
                    storage.appendFile("/voltage.txt", line.c_str());
                    delay(500);
                }
                com.sendMessage("Done saving voltages to the SD card.");
                cdh.println("Done saving voltages to the SD card.");
                cdh.println("Reading voltages from the SD card...");

                String content = storage.readFile("/voltage.txt");
                com.sendMessage(content);
                cdh.print(content);

                com.sendMessage("Done reading voltages from the SD card.");
                cdh.println("Done reading voltages from the SD card.");
                break;
            }

            case 'c': {
                com.sendMessage("Reading accelerometer data...");
                cdh.println("Reading accelerometer data...");
                for (uint8_t i = 0; i < 5; i++) {
                    sensor.update();
                    float ax = sensor.getAccX();
                    float ay = sensor.getAccY();
                    float az = sensor.getAccZ();
                    String accStr = "Acceleration: ax=" + String(ax, 2) + ", ay=" + String(ay, 2) + ", az=" + String(az, 2) + " m/s^2";
                    com.sendMessage(accStr);
                    cdh.printf("Acceleration: ax=%.2f, ay=%.2f, az=%.2f m/s^2\n", ax, ay, az);
                    delay(500);
                }
                com.sendMessage("Done reading accelerometer data.");
                cdh.println("Done reading accelerometer data.");
                break;
            }

            case 'd': {
                com.sendMessage("Reading gyroscope data...");
                cdh.println("Reading gyroscope data...");
                for (uint8_t i = 0; i < 5; i++) {
                    sensor.update();
                    float gx = sensor.getGyroX();
                    float gy = sensor.getGyroY();
                    float gz = sensor.getGyroZ();
                    String gyroStr = "Gyroscope: gx=" + String(gx, 2) + ", gy=" + String(gy, 2) + ", gz=" + String(gz, 2) + " rad/s";
                    com.sendMessage(gyroStr);
                    cdh.printf("Gyroscope: gx=%.2f, gy=%.2f, gz=%.2f rad/s\n", gx, gy, gz);
                    delay(500);
                }
                com.sendMessage("Done reading gyroscope data.");
                cdh.println("Done reading gyroscope data.");
                break;
            }

            case 'e': {
                com.sendMessage("Reading GPS data...");
                cdh.println("Reading GPS data...");
                camera.selectGPS();
                delay(100);
                for (uint8_t i = 0; i < 5; i++) {
                    gps.update();
                    if (gps.hasFix()) {
                        String gpsStr = "GPS: Lat=" + String(gps.getLatitude(), 6) + ", Lng=" + String(gps.getLongitude(), 6) +
                                        ", Alt=" + String(gps.getAltitude(), 1) + "m, Sats=" + String(gps.getSatellites());
                        com.sendMessage(gpsStr);
                        cdh.printf("GPS: Lat=%.6f, Lng=%.6f, Alt=%.1fm, Sats=%d\n",
                                   gps.getLatitude(), gps.getLongitude(), gps.getAltitude(), gps.getSatellites());
                    } else {
                        com.sendMessage("GPS: Waiting for fix...");
                        cdh.println("GPS: Waiting for fix...");
                    }
                    delay(500);
                }
                com.sendMessage("Done reading GPS data.");
                cdh.println("Done reading GPS data.");
                break;
            }

            case 'f': {
                com.sendMessage("Capturing photo with ESP32-CAM...");
                cdh.println("Capturing photo with ESP32-CAM...");
                camera.selectCamera();
                delay(200);

                static int photoIndex = 0;
                String photoPath = "/photos/capture_" + String(photoIndex++) + ".jpg";
                if (camera.captureToFile(photoPath.c_str())) {
                    com.sendMessage("Photo captured and saved to SD: " + photoPath);
                    cdh.println("Photo captured and saved to SD: " + photoPath);
                } else {
                    com.sendMessage("Camera capture failed!");
                    cdh.println("Camera capture failed!");
                }

                camera.selectGPS();
                delay(100);
                break;
            }

            default:
                com.sendMessage("Unknown command");
                cdh.println("Unknown command");
                break;
        }
    }
    delay(10);
}
