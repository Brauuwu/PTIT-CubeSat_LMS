#include "GPS.h"

PTIT_GPS::PTIT_GPS() : gpsSerial(Serial2), gpsSelectPin(12), camSelectPin(14) {
}

void PTIT_GPS::init(uint8_t gpsSelectPin, uint8_t camSelectPin) {
    this->gpsSelectPin = gpsSelectPin;
    this->camSelectPin = camSelectPin;

    if (this->gpsSelectPin != 255 && this->camSelectPin != 255) {
        pinMode(this->gpsSelectPin, OUTPUT);
        pinMode(this->camSelectPin, OUTPUT);

        // Break-Before-Make: Tắt CAM trước, ngắt hoàn toàn tiếp điểm 74HC4066
        digitalWrite(this->camSelectPin, LOW);
        delayMicroseconds(50);
        digitalWrite(this->gpsSelectPin, HIGH);
    }

    Serial.println("[GPS] Initializing GPS NEO (UART2, RX=16, TX=17)...");
    if (gpsSerial.baudRate() == 0) gpsSerial.begin(9600, SERIAL_8N1, 16, 17);
    else if (gpsSerial.baudRate() != 9600) { gpsSerial.flush(); gpsSerial.updateBaudRate(9600); }
}

void PTIT_GPS::selectGPS() {
    if (gpsSelectPin != 255 && camSelectPin != 255) {
        // Break-Before-Make: TẮT CAM trước
        digitalWrite(camSelectPin, LOW);
        delayMicroseconds(50);
        // BẬT GPS sau
        digitalWrite(gpsSelectPin, HIGH);
        // Đặt lại baudrate GPS (9600) trên cùng instance UART2
        if (gpsSerial.baudRate() != 9600) { gpsSerial.flush(); gpsSerial.updateBaudRate(9600); }
    }
}

void PTIT_GPS::selectCamera() {
    if (gpsSelectPin != 255 && camSelectPin != 255) {
        // Break-Before-Make: TẮT GPS trước
        digitalWrite(gpsSelectPin, LOW);
        delayMicroseconds(50);
        // BẬT CAM sau
        digitalWrite(camSelectPin, HIGH);
        // Đặt lại baudrate Camera (115200) trên cùng instance UART2
        if (gpsSerial.baudRate() != 115200) { gpsSerial.flush(); gpsSerial.updateBaudRate(115200); }
    }
}

void PTIT_GPS::update() {
    while (gpsSerial.available() > 0) {
        gps.encode(gpsSerial.read());
    }
}

bool PTIT_GPS::hasFix() {
    // A fix older than 5 seconds is stale (MUX switched away, antenna lost, ...).
    return gps.location.isValid() && gps.location.age() < 5000;
}

float PTIT_GPS::getLatitude() {
    if (gps.location.isValid()) return gps.location.lat();
    return 0.0;
}

float PTIT_GPS::getLongitude() {
    if (gps.location.isValid()) return gps.location.lng();
    return 0.0;
}

float PTIT_GPS::getLat() { return getLatitude(); }
float PTIT_GPS::getLng() { return getLongitude(); }

float PTIT_GPS::getAltitude() {
    if (gps.altitude.isValid()) return gps.altitude.meters();
    return 0.0;
}

int PTIT_GPS::getSatellites() {
    if (gps.satellites.isValid()) return gps.satellites.value();
    return 0;
}

float PTIT_GPS::getSpeed() {
    if (gps.speed.isValid()) return gps.speed.kmph();
    return 0.0;
}

float PTIT_GPS::getCourse() {
    if (gps.course.isValid()) return gps.course.deg();
    return 0.0;
}

float PTIT_GPS::getHDOP() {
    if (gps.hdop.isValid()) return gps.hdop.hdop();
    return 0.0;
}

String PTIT_GPS::getTimeString() {
    if (gps.date.isValid() && gps.time.isValid()) {
        char sz[25];
        snprintf(sz, sizeof(sz), "%04d-%02d-%02dT%02d:%02d:%02dZ",
                 gps.date.year(), gps.date.month(), gps.date.day(),
                 gps.time.hour(), gps.time.minute(), gps.time.second());
        return String(sz);
    }
    return "N/A";
}
