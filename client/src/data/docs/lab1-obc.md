# Lab 1: Máy tính trên Bo mạch (OBC) & Môi trường Lập trình Nhúng

---

## 📖 Doc 1.1: Kiến trúc Phần cứng Vi điều khiển ESP32-WROOM-32 & Các Chuẩn Giao tiếp

### 1. Vai trò của Phân hệ Máy tính trên Bo mạch (OBC - On-Board Computer)
Trong một vệ tinh CubeSat tiêu chuẩn, Máy tính trên Bo mạch (**OBC**) là phân hệ chỉ huy và điều khiển hạt nhân. OBC tương đương với "bộ não" chỉ huy, chịu trách nhiệm thực thi các nhiệm vụ cốt tử:
- **Khởi động & Quản lý Hệ thống (System Initialization & Bootstrapping):** Quản lý chuỗi nạp nguồn, phục hồi tham số cấu hình từ bộ nhớ bất biến và kiểm tra tính toàn vẹn của các ngoại vi khi vệ tinh được cấp điện từ ống phóng.
- **Thu thập & Đóng gói Dữ liệu Viễn trắc (Telemetry Acquisition & Framing):** Đọc định kỳ các tham số trạng thái sinh tồn từ phân hệ nguồn (điện áp, dòng điện, dung lượng pin), cảm biến môi trường (nhiệt độ, áp suất) và cảm biến quán tính để đóng gói thành các cấu trúc bản tin chuẩn.
- **Tiếp nhận & Thực thi Mệnh lệnh Viễn lệnh (Telecommand Processing):** Lắng nghe dữ liệu từ bộ thu vô tuyến, giải mã cú pháp mệnh lệnh, kiểm tra tính toàn vẹn và bản quyền điều hành trước khi thực thi các thao tác cấu hình lại hệ thống hoặc kích hoạt tải trọng.
- **Giám sát Trạng thái & Khắc phục Sự cố Tự động (FDIR - Fault Detection, Isolation, and Recovery):** Theo dõi nhịp tim hệ thống, duy trì bộ định thời chó canh Watchdog và kích hoạt các quy trình dự phòng hoặc khởi động lại an toàn khi phát hiện lỗi bất thường do bức xạ không gian gây ra.

```mermaid
flowchart TD
    subgraph OBC_Core ["🖥️ KHỐI XỬ LÝ TRUNG TÂM OBC (ESP32-WROOM-32)"]
        direction TB
        CPU0["Core 0 (Protocol / Network Engine)
Chuyên trách giao tiếp vô tuyến & Web"]
        CPU1["Core 1 (Application / Mission FSM)
Chuyên trách thuật toán & cảm biến"]
        SRAM["520 KB SRAM Nội bộ
(Ngăn xếp tác vụ & Bộ đệm dữ liệu)"]
        FLASH["4 MB / 16 MB SPI Flash
(Firmware Binary & Phân vùng NVS)"]
    end
    
    subgraph Interfaces ["CÁC GIAO DIỆN NGOẠI VI"]
        GPIO_OUT["Digital Output: LED Chỉ thị, Kích hoạt Nguồn"]
        GPIO_IN["Digital Input: Nút nhấn, Công tắc hành trình"]
        ADC_CH["ADC 12-bit: Giám sát Điện áp Pin / Cảm biến"]
        PWM_CH["LEDC PWM: Điều chế Xung công suất"]
        UART_CH["UART Hardware: Cổng Serial Monitor & Nạp Code"]
        SHIFT_REG["74HC595: Mở rộng Hiển thị LED 7 Đoạn"]
    end
    
    CPU0 <--> SRAM
    CPU1 <--> SRAM
    CPU1 --> FLASH
    CPU1 --> GPIO_OUT
    CPU1 <-- GPIO_IN
    CPU1 <-- ADC_CH
    CPU1 --> PWM_CH
    CPU0 <--> UART_CH
    CPU1 --> SHIFT_REG
```

### 2. Thông số Kỹ thuật Chi tiết Vi xử lý ESP32-WROOM-32
Bộ kit vệ tinh PTITCube sử dụng module vi xử lý **ESP32-WROOM-32** của Espressif Systems với các thông số cấp công nghiệp:

| Đặc tính Phần cứng | Thông số Kỹ thuật Chi tiết | Ý nghĩa trong Thiết kế CubeSat |
| :--- | :--- | :--- |
| **Kiến trúc Lõi (CPU)** | 32-bit Xtensa Dual-Core LX6 | 2 lõi độc lập cho phép phân tách rạch ròi giữa tác vụ truyền thông và tác vụ bay |
| **Tần số Xung nhịp** | $80\text{ MHz} - 240\text{ MHz}$ (Mặc định $240\text{ MHz}$) | Cho phép hạ xung xuống $80\text{ MHz}$ để tiết kiệm năng lượng pin khi ở chế độ quỹ đạo bình thường |
| **Bộ nhớ SRAM** | $520\text{ KB}$ SRAM nội bộ | Dung lượng bộ đệm lớn, thoải mái lưu trữ các khối ảnh JPEG và mảng cảm biến |
| **Bộ nhớ Flash ngoài** | $4\text{ MB}$ SPI Flash tốc độ cao | Chứa nhị phân chương trình điều hành bay và phân vùng lưu trữ cấu hình NVS |
| **Độ phân giải ADC** | SAR ADC 12-bit (0 - 4095) | Đo đạc điện áp tương tự của pin và các cảm biến analog với độ nhạy cao |
| **Bộ điều khiển PWM** | LEDC Controller 16 kênh độc lập | Điều chế độ rộng xung linh hoạt từ 1-bit đến 16-bit cho điều khiển độ sáng và công suất |
| **Cổng Nối tiếp UART** | 3 bộ điều khiển UART phần cứng | Kết nối đồng thời với máy tính, module định vị GPS và module thu phát sóng LoRa |
| **Điện áp Hoạt động** | $3.0\text{V} - 3.6\text{V}$ (Danh định $3.3\text{V}$) | Tương thích hoàn hảo với đường bus nguồn chuẩn vệ tinh 3.3V từ bo EPS |

### 3. Sơ đồ Chân Đặc biệt (Strapping Pins) & Lưu ý An toàn Phần cứng
ESP32 sở hữu một nhóm chân cấu hình đặc biệt gọi là **Strapping Pins** (`GPIO0`, `GPIO2`, `GPIO12`, `GPIO15`). Mức logic tại các chân này trong đúng thời điểm cạnh lên của tín hiệu Reset (khởi động nguồn) sẽ quyết định chế độ vận hành của vi điều khiển:

- **`GPIO0`:** Quyết định chế độ nạp hay chế độ chạy:
  - Mức `LOW` khi khởi động: Vi điều khiển vào chế độ **Download Boot** (sẵn sàng nạp firmware qua UART).
  - Mức `HIGH` khi khởi động: Vi điều khiển vào chế độ **SPI Boot** (nạp và thực thi firmware bình thường từ Flash). *Lưu ý: Không được kéo chân này xuống mass bằng điện trở giá trị nhỏ khi thiết kế phần cứng*.
- **`GPIO2`:** Phải được giữ ở mức `LOW` hoặc thả nổi (floating) để vào chế độ nạp flash thành công. Trên bo mạch kit, chân này thường được gắn kèm LED nhịp tim (Heartbeat LED) thông qua một điện trở hạn dòng phù hợp.
- **`GPIO12` (MTDI):** Chọn mức điện áp cho Flash nội ($3.3\text{V}$ hoặc $1.8\text{V}$). Nếu vô tình bị kéo lên mức cao khi khởi động, chip có thể chọn sai mức áp $1.8\text{V}$ và không đọc được Flash, dẫn đến hiện tượng treo bootloop.
- **`GPIO15` (MTDO):** Điều khiển việc bật/tắt các thông điệp gỡ lỗi khởi động (Boot ROM Debug Messages) gửi ra cổng UART0.

### 4. Chi tiết Các Khối Chức năng Ngoại vi Cơ bản

#### A. Xuất / Nhập Tín hiệu Số (Digital I/O)
- **Ngõ ra số (`OUTPUT`):** Cấu hình tầng đệm kéo đẩy (Push-Pull). Khi xuất `HIGH`, điện áp ngõ ra xấp xỉ $3.3\text{V}$; khi xuất `LOW`, điện áp xấp xỉ $0\text{V}$. Dòng điện ngõ ra tối đa cho mỗi chân GPIO khoảng $12\text{ mA} - 20\text{ mA}$, bắt buộc phải có điện trở hạn dòng ($220\Omega - 1\text{k}\Omega$) khi nối trực tiếp vào đèn LED chỉ thị.
- **Ngõ vào số (`INPUT` / `INPUT_PULLUP`):** Khi đọc tín hiệu từ nút nhấn cơ học hoặc công tắc hành trình, trạng thái chân hở có thể bị nhiễu điện từ cảm ứng gây dao động mức logic. Cấu hình `INPUT_PULLUP` kích hoạt điện trở nội ($45\text{ k}\Omega$) kéo chân lên nguồn $3.3\text{V}$, đảm bảo mức logic luôn ổn định ở mức `HIGH` khi công tắc mở và rơi dứt khoát về `LOW` khi công tắc đóng xuống mass GND.

#### B. Bộ Chuyển đổi Tương tự sang Số (ADC - Analog-to-Digital Converter)
- ESP32 tích hợp hai bộ ADC SAR 12-bit: ADC1 (8 kênh: GPIO32 - GPIO39) và ADC2 (10 kênh: GPIO0, 2, 4, 12-15, 25-27).
- Giá trị số nguyên chuyển đổi:
  $$\text{ADC\_Value} = \frac{V_\text{in}}{V_\text{ref}} \times 4095$$
- *Đặc tính phi tuyến:* ADC của ESP32 có hiện tượng phi tuyến ở vùng điện áp cực thấp ($< 0.1\text{V}$) và vùng cực cao sát $3.3\text{V}$. Trong lập trình thực tế, cần áp dụng hệ số hiệu chuẩn suy giảm (Attenuation: `ADC_ATTEN_DB_11` cho dải đo $0 - 3.1\text{V}$) và lập bảng nội suy để đạt độ chính xác cao.

#### C. Điều chế Độ rộng Xung LEDC (PWM - Pulse Width Modulation)
- Bộ điều khiển LEDC PWM của ESP32 không sử dụng bộ định thời Timer truyền thống của vi điều khiển 8-bit mà hỗ trợ tạo xung hoàn toàn bằng phần cứng với độ chính xác cao:
  - Tần số xung ($f_\text{pwm}$): Cấu hình từ vài Hz tới hàng MHz.
  - Độ phân giải Duty Cycle: Lựa chọn từ 1-bit đến 16-bit (ví dụ với độ phân giải 8-bit, giá trị thay đổi từ $0$ đến $255$; với 10-bit từ $0$ đến $1023$).
  - Ứng dụng: Điều khiển mượt mà độ sáng đèn LED chỉ thị hoặc kiểm soát công suất phát nhiệt tản nhiệt vệ tinh.

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 1.2 - Doc 1.4)
1. **Chế độ cấu hình `INPUT_PULLUP` cho nút nhấn trên ESP32 mang lại tác dụng kỹ thuật quan trọng nào?**
   - A. Tự động xuất xung nhịp PWM điều khiển độ sáng
   - B. Làm chậm tốc độ đọc tín hiệu để tiết kiệm pin
   - C. Kéo chân lên 3.3V, tránh thả nổi sinh tín hiệu rác
   - D. Tự động reset vi điều khiển khi nhấn nút khẩn cấp
   - *Đáp án:* **C**
   - *Giải thích:* Điện trở kéo lên nội tránh tình trạng chân bị thả nổi (Floating) sinh nhiễu mức logic bất định khi nút nhấn đang ở trạng thái hở.

2. **Giao tiếp Web Serial API trong môi trường Web IDE của CubeSat-LMS có ưu điểm nổi bật gì?**
   - A. Cho phép nạp code trực tiếp từ trình duyệt qua cổng USB
   - B. Bắt buộc người dùng phải cài đặt driver thủ công
   - C. Chỉ hoạt động khi có kết nối WiFi tốc độ cao
   - D. Tự động biên dịch mã nguồn trên máy chủ từ xa
   - *Đáp án:* **A**
   - *Giải thích:* Web Serial API cho phép trình duyệt truy cập trực tiếp cổng nối tiếp phần cứng USB-UART mà không cần cài đặt thêm phần mềm phụ trợ.

---

## 📖 Doc 1.5: Nguyên lý Vi Mạch Dịch Bit Chốt Dữ Liệu 74HC595 & Kỹ thuật Lập trình LED 7 Đoạn

### 1. Nguyên lý Hoạt động của IC 74HC595
- Để tiết kiệm các chân GPIO quý giá của OBC, kit tích hợp vi mạch dịch bit nối tiếp sang song song **74HC595** (8-bit Serial-In Parallel-Out Shift Register) để điều khiển màn hình hiển thị LED 7 đoạn:
  - Chân `DS` (Data Serial): Đường truyền dữ liệu bit nối tiếp.
  - Chân `SH_CP` (Shift Clock): Cạnh lên của xung nhịp sẽ dịch bit hiện tại vào thanh ghi dịch 8 tầng.
  - Chân `ST_CP` (Storage / Latch Clock): Cạnh lên của xung nhịp chốt toàn bộ 8 bit từ thanh ghi dịch ra các chân ngõ ra song song ($Q_0 - Q_7$), bảo đảm đèn LED không bị nhấp nháy trong quá trình dịch bit.

---

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 1.1)
1. **Trong kiến trúc vi xử lý lõi kép ESP32-WROOM-32 của OBC, nhóm chân nào sau đây thuộc loại chân Strapping Pins cần đặc biệt lưu ý khi khởi động?**
   - A. GPIO 16, 17, 21, 22
   - B. GPIO 18, 19, 23, 5
   - C. GPIO 34, 35, 36, 39
   - D. GPIO 0, 2, 12, 15
   - *Đáp án:* **D**
   - *Giải thích:* Mức logic tại các chân GPIO 0, 2, 12, 15 tại thời điểm Reset quyết định chế độ Download Boot, điện áp cấp Flash và xuất thông điệp debug.

2. **Tại sao bộ nhớ SRAM nội 520 KB của ESP32 lại đóng vai trò quan trọng đối với phần mềm bay vệ tinh?**
   - A. Dùng để lưu trữ toàn bộ hệ điều hành khi mất điện
   - B. Cung cấp không gian bộ đệm đủ lớn cho ngăn xếp đa nhiệm và lưu trữ tạm thời các khối ảnh JPEG
   - C. Dùng để nạp firmware trực tiếp từ vệ tinh mẹ
   - D. Dùng để biến đổi tương tự sang số
   - *Đáp án:* **B**
   - *Giải thích:* SRAM tốc độ cao là nơi lưu trữ ngăn xếp các tác vụ FreeRTOS và bộ đệm thu phát viễn thông trong thời gian thực.

---

## 📖 Doc 1.2: Hướng dẫn Môi trường Lập trình Web IDE & Giao tiếp Nạp Firmware Web Serial API

### 1. Kiến trúc Đám mây Hiện đại của PTITCube Web IDE
Môi trường thực hành của PTITCube được thiết kế theo mô hình điện toán đám mây thế hệ mới (Cloud-native Embedded Development), giải phóng hoàn toàn học viên khỏi gánh nặng cài đặt chuỗi công cụ phần mềm:
- **Khung Biên tập Mã nguồn (Monaco Editor):** Nhân trình soạn thảo chuẩn công nghiệp (cùng nền tảng với VS Code), hỗ trợ tô màu cú pháp C++, gợi ý mã thông minh (IntelliSense) và kiểm tra lỗi cú pháp theo thời gian thực.
- **Lập trình Kéo thả Khối (Blockly Engine):** Dành cho học viên bắt đầu làm quen với tư duy thuật toán. Mỗi khối lệnh kéo thả tương ứng với một đoạn mã C++ chuẩn mực được tạo ra ngay lập tức bên khung mã nguồn.
- **Trình Biên dịch Đám mây (Cloud Compiler Backend):** Khi học viên nhấn nút "Biên dịch" (Compile), mã nguồn C++ được đóng gói an toàn và gửi về cụm máy chủ đám mây tốc độ cao. Máy chủ thực hiện biên dịch chéo (Cross-compilation) và đóng gói thành tệp nhị phân duy nhất `firmware.bin` trong vòng vài giây, sau đó trả về trực tiếp cho trình duyệt web.

### 2. Cơ chế Nạp Firmware Trực tiếp qua Web Serial API
Web Serial API là tiêu chuẩn web hiện đại cho phép trình duyệt (như Google Chrome, Microsoft Edge) thiết lập kết nối dữ liệu nối tiếp hai chiều với các thiết bị phần cứng cắm qua cổng USB mà không cần cài đặt thêm phần mềm trung gian:
1. **Yêu cầu Quyền Truy cập Cổng (Port Handshake):** Người dùng nhấp "Kết nối Thiết bị", trình duyệt mở hộp thoại cho phép chọn đúng cổng COM của chip chuyển đổi USB-UART trên kit.
2. **Thiết lập Tham số Nối tiếp:** Mở cổng với tốc độ baud chuẩn $115200\text{ bps}$, 8 bit dữ liệu, không có bit chẵn lẻ (None Parity), 1 bit dừng (Stop bit: 8-N-1).
3. **Kích hoạt Reset vào Bootloader:** Trình duyệt điều khiển các đường tín hiệu DTR và RTS để tự động kéo chân `EN` và `GPIO0` của ESP32 về mức thấp đúng chuỗi thời gian, đưa vi điều khiển vào chế độ ROM Bootloader.
4. **Ghi Dữ liệu Nhị phân (Flashing):** Tệp `firmware.bin` được chia thành các gói khối truyền qua giao thức SLIP/ESP-Serial xuống vùng nhớ Flash của ESP32.
5. **Khởi động lại Thực thi:** Trình duyệt nhả chân RTS/DTR, kích hoạt Reset đưa ESP32 vào chế độ thực thi mã nguồn mới.

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 1.5)
1. **Để xuất 8 bit dữ liệu ra IC dịch chốt 74HC595 điều khiển LED 7 đoạn, cần tuần tự điều khiển 3 đường tín hiệu nào?**
   - A. DS, SH_CP, ST_CP
   - B. SDA, SCL, INT
   - C. TX, RX, RTS
   - D. MOSI, MISO, SCK
   - *Đáp án:* **A**
   - *Giải thích:* Dữ liệu đưa vào từng bit qua chân DS theo nhịp xung SH_CP (Shift Clock), sau khi dịch đủ 8 bit sẽ kích hoạt xung cạnh lên tại ST_CP (Latch Clock) để chốt hiển thị.

2. **Lợi ích kỹ thuật chính của việc sử dụng vi mạch 74HC595 trên bo mạch OBC vệ tinh là:**
   - A. Tăng dung lượng bộ nhớ flash cho vi xử lý
   - B. Hạ điện áp cấp từ 5V xuống 3.3V cho cảm biến
   - C. Tiết kiệm chân GPIO quý giá của vi điều khiển
   - D. Tăng độ nhạy thu của module truyền thông LoRa
   - *Đáp án:* **C**
   - *Giải thích:* 74HC595 chuyển đổi giao tiếp nối tiếp 3 dây thành 8 đường ngõ ra song song, giúp tiết kiệm số lượng chân I/O hạn chế trên vi điều khiển.

---

## 📖 Doc 1.6: Nguyên lý Giao tiếp Nối tiếp UART & Kỹ thuật Lập trình Cổng Serial

### 1. Nguyên lý Giao tiếp Nối tiếp UART
- Cửa sổ **Serial Monitor** tích hợp trực tiếp trên Web IDE lắng nghe liên tục luồng ký tự truyền từ ESP32 lên máy tính qua hàm `Serial.print()` và `Serial.println()`.
- Hỗ trợ gửi chuỗi ký tự và lệnh điều khiển từ bàn phím xuống vi điều khiển để kiểm tra tương tác hai chiều.
- Tốc độ truyền thông nối tiếp tiêu chuẩn được khuyến nghị là $115200\text{ baud}$, tương đương khoảng $11.5\text{ KB/s}$, đủ nhanh để hiển thị nhật ký gỡ lỗi mà không làm nghẽn vi xử lý.

---

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 1.6)
1. **Trong giao tiếp nối tiếp UART chuẩn 8-N-1 ở tốc độ 115200 baud, ký hiệu '8-N-1' có ý nghĩa kỹ thuật là:**
   - A. 8 byte dữ liệu, kiểm tra lẻ, 1 giây chờ trễ
   - B. 8 bit dữ liệu, không kiểm tra chẵn lẻ, 1 bit dừng
   - C. 8 khung truyền, không mã hóa, 1 byte mở đầu
   - D. 8 kênh truyền, kiểm tra chẵn, 1 bit bắt đầu
   - *Đáp án:* **B**
   - *Giải thích:* 8-N-1 là cấu hình khung truyền nối tiếp phổ biến nhất: 8 data bits, No parity bit, 1 stop bit.

2. **Hiện tượng tràn bộ đệm nhận (Buffer Overflow) trên cổng UART xảy ra khi nào?**
   - A. Tốc độ baud của thiết bị phát quá thấp
   - B. Dây truyền dữ liệu TX và RX bị ngắn mạch
   - C. Điện áp nguồn cấp cho cổng UART bị sụt giảm
   - D. Dữ liệu đến nhanh hơn tốc độ CPU đọc và giải phóng
   - *Đáp án:* **D**
   - *Giải thích:* Khi phần cứng nhận dữ liệu liên tục nhưng chương trình không kịp gọi hàm read() để lấy dữ liệu ra khỏi bộ đệm FIFO, các byte mới sẽ ghi đè làm mất mát dữ liệu.

---

## 📖 Doc 1.7: Lý thuyết Mạng Không dây, Máy chủ Web HTTP Nhúng & Cơ chế SoftAP Mode

### 1. Phân hệ Mạng Không dây WiFi 802.11 của ESP32
Module ESP32 tích hợp hoàn chỉnh khối vô tuyến RF băng tần $2.4\text{ GHz}$ hỗ trợ chuẩn IEEE 802.11 b/g/n:
- **Giao thức mạng nhúng LwIP (Lightweight IP):** Ngăn xếp mạng tối ưu hóa cho hệ thống tài nguyên thấp, cung cấp đầy đủ các giao thức IP, ICMP, UDP, TCP, DHCP và DNS.
- **Tách biệt Lõi xử lý (Core Affinity):** Trong kiến trúc ESP32, ngăn xếp vô tuyến WiFi và mạng TCP/IP được điều hành ưu tiên trên **Core 0**, giải phóng hoàn toàn **Core 1** để thực thi các tác vụ bay và thuật toán của học viên mà không bị gián đoạn.

### 2. Hai Chế độ Hoạt động Mạng Cốt lõi
1. **Chế độ Trạm Khách (Station Mode - STA):**
   - ESP32 hoạt động như một thiết bị kết nối thông thường (tương tự điện thoại/máy tính), tìm kiếm và kết nối vào mạng WiFi cục bộ của phòng thí nghiệm thông qua định danh SSID và mật khẩu WPA2.
   - Nhận địa chỉ IP động từ bộ phát WiFi thông qua giao thức DHCP (ví dụ: `192.168.1.105`).
2. **Chế độ Điểm Truy cập Mềm (Soft Access Point - SoftAP):**
   - ESP32 tự đóng vai trò là một bộ phát WiFi độc lập, phát ra mạng không dây với tên gọi riêng (ví dụ: `PTITCube-OBC`) và bảo mật WPA2-PSK.
   - Tự động chạy máy chủ DHCP cấp phát dải địa chỉ IP nội bộ (thường là `192.168.4.1/24`).
   - *Ứng dụng trong không gian:* Cho phép kỹ sư kiểm tra và truy cập bảo trì vệ tinh không dây trên mặt đất trước giờ phóng mà không phụ thuộc vào hạ tầng mạng bên ngoài.

### 3. Máy chủ Web HTTP Nhúng (Embedded Web Server)
- Vệ tinh chạy một máy chủ HTTP lắng nghe các kết nối trên cổng tiêu chuẩn 80.
- **Cơ chế Phân tích Yêu cầu HTTP (Request Parsing):**
  - Khi trình duyệt truy cập địa chỉ IP của ESP32, nó gửi đi một yêu cầu HTTP `GET / HTTP/1.1`.
  - Máy chủ phân tích chuỗi URI, tạo một trang web HTML siêu nhẹ chứa giao diện bảng điều khiển và gửi phản hồi `HTTP/1.1 200 OK` kèm nội dung trang web về trình duyệt.
- **Điều khiển Phần cứng qua URL:**
  - Học viên có thể lập trình các đường dẫn điều khiển: truy cập `GET /led/on` thì thực thi lệnh `digitalWrite(LED_PIN, HIGH)`, truy cập `GET /led/off` thì thực thi lệnh `digitalWrite(LED_PIN, LOW)`.

---

## 📖 Doc 1.8: Quy chuẩn Lập trình C++ Định thời Non-blocking với hàm millis() Chống Tràn số

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 1.7 & Doc 1.8)
1. **Tại sao trong phần mềm bay của vệ tinh CẤM sử dụng hàm `delay()` để tạo độ trễ chu kỳ?**
   - A. Vì delay() làm tiêu hao bộ nhớ Flash của chip
   - B. Vì delay() làm nóng mạch điện tử vượt giới hạn
   - C. Vì delay() làm nghẽn CPU và có thể gây tràn Watchdog
   - D. Vì delay() làm thay đổi cấu hình các chân ngoại vi
   - *Đáp án:* **C**
   - *Giải thích:* Hàm delay() chiếm dụng vòng lặp CPU chặn hoàn toàn việc đọc cảm biến và viễn lệnh, có thể khiến bộ đếm Watchdog Timer hết hạn gây reset hệ thống.

2. **Khi tạo điểm phát sóng WiFi độc lập (SoftAP Mode) trên ESP32, vai trò của chế độ này trong giai đoạn thử nghiệm là gì?**
   - A. Cho phép máy tính điều khiển kết nối trực tiếp không cần router
   - B. Kết nối vệ tinh với mạng Internet vệ tinh Starlink
   - C. Tự động đồng bộ thời gian với trạm mặt đất GPS
   - D. Nâng công suất phát sóng lên mức công nghiệp
   - *Đáp án:* **A**
   - *Giải thích:* SoftAP biến ESP32 thành điểm phát sóng WiFi cục bộ, giúp máy tính hoặc điện thoại kết nối trực tiếp để cấu hình và xem thông số mà không cần mạng Internet ngoài.

---

## 💻 Hướng Dẫn Kỹ Thuật: Danh Mục Bài Thực Hành

### 1. Tại sao CẤM sử dụng `delay()` trong Phần mềm Bay?
Hàm `delay(ms)` là một hàm chặn hoàn toàn (Blocking Call). Khi được gọi, vi điều khiển bị nhốt trong một vòng lặp bận rỗng (Busy-waiting loop), tiêu tốn chu kỳ xung nhịp CPU mà không thể làm gì khác:
- Nếu gọi `delay(1000)` để nháy đèn LED, trong suốt 1 giây đó OBC hoàn toàn bị "mù và điếc": không đọc được cảm biến, không tiếp nhận được ký tự viễn lệnh truyền đến cổng Serial, và có thể dẫn đến việc bộ đếm chó canh Watchdog bị tràn gây reset hệ thống.
- **Quy tắc Vàng của Lập trình Nhúng Vũ trụ:** Luôn luôn sử dụng kỹ thuật định thời bất đồng bộ không chặn (Non-blocking Timing) dựa trên hàm đếm thời gian hệ thống `millis()`.

### 2. Kỹ thuật Định thời An toàn bằng `millis()` Chống Tràn số
Hàm `millis()` trả về số mili-giây trôi qua kể từ khi vi điều khiển khởi động dưới dạng số nguyên không dấu 32-bit (`unsigned long`).
- Giá trị tối đa của biến số nguyên không dấu 32-bit là:
  $$2^{32} - 1 = 4.294.967.295\text{ ms} \approx 49.71\text{ ngày}$$
- Sau xấp xỉ 49.7 ngày hoạt động liên tục trên quỹ đạo, biến `millis()` sẽ bị tràn số và quay trở về giá trị $0$.
- **Cú pháp C++ An toàn Tuyệt đối:** Luôn dùng phép trừ giữa hai số không dấu:
```cpp
unsigned long previousMillis = 0;
const unsigned long INTERVAL = 1000; // Chu kỳ 1000 ms

void loop() {
    unsigned long currentMillis = millis();
    // Phép trừ số nguyên không dấu tự động đúng ngay cả khi currentMillis bị tràn về 0
    if ((unsigned long)(currentMillis - previousMillis) >= INTERVAL) {
        previousMillis = currentMillis;
        // Thực thi tác vụ định kỳ
        toggleHeartbeatLED();
    }
    // CPU rảnh rỗi để tiếp tục xử lý các tác vụ khác ngay lập tức
    checkSerialCommands();
}
```

### 3. Danh mục 11 Bài Thực hành Lab 1
1. `Lab1-01_Blink_LED`: Nhấp nháy LED nhịp tim (Heartbeat) kiểm tra chu trình sống của bo mạch.
2. `Lab1-02_Control_Multiple_LEDs`: Điều khiển chuỗi LED tuần tự sử dụng mảng chân GPIO và vòng lặp for.
3. `Lab1-03_PWM_LED`: Lập trình điều chế độ rộng xung phần cứng LEDC PWM tạo hiệu ứng đèn thở (Breathing LED) thay đổi mượt mà độ sáng đèn LED.
4. `Lab1-04_Button`: Cấu hình ngõ vào `INPUT_PULLUP` đọc trạng thái nút nhấn cơ bản.
5. `Lab1-05_LED_Button`: Đảo trạng thái đèn LED theo sự kiện nhấn nút kết hợp thuật toán chống rung tiếp điểm cơ khí (Debounce).
6. `Lab1-06_7_Segment_LED`: Lập trình dịch 8 bit qua IC 74HC595 hiển thị số đếm từ 0 đến 9 trên LED 7 đoạn.
7. `Lab1-07_Serial_Communication`: Cấu hình cổng Serial ở tốc độ 115200 baud, truyền nhận chuỗi ký tự định dạng chuẩn.
8. `Lab1-08_Serial_Control_LED`: Bộ phân tích cú pháp ký tự nối tiếp nhận lệnh '1' bật LED, '0' tắt LED qua bàn phím máy tính.
9. `Lab1-09_WiFi_Connection`: Cấu hình chế độ Station (STA) kết nối mạng WiFi cục bộ và in địa chỉ IP.
10. `Lab1-10_WiFi_AP_Mode`: Thiết lập chế độ SoftAP phát mạng WiFi mang tên `PTITCube-OBC` với mã hóa WPA2.
11. `Lab1-11_Web_Server_LED`: Khởi tạo máy chủ HTTP nhúng cổng 80, thiết kế giao diện nút bấm trên trình duyệt điều khiển đèn LED từ xa.

### ❓ Câu Hỏi Đánh Giá Kỹ Năng Thực Hành (Lab 1)
1. **Để kiểm tra thời gian định kỳ an toàn chống tràn số sau 49.7 ngày của hàm `millis()`, biểu thức C++ nào sau đây là chuẩn mực?**
   - A. `if (millis() > targetMillis)`
   - B. `while (millis() < targetMillis)`
   - C. `if (currentMillis == previousMillis + INTERVAL)`
   - D. `if ((unsigned long)(currentMillis - previousMillis) >= INTERVAL)`
   - *Đáp án:* **D**
   - *Giải thích:* Phép trừ giữa hai số nguyên không dấu 32-bit luôn cho kết quả khoảng cách thời gian chính xác ngay cả khi biến thời gian tràn số quay về 0.
