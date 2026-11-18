// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab4-03_Detect_GPS_Rawdata/blob/69c53d2a0cb3575afb2d2d2b66d228902b3607ff/src/main.cpp
/**
 * LAB 4 - VÍ DỤ 03c: GIẢI MÃ NMEA THÀNH DỮ LIỆU ĐỊNH VỊ BẰNG THƯ VIỆN PTITCUBE
 * 
 * Mục tiêu:
 * - Sau khi đã quan sát các câu tin NMEA thô ở ví dụ 03a và 03b, ví dụ này sử dụng
 *   thư viện PTITCube (lớp đối tượng PTIT_GPS) để tự động bóc tách và chuyển đổi
 *   luồng byte NMEA phức tạp thành các thông số định vị thực tế mà người dùng hiểu được:
 *   + Tọa độ địa lý: Vĩ độ (Latitude) & Kinh độ (Longitude) dạng số thực (Decimal Degrees).
 *   + Cao độ so với mực nước biển (Altitude) tính bằng mét (m).
 *   + Vận tốc di chuyển (Speed) tính bằng km/h và hướng di chuyển (Course) tính bằng độ (°).
 *   + Số lượng vệ tinh đang bám khóa (Satellites in view/fix).
 *   + Chỉ số phẩm chất hình học sai số mặt bằng (HDOP - Horizontal Dilution of Precision).
 *   + Thời gian chuẩn quốc tế UTC (Ngày, Tháng, Năm, Giờ, Phút, Giây).
 * - Tự động quản lý IC chuyển mạch MUX 74HC4066 giữa GPS và Camera.
 */

#include <Arduino.h>

#include <PTITCube.h>

PTIT_CDH cdh;

// Khai báo đối tượng GPS từ thư viện PTITCube
PTIT_GPS myGPS;

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

        cdh.println("  PTITCUBE - LAB 4-03c: GIẢI MÃ ĐỊNH VỊ BẰNG PTITCUBE ");
        cdh.println("[INFO] Khởi tạo module GPS qua thư viện PTITCube...");
    
    // myGPS.init(gpsSelectPin, camSelectPin):
    // Tự động cấu hình UART2 (9600 baud, RX=16, TX=17) và điều khiển MUX 74HC4066
    // (chốt Pin 14 LOW tắt Cam, Pin 12 HIGH mở GPS)
    myGPS.init(12, 14);

    cdh.println("[INFO] Đang lắng nghe luồng NMEA và tự động giải mã...");
    cdh.println("[LƯU Ý] Module GPS cần bắt được ít nhất 4 vệ tinh để khóa tọa độ 3D.");
    cdh.println("        Nếu đang ở trong phòng kín, hãy đặt CubeSat gần cửa sổ.");

}

void loop() {
    // Luôn luôn gọi update() trong vòng lặp loop để nạp từng byte từ UART vào bộ giải mã
    myGPS.update();

    // Định kỳ mỗi 3 giây xuất dữ liệu định vị hoàn chỉnh đã chuyển đổi ra cdh Monitor
    static unsigned long lastPrint = 0;
    if (millis() - lastPrint >= 3000) {
        lastPrint = millis();

        int sats = myGPS.getSatellites();
        float lat = myGPS.getLat();
        float lng = myGPS.getLng();
        bool hasFix = (sats >= 4 && (lat != 0.0 || lng != 0.0));

                cdh.printf("[HỆ THỐNG] Uptime: %lu s | Trạng thái GPS: %s\n",
                      millis() / 1000,
                      hasFix ? "ĐÃ CHỐT TỌA ĐỘ (3D FIX)" : "ĐANG TÌM VỆ TINH (NO FIX)");

        if (!hasFix) {
            cdh.printf("  - Số vệ tinh phát hiện: %d vệ tinh (cần tối thiểu 4 vệ tinh)\n", sats);
            cdh.println("  - Đang quét tín hiệu vệ tinh ngoài không gian... Vui lòng chờ...");
        } else {
            cdh.println(">>> THÔNG TIN ĐỊNH VỊ ĐÃ CHUYỂN ĐỔI (HUMAN-READABLE) <<<");
            cdh.printf("  - Vĩ độ (Latitude)       : %.6f° %s\n", abs(lat), lat >= 0 ? "Bắc (N)" : "Nam (S)");
            cdh.printf("  - Kinh độ (Longitude)    : %.6f° %s\n", abs(lng), lng >= 0 ? "Đông (E)" : "Tây (W)");
            cdh.printf("  - Cao độ (Altitude)      : %.2f m (so với mực nước biển)\n", myGPS.getAltitude());
            cdh.printf("  - Tốc độ di chuyển       : %.2f km/h\n", myGPS.getSpeed());
            cdh.printf("  - Hướng di chuyển        : %.2f°\n", myGPS.getCourse());
            cdh.printf("  - Số vệ tinh bám khóa    : %d vệ tinh\n", sats);
            cdh.printf("  - Sai số mặt bằng (HDOP) : %.2f (%s)\n",
                          myGPS.getHDOP(),
                          myGPS.getHDOP() <= 1.5 ? "Lý tưởng" : (myGPS.getHDOP() <= 2.5 ? "Tốt" : "Trung bình"));
            cdh.printf("  - Thời gian chuẩn UTC    : %s\n", myGPS.getTimeString().c_str());
        }
            }
}
