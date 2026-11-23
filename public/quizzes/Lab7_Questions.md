# Ngân hàng Câu hỏi Trắc nghiệm - Lab 7

> **Tổng số câu hỏi:** 220 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 7.1: Năm Thách Thức Kỹ Thuật Khốc Liệt Khi Tích Hợp Đa Phân Hệ vào Khối 1U (115 câu)

### Câu 1
**Kiến trúc phần mềm bay phân tầng (Layered Flight Software Architecture) mang lại lợi ích gì cho CubeSat?**

- **A.** Tách biệt phần cứng, dịch vụ lõi và ứng dụng
- **B.** Tăng thêm độ phức tạp mã nguồn và thời gian chạy
- **C.** Làm phần mềm chạy chậm hơn và khó bảo trì hệ thống
- **D.** Gia tăng dung lượng bộ nhớ RAM và tiêu hao năng lượng

> **Đáp án:** **A**  
> **Giải thích:** Kiến trúc phân tầng ngăn chặn sự phụ thuộc chéo, cho phép thay đổi cảm biến phần cứng mà không làm ảnh hưởng tới logic điều khiển sứ mệnh bên trên.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 2
**Trạng thái đầu tiên của CubeSat ngay sau khi rời khỏi ống phóng P-POD là trạng thái nào?**

- **A.** STATE_PAYLOAD_EXEC
- **B.** STATE_SAFE_MODE
- **C.** STATE_BOOT
- **D.** STATE_REBOOT

> **Đáp án:** **C**  
> **Giải thích:** STATE_BOOT thực hiện Power-On Self Test (POST), đọc dữ liệu lưu trong EEPROM/RTC RAM và kích hoạt bộ đếm 30 phút im lặng vô tuyến.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 3
**Các nhiệm vụ định kỳ được thực thi trong trạng thái STATE_NORMAL_OPS bao gồm những gì?**

- **A.** Dừng toàn bộ mọi tác vụ xử lý của hệ thống
- **B.** Đọc cảm biến, lưu thẻ nhớ, phát Beacon định kỳ
- **C.** Chỉ sạc pin và ngắt toàn bộ các khối chức năng
- **D.** Kích hoạt máy ảnh chụp liên tục vào bộ nhớ

> **Đáp án:** **B**  
> **Giải thích:** Duy trì hoạt động thu thập viễn trắc cơ bản và giữ liên lạc liên tục với mạng lưới trạm mặt đất.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 4
**Trạng thái 'STATE_PAYLOAD_EXEC' (Thực thi tải trọng nhiệm vụ) được kích hoạt trong trường hợp nào?**

- **A.** Khi vệ tinh nằm hoàn toàn trong vùng tối của Trái Đất
- **B.** Khi mức điện áp của khối pin giảm xuống dưới ngưỡng 20%
- **C.** Khi nhận lệnh điều khiển hoặc tới tọa độ mục tiêu
- **D.** Tự động kích hoạt liên tục không ngừng nghỉ suốt ngày

> **Đáp án:** **C**  
> **Giải thích:** Kích hoạt có điều kiện bảo vệ vệ tinh khỏi cạn kiệt năng lượng khi vận hành các tải trọng tiêu thụ lớn như Camera viễn thám.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 5
**Trạng thái 'STATE_POWER_SAVE' (Tiết kiệm năng lượng) được kích hoạt khi thông số nào vượt ngưỡng cảnh báo?**

- **A.** Điện áp pin tụt sâu dưới ngưỡng an toàn trong tối
- **B.** Vận tốc góc quay quanh trục quán tính tăng vọt
- **C.** Nhiệt độ môi trường phòng thí nghiệm tăng quá cao
- **D.** Dung lượng bộ nhớ lưu trữ trên thẻ nhớ bị đầy

> **Đáp án:** **A**  
> **Giải thích:** Tự động chuyển sang chế độ tiết kiệm năng lượng bảo vệ pin không bị xả cạn kiệt gây hỏng tế bào hóa học.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 6
**Trong trạng thái STATE_POWER_SAVE, phần mềm bay sẽ thực hiện các biện pháp cắt giảm tiêu thụ nào?**

- **A.** Kích hoạt toàn bộ cảm biến trên bo mạch hoạt động
- **B.** Xóa toàn bộ mã nguồn chương trình trong bộ nhớ flash
- **C.** Phát tín hiệu sóng vô tuyến với công suất cực đại
- **D.** Tắt Camera, GPS, giãn chu kỳ Beacon và giảm xung CPU

> **Đáp án:** **D**  
> **Giải thích:** Load Shedding (Sa thải phụ tải) và CPU Throttling giúp giảm dòng tiêu thụ toàn hệ thống xuống mức tối thiểu.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 7
**Khi nào vệ tinh được phép tự động thoát khỏi trạng thái STATE_POWER_SAVE để quay về STATE_NORMAL_OPS?**

- **A.** Pin được sạc hồi phục vượt ngưỡng có trễ an toàn
- **B.** Ngay khi có tín hiệu bấm nút cưỡng bức từ trạm thu
- **C.** Hệ thống bị khóa vĩnh viễn không thể tự thoát ra
- **D.** Tự động đếm lùi thời gian sau đúng 5 giây hoạt động

> **Đáp án:** **A**  
> **Giải thích:** Khoảng trễ Hysteresis ngăn chặn hiện tượng hệ thống dao động bật/tắt liên tục (Chattering) quanh ngưỡng điện áp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 8
**Trạng thái 'STATE_SAFE_MODE' (Chế độ an toàn sống còn) được kích hoạt trong hoàn cảnh khẩn cấp nào?**

- **A.** Khi vệ tinh đã hoàn thành toàn bộ sứ mệnh khoa học
- **B.** Pin sụt áp đáy, cảm biến tê liệt hoặc OBC reset lặp
- **C.** Khi nhận được bản tin dữ liệu mới từ trạm mặt đất
- **D.** Khi vệ tinh bay qua vùng có điều kiện thời tiết đẹp

> **Đáp án:** **B**  
> **Giải thích:** Safe Mode là thành trì phòng thủ cuối cùng bảo vệ vệ tinh khỏi nguy cơ mất kiểm soát vĩnh viễn.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 9
**Trong STATE_SAFE_MODE, cấu hình hệ thống được đưa về mức tối thiểu tuyệt đối như thế nào?**

- **A.** Ngắt tải phụ, giữ OBC xung thấp và LoRa chờ lệnh cứu
- **B.** Tăng công suất phát sóng vô tuyến lên mức tối đa
- **C.** Ngắt hoàn toàn đường cấp điện từ bộ pin tích lũy
- **D.** Kích hoạt cụm máy ảnh chụp liên tục gửi dữ liệu

> **Đáp án:** **A**  
> **Giải thích:** Bảo toàn năng lượng và duy trì kênh 'thính giác' vô tuyến tối thiểu để đón nhận lệnh cứu trợ.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 10
**Khái niệm 'Watchdog Timer' (WDT) cấp phần cứng trong thiết kế OBC có vai trò gì?**

- **A.** 0.01 đến 0.05 giây
- **B.** 30 đến 60 phút
- **C.** 1 đến 3 giây
- **D.** 12 đến 24 giờ

> **Đáp án:** **D**  
> **Giải thích:** Watchdog phần cứng là chiếc phao cứu sinh tự động kéo vệ tinh thoát khỏi tình trạng treo đơ phần mềm ngoài không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 11
**Tại sao trên CubeSat thường bố trí hai tầng giám sát: Task Watchdog Timer (TWDT phần mềm) và External Hardware Watchdog (WDT chip ngoài)?**

- **A.** 1.0 đến 2.0 Vôn
- **B.** 24 đến 48 Vôn
- **C.** 3.3 đến 5.0 Vôn
- **D.** 100 đến 220 Vôn

> **Đáp án:** **A**  
> **Giải thích:** Giám sát đa tầng (Multi-tier Watchdog) loại trừ hoàn toàn nguy cơ vệ tinh 'chết im lặng' ngoài không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 12
**Sau khi khởi động lại, hàm kiểm tra lý do reset `esp_reset_reason()` trả về `ESP_RST_PANIC` cho biết điều gì?**

- **A.** Hệ thống vừa bị sập do lỗi phần mềm nghiêm trọng
- **B.** Khởi động do hẹn giờ
- **C.** Khởi động bình thường khi mới cắm pin
- **D.** Khởi động do rút chốt RBF

> **Đáp án:** **A**  
> **Giải thích:** Xác định chính xác nguyên nhân gốc của lần khởi động lại trước giúp FDIR đưa ra quyết định xử lý phù hợp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 13
**Bảng nhật ký lỗi (Error Log / Anomaly Buffer) lưu trong bộ nhớ Flash của CubeSat cần lưu giữ những thông tin gì?**

- **A.** Bản tin dự báo khí tượng thời tiết của trạm mặt đất
- **B.** Các khung hình ảnh chụp bề mặt Trái Đất từ máy ảnh
- **C.** Mã lỗi, thời gian Epoch, tên phân hệ, trạng thái FSM
- **D.** Toàn bộ tệp mã nguồn phần mềm điều khiển sứ mệnh bay

> **Đáp án:** **C**  
> **Giải thích:** Dữ liệu điều tra sự cố (Black Box / Flight Recorder) được truyền xuống mặt đất trong phiên bay tiếp theo để kỹ sư phân tích.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 14
**Khái niệm 'Safe State Default' trong thiết kế mạch điện và phần mềm bay có nghĩa là gì?**

- **A.** Thiết lập công suất phát sóng vô tuyến ở mức cực đại
- **B.** Cấu hình toàn bộ chân tín hiệu dẫn điện ở mức logic cao
- **C.** Mở toàn bộ công tắc nguồn cấp cho các linh kiện phụ
- **D.** Khi mất điện hoặc reset, các chân về trạng thái an toàn

> **Đáp án:** **D**  
> **Giải thích:** Nguyên tắc thiết kế an toàn khi có lỗi (Fail-Safe Default) ngăn ngừa các kích hoạt ngoài ý muốn làm hỏng vệ tinh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 15
**Tại sao trong mã nguồn phần mềm bay của CubeSat, việc cấp phát bộ nhớ động (`malloc`, `new`, `free`) trong vòng lặp thời gian thực bị NGHIÊM CẤM?**

- **A.** Vì làm hao tổn dung lượng điện năng tích trữ của pin
- **B.** Vì làm hỏng cấu trúc hệ thống tệp lưu trên thẻ nhớ
- **C.** Cấp phát động gây phân mảnh bộ nhớ RAM làm sập hệ thống
- **D.** Vì ngôn ngữ lập trình nhúng không hỗ trợ hàm cấp phát

> **Đáp án:** **C**  
> **Giải thích:** Quy tắc vàng của phần mềm hàng không vũ trụ (như chuẩn MISRA-C): Tất cả bộ nhớ phải được cấp phát tĩnh (Static Allocation) ngay tại thời điểm biên dịch.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 16
**Trong kíp trực điều khiển sứ mệnh trạm mặt đất, vị trí 'Flight Director' (Chỉ huy chuyến bay) có quyền hạn gì?**

- **A.** Phụ trách công tác hậu cần và pha trà cho toàn bộ kíp
- **B.** Chịu trách nhiệm vệ sinh trang thiết bị trong phòng trực
- **C.** Chỉ làm nhiệm vụ nhập số liệu viễn trắc vào phần mềm
- **D.** Chỉ huy cao nhất, điều phối kíp trực và duyệt gửi lệnh

> **Đáp án:** **D**  
> **Giải thích:** Vị trí chỉ huy tối cao trong mọi kịch bản danh định và xử lý khủng hoảng không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 17
**Vị trí chuyên trách 'COM Engineer' (Kỹ sư Truyền thông) trong kíp trực chịu trách nhiệm về những việc gì?**

- **A.** 24 đến 48 giờ
- **B.** 10 đến 15 giây
- **C.** 90 đến 95 phút
- **D.** 10 đến 14 ngày

> **Đáp án:** **C**  
> **Giải thích:** Bảo đảm thông tuyến liên lạc vô tuyến hai chiều không gian - mặt đất thông suốt.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 18
**Vị trí chuyên trách 'EPS & Thermal Lead' (Trưởng nhóm Nguồn & Nhiệt) theo dõi trọng tâm những tham số nào trên Dashboard?**

- **A.** 1.0 đến 2.0 km/s
- **B.** 7.5 đến 7.8 km/s
- **C.** 50 đến 100 km/s
- **D.** 0.1 đến 0.3 km/s

> **Đáp án:** **C**  
> **Giải thích:** Giữ gìn 'trái tim' năng lượng và sự cân bằng nhiệt của vệ tinh luôn trong giới hạn an toàn.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 19
**Vị trí 'Data Analyst / Mission Scientist' (Chuyên viên Phân tích Dữ liệu) có vai trò gì trong phiên bay qua?**

- **A.** 30 đến 35 phút
- **B.** 1 đến 2 phút
- **C.** 5 đến 6 giờ
- **D.** 10 đến 12 giờ

> **Đáp án:** **D**  
> **Giải thích:** Chuyển hóa luồng dữ liệu byte thô thành các kết quả nghiên cứu khoa học có giá trị.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 20
**Nguyên tắc 'Hai bước phê duyệt' (Two-person Rule / Arm and Fire) khi gửi các lệnh nhạy cảm lên vệ tinh nhằm mục đích gì?**

- **A.** Làm gia tăng số lượng nhân sự cần thiết cho mỗi ca
- **B.** Làm tăng độ dài byte dữ liệu của khung truyền viễn lệnh
- **C.** Kỹ sư soạn lệnh và Chỉ huy duyệt mở khóa trước khi phát
- **D.** Tăng tốc độ truyền dẫn dữ liệu qua kênh sóng vô tuyến

> **Đáp án:** **C**  
> **Giải thích:** Nguyên tắc an toàn kinh điển bảo đảm không có lệnh tai hại nào được phát lên do vô ý.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 21
**Quy trình đánh giá và kết thúc phiên bay qua (Post-Pass Debrief) bao gồm những việc gì?**

- **A.** Lưu log thô, tính tỷ lệ gói tốt, ghi sổ nhật ký và họp ca
- **B.** Rời khỏi vị trí và đi nghỉ ngơi ngay lập tức sau phiên
- **C.** Xóa sạch toàn bộ các tệp dữ liệu vừa thu nhận được về
- **D.** Tắt nguồn toàn bộ máy tính và thiết bị trạm ngay tức thì

> **Đáp án:** **A**  
> **Giải thích:** Kỷ luật hậu phiên bay bảo đảm dữ liệu khoa học được bảo tồn an toàn và kinh nghiệm vận hành được tích lũy.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 22
**Tại sao kíp trực cần kiểm tra dự báo thời tiết không gian (Space Weather / Chỉ số hoạt động Mặt Trời Kp-index)?**

- **A.** Tắt hệ thống điều hòa nhiệt độ trong phòng máy chủ
- **B.** Bão từ làm tăng lực cản khí quyển và gây lỗi lật bit
- **C.** Lựa chọn trang phục phù hợp với thời tiết trong ngày
- **D.** Xác định xem có cần che ô khi di chuyển ra dàn anten

> **Đáp án:** **B**  
> **Giải thích:** Thời tiết không gian cực đoan cảnh báo trước nguy cơ xảy ra lỗi hạt đơn trong vi mạch.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 23
**Khái niệm 'Single Event Upset' (SEU) trong bộ nhớ bán dẫn của vệ tinh do bức xạ vũ trụ là gì?**

- **A.** Hạt ion năng lượng cao làm lật bit bộ nhớ mà không hỏng chip
- **B.** Linh kiện bán dẫn bị nứt vỡ cơ học thành hai phần rời
- **C.** Các mối hàn chì trên bo mạch điện tử bị nóng chảy ra
- **D.** Khối cell pin nguồn bị chập ngắn mạch điện cực bên trong

> **Đáp án:** **A**  
> **Giải thích:** SEU có thể làm sai lệch giá trị biến hoặc biến đổi mã lệnh chương trình; Watchdog và khởi động lại giúp khôi phục hệ thống.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 24
**Kỹ thuật 'Bộ nhớ chống bức xạ đa số quyết định' (Triple Modular Redundancy - TMR) hoạt động như thế nào?**

- **A.** Bố trí 3 hệ thống anten thu phát sóng độc lập nhau
- **B.** Sử dụng 3 bu lông siết chặt tại mỗi vị trí góc bo mạch
- **C.** Lưu 3 bản sao và biểu quyết đa số để sửa lỗi lật bit
- **D.** Gia tăng dung lượng tích trữ của khối pin nguồn gấp 3 lần

> **Đáp án:** **C**  
> **Giải thích:** TMR loại bỏ hoàn toàn ảnh hưởng của lỗi lật bit ngẫu nhiên trong các thanh ghi trọng yếu.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 25
**Khi có nhiều lệnh cần gửi lên vệ tinh trong một phiên ngắn, quy tắc sắp xếp hàng đợi lệnh là gì?**

- **A.** Lệnh nào có độ dài ngắn nhất sẽ được ưu tiên gửi trước
- **B.** Ưu tiên gửi lệnh chụp ảnh bề mặt lên vị trí đầu hàng
- **C.** Lệnh an toàn -> Đồng bộ giờ -> Cấu hình -> Tải trọng
- **D.** Sắp xếp ngẫu nhiên không cần theo bất kỳ quy tắc nào

> **Đáp án:** **C**  
> **Giải thích:** An toàn hệ thống luôn là ưu tiên số 1 của mọi chuyến bay không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 26
**Quy trình bàn giao ca trực (Shift Handover Procedure) giữa hai kíp trực điều khiển trạm mặt đất quy định điều gì?**

- **A.** Bỏ qua các thông báo cảnh báo lỗi phát sinh trong ca
- **B.** Rời khỏi vị trí làm việc ngay khi đồng hồ điểm hết ca
- **C.** Tắt nguồn toàn bộ hệ thống máy tính của phòng điều hành
- **D.** Tóm tắt sức khỏe, lệnh chờ, bất thường và ký sổ nhật ký

> **Đáp án:** **D**  
> **Giải thích:** Bàn giao ca trực chặt chẽ bảo đảm tính liên tục và không làm đứt đoạn chuỗi thông tin giám sát vệ tinh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 27
**Khi thực hiện nâng cấp phần mềm trên quỹ đạo (Over-the-Air Firmware Update - OTA / Patch), quy tắc an toàn hàng không vũ trụ là gì?**

- **A.** Kiến trúc khởi động kép: nạp vùng phụ, kiểm tra rồi mới chuyển
- **B.** Xóa sạch toàn bộ bộ nhớ Flash trước khi tiến hành nạp
- **C.** Ghi đè trực tiếp lên phân vùng khởi động duy nhất hiện có
- **D.** Nạp phần mềm trực tiếp mà không cần qua khâu kiểm tra mã

> **Đáp án:** **A**  
> **Giải thích:** Kiến trúc A/B Fallback bảo đảm vệ tinh không bao giờ bị 'biến thành cục gạch' (Bricked) khi bản nạp mới gặp sự cố.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 28
**Mã băm an toàn SHA-256 được sử dụng như thế nào trong quy trình nạp bản vá phần mềm cho vệ tinh?**

- **A.** 10 đến 20 byte
- **B.** 64 đến 128 byte
- **C.** 10 đến 20 Megabyte
- **D.** 1 đến 2 Gigabyte

> **Đáp án:** **D**  
> **Giải thích:** Chống lại hiện tượng tệp phần mềm bị méo mó bit do nhiễu sóng hoặc bị can thiệp trái phép trên đường truyền vô tuyến.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 29
**Sổ nhật ký ca trực (Operations Logbook) của trạm mặt đất có giá trị pháp lý và kỹ thuật như thế nào?**

- **A.** Tài liệu lưu trữ vĩnh viễn, ghi nhận mốc thời gian mọi lệnh
- **B.** Hủy bỏ tài liệu vào thùng rác ngay sau khi kết thúc ca trực
- **C.** Chỉ có giá trị như một cuốn sổ tay nháp ghi chép cá nhân
- **D.** Có thể tùy ý sửa đổi nội dung số liệu sau khi hoàn thành

> **Đáp án:** **A**  
> **Giải thích:** Chứng cứ gốc để phục vụ công tác thanh tra, bảo hiểm hàng không vũ trụ và điều tra sự cố kỹ thuật.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 30
**Khi một thông số viễn trắc vượt qua ngưỡng đỏ báo động (Red Limit Anomaly), kíp trực phải thực hiện báo cáo trong thời gian bao lâu?**

- **A.** Báo cáo ngay Chỉ huy và kích hoạt ứng phó trong vài phút
- **B.** Không cần báo cáo vì hệ thống sẽ tự động xử lý mọi sự cố
- **C.** Chờ đến cuối tháng rồi tổng hợp báo cáo một lần duy nhất
- **D.** Ghi nhận lại để đưa vào nội dung cuộc họp giao ban tuần tới

> **Đáp án:** **A**  
> **Giải thích:** Thời gian phản ứng nhanh là yếu tố quyết định để cứu vãn khí tài không gian trước khi sự cố lan rộng.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 31
**Chế độ 'Vận hành cục bộ độc lập' (Autonomous Local Operations) của trạm mặt đất được áp dụng khi nào?**

- **A.** Khi máy in văn phòng của trạm mặt đất bị hết giấy in
- **B.** Khi hệ thống mạng Internet cáp quang hoạt động ổn định
- **C.** Mất Internet với trung tâm: tự thu dữ liệu và phát lệnh cứu
- **D.** Khi thời tiết ngoài trời xuất hiện những cơn mưa rào nhỏ

> **Đáp án:** **C**  
> **Giải thích:** Tính tự chủ của trạm mặt đất bảo đảm không bỏ lỡ các phiên bay qua quan trọng ngay cả khi mạng viễn thông mặt đất gặp sự cố.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 32
**Mã khóa xác thực lệnh (Command Authorization Token / Nonce) gửi kèm mỗi lệnh Uplink có tác dụng gì?**

- **A.** Chống tấn công phát lại và xác thực quyền người gửi
- **B.** Thu nhỏ kích thước số lượng byte của gói tin truyền đi
- **C.** Gia tăng mức điện áp phát xạ của tầng khuếch đại công suất
- **D.** Tăng tính thẩm mỹ hình thức cho cú pháp câu lệnh viễn lệnh

> **Đáp án:** **A**  
> **Giải thích:** Token độc nhất thay đổi theo thời gian bảo vệ vệ tinh khỏi các lệnh bị kẻ xấu thu lại rồi phát đè lên.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 33
**Quy trình giải thể sứ mệnh cuối vòng đời (End-of-Life Decommissioning - EOL) theo tiêu chuẩn quốc tế (IADC) quy định việc gì?**

- **A.** 10 đến 15 năm
- **B.** 3 đến 6 tháng
- **C.** 100 đến 200 năm
- **D.** 1 đến 2 ngày

> **Đáp án:** **C**  
> **Giải thích:** Quy định quốc tế giảm thiểu rác thải không gian bảo vệ an toàn cho các thế hệ vệ tinh tương lai.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 34
**Phương châm huấn luyện kinh điển của ngành hàng không vũ trụ 'Train like you fly, fly like you train' có ý nghĩa gì?**

- **A.** Diễn tập như bay thật để hành động chuẩn xác như phản xạ
- **B.** Tiến hành phóng thử nghiệm trước rồi mới học quy trình vận hành
- **C.** Chỉ tập trung học lý thuyết trong sách vở mà không cần thực hành
- **D.** Chờ đợi khi gặp sự cố thực tế rồi mới nghiên cứu cách giải quyết

> **Đáp án:** **A**  
> **Giải thích:** Kỷ luật diễn tập nghiêm ngặt biến các thao tác phức tạp thành kỹ năng thuần thục của toàn đội ngũ.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 35
**Biến lưu trữ thời gian trả về từ hàm `millis()` trong Arduino bắt buộc phải được khai báo bằng kiểu dữ liệu nào?**

- **A.** `char`
- **B.** `int`
- **C.** `unsigned long`
- **D.** `float`

> **Đáp án:** **C**  
> **Giải thích:** `unsigned long` có thể đếm thời gian lên tới ~4.29 tỷ mili-giây (khoảng 49.7 ngày) trước khi bị tràn số về 0 (Rollover).  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 36
**Khi biến `millis()` bị tràn số sau 49.7 ngày, biểu thức toán học `(currentMillis - previousMillis >= INTERVAL)` có hoạt động đúng hay không?**

- **A.** Sẽ phát sinh lỗi tràn số học làm treo hoàn toàn hệ điều hành
- **B.** Cần phải khởi động lại vi điều khiển để đặt lại bộ đếm về 0
- **C.** Vẫn đúng hoàn toàn nhờ số học modulo của số nguyên không dấu
- **D.** Biểu thức điều kiện sẽ trả về giá trị số âm gây sai logic

> **Đáp án:** **C**  
> **Giải thích:** Phép trừ số nguyên không dấu tự động xử lý tràn số một cách hoàn hảo mà không cần thêm code phụ trợ.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 37
**Đại lượng 'Jitter' trong thời gian chu kỳ vòng lặp phần mềm là gì?**

- **A.** Nhiệt độ đo được trên bề mặt của các bảng mạch điện tử
- **B.** Mức điện áp danh định tức thời của khối pin năng lượng
- **C.** Một loại cảm biến đo dao động cơ học chuyên dụng trong bay
- **D.** Dao động sai lệch thời gian giữa các chu kỳ lặp liên tiếp

> **Đáp án:** **D**  
> **Giải thích:** Cần giảm thiểu Jitter để bảo đảm tính tất định thời gian (Determinism) của hệ thống điều khiển.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 38
**Trong trạng thái `STATE_POWER_SAVE`, tần suất phát Beacon được điều chỉnh như thế nào so với `STATE_NORMAL_OPS`?**

- **A.** Giãn chu kỳ phát thưa hơn giúp giảm 75% tiêu hao năng lượng
- **B.** Tắt hoàn toàn module phát sóng vô tuyến không phát nữa
- **C.** Phát liên tục gói tin viễn trắc với tần suất mỗi giây một lần
- **D.** Giữ nguyên tần suất phát như trong chế độ hoạt động bình thường

> **Đáp án:** **A**  
> **Giải thích:** Giảm tần suất phát sóng bảo toàn dung lượng pin quý giá trong giai đoạn cạn kiệt năng lượng.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 39
**Để dữ liệu viễn trắc không bị mất nếu vệ tinh đột ngột bị mất nguồn, sau mỗi thao tác `file.print()` vào thẻ nhớ SD, hàm nào BẮT BUỘC phải được gọi?**

- **A.** `file.format()`
- **B.** `file.flush`
- **C.** `file.seek(0)`
- **D.** `file.delete()`

> **Đáp án:** **B**  
> **Giải thích:** Nếu không gọi `flush()`, dữ liệu vẫn nằm trong bộ đệm RAM và sẽ bị bốc hơi hoàn toàn nếu hệ thống sập nguồn đột ngột.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 40
**Tần suất ghi nhật ký viễn trắc vào thẻ nhớ SD được lập trình tối ưu là bao lâu một bản ghi?**

- **A.** 10 đến 20 mA
- **B.** 80 đến 120 mA
- **C.** 400 đến 500 mA
- **D.** 1.5 đến 2.0 Ampe

> **Đáp án:** **C**  
> **Giải thích:** Tần suất 1 Hz ghi nhận chi tiết mọi biến động động học của vệ tinh mà không làm đầy thẻ nhớ quá nhanh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 41
**Dung lượng thẻ nhớ MicroSD 8 GB có thể lưu trữ dữ liệu nhật ký CSV của CubeSat ở tần suất 1 Hz (mỗi dòng ~100 byte) trong thời gian bao lâu?**

- **A.** Chỉ được 1 giờ
- **B.** Chỉ được 1 ngày
- **C.** Vô hạn
- **D.** Hơn 2.5 năm liên tục!

> **Đáp án:** **D**  
> **Giải thích:** 8 GB = 8 * 10^9 byte / (100 byte * 86400 giây/ngày) ~ 925 ngày (~2.5 năm), thừa đủ cho toàn bộ vòng đời sứ mệnh CubeSat.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 42
**Nội dung gói tin Beacon bao gồm những thông số cốt lõi nào?**

- **A.** Tên bài hát và giai điệu âm nhạc được cài đặt sẵn trong bộ nhớ
- **B.** Bản vẽ thiết kế kỹ thuật chi tiết của các tấm khung vỏ ngoài
- **C.** Mật khẩu quản trị cấp cao của máy tính điều hành trạm mặt đất
- **D.** Mã vệ tinh, thời gian, áp pin, nhiệt độ, FSM, GPS và mã CRC

> **Đáp án:** **D**  
> **Giải thích:** Beacon là thông điệp cứu sinh mang đầy đủ bức tranh sức khỏe thời gian thực của vệ tinh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 43
**Khi truyền gói Beacon qua LoRa, hàm `lora.sendPacket(buffer, len)` được gọi ở chế độ đồng bộ hay bất đồng bộ?**

- **A.** Gọi truyền dữ liệu và kiểm tra chân bận AUX để phát trọn vẹn
- **B.** Kích hoạt chế độ ngắt hoàn toàn nguồn cấp cho khối vô tuyến
- **C.** Đưa module truyền thông vào chế độ ngủ sâu tiết kiệm điện năng
- **D.** Thực hiện lệnh xóa toàn bộ bộ đệm dữ liệu phát sóng vô tuyến

> **Đáp án:** **A**  
> **Giải thích:** Bảo đảm chuỗi xung vô tuyến bức xạ hoàn tất trước khi chuyển sang các lệnh tiếp theo.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 44
**Khái niệm 'State Transition History' (Lịch sử chuyển trạng thái) lưu lại thông tin gì trong bộ nhớ RAM?**

- **A.** Lịch sử các tệp phim tài liệu đã phát qua sóng vô tuyến
- **B.** Lịch sử mua sắm các thiết bị phần cứng trong dự án CubeSat
- **C.** Số bước chân di chuyển của các thành viên kíp trực điều khiển
- **D.** Mảng tròn lưu 10 lần chuyển FSM gần nhất kèm giờ và lý do

> **Đáp án:** **D**  
> **Giải thích:** Lịch sử chuyển trạng thái là công cụ vô giá giúp kỹ sư chẩn đoán hành vi của vệ tinh trong quỹ đạo.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 45
**Hàm nào trong ESP32 cho phép kiểm tra dung lượng bộ nhớ RAM còn trống theo thời gian thực?**

- **A.** `ESP.getVcc()`
- **B.** `ESP.getTemperature()`
- **C.** `ESP.reset()`
- **D.** `ESP.getFreeHeap()`

> **Đáp án:** **D**  
> **Giải thích:** Theo dõi biến `ESP.getFreeHeap()` trong gói viễn trắc giúp phát hiện sớm hiện tượng rò rỉ bộ nhớ trước khi hệ thống sụp đổ.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 46
**Nếu theo dõi thấy giá trị `ESP.getFreeHeap()` giảm dần đều sau mỗi chu kỳ vòng lặp, kết luận kỹ thuật là gì?**

- **A.** Tốc độ baud truyền thông nối tiếp đang tự động tăng dần lên
- **B.** Phần mềm hệ thống bay đang hoạt động hoàn toàn ổn định và tốt
- **C.** Bộ pin nguồn của vệ tinh đang được nạp điện với hiệu suất cao
- **D.** Phần mềm bị rò rỉ bộ nhớ, cần rà soát lại biến động và String

> **Đáp án:** **D**  
> **Giải thích:** Dấu hiệu cảnh báo trực tiếp của một thảm họa sập phần mềm đang đến gần.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 47
**Khi nhận lệnh `CMD_SET_BEACON_INTERVAL` từ trạm mặt đất, biến thời gian chu kỳ phát Beacon trong chương trình sẽ thay đổi như thế nào?**

- **A.** Tắt toàn bộ hệ thống nguồn cấp điện cho các phân hệ chức năng
- **B.** Không thể thay đổi được giá trị tham số vì đây là hằng số cố định
- **C.** Thực hiện xóa toàn bộ phân vùng dữ liệu lưu trữ trên thẻ nhớ
- **D.** Cập nhật chu kỳ mới vào biến cấu hình và lưu vào bộ nhớ NVS

> **Đáp án:** **D**  
> **Giải thích:** Cấu hình linh hoạt từ xa giúp tối ưu hóa thông lượng dữ liệu theo từng giai đoạn của sứ mệnh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 48
**Tại sao các thông số cấu hình quan trọng (như chu kỳ Beacon, ngưỡng điện áp bảo vệ) cần được lưu vào bộ nhớ NVS (Non-Volatile Storage) của ESP32?**

- **A.** Làm đầy dung lượng bộ nhớ trống để kiểm tra giới hạn lưu trữ
- **B.** Giữ nguyên cấu hình mới nhất khi bị reset do WDT hoặc mất nguồn
- **C.** Làm gia tăng nhiệt độ của chip vi xử lý để sưởi ấm trong tối
- **D.** Tăng tính thẩm mỹ hình thức cho cấu trúc mã nguồn chương trình

> **Đáp án:** **B**  
> **Giải thích:** Bộ nhớ bất biến NVS bảo toàn cấu hình vận hành qua mọi chu kỳ khởi động lại.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 49
**Khi vệ tinh rơi vào trạng thái `STATE_SAFE_MODE`, đèn LED chỉ thị nhịp tim (Heartbeat LED) trên kit PTITCube sẽ nhấp nháy theo mẫu hình nào?**

- **A.** Đèn LED sáng liên tục không bao giờ tắt để phát tín hiệu quang
- **B.** Nháy chậm chu kỳ ngắn báo hiệu chế độ an toàn và tiết kiệm điện
- **C.** Đèn LED tắt hoàn toàn không sáng trong suốt toàn bộ thời gian
- **D.** Đèn LED nhấp nháy liên tục với tần số cao 100 lần trong mỗi giây

> **Đáp án:** **B**  
> **Giải thích:** Mẫu hình nhấp nháy trực quan giúp người quan sát phân biệt ngay lập tức trạng thái của hệ thống.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 50
**Nếu câu lệnh nhận được bị sai mã kiểm tra CRC-16, phản hồi của hàm xử lý lệnh là gì?**

- **A.** Từ chối lệnh, ghi nhật ký lỗi CRC và gửi NACK về trạm
- **B.** Vẫn chấp nhận và tiến hành thực thi câu lệnh đó ngay tức thì
- **C.** Tự động ngắt hoàn toàn nguồn cung cấp điện của toàn bộ vệ tinh
- **D.** Thực hiện chu trình khởi động lại hệ điều hành của máy tính

> **Đáp án:** **A**  
> **Giải thích:** Bảo vệ vệ tinh khỏi các lệnh rác hoặc lệnh bị méo do nhiễu sóng trong quá trình truyền vô tuyến.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 51
**Hàm `checkBatterySafety()` trả về giá trị điện áp pin đo được từ chip MAX17048 thông qua giao thức nào?**

- **A.** Giao tiếp tương tự thông qua các chân chuyển đổi analog của chip
- **B.** Giao tiếp I2C đọc các thanh ghi điện áp và mức pin
- **C.** Giao tiếp nối tiếp đồng bộ tốc độ cao qua chuẩn kết nối SPI
- **D.** Giao tiếp một dây chuẩn công nghiệp sử dụng một đường tín hiệu

> **Đáp án:** **B**  
> **Giải thích:** Đọc trực tiếp dữ liệu số chính xác từ vi mạch đo mức năng lượng pin chuyên dụng.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 52
**Khi pin sụt áp dưới 3.4V, cờ trạng thái khẩn cấp nào được bật lên trong hệ thống?**

- **A.** `FLAG_CRITICAL_LOW_POWER = true`
- **B.** `FLAG_CAMERA_READY`
- **C.** `FLAG_BATTERY_FULL`
- **D.** `FLAG_GPS_FIX`

> **Đáp án:** **A**  
> **Giải thích:** Cờ khẩn cấp kích hoạt hành động chuyển đổi tức thời sang Safe Mode.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 53
**Hàm `readEnvironmentalSensors()` chịu trách nhiệm đọc dữ liệu từ những cảm biến nào?**

- **A.** Cảm biến quét nhận dạng dấu vân tay bảo mật của người sử dụng
- **B.** Khí áp nhiệt độ BMP280, quán tính MPU6500 và định vị L76X GPS
- **C.** Cảm biến quang học đo nồng độ cồn và khí độc hại trong môi trường
- **D.** Cảm biến ion hóa phát hiện khói và nhiệt độ cháy trong buồng kín

> **Đáp án:** **B**  
> **Giải thích:** Tổng hợp đầy đủ thông số môi trường vật lý xung quanh vệ tinh vào một khối dữ liệu chung.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 54
**Để dữ liệu tọa độ GPS luôn được cập nhật mới nhất, luồng ký tự NMEA từ GPS được nạp vào bộ phân tích cú pháp ở tần suất nào?**

- **A.** Liên tục ở mỗi chu kỳ lặp khi UART của GPS có byte mới
- **B.** Chỉ đọc dữ liệu khi có câu lệnh yêu cầu cụ thể từ trạm mặt đất
- **C.** Định kỳ thực hiện tác vụ đọc dữ liệu với tần suất mỗi tuần một lần
- **D.** Chỉ kích hoạt chức năng định vị GPS khi thời tiết ngoài trời nắng

> **Đáp án:** **A**  
> **Giải thích:** Đọc luồng byte liên tục bảo đảm bộ đệm UART của GPS không bị tràn và dữ liệu tọa độ thời gian luôn tươi mới.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 55
**Biến đếm `packetSequenceNumber` trong gói tin Beacon có tác dụng gì đối với trạm mặt đất?**

- **A.** Theo dõi số gói nhận, phát hiện gói mất và đánh giá kênh truyền
- **B.** Không mang lại bất kỳ tác dụng kỹ thuật nào cho quá trình vận hành
- **C.** Gia tăng kích thước dung lượng tệp tin dữ liệu để kiểm tra mạng
- **D.** Đếm số tiền cước dịch vụ viễn thông truyền tải dữ liệu qua trạm

> **Đáp án:** **A**  
> **Giải thích:** Chỉ số thống kê cơ bản nhất để đo lường độ tin cậy của liên kết viễn trắc.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 56
**Khi truyền dữ liệu gói tin qua LoRa, hàm `lora.write(buffer, len)` ghi dữ liệu vào đâu trước khi phát sóng?**

- **A.** Ghi trực tiếp thông tin dữ liệu ra giấy in bằng máy in chuyên dụng
- **B.** Hiển thị trực tiếp toàn bộ chuỗi byte lên màn hình giám sát
- **C.** Ghi vào bộ đệm FIFO của module LoRa qua cổng UART
- **D.** Ghi trực tiếp các gói tin nhị phân vào ổ cứng của máy vi tính

> **Đáp án:** **C**  
> **Giải thích:** Bộ đệm FIFO lưu trữ các byte để mạch phát sóng điều chế và bức xạ ra không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 57
**Sau khi ghi một dòng dữ liệu vào thẻ nhớ SD, hàm `dataFile.println(csvLine)` trả về thông tin gì?**

- **A.** Tên định danh của tệp tin vừa được ghi dữ liệu vào bên trong
- **B.** Màu sắc vỏ bọc bên ngoài của thẻ nhớ lưu trữ dữ liệu chuyên dụng
- **C.** Số ký tự đã ghi thành công vào bộ đệm tệp tin
- **D.** Nhiệt độ hoạt động tức thời của các vi mạch trên bo thẻ nhớ

> **Đáp án:** **C**  
> **Giải thích:** Kiểm tra giá trị trả về giúp xác nhận thao tác ghi dữ liệu không bị thất bại do lỗi phần cứng.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 58
**Nếu phát hiện thẻ nhớ SD bị tháo ra hoặc mất kết nối SPI, hàm xử lý dữ liệu phải làm gì để không làm sập hệ thống?**

- **A.** Kích hoạt dòng điện ngắn mạch làm cháy cầu chì bảo vệ mạch điện
- **B.** Bật cờ lỗi SD, dừng ghi thẻ và chỉ duy trì phát Beacon LoRa
- **C.** Thực hiện thao tác xóa sạch toàn bộ dữ liệu trong bộ nhớ Flash
- **D.** Tự động kích hoạt chu trình khởi động lại hệ thống liên tục lặp

> **Đáp án:** **B**  
> **Giải thích:** Cơ chế chịu lỗi (Fault Tolerance) bảo đảm vệ tinh vẫn tiếp tục thực thi các nhiệm vụ viễn thông ngay cả khi bộ nhớ phụ trợ gặp sự cố.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 59
**Khi một trạng thái mới bắt đầu kích hoạt (State Entry Action), việc thực thi các thao tác khởi tạo 1 lần duy nhất được kiểm soát bằng gì?**

- **A.** Thực hiện ngắt nguồn vi điều khiển để đặt lại toàn bộ thanh ghi
- **B.** Dùng cờ trạng thái để chỉ chạy thiết lập 1 lần khi vào FSM mới
- **C.** Gọi lặp đi lặp lại hàm khởi tạo ở mỗi chu kỳ lặp của vòng lặp
- **D.** Sử dụng hàm tạm dừng chờ đợi với khoảng thời gian dài mười giây

> **Đáp án:** **B**  
> **Giải thích:** Entry Action và Exit Action là hai thành phần kinh điển trong lý thuyết máy trạng thái UML.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 60
**Khi thoát khỏi một trạng thái (State Exit Action), thao tác nào sau đây thường được thực hiện?**

- **A.** Khởi động lại toàn bộ hệ thống máy tính trung tâm của vệ tinh
- **B.** Đóng tệp tin, tắt cảm biến thừa và reset bộ đếm nội bộ
- **C.** Giữ nguyên trạng thái và không giải phóng các tài nguyên đã cấp
- **D.** Xóa sạch toàn bộ dữ liệu cấu hình lưu trong bộ nhớ EEPROM

> **Đáp án:** **B**  
> **Giải thích:** Dọn dẹp tài nguyên (Clean-up) bảo đảm trạng thái tiếp theo nhận được môi trường thực thi sạch sẽ và ổn định.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 61
**Độ dài tối đa của một gói lệnh Telecommand đơn lẻ trong hệ thống là bao nhiêu byte?**

- **A.** 1 đến 2 chu kỳ bay
- **B.** 5 đến 10 chu kỳ bay
- **C.** 5000 đến 6000 chu kỳ bay
- **D.** 50000 đến 60000 chu kỳ bay

> **Đáp án:** **B**  
> **Giải thích:** Gói lệnh ngắn gọn tối ưu hóa khả năng thu nhận thành công trọn vẹn ở tỷ số tín hiệu trên tạp âm thấp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 62
**Lệnh viễn lệnh 'PING' gửi từ trạm mặt đất có tác dụng kỹ thuật gì?**

- **A.** Thay đổi tên định danh của vệ tinh trên mạng vô tuyến
- **B.** Chơi trò chơi bóng bàn mô phỏng giữa trạm và vệ tinh
- **C.** Tắt tạm thời màn hình hiển thị tại trung tâm điều hành
- **D.** Kiểm tra tuyến vô tuyến 2 chiều; vệ tinh phản hồi PONG

> **Đáp án:** **D**  
> **Giải thích:** Lệnh kiểm tra đường truyền kinh điển để đo độ trễ mạng và tỷ lệ sống sót của liên kết vô tuyến.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 63
**Lệnh viễn lệnh 'SET_RTC_TIME' gửi từ trạm mặt đất mang theo tham số gì?**

- **A.** Mã số tài khoản ngân hàng của đơn vị tài trợ tài chính
- **B.** Họ và tên của kỹ sư trưởng ca trực điều khiển trạm đất
- **C.** Bản đồ vị trí các chòm sao quang học trong không gian
- **D.** Thời gian Unix Epoch 32-bit hiệu chỉnh đồng hồ vệ tinh

> **Đáp án:** **D**  
> **Giải thích:** Đồng bộ đồng hồ vệ tinh với giờ nguyên tử quốc tế bảo đảm tính chuẩn xác của các phép đo khoa học.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 64
**Khi vệ tinh thực hiện thành công lệnh 'SET_RTC_TIME', sự kiện này được ghi nhận như thế nào trong tệp nhật ký SD?**

- **A.** Xóa toàn bộ các bản ghi dữ liệu lịch sử đã lưu trước đó
- **B.** Ghi dòng nhật ký: đồng bộ thời gian RTC thành công
- **C.** Khởi động lại toàn bộ phân vùng hệ thống tệp trên thẻ nhớ
- **D.** Không cần ghi nhận sự kiện này vào tệp nhật ký lưu trữ

> **Đáp án:** **B**  
> **Giải thích:** Ghi nhật ký sự kiện hệ thống phục vụ công tác kiểm toán và đối chiếu dữ liệu sau chuyến bay.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 65
**Khái niệm 'Command Buffer Flush' (Làm sạch bộ đệm lệnh) sau khi giải mã xong một lệnh có ý nghĩa gì?**

- **A.** Xóa byte đã xử lý trong đệm và đưa con trỏ về 0
- **B.** Tẩy rửa toàn bộ các bề mặt linh kiện bằng dung môi lỏng
- **C.** Ngắt tạm thời hoạt động của cổng truyền thông nối tiếp
- **D.** Xóa sạch toàn bộ các tệp dữ liệu lưu trong bộ nhớ flash

> **Đáp án:** **A**  
> **Giải thích:** Ngăn ngừa hiện tượng dữ liệu cũ còn sót lại gây hiểu nhầm thành các lệnh kế tiếp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 66
**Nếu một lệnh gửi lên có tham số vượt quá dải an toàn (ví dụ: yêu cầu đặt chu kỳ phát Beacon = 0 mili-giây), hệ thống sẽ xử lý thế nào?**

- **A.** Tự động ngắt toàn bộ nguồn cung cấp điện của hệ thống
- **B.** Chấp nhận và tiến hành thực thi câu lệnh đó ngay lập tức
- **C.** Xóa toàn bộ các tệp mã nguồn chương trình trong bộ nhớ
- **D.** Từ chối lệnh, giữ cấu hình cũ và gửi NACK về trạm đất

> **Đáp án:** **D**  
> **Giải thích:** Kiểm tra tính hợp lệ của tham số (Parameter Validation) là chốt chặn bảo vệ vệ tinh khỏi các thao tác sai lầm của con người.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 67
**Tại sao trong hàm `setup()`, chân cấp nguồn cho module Camera được cấu hình ở mức ngắt (OFF) ngay từ đầu?**

- **A.** Vì cụm module Camera đã bị hư hỏng phần cứng từ trước
- **B.** Giảm dòng khởi động, tiết kiệm pin, chỉ bật khi có lệnh
- **C.** Để tránh hiện tượng chói mắt cho các linh kiện quang học
- **D.** Vì phần mềm bay không ưu tiên sử dụng cảm biến hình ảnh

> **Đáp án:** **B**  
> **Giải thích:** Quản lý nguồn chủ động theo nhu cầu (Power Gating on Demand) là nguyên tắc cốt lõi của thiết kế vệ tinh tiêu thụ điện thấp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 68
**Khi chuyển mạch MUX 74HC4066 để nối cổng UART của OBC sang Camera, chân GPIO điều khiển chân Enable của MUX phải được đặt ở mức nào?**

- **A.** Mức logic HIGH để dẫn thông công tắc bán dẫn trong IC
- **B.** Mức điện áp 0V nối trực tiếp vào điểm tiếp địa của bo
- **C.** Mức điện thế âm so với mass chuẩn của toàn bộ hệ thống
- **D.** Thả nổi hoàn toàn chân tín hiệu không kết nối vào mạch

> **Đáp án:** **A**  
> **Giải thích:** Kích hoạt mức HIGH mở thông kênh truyền dữ liệu nối tiếp tốc độ cao giữa OBC và Camera.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 69
**Sau khi Camera truyền xong dữ liệu ảnh về OBC, quy trình đóng kênh giao tiếp diễn ra như thế nào?**

- **A.** Khởi động lại toàn bộ hệ điều hành của máy tính trung tâm
- **B.** Kéo Enable về LOW để cách ly UART rồi ngắt nguồn Camera
- **C.** Rút dây cáp kết nối vật lý giữa bo máy tính và cảm biến
- **D.** Ngắt toàn bộ nguồn cấp điện cho các phân hệ của vệ tinh

> **Đáp án:** **B**  
> **Giải thích:** Cách ly đường truyền tín hiệu ngăn chặn hiện tượng rò điện qua các chân vi mạch khi linh kiện đã tắt nguồn.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 70
**Hiện tượng 'Dòng điện ký sinh qua chân tín hiệu' (Parasitic Powering through I/O Pins) là gì?**

- **A.** Chip bị ngắt nguồn nhưng điện áp chân IO nuôi qua diode
- **B.** Dòng điện rò rỉ cơ học qua lớp vỏ kim loại của khung máy
- **C.** Dòng điện cảm ứng sinh ra do từ trường biến thiên ngoài
- **D.** Dòng điện sinh học do các vi sinh vật bám trên bề mặt tạo

> **Đáp án:** **A**  
> **Giải thích:** Phải kéo các chân I/O về mức LOW hoặc cách ly bằng MUX khi ngắt nguồn IC để triệt tiêu dòng ký sinh làm hỏng linh kiện.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 71
**Nếu thời gian thực thi của một chu kỳ lặp vượt quá 200 mili-giây, nguyên nhân chủ yếu thường nằm ở thao tác nào?**

- **A.** Do thời gian trễ khi đọc cảm biến môi trường qua bus I2C
- **B.** Ghi khối dữ liệu lớn khi thẻ MicroSD đang bận chu kỳ xóa
- **C.** Do đèn LED chỉ thị nhịp tim nhấp nháy làm tiêu tốn chu kỳ
- **D.** Do các phép tính toán số học cộng trừ thông thường trong mã

> **Đáp án:** **B**  
> **Giải thích:** Bộ điều khiển thẻ SD có độ trễ nội ngẫu nhiên khi quản lý các khối nhớ Flash; cần xử lý bộ nhớ đệm để không chặn luồng chính.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 72
**Hàm `checkFreeMemory()` in ra dung lượng Heap trống qua cổng Serial gỡ lỗi nhằm mục đích gì trong quá trình chạy thử nghiệm?**

- **A.** Kiểm tra tốc độ phản hồi của con trỏ chuột trên giao diện
- **B.** Làm đầy màn hình giám sát để người vận hành tiện theo dõi
- **C.** Đo đạc nhiệt độ không khí bên trong phòng thí nghiệm thực hành
- **D.** Xác nhận dung lượng RAM ổn định không suy giảm sau ngàn vòng

> **Đáp án:** **D**  
> **Giải thích:** Bằng chứng định lượng về độ tin cậy phần mềm trong các bài thử nghiệm chạy bền (Endurance Test).  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 73
**Trong quá trình thử nghiệm chạy bền 48 giờ, nếu hệ thống bị khởi động lại đột ngột 1 lần, quy trình kỹ thuật yêu cầu điều gì?**

- **A.** Đặt lại giờ về 0, phân tích mã lỗi, sửa rồi chạy lại từ đầu
- **B.** Chấp nhận nghiệm thu bàn giao hệ thống phần mềm bay ngay tức thì
- **C.** Tắt máy tính và kết thúc bài thử nghiệm đánh giá độ bền bỉ
- **D.** Bỏ qua sự cố vì tỷ lệ khởi động lại chỉ xuất hiện một lần duy nhất

> **Đáp án:** **A**  
> **Giải thích:** Quy tắc không khoan nhượng (Zero Tolerance) đối với các sự cố không giải thích được trong kỹ thuật không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 74
**Hàm `checkOBCInternalTemperature()` sử dụng cảm biến nhiệt độ nội bộ của ESP32 nhằm cảnh báo rủi ro gì?**

- **A.** Không đem lại bất kỳ ý nghĩa kỹ thuật nào cho quá trình bay
- **B.** Giám sát nhiệt lõi chip, cảnh báo quá nhiệt để bảo vệ silicon
- **C.** Đo nhiệt độ của môi trường không khí bên ngoài không gian mở
- **D.** Cảnh báo cho kíp trực biết thời tiết trên quỹ đạo sắp có mưa

> **Đáp án:** **B**  
> **Giải thích:** Bảo vệ vi xử lý trung tâm khỏi nguy cơ suy thoái và hỏng hóc do quá nhiệt trong môi trường chân không tản nhiệt kém.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 75
**Vi điều khiển ESP32 tích hợp mấy lõi vi xử lý vật lý và tốc độ xung nhịp cực đại là bao nhiêu?**

- **A.** Gồm 4 lõi vi xử lý, tốc độ xung nhịp cực đại đạt mức 1 GHz
- **B.** Gồm 1 lõi đơn duy nhất, tốc độ xung nhịp hoạt động 16 MHz
- **C.** Gồm 8 lõi vi xử lý, tốc độ xung nhịp xử lý lên tới 3 GHz
- **D.** Gồm 2 lõi 32-bit Xtensa LX6, xung nhịp lên tới 240 MHz

> **Đáp án:** **D**  
> **Giải thích:** Cấu trúc dual-core mạnh mẽ cung cấp tài nguyên điện toán dồi dào cho các thuật toán xử lý không gian phức tạp.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 76
**Tác vụ nào sau đây có thể gán mức ưu tiên thấp nhất (Lowest Priority) trong hệ thống?**

- **A.** Tác vụ giám sát an toàn phần cứng và quản lý bộ đếm Watchdog
- **B.** Tác vụ tiếp nhận và giải mã các khung viễn lệnh từ trạm đất
- **C.** Tác vụ ghi khối lớn vào thẻ nhớ và bảo trì bộ nhớ nền
- **D.** Tác vụ quản lý nguồn và phân phối điện năng cho các phân hệ

> **Đáp án:** **C**  
> **Giải thích:** Ghi thẻ nhớ có thể thực hiện lúc CPU rảnh rỗi mà không ảnh hưởng tới an toàn thời gian thực của chuyến bay.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 77
**Hàm `vTaskDelayUntil()` có ưu điểm gì vượt trội so với `vTaskDelay()` trong các tác vụ định kỳ chính xác?**

- **A.** Giữ chu kỳ tần số cố định tuyệt đối không bị trôi thời gian
- **B.** Không đem lại bất kỳ ưu thế kỹ thuật nào so với hàm thông thường
- **C.** Làm gia tăng gấp đôi tốc độ xử lý tính toán của bộ vi điều khiển
- **D.** Tự động ngắt bỏ và xóa tác vụ ra khỏi danh sách của bộ lập lịch

> **Đáp án:** **A**  
> **Giải thích:** `vTaskDelayUntil` là chuẩn mực vàng để lập lịch cho các vòng lặp điều khiển phản hồi PID hoặc lấy mẫu cảm biến chính xác.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 78
**Tại sao trên CubeSat, đường bus I2C (kết nối BMP280, MPU6500, MAX17048) BẮT BUỘC phải được bảo vệ bằng một `xI2CMutex`?**

- **A.** Vì giao thức I2C bắt buộc phải có mật khẩu xác thực người dùng
- **B.** Tránh task ngắt ngang lúc đọc dở cảm biến làm vỡ xung kẹt bus
- **C.** Vì tốc độ truyền thông trên bus I2C hoạt động ở mức quá nhanh
- **D.** Để tiết kiệm số lượng điện trở kéo gắn trên hai đường tín hiệu

> **Đáp án:** **B**  
> **Giải thích:** Bảo vệ bus truyền thông I2C bằng Mutex là bài học xương máu trong lập trình vệ tinh đa nhiệm.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 79
**Đoạn mã mẫu nào sau đây minh chứng cho việc sử dụng Mutex chuẩn xác để bảo vệ bus I2C?**

- **A.** Gọi hàm xóa hoàn toàn đối tượng Mutex ra khỏi bộ nhớ hệ thống
- **B.** Trả chìa khóa trước rồi mới tiến hành đọc dữ liệu từ cảm biến
- **C.** Lấy khóa thành công, thực hiện đọc cảm biến an toàn rồi nhả khóa
- **D.** Gọi hàm đọc cảm biến trực tiếp mà không cần quan tâm tới khóa

> **Đáp án:** **C**  
> **Giải thích:** Quy tắc chuẩn: Lấy chìa khóa (Take) -> Thao tác tài nguyên an toàn -> Trả lại chìa khóa (Give).  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 80
**Hiện tượng 'Nghịch đảo mức ưu tiên' (Priority Inversion) trong hệ điều hành thời gian thực là gì?**

- **A.** Task cao bị chặn bởi task thấp giữ Mutex, bị task trung cướp
- **B.** Giao diện hiển thị bị đảo lộn phương hướng trên màn hình máy tính
- **C.** Tất cả các tác vụ đều bị san bằng mức ưu tiên ngang hàng nhau
- **D.** Tác vụ ưu tiên cao bị biến đổi thành mức ưu tiên thấp vĩnh viễn

> **Đáp án:** **A**  
> **Giải thích:** Sự cố nổi tiếng từng làm tê liệt tàu thăm dò Sao Hỏa Mars Pathfinder năm 1997.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 81
**Để tránh Deadlock khi một tác vụ chờ lấy Mutex mãi mãi, lập trình viên nên sử dụng giá trị Timeout nào trong hàm `xSemaphoreTake()`?**

- **A.** Không sử dụng bất kỳ khoảng thời gian chờ Timeout nào trong hàm
- **B.** Sử dụng hằng số chờ vô hạn định không bao giờ trả về lỗi hệ thống
- **C.** Thiết lập giá trị thời gian chờ đợi bằng đúng số không mili-giây
- **D.** Đặt Timeout hữu hạn; nếu hết giờ không lấy được khóa thì hủy

> **Đáp án:** **D**  
> **Giải thích:** Timeout hữu hạn ngăn chặn việc một tác vụ bị treo vĩnh viễn khi có sự cố nghẽn khóa.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 82
**Hàm `uxTaskGetStackHighWaterMark(TaskHandle_t xTask)` trả về thông số quan trọng nào?**

- **A.** Dung lượng Stack tối thiểu còn lại chưa từng bị sử dụng
- **B.** Mức nước ngập đo được trong khuôn viên của phòng thí nghiệm bay
- **C.** Tốc độ xung nhịp tính toán trung bình của tác vụ đang thực thi
- **D.** Nhiệt độ hoạt động đo được của phân vùng bộ nhớ cấp phát tác vụ

> **Đáp án:** **A**  
> **Giải thích:** High Water Mark càng tiến gần về 0 nghĩa là tác vụ đang mấp mé bờ vực bị tràn Stack; cần cấp thêm dung lượng Stack cho tác vụ đó.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 83
**`TaskCOM_TX` lấy dữ liệu đóng gói từ đâu để phát sóng vô tuyến định kỳ?**

- **A.** Thu thập trực tiếp từ mạng Internet công cộng qua đường truyền
- **B.** Tiếp nhận trực tiếp từ các thao tác gõ phím của người vận hành
- **C.** Tự động sinh ngẫu nhiên các con số để đóng gói vào khung truyền
- **D.** Đọc viễn trắc từ TaskSensors và TaskFSM qua queue có Mutex

> **Đáp án:** **D**  
> **Giải thích:** Phân tách luồng sản sinh dữ liệu và luồng phát sóng bảo đảm phát sóng đều đặn không bị trễ nải.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 84
**Khi `TaskCOM_RX` nhận được một chuỗi byte từ cổng UART LoRa, nó xử lý gói tin qua cơ chế nào?**

- **A.** Tự động phản hồi phát lại toàn bộ chuỗi byte vừa nhận được ngay
- **B.** Thực hiện xóa bỏ toàn bộ chuỗi byte vừa tiếp nhận khỏi bộ nhớ
- **C.** In trực tiếp toàn bộ chuỗi ký tự ra màn hình rồi tắt hệ điều hành
- **D.** Giải mã FSM từng byte; đúng CRC thì tạo sự kiện đẩy vào Queue

> **Đáp án:** **D**  
> **Giải thích:** Đẩy sự kiện vào Queue giúp tác vụ điều hành xử lý logic mà không làm mất các byte tiếp theo đang đến trên cổng UART.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 85
**Nếu `TaskSensors` bị treo cứng trong vòng lặp I2C trong khi `TaskCOM_TX` vẫn đang chạy bình thường, cơ chế Check-in của `TaskWatchdog` sẽ làm gì?**

- **A.** Thiếu cờ TaskSensors, dừng đá WDT khiến chip đếm giờ reset
- **B.** Không thực hiện bất kỳ hành động nào và giữ nguyên hiện trạng
- **C.** Tự động ngắt bỏ và tắt hoàn toàn tác vụ truyền thông vô tuyến
- **D.** Bỏ qua tác vụ cảm biến và chỉ tiếp tục theo dõi các tác vụ khác

> **Đáp án:** **A**  
> **Giải thích:** Watchdog đa tác vụ bảo vệ toàn diện hệ thống, không để tình trạng một phân hệ chết chìm trong khi các phân hệ khác vẫn giả vờ hoạt động.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 86
**Khái niệm 'CPU Core Utilization' (Tỷ lệ chiếm dụng CPU của từng lõi) trên ESP32 được theo dõi bằng cách nào?**

- **A.** Quan sát trực tiếp sự thay đổi màu sắc quang học của vỏ chip
- **B.** Đo thời gian chạy IDLE Task; IDLE càng nhiều thì CPU càng rảnh
- **C.** Đo nhiệt độ phát xạ nhiệt của các khối bán dẫn trên tấm mạch in
- **D.** Đo điện trở nối đất của hệ thống tiếp địa an toàn phòng thí nghiệm

> **Đáp án:** **B**  
> **Giải thích:** Giám sát tỷ lệ rảnh rỗi của Idle Task là phương pháp chuẩn mực đo tải điện toán thời gian thực.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 87
**Tỷ lệ chiếm dụng CPU (CPU Load) an toàn khuyến nghị cho hệ thống bay CubeSat nên nằm trong ngưỡng nào?**

- **A.** 10 đến 20 mW
- **B.** 100 đến 500 mW
- **C.** 5.0 đến 10 Watt
- **D.** 50 đến 100 Watt

> **Đáp án:** **B**  
> **Giải thích:** Dự phòng biên độ điện toán (CPU Margin >= 30%) là tiêu chuẩn thiết kế hệ thống hàng không vũ trụ tin cậy.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 88
**Một chu kỳ quay quỹ đạo hoàn chỉnh của vệ tinh CubeSat ở độ cao 500 km kéo dài khoảng bao lâu?**

- **A.** 0.1 đến 0.5 giây
- **B.** 5 đến 10 giây
- **C.** 1 đến 3 phút
- **D.** 30 đến 60 phút

> **Đáp án:** **B**  
> **Giải thích:** Vệ tinh LEO bay quanh Trái Đất khoảng 15 đến 16 vòng mỗi ngày đêm, trải qua 15-16 lần chu kỳ sáng/tối cực đoan.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 89
**Tình huống diễn tập sự cố 'Pin không sạc được sau khi ra ánh sáng' (Solar Panel Deployment Failure Drill) mô phỏng lỗi gì?**

- **A.** Tấm pin kẹt hoặc đứt dây sạc, dòng sạc vẫn bằng 0 mA ngoài sáng
- **B.** Vệ tinh bị mất hoàn toàn tín hiệu liên lạc và biến mất khỏi quỹ đạo
- **C.** Hệ thống trạm mặt đất bị mất nguồn điện cung cấp từ lưới điện lưới
- **D.** Khối pin năng lượng tự động phát nổ do áp suất bên trong buồng pin

> **Đáp án:** **A**  
> **Giải thích:** Thử thách học viên kiểm chứng khả năng tự động kích hoạt FDIR và chuyển sang Safe Mode khi pin cạn dần.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 90
**Khi vệ tinh nhận lệnh viễn lệnh mô phỏng 'SIMULATE_SENSOR_FAILURE_IMU', hệ thống phần mềm bay sẽ thể hiện hành vi gì?**

- **A.** Ghi lỗi I2C Timeout, cô lập IMU, bật cờ lỗi và dùng cảm biến phụ
- **B.** Phát tín hiệu còi hú báo động âm thanh liên tục về trạm mặt đất
- **C.** Ngắt toàn bộ nguồn cung cấp điện từ khối pin năng lượng của vệ tinh
- **D.** Làm treo cứng toàn bộ hệ điều hành và vi xử lý máy tính trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Kiểm chứng tính linh hoạt và khả năng tự chữa lành của kiến trúc phần mềm bay.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 91
**Phiên mô phỏng bay qua trạm mặt đất (Pass Simulation) được kích hoạt trong bài thực hành như thế nào?**

- **A.** Kích hoạt cửa sổ liên lạc 10 phút, trạm và vệ tinh gửi dồn dập
- **B.** Chờ đợi vệ tinh thật bay qua bầu trời phía trên vị trí đặt trạm thu
- **C.** Bật hệ thống quạt thông gió làm mát cho các thiết bị phòng máy chủ
- **D.** Ngắt kết nối mạng Internet của máy tính điều khiển trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Mô phỏng trọn vẹn áp lực thời gian của một phiên liên lạc thực tế ngoài không gian.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 92
**Trong 10 phút của phiên bay qua mô phỏng, bài tập yêu cầu học viên phải thực hiện thành công chuỗi thao tác nào?**

- **A.** Chỉ ngồi theo dõi các thông số hiển thị tĩnh trên màn hình máy tính
- **B.** Ngắt nguồn cung cấp điện của toàn bộ trang thiết bị tại trạm thu
- **C.** Thu 10 Beacon, Ping/Pong, tải thành công 1 ảnh và đồng bộ giờ
- **D.** Thực hiện định dạng lại toàn bộ hệ thống tệp trên thẻ nhớ lưu trữ

> **Đáp án:** **C**  
> **Giải thích:** Huấn luyện kỹ năng thao tác chuẩn xác, nhanh nhạy và phối hợp nhịp nhàng giữa các vị trí kíp trực.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 93
**Biến `BaseType_t xHigherPriorityTaskWoken` truyền vào các hàm `...FromISR()` có tác dụng gì?**

- **A.** Để tắt toàn bộ hệ thống ngắt của bộ vi điều khiển trung tâm
- **B.** Để đếm tổng số lượng sự kiện ngắt đã phát sinh kể từ khi khởi động
- **C.** Kiểm tra ngắt có đánh thức task ưu tiên cao hơn để đổi ngữ cảnh
- **D.** Để xóa sạch toàn bộ các vùng nhớ đệm tạm thời của hệ điều hành

> **Đáp án:** **C**  
> **Giải thích:** Bảo đảm tác vụ khẩn cấp vừa được đánh thức bởi ngắt sẽ được chạy ngay khi ISR kết thúc.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 94
**Khái niệm 'Digital Twin' (Bản sao số) của CubeSat trong phòng thí nghiệm là gì?**

- **A.** Một mô hình vệ tinh đồ chơi thu nhỏ được chế tạo bằng vật liệu nhựa
- **B.** Một bức ảnh chụp toàn cảnh vệ tinh được lưu trữ trong máy tính
- **C.** Một tác phẩm âm nhạc được sáng tác riêng để ca ngợi sứ mệnh vệ tinh
- **D.** Mô hình toán và phần mềm mô phỏng song song với vệ tinh thật

> **Đáp án:** **D**  
> **Giải thích:** Digital Twin là đỉnh cao của công nghệ mô phỏng không gian hiện đại, giúp thử nghiệm các kịch bản nguy hiểm trước khi gửi lệnh lên khí tài thật.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 95
**Khi học viên muốn thử nghiệm một kịch bản lệnh mới nguy hiểm, quy trình an toàn trên Digital Twin là gì?**

- **A.** Phát lệnh trực tiếp lên vệ tinh thật trên bầu trời ngay lập tức
- **B.** Bỏ qua toàn bộ các khâu thử nghiệm kiểm tra trước khi thực thi lệnh
- **C.** Tắt toàn bộ hệ thống máy tính điều khiển của trung tâm điều hành trạm
- **D.** Thử trên Digital Twin trước; xác nhận an toàn mới nạp lên thật

> **Đáp án:** **D**  
> **Giải thích:** Nguyên tắc 'Thử nghiệm ảo trước - Thực thi thật sau' giảm thiểu tối đa rủi ro mất an toàn sứ mệnh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 96
**Tại sao trên CubeSat, tác vụ khởi tạo bung ăng-ten thường là một tác vụ chạy một lần rồi tự hủy (`One-shot Task`)?**

- **A.** Vì cơ cấu ăng-ten chỉ cần bung một lần duy nhất trong toàn bộ sứ mệnh
- **B.** Vì mã nguồn chương trình của tác vụ bị lỗi cú pháp không chạy tiếp được
- **C.** Bung xong xác nhận đạt thì hủy task để giải phóng RAM Stack
- **D.** Để tiết kiệm năng lượng điện tiêu thụ của bộ nguồn trong suốt quá trình bay

> **Đáp án:** **C**  
> **Giải thích:** Tối ưu hóa tài nguyên RAM bằng cách tiêu hủy các tác vụ không còn mục đích sử dụng.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 97
**Trong bài diễn tập xử lý sự cố kẹt nút phát sóng (Stuck Transmitter Drill), phần mềm bay xử lý như thế nào?**

- **A.** Ngắt toàn bộ hệ thống nguồn cung cấp điện của vệ tinh ngay tức thì
- **B.** Đốt cháy hoàn toàn chấn tử ăng-ten để ngăn phát sóng vô tuyến ngoài
- **C.** Phát quá giờ an toàn, ngắt cưỡng bức module phát để giữ pin
- **D.** Để máy phát sóng hoạt động liên tục mãi mãi không cần can thiệp xử lý

> **Đáp án:** **C**  
> **Giải thích:** Cơ chế bảo vệ chống kẹt phát sóng (Transmitter Timeout Watchdog) bảo đảm tuân thủ luật vô tuyến viễn thông quốc tế.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 98
**Chỉ số đo lường hiệu năng 'Loop Latency' (Độ trễ phản hồi vòng lặp) của tác vụ điều khiển tư thế ảnh hưởng thế nào đến độ ổn định của vệ tinh?**

- **A.** Hỗ trợ làm mát nhanh cho các cụm cảm biến quán tính và từ trường
- **B.** Không đem lại bất kỳ ảnh hưởng nào tới hoạt động ổn định tư thế
- **C.** Trễ lớn làm dập quay lệch pha chuyển động, có thể kích quay nhanh
- **D.** Giúp khối pin nguồn tích lũy điện năng nhanh hơn trong chu kỳ sáng

> **Đáp án:** **C**  
> **Giải thích:** Tính thời gian thực khắt khe là yếu tố sống còn của các hệ thống điều khiển tự động ADCS.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 99
**Cặp hàm nào sau đây thực hiện cơ chế Task Notification như một Semaphore nhị phân siêu nhẹ?**

- **A.** Cặp hàm cấu hình và xuất mức logic pinMode() và digitalWrite()
- **B.** Cặp hàm trễ phần mềm và đo thời gian delay() và millis()
- **C.** Cặp hàm cấp phát và giải phóng bộ nhớ động malloc() và free()
- **D.** Cặp hàm nhận và phát thông báo ulTaskNotifyTake() và xTaskNotifyGive()

> **Đáp án:** **D**  
> **Giải thích:** Cặp hàm kinh điển thay thế Semaphore trong xử lý ngắt phần cứng tốc độ cao.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 100
**Hai hàm `vTaskSuspend(TaskHandle_t xTask)` và `vTaskResume(TaskHandle_t xTask)` được dùng trong tình huống nào?**

- **A.** Gia tăng dung lượng vùng nhớ Stack được cấp phát cho tác vụ đó
- **B.** Tải và nạp tệp mã nguồn chương trình mới vào bộ nhớ của chip xử lý
- **C.** Tạm ngừng cấp CPU cho task khi Power Save, chạy lại khi hồi pin
- **D.** Xóa bỏ hoàn toàn và vĩnh viễn tác vụ ra khỏi bảng quản lý của hệ điều hành

> **Đáp án:** **C**  
> **Giải thích:** Quản lý vòng đời tác vụ linh hoạt theo từng trạng thái hoạt động của vệ tinh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 101
**Hàm `vTaskGetRunTimeStats()` cung cấp thông tin kỹ thuật gì cho kỹ sư phần mềm?**

- **A.** Bảng tính chi phí tiền điện tiêu thụ của các trang thiết bị
- **B.** Độ ẩm tương đối của không khí đo được trong phòng thí nghiệm
- **C.** Vận tốc bay tịnh tiến của vệ tinh trên quỹ đạo quanh Trái Đất
- **D.** Bảng thống kê tỷ lệ phần trăm thời gian chạy CPU của từng task

> **Đáp án:** **D**  
> **Giải thích:** Công cụ phân tích cấu hình thời gian thực (Profiling) giúp xác định chính xác tác vụ nào đang chiếm dụng nhiều CPU nhất.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 102
**Mức cường độ tín hiệu thu được (RSSI) mô phỏng trên Dashboard trạm mặt đất biến thiên tương ứng như thế nào với góc ngẩng?**

- **A.** Yếu ở chân trời, đạt đỉnh ở thiên đỉnh rồi yếu dần về LOS
- **B.** Mạnh nhất ở vị trí sát đường chân trời khi vừa xuất hiện tín hiệu
- **C.** Luôn duy trì cố định ở mức không dBm trong suốt toàn bộ thời gian
- **D.** Không thay đổi bất kể khoảng cách giữa trạm và vệ tinh biến thiên

> **Đáp án:** **A**  
> **Giải thích:** Mô phỏng chính xác sự biến thiên của tổn hao đường truyền không gian FSPL theo khoảng cách thực tế.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 103
**Kỹ thuật Bộ đệm vòng tròn (Ring Buffer / Circular Buffer) áp dụng cho luồng nhận UART LoRa có ưu điểm gì?**

- **A.** 1 đến 2 mét
- **B.** 50 đến 100 mét
- **C.** 1000 đến 2000 mét
- **D.** 10 đến 20 km

> **Đáp án:** **B**  
> **Giải thích:** Bộ đệm vòng tròn là cấu trúc dữ liệu kinh điển trong mọi trình điều khiển giao tiếp nối tiếp hiệu năng cao.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 104
**Hoàn thành toàn bộ nội dung của Lab 7, học viên đã sẵn sàng cho bước phát triển nào tiếp theo?**

- **A.** Kết thúc khóa học và dành toàn bộ thời gian để nghỉ ngơi thư giãn
- **B.** Tự tin bước vào Lab 8 thiết kế, tích hợp và bảo vệ sứ mệnh CubeSat
- **C.** Chuyển hướng học nghề sửa chữa các loại phương tiện xe cơ giới
- **D.** Quay trở lại học lại toàn bộ từ bài mở đầu Lab 0 của chương trình

> **Đáp án:** **B**  
> **Giải thích:** Trang bị đầy đủ bản lĩnh, kiến thức và kỹ năng thực chiến của một kỹ sư công nghệ không gian hiện đại.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 105
**Thời gian trễ an toàn bắt buộc trong trạng thái Boot trước khi kích hoạt bung anten là bao lâu?**

- **A.** Tối thiểu ba mươi phút im lặng tuyệt đối theo quy định an toàn quốc tế
- **B.** Chỉ cần trễ đúng một giây để bộ vi xử lý kịp ổn định xung nhịp thạch anh
- **C.** Trễ năm ngày để vệ tinh hoàn thành việc thích nghi với môi trường chân không
- **D.** Không cần bất kỳ thời gian trễ nào mà kích hoạt bung ngay lập tức

> **Đáp án:** **A**  
> **Giải thích:** Quy chuẩn an toàn của các bệ phóng (như trạm ISS) bắt buộc vệ tinh giữ yên lặng hoàn toàn ít nhất 30 phút sau khi rời ống phóng để không gây nhiễu cho tàu vũ trụ và trạm mẹ.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 106
**Hành động chính của vệ tinh trong trạng thái Triển khai (Deployment Mode) là gì?**

- **A.** Mỗi ngày một lần hoặc khi quỹ đạo bị suy giảm đáng kể
- **B.** Liên tục sau mỗi giây trong chu kỳ thực thi vòng lặp chính
- **C.** Chỉ nạp đúng một lần duy nhất trước khi tên lửa rời bệ phóng
- **D.** Mỗi tháng một lần theo lịch bảo dưỡng định kỳ tại trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Trong Deployment Mode, vi điều khiển cấp nguồn cho các điện trở gia nhiệt để đốt đứt dây cước polymer (Burn-wire release), giải phóng lò xo đẩy các chấn tử anten bung ra.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 107
**Vệ tinh thực hiện các hoạt động nào trong trạng thái Danh định (Nominal Mode)?**

- **A.** Thu thập dữ liệu đo xa sức khỏe định kỳ và ổn định tư thế hướng Trái Đất
- **B.** Kích nổ cơ cấu hỏa thuật để giải phóng các tấm pin mặt trời bung xòe
- **C.** Tự động ngắt hoàn toàn kết nối với tất cả các cảm biến đo đạc môi trường
- **D.** Liên tục khởi động lại bộ vi xử lý trung tâm sau mỗi năm phút hoạt động

> **Đáp án:** **A**  
> **Giải thích:** Nominal Mode là chế độ hoạt động bình thường: vệ tinh chạy thuật toán ổn định tư thế, nạp pin, đọc dữ liệu cảm biến định kỳ và sẵn sàng nhận lệnh điều khiển từ trạm mặt đất.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 108
**Trạng thái Sứ mệnh (Mission / Payload Mode) được kích hoạt khi nào?**

- **A.** Khi pin đủ năng lượng và vệ tinh bay vào vị trí mục tiêu cần chụp ảnh đo đạc
- **B.** Khi phát hiện điện áp pin sụt giảm xuống dưới mức nguy hiểm ba vôn
- **C.** Chỉ kích hoạt trong giai đoạn tên lửa đẩy đang tăng tốc trên bệ phóng
- **D.** Khi vệ tinh bị mất hoàn toàn khả năng thu nhận tín hiệu từ trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Payload Mode chỉ được bật khi trạng thái năng lượng dồi dào và điều kiện quỹ đạo thỏa mãn (đến đúng tọa độ mục tiêu), cấp nguồn cho camera hoạt động và ghi dữ liệu.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 109
**Trong cấu trúc mô phỏng HILS, phần mềm bay thật chạy trên thiết bị nào?**

- **A.** Chạy trực tiếp trên bo mạch phần cứng máy tính nhúng OBC thực tế
- **B.** Chạy mô phỏng trên một cụm máy chủ siêu điện toán đám mây từ xa
- **C.** Chạy trên điện thoại di động thông minh của người vận hành trạm
- **D.** Chạy trên màn hình máy tính bảng của phi hành gia trên trạm ISS

> **Đáp án:** **A**  
> **Giải thích:** HILS (Hardware-in-the-Loop) đưa bo mạch phần cứng OBC thật vào vòng lặp kiểm thử, nạp trực tiếp phần mềm bay (firmware nhúng) để kiểm chứng khả năng phản ứng thời gian thực.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 110
**Vai trò của phần mềm mô phỏng không gian S2E trong hệ thống HILS là gì?**

- **A.** Giả lập động lực học quỹ đạo, mô hình môi trường và phản hồi cảm biến ảo
- **B.** Thay thế toàn bộ các tấm pin mặt trời thật bằng các bóng đèn sợi đốt
- **C.** Ghi âm lại toàn bộ các cuộc đàm thoại của kỹ sư trong phòng thí nghiệm
- **D.** Tự động gửi thông báo kết quả kiểm tra lên các trang mạng xã hội

> **Đáp án:** **A**  
> **Giải thích:** S2E tính toán quỹ đạo, vị trí Mặt Trời, từ trường Trái Đất và mô phỏng phản ứng của cảm biến/cơ cấu chấp hành để cung cấp tín hiệu đầu vào cho bo mạch OBC thật.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 111
**Giao diện phần mềm trạm mặt đất WINGS kết nối với hệ thống HILS nhằm mục đích gì?**

- **A.** Cho phép kíp điều hành gửi lệnh vi mô và giám sát luồng đo xa telemetry
- **B.** Điều chỉnh điện áp nguồn điện lưới hai trăm hai mươi vôn cấp cho tòa nhà
- **C.** Tự động thiết kế bản vẽ cơ khí ba chiều của vỏ vệ tinh trên máy vi tính
- **D.** Đo đạc nồng độ khí thải carbon sinh ra trong quá trình hàn linh kiện bo mạch

> **Đáp án:** **A**  
> **Giải thích:** WINGS cung cấp bảng điều khiển trực quan giúp kíp vận hành gửi lệnh viễn chỉ huy (Telecommand) và hiển thị dữ liệu đo xa (Telemetry) thời gian thực từ phần cứng HILS.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 112
**Mục đích lớn nhất của việc thử nghiệm HILS kịch bản nhiệm vụ trước khi phóng là gì?**

- **A.** Phát hiện sớm các lỗi xung đột phần mềm và huấn luyện kíp trực vận hành trạm
- **B.** Đo đạc độ biến dạng vật lý của khung nhôm khi chịu tải nhiệt trong buồng kín
- **C.** Làm giảm trọng lượng của khối pin dự trữ trên vệ tinh xuống mức tối thiểu
- **D.** Kiểm tra độ bám dính của lớp keo dán pin mặt trời trên bề mặt kim loại

> **Đáp án:** **A**  
> **Giải thích:** Diễn tập HILS kịch bản bay giúp phát hiện các lỗi logic nghẽn trạng thái FSM, kiểm chứng kịch bản cứu hộ khẩn cấp và rèn luyện kỹ năng xử lý tình huống cho kíp vận hành trạm.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 113
**Giai đoạn LEOP (Launch and Early Orbit Phase) là khoảng thời gian diễn ra khi nào?**

- **A.** Từ 1 đến 2 tháng sau khi phóng
- **B.** Từ 6 đến 12 tháng sau khi phóng
- **C.** Từ 2 đến 3 năm sau khi phóng
- **D.** Từ 10 đến 20 năm sau khi phóng

> **Đáp án:** **A**  
> **Giải thích:** LEOP là giai đoạn quan trọng và nhiều rủi ro nhất: bắt đầu từ khi CubeSat tách khỏi ống phóng POD, thực hiện ổn định góc quay, bung anten và thiết lập liên lạc đầu tiên.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 114
**Kịch bản ứng phó sự cố (Contingency Operation) được kích hoạt trong tình huống nào?**

- **A.** Khi vệ tinh mất liên lạc kéo dài hoặc không phản hồi các lệnh điều khiển
- **B.** Khi trạm mặt đất nhận được dữ liệu ảnh chụp chất lượng cao vượt mong đợi
- **C.** Khi toàn bộ pin mặt trời được nạp đầy năng lượng điện trong pha ánh sáng
- **D.** Khi vệ tinh bay qua đường xích đạo vào đúng mười hai giờ trưa hàng ngày

> **Đáp án:** **A**  
> **Giải thích:** Contingency Operations là quy trình xử lý khẩn cấp định sẵn: chuyển sang máy phát beacon Morse, bật mạch reset chu kỳ cứng hoặc quét các dải tần dự phòng để tìm kiếm vệ tinh.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

### Câu 115
**Giai đoạn kết thúc sứ mệnh (Decommissioning) trong kịch bản vận hành thực hiện thao tác nào?**

- **A.** Xả kiệt pin, ngắt vĩnh viễn máy phát vô tuyến và chuẩn bị cho việc suy giảm quỹ đạo
- **B.** Kích nổ vệ tinh thành nhiều mảnh nhỏ để quan sát hiện tượng chớp sáng trên trời
- **C.** Tăng công suất phát vô tuyến lên mức tối đa để phát sóng liên tục trong không gian
- **D.** Chuyển giao quyền điều khiển vệ tinh cho các trạm quan sát nghiệp dư tự do sử dụng

> **Đáp án:** **A**  
> **Giải thích:** Quy trình Decommissioning thực hiện vô hiệu hóa (Passivation): xả cạn năng lượng pin, tắt vĩnh viễn bộ phát RF để nhường tần số cho các vệ tinh khác và để CubeSat tự rơi rực rỡ trong khí quyển.  
> **Mục tiêu củng cố:** Hiểu rõ 5 thách thức tích hợp: xung đột bus, nhiễu EMI, sụt áp Brownout, bẫy nhiệt và deadlock  

---

## 📖 Doc 7.2: Kiến Trúc Phân Lớp Phần Mềm Bay & Máy Trạng Thái Hữu Hạn Sứ Mệnh (FSM) (31 câu)

### Câu 116
**Khái niệm 'Máy trạng thái hữu hạn' (Finite State Machine - FSM) trong phần mềm vệ tinh là gì?**

- **A.** Cơ cấu cơ học đóng ngắt chu trình vận hành vệ tinh
- **B.** Hệ thống in mốc thời gian thực thi của tác vụ bay
- **C.** Bộ đếm thời gian trôi của các sự kiện trên quỹ đạo
- **D.** Mô hình chuyển trạng thái dựa trên sự kiện kích hoạt

> **Đáp án:** **D**  
> **Giải thích:** FSM là kiến trúc kinh điển của mọi hệ thống hàng không vũ trụ, bảo đảm vệ tinh luôn ở một trạng thái được kiểm soát tuyệt đối.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 117
**Tại sao trong trạng thái STATE_BOOT, bộ đếm thời gian 30 phút im lặng (30-Minute Radio Silence) là bắt buộc?**

- **A.** Chờ khối pin Li-Po nạp đủ 100% dung lượng danh định
- **B.** Đợi phi hành gia mặt đất hoàn tất thiết lập trạm thu
- **C.** Trôi ra cự ly an toàn trước khi bung anten phát sóng
- **D.** Làm mát các khối vi mạch số và cảm biến sau phóng

> **Đáp án:** **C**  
> **Giải thích:** Quy định nghiêm ngặt của các cơ quan quản lý phóng quốc tế để ngăn ngừa va chạm cơ học và can nhiễu sóng với tên lửa đẩy.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 118
**Sau khi hoàn tất 30 phút im lặng trong STATE_BOOT, hành động tiếp theo của vệ tinh là gì?**

- **A.** Bung ăng-ten và chuyển sang ổn định tư thế
- **B.** Tự động tắt hoàn toàn nguồn điện của vệ tinh
- **C.** Kích hoạt cụm máy ảnh quang học chụp tức thì
- **D.** Xóa sạch toàn bộ dữ liệu trong bộ nhớ flash

> **Đáp án:** **A**  
> **Giải thích:** Bung ăng-ten là điều kiện tiên quyết để chuẩn bị thiết lập liên kết vô tuyến với trạm mặt đất.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 119
**Trạng thái 'STATE_DETUMBLE' (Ổn định tư thế giảm quay) có mục tiêu cốt lõi gì?**

- **A.** Giảm vận tốc góc hỗn loạn xuống ngưỡng an toàn
- **B.** Phát gói tin viễn thông thoại về trạm mặt đất
- **C.** Đo nhiệt độ hồng ngoại của bề mặt Trái Đất
- **D.** Tăng tốc độ quay của vệ tinh quanh trục chính

> **Đáp án:** **A**  
> **Giải thích:** Vệ tinh mới phóng thường bị xoay tròn mất kiểm soát; Detumble đưa vệ tinh về trạng thái ổn định trước khi thực hiện các nhiệm vụ khoa học.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 120
**Thuật toán điều khiển dập tắt vận tốc góc kinh điển nhất dùng cho CubeSat trong trạng thái Detumble là thuật toán nào?**

- **A.** Thuật toán B-dot
- **B.** Thuật toán mã hóa RSA
- **C.** Thuật toán sắp xếp nhanh
- **D.** Thuật toán tìm đường Dijkstra

> **Đáp án:** **A**  
> **Giải thích:** B-dot algorithm là thuật toán dập quay từ tính kinh điển, đơn giản, mạnh mẽ và không phụ thuộc vào cảm biến góc phức tạp.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 121
**Khi vận tốc góc xoay của vệ tinh đã giảm xuống dưới ngưỡng an toàn (ví dụ: < 5 deg/s), FSM sẽ chuyển sang trạng thái nào?**

- **A.** STATE_NORMAL_OPS
- **B.** STATE_SAFE_MODE
- **C.** Tắt toàn bộ hệ thống
- **D.** STATE_BOOT

> **Đáp án:** **A**  
> **Giải thích:** STATE_NORMAL_OPS là trạng thái làm việc tiêu chuẩn hàng ngày của vệ tinh trong phần lớn vòng đời sứ mệnh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 122
**Khái niệm 'Hysteresis' (Vùng trễ ngưỡng) trong chuyển đổi trạng thái FSM có ý nghĩa gì?**

- **A.** Dùng 2 ngưỡng kích hoạt tránh dao động trạng thái
- **B.** Tăng cường dòng điện sưởi ấm cho khối pin nguồn
- **C.** Xóa sạch toàn bộ dữ liệu tạm thời trong bộ nhớ cache
- **D.** Làm sai lệch giá trị đo đạc của các cụm cảm biến

> **Đáp án:** **A**  
> **Giải thích:** Vùng trễ ổn định hóa logic điều khiển trạng thái trong môi trường tín hiệu thực tế có tạp âm.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 123
**Trong thiết kế phần mềm bay, 'FDIR' là viết tắt của cụm từ chuyên môn nào?**

- **A.** Fault Detection, Isolation, and Recovery
- **B.** Flight Data Internet Relay
- **C.** Fast Direct Instruction Register
- **D.** File Directory Information Record

> **Đáp án:** **A**  
> **Giải thích:** FDIR là cơ chế cốt lõi bảo đảm tính tự chủ và khả năng sống sót của vệ tinh không gian trước các hư hỏng phần cứng và phần mềm.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 124
**Khái niệm 'Fault Detection' (Phát hiện sự cố) trong FDIR thực hiện nhiệm vụ gì?**

- **A.** Chờ người điều hành trạm mặt đất gọi điện can thiệp
- **B.** Giám sát thông số và đối chiếu ngưỡng an toàn
- **C.** Tự động ngắt nguồn toàn bộ hệ thống ngay lập tức
- **D.** Tính toán khoảng cách vật lý từ vệ tinh tới Mặt Trăng

> **Đáp án:** **B**  
> **Giải thích:** Phát hiện sớm các dấu hiệu suy giảm trước khi chuyển thành sự cố thảm khốc.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 125
**Khái niệm 'Fault Isolation' (Cô lập sự cố) trong FDIR thực hiện hành động gì?**

- **A.** Xóa toàn bộ nhật ký lỗi lưu trong bộ nhớ hệ thống
- **B.** Kích hoạt thêm các thiết bị phụ trợ đã bị hư hỏng
- **C.** Khởi động lại toàn bộ hệ thống máy tính của vệ tinh
- **D.** Ngắt nguồn phân hệ lỗi ngăn ngừa sự cố lan truyền

> **Đáp án:** **D**  
> **Giải thích:** Cách ly khu vực hư hỏng giữ cho phần còn lại của vệ tinh tiếp tục hoạt động an toàn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 126
**Khái niệm 'Fault Recovery' (Phục hồi sự cố) trong FDIR thực hiện chuỗi hành động nào?**

- **A.** Phát tín hiệu còi báo động khẩn cấp về mặt đất
- **B.** Tháo bỏ linh kiện phần cứng ra khỏi kết cấu bay
- **C.** Giữ nguyên trạng thái chờ hệ thống tự phục hồi
- **D.** Thực hiện chuỗi hành động đưa phân hệ về bình thường

> **Đáp án:** **D**  
> **Giải thích:** Quy trình phục hồi bậc thang (Escalating Recovery) tăng dần mức độ can thiệp để cứu vãn hệ thống.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 127
**Khi một cảm biến I2C (như BMP280) bị treo cứng làm đường bus I2C bị kẹt, FDIR phần mềm cần xử lý như thế nào?**

- **A.** Phát chuỗi xung phục hồi I2C hoặc ngắt nguồn reset
- **B.** Xóa sạch toàn bộ dữ liệu lưu trong bộ nhớ flash
- **C.** Bỏ qua lỗi và tiếp tục chờ đợi gói tin tiếp theo
- **D.** Ngắt toàn bộ nguồn điện của vệ tinh vĩnh viễn luôn

> **Đáp án:** **A**  
> **Giải thích:** Kỹ thuật Bus Clear và Power Cycling là biện pháp tiêu chuẩn khôi phục các cảm biến số bị treo do bức xạ vũ trụ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 128
**Biến đếm 'Reboot Counter' lưu trong bộ nhớ không mất dữ liệu (RTC Backup RAM hoặc EEPROM) giúp ích gì cho FDIR?**

- **A.** 100 đến 200 mA
- **B.** 20 đến 35 mA
- **C.** 1.0 đến 2.0 Ampe
- **D.** 5.0 đến 10 Ampe

> **Đáp án:** **A**  
> **Giải thích:** Nhận diện vòng lặp khởi động bất thường (Crash Loop Detection) là tính năng an toàn sống còn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 129
**Nếu xác nhận trạm mặt đất hoạt động tốt nhưng vệ tinh vẫn im lặng sau 2 phiên bay qua liên tiếp, kíp trực nên triển khai kịch bản khẩn cấp nào?**

- **A.** Phát lệnh cứu hộ mù lặp lại yêu cầu reset hoặc mở phát
- **B.** Gọi điện thoại báo cáo khẩn cấp cho cơ quan chức năng
- **C.** Bỏ cuộc và dừng toàn bộ các hoạt động theo dõi sứ mệnh
- **D.** Chuẩn bị kế hoạch phóng một vệ tinh mới thay thế ngay

> **Đáp án:** **A**  
> **Giải thích:** Nỗ lực cứu hộ bằng lệnh mù phát công suất cao đã cứu sống nhiều sứ mệnh khi máy thu vệ tinh vẫn sống.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 130
**Để cấu trúc hóa logic chuyển đổi trạng thái FSM trong C++, cấu trúc điều khiển nào sau đây được sử dụng trực quan và chuẩn mực nhất?**

- **A.** Sử dụng một hàm đệ quy vô hạn không có điểm dừng cơ sở
- **B.** Dùng hàng trăm câu lệnh nhảy vô điều kiện trong toàn bộ mã
- **C.** Không cần sử dụng bất kỳ câu lệnh điều khiển luồng nào cả
- **D.** Cấu trúc lệnh rẽ nhánh switch theo từng mã trạng thái FSM

> **Đáp án:** **D**  
> **Giải thích:** Khối lệnh `switch - case` phân định rõ ràng các khối xử lý trạng thái độc lập, dễ đọc, dễ mở rộng và tối ưu hóa biên dịch.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 131
**Khi vệ tinh đang ở trạng thái `STATE_NORMAL_OPS`, nếu đọc được giá trị điện áp pin `vbat < 3.55V` liên tục trong 3 lần đọc, FSM sẽ thực hiện hành động gì?**

- **A.** Tiếp tục thực thi tác vụ chụp ảnh bằng máy ảnh quang học
- **B.** Tự động ngắt hoàn toàn nguồn điện của vệ tinh vĩnh viễn
- **C.** Xóa toàn bộ các tệp mã nguồn chương trình trong bộ nhớ flash
- **D.** Ghi log pin yếu, phát cảnh báo LoRa và chuyển sang Power Save

> **Đáp án:** **D**  
> **Giải thích:** Chuyển trạng thái chủ động bảo vệ nguồn trước khi pin sụt áp sâu dẫn đến sập nguồn đột ngột.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 132
**Tại sao cần kiểm tra điều kiện điện áp thấp 'liên tục trong 3 lần đọc' (Debounce / Persistence Check) trước khi chuyển sang Power Save?**

- **A.** Để tiết kiệm dung lượng bộ nhớ RAM trong suốt quá trình chạy
- **B.** Vì nhà sản xuất cell pin bắt buộc phải tuân theo quy trình đó
- **C.** Tránh đổi trạng thái do xung sụt áp tức thời khi bật tải
- **D.** Để kéo dài thời gian thực thi của mã nguồn chương trình bay

> **Đáp án:** **C**  
> **Giải thích:** Bộ lọc xác nhận lỗi (Fault Persistence Filter) loại bỏ các báo động giả trong môi trường điện tử công suất.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 133
**Khi vệ tinh nhận được gói tin Telecommand hợp lệ có mã lệnh `CMD_TAKE_PHOTO` từ trạm mặt đất, FSM sẽ làm gì?**

- **A.** Kiểm tra pin, gửi phản hồi ACK và chuyển sang Payload Exec
- **B.** Ngắt toàn bộ hệ thống nguồn cung cấp điện của vệ tinh ngay
- **C.** Bỏ qua câu lệnh nhận được và không thực hiện bất kỳ thao tác nào
- **D.** Khởi động lại toàn bộ hệ điều hành của máy tính trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Xác thực điều kiện năng lượng trước khi chấp nhận chuyển sang trạng thái tải trọng nặng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 134
**Trong trạng thái `STATE_PAYLOAD_EXEC`, nếu quá trình chụp ảnh và lưu trữ hoàn tất thành công, FSM sẽ tự động chuyển về trạng thái nào?**

- **A.** Chuyển về `STATE_BOOT`
- **B.** Chuyển về `STATE_SAFE_MODE`
- **C.** Treo máy
- **D.** Tự động chuyển về `STATE_NORMAL_OPS`

> **Đáp án:** **D**  
> **Giải thích:** Tải trọng sau khi hoàn thành nhiệm vụ sẽ tự động nhả quyền kiểm soát để vệ tinh quay lại chu kỳ quỹ đạo bình thường.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 135
**Nếu trong lúc thực thi tải trọng Camera, module Camera bị treo không phản hồi sau thời gian Timeout đặt trước (ví dụ: 5 giây), FSM phải xử lý thế nào?**

- **A.** Làm cháy vi mạch xử lý điều khiển của máy tính trung tâm
- **B.** Đứng yên chờ đợi vô hạn định cho tới khi có phản hồi mới
- **C.** Tắt hoàn toàn đường cấp nguồn của bộ pin tích lũy năng lượng
- **D.** Ghi log lỗi, ngắt nguồn Camera, gửi NACK và về Normal Ops

> **Đáp án:** **D**  
> **Giải thích:** Cơ chế Timeout loại trừ nguy cơ cả hệ thống bị treo đơ vĩnh viễn vì một tải trọng bị lỗi.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 136
**Kỹ thuật lập trình máy trạng thái sử dụng con trỏ hàm (Function Pointers State Machine) có ưu điểm gì so với cấu trúc `switch-case`?**

- **A.** Làm cho tốc độ thực thi mã nguồn của vi điều khiển chạy chậm hơn
- **B.** Chuyển trạng thái bằng gán địa chỉ hàm, module hóa cao
- **C.** Không đem lại bất kỳ ưu điểm kỹ thuật nào so với câu lệnh rẽ nhánh
- **D.** Chỉ có thể áp dụng được trên các dòng máy tính lớn có cấu hình cao

> **Đáp án:** **B**  
> **Giải thích:** Mô hình bảng con trỏ hàm (State Table) là kiến trúc phần mềm nâng cao phổ biến trong các hệ thống điều khiển hàng không vũ trụ hiện đại.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 137
**Hàm `saveFlightStateToNVS(SystemState state)` được gọi sau mỗi lần chuyển trạng thái FSM nhằm mục đích gì?**

- **A.** Lưu FSM vào NVS giúp khôi phục ngữ cảnh khi bị reset đột ngột
- **B.** Thay đổi tên định danh phát sóng vô tuyến của vệ tinh định kỳ
- **C.** Kích hoạt chu trình nạp năng lượng tức thời cho khối pin nguồn
- **D.** Xóa toàn bộ các tệp dữ liệu nhật ký đang lưu trữ trên thẻ nhớ

> **Đáp án:** **A**  
> **Giải thích:** Lưu trạng thái vào NVS bảo đảm tính liên tục của sứ mệnh sau các sự cố reset phần cứng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 138
**Khi truyền dữ liệu gói tin từ `TaskCOM_RX` sang `TaskMissionFSM`, cơ chế nào sau đây là chuẩn mực và an toàn nhất?**

- **A.** Ghi dữ liệu tạm vào thẻ nhớ rồi đọc lại ở tác vụ tiếp nhận
- **B.** In chuỗi ký tự ra cổng nối tiếp để tác vụ kia quét lại sau
- **C.** Gửi con trỏ hoặc bản sao gói tin vào hàng đợi xQueueSend
- **D.** Sử dụng một biến toàn cục trần không có bất kỳ cơ chế khóa nào

> **Đáp án:** **C**  
> **Giải thích:** Hàng đợi Queue bảo đảm tính toàn vẹn dữ liệu, tác vụ nhận sẽ tự động thức dậy ngay khi có gói tin mới vào hàng đợi.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 139
**Khi điện áp pin mô phỏng tụt xuống mức nguy kịch (< 3.3V), `TaskMissionFSM` sẽ gửi thông báo nào tới tất cả các tác vụ?**

- **A.** Phát thông báo yêu cầu tăng tối đa xung nhịp xử lý của bộ vi điều khiển
- **B.** Không phát ra bất kỳ thông báo nào và để các tác vụ tự vận hành độc lập
- **C.** Phát sự kiện khẩn qua Event Group đình chỉ tác vụ phụ và ngủ sâu
- **D.** Yêu cầu module phát sóng vô tuyến phát tín hiệu với công suất tối đa

> **Đáp án:** **C**  
> **Giải thích:** Đồng bộ hóa toàn hệ thống phản ứng nhanh trước thảm họa cạn kiệt năng lượng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 140
**Trong tình huống vệ tinh bị xoay tròn mất kiểm soát mô phỏng (Simulated High Tumbling Rate), FSM sẽ phản ứng ra sao?**

- **A.** Phát nhạc hiệu cảnh báo khẩn cấp qua hệ thống phát thanh vô tuyến
- **B.** Tự động ngắt hoàn toàn nguồn cung cấp điện từ khối pin năng lượng
- **C.** Tiếp tục thực thi tác vụ chụp ảnh bề mặt bằng máy ảnh quang học
- **D.** IMU báo góc quay vượt ngưỡng, FSM chuyển về Detumble dập quay

> **Đáp án:** **D**  
> **Giải thích:** Khả năng thích ứng tự động (Adaptive Mission Control) trước các biến cố động lực học không gian.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 141
**Nhiệm vụ trọng tâm của trạng thái Khởi động (Boot Mode) trong phần mềm bay FSM là gì?**

- **A.** Từ vài trăm mét đến một kilômét
- **B.** Chính xác đến từng milimét tuyệt đối
- **C.** Lệch từ năm mươi đến một trăm kilômét
- **D.** Sai số tích lũy lên tới hàng ngàn kilômét

> **Đáp án:** **A**  
> **Giải thích:** Khi cấp nguồn, Boot Mode chạy quy trình POST (Power-On Self-Test), kiểm tra RAM/Flash, xác thực cảm biến và nạp cấu hình an toàn trước khi chuyển sang trạng thái tiếp theo.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 142
**Đặc điểm vận hành cốt lõi của chế độ Sinh tồn (Safe Mode) trong FSM là gì?**

- **A.** Tắt toàn bộ tải không thiết yếu và duy trì phát beacon chẩn đoán lỗi định kỳ
- **B.** Bật tối đa công suất camera tải trọng để chụp lại toàn cảnh sự cố hư hỏng
- **C.** Xóa sạch toàn bộ hệ điều hành nhúng để giải phóng dung lượng bộ nhớ Flash
- **D.** Khóa chặt các bánh đà phản lực để vệ tinh quay đảo tự do trong không gian

> **Đáp án:** **A**  
> **Giải thích:** Safe Mode ngắt nguồn các tải tiêu thụ cao (camera, payload, GPS), chỉ duy trì máy thu lệnh và phát beacon chu kỳ ngắn để bảo toàn năng lượng pin trong khi chờ mặt đất cứu hộ.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 143
**Điều kiện chuyển trạng thái khẩn cấp sang Safe Mode là gì?**

- **A.** Điện áp pin sụt dưới ngưỡng an toàn hoặc nhiệt độ bo mạch vượt giới hạn cho phép
- **B.** Vệ tinh bay qua vùng bầu trời có nhiều mây trắng che phủ bề mặt đại dương
- **C.** Trạm mặt đất gửi lời chúc mừng kỷ niệm ngày thành lập trường đại học
- **D.** Bộ nhớ thẻ MicroSD còn trống hơn chín mươi phần trăm dung lượng lưu trữ

> **Đáp án:** **A**  
> **Giải thích:** FSM tự động chuyển sang Safe Mode khi phát hiện các sự cố sống còn: điện áp pin < 3.6V, nhiệt độ pin quá cao/thấp hoặc mất tín hiệu nhịp tim từ các phân hệ quan trọng.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 144
**Điều kiện để FSM tự động thoát khỏi Safe Mode trở về trạng thái Danh định là gì?**

- **A.** Pin được sạc hồi phục trên tám mươi phần trăm dung lượng và nhận lệnh giải phóng
- **B.** Vệ tinh bay hoàn thành thêm đúng một trăm vòng quanh quỹ đạo Trái Đất
- **C.** Nhiệt độ ngoài vỏ nhôm hạ xuống dưới mức âm năm mươi độ C liên tục
- **D.** Tất cả các tệp tin trong thư mục nhật ký đều được tự động xóa sạch hoàn toàn

> **Đáp án:** **A**  
> **Giải thích:** Để tránh hiện tượng dao động lặp (hysteresis), vệ tinh chỉ rời Safe Mode khi pin đã nạp đầy trở lại (>80%) và có sự xác nhận qua lệnh điều khiển từ trạm mặt đất.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 145
**Ưu điểm của mô hình máy trạng thái phân tầng (Hierarchical State Machine) là gì?**

- **A.** Cho phép quản lý các trạng thái phụ độc lập mà không làm phức tạp trạng thái chính
- **B.** Tăng gấp đôi tốc độ xử lý tính toán dấu phẩy động của bộ vi xử lý trên bo
- **C.** Loại bỏ hoàn toàn sự cần thiết của việc sử dụng các cấu trúc điều kiện if else
- **D.** Tự động biên dịch mã nguồn C++ sang mã máy mà không cần trình biên dịch chéo

> **Đáp án:** **A**  
> **Giải thích:** Mô hình phân tầng cho phép phân hệ COM hay Payload có các máy trạng thái con (sub-states) độc lập, trong khi máy trạng thái cấp cao vẫn quản lý chế độ sinh tồn toàn cục của vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

### Câu 146
**Kỹ thuật phòng vệ chống kẹt trạng thái FSM (State Stuck Defense) yêu cầu điều gì?**

- **A.** Cài đặt bộ đếm thời gian tối đa cho mỗi trạng thái và tự động thoái lui nếu hết giờ
- **B.** Luôn giữ vệ tinh ở một trạng thái duy nhất cố định trong suốt toàn bộ vòng đời bay
- **C.** Tắt toàn bộ các ngắt phần cứng của vi điều khiển khi bắt đầu vào trạng thái mới
- **D.** Yêu cầu trạm mặt đất gửi mã xác thực liên tục mỗi mười mili-giây để duy trì

> **Đáp án:** **A**  
> **Giải thích:** Mỗi trạng thái tạm thời (như Deploying, Payload Exe) phải có bộ đếm thời gian Timeout; nếu hết thời gian mà chưa hoàn thành, FSM sẽ tự động cưỡng chế chuyển về trạng thái an toàn.  
> **Mục tiêu củng cố:** Nắm vững kiến trúc phần mềm bay FSW, các chế độ trạng thái sứ mệnh và cơ chế tự phục hồi FDIR  

---

## 💻 Thực hành: Phần Mềm Bay Tích Hợp Vòng Lặp Tuần Tự Non-blocking (Lab7-01) (23 câu)

### Câu 147
**Trong trạng thái STATE_PAYLOAD_EXEC, chuỗi thao tác nào được thực hiện tuần tự?**

- **A.** Định dạng thẻ nhớ và khởi động lại vi điều khiển
- **B.** Bật đèn sưởi ấm cho buồng máy tính trung tâm OBC
- **C.** Bật Camera, chụp ảnh JPEG, lưu SD và báo cáo OBC
- **D.** Phát tín hiệu âm thanh cảnh báo về trạm mặt đất

> **Đáp án:** **C**  
> **Giải thích:** Chuỗi vận hành tải trọng khép kín bảo đảm an toàn điện và tối ưu thời gian chiếm dụng tài nguyên.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 148
**Trong kiến trúc lập trình tuần tự (Sequential Super-Loop) cho vệ tinh CubeSat, hàm `setup()` thực hiện nhiệm vụ gì?**

- **A.** Khởi tạo phần cứng, kiểm tra sẵn sàng và đặt FSM ban đầu
- **B.** Chạy lặp đi lặp lại vô tận trong suốt vòng đời hoạt động
- **C.** Xóa sạch toàn bộ dữ liệu đang lưu trữ trên bộ nhớ flash
- **D.** Tắt toàn bộ hệ thống máy tính để chuẩn bị cho chu trình bay

> **Đáp án:** **A**  
> **Giải thích:** Hàm `setup()` thực hiện Power-On Self Test toàn diện trước khi bước vào chu kỳ bay chính thức.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 149
**Tại sao trong hàm `loop()` của phần mềm bay vệ tinh, lập trình viên TUYỆT ĐỐI KHÔNG ĐƯỢC sử dụng hàm `delay()`?**

- **A.** Vì hàm delay làm gia tăng tốc độ tính toán của bộ vi xử lý
- **B.** Gây đóng băng CPU, làm lỡ viễn lệnh và trễ đá Watchdog
- **C.** Vì hàm delay làm tiêu hao dung lượng pin nhiều hơn mức cho phép
- **D.** Vì hàm delay làm sai lệch màu sắc của các bức ảnh chụp được

> **Đáp án:** **B**  
> **Giải thích:** Hàm `delay()` chặn luồng CPU (Blocking) là điều cấm kỵ trong lập trình hệ thống nhúng điều khiển thời gian thực.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 150
**Giải pháp lập trình không chặn (Non-blocking Timing) tiêu chuẩn trong C++ để thay thế hàm `delay()` là gì?**

- **A.** Dùng hàm millis kết hợp biến lưu mốc trước để kiểm tra
- **B.** Sử dụng một vòng lặp rỗng liên tục không có điều kiện thoát
- **C.** Gọi hàm delay với khoảng thời gian cực ngắn 1 mili-giây
- **D.** Thực hiện ngắt nguồn vi điều khiển rồi khởi động lại tức thì

> **Đáp án:** **A**  
> **Giải thích:** Kỹ thuật kiểm tra `if (currentMillis - lastTime >= INTERVAL)` cho phép bộ xử lý thực hiện hàng trăm tác vụ khác trong lúc chờ định thời.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 151
**Một chu kỳ vòng lặp chính `loop()` của vệ tinh CubeSat trong Lab7-01 bao gồm những bước xử lý tuần tự nào?**

- **A.** Bước 1: Tắt nguồn hệ thống -> Bước 2: Bật nguồn hệ thống
- **B.** Chỉ thực hiện một bước duy nhất là tạm dừng để nghỉ ngơi
- **C.** Giám sát EPS -> Đọc cảm biến -> Phân tích lệnh -> Cập nhật FSM
- **D.** Chỉ thực hiện tác vụ chụp ảnh liên tục bằng máy ảnh quang học

> **Đáp án:** **C**  
> **Giải thích:** Quy trình xử lý tuần tự toàn diện kết nối tất cả các phân hệ thành một thực thể bay thống nhất.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 152
**Thời gian thực thi của một vòng lặp `loop()` (Loop Execution Time) trong điều kiện bình thường nên được khống chế ở mức nào?**

- **A.** Từ -40°C đến +85°C bảo đảm hoạt động tin cậy trong quỹ đạo
- **B.** Từ 0°C đến +40°C phù hợp môi trường văn phòng tiêu chuẩn
- **C.** Từ +50°C đến +150°C chuyên dụng cho các lò phản ứng nhiệt
- **D.** Từ -200°C đến +500°C đáp ứng các môi trường không gian sâu

> **Đáp án:** **D**  
> **Giải thích:** Chu kỳ vòng lặp ngắn bảo đảm độ nhạy và thời gian đáp ứng tức thì đối với các sự kiện viễn lệnh và tín hiệu ngắt.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 153
**Trong bài thực hành Lab7-01, biến toàn cục `SystemState currentState` lưu trữ thông tin gì?**

- **A.** Dung lượng bộ nhớ còn trống trên thẻ nhớ lưu trữ dữ liệu
- **B.** Số điện thoại liên lạc khẩn cấp của kíp trực trạm mặt đất
- **C.** Họ và tên của kỹ sư lập trình phần mềm cho hệ thống bay
- **D.** Trạng thái hoạt động hiện thời của vệ tinh

> **Đáp án:** **D**  
> **Giải thích:** Biến trạng thái là kim chỉ nam điều hướng luồng thực thi của toàn bộ chương trình bay.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 154
**Thao tác 'Đá Watchdog' (Kick the Dog / Reset Watchdog Timer) được đặt ở vị trí nào trong vòng lặp `loop()`?**

- **A.** Không cần thiết phải gọi hàm này trong toàn bộ chương trình
- **B.** Đặt ngẫu nhiên tại bất kỳ vị trí nào bên trong các hàm xử lý
- **C.** Chỉ gọi thao tác này một lần duy nhất bên trong hàm khởi tạo
- **D.** Đặt ở cuối loop, bảo đảm toàn bộ chu trình chạy thông suốt

> **Đáp án:** **D**  
> **Giải thích:** Đặt ở cuối chu trình bảo đảm nếu có bất kỳ bước nào bị kẹt vòng lặp vô tận, Watchdog sẽ không được reset và sẽ tự động kích hoạt khởi động lại vệ tinh.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 155
**Khoảng thời gian Timeout an toàn cho Watchdog phần mềm (TWDT) trong Lab7-01 thường được cấu hình là bao lâu?**

- **A.** 0.1 đến 0.5 mili-giây
- **B.** 10 đến 50 mili-giây
- **C.** 1 đến 5 giây
- **D.** 10 đến 30 phút

> **Đáp án:** **B**  
> **Giải thích:** Khoảng thời gian 3-8 giây đủ dài để các tác vụ ghi thẻ nhớ hoặc truyền gói tin RF hoàn tất mà vẫn đủ nhanh để khởi động lại hệ thống khi có sự cố treo đơ.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 156
**Hàm ghi nhật ký dữ liệu viễn trắc `logTelemetryToSD()` trong Lab7-01 định dạng tệp ghi theo chuẩn gì?**

- **A.** Định dạng tệp hình ảnh động GIF với nhiều khung hình màu
- **B.** Tệp văn bản CSV có dòng tiêu đề cột và dấu phẩy ngăn cách
- **C.** Định dạng tệp âm thanh số WAV lưu trữ tín hiệu tần số thấp
- **D.** Định dạng tệp video MP4 nén hình ảnh với độ phân giải cao

> **Đáp án:** **B**  
> **Giải thích:** Định dạng CSV nhẹ, phổ quát, dễ dàng đọc mở và phân tích bằng Excel, Python hoặc Matlab.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 157
**Cấu trúc bản tin phát sóng vô tuyến định kỳ 'Beacon Packet' của CubeSat trong Lab7-01 có kích thước khoảng bao nhiêu byte?**

- **A.** 1 đến 2 phút
- **B.** 10 đến 15 phút
- **C.** 45 đến 90 phút
- **D.** 12 đến 24 giờ

> **Đáp án:** **D**  
> **Giải thích:** Gói Beacon siêu gọn nhẹ bảo đảm thời gian phát sóng Time-on-Air dưới 0.3 giây, tiết kiệm pin tối đa.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 158
**Hiện tượng 'Rò rỉ bộ nhớ' (Memory Leak) trong phần mềm bay tuần tự xuất hiện do đâu?**

- **A.** Do nhiệt độ hoạt động của các khối linh kiện tăng lên quá cao
- **B.** Do chất điện phân bên trong túi pin nguồn bị rò rỉ hóa học
- **C.** Do hơi ẩm và nước thâm nhập vào các chân cắm của vi mạch
- **D.** Tạo đối tượng String hoặc mảng động trong loop không giải phóng

> **Đáp án:** **D**  
> **Giải thích:** Trong lập trình nhúng, sử dụng mảng ký tự tĩnh `char[]` thay cho kiểu đối tượng `String` là quy tắc sống còn để chống rò rỉ RAM.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 159
**Trong bài thực hành Lab7-01, để kiểm tra khả năng phục hồi của FSM khi gặp sự cố, kỹ sư thực hiện bài kiểm tra 'Bơm lỗi' (Fault Injection) bằng cách nào?**

- **A.** Nhúng toàn bộ khối mạch điện tử vào bể nước để kiểm tra ngắn mạch
- **B.** Dùng búa cơ khí gõ mạnh vào khung sườn vệ tinh trong thử nghiệm
- **C.** Cắt đứt hoàn toàn sợi dây anten phát sóng trong lúc truyền tin
- **D.** Gửi lệnh giả lập pin yếu để kiểm tra FSM chuyển sang Power Save

> **Đáp án:** **D**  
> **Giải thích:** Bơm lỗi có kiểm soát là phương pháp tiêu chuẩn để kiểm chứng độ bền vững của máy trạng thái.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 160
**Hoàn thành bài thực hành Lab7-01, học viên nắm vững kỹ năng kỹ thuật cốt lõi nào?**

- **A.** Sửa chữa thành thạo các thiết bị quạt điện cơ khí thông thường
- **B.** Làm chủ lập trình không chặn, FSM tự chủ và quản lý an toàn
- **C.** Kỹ năng bấm các đầu nối cáp mạng truyền thông theo chuẩn quốc tế
- **D.** Kỹ năng hàn các chi tiết kim loại cơ bản trong xưởng cơ khí

> **Đáp án:** **B**  
> **Giải thích:** Năng lực xây dựng phần mềm bay tích hợp hoàn chỉnh cho các dự án vi vệ tinh không gian.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 161
**Trong bài Lab7-01, hàm `checkSerialCommands()` được gọi ở mỗi vòng lặp `loop()` nhằm mục đích gì?**

- **A.** Đo đạc chính xác chiều dài vật lý của các đường dây nối cáp
- **B.** Xóa sạch toàn bộ dữ liệu đang lưu trong bộ nhớ đệm tiếp nhận
- **C.** Tắt tạm thời cổng kết nối truyền thông để tránh nhận thêm dữ liệu
- **D.** Kiểm tra cổng UART có byte viễn lệnh từ trạm để phân tích ngay

> **Đáp án:** **D**  
> **Giải thích:** Lắng nghe viễn lệnh liên tục ở mỗi chu kỳ bảo đảm thời gian trễ phản hồi lệnh là nhỏ nhất.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 162
**Trong bài Lab7-01, biến thời gian `lastBeaconTime` được cập nhật lại giá trị mới ở thời điểm nào?**

- **A.** Không bao giờ được cập nhật lại giá trị mới trong suốt chương trình
- **B.** Chỉ được cập nhật khi bộ pin nguồn đã được sạc đầy 100% dung lượng
- **C.** Ngay sau khi gói tin Beacon được phát đi thành công
- **D.** Cập nhật một lần duy nhất trước khi cấp nguồn cho toàn bộ mạch

> **Đáp án:** **C**  
> **Giải thích:** Cập nhật mốc thời gian chốt lại chu kỳ đếm cho lần phát tiếp theo.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 163
**Trong bài thực hành Lab7-01, chuỗi ký tự nhận diện bắt đầu gói tin viễn lệnh Uplink được quy định là gì?**

- **A.** Một dấu chấm hỏi
- **B.** Không cần byte nào
- **C.** Chuỗi hai byte đồng bộ ma thuật
- **D.** Một số ngẫu nhiên

> **Đáp án:** **C**  
> **Giải thích:** Magic Bytes giúp bộ phân tích cú pháp lọc bỏ ngay lập tức các byte rác vô tuyến trôi nổi trên đường truyền.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 164
**Trong bài Lab7-01, việc tính toán chu kỳ lặp được thực hiện bằng công thức nào?**

- **A.** Lấy mốc thời gian millis hiện tại cộng với mốc thời gian chu kỳ trước đó
- **B.** Lấy hằng số 1000 mili-giây chia cho tần số quét cố định 60 Hz
- **C.** Lấy mốc millis() hiện tại trừ mốc bắt đầu vòng lặp loopStartTime
- **D.** Luôn gán thời gian thực thi của vòng lặp bằng giá trị 0

> **Đáp án:** **C**  
> **Giải thích:** Đo đạc thời gian thực thi thực tế của từng chu kỳ giúp đánh giá tải của bộ xử lý.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 165
**Kỹ thuật 'Non-blocking SD Logging' (Ghi thẻ nhớ không chặn) trong hệ thống tuần tự được triển khai như thế nào?**

- **A.** Gom dữ liệu vào đệm vòng RAM; đủ 512 byte mới ghi khối SD
- **B.** Thực hiện ghi trực tiếp từng byte đơn lẻ vào trong thẻ nhớ
- **C.** Ngắt nguồn cung cấp điện của thẻ nhớ để bảo đảm tốc độ
- **D.** Sử dụng các loại thẻ nhớ chuyên dụng chế tạo bằng vật liệu

> **Đáp án:** **A**  
> **Giải thích:** Ghi theo từng sector 512 byte khớp hoàn hảo với kiến trúc vật lý của bộ nhớ Flash, tối ưu hóa tốc độ ghi lên gấp hàng chục lần.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 166
**Trong bài thực hành Lab7-01, hàm `calculateSystemChecksum()` tính toán mã kiểm tra trên những dữ liệu nào trước khi phát sóng?**

- **A.** Tính CRC-16 trên mảng byte của gói tin Telemetry Payload
- **B.** Không cần tính toán bất kỳ mã kiểm tra lỗi nào trước phát
- **C.** Tính toán giá trị mã hóa trên chuỗi tên tác giả phần mềm
- **D.** Tính toán dựa trên số lượng đèn LED đang phát sáng trên bo

> **Đáp án:** **A**  
> **Giải thích:** Bảo đảm bên nhận trạm mặt đất có thể kiểm tra tính toàn vẹn tuyệt đối của gói tin.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 167
**Thử nghiệm chạy bền liên tục (Long-duration Endurance Test) của phần mềm bay Lab7-01 trong phòng lab thường yêu cầu chạy tối thiểu bao lâu?**

- **A.** 0.1% đến 0.5%
- **B.** 15% đến 25%
- **C.** 80% đến 90%
- **D.** 99% đến 100%

> **Đáp án:** **C**  
> **Giải thích:** Bài thử nghiệm 24-72 giờ là yêu cầu bắt buộc trước khi đóng gói phần mềm để tích hợp lên vệ tinh.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 168
**Hoàn thành bài thực hành tích hợp tuần tự Lab7-01, học viên chứng minh được năng lực nào?**

- **A.** Lắp ráp mô hình máy bay bằng vật liệu giấy thủ công đơn giản
- **B.** Sửa chữa thành thạo các thiết bị điện thoại thông minh cầm tay
- **C.** Xây dựng phần mềm bay hoàn chỉnh, bền bỉ, quản lý nguồn và FSM
- **D.** Lái và điều khiển tàu ngầm quân sự hoạt động dưới lòng biển sâu

> **Đáp án:** **C**  
> **Giải thích:** Cột mốc trưởng thành vượt bậc biến các đoạn mã thí nghiệm rời rạc thành một hệ điều hành vệ tinh thực thụ.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

### Câu 169
**Hàm trợ giúp `printFSMStateName(SystemState state)` trong Lab7-01 có vai trò gì trong phát triển và gỡ lỗi?**

- **A.** Làm chậm tốc độ thực thi của bộ vi điều khiển máy tính bay
- **B.** Mã hóa toàn bộ các thông tin trạng thái thành chuỗi mật khẩu
- **C.** Đổi mã enum FSM thành chuỗi in ra Serial giúp dễ gỡ lỗi
- **D.** Tắt cổng kết nối nối tiếp để tiết kiệm năng lượng tiêu thụ

> **Đáp án:** **C**  
> **Giải thích:** Công cụ hỗ trợ trực quan hóa hữu ích giúp gỡ lỗi phần mềm bay nhanh chóng.  
> **Mục tiêu củng cố:** Lập trình tích hợp toàn bộ các phân hệ theo vòng lặp tuần tự Super-Loop kết hợp millis()  

---

## 💻 Thực hành: Phần Mềm Bay Đa Nhiệm FreeRTOS & Mô Phỏng Quỹ Đạo (Lab7-02) (37 câu)

### Câu 170
**Cơ chế bảo vệ ngăn ngừa tràn ngăn xếp 'Stack Overflow Detection' trong FreeRTOS hoạt động như thế nào?**

- **A.** Tự động cấp phát thêm dung lượng bộ nhớ cho tác vụ
- **B.** Xóa bỏ tác vụ bị lỗi ra khỏi danh sách của bộ lập lịch
- **C.** Không cần cơ chế bảo vệ vì RAM luôn được tối ưu sẵn
- **D.** Ghi mẫu byte cuối Stack; nếu bị đè sẽ gọi hàm cảnh báo

> **Đáp án:** **D**  
> **Giải thích:** Phát hiện tràn stack kịp thời trước khi dữ liệu của tác vụ khác bị phá hủy ngầm.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 171
**Hệ điều hành thời gian thực FreeRTOS trên vi điều khiển hai lõi ESP32 mang lại ưu thế vượt trội gì so với vòng lặp tuần tự?**

- **A.** Làm gia tăng mức tiêu thụ điện năng của chip lên gấp trăm lần
- **B.** Không đem lại bất kỳ ưu thế kỹ thuật nào so với vòng lặp tuần tự
- **C.** Chia tác vụ độc lập chạy song song 2 lõi với ưu tiên ngắt trước
- **D.** Làm cho cấu trúc mã nguồn chương trình trở nên phức tạp khó đọc

> **Đáp án:** **C**  
> **Giải thích:** Đa nhiệm thời gian thực giải quyết triệt để bài toán đồng thời: tác vụ truyền thông tốc độ cao không bao giờ bị nghẽn bởi tác vụ đọc cảm biến hay ghi thẻ nhớ.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 172
**Hàm FreeRTOS nào được sử dụng để tạo một tác vụ mới và ghim (Pin) tác vụ đó vào một lõi CPU xác định?**

- **A.** 10 đến 20 byte
- **B.** 128 đến 256 byte
- **C.** 10 đến 20 Megabyte
- **D.** 1 đến 2 Gigabyte

> **Đáp án:** **C**  
> **Giải thích:** `xTaskCreatePinnedToCore` cho phép kỹ sư chỉ định rõ ràng tác vụ sẽ chạy trên Core 0 hay Core 1.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 173
**Trong kiến trúc phân bổ hai lõi của CubeSat, Core 0 thường được phân công chuyên trách các tác vụ nào?**

- **A.** Để trống hoàn toàn không phân bổ bất kỳ tác vụ nào thực thi
- **B.** Tác vụ truyền thông vô tuyến và quản lý ngăn xếp mạng
- **C.** Chuyên xử lý các tệp âm thanh phát nhạc cảnh báo ra loa ngoài
- **D.** Chuyên thực hiện tác vụ ngắt nguồn và đưa hệ thống vào ngủ sâu

> **Đáp án:** **B**  
> **Giải thích:** Core 0 (thường là Protocol Core) quản lý toàn bộ các luồng dữ liệu vào/ra vô tuyến thời gian thực.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 174
**Core 1 của ESP32 trong CubeSat thường được phân công thực thi các tác vụ nào?**

- **A.** Tác vụ sứ mệnh chính, đọc cảm biến, tính tư thế và xử lý ảnh
- **B.** Chỉ làm nhiệm vụ đếm số giây trôi qua kể từ khi khởi động
- **C.** Chỉ làm nhiệm vụ điều khiển quạt gió làm mát đế chip bán dẫn
- **D.** Để trống dự phòng cho các ứng dụng phần mềm nâng cấp sau này

> **Đáp án:** **A**  
> **Giải thích:** Core 1 (Application Core) tập trung toàn bộ năng lực tính toán cho các thuật toán khoa học và điều khiển sứ mệnh.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 175
**Cơ chế định thời ưu tiên ngắt trước (Preemptive Scheduling) trong FreeRTOS hoạt động theo nguyên tắc nào?**

- **A.** Mỗi tác vụ được cấp phát luân phiên đúng một giây thực thi
- **B.** Các tác vụ được thực thi lần lượt theo thứ tự bảng chữ cái tên
- **C.** Tác vụ ưu tiên cao hơn lập tức chiếm CPU, ngắt tác vụ thấp
- **D.** Tác vụ nào có số dòng mã nguồn dài hơn sẽ được chạy trước tiên

> **Đáp án:** **C**  
> **Giải thích:** Preemptive Scheduling bảo đảm các sự kiện khẩn cấp (như nhận gói lệnh viễn lệnh hoặc cảnh báo ngắt mạch) được xử lý ngay lập tức mà không có độ trễ.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 176
**Trong hệ thống bay CubeSat của Lab7-02, tác vụ nào sau đây nên được gán mức ưu tiên cao nhất (Highest Priority)?**

- **A.** Tác vụ ghi dữ liệu nhật ký viễn trắc khối lớn vào thẻ nhớ SD
- **B.** Tác vụ giám sát an toàn, đá Watchdog và giải mã viễn lệnh
- **C.** Tác vụ định kỳ đọc giá trị nhiệt độ từ cảm biến nhiệt trên bo
- **D.** Tác vụ điều khiển nhấp nháy đèn LED chỉ thị trạng thái nhịp tim

> **Đáp án:** **B**  
> **Giải thích:** Các tác vụ bảo vệ sinh mạng hệ thống và tiếp nhận lệnh cứu trợ luôn nắm quyền ưu tiên tuyệt đối.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 177
**Để tạm dừng một tác vụ FreeRTOS trong một khoảng thời gian xác định mà KHÔNG làm đóng băng CPU, hàm nào được sử dụng?**

- **A.** Gọi hàm delay thông thường với thời gian 100 mili-giây
- **B.** Sử dụng một vòng lặp vô hạn chờ cờ điều kiện chuyển đổi
- **C.** Gọi hàm kết thúc chương trình để trả tài nguyên cho máy
- **D.** Gọi hàm vTaskDelay(pdMS_TO_TICKS(100)) chuẩn FreeRTOS

> **Đáp án:** **D**  
> **Giải thích:** `vTaskDelay` chuyển tác vụ hiện tại sang trạng thái Blocked, nhường ngay lập tức 100% thời gian CPU cho các tác vụ khác chạy.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 178
**Cơ chế Hàng đợi (FreeRTOS Queue) được sử dụng để giải quyết bài toán nào trong hệ thống đa nhiệm?**

- **A.** Gia tăng thêm dung lượng bộ nhớ RAM khả dụng cho toàn hệ thống
- **B.** Truyền dữ liệu và đồng bộ hóa giữa các tác vụ không xung đột
- **C.** Xếp hàng thứ tự mua sắm các thiết bị phần cứng trong dự án bay
- **D.** Vẽ đồ thị biểu diễn tham số viễn trắc trên giao diện giám sát

> **Đáp án:** **B**  
> **Giải thích:** Queue cho phép truyền các thông điệp dữ liệu (như struct cảm biến hay gói lệnh) từ tác vụ sản sinh sang tác vụ tiêu thụ một cách an toàn luồng (Thread-Safe).  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 179
**Hiện tượng 'Race Condition' (Tranh chấp điều kiện) xảy ra khi nào trong môi trường đa nhiệm?**

- **A.** Khi hai vệ tinh bay đua với nhau trên cùng một quỹ đạo Trái Đất
- **B.** Khi khối pin nguồn được nạp điện với tốc độ quá nhanh so với chuẩn
- **C.** Khi nhiệt độ môi trường thay đổi đột ngột giữa sáng và tối
- **D.** Hai tác vụ cùng ghi vào biến chung mà không có khóa bảo vệ

> **Đáp án:** **D**  
> **Giải thích:** Tranh chấp tài nguyên làm dữ liệu bị xáo trộn, sai lệch giá trị hoặc gây lỗi phần cứng nghiêm trọng.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 180
**Cơ chế Khóa tương hỗ (Mutex - Mutual Exclusion Semaphore) trong FreeRTOS có chức năng gì?**

- **A.** Chìa khóa duy nhất: chỉ tác vụ giữ Mutex mới được truy cập
- **B.** Mã hóa bảo mật các thông điệp dữ liệu trước khi truyền đi
- **C.** Gia tăng tốc độ truyền dẫn trên các đường bus ngoại vi nối tiếp
- **D.** Ngắt hoàn toàn đường cấp nguồn điện cho các thiết bị ngoại vi

> **Đáp án:** **A**  
> **Giải thích:** Mutex bảo vệ tài nguyên dùng chung khỏi hiện tượng xung đột dữ liệu đa luồng.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 181
**Cơ chế 'Thừa kế mức ưu tiên' (Priority Inheritance) tích hợp trong FreeRTOS Mutex giải quyết bài toán Priority Inversion như thế nào?**

- **A.** Tắt toàn bộ các tác vụ khác đang hoạt động trong hệ điều hành
- **B.** Xóa bỏ hoàn toàn đối tượng Mutex ra khỏi không gian bộ nhớ
- **C.** Tạm nâng ưu tiên task giữ Mutex lên bằng task cao đang chờ
- **D.** Thực hiện chu trình khởi động lại vi điều khiển ngay tức thì

> **Đáp án:** **C**  
> **Giải thích:** Thừa kế mức ưu tiên giúp giải phóng tài nguyên nhanh chóng, khôi phục quyền điều khiển cho tác vụ khẩn cấp.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 182
**Hiện tượng 'Khóa chết' (Deadlock) giữa hai tác vụ đa nhiệm xảy ra trong tình huống nào?**

- **A.** Khi hệ thống bị mất hoàn toàn nguồn điện cung cấp từ pin Mặt Trời
- **B.** Khi thẻ nhớ lưu trữ dữ liệu bị tháo rời ra khỏi khe cắm trên bo
- **C.** Khi khối pin năng lượng bị xả cạn kiệt điện tích trong bóng tối
- **D.** Task A giữ Khóa 1 chờ Khóa 2, Task B giữ Khóa 2 chờ Khóa 1

> **Đáp án:** **D**  
> **Giải thích:** Cần tuân thủ quy tắc lấy khóa theo thứ tự phân cấp nghiêm ngặt để loại trừ Deadlock.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 183
**Hàm móc lỗi 'Stack Overflow Hook' (`vApplicationStackOverflowHook`) được FreeRTOS tự động gọi khi nào?**

- **A.** Khi phân hệ truyền thông bắt đầu phát tín hiệu sóng vô tuyến
- **B.** Khi bộ pin nguồn được sạc đầy 100% dung lượng danh định của nó
- **C.** Khi dung lượng bộ nhớ lưu trữ trên thẻ nhớ ngoài bị đầy dữ liệu
- **D.** Tác vụ tiêu thụ vượt Stack cấp phát, ghi đè vùng nhớ xung quanh

> **Đáp án:** **D**  
> **Giải thích:** Hook cho phép ghi nhận tên tác vụ gây lỗi và thực hiện khởi động lại an toàn trước khi xảy ra thảm họa.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 184
**Trong bài thực hành Lab7-02, `TaskSensors` được lập lịch chạy ở tần số bao nhiêu?**

- **A.** 1 đến 2 ngày
- **B.** 15 đến 30 ngày
- **C.** 6 đến 12 tháng
- **D.** 5 đến 10 năm

> **Đáp án:** **A**  
> **Giải thích:** 10 Hz là tần số lấy mẫu lý tưởng cho cảm biến chuyển động IMU và khí quyển trên vi vệ tinh giáo dục.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 185
**Tác vụ giám sát phần mềm `TaskWatchdog` trong Lab7-02 kiểm tra sức khỏe của các tác vụ khác theo cơ chế nào?**

- **A.** Đếm tổng số lượng dòng mã nguồn được thực thi trong một chu kỳ
- **B.** Điểm danh: mỗi task chạy xong bật cờ; thiếu cờ thì không đá WDT
- **C.** Hỏi và nhận diện phản hồi bằng giọng nói của người vận hành trạm
- **D.** Đo đạc nhiệt độ hoạt động của từng tác vụ trong không gian bộ nhớ

> **Đáp án:** **B**  
> **Giải thích:** Cơ chế Task Check-in bảo đảm toàn bộ các tác vụ trong hệ thống đều đang sống khỏe mạnh chứ không chỉ riêng một tác vụ đơn lẻ.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 186
**Trong FreeRTOS, cờ sự kiện 'Event Groups' cho phép đồng bộ hóa tác vụ như thế nào?**

- **A.** Chỉ cho phép truyền gửi duy nhất giá trị số không trong hệ thống
- **B.** Làm suy giảm tốc độ xung nhịp xử lý của bộ vi điều khiển trung tâm
- **C.** Cho phép tác vụ chờ đồng thời tổ hợp nhiều sự kiện logic
- **D.** Tắt toàn bộ hệ điều hành thời gian thực và chuyển về chế độ đơn

> **Đáp án:** **C**  
> **Giải thích:** Event Groups cung cấp cơ chế kích hoạt tác vụ theo các điều kiện logic đa biến phức tạp.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 187
**Trong bài thực hành Lab7-02, khối mô phỏng quỹ đạo bay (Orbit Simulation Engine) có chức năng gì?**

- **A.** Tạo chu kỳ sáng tối quỹ đạo tác động lên dòng sạc pin ảo
- **B.** Vẽ bản đồ hành trình du lịch cho các phương tiện giao thông bộ
- **C.** Mô phỏng động cơ và cơ chế lái của các phương tiện xe cơ giới
- **D.** Tạo ra các hiệu ứng âm thanh sống động phục vụ cho trải nghiệm

> **Đáp án:** **A**  
> **Giải thích:** Mô phỏng chu kỳ quỹ đạo thời gian thực giúp học viên kiểm chứng trọn vẹn thuật toán FSM và quản lý năng lượng trong phòng thí nghiệm.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 188
**Tại sao trong bài thực hành Lab7-02, việc sử dụng biến cờ Semaphore nhị phân (Binary Semaphore) lại tối ưu cho việc báo hiệu ngắt phần cứng?**

- **A.** Vì cấu trúc dữ liệu của nó chiếm ít ký tự văn bản hơn trong mã
- **B.** Vì nó có khả năng gia tăng mức điện áp hoạt động của chân tín hiệu
- **C.** Vì nó không tiêu tốn bất kỳ dung lượng bộ nhớ RAM nào của vi điều khiển
- **D.** ISR nhả Semaphore cực nhanh để đánh thức tác vụ chuyên trách

> **Đáp án:** **D**  
> **Giải thích:** Kỹ thuật Deferred Interrupt Handling: ngắt chỉ bật cờ, tác vụ nền sẽ xử lý chi tiết.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 189
**Hàm FreeRTOS chuyên dụng nào được phép gọi BÊN TRONG một hàm ngắt (ISR)?**

- **A.** Hàm in chuỗi ký tự tiêu chuẩn định dạng ra màn hình
- **B.** Bất kỳ hàm tiện ích nào có trong thư viện cũng đều được
- **C.** Các hàm chuyên dụng có hậu tố FromISR trong FreeRTOS
- **D.** Hàm tạm dừng chờ đợi theo thời gian danh định của hệ thống

> **Đáp án:** **C**  
> **Giải thích:** Các phiên bản API FromISR an toàn luồng và không gây lỗi sụp đổ hệ điều hành khi chạy trong ngữ cảnh ngắt.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 190
**Tác vụ `TaskStorage` trong FreeRTOS sử dụng cơ chế đệm nào để không làm nghẽn các tác vụ khác khi ghi thẻ nhớ SD?**

- **A.** Không sử dụng bất kỳ cơ chế bộ đệm nào mà ghi trực tiếp vào thẻ nhớ
- **B.** Dùng Queue nhận bản ghi từ task khác; rảnh mới gom khối ghi SD
- **C.** Ghi trực tiếp các dòng dữ liệu ra các chân tín hiệu vào ra số của chip
- **D.** Sử dụng hệ thống lưu trữ bằng băng từ truyền thống kiểu công nghiệp

> **Đáp án:** **B**  
> **Giải thích:** Tách biệt hoàn toàn thời gian lấy mẫu của cảm biến khỏi độ trễ ghi dữ liệu của thẻ nhớ.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 191
**Khái niệm 'Task Starvation' (Tác vụ bị bỏ đói) trong FreeRTOS là gì?**

- **A.** Task ưu tiên thấp không bao giờ được chạy vì task cao chiếm CPU
- **B.** Tác vụ bị xóa mất hoàn toàn khỏi danh sách quản lý của hệ điều hành
- **C.** Tác vụ không nhận được đủ mức điện áp cung cấp cần thiết từ nguồn nuôi
- **D.** Tác vụ thực thi với tốc độ quá nhanh so với thiết kế ban đầu của phần mềm

> **Đáp án:** **A**  
> **Giải thích:** Thiết kế mức ưu tiên phải bảo đảm các tác vụ ưu tiên thấp vẫn có các khe thời gian để hoàn thành nhiệm vụ.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 192
**Biện pháp kỹ thuật nào giúp loại trừ hiện tượng Task Starvation trong FreeRTOS?**

- **A.** Xóa bớt các tác vụ không quan trọng ra khỏi mã nguồn chương trình
- **B.** Gia tăng tốc độ xung nhịp của bộ vi xử lý trung tâm lên mức vô hạn
- **C.** Thiết lập toàn bộ mức ưu tiên của tất cả các tác vụ về mức số không
- **D.** Task ưu tiên cao luôn có lúc nhường quyền và chia sẻ thời gian

> **Đáp án:** **D**  
> **Giải thích:** Nguyên tắc hợp tác trong hệ điều hành: không tác vụ nào được phép chiếm dụng CPU vĩnh viễn.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 193
**Trong bài thực hành mô phỏng Lab7-02, giao diện Web Ground Station trên LMS hiển thị đồ thị nào để theo dõi chu kỳ quỹ đạo?**

- **A.** Biểu đồ biến động giá của các mã chứng khoán trên sàn giao dịch
- **B.** Bản đồ dự báo khí tượng thời tiết của các khu vực trên mặt đất
- **C.** Biểu đồ theo dõi sự biến động của giá kim loại quý trên thị trường
- **D.** Đồ thị Điện áp pin và Dòng sạc theo thời gian thực

> **Đáp án:** **D**  
> **Giải thích:** Trực quan hóa sinh động chu kỳ năng lượng quỹ đạo LEO giúp học viên nắm bắt bản chất vật lý của vệ tinh.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 194
**Khi kết nối kit vệ tinh thật với giao diện Web LMS qua Web Serial, các gói tin viễn trắc từ FreeRTOS được chuyển đổi như thế nào?**

- **A.** Dữ liệu nhị phân từ UART được kiểm CRC rồi đẩy lên Dashboard
- **B.** Vẽ lại toàn bộ các đồ thị tham số bằng tay trên giấy vẽ kỹ thuật
- **C.** Chuyển đổi toàn bộ các gói tin dữ liệu thành các tệp âm thanh nghe
- **D.** In trực tiếp toàn bộ các dòng nhật ký dữ liệu ra máy in văn phòng

> **Đáp án:** **A**  
> **Giải thích:** Luồng dữ liệu khép kín thời gian thực từ vi điều khiển nhúng lên nền tảng đám mây.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 195
**Hàm `vTaskDelete(NULL)` trong FreeRTOS có tác dụng gì?**

- **A.** Xóa toàn bộ các tệp mã nguồn chương trình lưu trong bộ nhớ Flash
- **B.** Khởi động lại toàn bộ hệ điều hành của máy tính trung tâm vệ tinh
- **C.** Ngắt hoàn toàn nguồn cung cấp điện của bộ vi điều khiển chính trên bo
- **D.** Tự hủy và giải phóng Stack của chính task khi xong nhiệm vụ

> **Đáp án:** **D**  
> **Giải thích:** Giải phóng sạch sẽ tài nguyên bộ nhớ khi một tác vụ dùng một lần (như khởi tạo bung anten) kết thúc.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 196
**Khi toàn bộ 70 câu hỏi của bài thực hành Lab7-02 hoàn thành, học viên làm chủ trọn vẹn năng lực nào?**

- **A.** Chơi các trò chơi điện tử giải trí trên máy tính thành thạo hơn
- **B.** Làm chủ FreeRTOS đa lõi, lập trình đa tác vụ và mô phỏng quỹ đạo
- **C.** Kỹ năng tháo lắp và sửa chữa các bộ phận cơ khí của phương tiện xe
- **D.** Kỹ năng chế biến và nấu nướng các món ăn phục vụ cho cuộc sống

> **Đáp án:** **B**  
> **Giải thích:** Năng lực kỹ sư tích hợp hệ thống không gian (Space Flight Software & Systems Integration Engineer) chuyên nghiệp tiêu chuẩn quốc tế.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 197
**Bộ định thời phần mềm trong FreeRTOS (Software Timers) có ưu điểm gì trong thiết kế phần mềm bay CubeSat?**

- **A.** Làm tiêu tốn thêm một lõi vi xử lý vật lý riêng biệt của phần cứng
- **B.** Không có khả năng biên dịch và thực thi trên dòng vi điều khiển này
- **C.** Lập lịch sự kiện thời gian dài trên nền Daemon không tốn Stack
- **D.** Làm sai lệch mốc thời gian thực thi của các tác vụ hệ thống bay

> **Đáp án:** **C**  
> **Giải thích:** Software Timers tiết kiệm bộ nhớ RAM Stack quý giá cho các tác vụ định thời đơn giản.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 198
**Hàm FreeRTOS nào được sử dụng để tái khởi động lại bộ đếm thời gian cho một Software Timer?**

- **A.** `xTimerCreate()`
- **B.** `xTimerStop()`
- **C.** `xTimerReset()`
- **D.** `xTimerDelete()`

> **Đáp án:** **C**  
> **Giải thích:** `xTimerReset` đặt lại mốc đếm từ đầu, thường dùng để gia hạn thời gian canh chừng sự cố.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 199
**Cơ chế Thông báo tác vụ trực tiếp 'Task Notifications' trong FreeRTOS có ưu thế gì so với Hàng đợi và Semaphore?**

- **A.** Chỉ cho phép truyền gửi duy nhất các chuỗi ký tự văn bản thông thường
- **B.** Nhanh hơn 45% và ít RAM hơn vì không cần tạo Queue riêng
- **C.** Tốc độ thực thi xử lý chậm hơn nhiều so với việc sử dụng hàng đợi
- **D.** Không bảo đảm an toàn dữ liệu khi có nhiều tác vụ cùng truy cập vào

> **Đáp án:** **B**  
> **Giải thích:** Task Notifications là giải pháp đồng bộ hóa siêu nhẹ lý tưởng cho các vi điều khiển hạn chế tài nguyên.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 200
**Thông số cấu hình `configUSE_PREEMPTION = 1` trong tệp `FreeRTOSConfig.h` kích hoạt chế độ lập lịch nào?**

- **A.** Kích hoạt chế độ lập lịch cộng tác thuần túy không có ngắt quyền
- **B.** Lập lịch thực thi ngẫu nhiên không theo bất kỳ quy tắc ưu tiên nào
- **C.** Lập lịch chiếm quyền: task ưu tiên cao ngắt ngang task thấp
- **D.** Tắt hoàn toàn hoạt động của hệ điều hành thời gian thực FreeRTOS

> **Đáp án:** **C**  
> **Giải thích:** Kích hoạt cơ chế chiếm quyền ưu tiên bảo đảm đáp ứng thời gian thực cho các sự kiện khẩn cấp.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 201
**Thông số cấu hình `configTICK_RATE_HZ = 1000` trong FreeRTOS có nghĩa là gì?**

- **A.** Đồng hồ thời gian thực của hệ thống hoạt động liên tục 1000 giờ
- **B.** Nhịp Tick hệ điều hành 1000 Hz, tương ứng mỗi nhịp là 1 ms
- **C.** Tốc độ truyền dữ liệu trên cổng nối tiếp được cấu hình ở mức 1000 bps
- **D.** Nhiệt độ hoạt động của vi điều khiển được duy trì ở mức 1000 độ C

> **Đáp án:** **B**  
> **Giải thích:** 1 tick = 1 ms giúp việc định thời và chuyển đổi thời gian `pdMS_TO_TICKS(ms)` đạt độ phân giải mili-giây chuẩn xác.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 202
**Một tác vụ FreeRTOS có thể nằm ở những trạng thái hoạt động cơ bản nào?**

- **A.** Running, Ready, Blocked, Suspended và Deleted
- **B.** Chỉ có hai trạng thái là Đang chạy và Đã tắt
- **C.** Đang nạp mã nguồn chương trình vào bộ nhớ
- **D.** Đang nạp điện năng vào khối pin năng lượng

> **Đáp án:** **A**  
> **Giải thích:** Nắm vững các trạng thái tác vụ giúp lập trình viên kiểm soát hoàn hảo hành vi của hệ điều hành.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 203
**Trong bài thực hành mô phỏng Lab7-02, biên dạng góc ngẩng (Elevation Profile) mô phỏng diễn ra như thế nào trong phiên 10 phút?**

- **A.** Góc ngẩng luôn duy trì cố định ở mức 90 độ thẳng đứng thiên đỉnh
- **B.** Bắt đầu 5 độ, tăng dần lên đỉnh, giảm về 5 độ rồi hết ở 0 độ
- **C.** Góc ngẩng giảm dần đều từ mức tối đa xuống mức tối thiểu của trạm
- **D.** Góc ngẩng quay vòng tròn 360 độ liên tục xung quanh vị trí đặt trạm

> **Đáp án:** **B**  
> **Giải thích:** Mô phỏng đường cong hình chuông kinh điển của góc ngẩng khi vệ tinh bay qua trạm mặt đất.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 204
**Cơ chế bảo vệ bằng Watchdog phần mềm trong FreeRTOS phát hiện lỗi bằng cách nào?**

- **A.** Kiểm tra định kỳ các tác vụ có xóa cờ báo hiệu nhịp tim đúng hạn hay không
- **B.** Đo đạc điện trở tiếp xúc giữa các chân cắm của vi điều khiển trên bo mạch
- **C.** Tự động tắt nguồn máy tính nếu số lượng dòng mã nguồn vượt một triệu dòng
- **D.** Gửi thông báo email cho quản trị viên hệ thống mỗi khi một tác vụ hoàn thành

> **Đáp án:** **A**  
> **Giải thích:** Một tác vụ giám sát độc lập kiểm tra cờ của từng task; nếu một task bị kẹt trong vòng lặp vô tận (deadlock) và không xóa cờ, hệ thống sẽ kích hoạt lệnh khởi động lại.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 205
**Trong hệ thống RTOS, hàng đợi lệnh ưu tiên (Priority Command Queue) đảm bảo điều gì?**

- **A.** Các lệnh an toàn khẩn cấp luôn được đưa lên đầu hàng đợi để thực thi ngay lập tức
- **B.** Mọi lệnh gửi lên đều phải chờ đủ mười phút mới bắt đầu được bóc tách giải mã
- **C.** Các lệnh chụp ảnh tải trọng luôn có độ ưu tiên cao hơn các lệnh sinh tồn hệ thống
- **D.** Xóa bỏ ngẫu nhiên các lệnh cũ để nhường bộ nhớ cho các lệnh mới nhận được

> **Đáp án:** **A**  
> **Giải thích:** Hàng đợi ưu tiên đảm bảo các lệnh khẩn cấp (ngắt tải, chuyển Safe Mode, reset ngoại vi) được xử lý trước các lệnh thông thường như đọc cấu hình hay lấy lịch sử log.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

### Câu 206
**Cờ sự kiện (Event Flags) trong phần mềm bay RTOS được sử dụng cho mục đích gì?**

- **A.** Đồng bộ hóa sự xuất hiện của các điều kiện phần cứng giữa nhiều tiến trình độc lập
- **B.** Hiển thị các chấm màu trên giao diện dòng lệnh của màn hình máy vi tính
- **C.** Lưu trữ vĩnh viễn hình ảnh chụp được vào các khối bộ nhớ Flash không khả biến
- **D.** Đo đạc chính xác bước sóng ánh sáng của các tia bức xạ chiếu tới thân vỏ

> **Đáp án:** **A**  
> **Giải thích:** Event Flags (hoặc Event Groups) cho phép một tác vụ chờ đợi đồng thời nhiều sự kiện (ví dụ: cờ pin đầy AND cờ đúng giờ bay qua trạm) trước khi chuyển trạng thái FSM.  
> **Mục tiêu củng cố:** Lập trình phần mềm bay FreeRTOS chạy song song trên 2 lõi CPU và tích hợp mô phỏng quỹ đạo  

---

## 📖 Doc 7.3: Sổ Tay Vận Hành Bay (FOM) & Mô Phỏng Chu Kỳ Quỹ Đạo LEO 95 Phút (14 câu)

### Câu 207
**Tài liệu 'Sổ tay Vận hành Bay' (Flight Operations Manual - FOM) của vệ tinh phục vụ đối tượng nào?**

- **A.** 1.0 đến 2.0 mét
- **B.** 300 đến 600 km
- **C.** 10000 đến 20000 km
- **D.** 50 đến 80 mét

> **Đáp án:** **C**  
> **Giải thích:** FOM là cẩm nang pháp lệnh vận hành bảo đảm mọi quyết định và thao tác điều khiển đều chuẩn xác và an toàn tuyệt đối.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 208
**Quy trình chuẩn bị trước phiên bay qua (Pre-Pass Checklist) bắt đầu trước thời điểm vệ tinh xuất hiện (AOS) khoảng bao lâu?**

- **A.** 0.1 đến 0.5 mét
- **B.** 10 đến 50 km
- **C.** 1000 đến 2000 km
- **D.** 2.0 đến 3.5 mét

> **Đáp án:** **C**  
> **Giải thích:** Khoảng thời gian 15-30 phút đủ để kíp trực kiểm tra thiết bị, đồng bộ thời gian, xoay thử ăng-ten và nạp kế hoạch phiên bay.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 209
**Hành động đầu tiên của kíp trực ngay khi trạm mặt đất bắt được tín hiệu vô tuyến (AOS) là gì?**

- **A.** Gửi lệnh kích hoạt cụm máy ảnh chụp bề mặt tức thì
- **B.** Mở tiệc ăn mừng vì đã phát hiện thấy tín hiệu vệ tinh
- **C.** Khóa sóng mang, kiểm tra Beacon và thông báo trạng thái
- **D.** Tắt toàn bộ hệ thống máy tính để bảo đảm an toàn điện

> **Đáp án:** **C**  
> **Giải thích:** Xác nhận vệ tinh còn sống và nắm bắt điện áp pin trước khi thực hiện bất kỳ thao tác nào khác.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 210
**Ma trận tình huống bất thường (Anomaly Matrix / Contingency Decision Tree) trong tài liệu FOM có cấu trúc gồm những cột nào?**

- **A.** Triệu chứng, nguyên nhân, mức độ, ứng phó và phục hồi
- **B.** Bảng chấm công ngày làm việc của các thành viên kíp
- **C.** Bảng tính lương và thưởng cho các vị trí chuyên trách
- **D.** Bản đồ chỉ dẫn giao thông đường bộ tới vị trí trạm thu

> **Đáp án:** **A**  
> **Giải thích:** Chỉ dẫn hành động rõ ràng giúp kíp trực phản ứng chính xác trong vòng vài giây khi xảy ra sự cố áp lực cao.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 211
**Nếu trong một phiên bay qua, trạm mặt đất hoàn toàn KHÔNG thu được tín hiệu vô tuyến tại thời điểm AOS dự tính (Mất liên lạc / Loss of Signal), bước xử lý đầu tiên là gì?**

- **A.** Tắt toàn bộ nguồn cung cấp điện cho các thiết bị trạm
- **B.** Tuyên bố vệ tinh đã phát nổ hoàn toàn trên quỹ đạo bay
- **C.** Rời khỏi vị trí làm việc và kết thúc phiên trực sớm
- **D.** Kiểm tra cáp anten, LNA, góc xoay, tần số thu và mạng lưới

> **Đáp án:** **D**  
> **Giải thích:** Hơn 80% trường hợp 'mất liên lạc' ban đầu xuất phát từ sự cố thiết bị tại trạm mặt đất chứ không phải trên vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 212
**Hiện tượng 'Pin sụt áp sâu trong vùng tối Eclipse' (Deep Battery Depletion) được kíp trực phát hiện qua dấu hiệu nào?**

- **A.** Áp pin dưới 3.5V và dòng xả cao do tải chưa ngắt kịp
- **B.** Tốc độ di chuyển của vệ tinh trên quỹ đạo bị chậm lại
- **C.** Nhiệt độ môi trường bên ngoài phòng điều khiển suy giảm
- **D.** Màn hình hiển thị tại trạm mặt đất bị suy giảm độ sáng

> **Đáp án:** **A**  
> **Giải thích:** Tình huống khẩn cấp đòi hỏi phát ngay lệnh cưỡng bức 'FORCE_SAFE_MODE' để cứu pin.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 213
**Trong vận hành CubeSat, khái niệm 'Contact Window' (Cửa sổ liên lạc) là gì?**

- **A.** 0.1 đến 0.5 mét
- **B.** 10 đến 50 km
- **C.** 1000 đến 2000 km
- **D.** 2.0 đến 3.5 mét

> **Đáp án:** **A**  
> **Giải thích:** Cửa sổ thời gian quý báu (thường chỉ 8-12 phút) để thực hiện toàn bộ các tác vụ liên lạc không gian.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 214
**Khái niệm 'Pass Timeline' (Dòng thời gian phiên bay) trong FOM phân chia thời gian 10 phút của một phiên bay thành những pha nào?**

- **A.** 30 đến 45 giây
- **B.** 5 đến 12 phút
- **C.** 1 đến 2 giờ
- **D.** 24 đến 48 giờ

> **Đáp án:** **B**  
> **Giải thích:** Phân bổ thời gian khoa học tối đa hóa thông lượng dữ liệu thu thập được.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 215
**Hoàn thành khối kiến thức Kiến trúc Phần mềm bay FSM & Quy trình Vận hành FOM, học viên đạt năng lực gì?**

- **A.** Làm chủ thiết kế FSM tự chủ, cơ chế FDIR và quy trình FOM
- **B.** Thành thạo kỹ năng điều khiển phương tiện giao thông công
- **C.** Có khả năng sửa chữa các thiết bị vô tuyến truyền hình
- **D.** Thiết kế các trò chơi giải trí chạy trên thiết bị cầm tay

> **Đáp án:** **A**  
> **Giải thích:** Năng lực kỹ sư phần mềm bay (Flight Software Engineer) và chỉ huy vận hành sứ mệnh không gian chuyên nghiệp.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 216
**Báo cáo tổng kết sứ mệnh (Mission Closeout Report) đánh giá những khía cạnh nào của dự án vệ tinh CubeSat?**

- **A.** Đóng cửa vĩnh viễn phòng thí nghiệm sau khi kết thúc dự án
- **B.** Đánh giá mục tiêu, tổng kết độ tin cậy và rút bài học
- **C.** Chỉ thực hiện công việc quyết toán tổng số kinh phí đã chi
- **D.** Tổ chức khen thưởng thành tích cho các cá nhân trong dự án

> **Đáp án:** **B**  
> **Giải thích:** Kho tàng bài học kinh nghiệm là tài sản vô giá thúc đẩy sự tiến bộ của công nghệ vũ trụ quốc gia.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 217
**Khi vệ tinh bay vào pha 'Eclipse' (Vùng tối bóng râm Trái Đất), biến mô phỏng dòng sạc Mặt Trời `solarCurrent` sẽ thay đổi thế nào?**

- **A.** Về 0 mA, pin Li-Po xả cấp nguồn cho toàn bộ hoạt động
- **B.** Tăng lên gấp đôi so với giá trị dòng sạc danh định thông thường
- **C.** Giữ cố định ở mức 500 mA mà không chịu ảnh hưởng của bóng râm
- **D.** Tự động chuyển đổi thành dòng điện xoay chiều tần số công nghiệp

> **Đáp án:** **A**  
> **Giải thích:** Mô phỏng chân thực sự biến mất của nguồn năng lượng Mặt Trời khi Trái Đất che khuất ánh sáng.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 218
**Trong pha Eclipse kéo dài 35 phút, nếu vệ tinh bật tất cả các tải trọng tiêu thụ 250 mA, pin 1000 mAh sẽ bị sụt giảm bao nhiêu dung lượng?**

- **A.** 85 mAh
- **B.** 220 mAh
- **C.** 146 mAh
- **D.** 350 mAh

> **Đáp án:** **C**  
> **Giải thích:** Tính toán ngân sách năng lượng chuẩn xác bảo đảm pin không bao giờ bị xả sâu quá ngưỡng an toàn trong vùng tối.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 219
**Khi vệ tinh bay ra khỏi vùng tối đón nhận ánh nắng Mặt Trời (Pha Sunlight), thông số nào trên mô hình sẽ thay đổi tức thì?**

- **A.** Nhiệt độ của đế chip vi xử lý bị hạ thấp xuống dưới mức âm độ C
- **B.** Dòng sạc Mặt Trời dương trở lại, điện áp pin tăng dần
- **C.** Dòng xả của khối pin năng lượng gia tăng đột ngột lên mức cực đại
- **D.** Hệ thống cơ cấu cơ khí tự động gập gọn ăng-ten phát sóng lại

> **Đáp án:** **B**  
> **Giải thích:** Hệ thống bắt đầu giai đoạn bù đắp lại lượng năng lượng đã tiêu hao trong vùng tối.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

### Câu 220
**Nếu trong lúc đang tải dở bức ảnh thì phiên liên lạc kết thúc (LOS Simulation), phần mềm trạm mặt đất phải làm gì?**

- **A.** Xóa bỏ toàn bộ bức ảnh đang tải dở dang khỏi bộ nhớ máy tính
- **B.** Gửi câu lệnh viễn lệnh khẩn cấp yêu cầu tự hủy vệ tinh trên quỹ đạo
- **C.** Tắt toàn bộ hệ thống máy tính điều hành của trạm mặt đất vứt đi
- **D.** Lưu mảnh ảnh đã nhận, ghi nhớ mảnh thiếu để tải tiếp phiên sau

> **Đáp án:** **D**  
> **Giải thích:** Kỹ thuật truyền tải dữ liệu gián đoạn (Delay-Tolerant Networking - DTN) là đặc trưng của truyền thông không gian.  
> **Mục tiêu củng cố:** Nắm vững quy trình liên lạc trạm mặt đất (AOS/LOS) và mô hình chu kỳ quỹ đạo LEO 95 phút  

---

