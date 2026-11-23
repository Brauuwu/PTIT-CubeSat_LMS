# Ngân hàng Câu hỏi Trắc nghiệm - Lab 1

> **Tổng số câu hỏi:** 220 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 1.1: Kiến trúc Phần cứng Vi điều khiển ESP32-WROOM-32 & Chân Strapping Pins (90 câu)

### Câu 1
**Trong kiến trúc của một vệ tinh tiêu chuẩn CubeSat, phân hệ OBC (On-Board Computer) đóng vai trò chủ đạo nào?**

- **A.** Cung cấp nguồn năng lượng cho toàn bộ vệ tinh
- **B.** Điều phối hoạt động và xử lý dữ liệu vệ tinh
- **C.** Thu phát sóng vô tuyến công suất cao với trạm đất
- **D.** Bảo vệ kết cấu bo mạch khỏi rung động va đập cơ học

> **Đáp án:** **B**  
> **Giải thích:** OBC là máy tính trung tâm chịu trách nhiệm xử lý logic, điều phối các tác vụ điều khiển và giao tiếp nội bộ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 2
**Vi điều khiển chính được sử dụng làm lõi xử lý cho phân hệ OBC của vệ tinh PTITCube là dòng vi điều khiển nào?**

- **A.** ESP32-WROOM-32 lõi kép 32-bit
- **B.** PIC16F877A
- **C.** Atmega328P 8-bit
- **D.** STM32F103 ARM Cortex-M3

> **Đáp án:** **A**  
> **Giải thích:** OBC của PTITCube trang bị vi điều khiển ESP32-WROOM-32 kiến trúc Tensilica Xtensa Dual-Core 32-bit.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 3
**Kiến trúc nhân xử lý của vi điều khiển ESP32 trên bo mạch OBC thuộc dòng kiến trúc nào?**

- **A.** RISC-V Dual-Core 64-bit RV64
- **B.** ARM Cortex-M4 Single-Core 32-bit
- **C.** MIPS32 Micro-Core 32-bit M4K
- **D.** Xtensa Dual-Core 32-bit LX6

> **Đáp án:** **D**  
> **Giải thích:** ESP32 sử dụng vi xử lý 32-bit Xtensa LX6 kép từ Tensilica có khả năng tính toán song song.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 4
**Tần số xung nhịp tối đa (Clock Speed) mà hai nhân xử lý của vi điều khiển ESP32 có thể hoạt động là bao nhiêu?**

- **A.** 1 GHz
- **B.** 240 MHz
- **C.** 80 MHz
- **D.** 16 MHz

> **Đáp án:** **B**  
> **Giải thích:** Tần số dao động tối đa của ESP32 là 240 MHz, đáp ứng tốt các tác vụ tính toán thời gian thực.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 5
**Dung lượng bộ nhớ RAM tĩnh nội bộ (SRAM) tích hợp sẵn bên trong vi điều khiển ESP32 là bao nhiêu?**

- **A.** 128 KB
- **B.** 32 KB
- **C.** 520 KB
- **D.** 4 MB

> **Đáp án:** **C**  
> **Giải thích:** ESP32 tích hợp 520 KB SRAM nội bộ dùng cho lưu trữ ngăn xếp stack, heap và dữ liệu runtime.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 6
**Loại bộ nhớ nào trong ESP32 vẫn giữ nguyên được dữ liệu ngay cả khi ngắt toàn bộ nguồn điện cấp?**

- **A.** Bộ nhớ đệm Cache
- **B.** DRAM động
- **C.** Bộ nhớ Flash SPI
- **D.** SRAM nội bộ

> **Đáp án:** **C**  
> **Giải thích:** Bộ nhớ Flash là bộ nhớ bất biến (non-volatile) lưu trữ vĩnh viễn firmware và cấu hình.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 7
**Bộ nhớ SRAM bên trong vi điều khiển ESP32 có đặc tính vật lý cơ bản nào khi mất nguồn điện?**

- **A.** Dữ liệu bị xóa sạch hoàn toàn
- **B.** Dữ liệu bị mã hóa
- **C.** Dữ liệu tự động sao lưu vào ROM
- **D.** Dữ liệu được lưu trữ vĩnh viễn

> **Đáp án:** **A**  
> **Giải thích:** SRAM là bộ nhớ khả biến (volatile), cần có điện áp duy trì liên tục để lưu trữ trạng thái logic.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 8
**Khối đồng xử lý tiêu thụ điện năng siêu thấp (ULP - Ultra Low Power Coprocessor) của ESP32 có chức năng gì?**

- **A.** Điều khiển xung nhịp chính của các nhân LX6
- **B.** Tăng tốc độ mã hóa phần cứng mạng vô tuyến
- **C.** Giám sát GPIO và ADC trong chế độ Deep Sleep
- **D.** Xử lý đồ họa và giao tiếp hiển thị đa phương tiện

> **Đáp án:** **C**  
> **Giải thích:** ULP coprocessor hoạt động độc lập ngay cả khi 2 nhân chính đang ở trạng thái Deep Sleep tiết kiệm năng lượng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 9
**Điện áp nguồn danh định cấp cho vi điều khiển ESP32 hoạt động ổn định trên bo mạch OBC là bao nhiêu?**

- **A.** 3.3 V
- **B.** 1.8 V
- **C.** 5.0 V
- **D.** 12.0 V

> **Đáp án:** **A**  
> **Giải thích:** Điện áp làm việc chuẩn của dòng chip ESP32 là 3.3V (dải cho phép từ 3.0V đến 3.6V).  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 10
**Mức điện áp logic HIGH danh định tại các chân GPIO ngõ vào/ra của vi điều khiển ESP32 là bao nhiêu?**

- **A.** 5.0 V
- **B.** 3.3 V
- **C.** 1.5 V
- **D.** 9.0 V

> **Đáp án:** **B**  
> **Giải thích:** Mức logic HIGH của ESP32 tương đương với điện áp nguồn VDD là 3.3V.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 11
**Nếu đưa trực tiếp tín hiệu logic 5.0V vào chân GPIO của vi điều khiển ESP32 mà không có mạch giảm áp thì điều gì sẽ xảy ra?**

- **A.** Vi điều khiển vẫn hoạt động bình thường ổn định
- **B.** Tần số xung nhịp của vi điều khiển tăng gấp đôi
- **C.** Đánh thủng cổng bán dẫn và làm hỏng chân GPIO
- **D.** Bộ nhớ Flash SPI của vi điều khiển tự động bị xóa

> **Đáp án:** **C**  
> **Giải thích:** Các chân GPIO của ESP32 không tương thích 5V (Not 5V tolerant); điện áp vượt quá 3.6V sẽ phá hỏng diode bảo vệ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 12
**Trên môi trường Web LMS của PTITCube, quy trình biên dịch mã nguồn của học viên được thực hiện tại đâu?**

- **A.** Trong thẻ nhớ của bo mạch
- **B.** Trên máy chủ đám mây chuyên dụng
- **C.** Trực tiếp trên chip ESP32
- **D.** Trên card đồ họa của máy tính học viên

> **Đáp án:** **B**  
> **Giải thích:** LMS chuyển mã nguồn lên hệ thống máy chủ Cloud Compiler để dịch thành mã máy nhị phân (.bin) tối ưu.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 13
**Chân điều khiển phần cứng nào của ESP32 có chức năng reset toàn bộ vi điều khiển khi bị kéo xuống mức LOW?**

- **A.** Chân CLK
- **B.** Chân GND
- **C.** Chân VDD33
- **D.** Chân CHIP_PU

> **Đáp án:** **D**  
> **Giải thích:** Chân CHIP_PU (Enable/Power Up) kích hoạt mức logic LOW sẽ đưa toàn bộ vi điều khiển vào trạng thái ngừng hoạt động/reset.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 14
**Trong vi điều khiển ESP32, bộ nhớ chỉ đọc ROM (Read-Only Memory) có chức năng chính là gì?**

- **A.** Lưu trữ mã chương trình ứng dụng của người dùng
- **B.** Chứa mã khởi động nạp cố định từ nhà sản xuất
- **C.** Chứa các tập tin giao diện web của hệ thống OBC
- **D.** Lưu tạm thời dữ liệu đo đạc của các cảm biến ngoài

> **Đáp án:** **B**  
> **Giải thích:** ROM chứa mã máy bất biến do Espressif nạp sẵn để khởi động phần cứng ban đầu và nạp flash qua UART.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 15
**Module ESP32-WROOM-32 được bảo vệ bằng nắp chắn kim loại (Shielding Can) nhằm mục đích kỹ thuật gì?**

- **A.** Tăng tính thẩm mỹ bề mặt cho bo mạch vi điều khiển
- **B.** Chống nhiễu điện từ và bảo vệ linh kiện bên trong
- **C.** Hỗ trợ dẫn nhiệt làm mát bằng chất lỏng cho vi xử lý
- **D.** Gia tăng khối lượng tổng thể của hệ thống vệ tinh

> **Đáp án:** **B**  
> **Giải thích:** Vỏ kim loại hàn kín hoạt động như một lồng Faraday triệt tiêu nhiễu cao tần giữa mạch số và mạch RF.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 16
**Ăng-ten tích hợp sẵn trên bo mạch module ESP32-WROOM-32 thuộc loại ăng-ten nào?**

- **A.** Ăng-ten parabol
- **B.** Ăng-ten còi
- **C.** Ăng-ten dải vi dải PCB
- **D.** Ăng-ten thanh sợi quang

> **Đáp án:** **C**  
> **Giải thích:** Ăng-ten mạch in PCB dạng chữ F ngược (MIFA) được khắc trực tiếp trên lớp đồng của bo mạch với trở kháng 50 Ohm.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 17
**Nhiệt độ môi trường hoạt động tiêu chuẩn theo phân cấp công nghiệp của module ESP32-WROOM-32 là trong dải nào?**

- **A.** -100°C đến +200°C
- **B.** +20°C đến +30°C
- **C.** 0°C đến +40°C
- **D.** -40°C đến +85°C

> **Đáp án:** **D**  
> **Giải thích:** ESP32 đạt chuẩn công nghiệp dải nhiệt độ rộng từ -40°C đến +85°C hoặc +105°C.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 18
**Khi vi điều khiển ESP32 bị reset do mất nguồn đột ngột hoặc điện áp rơi dưới ngưỡng an toàn, mã nguyên nhân reset (Reset Reason) là gì?**

- **A.** BROWNOUT_RESET
- **B.** DEEPSLEEP_RESET
- **C.** POWERON_RESET
- **D.** SW_RESET

> **Đáp án:** **A**  
> **Giải thích:** Bộ dò sụt áp phần cứng tích hợp (BOD) kích hoạt cờ BROWNOUT_RESET khi điện áp tụt dưới ~2.7V.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 19
**Mã nguyên nhân reset 'SW_CPU_RESET' của ESP32 phản ánh trạng thái khởi động lại nào của hệ thống?**

- **A.** Khởi động lại do hiện tượng xung sét cảm ứng ngoài
- **B.** Khởi động lại do nguồn pin bị sụt áp đột ngột
- **C.** Khởi động lại bằng nút nhấn phần cứng vật lý
- **D.** Khởi động lại bằng lệnh phần mềm esp_restart

> **Đáp án:** **D**  
> **Giải thích:** Lệnh esp_restart() từ phần mềm kích hoạt chu trình phần mềm tái khởi động lõi CPU.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 20
**Khái niệm 'Core 0' và 'Core 1' trong vi điều khiển ESP32 phản ánh đặc điểm kiến trúc nào?**

- **A.** Hai phân vùng bộ nhớ Flash SPI chạy độc lập
- **B.** Hai nhân xử lý vật lý độc lập chạy song song
- **C.** Hai cổng giao tiếp phần cứng USB trên bo mạch
- **D.** Hai mạch ổn áp nguồn cấp riêng cho vi xử lý

> **Đáp án:** **B**  
> **Giải thích:** ESP32 là vi xử lý đa nhân đối xứng (SMP), cho phép chạy hai luồng lệnh hoàn toàn đồng thời.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 21
**Theo cấu hình phân bổ mặc định của framework ESP-IDF, Core 0 và Core 1 thường được ưu tiên phân bổ cho những tác vụ nào?**

- **A.** Core 0 luôn luôn ở trạng thái ngủ, Core 1 chạy code
- **B.** Cả hai nhân cùng thực thi đồng thời một dòng lệnh
- **C.** Core 1 đếm thời gian thực, Core 0 nhận lệnh cảm biến
- **D.** Core 0 xử lý truyền thông, Core 1 chạy ứng dụng

> **Đáp án:** **D**  
> **Giải thích:** Giao thức vô tuyến ngốn nhiều thời gian xử lý được gán cho Core 0, giúp mã của người dùng trên Core 1 không bị gián đoạn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 22
**Trong kiến trúc bộ nhớ ESP32, bộ nhớ RTC Fast Memory (8 KB) có khả năng đặc biệt nào?**

- **A.** Tăng tốc độ truyền nhận qua cổng nối tiếp UART
- **B.** Lưu trữ tập tin hình ảnh độ phân giải siêu cao
- **C.** Triệt tiêu hoàn toàn tác động của bức xạ gamma
- **D.** Lưu dữ liệu khi vi điều khiển ở chế độ Deep Sleep

> **Đáp án:** **D**  
> **Giải thích:** Bộ nhớ RTC nằm trong miền năng lượng duy trì (RTC Power Domain), không bị mất nội dung khi tắt nguồn nhân chính.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 23
**Bộ nhớ RTC Slow Memory (8 KB) trên ESP32 thường được bộ vi xử lý nào truy cập trong chế độ ngủ sâu?**

- **A.** Bộ đồng xử lý ULP Coprocessor
- **B.** Bộ điều khiển DMA
- **C.** Nhân LX6 Core 0
- **D.** Chip nhớ Flash ngoài

> **Đáp án:** **A**  
> **Giải thích:** Bộ xử lý ULP có thể truy cập RTC Slow Memory để lưu trữ kết quả đọc định kỳ các cảm biến khi CPU chính đang ngủ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 24
**Bộ điều khiển DMA (Direct Memory Access) trên ESP32 mang lại ưu thế vượt trội nào cho hệ thống OBC?**

- **A.** Truyền dữ liệu ngoại vi vào RAM không qua CPU
- **B.** Tự động tăng áp nguồn pin dự phòng của vệ tinh
- **C.** Tự động sửa lỗi cú pháp trong mã nguồn chương trình
- **D.** Làm mát chủ động tinh thể bán dẫn của vi điều khiển

> **Đáp án:** **A**  
> **Giải thích:** DMA giải phóng nhân xử lý khỏi công việc chuyển giao từng byte dữ liệu thô giữa ngoại vi và RAM.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 25
**Chế độ kết hợp 'AP+STA Mode' của ESP32 cho phép vi điều khiển thực hiện năng lực nào đồng thời?**

- **A.** Ngắt toàn bộ sóng vô tuyến để tiết kiệm năng lượng
- **B.** Vừa phát sóng trạm AP vừa kết nối vào mạng khác
- **C.** Truyền nhận dữ liệu tốc độ cao qua cáp đồng trục
- **D.** Chỉ thu hoặc chỉ phát tín hiệu tại từng thời điểm

> **Đáp án:** **B**  
> **Giải thích:** ESP32 hỗ trợ chế độ kép AP+STA cực kỳ linh hoạt để cấu hình mạng trung chuyển hoặc thiết lập tham số ban đầu.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 26
**Địa chỉ MAC (Media Access Control) của chip ESP32 có đặc điểm kỹ thuật nào sau đây?**

- **A.** Chuỗi ký tự thay đổi ngẫu nhiên mỗi lần cấp nguồn
- **B.** Mã định danh do lập trình viên cấu hình tùy chọn
- **C.** Chuỗi địa chỉ giống nhau trên mọi con chip ESP32
- **D.** Chuỗi 6 byte duy nhất được ghi cố định trong chip

> **Đáp án:** **D**  
> **Giải thích:** Địa chỉ MAC được nung cố định vào các thanh ghi eFuse từ nhà máy sản xuất, định danh vật lý duy nhất toàn cầu.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 27
**Khi giao tiếp qua cổng COM ảo trên máy tính, tín hiệu điện áp từ chân USB D+/D- được chuyển đổi thành tín hiệu gì?**

- **A.** Mức logic UART TTL cấp cho vi điều khiển
- **B.** Tín hiệu tương tự biến thiên liên tục
- **C.** Sóng vi ba
- **D.** Tín hiệu xoay chiều 220V

> **Đáp án:** **A**  
> **Giải thích:** Chip cầu nối nạp giải mã gói tin USB và chuyển thành luồng bit nối tiếp chuẩn TTL 3.3V đến chân RX/TX của chip.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 28
**Tại sao việc nối chung đường mass (GND) giữa hai thiết bị điện tử khi giao tiếp có dây lại là bắt buộc?**

- **A.** Tạo mốc điện áp tham chiếu 0V chung cho tín hiệu
- **B.** Gia tăng tần số dao động cho bộ thạch anh ngoài
- **C.** Cung cấp năng lượng vận hành cho màn hình hiển thị
- **D.** Triệt tiêu hiện tượng sét lan truyền qua dây cáp

> **Đáp án:** **A**  
> **Giải thích:** Mọi mức điện áp logic (0V hay 3.3V) đều được định nghĩa so với mốc 0V; mất GND chung sẽ làm mức logic trôi dạt và sai lệch.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 29
**Các chân GPIO nào sau đây trên vi điều khiển ESP32 chỉ có thể hoạt động ở chế độ đầu vào (Input Only)?**

- **A.** GPIO 34, 35, 36, 39
- **B.** GPIO 18, 19, 21, 22
- **C.** GPIO 14, 27, 26, 25
- **D.** GPIO 2, 4, 12, 13

> **Đáp án:** **A**  
> **Giải thích:** Các chân GPIO 34-39 thuộc miền GPI không có transistor kéo lên/kéo xuống nội bộ và không thể cấu hình làm ngõ ra Output.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 30
**Tại sao nhóm các chân chỉ có chiều vào (Input-Only GPI như GPI 34-39 trên ESP32) không thể dùng để xuất tín hiệu điều khiển bật/tắt thiết bị ngoại vi?**

- **A.** Vì các chân này hoàn toàn không có cấu trúc bán dẫn mạch kéo ngõ ra (Output Driver) mà chỉ có mạch đệm ngõ vào
- **B.** Vì các chân này chỉ hoạt động được ở điện áp 5V thay vì 3.3V
- **C.** Vì các chân này bị cố định làm đường nạp firmware không thể can thiệp
- **D.** Vì các chân này tự động kích hoạt chế độ ngủ sâu (Deep Sleep) khi có dòng điện xuất ra

> **Đáp án:** **A**  
> **Giải thích:** Các chân Input-Only (GPI 34 đến 39) chỉ có mạch nhận tín hiệu vào (Input Receiver) và kết nối ADC, hoàn toàn thiếu cấu trúc bán dẫn kéo nguồn/kéo mass (Push-Pull / Open-Drain) ở ngõ ra.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 31
**Các chân cấu hình khởi động (Strapping Pins) trên vi xử lý ESP32 có đặc điểm gì cần đặc biệt lưu ý khi thiết kế phần cứng?**

- **A.** Có thể tùy ý gắn điện trở kéo lên hoặc kéo xuống mà không ảnh hưởng tới chip
- **B.** Mức logic tại các chân này được lấy mẫu ngay thời điểm reset để quyết định chế độ nạp bootloader, điện áp bộ nhớ flash và trạng thái debug
- **C.** Chỉ hoạt động như chân analog và không thể dùng làm chân vào/ra số
- **D.** Tự động ngắt nguồn toàn bộ vi điều khiển nếu có tín hiệu logic thay đổi khi đang chạy

> **Đáp án:** **B**  
> **Giải thích:** Các chân strapping được mạch logic nội bộ lấy mẫu ngay tại thời điểm reset chip để xác định chế độ bootloader (Download Boot / SPI Boot), điện áp cấp bộ nhớ Flash và trạng thái xuất debug log.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 32
**Khi cấu hình chân GPIO ở chế độ `INPUT_PULLDOWN`, giá trị logic đọc được từ chân khi công tắc hở là gì?**

- **A.** Mức logic HIGH
- **B.** Mức logic LOW
- **C.** Mức xung nhịp
- **D.** Mức dao động ngẫu nhiên

> **Đáp án:** **B**  
> **Giải thích:** Điện trở kéo xuống nội bộ nối chân về GND, bảo đảm trạng thái logic 0 ổn định khi chưa có tín hiệu kích ngoài.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 33
**Điện trở kéo lên (Pull-up) hoặc kéo xuống (Pull-down) tích hợp bên trong chip ESP32 có giá trị điện trở danh định khoảng bao nhiêu?**

- **A.** 1 MegaOhm đến 10 MegaOhm
- **B.** 100 Ohm đến 200 Ohm
- **C.** 30 kOhm đến 50 kOhm
- **D.** 1 kOhm đến 2 kOhm

> **Đáp án:** **C**  
> **Giải thích:** Các điện trở nội của ESP32 có giá trị điển hình khoảng 45 kΩ, đủ để định hình mức logic mà không gây lãng phí dòng điện rò.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 34
**Trong mạch chỉ thị LED kiểu 'Active-High', đèn LED sẽ phát sáng khi chân GPIO của vi điều khiển ở trạng thái nào?**

- **A.** Khi chân được cấu hình INPUT
- **B.** Xuất mức logic HIGH
- **C.** Xuất mức logic LOW
- **D.** Ở trạng thái ngắt kết nối High-Z

> **Đáp án:** **B**  
> **Giải thích:** Active-High nối cực dương (Anode) của LED vào chân GPIO; khi GPIO xuất mức HIGH (3.3V), dòng điện chạy qua LED xuống GND làm LED sáng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 35
**Trong mạch chỉ thị LED kiểu 'Active-Low', đèn LED sẽ phát sáng khi chân GPIO ở trạng thái nào?**

- **A.** Khi chân nhận tín hiệu xung 10kHz
- **B.** Xuất mức logic LOW
- **C.** Xuất mức logic HIGH
- **D.** Khi vi điều khiển tắt nguồn

> **Đáp án:** **B**  
> **Giải thích:** Active-Low nối cực dương LED lên nguồn 3.3V và cực âm (Cathode) qua trở vào chân GPIO; khi GPIO kéo về LOW (0V), mạch kín và LED sáng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 36
**Đèn LED nhịp tim (Heartbeat LED) trên bo mạch OBC có vai trò kỹ thuật quan trọng nào trong thử nghiệm thực địa?**

- **A.** Đóng vai trò đèn chiếu sáng hỗ trợ chụp ảnh ban đêm
- **B.** Đo đạc tốc độ luồng không khí thổi qua thân vệ tinh
- **C.** Báo hiệu vòng lặp chính đang hoạt động bình thường
- **D.** Chỉ thị dung lượng pin dự phòng của vệ tinh còn đầy

> **Đáp án:** **C**  
> **Giải thích:** Đèn Heartbeat nhấp nháy đều đặn là dấu hiệu trực quan tức thời khẳng định CPU không bị rơi vào trạng thái bế tắc (hang/deadlock).  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 37
**Nếu đèn Heartbeat LED dừng nhấp nháy và sáng đứng im hoặc tắt ngấm hoàn toàn, kỹ sư có thể sơ bộ chẩn đoán điều gì?**

- **A.** Chương trình bị treo, tràn bộ nhớ hoặc sập nguồn
- **B.** Vệ tinh đã di chuyển vào vùng che khuất ánh sáng
- **C.** Nhiệt độ môi trường bên ngoài giảm xuống quá thấp
- **D.** Tốc độ baud rate cổng nạp được cấu hình lên quá cao

> **Đáp án:** **A**  
> **Giải thích:** Hiện tượng dừng nhấp nháy chứng tỏ luồng thực thi chính (main thread) đã bị dừng hoặc sập nguồn nuôi vi điều khiển.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 38
**Bộ chuyển đổi tương tự - số (ADC) tích hợp bên trong vi điều khiển ESP32 có độ phân giải danh định là bao nhiêu bit?**

- **A.** 8 bit
- **B.** 16 bit
- **C.** 10 bit
- **D.** 12 bit

> **Đáp án:** **D**  
> **Giải thích:** ADC của ESP32 là bộ biến đổi xấp xỉ liên tiếp (SAR ADC) độ phân giải 12-bit, cho ra dải giá trị số nguyên từ 0 đến 4095.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 39
**Với độ phân giải 12-bit của ADC trên ESP32, dải giá trị số nguyên nguyên bản (Raw value) trả về nằm trong khoảng nào?**

- **A.** 0 đến 4095
- **B.** 0 đến 1023
- **C.** 0 đến 255
- **D.** 0 đến 65535

> **Đáp án:** **A**  
> **Giải thích:** Độ phân giải $2^{12} = 4096$ mức lượng tử hóa, tương ứng các giá trị rời rạc từ 0 đến 4095.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 40
**ESP32 tích hợp bao nhiêu bộ ADC phần cứng độc lập bên trong vi điều khiển?**

- **A.** 4 bộ
- **B.** 1 bộ
- **C.** 8 bộ
- **D.** 2 bộ

> **Đáp án:** **D**  
> **Giải thích:** ESP32 có 2 khối ADC độc lập: ADC1 gồm 8 kênh (GPIO 32-39) và ADC2 gồm 10 kênh (GPIO 0, 2, 4, 12-15, 25-27).  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 41
**Hiện tượng hạn chế kỹ thuật lớn nhất của khối ADC2 trên ESP32 mà người lập trình cần đặc biệt lưu ý là gì?**

- **A.** ADC2 tiêu tán công suất điện năng quá lớn khi chạy
- **B.** ADC2 chỉ tiếp nhận và đo lường dải điện áp cực âm
- **C.** ADC2 ngừng hoạt động hoàn toàn khi nhiệt độ dưới 0
- **D.** Không dùng được ADC2 khi khối WiFi đang bật

> **Đáp án:** **D**  
> **Giải thích:** Driver phần cứng của WiFi chiếm quyền điều khiển độc quyền khối ADC2; khi WiFi hoạt động, việc đọc ADC2 sẽ trả về giá trị sai lệch.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 42
**Mức suy hao mặc định (Default Attenuation) của ADC trên ESP32 thường là 11dB, cho phép đo dải điện áp ngõ vào xấp xỉ bao nhiêu?**

- **A.** 0V đến 12V
- **B.** 0V đến 3.3V
- **C.** 0V đến 2.2V
- **D.** 0V đến 1.1V

> **Đáp án:** **B**  
> **Giải thích:** Mức suy hao 11dB (ADC_ATTEN_DB_11) mở rộng dải điện áp đo của chân ADC lên xấp xỉ mức điện áp nguồn 3.3V.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 43
**Đặc tính chuyển đổi điện áp sang số của ADC trên ESP32 có nhược điểm nào cần khắc phục khi cần độ chính xác cao?**

- **A.** ADC chỉ đo được 1 lần duy nhất
- **B.** Có vùng chết phi tuyến tính ở hai đầu dải đo
- **C.** ADC hoàn toàn tuyến tính 100%
- **D.** ADC bị lệch pha 180 độ

> **Đáp án:** **B**  
> **Giải thích:** Đặc tính truyền đạt của SAR ADC trên ESP32 bị bão hòa phi tuyến ở vùng áp dưới 0.1V và trên 3.1V; cần dùng bảng hiệu chuẩn nội.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 44
**Để giảm bớt hiện tượng nhảy số và nhiễu ngẫu nhiên khi đọc giá trị điện áp từ chân ADC, giải pháp phần mềm đơn giản nhất là gì?**

- **A.** Chỉ thực hiện đọc mẫu một lần duy nhất tại mỗi chu kỳ
- **B.** Gia tăng tần số xung nhịp xử lý của chip vi điều khiển
- **C.** Lấy mẫu nhiều lần liên tiếp rồi tính trung bình
- **D.** Tắt giao diện giám sát dữ liệu trên màn hình máy tính

> **Đáp án:** **C**  
> **Giải thích:** Thuật toán lấy trung bình nhiều mẫu liên tiếp triệt tiêu thành phần nhiễu trắng Gauss có kỳ vọng bằng 0.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 45
**Khái niệm 'Active Buzzer' (Còi chủ động) khác biệt với 'Passive Buzzer' (Còi thụ động) ở đặc điểm nào?**

- **A.** Loại thụ động tiếp nhận năng lượng sóng không cần dây
- **B.** Tích hợp sẵn dao động nội, cấp nguồn DC là kêu
- **C.** Loại chủ động chỉ phát âm thanh khi ngâm trong dung môi
- **D.** Cả hai có cấu tạo phần cứng và cách điều khiển như nhau

> **Đáp án:** **B**  
> **Giải thích:** Còi chủ động tích hợp transistor và cuộn dao động bên trong, phát âm tần số cố định khi có nguồn DC; còi thụ động cần cấp xung AC/PWM ngoài.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 46
**Cảm biến nhiệt độ tích hợp sẵn bên trong đế chip silicon (Internal Hall/Temperature Sensor) của ESP32 đo thông số gì?**

- **A.** Đo nhiệt độ đế chip silicon của chính ESP32
- **B.** Đo nhiệt độ các cell pin lithium trên vệ tinh
- **C.** Đo nhiệt độ môi trường chân không ngoài vũ trụ
- **D.** Đo tốc độ luồng gió vũ trụ thổi qua thân vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Cảm biến nhiệt độ on-chip phản ánh mức độ sinh nhiệt của chính mạch tích hợp ESP32, dùng cho giám sát an toàn nhiệt của chip.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 47
**Điện trở nội ngõ ra (Output Impedance) của một chân GPIO trên ESP32 khi dẫn mức logic cao xấp xỉ khoảng bao nhiêu?**

- **A.** 5 đến 10 kilo-Ohm
- **B.** 20 đến 40 Ohm
- **C.** 0.1 đến 0.5 Ohm
- **D.** 1 đến 2 Mega-Ohm

> **Đáp án:** **B**  
> **Giải thích:** Nội trở của các kênh bán dẫn MOSFET kéo lên/xuống bên trong chân GPIO có giá trị khoảng 20-40 Ohm.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 48
**Tụ điện lọc nguồn (Decoupling Capacitor) trị số 100nF gắn sát chân cấp nguồn VDD của ESP32 có nhiệm vụ cốt lõi nào?**

- **A.** Thay thế khối pin cung cấp năng lượng cho vệ tinh
- **B.** Triệt tiêu xung nhiễu cao tần trên đường nguồn
- **C.** Hạ điện áp xoay chiều 220V trực tiếp xuống mức 3.3V
- **D.** Tích trữ năng lượng vận hành cho toàn bộ vệ tinh

> **Đáp án:** **B**  
> **Giải thích:** Tụ gốm 100nF cung cấp dòng phóng tức thời cho các xung chuyển mạch cao tần, ổn định điện áp tại chân linh kiện.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 49
**Cuộn cảm dán hoặc hạt Ferrite (Ferrite Bead) thường được đặt trên đường nguồn cấp cho khối tương tự (Analog Power) nhằm mục đích gì?**

- **A.** Tăng xung nhịp xử lý cho khối máy tính trung tâm
- **B.** Tạo từ trường định hướng không gian cho vệ tinh
- **C.** Ngăn nhiễu cao tần từ mạch số sang mạch tương tự
- **D.** Nhân đôi điện áp đường cấp nguồn cho cảm biến

> **Đáp án:** **C**  
> **Giải thích:** Ferrite bead có trở kháng cao ở tần số vô tuyến, cách ly hiệu quả nhiễu xung nhịp của nhân CPU khỏi bộ chuyển đổi ADC nhạy cảm.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 50
**Khi cấp nguồn qua chân 'VIN' (hoặc 5V) trên kit ESP32 phát triển, điện áp 5V sẽ đi qua linh kiện nào trước khi nuôi chip ESP32?**

- **A.** Đi vào module WiFi
- **B.** IC ổn áp tuyến tính LDO để hạ xuống mức 3.3V
- **C.** Đi trực tiếp vào các chân của chip ESP32
- **D.** Đi qua biến áp xoay chiều

> **Đáp án:** **B**  
> **Giải thích:** IC LDO (Low Dropout Regulator) trên kit làm nhiệm vụ ghim điện áp ngõ vào 5V thành điện áp 3.3V ổn định nuôi lõi vi xử lý.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 51
**Chân GPIO nào sau đây trên ESP32 được nối mặc định với đèn LED báo tích hợp trên các kit phát triển thông dụng?**

- **A.** GPIO 0
- **B.** GPIO 34
- **C.** GPIO 16
- **D.** GPIO 2

> **Đáp án:** **D**  
> **Giải thích:** Trên đa số các kit ESP32 NodeMCU, đèn LED chỉ thị onboard màu xanh dương được nối cố định với chân GPIO 2.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 52
**Mạch lọc thông thấp (RC Low-pass Filter) thường gồm những linh kiện nào và có chức năng gì khi kết nối trước chân ngõ vào ADC?**

- **A.** Bộ thạch anh dao động giúp đồng bộ xung lấy mẫu ADC
- **B.** Cầu chì nhiệt nhằm ngắt dòng khi xảy ra ngắn mạch
- **C.** Điện trở và tụ điện giúp loại bỏ nhiễu tần số cao
- **D.** Hai đèn LED mắc đối đầu nhằm kẹp điện áp tín hiệu

> **Đáp án:** **C**  
> **Giải thích:** Mạch lọc RC khử hiện tượng răng cưa méo tín hiệu (Anti-aliasing filter) và làm phẳng các đỉnh xung gai nhiễu trên đường đo analog.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 53
**Tần số lấy mẫu tối đa trên một kênh ADC của ESP32 khi hoạt động ở chế độ polling cơ bản đạt khoảng bao nhiêu?**

- **A.** Tối đa đạt mức 100 MHz
- **B.** Tần số lấy mẫu 1 GHz
- **C.** Chỉ một mẫu trong một phút
- **D.** Vài chục nghìn mẫu mỗi giây

> **Đáp án:** **D**  
> **Giải thích:** Bộ SAR ADC của ESP32 có thể lấy mẫu liên tục ở tốc độ hàng chục kSPS qua các hàm phần cứng tiêu chuẩn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 54
**Điều gì xảy ra với các chân GPIO của ESP32 khi vi điều khiển được chuyển vào trạng thái Reset?**

- **A.** Tất cả các chân GPIO đồng loạt xuất ra điện áp 5V
- **B.** Tất cả các chân GPIO nối tắt trực tiếp xuống mass
- **C.** Các chân GPIO tự động phát chuỗi xung dao động
- **D.** Chuyển về trạng thái trở kháng cao tránh xung đột

> **Đáp án:** **D**  
> **Giải thích:** Khi chip ở trạng thái reset, mạch điều khiển cổng ngắt dòng để các chân ở trạng thái nổi trở kháng cao an toàn cho ngoại vi ngoài.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 55
**Trong cấu trúc chương trình C++ trên bo mạch OBC, hàm nào được hệ thống gọi thực thi một lần duy nhất khi khởi động?**

- **A.** Hàm loop()
- **B.** Hàm run()
- **C.** Hàm main_thread()
- **D.** Hàm setup()

> **Đáp án:** **D**  
> **Giải thích:** Hàm setup() là điểm nhập khởi tạo các chân GPIO, thiết lập giao tiếp Serial và cấu hình ngoại vi khi chip bật nguồn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 56
**Hàm nào trong mã nguồn C++ của bo mạch OBC được thực thi lặp đi lặp lại vô tận trong suốt thời gian vi điều khiển hoạt động?**

- **A.** Hàm restart()
- **B.** Hàm setup()
- **C.** Hàm loop()
- **D.** Hàm exit()

> **Đáp án:** **C**  
> **Giải thích:** Hàm loop() chạy liên tục trong một vòng lặp vô hạn (while(1)) để xử lý các chu kỳ đo đạc, kiểm tra trạng thái và điều khiển.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 57
**Lệnh `int state = digitalRead(BUTTON_PIN);` thực hiện hành vi nào sau đây?**

- **A.** Xuất tín hiệu mức logic điều khiển ra chân nút nhấn
- **B.** Tăng dòng điện qua chân khiến tiếp điểm nóng lên
- **C.** Đọc mức logic của chân BUTTON_PIN vào biến state
- **D.** Khởi tạo và gán giá trị biến state về mức số 0

> **Đáp án:** **C**  
> **Giải thích:** Hàm digitalRead đọc thanh ghi trạng thái đầu vào của chân GPIO, trả về HIGH (1) nếu điện áp xấp xỉ 3.3V hoặc LOW (0) nếu gần 0V.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 58
**Giả sử giá trị đọc được từ hàm `analogRead(34)` là 2048 trong dải đo 12-bit (0-4095) ứng với điện áp cực đại 3.3V, điện áp tính toán xấp xỉ là:**

- **A.** 0.825 V
- **B.** 2.475 V
- **C.** 1.65 V
- **D.** 3.3 V

> **Đáp án:** **C**  
> **Giải thích:** Công thức chuyển đổi: $V = \text{Raw} \times (3.3 / 4095.0) = 2048 \times (3.3 / 4095.0) \approx 1.65\text{ V}$.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 59
**Lệnh `analogSetAttenuation(ADC_11db);` trong mã nguồn khởi tạo ESP32 có ý nghĩa kỹ thuật gì?**

- **A.** Ngắt nguồn khối ADC nhằm cắt giảm dòng tiêu thụ
- **B.** Gia tăng điện trở kéo nội tại chân ngõ vào tương tự
- **C.** Mở rộng dải đo của ADC lên xấp xỉ mức 3.3V
- **D.** Hạ độ phân giải lấy mẫu của khối ADC xuống mức 8-bit

> **Đáp án:** **C**  
> **Giải thích:** Cấu hình suy hao 11dB cho phép ADC đo các mức điện áp tín hiệu tiệm cận mức nguồn danh định 3.3V.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 60
**Từ khóa `volatile` được khai báo trước biến toàn cục (ví dụ: `volatile int count;`) có ý nghĩa cốt lõi gì đối với trình biên dịch C++?**

- **A.** Yêu cầu biến số tự động tăng giá trị sau mỗi chu kỳ
- **B.** Chỉ định biến được lưu cố định vào bộ nhớ Flash
- **C.** Giới hạn miền giá trị của biến luôn luôn là số dương
- **D.** Không tối ưu hóa biến và luôn đọc trực tiếp từ RAM

> **Đáp án:** **D**  
> **Giải thích:** Từ khóa volatile ngăn trình biên dịch lưu giá trị biến vào thanh ghi tạm (register caching), bảo đảm tính nhất quán khi biến bị thay đổi bất ngờ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 61
**Toán tử dịch bit sang trái `value << 1` trong ngôn ngữ C++ tương đương về mặt toán học với phép tính nào?**

- **A.** Chia value cho 2
- **B.** Cộng 1 vào value
- **C.** Lấy căn bậc 2 của value
- **D.** Nhân value với 2

> **Đáp án:** **D**  
> **Giải thích:** Dịch trái 1 bit trong hệ nhị phân tương đương với việc nhân giá trị số nguyên đó với $2^1 = 2$.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 62
**Toán tử dịch bit sang phải `value >> 1` trong ngôn ngữ C++ tương đương với phép tính toán học nào?**

- **A.** Trừ 1 khỏi value
- **B.** Nhân value với 2
- **C.** Bình phương value
- **D.** Chia nguyên value cho 2

> **Đáp án:** **D**  
> **Giải thích:** Dịch phải 1 bit trong hệ nhị phân tương đương với phép chia lấy phần nguyên cho $2^1 = 2$.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 63
**Biểu thức logic `value & (1 << bitIndex)` thường được các lập trình viên sử dụng nhằm mục đích gì?**

- **A.** Ghi đè giá trị logic mới vào thanh ghi ngoài
- **B.** Kiểm tra bit tại vị trí bitIndex là 1 hay 0
- **C.** Đảo ngược thứ tự các bit nhị phân thanh ghi
- **D.** Xóa toàn bộ các bit trong biến về mức logic 0

> **Đáp án:** **B**  
> **Giải thích:** Mặt nạ bit `(1 << bitIndex)` kết hợp phép AND bit cho kết quả khác 0 nếu bit tương ứng tại vị trí đó bằng 1, và bằng 0 nếu bit đó bằng 0.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 64
**Trong một dự án C++ nhúng, tại sao nên hạn chế tối đa việc sử dụng kiểu dữ liệu `String` động của thư viện chuẩn trong vòng lặp liên tục?**

- **A.** String không hỗ trợ truyền qua cổng nối tiếp
- **B.** Dễ gây phân mảnh RAM do cấp phát heap liên tục
- **C.** Kiểu String chỉ tương thích với máy tính để bàn
- **D.** Kiểu String làm giảm tần số thạch anh dao động

> **Đáp án:** **B**  
> **Giải thích:** Phân mảnh heap do co dãn chuỗi liên tục trên hệ thống nhúng dung lượng RAM giới hạn có thể dẫn tới lỗi cấp phát bộ nhớ và gây crash hệ thống.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 65
**Giải pháp thay thế an toàn hơn cho đối tượng `String` động trong lập trình C++ nhúng để chứa chuỗi ký tự là gì?**

- **A.** Lưu trữ nội dung chuỗi ký tự trực tiếp vào ô nhớ eFuse
- **B.** Chuyển đổi chuỗi thành các biến số thực dấu phẩy động
- **C.** Dùng mảng ký tự cố định kết hợp với hàm snprintf
- **D.** Loại bỏ hoàn toàn các chuỗi ký tự khỏi mã nguồn nhúng

> **Đáp án:** **C**  
> **Giải thích:** Mảng ký tự tĩnh (Fixed-size char buffer) nằm trong vùng nhớ tĩnh (BSS/Data) hoặc Stack, hoàn toàn không gây phân mảnh vùng nhớ heap.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 66
**Lợi ích của việc sử dụng chỉ thị tiền xử lý `#define LED_PIN 2` thay vì biến số thông thường trong C++ nhúng là gì?**

- **A.** Chỉ thị tự động tạo một hàm điều khiển phần cứng mới
- **B.** Cấp phát cố định vùng nhớ 4 byte trong bộ nhớ tĩnh RAM
- **C.** Giúp chương trình thực thi chậm hơn để giảm nhiệt độ
- **D.** Thay thế trực tiếp khi tiền xử lý, không tốn RAM

> **Đáp án:** **D**  
> **Giải thích:** Chỉ thị tiền xử lý #define là phép thay thế chuỗi văn bản nguyên bản ở giai đoạn macro, hoàn toàn không chiếm giữ vùng nhớ RAM dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 67
**Trong C++, cấu trúc điều khiển `switch(mode) { case 0: ... break; case 1: ... break; }` thường được ưu tiên dùng để cài đặt khối chức năng nào?**

- **A.** Máy trạng thái hữu hạn điều khiển các chế độ
- **B.** Khối khuếch đại tín hiệu âm thanh tần số thấp
- **C.** Khối giải thuật nhân ma trận xoay tọa độ vệ tinh
- **D.** Khối nạp chương trình firmware qua kết nối mạng

> **Đáp án:** **A**  
> **Giải thích:** Cấu trúc switch-case là mẫu thiết kế kinh điển và trực quan nhất để chuyển đổi giữa các trạng thái rời rạc trong máy trạng thái FSM.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 68
**Từ khóa `break` trong mỗi nhánh `case` của cấu trúc `switch-case` có vai trò bắt buộc nào?**

- **A.** Thoát khỏi switch, tránh tràn xuống case kế tiếp
- **B.** Hiển thị dữ liệu trạng thái hiện tại lên Serial
- **C.** Kích hoạt khởi động lại vi điều khiển ngay tức thì
- **D.** Xóa sạch toàn bộ giá trị đang lưu của biến điều khiển

> **Đáp án:** **A**  
> **Giải thích:** Nếu thiếu lệnh break, chương trình sẽ tiếp tục chạy tuần tự các lệnh trong các case kế tiếp bất chấp điều kiện so sánh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 69
**Lệnh `esp_restart();` trong mã nguồn C++ của ESP32 thực hiện chức năng gì?**

- **A.** Kích hoạt phần mềm khởi động lại toàn bộ vi xử lý
- **B.** Cài đặt lại hệ điều hành thời gian thực FreeRTOS
- **C.** Xóa sạch toàn bộ dữ liệu trong bộ nhớ Flash của chip
- **D.** Cắt nguồn điện cấp cho vi điều khiển vĩnh viễn

> **Đáp án:** **A**  
> **Giải thích:** Hàm esp_restart() kích hoạt bộ quản lý reset phần cứng để khởi động lại hệ thống một cách có trật tự.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 70
**Trong ngôn ngữ C++, từ khóa `static` đặt trước một biến cục bộ trong hàm (ví dụ: `static int count = 0;`) có ý nghĩa gì?**

- **A.** Giá trị của biến tự động truyền lên cửa sổ dòng lệnh
- **B.** Giữ nguyên giá trị của biến qua các lần gọi hàm
- **C.** Biến trở thành hằng số và không thể sửa đổi giá trị
- **D.** Biến lập tức bị xóa khỏi bộ nhớ khi hàm thực thi xong

> **Đáp án:** **B**  
> **Giải thích:** Biến tĩnh cục bộ tồn tại trong suốt vòng đời của chương trình trên phân vùng bộ nhớ tĩnh, lưu giữ trạng thái giữa các chu kỳ lặp.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 71
**Tại sao trong hàm vòng lặp `loop()` của OBC nên tránh sử dụng các phép toán chia số thực phức tạp (`float` / `double`) trong các tác vụ kiểm tra tần số cao?**

- **A.** Tốn nhiều chu kỳ CPU và năng lượng hơn số nguyên
- **B.** Vi điều khiển không có bộ xử lý dấu phẩy động FPU
- **C.** Phép toán số thực làm quá tải dòng điện vào cảm biến
- **D.** Các biến số thực không thể lưu trữ trực tiếp trên RAM

> **Đáp án:** **A**  
> **Giải thích:** Tính toán trên số nguyên 32-bit được thực thi trong 1 chu kỳ máy, nhanh hơn và tiết kiệm năng lượng hơn nhiều so với giải thuật số thực.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 72
**Mục đích của việc sử dụng cờ báo trạng thái (Flag kiểu boolean) trong mã nguồn vòng lặp của OBC là gì?**

- **A.** Kích thích dòng điện xuất ra để làm sáng đèn LED ngoài
- **B.** Lưu sự kiện để các khối logic khác xử lý sau
- **C.** Xóa sạch mã nguồn chương trình đang chạy trong bộ nhớ
- **D.** Tăng kích thước dung lượng tập tin nhị phân biên dịch

> **Đáp án:** **B**  
> **Giải thích:** Biến cờ hiệu logic (Flag) cho phép tách biệt giữa khâu phát hiện sự kiện và khâu hành động xử lý trong kiến trúc phần mềm hướng sự kiện.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 73
**Kiến trúc phần mềm bay Command-Centric Architecture (C2A) mô tả hoạt động của vệ tinh như thế nào?**

- **A.** Mọi hành vi và tiến trình của vệ tinh đều quy về xử lý lệnh
- **B.** Mọi cảm biến đều tự động ghi trực tiếp vào thẻ nhớ ngoài
- **C.** Mọi tiến trình đều phải chờ tín hiệu xác nhận từ mặt đất
- **D.** Mọi vi điều khiển đều chạy độc lập không giao tiếp với nhau

> **Đáp án:** **A**  
> **Giải thích:** Kiến trúc C2A mô tả hành vi của vệ tinh thông qua hệ thống các lệnh (Command-driven), giúp tăng khả năng tái sử dụng mã nguồn và linh hoạt cấu hình trên quỹ đạo.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 74
**Khả năng tái cấu hình trên quỹ đạo (On-orbit Reconfiguration) của C2A mang lại lợi thế gì?**

- **A.** Cho phép sửa đổi hoặc bổ sung logic điều khiển sau khi phóng
- **B.** Cho phép thay thế linh kiện phần cứng bị hư hỏng từ xa
- **C.** Cho phép tăng dung lượng pin vật lý thêm ba mươi phần trăm
- **D.** Cho phép mở rộng góc quan sát quang học của ống kính máy ảnh

> **Đáp án:** **A**  
> **Giải thích:** On-orbit reconfiguration cho phép kỹ sư tải lên các bản vá phần mềm hoặc thay đổi bảng định tuyến lệnh để thích ứng với điều kiện mới của vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 75
**Tại sao ngôn ngữ C và C++ vẫn là lựa chọn hàng đầu cho phần mềm bay vệ tinh nhỏ?**

- **A.** Tối ưu hiệu năng thực thi và kiểm soát bộ nhớ tài nguyên chặt chẽ
- **B.** Dễ dàng tự động sửa lỗi cú pháp mà không cần biên dịch lại
- **C.** Hỗ trợ sẵn giao diện đồ họa người dùng ba chiều trên chip
- **D.** Không yêu cầu bất kỳ trình biên dịch chéo nào cho vi mạch

> **Đáp án:** **A**  
> **Giải thích:** Ngôn ngữ C/C++ cho phép lập trình mức thấp, tối ưu hóa kích thước mã máy và quản lý bộ nhớ trực tiếp, đáp ứng yêu cầu tài nguyên vi điều khiển khắt khe.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 76
**Hiện tượng Single Event Upset (SEU) gây ra ảnh hưởng nào đối với vi điều khiển OBC?**

- **A.** Làm lật giá trị bit nhị phân trong thanh ghi hoặc bộ nhớ RAM
- **B.** Làm nóng chảy lớp vỏ kim loại bảo vệ của khối vi mạch bán dẫn
- **C.** Làm đứt gãy hoàn toàn các đường mạch in đồng trên bo mạch
- **D.** Làm biến dạng cơ học tinh thể thạch anh dao động tạo xung nhịp

> **Đáp án:** **A**  
> **Giải thích:** SEU là lỗi mềm (Soft Error) xảy ra khi hạt ion hóa năng lượng cao đi xuyên qua bóng bán dẫn làm thay đổi trạng thái từ 0 thành 1 hoặc ngược lại trong bộ nhớ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 77
**Hiện tượng Single Event Latchup (SEL) khác biệt cơ bản với SEU ở điểm nguy hiểm nào?**

- **A.** Kích hoạt dòng ngắn mạch lớn có thể phá hủy hoàn toàn vi mạch
- **B.** Chỉ làm sai lệch tạm thời giá trị trong biến tạm thời gian
- **C.** Tự động biến mất ngay khi hạt ion hóa bay qua khỏi chip
- **D.** Không gây tiêu hao thêm bất kỳ dòng điện nào từ khối nguồn

> **Đáp án:** **A**  
> **Giải thích:** SEL kích hoạt cấu trúc ký sinh tạo mạch ngắn, dẫn đến dòng điện tăng vọt. Nếu không ngắt nguồn kịp thời (Power Cycle), vi mạch sẽ bị cháy hỏng vĩnh viễn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 78
**Cơ chế Watchdog Timer phần cứng độc lập bảo vệ OBC chống lại tình huống nào?**

- **A.** Tự động khởi động lại vi xử lý khi phần mềm rơi vào vòng lặp treo
- **B.** Tự động tắt nguồn máy ảnh khi chụp ảnh vượt quá độ phân giải
- **C.** Tự động làm mát chip trung tâm khi nhiệt độ vượt quá tám mươi độ
- **D.** Tự động nạp thêm dữ liệu từ trạm mặt đất khi bộ nhớ trống rỗng

> **Đáp án:** **A**  
> **Giải thích:** Watchdog Timer là bộ đếm ngược phần cứng. Nếu vi điều khiển bị treo và không xóa bộ đếm (Kick the dog) kịp thời, Watchdog sẽ phát tín hiệu Reset hệ thống.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 79
**Cơ chế giám sát chéo (Mutual Processor Monitoring) giữa hai vi xử lý hoạt động ra sao?**

- **A.** Mỗi chip liên tục gửi tín hiệu nhịp tim và khởi động lại chip kia nếu lỗi
- **B.** Hai chip luân phiên nhau tắt nguồn hoàn toàn theo từng chu kỳ bay
- **C.** Một chip chuyên giải mã lệnh và một chip chuyên nạp pin mặt trời
- **D.** Hai chip cùng thực thi một thuật toán và chia sẻ chung một thanh ghi

> **Đáp án:** **A**  
> **Giải thích:** Trong kiến trúc vi xử lý kép, hai CPU giám sát tín hiệu Heartbeat của nhau; nếu một bên gặp sự cố ngừng phản hồi, chip còn lại sẽ phát lệnh reset chip bị lỗi.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 80
**Giao thức bus nào trên OBC thường được ưu tiên kết nối với bộ nhớ lưu trữ tốc độ cao?**

- **A.** Giao thức bus SPI nối tiếp tốc độ megabit trên giây
- **B.** Giao tiếp mạng Ethernet một gigabit dây cáp quang học
- **C.** Giao thức bus CAN mở rộng dùng cho ô tô mặt đất
- **D.** Giao tiếp nối tiếp không đồng bộ một dây duy nhất

> **Đáp án:** **A**  
> **Giải thích:** Bus SPI (Serial Peripheral Interface) có tốc độ truyền dữ liệu rất cao (hàng chục MHz), lý tưởng để giao tiếp với bộ nhớ Flash và thẻ nhớ MicroSD trên OBC.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 81
**Giao thức I2C thường được chọn để kết nối các cảm biến đo đạc vì ưu điểm nào?**

- **A.** Chỉ cần hai đường dây tín hiệu và hỗ trợ địa chỉ hóa nhiều thiết bị
- **B.** Có tốc độ truyền tải nhanh gấp mười lần so với chuẩn bus SPI
- **C.** Khoảng cách truyền tín hiệu ổn định lên tới hàng trăm mét dây
- **D.** Không cần cấp nguồn chung giữa vi điều khiển và mạch cảm biến

> **Đáp án:** **A**  
> **Giải thích:** Bus I2C chỉ dùng 2 dây (SDA, SCL) và định địa chỉ thiết bị trên bus, giúp tiết kiệm chân vi điều khiển và đơn giản hóa thiết kế phần cứng bo mạch vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 82
**Mục đích của việc kiểm tra mã tổng kiểm tra CRC (Cyclic Redundancy Check) cho mã máy là gì?**

- **A.** Phát hiện sự sai lệch dữ liệu phần mềm do bức xạ ion hóa gây ra
- **B.** Tăng tốc độ đọc dữ liệu từ bộ nhớ bán dẫn vào thanh ghi CPU
- **C.** Nén kích thước mã nguồn chương trình xuống một nửa dung lượng
- **D.** Ngăn chặn trạm mặt đất đọc trộm nội dung mã lệnh của phần mềm

> **Đáp án:** **A**  
> **Giải thích:** Bức xạ không gian có thể làm sai lệch dữ liệu trong bộ nhớ không khả biến; kiểm tra CRC định kỳ giúp phát hiện các bit bị lỗi trước khi thực thi mã lệnh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 83
**Hệ thống mô phỏng phần mềm S2E kết nối với phần cứng OBC phục vụ bài toán gì?**

- **A.** Giả lập môi trường không gian và động lực học tư thế thời gian thực
- **B.** Thay thế hoàn toàn sự cần thiết của việc chế tạo vệ tinh thật
- **C.** Nạp điện cảm ứng không dây cho các khối pin gắn trên thân vệ tinh
- **D.** Khuếch đại công suất tín hiệu vô tuyến phát đi từ trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Môi trường S2E (Spacecraft Simulation Environment) mô phỏng động lực học quỹ đạo, từ trường Trái Đất, bức xạ mặt trời để đưa dữ liệu giả lập vào vi xử lý OBC.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 84
**Kiểm thử Hardware-in-the-Loop Simulation (HILS) cho OBC đem lại giá trị then chốt nào?**

- **A.** Xác thực phần mềm bay chạy trực tiếp trên phần cứng máy tính thật
- **B.** Kiểm tra độ chịu lực nén cơ học của các thanh ray góc CubeSat
- **C.** Đo đạc độ suy hao tín hiệu cao tần trong buồng câm sóng vô tuyến
- **D.** Đo khả năng cách nhiệt của màng phủ đa lớp trong buồng chân không

> **Đáp án:** **A**  
> **Giải thích:** HILS cho phép nạp và chạy mã phần mềm bay thật trên bo mạch vi xử lý thật, trong khi các đầu vào/ra cảm biến được máy tính mô phỏng giả lập.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 85
**Hệ thống phần mềm trạm mặt đất WINGS phối hợp với C2A thực hiện vai trò gì?**

- **A.** Gửi lệnh điều khiển và hiển thị dữ liệu đo xa theo thời gian thực
- **B.** Tự động thiết kế sơ đồ nguyên lý mạch in cho phân hệ máy tính
- **C.** Tính toán quỹ đạo phóng tối ưu cho các tầng đẩy tên lửa thương mại
- **D.** Kiểm tra độ bền va đập cơ học của các tấm pin quang điện mặt đất

> **Đáp án:** **A**  
> **Giải thích:** WINGS là gói phần mềm trạm mặt đất mã nguồn mở đồng bộ với C2A, cung cấp giao diện gửi lệnh điều khiển vi mô và giải mã dòng telemetry trực tiếp.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 86
**Nguyên lý thiết kế Fail-Safe đối với hệ thống phần mềm OBC yêu cầu điều gì?**

- **A.** Khi xảy ra lỗi nghiêm trọng hệ thống phải tự đưa về trạng thái an toàn
- **B.** Hệ thống không bao giờ được phép xuất hiện bất kỳ ngoại lệ nào
- **C.** Tự động xóa sạch toàn bộ hệ thống tệp tin lưu trữ để giải phóng RAM
- **D.** Phát xung điện áp cao vào các cổng ngoại vi để tự sửa chân mạch

> **Đáp án:** **A**  
> **Giải thích:** Thiết kế Fail-Safe đảm bảo rằng khi gặp lỗi không thể xử lý, hệ thống sẽ rơi vào trạng thái an toàn đã định trước (chế độ Safe) thay vì gây mất kiểm soát vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 87
**Phương thức Power-Cycle Reset bằng phần cứng xử lý tình huống nào mà phần mềm không thể?**

- **A.** Khôi phục chip vi xử lý bị kẹt dòng trong trạng thái Single Event Latchup
- **B.** Sắp xếp lại các phân vùng dữ liệu bị phân mảnh trên thẻ nhớ MicroSD
- **C.** Tự động căn chỉnh góc xoay của anten bám theo hướng trạm mặt đất
- **D.** Hàn gắn các mối nối dây dẫn bị nứt vỡ do rung lắc cơ học bãi phóng

> **Đáp án:** **A**  
> **Giải thích:** Khi xảy ra hiện tượng chốt điện SEL, toàn bộ CPU bị khóa cứng và tiêu thụ dòng lớn; chỉ có việc ngắt hẳn nguồn cung cấp (Power Cycle) mới có thể giải phóng mạch ký sinh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 88
**Cấu trúc phần mềm phân tầng trong hệ thống C2A giúp mang lại lợi ích gì?**

- **A.** Tách biệt mã điều khiển ứng dụng khỏi tầng giao tiếp phần cứng vi mạch
- **B.** Tăng gấp đôi tốc độ xung nhịp thạch anh của bộ vi xử lý trên bo
- **C.** Cho phép nạp đồng thời nhiều hệ điều hành Windows trên một chip nhúng
- **D.** Loại bỏ hoàn toàn yêu cầu về kiểm thử chức năng trước khi phóng

> **Đáp án:** **A**  
> **Giải thích:** Cấu trúc phân tầng (Drivers -> OS -> Core -> Applications) giúp cô lập sự phụ thuộc phần cứng, cho phép tái sử dụng phần mềm bay trên nhiều dòng vi điều khiển khác nhau.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 89
**Tác vụ nào trên OBC có mức độ ưu tiên cao nhất trong bộ lập lịch thời gian thực?**

- **A.** Xử lý ngắt Watchdog và bảo vệ an toàn cho khối nguồn điện hệ thống
- **B.** Thuật toán xử lý lọc màu và nén dữ liệu ảnh của camera khoa học
- **C.** Đọc dữ liệu nhiệt độ vỏ ngoài ghi nhật ký vào thẻ nhớ lưu trữ
- **D.** Phát chuỗi ký tự chào mừng định kỳ ra cổng nạp giao tiếp nối tiếp

> **Đáp án:** **A**  
> **Giải thích:** Các tác vụ bảo vệ sinh tồn (Watchdog reset, giám sát an toàn pin/nguồn) luôn được gán mức ưu tiên cao nhất để đảm bảo vệ tinh không bị mất kiểm soát.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

### Câu 90
**Giải pháp hiệu quả đối với các nhóm phát triển thiếu buồng chiếu xạ kiểm tra linh kiện là gì?**

- **A.** Lựa chọn linh kiện thương mại COTS đã có lịch sử bay vũ trụ thành công
- **B.** Bọc một lớp chì dày mười centimet xung quanh toàn bộ vỏ ngoài CubeSat
- **C.** Hạ quỹ đạo hoạt động của vệ tinh xuống dưới độ cao một trăm kilômét
- **D.** Chỉ cho phép vệ tinh hoạt động trong pha Trái Đất che khuất mặt trời

> **Đáp án:** **A**  
> **Giải thích:** Theo khuyến nghị của các chuyên gia Nhật Bản, việc chọn linh kiện COTS có Flight Heritage (đã từng bay và hoạt động tốt trên các CubeSat trước) giúp giảm thiểu rủi ro bức xạ đáng kể.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần cứng ESP32-WROOM-32, bộ nhớ SRAM/Flash và chân Strapping  

---

## 📖 Doc 1.2: Môi trường Lập trình Web IDE & Web Serial API (16 câu)

### Câu 91
**Dung lượng bộ nhớ Flash SPI tích hợp trên module ESP32-WROOM-32 tiêu chuẩn của bo mạch OBC là bao nhiêu?**

- **A.** 1 MB
- **B.** 32 MB
- **C.** 4 MB
- **D.** 512 KB

> **Đáp án:** **C**  
> **Giải thích:** Module ESP32-WROOM-32 sử dụng chip Flash ngoài 4 MB (32 Mbit) kết nối qua giao tiếp SPI tốc độ cao.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 92
**Trong phân vùng bộ nhớ Flash của ESP32, ứng dụng firmware chính của người dùng thường được lưu tại địa chỉ offset nào?**

- **A.** 0x00000
- **B.** 0x01000
- **C.** 0x10000
- **D.** 0x08000

> **Đáp án:** **C**  
> **Giải thích:** Địa chỉ 0x10000 là vị trí bắt đầu của phân vùng app0 (firmware thực thi) trong bảng phân vùng tiêu chuẩn.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 93
**Vị trí địa chỉ 0x1000 trong bộ nhớ Flash của ESP32 thường được nhà sản xuất sử dụng để chứa thành phần nào?**

- **A.** Dữ liệu WiFi NVS
- **B.** Mã nhị phân Bootloader cấp 2
- **C.** Bảng phân vùng
- **D.** Chương trình người dùng

> **Đáp án:** **B**  
> **Giải thích:** Vùng offset 0x1000 chứa mã bootloader nạp từ nhà sản xuất để khởi tạo ngoại vi tối thiểu và đọc partition table.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 94
**Bảng phân vùng (Partition Table) của ESP32 quy định cấu trúc bộ nhớ Flash thường nằm tại địa chỉ offset nào?**

- **A.** 0x20000
- **B.** 0x10000
- **C.** 0x8000
- **D.** 0x1000

> **Đáp án:** **C**  
> **Giải thích:** Offset 0x8000 chứa bảng phân vùng định nghĩa kích thước và vị trí của các vùng nhớ NVS, OTA data và app.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 95
**Trình duyệt web hiện đại kết nối trực tiếp với cổng nạp vi điều khiển trên máy tính thông qua công nghệ API nào?**

- **A.** Web Storage API
- **B.** WebRTC API
- **C.** Web Serial API
- **D.** Web Audio API

> **Đáp án:** **C**  
> **Giải thích:** Web Serial API cho phép các trang web trên trình duyệt Chrome/Edge đọc ghi trực tiếp dữ liệu từ cổng COM ảo.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 96
**Tệp kết quả sau khi biên dịch mã nguồn C++ trên máy chủ để sẵn sàng nạp xuống bộ nhớ Flash của ESP32 có định dạng gì?**

- **A.** .mp4
- **B.** .hex hoặc .bin
- **C.** .txt
- **D.** .docx

> **Đáp án:** **B**  
> **Giải thích:** File nhị phân (.bin) chứa mã máy nhị phân thực thi được nạp tuần tự vào từng sector của Flash.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 97
**Chân tín hiệu nào trên ESP32 đóng vai trò chốt trạng thái khởi động (Strapping Pin) để vào chế độ nạp ROM Bootloader?**

- **A.** GPIO 0
- **B.** GPIO 16
- **C.** GPIO 1
- **D.** GPIO 3

> **Đáp án:** **A**  
> **Giải thích:** Nếu GPIO0 ở mức LOW khi chip reset, ESP32 sẽ vào chế độ nạp firmware qua cổng UART.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 98
**Khi cả hai chân DTR và RTS cùng được phần mềm nạp kéo xuống mức logic tích cực, mạch auto-reset bảo đảm trạng thái nào?**

- **A.** Chân EN và GPIO0 không bị kéo xuống LOW cùng lúc
- **B.** Cả hai chân EN và GPIO0 đều bị chập mạch gây cháy
- **C.** Tần số hoạt động của vi điều khiển tự động tăng đôi
- **D.** Dữ liệu trong bộ nhớ Flash bị xóa sạch hoàn toàn

> **Đáp án:** **A**  
> **Giải thích:** Mạch đảo chéo BJT ngăn tình trạng xung đột, giúp chip nhận đúng xung kích reset trước khi nhả GPIO0.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 99
**Hệ thống quản lý file nhị phân của ESP32 sử dụng cơ chế kiểm tra toàn vẹn nào sau khi truyền xong mỗi khối flash?**

- **A.** Mã kiểm tra chẵn lẻ Parity 1-bit
- **B.** Mã băm MD5 hoặc thuật toán Checksum CRC
- **C.** Kiểm tra bằng mắt thường
- **D.** Đếm số dòng code

> **Đáp án:** **B**  
> **Giải thích:** esptool tính toán MD5 hoặc checksum từng khối dữ liệu nạp để phát hiện ngay lập tức lỗi suy hao tín hiệu trên cáp.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 100
**Khái niệm 'Non-Volatile Storage (NVS)' trên ESP32 được hiểu là gì?**

- **A.** Thư viện lưu dữ liệu Khóa - Giá trị trên Flash
- **B.** Hệ thống lưu trữ trên băng từ dung lượng cao
- **C.** Vùng nhớ RAM tạm thời bị xóa sạch khi mất điện
- **D.** Ổ đĩa lưu trữ từ tính cơ học gắn ngoài bo mạch

> **Đáp án:** **A**  
> **Giải thích:** NVS phân vùng một phần Flash để lưu các thông số cấu hình nhỏ dưới dạng key-value, bền vững qua các lần tắt nguồn.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 101
**Công nghệ eFuse trên ESP32 là loại bộ nhớ có tính chất nào?**

- **A.** Bộ nhớ chỉ ghi một lần bằng cầu chì điện tử
- **B.** Bộ nhớ bán dẫn cho phép xóa ghi hàng triệu lần
- **C.** Bộ nhớ quang học sử dụng tia laser để đọc ghi
- **D.** Bộ nhớ RAM động cần được làm tươi điện áp liên tục

> **Đáp án:** **A**  
> **Giải thích:** eFuse (electronic fuse) chỉ có thể ghi 1 lần để lưu các khóa bảo mật, địa chỉ MAC và cấu hình phần cứng vĩnh viễn.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 102
**Ý nghĩa của cơ chế 'First-stage Bootloader' lưu trong ROM của ESP32 là gì?**

- **A.** Hiển thị biểu tượng logo hệ thống lên màn hình
- **B.** Tự động xóa sạch toàn bộ chip khi xảy ra lỗi mã
- **C.** Kích hoạt kết nối tự động vào trạm thu phát WiFi
- **D.** Kiểm tra chân strapping để nạp bootloader cấp 2

> **Đáp án:** **D**  
> **Giải thích:** ROM bootloader là đoạn mã ban đầu thực hiện việc cấu hình phần cứng tối thiểu và đọc trạng thái chân BOOT/GPIO0.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 103
**Nếu chân strapping quy định điện áp Flash nội (MTDI) bị kéo sai mức logic lên mức HIGH khi chip khởi động, hiện tượng gì sẽ xảy ra?**

- **A.** Vi điều khiển lập tức tăng gấp đôi xung nhịp hoạt động
- **B.** Bộ điều áp nội bị ép xuống mức 1.8V làm chip Flash 3.3V tê liệt và vi điều khiển rơi vào vòng lặp lỗi khởi động
- **C.** ESP32 tự động xóa toàn bộ firmware trong bộ nhớ Flash
- **D.** Toàn bộ các cổng UART tự động tăng tốc độ baud lên 10 lần

> **Đáp án:** **B**  
> **Giải thích:** Chân strapping MTDI quy định điện áp đường nguồn VDD_SDIO cấp cho Flash; nếu bị kéo HIGH khi reset, nó ép nguồn cấp Flash xuống 1.8V, làm tê liệt các chip Flash 3.3V thông thường.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 104
**Để vi điều khiển OBC (ESP32) chuyển sang chế độ nạp phần mềm qua cổng nối tiếp (Download Bootloader), chân cấu hình nạp bootloader (chân BOOT) phải ở mức logic nào khi kích hoạt tín hiệu Reset?**

- **A.** Mức 0 (LOW / Nối Mass)
- **B.** Mức 1 (HIGH / 3.3V)
- **C.** Thả nổi không kết nối (Floating)
- **D.** Dao động tần số cao 10 MHz

> **Đáp án:** **A**  
> **Giải thích:** Khi chân BOOT được kéo xuống mức LOW trong thời điểm nhả reset (EN lên HIGH), ROM Bootloader sẽ kích hoạt chế độ Download Boot để sẵn sàng nhận firmware qua UART0.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 105
**Chức năng chính của Bootloader chuyên dụng trong hệ thống máy tính bay OBC là gì?**

- **A.** Kiểm tra tính toàn vẹn và nạp bản firmware ứng dụng vào bộ nhớ
- **B.** Đo đạc chính xác dòng điện tiêu thụ của các linh kiện tải trọng
- **C.** Tính toán góc quay Euler của vệ tinh dựa trên dữ liệu từ trường
- **D.** Mã hóa khóa công khai cho các gói tin phát xuống trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Bootloader chạy đầu tiên khi khởi động: xác minh tính toàn vẹn bản mã chương trình trong Flash bằng mã băm CRC, nạp firmware ứng dụng hoặc chuyển sang chế độ nạp khẩn cấp.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

### Câu 106
**Cổng giao tiếp nạp chương trình và gỡ lỗi tiêu chuẩn phổ biến trên bo mạch OBC là gì?**

- **A.** Cổng nạp phần cứng chuẩn JTAG hoặc cổng chuẩn SWD hai dây tín hiệu
- **B.** Cổng giao tiếp truyền hình cáp đồng trục tốc độ cao chuẩn mặt đất
- **C.** Cổng truyền tín hiệu quang học hồng ngoại không dây cự ly ngắn
- **D.** Cổng giao tiếp mạng song song chuẩn máy in cổ điển hai mươi lăm chân

> **Đáp án:** **A**  
> **Giải thích:** JTAG và SWD (Serial Wire Debug) là các chuẩn công nghiệp phổ biến nhất để nạp firmware và gỡ lỗi mức thanh ghi cho các dòng vi điều khiển ARM và kiến trúc nhúng.  
> **Mục tiêu củng cố:** Nắm vững môi trường Web IDE, giao thức nạp Web Serial và bản đồ bộ nhớ Flash  

---

## 📖 Doc 1.6: Giao tiếp Nối tiếp Bất đồng bộ UART (32 câu)

### Câu 107
**Giao tiếp Web Serial trên trình duyệt yêu cầu điều kiện bảo mật bắt buộc nào để có thể hoạt động?**

- **A.** Hệ thống máy tính phải kết nối sẵn mạng Bluetooth
- **B.** Trình duyệt phải chạy bằng quyền Root hệ điều hành
- **C.** Người dùng phải cài đặt thêm máy ảo phần mềm Java
- **D.** Trang web phải chạy trên HTTPS hoặc localhost

> **Đáp án:** **D**  
> **Giải thích:** Tiêu chuẩn W3C quy định Web Serial chỉ được phép kích hoạt trong bối cảnh bảo mật an toàn (Secure Context HTTPS).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 108
**Để nạp được firmware từ trình duyệt web xuống chip ESP32, máy tính cần nhận diện chip cầu nối USB-UART nào phổ biến?**

- **A.** CH340 hoặc CP2102
- **B.** NE555
- **C.** ULN2003
- **D.** LM358

> **Đáp án:** **A**  
> **Giải thích:** Các bo mạch thường dùng IC giao tiếp USB sang UART như CH340, CP2102 hoặc FT232 để tạo cổng COM ảo.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 109
**Quá trình nạp firmware xuống ESP32 thông qua cổng nối tiếp UART sử dụng công cụ mã nguồn mở kinh điển nào của Espressif?**

- **A.** GDB Debugger
- **B.** OpenOCD
- **C.** GCC Compiler
- **D.** esptool

> **Đáp án:** **D**  
> **Giải thích:** esptool.py (hoặc thư viện esp-web-flasher chạy JavaScript) điều khiển giao thức UART bootloader của ESP32.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 110
**Mạch tự động nạp (Auto-reset circuit) trên bo mạch nạp ESP32 sử dụng hai tín hiệu điều khiển nào từ cổng USB-UART?**

- **A.** CTS và DSR
- **B.** DTR và RTS
- **C.** VCC và GND
- **D.** TXD và RXD

> **Đáp án:** **B**  
> **Giải thích:** Hai tín hiệu bắt tay phần cứng DTR và RTS điều khiển cặp transistor BJT để tự động kéo EN và GPIO0 xuống LOW.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 111
**Tốc độ baud rate tiêu chuẩn thường được cấu hình cho việc nạp firmware tốc độ cao qua UART xuống ESP32 là bao nhiêu?**

- **A.** Tốc độ tiêu chuẩn 9600 bps
- **B.** 921600 bps hoặc 460800 bps
- **C.** Tốc độ giới hạn 1200 bps
- **D.** Tốc độ cao nhất 10 Mbps

> **Đáp án:** **B**  
> **Giải thích:** Baud rate 115200 là mặc định ban đầu, sau đó esptool có thể thỏa thuận nâng lên 460800 hoặc 921600 bps để nạp nhanh.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 112
**Tốc độ baud rate mặc định thường dùng để hiển thị dữ liệu gỡ lỗi (Serial Monitor) của hệ thống PTITCube là bao nhiêu?**

- **A.** 9600 bps
- **B.** 115200 bps
- **C.** 1200 bps
- **D.** 1000000 bps

> **Đáp án:** **B**  
> **Giải thích:** Baud rate 115200 bps cân bằng tối ưu giữa tốc độ truyền telemetry và độ ổn định tín hiệu nối tiếp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 113
**Khi mở cửa sổ Serial Monitor trên Web LMS mà màn hình chỉ hiển thị các ký tự lạ hoặc rác (Garbage text), nguyên nhân phổ biến nhất là gì?**

- **A.** Cáp USB kết nối bị đứt đường dây cấp nguồn 5V
- **B.** Sai lệch tốc độ baud rate giữa phần mềm và code
- **C.** Chân truyền tín hiệu UART của vi điều khiển hỏng
- **D.** Điện áp cấp cho vi điều khiển bị sụt áp đột ngột

> **Đáp án:** **B**  
> **Giải thích:** Sự lệch pha tần số xung nhịp do sai lệch baud rate khiến bộ giải mã UART lấy mẫu sai các bit dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 114
**Cổng nối tiếp UART phần cứng nào trên vi điều khiển OBC (ESP32) được mặc định sử dụng để nạp firmware và xuất thông tin gỡ lỗi (debug log) ra Serial Monitor?**

- **A.** UART0 (Serial)
- **B.** UART1 (Serial1)
- **C.** UART2 (Serial2)
- **D.** UART3 (Serial3)

> **Đáp án:** **A**  
> **Giải thích:** UART0 là bộ điều khiển nối tiếp phần cứng mặc định của ESP32 được kết nối với chip nạp USB-to-UART để in log khởi động của ROM Bootloader và nạp chương trình.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 115
**Khái niệm 'Full-duplex' trong giao tiếp UART của bo mạch OBC có nghĩa là gì?**

- **A.** Truyền nhận dữ liệu nối tiếp không qua dây dẫn
- **B.** Tín hiệu được phát tán vô hướng vào môi trường
- **C.** Chỉ truyền dữ liệu theo một chiều tại một thời điểm
- **D.** Truyền và nhận dữ liệu đồng thời trên TX và RX

> **Đáp án:** **D**  
> **Giải thích:** UART có 2 đường dây riêng biệt TXD và RXD cho phép việc gửi và nhận dữ liệu diễn ra hoàn toàn đồng thời.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 116
**Điều gì xảy ra nếu hai thiết bị UART nối chéo chân TX của thiết bị này vào TX của thiết bị kia?**

- **A.** Xung đột tín hiệu ngõ ra và mất dữ liệu truyền
- **B.** Hai vi điều khiển tự động thay đổi mã nhận diện
- **C.** Các byte dữ liệu truyền đi tự động đảo ngược bit
- **D.** Tốc độ truyền dữ liệu nối tiếp được nhân đôi

> **Đáp án:** **A**  
> **Giải thích:** Chân TX là ngõ ra truyền (Driver); nối hai ngõ ra với nhau sẽ tạo ra dòng ngắn mạch đối kháng khi một bên kéo HIGH và một bên kéo LOW.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 117
**Quy tắc đấu nối chuẩn giữa bo mạch OBC và thiết bị nối tiếp ngoài qua cổng UART là gì?**

- **A.** Chân TX nối TX, chân RX nối RX và thả nổi chân GND
- **B.** Đấu nối toàn bộ các chân tín hiệu chung vào mass GND
- **C.** TX nối RX, RX nối TX và nối chung mass GND
- **D.** Chỉ cần đấu nối chân truyền TX mà không cần chân GND

> **Đáp án:** **C**  
> **Giải thích:** Dữ liệu xuất ra từ chân phát TX của thiết bị này phải đi vào chân thu RX của thiết bị kia, và bắt buộc phải có chung điện thế tham chiếu GND.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 118
**Khái niệm 'Baud Rate' trong truyền thông nối tiếp UART được định nghĩa chính xác là gì?**

- **A.** Tổng số byte dữ liệu truyền được trong một phút
- **B.** Số lượng bit tín hiệu truyền đi trong một giây
- **C.** Tần số quét dòng hiển thị trên màn hình máy tính
- **D.** Dung lượng tối đa của bộ đệm hàng đợi phần cứng

> **Đáp án:** **B**  
> **Giải thích:** Baud rate là tốc độ biến đổi trạng thái tín hiệu trên giây; trong chuẩn nhị phân UART, baud rate tương đương số bit trên giây (bps).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 119
**Trong chuẩn khung truyền UART 8-N-1, mỗi khung truyền (Frame) bao gồm tổng cộng bao nhiêu bit?**

- **A.** 10 bit
- **B.** 12 bit
- **C.** 8 bit
- **D.** 16 bit

> **Đáp án:** **A**  
> **Giải thích:** Mỗi ký tự 8-bit được đóng gói cùng 1 bit Start (mức LOW) và 1 bit Stop (mức HIGH), tổng là 10 bit trên đường truyền.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 120
**Trạng thái nhàn rỗi (Idle state) trên đường truyền dữ liệu của giao tiếp UART được giữ ở mức logic nào?**

- **A.** Mức logic HIGH
- **B.** Mức logic LOW
- **C.** Xung nhịp biến thiên
- **D.** Mức lơ lửng không xác định

> **Đáp án:** **A**  
> **Giải thích:** Đường truyền UART ở trạng thái nghỉ luôn được giữ ở mức HIGH; bit Start chuyển xuống LOW báo hiệu bắt đầu khung truyền.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 121
**Độ rộng thời gian của 1 bit (Bit duration) trên đường truyền UART ở tốc độ 115200 baud là khoảng bao nhiêu?**

- **A.** 8.68 micro-giây
- **B.** 52.08 micro-giây
- **C.** 104.16 micro-giây
- **D.** 208.33 micro-giây

> **Đáp án:** **A**  
> **Giải thích:** Thời gian truyền 1 bit: T = 1 / 115200 s = 8.6805 micro-giây. Bộ thu UART sẽ lấy mẫu tín hiệu ở giữa khoảng thời gian này.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 122
**Các chân GPIO nào của ESP32 được cấu hình mặc định làm cổng nạp và giao tiếp nối tiếp UART0?**

- **A.** GPIO 4 và GPIO 5
- **B.** GPIO 21 và GPIO 22
- **C.** GPIO 18 và GPIO 19
- **D.** GPIO 1 và GPIO 3

> **Đáp án:** **D**  
> **Giải thích:** Chân số 1 là ngõ ra truyền TX0 và chân số 3 là ngõ vào nhận RX0 của khối UART0 trên chip ESP32.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 123
**Khi truyền dữ liệu nối tiếp UART, bit đầu tiên báo hiệu sự bắt đầu của một byte truyền đi được gọi là gì?**

- **A.** Bit Parity
- **B.** Bit Stop
- **C.** Bit ACK
- **D.** Bit Start

> **Đáp án:** **D**  
> **Giải thích:** Bit Start luôn có mức logic 0 (LOW) với độ rộng 1 chu kỳ bit để đánh thức bộ đếm thời gian của bên nhận.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 124
**Bit Stop trong khung truyền UART tiêu chuẩn luôn có mức logic nào và nhằm mục đích gì?**

- **A.** Mức điện áp biến thiên liên tục theo tần số xung
- **B.** Mức trở kháng cao nhằm ngắt tạm thời đường dây
- **C.** Mức logic HIGH đưa đường truyền về trạng thái nghỉ
- **D.** Mức logic LOW đánh dấu trạng thái bắt đầu khung

> **Đáp án:** **C**  
> **Giải thích:** Bit Stop đưa đường truyền về mức logic 1 (HIGH) trong tối thiểu 1 hoặc 2 chu kỳ bit để kết thúc khung truyền.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 125
**Bộ đệm phần cứng (Hardware FIFO Buffer) cho chiều nhận RX của mỗi cổng UART trên ESP32 có dung lượng bao nhiêu byte?**

- **A.** 8 byte
- **B.** 32 byte
- **C.** 1024 byte
- **D.** 128 byte

> **Đáp án:** **D**  
> **Giải thích:** Mỗi bộ điều khiển UART trên ESP32 trang bị bộ đệm hàng đợi phần cứng FIFO dung lượng 128 bytes cho cả chiều phát và nhận.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 126
**Hiện tượng tràn bộ đệm phần cứng (Buffer Overflow) trong giao tiếp UART xảy ra trong tình huống nào?**

- **A.** Dữ liệu vào FIFO nhanh hơn tốc độ CPU đọc ra
- **B.** Đường dây cáp truyền tín hiệu bị chạm chập xuống mass
- **C.** Nhiệt độ chip bán dẫn tăng vượt quá giới hạn an toàn
- **D.** Phân hệ truyền dữ liệu nối tiếp gửi xung quá chậm chạp

> **Đáp án:** **A**  
> **Giải thích:** Nếu CPU bị bận thực thi tác vụ nặng hoặc delay quá lâu, bộ đệm 128 byte bị lấp đầy và các byte mới đến sau sẽ bị đánh rơi (drop).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 127
**Mức logic của tín hiệu UART TTL (Transistor-Transistor Logic) trên vi điều khiển ESP32 được quy ước như thế nào?**

- **A.** Mức logic 0 là -12V, mức logic 1 là +12V
- **B.** Mức logic là dao động điện áp hình sin
- **C.** Mức logic 0 là 3.3V, mức logic 1 là 0V
- **D.** Mức logic 0 là 0V, mức logic 1 là 3.3V

> **Đáp án:** **D**  
> **Giải thích:** Chuẩn UART TTL điện áp thấp (LVTTL 3.3V) định nghĩa mức 0 tại điện thế đất (0V) và mức 1 tại điện thế nguồn (3.3V).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 128
**Sự khác biệt căn bản giữa mức logic UART TTL và chuẩn truyền thông công nghiệp RS-232 là gì?**

- **A.** Hai chuẩn tín hiệu hoàn toàn đồng nhất về điện áp
- **B.** RS-232 dùng điện áp âm cho bit 1, dương cho bit 0
- **C.** Chuẩn UART TTL truyền xa được hàng nghìn mét dây
- **D.** Chuẩn RS-232 không cần đường dây mass nối đất

> **Đáp án:** **B**  
> **Giải thích:** Chuẩn RS-232 dùng mức điện áp lưỡng cực biên độ lớn với logic đảo để tăng cường khả năng chống nhiễu trên đường truyền dài.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 129
**Hàm `Serial.available()` trong C++ trả về thông tin cụ thể nào?**

- **A.** Số lượng byte đã nhận nằm trong bộ đệm RX
- **B.** Trạng thái kết nối nguồn điện ổn định của vi xử lý
- **C.** Đo đạc cự ly chiều dài của dây cáp nối tới máy tính
- **D.** Tốc độ baud rate thiết lập hiện tại của cổng nối tiếp

> **Đáp án:** **A**  
> **Giải thích:** Serial.available() kiểm tra con trỏ hàng đợi FIFO của UART, trả về số lượng ký tự sẵn sàng để đọc ra bằng Serial.read().  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 130
**Lệnh `int byteReceived = Serial.read();` thực hiện chức năng gì khi bộ đệm nhận đang có dữ liệu?**

- **A.** Giải phóng và xóa hoàn toàn giá trị của ô nhớ biến
- **B.** Gửi một byte dữ liệu lên giao diện màn hình máy tính
- **C.** Đọc ra 1 byte đầu tiên trong hàng đợi bộ đệm nhận
- **D.** Đọc đồng thời xóa sạch toàn bộ các byte trong bộ đệm

> **Đáp án:** **C**  
> **Giải thích:** Hàm Serial.read() lấy byte cũ nhất trong hàng đợi ra xử lý và giảm số lượng ký tự trong bộ đệm đi 1.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 131
**Nếu gọi hàm `Serial.read()` trong khi bộ đệm nhận đang rỗng (không có dữ liệu), giá trị trả về của hàm là bao nhiêu?**

- **A.** 255
- **B.** -1
- **C.** 0
- **D.** NULL

> **Đáp án:** **B**  
> **Giải thích:** Khi bộ đệm nhận rỗng, hàm Serial.read() trả về số nguyên -1 để báo hiệu không có dữ liệu hợp lệ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 132
**Sự khác biệt căn bản giữa lệnh `Serial.print(ABC);` và lệnh `Serial.println(ABC);` trong C++ là gì?**

- **A.** Serial.println tự động thêm cặp ký tự ngắt xuống dòng CR/LF ở cuối
- **B.** Cả hai phương thức hoàn toàn tương đồng về chuỗi ký tự xuất ra
- **C.** Serial.println chỉ hỗ trợ in số nguyên chứ không in được văn bản
- **D.** Serial.print có tốc độ truyền tải nhanh gấp mười lần phương thức kia

> **Đáp án:** **A**  
> **Giải thích:** Lệnh Serial.println() nối thêm mã ASCII Carriage Return ('\r' - 0x0D) và Line Feed ('\n' - 0x0A) sau nội dung chuỗi.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 133
**Hàm `Serial.flush()` trong môi trường lập trình C++ của ESP32 thực hiện nhiệm vụ cụ thể nào?**

- **A.** Xóa sạch toàn bộ dữ liệu trong bộ đệm nhận RX
- **B.** Ngắt kết nối của cổng truyền thông nối tiếp UART
- **C.** Chờ phát hết dữ liệu trong bộ đệm truyền TX
- **D.** Khởi động lại toàn bộ vi điều khiển nhúng tức thì

> **Đáp án:** **C**  
> **Giải thích:** Hàm Serial.flush() phong bế tiến trình cho đến khi khung truyền dữ liệu cuối cùng trong FIFO phát được gửi đi hoàn tất.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 134
**Phương thức `Serial.peek()` khác với `Serial.read()` ở điểm then chốt nào?**

- **A.** Đọc ký tự và xóa ngay khỏi bộ đệm nhận
- **B.** Đọc ký tự nhưng giữ nguyên trong bộ đệm nhận
- **C.** Xóa toàn bộ bộ đệm nhận mà không đọc dữ liệu
- **D.** Đảo ngược thứ tự các byte trong bộ đệm nhận

> **Đáp án:** **B**  
> **Giải thích:** Hàm peek cho phép xem trước byte dữ liệu tiếp theo mà không làm dịch chuyển con trỏ đọc của hàng đợi dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 135
**Lệnh `Serial.printf(Gia tri: %.2f V\r\n, voltage);` sử dụng ký tự đặc tả `%.2f` với mục đích hiển thị gì?**

- **A.** In định dạng số nguyên có độ dài 2 chữ số thập phân
- **B.** In số thực với 2 chữ số sau dấu thập phân
- **C.** In chuỗi ký tự có độ dài cố định đúng 2 byte nhớ
- **D.** Lặp lại lệnh điều khiển chớp nháy bóng LED đúng 2 lần

> **Đáp án:** **B**  
> **Giải thích:** Đặc tả `%.2f` định dạng số thực float/double với 2 chữ số thập phân phần lẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 136
**Lệnh `Serial.begin(115200, SERIAL_8N1);` khai báo cấu hình khung truyền UART gồm những thông số nào?**

- **A.** 115200 baud, 8 bit dữ liệu, Không kiểm tra chẵn lẻ, 1 bit Stop
- **B.** 115200 baud, 7 bit dữ liệu, Kiểm tra chẵn lẻ Chẵn, 1 bit Stop
- **C.** 9600 baud, 8 bit dữ liệu, Kiểm tra chẵn lẻ Lẻ, 2 bit Stop
- **D.** 115200 baud, 8 bit dữ liệu, Kiểm tra chẵn lẻ Chẵn, 2 bit Stop

> **Đáp án:** **A**  
> **Giải thích:** SERIAL_8N1 biểu thị: 8 bit data, No parity (không kiểm tra chẵn lẻ), 1 Stop bit; đây là cấu hình UART chuẩn công nghiệp phổ biến nhất.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 137
**Để kiểm tra xem một chuỗi nhận từ Serial có bắt đầu bằng tiền tố CMD: hay không, phương thức nào của đối tượng String trong C++ được dùng?**

- **A.** cmd.contains(CMD:)
- **B.** cmd.startsWith(CMD:)
- **C.** Cả B và C đều đúng
- **D.** cmd.indexOf(CMD:) == 0

> **Đáp án:** **C**  
> **Giải thích:** Cả phương thức startsWith(CMD:) và phép so sánh vị trí xuất hiện đầu tiên indexOf(CMD:) == 0 đều xác định chính xác tiền tố của chuỗi.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

### Câu 138
**Hàm `Serial.readBytes(buffer, length)` thực hiện tác vụ gì trong quá trình tiếp nhận dữ liệu nhị phân?**

- **A.** Đọc tối đa length byte vào buffer hoặc hết timeout
- **B.** Đọc một chuỗi ký tự cho đến khi gặp ký tự xuống dòng
- **C.** Xóa sạch dữ liệu đang lưu trong mảng bộ đệm buffer
- **D.** Hiển thị nội dung mảng buffer lên màn hình máy tính

> **Đáp án:** **A**  
> **Giải thích:** Hàm readBytes chuyên dùng để đọc các khối dữ liệu nhị phân có độ dài xác định vào mảng bộ đệm.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc khung truyền UART và cơ chế đệm phần cứng FIFO  

---

## 📖 Doc 1.7: Nguyên lý Mạng Không dây Wi-Fi & Web Server HTTP Nhúng (11 câu)

### Câu 139
**Mạng không dây WiFi tích hợp trên module ESP32 hoạt động ở dải tần số vô tuyến chuẩn nào?**

- **A.** 2.4 GHz
- **B.** 5.8 GHz
- **C.** 433 MHz
- **D.** 915 MHz

> **Đáp án:** **A**  
> **Giải thích:** ESP32 hỗ trợ băng tần 2.4 GHz tiêu chuẩn tương thích với các điểm truy cập WiFi thông dụng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 140
**Chuẩn mã hóa bảo mật mạng WiFi nào sau đây được phần cứng ESP32 hỗ trợ đầy đủ?**

- **A.** Chỉ hỗ trợ mạng mở không bảo mật
- **B.** Không hỗ trợ giao thức bảo mật
- **C.** WPA, WPA2-PSK và WPA3
- **D.** Chỉ hỗ trợ khóa WEP cũ

> **Đáp án:** **C**  
> **Giải thích:** ESP32 tích hợp động cơ mã hóa phần cứng AES hỗ trợ bảo mật an toàn WPA2 và WPA3.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 141
**Ở chế độ hoạt động 'Station Mode' (STA), module WiFi của ESP32 đóng vai trò là thiết bị gì?**

- **A.** Hoạt động như máy khách kết nối vào mạng Wi-Fi sẵn có
- **B.** Hoạt động như điểm truy cập phát sóng Wi-Fi cho thiết bị
- **C.** Hoạt động như bộ định tuyến chuyển mạch gói dữ liệu mạng
- **D.** Hoạt động như bộ lặp sóng không dây mở rộng vùng phủ sóng

> **Đáp án:** **C**  
> **Giải thích:** Ở chế độ STA (Station), ESP32 đóng vai trò là một thiết bị client kết nối vào một Access Point (AP) Wi-Fi đã tồn tại.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 142
**Ở chế độ hoạt động 'Access Point' (AP), module WiFi của ESP32 đảm nhận vai trò thiết bị nào?**

- **A.** Anten thu phát tín hiệu truyền hình vệ tinh quỹ đạo
- **B.** Thiết bị quét và giải mã sóng vô tuyến mặt đất
- **C.** Điểm phát sóng không dây cho máy khách kết nối vào
- **D.** Cảm biến tiếp nhận sóng thụ động ngoài không gian

> **Đáp án:** **C**  
> **Giải thích:** Chế độ SoftAP cho phép ESP32 tự tạo một mạng WiFi riêng biệt có tên SSID và mật khẩu để thiết bị khác kết nối vào.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 143
**Địa chỉ IP mặc định cục bộ khi ESP32 khởi tạo mạng SoftAP thông thường có giá trị là bao nhiêu?**

- **A.** 192.168.4.1
- **B.** 255.255.255.0
- **C.** 127.0.0.1
- **D.** 0.0.0.0

> **Đáp án:** **A**  
> **Giải thích:** Mặc định trong thư viện WiFi của ESP32, địa chỉ gateway của SoftAP được gán là 192.168.4.1.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 144
**Giao thức mạng nào cho phép bo mạch ESP32 tự động nhận địa chỉ IP khi kết nối vào mạng WiFi gia đình hoặc phòng lab?**

- **A.** SNMP
- **B.** FTP
- **C.** DNS
- **D.** DHCP

> **Đáp án:** **D**  
> **Giải thích:** DHCP client trên ESP32 yêu cầu máy chủ DHCP (Router) cấp phát địa chỉ IP, Subnet Mask và Gateway.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 145
**Hệ thống Web Server nhúng chạy trên ESP32 phục vụ các yêu cầu giao tiếp mạng dựa trên giao thức lớp ứng dụng nào?**

- **A.** HTTP hoặc HTTPS
- **B.** Telnet
- **C.** SMTP
- **D.** SSH

> **Đáp án:** **A**  
> **Giải thích:** Giao thức HTTP truyền nhận các bản tin GET/POST để tải giao diện web điều khiển và cấu hình thiết bị.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 146
**Mã trạng thái phản hồi HTTP '200 OK' từ Web Server của ESP32 có ý nghĩa gì đối với trình duyệt?**

- **A.** Yêu cầu bị từ chối do không có quyền
- **B.** Yêu cầu đã được máy chủ tiếp nhận và xử lý thành công
- **C.** Lỗi nội bộ vi điều khiển
- **D.** Tài nguyên không tìm thấy trên hệ thống

> **Đáp án:** **B**  
> **Giải thích:** Mã 200 biểu thị gói tin yêu cầu hợp lệ và tài nguyên tương ứng được trả về đầy đủ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 147
**Mã trạng thái HTTP '404 Not Found' được Web Server phát ra trong tình huống nào?**

- **A.** Tài nguyên URL yêu cầu không tồn tại trên máy chủ
- **B.** Đường truyền cáp mạng bị mất kết nối hoàn toàn
- **C.** Nhiệt độ hoạt động của chip vi xử lý vượt ngưỡng
- **D.** Mã nguồn chương trình nhúng xuất hiện lỗi cú pháp

> **Đáp án:** **A**  
> **Giải thích:** Mã 404 thông báo trang web hoặc tài nguyên yêu cầu không có trong danh sách route đã đăng ký.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 148
**Kỹ thuật WebSockets trên ESP32 mang lại ưu điểm vượt trội nào so với các yêu cầu HTTP thông thường?**

- **A.** Truyền hai chiều liên tục với độ trễ rất thấp
- **B.** Truyền gói tin trực tiếp mà không cần địa chỉ IP
- **C.** Bảo vệ dữ liệu không bị sai lệch bởi bức xạ hạt
- **D.** Cắt giảm tối đa lượng điện tiêu thụ của khối WiFi

> **Đáp án:** **A**  
> **Giải thích:** WebSockets duy trì kết nối TCP mở, cho phép đẩy dữ liệu telemetry thời gian thực lên web mà không cần polling lặp lại.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

### Câu 149
**Để đo tín hiệu tương tự an toàn và ổn định mà không bị xung đột khi bật WiFi trên ESP32, nên ưu tiên sử dụng các chân thuộc khối nào?**

- **A.** Khối ADC1
- **B.** Chân nạp TX/RX
- **C.** Khối ADC2
- **D.** Chân cấp nguồn 3.3V

> **Đáp án:** **A**  
> **Giải thích:** Khối ADC1 hoàn toàn độc lập với phần cứng sóng WiFi, bảo đảm việc đọc điện áp analog luôn chuẩn xác.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý mạng Wi-Fi 802.11, chế độ SoftAP/STA và giao thức HTTP  

---

## 📖 Doc 1.4: Nút nhấn Cơ học & Thuật toán Chống rung Debounce (6 câu)

### Câu 150
**Khi cấu hình một chân GPIO làm ngõ vào với chế độ `INPUT_PULLUP`, trạng thái mặc định của chân khi để hở là gì?**

- **A.** Mức logic HIGH
- **B.** Mức điện áp trôi nổi không xác định
- **C.** Mức logic LOW
- **D.** Điện áp -3.3V

> **Đáp án:** **A**  
> **Giải thích:** Điện trở kéo lên nội bộ (khoảng 30kΩ - 50kΩ) nối chân GPIO lên đường nguồn VDD 3.3V, giữ chân luôn ở mức HIGH khi không có tác động.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

### Câu 151
**Nếu một chân GPIO cấu hình chế độ `INPUT` thuần túy mà không có điện trở kéo (Floating), hiện tượng gì sẽ xảy ra?**

- **A.** Trạng thái logic chập chờn do nhiễu môi trường
- **B.** Hệ thống vi điều khiển tự động reset lại liên tục
- **C.** Chân GPIO luôn luôn đo được mức logic LOW cố định
- **D.** Chân tín hiệu bị chập mạch gây hỏng vi điều khiển

> **Đáp án:** **A**  
> **Giải thích:** Trạng thái lơ lửng (Floating) có trở kháng rất cao, đóng vai trò như một ăng-ten thu nhận nhiễu tĩnh điện gây sai lệch giá trị đọc.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

### Câu 152
**Hiện tượng rung cơ khí (Contact Bounce) của nút bấm xảy ra trong khoảng thời gian điển hình là bao lâu?**

- **A.** 0.1 đến 0.5 mili-giây
- **B.** 1.0 đến 2.0 mili-giây
- **C.** 50 đến 100 mili-giây
- **D.** 5 đến 20 mili-giây

> **Đáp án:** **D**  
> **Giải thích:** Khi tiếp điểm kim loại va chạm vào nhau, đàn hồi cơ học gây ra chuỗi đóng cắt liên tục trong khoảng 5 - 20 ms trước khi ổn định.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

### Câu 153
**Nếu không xử lý hiện tượng rung phím (Debounce), việc bấm nút một lần có thể dẫn đến hậu quả gì trong phần mềm?**

- **A.** Làm nóng chảy tiếp điểm kim loại của nút bấm cơ học
- **B.** Làm chập mạch và hỏng hoàn toàn cổng giao tiếp USB
- **C.** Nhận diện nhầm thành nhiều lần bấm liên tiếp
- **D.** Làm sai lệch giá trị đếm thời gian thực của hệ thống

> **Đáp án:** **C**  
> **Giải thích:** CPU có tốc độ xử lý hàng triệu lệnh mỗi giây nên sẽ ghi nhận mỗi xung nhịp nảy cơ khí là một lần nhấn nút riêng biệt.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

### Câu 154
**Giải pháp phần cứng kinh điển để chống rung tiếp điểm cơ học cho nút nhấn là sử dụng linh kiện nào?**

- **A.** Mắc nối tiếp tiếp điểm nút nhấn với cuộn biến áp
- **B.** Mắc song song chân nút nhấn với một bóng đèn LED
- **C.** Mắc song song tiếp điểm nút nhấn với tụ điện nhỏ
- **D.** Mắc nối tiếp chân tín hiệu với cuộn cảm công suất

> **Đáp án:** **C**  
> **Giải thích:** Tụ điện tạo thành mạch tích phân RC làm trơn các gai xung điện áp nảy nhanh, khử hoàn toàn nhiễu dội cơ học.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

### Câu 155
**Khi nút nhấn nối chân GPIO với GND theo cấu hình `INPUT_PULLUP`, giá trị hàm `digitalRead()` trả về khi bấm nút là gì?**

- **A.** Mức logic LOW
- **B.** Không xác định
- **C.** Mức logic HIGH
- **D.** Mức 3.3V

> **Đáp án:** **A**  
> **Giải thích:** Khi nút nhấn được bấm, chân GPIO nối trực tiếp xuống đất (GND), làm điện áp tụt về 0V tương đương mức logic LOW.  
> **Mục tiêu củng cố:** Hiểu nguyên lý mạch nút nhấn, điện trở kéo lên nội và hiện tượng nảy tiếp điểm  

---

## 📖 Doc 1.3: Điều khiển LED Đơn, Chuỗi LED & Điều chế Xung LEDC PWM (13 câu)

### Câu 156
**Mục đích cốt lõi của việc mắc nối tiếp một điện trở hạn dòng với đèn LED chỉ thị trên bo mạch OBC là gì?**

- **A.** Giới hạn dòng điện qua LED trong mức an toàn
- **B.** Khuếch đại điện áp nguồn giúp LED phát sáng chói
- **C.** Kích hoạt mạch dao động giúp LED chớp nháy tự động
- **D.** Hấp thụ các xung nhiễu điện áp cao tần của nguồn cấp

> **Đáp án:** **A**  
> **Giải thích:** LED là linh kiện phi tuyến có trở kháng động rất nhỏ khi thông; không có điện trở hạn dòng, dòng điện sẽ tăng vô hạn làm hỏng LED và chân GPIO.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 157
**Nếu sử dụng chân GPIO xuất 3.3V cấp cho đèn LED đỏ có điện áp rơi $V_f = 1.8\text{V}$, với dòng mong muốn $10\text{mA}$, giá trị điện trở hạn dòng cần chọn là:**

- **A.** 33 Ohm
- **B.** 1000 Ohm
- **C.** 10 kOhm
- **D.** 150 Ohm

> **Đáp án:** **D**  
> **Giải thích:** Theo định luật Ohm: $R = (V_{CC} - V_f) / I = (3.3 - 1.8) / 0.010 = 1.5 / 0.010 = 150\ \Omega$.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 158
**Ngoại vi điều chế độ rộng xung phần cứng (PWM) trên vi điều khiển ESP32 được gọi tên là gì?**

- **A.** Bộ định thời Timer 555
- **B.** Bộ khuếch đại thuật toán Op-Amp
- **C.** Ngoại vi LEDC
- **D.** Bộ dao động tích phân

> **Đáp án:** **C**  
> **Giải thích:** Ngoại vi LEDC (LED Control) cung cấp 16 kênh tạo xung PWM phần cứng hoàn toàn không chiếm dụng thời gian CPU.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 159
**Bộ ngoại vi LEDC của ESP32 cung cấp tổng cộng bao nhiêu kênh xung PWM độc lập?**

- **A.** 32 kênh
- **B.** 4 kênh
- **C.** 16 kênh
- **D.** 8 kênh

> **Đáp án:** **C**  
> **Giải thích:** ESP32 sở hữu 16 kênh PWM chia thành 2 nhóm (8 kênh High Speed và 8 kênh Low Speed).  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 160
**Độ phân giải chu kỳ công tác (Duty Cycle Resolution) của ngoại vi LEDC trên ESP32 có thể cấu hình tối đa là bao nhiêu bit?**

- **A.** 16 bit
- **B.** 10 bit
- **C.** 8 bit
- **D.** 32 bit

> **Đáp án:** **A**  
> **Giải thích:** LEDC hỗ trợ độ phân giải linh hoạt từ 1-bit đến tối đa 16-bit tùy thuộc vào tần số xung phát mong muốn.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 161
**Nếu cấu hình kênh LEDC ở độ phân giải 8-bit, dải giá trị điều khiển độ sáng LED (Duty Cycle) sẽ là:**

- **A.** 0 đến 4095
- **B.** 0 đến 1023
- **C.** 0 đến 255
- **D.** 0 đến 100

> **Đáp án:** **C**  
> **Giải thích:** Độ phân giải 8-bit có $2^8 = 256$ mức điều chế, tương ứng giá trị từ 0 (tắt hoàn toàn) đến 255 (sáng tối đa 100%).  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 162
**Nếu cấu hình kênh LEDC ở độ phân giải 10-bit, giá trị số nguyên biểu diễn chu kỳ công tác 50% là bao nhiêu?**

- **A.** 1024
- **B.** 128
- **C.** 512
- **D.** 2048

> **Đáp án:** **C**  
> **Giải thích:** Độ phân giải 10-bit có dải giá trị từ 0 đến 1023; mức 50% chu kỳ công tác tương ứng với $1024 / 2 = 512$.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 163
**Chu kỳ làm việc (Duty Cycle) của tín hiệu PWM được định nghĩa chính xác là gì?**

- **A.** Tỷ lệ thời gian mức HIGH so với chu kỳ xung
- **B.** Điện áp cực đại đo được tại đỉnh của dạng sóng xung
- **C.** Tổng số lượng chu kỳ xung xuất hiện trong một giây
- **D.** Trở kháng đặc trưng danh định của đường dẫn tín hiệu

> **Đáp án:** **A**  
> **Giải thích:** Duty Cycle tính bằng công thức: $D = (T_{on} / T_{total}) \times 100\%$, quyết định mức điện áp tương đương hiệu dụng.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 164
**Tại sao mắt người nhìn thấy đèn LED sáng mờ đi khi điều khiển bằng xung PWM mà không thấy nhấp nháy?**

- **A.** Chip vi xử lý tự động điều tiết tốc độ truyền photon
- **B.** Điện trở sinh học của võng mạc hấp thụ ánh sáng chớp
- **C.** Hiện tượng lưu ảnh của mắt ở tần số xung cao
- **D.** Bước sóng ánh sáng phát xạ của đi-ốt bán dẫn biến đổi

> **Đáp án:** **C**  
> **Giải thích:** Võng mạc lưu giữ kích thích thị giác khoảng 1/16 đến 1/20 giây; khi xung bật tắt hàng trăm lần mỗi giây, não bộ chỉ nhận nhận cường độ trung bình.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 165
**Tần số xung PWM khuyến nghị khi điều khiển độ sáng LED chỉ thị để tránh hoàn toàn hiện tượng rung hình hoặc khó chịu cho mắt là:**

- **A.** 10 Hz đến 50 Hz
- **B.** 500 Hz đến 5000 Hz
- **C.** 10 kHz đến 50 kHz
- **D.** 100 kHz đến 500 kHz

> **Đáp án:** **B**  
> **Giải thích:** Dải tần từ 1 kHz đến 5 kHz hoàn toàn nằm ngoài ngưỡng nhạy cảm nhấp nháy của mắt và không gây ra tiếng rít cơ học ở các linh kiện.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 166
**Để tạo âm thanh đơn âm trên còi chip (Buzzer) thụ động bằng ngoại vi LEDC, yếu tố nào cần được thay đổi?**

- **A.** Giữ nguyên tần số và chỉ thay đổi độ phân giải kênh
- **B.** Hoán đổi chân cấp điện áp nuôi dương sang cực tính âm
- **C.** Tạm thời ngắt nguồn điện cấp cho vi điều khiển nhúng
- **D.** Thay đổi tần số PWM tương ứng nốt nhạc cần phát

> **Đáp án:** **D**  
> **Giải thích:** Tần số xung nhịp quyết định cao độ (Pitch) của âm thanh phát ra từ màng loa thạch anh của buzzer thụ động.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 167
**Hàm cấu hình một kênh PWM trong ngoại vi LEDC của ESP32 có tên gọi và danh sách tham số chuẩn là gì?**

- **A.** Hàm analogSetup() nhận tham số kênh điều khiển và chu kỳ làm việc
- **B.** Hàm setPWM() nhận tham số chân GPIO chỉ định và tần số xung nhịp
- **C.** Hàm ledcSetup() nhận tham số kênh phát, tần số xung và độ phân giải bit
- **D.** Hàm pwmInit() nhận tham số chân GPIO chỉ định và tần số xung nhịp

> **Đáp án:** **C**  
> **Giải thích:** Hàm ledcSetup nhận tham số: kênh số mấy (0-15), tần số phát xung nhịp (Hz) và độ phân giải số bit (ví dụ 8-bit).  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

### Câu 168
**Lệnh nào được dùng để gán một chân GPIO vật lý cụ thể vào một kênh PWM đã cấu hình trước đó của LEDC?**

- **A.** Sử dụng hàm attachChannel() liên kết chân với kênh điều chế
- **B.** Sử dụng hàm pinModePWM() chuyển đổi chức năng chân sang xung
- **C.** Sử dụng hàm ledcAttachPin() gán chân vật lý vào kênh LEDC
- **D.** Sử dụng hàm analogAttach() kết nối chân với bộ tạo xung

> **Đáp án:** **C**  
> **Giải thích:** Hàm ledcAttachPin liên kết chân GPIO với kênh phát xung PWM tương ứng trong ma trận GPIO Matrix của ESP32.  
> **Mục tiêu củng cố:** Hiểu nguyên lý diode phát quang, định luật Ohm và kỹ thuật điều chế xung PWM  

---

## 📖 Doc 1.5: Vi mạch Dịch Chốt 74HC595 & Lập trình LED 7 Đoạn (18 câu)

### Câu 169
**Vi mạch dịch 74HC595 thường được tích hợp trên bo mạch OBC nhằm mục đích gì?**

- **A.** Mở rộng dung lượng lưu trữ cho bộ nhớ SRAM nội
- **B.** Tăng khả năng nén hình ảnh chụp của cảm biến
- **C.** Mở rộng chân ra logic chỉ với 3 chân điều khiển
- **D.** Khuếch đại nguồn điện áp một chiều lên mức 220V

> **Đáp án:** **C**  
> **Giải thích:** 74HC595 là thanh ghi dịch vào nối tiếp - ra song song (SIPO) 8-bit, giúp tiết kiệm triệt để chân GPIO của vi điều khiển.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 170
**Để điều khiển thanh ghi dịch 74HC595, vi điều khiển ESP32 cần kết nối tối thiểu bao nhiêu đường tín hiệu điều khiển?**

- **A.** 8 đường
- **B.** 16 đường
- **C.** 3 đường
- **D.** 1 đường duy nhất

> **Đáp án:** **C**  
> **Giải thích:** 3 đường tín hiệu chuẩn gồm: Dữ liệu nối tiếp (DS), Xung nhịp dịch (SH_CP) và Xung nhịp chốt dữ liệu (ST_CP).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 171
**Chân tín hiệu 'DS' (Serial Data Input) trên vi mạch 74HC595 có nhiệm vụ gì?**

- **A.** Xóa sạch toàn bộ dữ liệu đang lưu trong thanh ghi
- **B.** Tiếp nhận nguồn điện áp dương 3.3V nuôi mạch vi sai
- **C.** Nhận dữ liệu nhị phân nối tiếp từ vi điều khiển
- **D.** Kích hoạt các tầng đệm xuất dòng công suất cao ngoài

> **Đáp án:** **C**  
> **Giải thích:** Chân DS tiếp nhận mức logic nhị phân của bit hiện tại trước khi xung nhịp dịch xuất hiện.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 172
**Chân tín hiệu 'SH_CP' (Shift Register Clock Pin) trên vi mạch 74HC595 hoạt động theo cơ chế nào?**

- **A.** Dịch bit chân DS vào thanh ghi tại sườn xung dương
- **B.** Tự động đảo cực tính dòng điện chạy qua tải công suất
- **C.** Luôn duy trì mức điện áp logic HIGH để giữ trạng thái
- **D.** Xóa toàn bộ thanh ghi dữ liệu khi chân ở mức logic LOW

> **Đáp án:** **A**  
> **Giải thích:** Cạnh lên của SH_CP dịch chuyển toàn bộ 8 bit trong thanh ghi sang phải 1 vị trí và nạp bit mới từ chân DS vào.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 173
**Chân tín hiệu 'ST_CP' (Storage Register Clock / Latch Pin) trên 74HC595 có vai trò chức năng gì?**

- **A.** Chốt dữ liệu từ thanh ghi dịch ra các chân ngõ ra
- **B.** Đo nhiệt độ tiếp giáp bán dẫn bên trong của vi mạch
- **C.** Điều chỉnh tốc độ nạp nén dữ liệu firmware nhúng
- **D.** Cung cấp nguồn điện áp dự phòng 5V cho mạch tải ngoài

> **Đáp án:** **A**  
> **Giải thích:** Xung cạnh lên tại chân Latch sao chép đồng loạt 8 bit từ thanh ghi dịch nội bộ sang tầng đệm ngõ ra Q0-Q7 cùng lúc.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 174
**Ưu điểm quan trọng của việc sử dụng chân chốt (Latch Pin) trên 74HC595 khi điều khiển LED là gì?**

- **A.** Cắt giảm hoàn toàn mức tiêu thụ năng lượng mạch
- **B.** Tránh nhấp nháy rác ở ngõ ra trong khi dịch bit
- **C.** Tự động kích thích cho bóng đèn LED đổi màu sắc
- **D.** Tăng cường độ rọi quang học của bóng LED lên đôi

> **Đáp án:** **B**  
> **Giải thích:** Ngõ ra ngoài chỉ cập nhật một lần duy nhất khi toàn bộ chuỗi bit đã dịch xong, loại bỏ hiện tượng hiển thị dữ liệu chuyển tiếp tạm thời.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 175
**Chân 'OE' (Output Enable) trên vi mạch 74HC595 tích cực ở mức logic nào để cho phép các ngõ ra hoạt động?**

- **A.** Mức logic HIGH
- **B.** Mức điện áp trôi nổi
- **C.** Mức tần số cao
- **D.** Mức logic LOW

> **Đáp án:** **D**  
> **Giải thích:** Chân OE có dấu gạch ngang trên đầu (Active-Low); nối OE về GND (LOW) thì các chân Q0-Q7 mới xuất dữ liệu, kéo lên HIGH sẽ đưa ngõ ra về High-Z.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 176
**Để xóa sạch dữ liệu trong thanh ghi dịch của 74HC595 về 0 tức thời, chân tín hiệu nào cần được kéo xuống mức LOW?**

- **A.** Chân nhận dữ liệu DS
- **B.** Chân xuất nối tiếp Q7S
- **C.** Chân MR tích cực mức LOW
- **D.** Chân cấp nguồn dương VCC

> **Đáp án:** **C**  
> **Giải thích:** Chân MR (Master Reclear / Reset) tích cực mức LOW; đưa chân này về 0V sẽ lập tức đặt lại toàn bộ các bit trong thanh ghi dịch về 0.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 177
**Nếu cần điều khiển 16 hoặc 24 đèn LED bằng thanh ghi dịch 74HC595, giải pháp phần cứng tối ưu là gì?**

- **A.** Mạch chỉ hỗ trợ điều khiển tối đa 8 đèn LED ngõ ra
- **B.** Sử dụng thêm các nhóm chân GPIO riêng biệt từ ESP32
- **C.** Thay thế toàn bộ bằng vi điều khiển có nhiều chân hơn
- **D.** Nối chân Q7S của IC trước vào chân DS của IC sau

> **Đáp án:** **D**  
> **Giải thích:** Chân Q7S (Serial Out) đưa bit tràn của IC thứ nhất sang IC thứ hai, cho phép ghép nối tiếp hàng chục IC mà chỉ tốn 3 chân GPIO.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 178
**Đèn LED 7 đoạn loại Cathode chung (Common Cathode) có nguyên lý đấu nối các cực của các đoạn LED như thế nào?**

- **A.** Cực âm của tất cả các đoạn được nối chung về mass
- **B.** Cực dương của tất cả các đoạn được nối chung với nhau
- **C.** Không có chân cực âm
- **D.** Mỗi đoạn LED có hai chân độc lập

> **Đáp án:** **A**  
> **Giải thích:** Loại Cathode chung có toàn bộ chân âm nối đất; muốn đoạn LED nào sáng thì cấp mức logic HIGH (3.3V) vào chân Anode tương ứng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 179
**Đèn LED 7 đoạn loại Anode chung (Common Anode) yêu cầu mức logic nào tại chân điều khiển từng đoạn để đoạn đó phát sáng?**

- **A.** Mức logic LOW
- **B.** Mức điện trở vô cùng
- **C.** Mức logic HIGH
- **D.** Mức dao động

> **Đáp án:** **A**  
> **Giải thích:** Với Anode chung nối lên nguồn VCC, đoạn LED sẽ sáng khi chân Cathode tương ứng bị kéo xuống mức logic LOW (0V).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 180
**Để hiển thị chữ số '0' trên LED 7 đoạn Cathode chung (thứ tự bit từ MSB đến LSB là DP-g-f-e-d-c-b-a), mã nhị phân tương ứng là gì?**

- **A.** 0b11111111
- **B.** 0b00000000
- **C.** 0b00000110
- **D.** 0b00111111

> **Đáp án:** **D**  
> **Giải thích:** Chữ số 0 làm sáng các thanh a,b,c,d,e,f và tắt thanh g, DP: nhị phân là 00111111 tương đương hệ hexa là 0x3F.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 181
**Để hiển thị chữ số '1' trên LED 7 đoạn Cathode chung (thanh b và c sáng), mã nhị phân xuất ra là gì?**

- **A.** 0b00000110
- **B.** 0b01001111
- **C.** 0b01100110
- **D.** 0b01011011

> **Đáp án:** **A**  
> **Giải thích:** Chữ số 1 chỉ cần hai thanh bên phải sáng là b và c: nhị phân 00000110 tương đương 0x06.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 182
**Hàm chuẩn trong C++ nào được dùng để đẩy dữ liệu 8-bit nối tiếp ra vi mạch thanh ghi dịch 74HC595?**

- **A.** Sử dụng hàm shiftOut() điều khiển chân Data và tạo xung Clock dịch bit
- **B.** Sử dụng hàm spiSend() truyền gói dữ liệu đồng bộ qua bus SPI
- **C.** Sử dụng hàm serialWrite() xuất dữ liệu nối tiếp qua cổng UART
- **D.** Sử dụng hàm pulseOut() tạo chuỗi xung dịch dữ liệu song song

> **Đáp án:** **A**  
> **Giải thích:** Hàm shiftOut tự động điều khiển chân Data và tạo xung Clock trên chân ClockPin để dịch từng bit của tham số value ra ngoại vi.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 183
**Tham số `bitOrder` trong hàm `shiftOut()` có thể nhận một trong hai hằng số quy định thứ tự truyền bit nào?**

- **A.** MSBFIRST hoặc LSBFIRST
- **B.** START hoặc STOP
- **C.** HIGH hoặc LOW
- **D.** UP và DOWN

> **Đáp án:** **A**  
> **Giải thích:** MSBFIRST truyền bit có trọng số lớn nhất (Bit 7) trước; LSBFIRST truyền bit có trọng số nhỏ nhất (Bit 0) trước.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 184
**Để chốt dữ liệu 8-bit vừa được đẩy vào thanh ghi dịch 74HC595 xuất hiện ổn định tại các ngõ ra Q0-Q7, trình tự điều khiển chân Latch (ST_CP) là gì?**

- **A.** Duy trì chân Latch cố định ở mức logic LOW liên tục
- **B.** Kéo Latch xuống LOW rồi kéo lên HIGH để chốt
- **C.** Kéo Latch lên HIGH trước khi truyền rồi hạ xuống LOW
- **D.** Thả nổi chân Latch mà không cần điều khiển điện áp

> **Đáp án:** **B**  
> **Giải thích:** Chân Latch được kéo LOW để thanh ghi dịch tự do nhận dữ liệu; sau khi dịch đủ 8 bit, tạo một cạnh lên (LOW sang HIGH) để chốt dữ liệu ra ngoài.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 185
**Cho mảng mã hóa LED 7 đoạn: `byte digits[] = {0x3F, 0x06, 0x5B, 0x4F};`. Biểu thức `digits[2]` tương ứng với mã hiển thị của chữ số nào?**

- **A.** Chữ số 3
- **B.** Chữ số 0
- **C.** Chữ số 2
- **D.** Chữ số 1

> **Đáp án:** **C**  
> **Giải thích:** Chỉ số mảng trong C++ bắt đầu từ 0; do đó digits[0] là số 0, digits[1] là số 1, digits[2] là mã 0x5B của chữ số 2.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

### Câu 186
**Khi lập trình giao tiếp với chip dịch 74HC595, nếu muốn dịch ra chuỗi bit `0b10100000`, bit nào sẽ được xuất ra chân DS đầu tiên nếu chọn chế độ `MSBFIRST`?**

- **A.** Bit 0
- **B.** Bit số 4
- **C.** Bit 7
- **D.** Không thể xác định

> **Đáp án:** **C**  
> **Giải thích:** Quy ước MSBFIRST (Most Significant Bit First) luôn lấy bit có trọng số cao nhất (Bit 7 bên trái nhất) để dịch đi trước.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý vi mạch dịch bit 74HC595 và phương pháp quét LED 7 đoạn  

---

## 💻 Thực hành: Cấu trúc Lập trình Nhúng C++ Tổng hợp trên OBC (16 câu)

### Câu 187
**Đoạn mã `pinMode(LED_PIN, OUTPUT);` có tác dụng cụ thể nào đối với phần cứng vi điều khiển?**

- **A.** Cấu hình chân để tiếp nhận tín hiệu điện áp từ ngoài
- **B.** Cấp ngay lập tức mức điện áp dương 3.3V ra chân GPIO
- **C.** Cấu hình chân LED_PIN làm ngõ xuất tín hiệu
- **D.** Tắt hoàn toàn mạch điều khiển ngoại vi của chân GPIO

> **Đáp án:** **C**  
> **Giải thích:** Hàm pinMode với tham số OUTPUT sẽ bật các transistor lái ngõ ra của chân GPIO tương ứng.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 188
**Để xuất mức điện áp 3.3V (mức logic HIGH) ra chân GPIO đã được cấu hình OUTPUT, lệnh C++ nào được sử dụng?**

- **A.** Sử dụng hàm analogWrite() với giá trị độ rộng cực đại 255
- **B.** Sử dụng hàm digitalRead() để đọc mức điện áp đầu vào
- **C.** Sử dụng hàm digitalWrite() xuất mức logic HIGH lên chân chỉ định
- **D.** Sử dụng hàm pinMode() để kích hoạt điện áp kéo lên ngõ ra

> **Đáp án:** **C**  
> **Giải thích:** Hàm digitalWrite(pin, HIGH) kích hoạt bán dẫn kéo lên đường nguồn 3.3V tại chân ngõ ra chỉ định.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 189
**Để xuất mức điện áp 0V (mức logic LOW / GND) ra một chân GPIO ngõ ra, lệnh C++ nào được sử dụng?**

- **A.** Sử dụng hàm digitalWrite() xuất mức logic LOW kéo chân về đất GND
- **B.** Sử dụng hàm pinMode() gán trạng thái kéo xuống đất cho chân
- **C.** Sử dụng hàm analogSet() gán mức điện áp tương tự về 0V
- **D.** Sử dụng hàm digitalReset() để xóa trạng thái thanh ghi ngoại vi

> **Đáp án:** **A**  
> **Giải thích:** Hàm digitalWrite(pin, LOW) kích hoạt bán dẫn kéo chân GPIO về điện thế đất 0V (GND).  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 190
**Đoạn mã sau thực hiện chức năng gì: `digitalWrite(LED_PIN, !digitalRead(LED_PIN));`?**

- **A.** Đảo trạng thái logic hiện tại của chân LED_PIN
- **B.** Xóa cấu hình địa chỉ của chân GPIO khỏi bộ nhớ
- **C.** Ngắt nguồn điện để tắt hoàn toàn hoạt động của LED
- **D.** Thu thập thông số nhiệt độ mối nối bán dẫn của LED

> **Đáp án:** **A**  
> **Giải thích:** Toán tử phủ định logic `!` đảo giá trị đọc được từ chân (HIGH thành LOW hoặc ngược lại) rồi ghi trả lại chân đó.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 191
**Để cấu hình chân GPIO số 4 làm ngõ vào có kích hoạt sẵn điện trở kéo lên nội bộ, cú pháp chuẩn trong C++ là gì?**

- **A.** Cấu hình chế độ PULLUP trực tiếp bằng hàm pinMode()
- **B.** Cấu hình chân ngõ vào cơ bản chế độ INPUT không có trở kéo
- **C.** Cấu hình chế độ INPUT_PULLUP bằng hàm pinMode()
- **D.** Gọi lệnh setPinPullup() kích hoạt mạch kéo ngoài

> **Đáp án:** **C**  
> **Giải thích:** Cú pháp pinMode(4, INPUT_PULLUP) cấu hình phần cứng kết nối điện trở kéo nội bộ ~45kΩ lên đường nguồn 3.3V.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 192
**Đoạn mã C++ nào sau đây biểu diễn thuật toán phát hiện cạnh xuống (Falling Edge - khoảnh khắc vừa nhấn nút)?**

- **A.** Trạng thái hiện tại là mức HIGH và trạng thái trước đó là mức LOW
- **B.** Trạng thái hiện tại là mức LOW và trạng thái trước đó là mức HIGH
- **C.** Trạng thái hiện tại đang duy trì liên tục ở mức logic HIGH
- **D.** Trạng thái hiện tại hoàn toàn trùng khớp với trạng thái trước đó

> **Đáp án:** **B**  
> **Giải thích:** Sự chuyển dịch trạng thái từ HIGH (trước đó) xuống LOW (hiện tại) định nghĩa chính xác sườn xung xuống của nút bấm active-low.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 193
**Đoạn mã C++ nào biểu diễn thuật toán phát hiện cạnh lên (Rising Edge - khoảnh khắc vừa nhả nút ra)?**

- **A.** Trạng thái hiện tại chuyển lên mức HIGH từ trạng thái trước đó mức LOW
- **B.** Trạng thái trước đó đang ở mức giá trị logic nhị phân bằng 0
- **C.** Trạng thái hiện tại đang ở mức giá trị logic nhị phân bằng 0
- **D.** Trạng thái hiện tại chuyển xuống mức LOW từ trạng thái trước đó mức HIGH

> **Đáp án:** **A**  
> **Giải thích:** Cạnh lên xảy ra khi nút nhả ra, chân GPIO chuyển từ mức tiếp mass (LOW) trở lại mức kéo lên (HIGH).  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 194
**Để đọc giá trị điện áp chuyển đổi từ kênh ADC tại chân số 34 của ESP32, lệnh C++ nào được thực thi?**

- **A.** Gọi hàm getVoltage(34)
- **B.** Gọi hàm analogRead(34)
- **C.** Gọi hàm digitalRead(34)
- **D.** Gọi hàm analogGet(34)

> **Đáp án:** **B**  
> **Giải thích:** Hàm analogRead(pin) kích hoạt bộ SAR ADC đọc mẫu điện áp tại chân chỉ định và trả về giá trị số nguyên từ 0 đến 4095.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 195
**Cú pháp an toàn nào trong C++ nên được sử dụng để định dạng chuỗi telemetry chứa nhiều biến số nhằm tránh tràn bộ đệm (Buffer Overflow)?**

- **A.** strcpy(buffer, dataString, MAX_LEN)
- **B.** snprintf(buffer, sizeof(buffer), ...)
- **C.** strcat(buffer, telemetryString, 128)
- **D.** sprintf(buffer, %s %d, telemetry)

> **Đáp án:** **B**  
> **Giải thích:** Hàm snprintf giới hạn độ dài ký tự tối đa ghi vào mảng buffer bằng tham số kích thước sizeof(buffer), triệt tiêu lỗi tràn bộ đệm bộ nhớ.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 196
**Đoạn mã: `snprintf(telem, sizeof(telem), TEMP:%d,VOLT:%d, temp, volt);` tạo ra chuỗi định dạng gì nếu temp=25 và volt=3300?**

- **A.** TEMP:d,VOLT:d
- **B.** 25,3300
- **C.** TEMP:25,VOLT:3300
- **D.** TEMP:volt,VOLT:temp

> **Đáp án:** **C**  
> **Giải thích:** Ký tự đặc tả `%d` được thay thế lần lượt bằng giá trị số nguyên của biến temp (25) và volt (3300).  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 197
**Để bật một bit cụ thể tại vị trí `bitIndex` trong biến `flags` lên giá trị 1 mà không làm thay đổi các bit khác, câu lệnh C++ là:**

- **A.** Thực hiện phép toán phủ định bit NOT toàn bộ các bit trong biến
- **B.** Thực hiện phép toán loại trừ bit XOR với mặt nạ bit dịch tương ứng
- **C.** Thực hiện phép toán OR bit với mặt nạ dịch bit 1 tới vị trí cần bật
- **D.** Thực hiện phép toán AND bit với mặt nạ dịch bit 1 tới vị trí cần bật

> **Đáp án:** **C**  
> **Giải thích:** Phép toán OR bit (`|`) với mặt nạ bit có số 1 tại vị trí chỉ định sẽ ép bit đó lên 1 trong khi giữ nguyên trạng thái các bit còn lại.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 198
**Để xóa một bit cụ thể tại vị trí `bitIndex` trong biến `flags` về giá trị 0 mà không làm ảnh hưởng các bit khác, cú pháp C++ là:**

- **A.** Thực hiện phép toán XOR bit với mặt nạ dịch bit tương ứng
- **B.** Gán trực tiếp toàn bộ giá trị của biến về số không tuyệt đối
- **C.** Thực hiện phép toán OR bit với mặt nạ dịch bit tương ứng
- **D.** Thực hiện phép toán AND bit với phần bù đảo dấu của mặt nạ dịch bit

> **Đáp án:** **D**  
> **Giải thích:** Phép toán AND bit (`&`) với mặt nạ đảo `~(1 << bitIndex)` đặt bit chỉ định về 0 và bảo toàn các bit còn lại.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 199
**Khai báo hằng số trong C++ bằng cú pháp `const int LED_PIN = 2;` mang lại lợi ích gì so với khai báo biến thông thường `int LED_PIN = 2;`?**

- **A.** Tăng công suất dòng điện đầu ra cho chân GPIO
- **B.** Hỗ trợ nạp firmware từ xa qua mạng vô tuyến
- **C.** Cho phép biến thay đổi giá trị trong runtime
- **D.** Tránh ghi đè giá trị và tối ưu hóa bộ nhớ

> **Đáp án:** **D**  
> **Giải thích:** Từ khóa `const` chỉ định giá trị chỉ đọc, bắt lỗi biên dịch nếu có lệnh cố tình thay đổi và cho phép trình biên dịch tối ưu hóa thành hằng số tức thời.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 200
**Đoạn mã sau giải quyết vấn đề gì: `int val = map(analogRead(34), 0, 4095, 0, 255);`?**

- **A.** Ánh xạ giá trị 12-bit ADC sang dải 8-bit của PWM
- **B.** Chuyển đổi giá trị điện áp đọc sang độ F nhiệt độ
- **C.** Xóa sạch các giá trị còn tồn đọng trong bộ đệm ADC
- **D.** Thực hiện phép toán chia giá trị đo được cho 10

> **Đáp án:** **A**  
> **Giải thích:** Hàm map(x, in_min, in_max, out_min, out_max) thực hiện nội suy tỷ lệ tuyến tính để chuyển đổi giữa hai thang đo khác nhau.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 201
**Để kiểm tra xem một giá trị số `x` có nằm trong khoảng an toàn từ `minVal` đến `maxVal` hay không và ghim lại nếu vượt ngưỡng, hàm C++ nào được dùng?**

- **A.** Sử dụng hàm abs() để tính toán độ lệch giá trị tuyệt đối
- **B.** Sử dụng hàm constrain() ghim giá trị trong dải cận trên và cận dưới
- **C.** Sử dụng hàm round() để làm tròn giá trị về số nguyên gần nhất
- **D.** Sử dụng hàm map() để ánh xạ tuyến tính giá trị sang thang đo mới

> **Đáp án:** **B**  
> **Giải thích:** Hàm constrain(x, a, b) trả về a nếu x < a, trả về b nếu x > b, và trả về chính x nếu nằm trong khoảng [a, b].  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

### Câu 202
**Đoạn mã sau: `uint16_t raw = (highByte << 8) | lowByte;` thực hiện phép toán ghép dữ liệu gì?**

- **A.** Thực hiện chia số học giữa byte cao và byte thấp
- **B.** Xóa giá trị nhị phân của hai byte dữ liệu về 0
- **C.** Ghép hai byte 8-bit thành một số nguyên 16-bit
- **D.** Cộng giá trị đại số của hai byte dữ liệu với nhau

> **Đáp án:** **C**  
> **Giải thích:** Byte cao được dịch trái 8 vị trí chiếm nửa trên [15:8], sau đó ghép bit OR với byte thấp [7:0] để tái tạo nguyên vẹn giá trị 16-bit.  
> **Mục tiêu củng cố:** Làm chủ các cấu trúc lập trình C++ nhúng và xử lý logic trên bo mạch OBC  

---

## 📖 Doc 1.8: Định thời Non-blocking millis() & Thuật toán Chống Tràn số (9 câu)

### Câu 203
**Tác động nguy hiểm nhất của việc sử dụng hàm chặn `delay(1000)` trong mã nguồn điều khiển vệ tinh là gì?**

- **A.** Làm cạn kiệt dung lượng phân vùng bộ nhớ Flash nạp
- **B.** Làm sai lệch quang phổ và màu phát quang của đèn LED
- **C.** Gây xung điện làm hỏng phần cứng cổng nối tiếp UART
- **D.** Chặn CPU khiến hệ thống không kịp xử lý sự kiện

> **Đáp án:** **D**  
> **Giải thích:** Hàm delay() chiếm dụng CPU chạy một vòng lặp rỗng (busy-wait), làm tê liệt khả năng giám sát và thực thi đa nhiệm.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 204
**Hàm thời gian hệ thống `millis()` trong môi trường lập trình C++ của OBC trả về giá trị gì?**

- **A.** Số micro-giây trong một chu kỳ xung nhịp hệ thống
- **B.** Số mili-giây trôi qua từ thời điểm chip khởi động
- **C.** Thời gian vận hành dự kiến còn lại của nguồn pin
- **D.** Giá trị thời gian thiên văn hiện tại theo giờ GMT

> **Đáp án:** **B**  
> **Giải thích:** Hàm millis() đọc bộ đếm thời gian phần cứng hệ thống, trả về số mili-giây (kiểu unsigned long) kể từ lúc chip bật nguồn.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 205
**Kiểu dữ liệu phù hợp nhất trong C++ để lưu trữ giá trị trả về từ hàm `millis()` nhằm tránh hiện tượng tràn số sớm là gì?**

- **A.** int
- **B.** short
- **C.** char
- **D.** unsigned long

> **Đáp án:** **D**  
> **Giải thích:** Giá trị millis() tăng liên tục, biến kiểu unsigned long 32-bit có thể đếm liên tục khoảng 49.7 ngày trước khi quay về 0.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 206
**Trong kỹ thuật lập trình phi phong bế (Non-blocking), điều kiện nào được dùng để xác định đã trôi qua khoảng thời gian `interval`?**

- **A.** Kiểm tra biến thời gian millis() vượt quá một ngưỡng hằng số cố định
- **B.** Kiểm tra hiệu số giữa millis() hiện tại và mốc trước đó lớn hơn hoặc bằng chu kỳ interval
- **C.** Kiểm tra biến thời gian millis() bằng chính xác giá trị chu kỳ interval định sẵn
- **D.** Gọi hàm dừng trễ delay() và kiểm tra trạng thái hoàn tất trả về

> **Đáp án:** **B**  
> **Giải thích:** Phép trừ `millis() - previousMillis >= interval` bảo đảm điều kiện kích hoạt luôn chính xác ngay cả khi biến millis() bị tràn số.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 207
**Đoạn mã sau làm đèn LED nối với kênh PWM thay đổi độ sáng như thế nào: `for(int d=0; d<=255; d++) { ledcWrite(0, d); delay(10); }`?**

- **A.** Đèn LED chớp nháy tuần hoàn theo chu kỳ cố định
- **B.** Đèn LED liên tục thay đổi tần số dao động quang phổ
- **C.** Độ sáng đèn LED tăng dần từ tắt đến sáng cực đại
- **D.** Đèn LED lập tức tắt hẳn và chuyển sang trạng thái treo

> **Đáp án:** **C**  
> **Giải thích:** Vòng lặp tăng dần giá trị Duty Cycle từ 0 lên 255 mỗi 10ms tạo hiệu ứng ánh sáng sáng dần đều (fading in).  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 208
**Hàm `micros()` trong C++ có chức năng tương tự hàm `millis()` nhưng đơn vị thời gian đo lường là gì?**

- **A.** Micro-giây
- **B.** Phút
- **C.** Nano-giây
- **D.** Giây

> **Đáp án:** **A**  
> **Giải thích:** Hàm micros() đếm số micro-giây từ khi khởi động, chu kỳ tràn số của micros() diễn ra sau khoảng 70 phút.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 209
**Đoạn mã C++ sau thực hiện kiểm tra điều kiện gì: `if (btnState == LOW && (millis() - lastDebounceTime > 50))`?**

- **A.** Kiểm tra nhiệt độ cảm biến vượt quá ngưỡng 50 độ C
- **B.** Kiểm tra khoảng thời gian tắt toàn bộ bóng đèn LED
- **C.** Kiểm tra dung lượng bộ nhớ đệm đã bị đầy hay chưa
- **D.** Nút bấm đã được ấn ổn định quá 50 mili-giây

> **Đáp án:** **D**  
> **Giải thích:** Đây là thuật toán lọc chống rung phím (Debounce) bằng thời gian thực không phong bế CPU.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 210
**Đoạn mã sau kiểm tra hiện tượng gì: `if (millis() < previousMillis) { previousMillis = millis(); }`?**

- **A.** Xử lý hiện tượng tràn số của bộ đếm millis
- **B.** Phát hiện hiện tượng sụt áp nguồn điện của hệ thống
- **C.** Kiểm tra nhiệt độ môi trường giảm đột ngột dưới sàn
- **D.** Phát hiện trạng thái nút nhấn cơ học bị kẹt tiếp điểm

> **Đáp án:** **A**  
> **Giải thích:** Sau 49.7 ngày, biến unsigned long 32-bit vượt qua giá trị 4,294,967,295 và quay vòng về 0; đoạn mã phát hiện sự kiện quay vòng này.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

### Câu 211
**Để tạm dừng chương trình trong khoảng thời gian cực ngắn chỉ 50 micro-giây mà hàm `delay()` không đáp ứng được, hàm nào được sử dụng?**

- **A.** Gọi hàm waitMicros() để tạm dừng chu trình thực thi của chip
- **B.** Gọi hàm sleep() đưa vi điều khiển vào trạng thái ngủ tạm thời
- **C.** Gọi hàm delayMicroseconds() tạo độ trễ chính xác ở cấp độ micro-giây
- **D.** Gọi hàm delay() truyền tham số số thực dạng phân số micro-giây

> **Đáp án:** **C**  
> **Giải thích:** Hàm delayMicroseconds(us) chạy vòng lặp xung nhịp trực tiếp của CPU để tạo độ trễ chính xác ở cấp độ micro-giây.  
> **Mục tiêu củng cố:** Hiểu và áp dụng quy chuẩn lập trình định thời non-blocking bằng millis()  

---

## 💻 Thực hành: Giao tiếp Nối tiếp UART (Lab1-07, Lab1-08) (8 câu)

### Câu 212
**Để khởi tạo giao tiếp nối tiếp UART0 với tốc độ truyền 115200 baud, lệnh C++ nào được gọi trong hàm `setup()`?**

- **A.** Gọi hàm UART.init() và truyền tham số tốc độ baud mong muốn
- **B.** Gọi phương thức Serial.start() để bật khối ngoại vi truyền nhận
- **C.** Gọi phương thức Serial.begin() và truyền tham số tốc độ baud mong muốn
- **D.** Gọi phương thức Serial.connect() để thiết lập kênh UART0

> **Đáp án:** **C**  
> **Giải thích:** Hàm Serial.begin(baudrate) cấu hình tốc độ truyền nhận, kích hoạt bộ đếm baud rate và bật bộ đệm UART phần cứng.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 213
**Đoạn mã C++ nào sau đây được sử dụng để đọc liên tục chuỗi ký tự nhận được từ cổng Serial cho đến khi gặp ký tự xuống dòng '\n'?**

- **A.** Sử dụng phương thức Serial.readStringUntil() đọc tới ký tự ngắt dòng
- **B.** Sử dụng phương thức Serial.read() đọc tuần tự từng ký tự đơn lẻ
- **C.** Sử dụng phương thức Serial.peek() xem trước ký tự đầu trong bộ đệm
- **D.** Sử dụng phương thức Serial.print() xuất ký tự ngắt dòng ra terminal

> **Đáp án:** **A**  
> **Giải thích:** Hàm readStringUntil('\n') tự động đọc các ký tự nối tiếp vào chuỗi cho đến khi gặp dấu ngắt dòng hoặc hết thời gian timeout.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 214
**Để so sánh nội dung của chuỗi lệnh `cmd` nhận được từ cổng Serial với chuỗi cố định LED_ON, cú pháp C++ chuẩn là gì?**

- **A.** Sử dụng toán tử so sánh bằng == hoặc phương thức equals() của đối tượng String
- **B.** Kiểm tra chuỗi lệnh khác rỗng và có độ dài ký tự lớn hơn không
- **C.** Sử dụng toán tử gán đơn = kết hợp kiểm tra độ dài tổng thể
- **D.** Chỉ kiểm tra xem ký tự đầu tiên của chuỗi có trùng với chữ L hay không

> **Đáp án:** **A**  
> **Giải thích:** Toán tử so sánh `==` hoặc phương thức `cmd.equals()` so sánh nội dung từng ký tự của đối tượng String trong C++.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 215
**Để thiết lập thời gian chờ tối đa (Timeout) khi thực hiện các hàm đọc chuỗi như `Serial.readBytesUntil()`, lệnh C++ nào được dùng?**

- **A.** Sử dụng phương thức Serial.wait() truyền thời gian chờ tối đa
- **B.** Sử dụng phương thức Serial.setTimeout() thiết lập thời gian chờ tối đa
- **C.** Sử dụng phương thức Serial.setTime() cấu hình đồng hồ đếm thời gian
- **D.** Gọi hàm dừng trễ delay() để tạm dừng chương trình chờ dữ liệu tới

> **Đáp án:** **B**  
> **Giải thích:** Hàm setTimeout quy định số mili-giây tối đa hệ thống chờ ký tự trước khi từ bỏ và trả về số byte đã nhận được.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 216
**Đoạn mã sau thực hiện chức năng gì: `if (Serial.available() > 0) { char c = Serial.read(); Serial.write(c); }`?**

- **A.** Tạo vòng lặp vô hạn khiến vi điều khiển bị treo
- **B.** Đọc ký tự nhận được và dội ngược lại về máy tính
- **C.** Đọc bỏ ký tự nhận được và xóa sạch khỏi bộ nhớ
- **D.** Lưu trữ ký tự vừa nhận vào ô nhớ của bộ nhớ Flash

> **Đáp án:** **B**  
> **Giải thích:** Đoạn mã tạo cơ chế phản hồi dội ngược (Serial Echo) để kiểm tra độ thông suốt của kênh truyền nhận tín hiệu hai chiều.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 217
**Cú pháp `Serial.write(buf, len);` khác với `Serial.print(buf);` ở điểm nào?**

- **A.** Hai phương thức hoàn toàn đồng nhất về định dạng dữ liệu gửi ra
- **B.** Serial.write hiển thị cỡ chữ lớn hơn trên màn hình giao diện dòng lệnh
- **C.** Serial.write truyền mảng byte nhị phân thô thay vì chuyển đổi sang ký tự ASCII
- **D.** Serial.write chỉ truyền được duy nhất một phần tử byte đầu tiên trong mảng

> **Đáp án:** **C**  
> **Giải thích:** Hàm write xuất chuỗi byte nhị phân trực tiếp từ bộ nhớ, cần thiết cho việc truyền các gói tin nhị phân hoặc dữ liệu có cấu trúc.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 218
**Đoạn mã sau thực hiện hành vi nào: `while(Serial.available() > 0) { Serial.read(); }`?**

- **A.** Tạm dừng chương trình để chờ luồng dữ liệu mới gửi đến
- **B.** Đọc bỏ và dọn sạch toàn bộ dữ liệu trong bộ đệm RX
- **C.** Làm khóa cứng chu trình tính toán của vi điều khiển
- **D.** Đẩy toàn bộ dữ liệu trong mảng bộ đệm ra đường truyền

> **Đáp án:** **B**  
> **Giải thích:** Vòng lặp đọc tuần tự cho đến khi bộ đệm rỗng là phương pháp thủ công tin cậy để làm sạch hàng đợi nhận UART.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

### Câu 219
**Đoạn mã C++ nào sau đây giúp chuyển đổi một ký tự số ASCII nhận được từ Serial (ví dụ ký tự '5') thành giá trị số nguyên nguyên bản là 5?**

- **A.** Nhân mã số ASCII của ký tự với hệ số nguyên bằng mười
- **B.** Ép kiểu dữ liệu trực tiếp từ kiểu ký tự sang kiểu số nguyên int
- **C.** Lấy mã ASCII của ký tự trừ đi mã ASCII của ký tự số không
- **D.** Lấy mã ASCII của ký tự cộng thêm mã ASCII của ký tự số không

> **Đáp án:** **C**  
> **Giải thích:** Trong bảng mã ASCII, ký tự '0' có mã 48 và '5' có mã 53; lấy `c - '0'` tương đương $53 - 48 = 5$.  
> **Mục tiêu củng cố:** Lập trình truyền nhận dữ liệu UART và phân tích lệnh điều khiển Telecommand  

---

## 💻 Thực hành: Điều khiển LED Đơn, Chuỗi LED & LEDC PWM (Lab1-01, Lab1-02, Lab1-03) (1 câu)

### Câu 220
**Để điều chỉnh chu kỳ làm việc (Duty Cycle) của một kênh PWM trong ngoại vi LEDC, lệnh C++ nào được gọi?**

- **A.** Sử dụng hàm pwmWrite() ghi chu kỳ xung vào thanh ghi ngoại vi
- **B.** Sử dụng hàm digitalWritePWM() xuất mức xung tương ứng
- **C.** Sử dụng hàm analogWrite() điều chỉnh tỷ lệ thời gian đóng ngắt
- **D.** Sử dụng hàm ledcWrite() cập nhật chu kỳ làm việc của kênh PWM

> **Đáp án:** **D**  
> **Giải thích:** Hàm ledcWrite ghi giá trị số nguyên (ví dụ từ 0 đến 255 đối với độ phân giải 8-bit) vào thanh ghi điều chế chu kỳ của kênh.  
> **Mục tiêu củng cố:** Lập trình điều khiển LED nhịp tim, chuỗi LED và điều chế xung LEDC PWM  

---

