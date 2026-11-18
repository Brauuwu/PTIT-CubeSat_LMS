// Introductory notes for the document slots; solved code is not preloaded.
export const READING_NOTES = {
  'document-1-1': [
    'ESP32-WROOM-32 có 2 lõi Xtensa LX6 tới 240 MHz, 520 KB SRAM nội và Flash SPI ngoài (thường 4 MB) chứa chương trình; WiFi 2.4 GHz và Bluetooth tích hợp sẵn.',
    'Chân strapping được đọc lúc khởi động: GPIO 0 (chế độ nạp), GPIO 2, GPIO 12 (điện áp Flash) và GPIO 15 (log khởi động). Không kéo các chân này sai mức khi reset. GPIO 34–39 chỉ là ngõ vào; GPIO 6–11 nối Flash nội, không dùng làm GPIO.',
    'Trong Arduino, setup() chạy một lần sau khởi động; loop() lặp lại liên tục. Serial giúp quan sát log và nhận lệnh từ máy tính.',
    'Lưu ý phần cứng: toàn bộ bài thực hành Lab 1 chạy trên PCB thí nghiệm rời, không cắm vào chồng bo CubeSat. Nút nhấn GPIO 4 ở Lab 1 chỉ nối với nút trên PCB rời; trên bo vệ tinh, GPIO 4 là chân bật/tắt nguồn Buck của EPS (Lab 2-02).',
  ],
  'document-1-2': [
    'Mở từng bài thực hành để viết C++ hoặc nối block trong hai vùng Khởi tạo và Lặp liên tục. Sửa C++ cập nhật ngược Blockly; chỉnh block cập nhật lại mã.',
    'Chọn đúng ESP32 hoặc ESP32-S3, biên dịch và đọc log trước khi nạp. Kết nối bo qua USB, chọn đúng cổng Serial và quan sát chương trình sau khi reset.',
    'Mỗi bài tự lưu riêng trên trình duyệt. Tải file .ino và xuất JSON Blockly để sao lưu/chuyển máy; thay đổi mã yêu cầu biên dịch lại trước khi nạp.',
  ],
  'document-1-3': [
    'LED là diode phát quang, chỉ sáng khi phân cực thuận và luôn cần điện trở hạn dòng: R = (Vcc − Vf) / I. Ví dụ (3.3 V − 2.0 V) / 10 mA ≈ 130 Ω.',
    'Ngõ ra GPIO kiểu push-pull lái được cả mức HIGH và LOW: pinMode(pin, OUTPUT) rồi digitalWrite() để bật/tắt. Nhiều LED dùng mảng số chân và vòng lặp để chạy tuần tự.',
    'PWM điều chỉnh độ sáng bằng tỉ lệ thời gian bật (duty cycle) ở tần số cao. Bộ LEDC của ESP32 có 16 kênh: ledcSetup() đặt tần số và độ phân giải, ledcAttachPin() gắn chân, ledcWrite() ghi duty; với độ phân giải 8 bit, duty từ 0 đến 255.',
  ],
  'document-1-4': [
    'WiFi Station kết nối vào mạng có sẵn; Access Point tạo mạng để thiết bị khác kết nối. Phân biệt tên mạng, địa chỉ IP và trạng thái kết nối.',
    'Máy chủ HTTP tiếp nhận request theo đường dẫn và trả response gồm mã trạng thái, header và nội dung. Trình duyệt gửi yêu cầu để đọc trạng thái hoặc điều khiển LED.',
    'Đọc địa chỉ IP trên Serial, kiểm tra máy tính ở đúng mạng. Không đưa mật khẩu WiFi thực vào kho mã hoặc báo cáo công khai.',
  ],
  'document-2-1': [
    'EPS phân phối năng lượng từ pin và nguồn sạc đến các phân hệ. Xác định điện áp định mức và yêu cầu dòng của từng tải theo tài liệu phần cứng.',
    'Pin Li-Po 3.7V được sạc bởi TP4056 theo hai pha: dòng không đổi (CC) rồi áp không đổi (CV). Mạch Buck hạ xuống 3.3V và Boost nâng lên 5.0V cấp cho các tải.',
    'IC đo nhiên liệu MAX17048 ở địa chỉ I2C 0x36: thanh ghi VCELL (0x02) cho điện áp, mỗi LSB = 78.125 µV; thanh ghi SOC (0x04) cho dung lượng %, byte thấp là phần lẻ 1/256 %. Ghép hai byte MSB/LSB thành số 16-bit trước khi quy đổi.',
    'Đối chiếu điện áp đọc được với đồng hồ đo và quan sát khi tải hoạt động; CRATE (0x16) cho biết pin đang sạc hay xả.',
  ],
  'document-2-2': [
    'Chốt RBF và công tắc hành trình trên ray giữ vệ tinh tắt nguồn khi còn trong ống phóng. Mạch Brownout (BOD) reset vi điều khiển khi điện áp sụt dưới ngưỡng an toàn.',
    'Power Gating: GPIO 4 điều khiển dòng vào mạch hạ áp cấp nguồn cảm biến. Mức 0 (LOW) cho phép dòng — bật nguồn tải; mức 1 (HIGH) ngắt dòng — tải tiêu thụ về 0.',
    'Sau khi bật nguồn, chờ khoảng 100 ms cho điện áp ngõ ra ổn định rồi mới đọc cảm biến; ngắt nguồn ngay khi xong chu kỳ để giảm dòng rò trong vùng tối quỹ đạo.',
  ],
  'document-3-1': [
    'MicroSD có thể giao tiếp qua SPI. Kiểm tra CS, SCK, MOSI, MISO và nguồn; nhiều thiết bị cùng bus cần chân chọn riêng.',
    'Hệ thống tập tin tổ chức dữ liệu theo đường dẫn, thư mục và file. Phân biệt tạo mới, ghi đè và ghi nối tiếp khi lưu log.',
    'Kiểm tra kết quả mở/ghi file, đóng hoặc flush phù hợp. Đọc lại dữ liệu và xử lý trường hợp không có thẻ; không rút nguồn khi đang ghi.',
  ],
  'document-4-1': [
    'I2C sử dụng SDA và SCL để giao tiếp với thiết bị có địa chỉ riêng. Kiểm tra nguồn, GND chung và điện trở kéo lên theo phần cứng.',
    'Đọc thanh ghi gồm chọn địa chỉ thiết bị, thanh ghi và nhận số byte tương ứng. Đối chiếu thứ tự byte, độ nhạy và đơn vị theo datasheet.',
    'So sánh cách đọc thanh ghi với thư viện PTITCube. Quan sát dữ liệu khi đứng yên và khi thay đổi môi trường/tư thế để nhận biết lỗi đo.',
  ],
  'document-4-2': [
    'GPS thường phát câu NMEA qua UART. Thu thập một dòng hoàn chỉnh trước khi tách trường và kiểm tra checksum theo định dạng module.',
    'Phân biệt thời gian, trạng thái fix, vĩ độ, kinh độ và cao độ. Đổi tọa độ NMEA đúng định dạng và dấu theo bán cầu.',
    'Chỉ dùng vị trí khi có fix hợp lệ; không coi giá trị 0 hoặc bản tin cũ là tọa độ hiện tại. Đối chiếu dữ liệu thô với thư viện.',
  ],
  'document-5-1': [
    'Đường truyền vô tuyến phụ thuộc tần số, công suất, anten và môi trường. Kiểm tra cấu hình hai đầu và hướng dẫn module trước khi truyền.',
    'Phân biệt UART giữa vi điều khiển và module với đường vô tuyến giữa hai module. Theo dõi log tại cả bên gửi và nhận.',
    'Thử bản tin ngắn có số thứ tự để đo mất gói và thời gian nhận, sau đó mới tích hợp dữ liệu cảm biến.',
  ],
  'document-5-2': [
    'Packet cần có ranh giới, loại bản tin, định danh thiết bị và payload. Hai đầu thống nhất cách mã hóa, độ dài và kiểm tra lỗi.',
    'Telemetry truyền trạng thái/giá trị đo về trạm; command gửi yêu cầu điều khiển lên vệ tinh. Kiểm tra lệnh trước khi thực thi và phản hồi kết quả xử lý.',
    'Phân biệt dữ liệu mới, đã cũ và mất kết nối. Lưu log gửi/nhận để truy vết sai lệch hoặc trùng gói.',
  ],
  'document-6-1': [
    'Khung cơ khí giữ vị trí và bảo vệ các bo. Đối chiếu kích thước, điểm bắt vít, khoảng cách cách điện và đường đi dây theo bản vẽ.',
    'Lắp từng cụm khi đã ngắt nguồn; kiểm tra vật dẫn có thể gây chạm chập và tránh kéo căng cáp.',
    'Sau lắp ráp, kiểm tra nguồn và từng phân hệ trước khi vận hành toàn bộ hệ thống.',
  ],
  'document-3-3': [
    'Tác vụ FreeRTOS có hàm thực thi, stack riêng và mức ưu tiên; trạng thái lưu trong TCB. Bộ điều phối preemptive luôn chạy tác vụ sẵn sàng có ưu tiên cao nhất, các tác vụ cùng ưu tiên chia lát thời gian.',
    'Tác vụ phải nhường CPU bằng vTaskDelay() hoặc chờ hàng đợi; vòng bận làm đói tác vụ ưu tiên thấp. xTaskCreatePinnedToCore() cho phép ghim tác vụ vào Core 0 hoặc Core 1.',
    'Tài nguyên dùng chung (Serial, bus I2C, biến toàn cục) có thể gây race condition. Mutex chỉ cho một tác vụ giữ tài nguyên; nhả khóa ngay sau khi dùng và không giữ khóa trong lúc vTaskDelay().',
    'Nghịch đảo ưu tiên: tác vụ ưu tiên thấp giữ khóa, tác vụ trung bình chiếm CPU nên tác vụ ưu tiên cao bị chặn — sự cố từng gây reset liên tục trên Mars Pathfinder (1997). Mutex của FreeRTOS có kế thừa ưu tiên để rút ngắn thời gian chặn.',
  ],
  'document-3-4': [
    'Watchdog phát hiện phần mềm không tiến triển trong thời gian cho phép. Chọn timeout dựa trên thời gian xử lý dài nhất đã đo.',
    'Chỉ cập nhật watchdog khi tác vụ đã hoàn thành bước kiểm tra cần thiết. Cập nhật vô điều kiện có thể che việc hệ thống bị treo.',
    'Thử gây treo có kiểm soát, đọc nguyên nhân reset và kiểm tra khả năng khởi động lại. Watchdog bổ sung phục hồi, không bảo đảm phần mềm tuyệt đối không lỗi.',
  ],
  'document-4-3': [
    'Ghép kênh cho phép dùng chung đường giao tiếp giữa nhiều thiết bị. Phần mềm cần chọn đúng kênh trước mỗi phiên trao đổi.',
    'Kiểm tra sơ đồ MUX, chân điều khiển và trạng thái mặc định; tránh hai thiết bị cùng điều khiển đường tín hiệu.',
    'Trong đa nhiệm, bảo vệ việc chọn kênh và giao tiếp bằng cùng cơ chế khóa để tác vụ khác không đổi kênh giữa phiên.',
  ],
  'document-7-2': [
    'Tách lớp truy cập phần cứng, dịch vụ phân hệ, xử lý nhiệm vụ và giao tiếp trạm. Mỗi lớp có trách nhiệm và đầu vào/đầu ra rõ ràng.',
    'Bản tuần tự xử lý công việc theo vòng lặp; bản RTOS chia tác vụ và đồng bộ dữ liệu. So sánh độ trễ, tài nguyên và khả năng phục hồi.',
    'Thống nhất đơn vị, chu kỳ lấy mẫu và quy tắc lỗi. Kiểm thử từng phân hệ rồi chạy kịch bản toàn hệ thống có ghi log.',
  ],
  'document-8-1': [
    'Kỹ thuật hệ thống quản lý dự án vũ trụ theo vòng đời pha: Pre-Phase A (ý tưởng), Phase A (khả thi, SRR), Phase B (thiết kế sơ bộ, PDR), Phase C (thiết kế chi tiết, CDR), Phase D (chế tạo, tích hợp, thử nghiệm, FRR), Phase E (vận hành), Phase F (kết thúc).',
    'Mỗi yêu cầu gắn với một phương pháp kiểm định: Test (đo thử), Analysis (phân tích, mô phỏng), Inspection (kiểm tra trực quan) hoặc Demonstration (trình diễn chức năng). Ma trận kiểm định phủ đủ mọi yêu cầu, không chồng lấn (MECE).',
    'Dùng sơ đồ khối, trạng thái hoặc trình tự để mô tả ranh giới hệ thống, phân hệ và giao diện. Theo dõi thay đổi thiết kế, giả định và kết quả kiểm thử để báo cáo có thể truy vết.',
  ],
  'document-8-2': [
    'Cảnh báo cháy rừng: so sánh tọa độ với vùng giám sát (geofencing) và kết hợp nhiệt độ, ảnh để cảnh báo. Phân biệt dấu hiệu quan sát được với kết luận còn cần xác minh.',
    'Nông nghiệp IoT: vệ tinh thu dữ liệu từ các trạm cảm biến mặt đất khi bay qua, lưu lại rồi chuyển về trạm chính (store-and-forward). Các trạm gửi ngẫu nhiên kiểu ALOHA nên phải xử lý va chạm gói.',
    'Cứu hộ SAR: chuyển tiếp bản tin ngắn từ phao cứu sinh LoRa băng thông hẹp, ưu tiên độ tin cậy và vị trí. Mỗi đề tài cần yêu cầu, tiêu chí kiểm chứng phù hợp bộ kit và số liệu thực nghiệm.',
  ],
  'document-0-2': [
    'CubeSat 1U là khối 10 × 10 × 11.35 cm; khối lượng tối đa do tiêu chuẩn CDS quy định (1.33 kg ở bản rev.13, 2.0 kg ở bản rev.14).',
    'Sáu phân hệ cốt lõi: OBC xử lý lệnh, lập lịch và lưu dữ liệu; EPS thu, lưu và phân phối năng lượng; Sensors & Payload thu dữ liệu nhiệm vụ; COM thu phát viễn trắc/viễn lệnh; Structure đỡ, tản nhiệt và che chắn; ADCS xác định và điều khiển tư thế.',
    'Viễn lệnh đi từ trạm mặt đất qua COM tới OBC để giải mã và phân phối; viễn trắc từ cảm biến, EPS được OBC đóng gói rồi gửi qua COM về trạm. Sự cố ở một phân hệ (ví dụ sụt áp EPS) lan sang phân hệ khác, nên OBC giám sát và chuyển sang chế độ an toàn khi cần.',
  ],
  'document-1-button': [
    'Ngõ vào để hở (floating) nhận nhiễu và đọc ngẫu nhiên HIGH/LOW. INPUT_PULLUP bật điện trở kéo lên nội (khoảng 45 kΩ trên ESP32), nên nút nối giữa GPIO và GND đọc HIGH khi nhả và LOW khi nhấn.',
    'Tiếp điểm cơ khí nảy (contact bounce) trong vài mili-giây, tạo nhiều cạnh lên/xuống cho một lần nhấn. Chống rung bằng phần mềm: chỉ chấp nhận trạng thái mới khi nó giữ ổn định qua một khoảng (thường 20–50 ms) đo bằng millis().',
    'Phát hiện sự kiện nhấn bằng cạnh xuống (trước HIGH, nay LOW) rồi mới đảo biến chốt (toggle); không đảo LED ở mỗi vòng loop() khi nút vẫn đang được giữ.',
  ],
  'document-1-74hc595': [
    '74HC595 gồm thanh ghi dịch 8 bit và thanh ghi chốt 8 bit. Mỗi cạnh lên của SH_CP dịch bit đang có ở DS vào; cạnh lên của ST_CP chép thanh ghi dịch ra 8 ngõ Q0–Q7 cùng lúc.',
    'shiftOut(dataPin, clockPin, MSBFIRST hoặc LSBFIRST, value) gửi 8 bit. Kéo latch xuống LOW trước khi dịch và lên HIGH sau khi dịch để LED không hiện trạng thái trung gian. Chỉ cần 3 chân GPIO và có thể nối tiếp nhiều IC qua chân Q7′.',
    'LED 7 đoạn chung cathode bật đoạn bằng mức 1, chung anode bằng mức 0. Bảng mã byte cho chữ số 0–9 phụ thuộc cách nối Q0–Q7 tới các đoạn a–g, dp; mỗi đoạn cần điện trở hạn dòng riêng.',
  ],
  'document-1-uart': [
    'UART truyền bất đồng bộ: đường rảnh ở mức 1; mỗi khung gồm 1 start bit (0), 5–8 bit dữ liệu (thường 8, bit thấp gửi trước), parity tùy chọn và 1–2 stop bit. Cấu hình phổ biến là 8N1.',
    'Hai bên phải cùng tốc độ baud. Ở 115200 bps với 8N1 (10 bit mỗi byte) truyền được khoảng 11 520 byte/giây. TX bên này nối RX bên kia và hai bên chung GND.',
    'Byte nhận được nằm trong bộ đệm (FIFO phần cứng và bộ đệm driver). Serial.available() cho biết số byte đang chờ, Serial.read() lấy từng byte; đọc không kịp sẽ tràn bộ đệm và mất dữ liệu.',
  ],
  'document-1-millis': [
    'delay() chặn CPU: trong lúc chờ, chương trình không đọc nút, không phục vụ lệnh và không cập nhật watchdog. Phần mềm bay cần vòng lặp không chặn để nhiều công việc cùng tiến triển.',
    'millis() trả số mili-giây từ khi khởi động, kiểu unsigned long 32 bit, quay về 0 sau 2^32 ms ≈ 49.7 ngày. Mẫu định thời: if (millis() - lastRun >= INTERVAL) { lastRun = millis(); ... }.',
    'Phép trừ số không dấu tính theo modulo 2^32 nên hiệu millis() - lastRun vẫn đúng khi bộ đếm tràn. Viết millis() >= lastRun + INTERVAL thì sai ngay tại thời điểm tràn.',
  ],
  'document-3-cli': [
    'Bộ đọc lệnh gom ký tự từ Serial vào bộ đệm có giới hạn độ dài cho đến khi gặp ký tự xuống dòng; bỏ ký tự CR và từ chối dòng quá dài thay vì ghi tràn bộ nhớ.',
    'Tách dòng thành token theo khoảng trắng: token đầu là mã lệnh (ls, cat, rm, df, reboot), các token sau là tham số. Kiểm tra số tham số và đường dẫn trước khi thực thi.',
    'Lệnh nguy hiểm như rm, reboot cần kiểm tra hoặc xác nhận; luôn trả phản hồi rõ ràng (OK hoặc lỗi kèm lý do) để trạm mặt đất biết lệnh đã được thực thi hay chưa.',
  ],
  'document-4-imu': [
    'MPU6500 là cảm biến MEMS 6 trục: gia tốc kế đo gia tốc tuyến tính (gồm trọng trường), con quay đo vận tốc góc. Dữ liệu 16 bit bù 2; ở dải ±2 g, 16384 LSB = 1 g; ở dải ±250 °/s, 131 LSB = 1 °/s.',
    'Tích phân vận tốc góc cho góc mượt nhưng trôi dạt (drift) theo thời gian; góc tính từ gia tốc kế không trôi nhưng nhiễu khi rung hoặc tăng tốc.',
    'Bộ lọc bù kết hợp hai nguồn: góc = α·(góc + gyro·dt) + (1 − α)·góc_gia_tốc, thường α ≈ 0.98. Roll = atan2(ay, az); Pitch = atan2(−ax, √(ay² + az²)).',
  ],
  'document-4-gnss': [
    'Module L76X thu tín hiệu GNSS qua ăng-ten gốm (patch) và bộ khuếch đại tạp âm thấp LNA. Ăng-ten cần nhìn thấy bầu trời; trong nhà thường không chốt được vị trí.',
    'Thời gian chốt vị trí đầu tiên (TTFF): cold start không có dữ liệu quỹ đạo vệ tinh có thể mất từ vài chục giây đến vài phút; hot start khi còn dữ liệu chỉ mất vài giây.',
    'Module xuất câu NMEA dạng văn bản ở 9600 bps. Trên OBC, GPS dùng UART2 (GPIO 16/17) và dùng chung cổng này với camera qua IC chuyển mạch 74HC4066.',
  ],
  'document-4-camera': [
    'OV2640 là cảm biến ảnh CMOS 2 MP (1600 × 1200), cần xung nhịp ngoài XCLK 10–20 MHz và được cấu hình thanh ghi qua bus SCCB (tương tự I2C).',
    'Bộ nén JPEG phần cứng giảm kích thước ảnh. Ảnh JPEG bắt đầu bằng 0xFF 0xD8 (SOI) và kết thúc bằng 0xFF 0xD9 (EOI); kiểm tra hai cặp byte này để phát hiện ảnh hỏng.',
    'Trong bộ kit, ESP32-CAM gửi ảnh qua UART2 (GPIO 14/15) sang OBC theo giao thức: OBC gửi p, CAM trả SIZE:n, OBC trả OK, CAM gửi n byte JPEG, OBC trả DONE. OBC ghi từng khối vào MicroSD thay vì giữ cả ảnh trong RAM.',
  ],
  'document-4-sensors': [
    'Chu trình đa cảm biến đọc từng cảm biến theo lịch rồi gom vào một cấu trúc gói viễn trắc chung (struct) để lưu hoặc gửi.',
    'Mỗi mẫu cần dấu thời gian (millis() hoặc giờ UTC từ GPS) để đối chiếu giữa các cảm biến. Đánh dấu rõ dữ liệu cũ hoặc không hợp lệ (ví dụ GPS chưa có fix) thay vì in số 0.',
    'Chọn chu kỳ lấy mẫu theo đại lượng: IMU nhanh (hàng chục Hz), khí áp và nhiệt độ chậm (khoảng 1 Hz), GPS theo tốc độ cập nhật của module (1 Hz). Không để cảm biến chậm chặn vòng lặp của cảm biến nhanh.',
  ],
  'document-5-lora': [
    'LoRa dùng điều chế trải phổ chirp (CSS): mỗi ký hiệu là một xung quét tần số. Hệ số trải phổ SF lớn tăng tầm xa và độ nhạy nhưng giảm tốc độ dữ liệu.',
    'E32-433T20D giao tiếp qua UART. M0, M1 chọn chế độ: M0=0, M1=0 Normal; M0=1, M1=0 Wake-up; M0=0, M1=1 Power-saving; M0=1, M1=1 Sleep/cấu hình. AUX báo bận, chỉ gửi dữ liệu khi AUX ở mức HIGH.',
    'Công suất phát tối đa 20 dBm (100 mW). Trên bộ kit, E32 nối UART1 RX 26 / TX 25, M0 = 32, M1 = 33, AUX = 27 theo PTITCube.h.',
  ],
  'document-6-2': [
    'Al 6061-T6 dễ gia công, chống ăn mòn tốt và thường dùng cho khung CubeSat; Al 7075-T6 bền hơn nhưng khó gia công và nhạy với ăn mòn ứng suất hơn.',
    'Anodize cứng Type III tạo lớp oxit cách điện, chống mài mòn và hàn nguội trên thanh ray tiếp xúc ống phóng; Alodine Class 3 (lớp chuyển hóa cromat) giữ bề mặt dẫn điện để tiếp đất vỏ.',
    'Vật liệu dùng trong chân không phải đạt ASTM E595: tổng khối lượng mất TML < 1% và chất ngưng tụ CVCM < 0.1%, để hơi thoát ra không bám lên ống kính và cảm biến.',
  ],
  'document-6-3': [
    'Các bo xếp chồng theo chuẩn PC/104 với khoảng cách cố định giữa các tầng, nối qua đầu cắm xuyên tầng để truyền nguồn và tín hiệu.',
    'Lỗ ren tịt giữ bọt khí; khi hút chân không, khí thoát dần gây rò rỉ ảo (virtual leak). Bu lông thông hơi có lỗ khoan tâm cho khí thoát. Bu lông inox A2-70 kèm keo khóa ren kỵ khí Loctite 222 chống lỏng do rung.',
    'Lập bảng cân đối khối lượng (mass budget) cho từng bo và linh kiện; trọng tâm CoM phải nằm trong ±20 mm quanh tâm hình học. Siết bu lông theo đường chéo để khung không bị vặn.',
  ],
  'document-7-1': [
    'Khi tích hợp, nhiều phân hệ dùng chung bus I2C/SPI: tranh chấp bus, trùng địa chỉ và treo bus phải được phát hiện và phục hồi.',
    'Phát LoRa gây nhiễu EMI lên dây tín hiệu; tải dòng lớn (phát sóng, camera) gây sụt áp có thể kích hoạt brownout reset; trong chân không nhiệt chỉ thoát qua dẫn và bức xạ nên linh kiện dễ quá nhiệt; các tác vụ chờ khóa của nhau gây deadlock.',
    'Super-loop không chặn: mỗi công việc có biến thời điểm chạy gần nhất (lastSensorRead, lastTelemetry) và chu kỳ riêng, được kiểm tra bằng millis() trong loop(); không dùng delay().',
  ],
  'document-7-3': [
    'Sổ tay vận hành bay (FOM) mô tả quy trình chuẩn cho từng chế độ, từng lệnh và cách xử lý sự cố.',
    'Mỗi lần vệ tinh bay qua trạm: AOS (bắt đầu thu tín hiệu), kiểm tra trạng thái, gửi lệnh, xả dữ liệu đã lưu (data dump), rồi LOS (mất tín hiệu). Cửa sổ liên lạc LEO chỉ vài phút nên dữ liệu ưu tiên phải gửi trước.',
    'Chu kỳ quỹ đạo LEO khoảng 95 phút: khoảng 60 phút được chiếu sáng và 35 phút trong vùng tối (eclipse). Mô phỏng bằng biến trạng thái ánh sáng để kiểm thử việc chuyển chế độ nguồn trong FreeRTOS.',
  ],
  'document-8-widgets': [
    'Chọn widget theo kiểu dữ liệu: đồng hồ tròn (radial gauge) cho đại lượng có ngưỡng như điện áp pin; đồ thị chuỗi thời gian cho nhiệt độ, áp suất; mô hình 3D cho tư thế IMU; bản đồ ground track cho tọa độ GPS.',
    'Raw terminal hiển thị log thô để gỡ lỗi; uplink console gửi lệnh và chờ phản hồi; thư viện ảnh nhận ảnh theo từng phần.',
    'Mỗi widget ánh xạ tới một trường dữ liệu cụ thể (ví dụ eps.v, env.t) kèm đơn vị và thời điểm cập nhật; hiển thị rõ khi dữ liệu cũ hoặc mất kết nối.',
  ],
};

export function lessonReadingContent(lab, lesson) {
  const notes = READING_NOTES[lesson.id] || [];
  return `# ${lesson.label}: ${lesson.title}\n\n${notes.join('\n\n')}\n\n## Tự kiểm tra\n\n- Giải thích các khái niệm bằng sơ đồ hoặc ví dụ.\n- Xác định cấu hình phần cứng và cách quan sát kết quả cho bài thực hành liên quan.\n- Ghi lại điểm chưa rõ để đối chiếu khi chạy chương trình.\n\nMục tiêu Lab ${lab.id}: ${lab.description}\n\n[Lộ trình và các kho bài thực hành PTITCube](https://github.com/PTITCube)\n`;
}
