# Ngân hàng Câu hỏi Trắc nghiệm - Lab 3

> **Tổng số câu hỏi:** 216 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 3.1: Giao Thức Bus SPI Tốc Độ Cao & Hệ Thống Tập Tin FAT32 Thẻ MicroSD (140 câu)

### Câu 1
**Trong kiến trúc của một vệ tinh tiêu chuẩn, phân hệ C&DH (Command & Data Handling) đảm nhận vai trò chủ đạo nào?**

- **A.** Lọc nhiễu cơ học từ tên lửa đẩy
- **B.** Xử lý viễn lệnh và quản lý dữ liệu vệ tinh
- **C.** Biến đổi quang năng thành điện năng nguồn
- **D.** Tạo lực đẩy để nâng cao quỹ đạo vệ tinh

> **Đáp án:** **B**  
> **Giải thích:** C&DH là trung tâm chỉ huy tiếp nhận viễn lệnh (TC), điều phối luồng thông tin và tổ chức lưu trữ viễn đo (TM).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 2
**Khái niệm 'Telecommand' (TC - Viễn lệnh) trong kỹ thuật điều khiển vệ tinh được định nghĩa là gì?**

- **A.** Bản tin đo nhiệt độ truyền về mặt đất
- **B.** Tín hiệu thời gian chuẩn từ vệ tinh
- **C.** Khung dữ liệu ảnh chụp từ máy ảnh
- **D.** Lệnh điều khiển gửi từ trạm mặt đất lên

> **Đáp án:** **D**  
> **Giải thích:** Telecommand là dòng lệnh điều khiển chiều lên (Uplink) từ kỹ sư mặt đất chỉ thị cho vệ tinh thực thi.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 3
**Khái niệm 'Telemetry' (TM - Dữ liệu viễn đo) của vệ tinh phản ánh tập hợp dữ liệu nào?**

- **A.** Tọa độ địa lý của trạm thu mặt đất
- **B.** Các bản tin dự báo thời tiết tải lên
- **C.** Dữ liệu trạng thái kỹ thuật của vệ tinh
- **D.** Mã nguồn phần mềm hệ thống nhúng OBC

> **Đáp án:** **C**  
> **Giải thích:** Telemetry là dòng dữ liệu chiều xuống (Downlink) cung cấp bức tranh toàn cảnh về sức khỏe của vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 4
**Khái niệm chiến lược lưu trữ 'Store-and-Forward' (Lưu trữ và Chuyển tiếp) trên vệ tinh được áp dụng trong tình huống nào?**

- **A.** Khi vệ tinh ở trạng thái tắt hoàn toàn
- **B.** Khi vệ tinh luôn trong tầm phủ sóng trạm
- **C.** Khi bay ngoài vùng phủ sóng chờ truyền sau
- **D.** Khi bộ nguồn thứ cấp trên vệ tinh cạn kiệt

> **Đáp án:** **C**  
> **Giải thích:** Store-and-Forward giải quyết bài toán cửa sổ liên lạc gián đoạn của quỹ đạo thấp LEO (chỉ vài phút mỗi lần qua trạm).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 5
**Sự khác biệt cốt lõi giữa một 'Tiến trình' (Process) và một 'Luồng' (Thread) trong kiến trúc hệ điều hành là gì?**

- **A.** Tiến trình có tốc độ chạy nhanh hơn luồng
- **B.** Luồng không thể bị bộ lập lịch tạm dừng
- **C.** Tiến trình có không gian bộ nhớ độc lập
- **D.** Tiến trình không cần cấp phát bộ nhớ RAM

> **Đáp án:** **C**  
> **Giải thích:** Các tiến trình được bảo vệ cô lập vùng nhớ; các luồng trong một tiến trình chia sẻ chung heap, biến toàn cục nhưng có stack riêng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 6
**Hệ điều hành thời gian thực (RTOS - Real-Time Operating System) khác biệt căn bản với hệ điều hành thông thường (General Purpose OS) ở đặc tính nào?**

- **A.** Phản hồi tiền định trong thời gian nghiêm ngặt
- **B.** Hoạt động không cần bộ đếm thời gian hệ thống
- **C.** Chỉ hỗ trợ thực thi trên vi xử lý đơn lõi
- **D.** Luôn tích hợp sẵn giao diện đồ họa người dùng

> **Đáp án:** **A**  
> **Giải thích:** Điểm cốt lõi của RTOS không phải là chạy nhanh nhất, mà là hành vi thời gian có thể dự đoán chính xác tuyệt đối.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 7
**Khái niệm 'Hệ thống Thời gian thực Cứng' (Hard Real-Time System) có nghĩa là gì?**

- **A.** Hệ thống bọc trong lớp vỏ kim loại kiên cố
- **B.** Hệ thống chỉ lưu trữ trên ổ đĩa từ tính cứng
- **C.** Hệ thống bảo đảm không bao giờ phát sinh lỗi
- **D.** Trễ hạn thời gian dẫn tới sự cố thảm họa

> **Đáp án:** **D**  
> **Giải thích:** Trong hệ thống Hard Real-Time, việc trả về kết quả đúng nhưng muộn về mặt thời gian cũng bị coi là một lỗi nghiêm trọng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 8
**Khái niệm 'Hệ thống Thời gian thực Mềm' (Soft Real-Time System) được hiểu là gì?**

- **A.** Hệ thống không tích hợp vi xử lý điều khiển
- **B.** Hệ thống gia công từ vật liệu polyme dẻo
- **C.** Trễ hạn thời gian chỉ làm giảm chất lượng
- **D.** Hệ thống chỉ xử lý văn bản phi cấu trúc

> **Đáp án:** **C**  
> **Giải thích:** Ví dụ như việc truyền tải gói tin video/âm thanh: trễ vài khung hình chỉ gây giật lag chứ không gây sụp đổ hệ thống.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 9
**Khái niệm 'Tính tiền định' (Determinism) của một hệ điều hành nhúng phản ánh tính chất nào?**

- **A.** Thời gian phản hồi luôn xác định trước
- **B.** Thời gian phản hồi phụ thuộc nhiệt độ chip
- **C.** Hệ thống không cho phép nạp lại phần mềm
- **D.** Hệ thống có thể tự tối ưu thời gian thực thi

> **Đáp án:** **A**  
> **Giải thích:** Tính tiền định bảo đảm các chu kỳ tính toán điều khiển luôn hoàn tất trong khung thời gian định sẵn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 10
**Độ trễ ngắt (Interrupt Latency) trong hệ điều hành thời gian thực được định nghĩa là khoảng thời gian nào?**

- **A.** Thời gian từ lúc cấp nguồn đến khi chip khởi động hoàn tất
- **B.** Thời gian từ lúc xuất hiện ngắt đến khi hàm ISR thực thi
- **C.** Thời gian truyền hoàn tất một gói tin dữ liệu qua mạng
- **D.** Thời gian sạc đầy khối pin tích lũy năng lượng vệ tinh

> **Đáp án:** **B**  
> **Giải thích:** Độ trễ ngắt cực ngắn là yêu cầu sống còn để RTOS có thể ứng phó tức thì với các sự kiện vật lý bất ngờ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 11
**Cơ chế lập lịch 'Tiếm quyền theo độ ưu tiên' (Preemptive Priority-based Scheduling) hoạt động theo nguyên tắc nào?**

- **A.** Tác vụ ưu tiên cao hơn sẽ lập tức chiếm quyền CPU
- **B.** Tác vụ nào vào trước thì được chạy trước tới khi xong
- **C.** Tác vụ chỉ được chạy khi có tín hiệu kích hoạt ngoại vi
- **D.** Toàn bộ tác vụ được cấp phát quyền thực thi bình đẳng nhau

> **Đáp án:** **A**  
> **Giải thích:** Preemptive scheduling bảo đảm các tác vụ khẩn cấp (như cảnh báo sụt nguồn, an toàn quỹ đạo) luôn được xử lý ngay lập tức.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 12
**Khái niệm 'Đồng hồ đếm nhịp hệ điều hành' (SysTick / RTOS Tick) có chức năng gì trong RTOS?**

- **A.** Điều khiển bước dịch chuyển góc của anten
- **B.** Đếm số chu kỳ quay quanh quỹ đạo vệ tinh
- **C.** Đo nhiệt độ bề mặt vỏ chip điều khiển C&DH
- **D.** Ngắt định thời kích hoạt bộ lập lịch hệ điều hành

> **Đáp án:** **D**  
> **Giải thích:** Mỗi nhịp Tick (thường cấu hình 1ms hoặc 10ms), bộ lập lịch thức dậy để cập nhật bộ đếm trễ và chuyển đổi ngữ cảnh nếu cần.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 13
**Hiện tượng tràn ngăn xếp (Stack Overflow) trong hệ điều hành nhúng dẫn đến hậu quả tai hại nào?**

- **A.** Ghi đè bộ nhớ gây lỗi hệ điều hành và reset chip
- **B.** Làm hư hỏng vĩnh viễn cấu trúc bóng bán dẫn
- **C.** Làm tăng dung lượng lưu trữ của bộ nhớ RAM
- **D.** Làm sai lệch tần số dao động thạch anh ngoại

> **Đáp án:** **A**  
> **Giải thích:** Tràn stack là một trong những lỗi phần mềm nhúng nguy hiểm và khó gỡ rối nhất.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 14
**Trong kiến trúc C&DH của CubeSat, khái niệm 'Housekeeping Telemetry' đề cập đến nhóm thông tin nào?**

- **A.** Dữ liệu điện áp, dòng điện và nhiệt độ bo mạch vệ tinh
- **B.** Dữ liệu bản đồ độ cao địa hình truyền từ cảm biến radar
- **C.** Tín hiệu âm thanh và tin nhắn số thu từ trạm mặt đất
- **D.** Ảnh màu độ phân giải cao thu từ máy ảnh tải trọng quang

> **Đáp án:** **A**  
> **Giải thích:** Housekeeping cung cấp các chỉ số sinh tồn của vệ tinh để đội ngũ điều hành mặt đất đánh giá tình trạng kỹ thuật.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 15
**Khái niệm 'Payload Data' (Dữ liệu tải trọng khoa học) trong C&DH khác với Housekeeping Data ở điểm nào?**

- **A.** Dữ liệu tải trọng chỉ có dung lượng tối đa một byte
- **B.** Dữ liệu tải trọng không bao giờ được ghi vào thẻ nhớ
- **C.** Dữ liệu tải trọng có mức ưu tiên xử lý thấp nhất
- **D.** Dữ liệu sinh ra từ nhiệm vụ hoặc cảm biến chuyên dụng

> **Đáp án:** **D**  
> **Giải thích:** Payload Data là sản phẩm đầu ra chính của sứ mệnh, thường có dung lượng lớn hơn nhiều so với telemetry kỹ thuật.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 16
**Tại sao trên vệ tinh, phân hệ C&DH bắt buộc phải gắn dấu thời gian (Timestamp) vào từng gói bản tin telemetry?**

- **A.** Để xác định thời điểm tắt nguồn hệ thống nhằm tiết kiệm
- **B.** Để thực hiện giải thuật mã hóa dữ liệu bảo mật đường truyền
- **C.** Để đối chiếu dữ liệu đo đạc với tọa độ vệ tinh trên quỹ đạo
- **D.** Để định dạng khung bản tin theo chuẩn truyền thông công nghiệp

> **Đáp án:** **C**  
> **Giải thích:** Dữ liệu không gian vô giá trị nếu không biết chính xác nó được đo tại tọa độ và thời điểm nào trên quỹ đạo.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 17
**Thời gian hệ thống (Mission Elapsed Time - MET) trên vệ tinh CubeSat thường được tính bắt đầu từ mốc thời gian nào?**

- **A.** Từ thời điểm hoàn thành biên dịch gói mã nguồn phần mềm
- **B.** Từ thời điểm tên lửa đẩy bắt đầu rời bệ phóng tại bãi
- **C.** Từ mốc chuẩn thời gian Unix epoch ngày 1 tháng 1 năm 1970
- **D.** Từ khoảnh khắc vệ tinh được cấp nguồn hoạt động trên quỹ đạo

> **Đáp án:** **D**  
> **Giải thích:** MET đếm số giây hoặc mili-giây kể từ khoảnh khắc sinh tử khi vệ tinh bắt đầu sự sống tự lập ngoài không gian.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 18
**Khái niệm 'Real-Time Clock' (RTC - Đồng hồ thời gian thực) trên bo mạch C&DH có chức năng gì?**

- **A.** Duy trì ngày giờ chuẩn quốc tế ngay cả khi mất nguồn
- **B.** Đo thời gian hoạt động của động cơ đẩy trong pha tách tầng
- **C.** Điều chế độ rộng xung xung nhịp cho giao tiếp ngoại vi
- **D.** Đo tốc độ xung nhịp dao động của vi điều khiển trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Chip RTC độc lập (chạy pin nút hoặc siêu tụ) bảo đảm vệ tinh không bị mất mốc thời gian lịch sử khi toàn bộ hệ thống bị sập nguồn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 19
**Bộ nhớ lưu trữ dữ liệu dung lượng lớn (Mass Storage) trong phân hệ C&DH của CubeSat nhỏ thường sử dụng loại linh kiện nào?**

- **A.** Ổ lưu trữ cơ học với phiến đĩa quay tốc độ cao
- **B.** Đĩa quang lưu trữ dữ liệu dạng đọc ghi nhiều lần
- **C.** Băng từ tính cuộn chuyên dụng cho môi trường rung động
- **D.** Thẻ nhớ Flash chuẩn MicroSD hoặc chip nhớ rắn eMMC

> **Đáp án:** **D**  
> **Giải thích:** Bộ nhớ bán dẫn thể rắn (Flash) không có chi tiết chuyển động cơ học, chịu được rung động cực mạnh của tên lửa đẩy.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 20
**Mối nguy hại lớn nhất của môi trường bức xạ vũ trụ đối với bộ nhớ Flash (như thẻ nhớ MicroSD) là gì?**

- **A.** Phá hủy lớp vỏ polyme bảo vệ bên ngoài của linh kiện
- **B.** Hạt ion năng lượng cao làm lật bit dữ liệu ngẫu nhiên
- **C.** Ngưng tụ độ ẩm làm suy giảm cách điện giữa các chân
- **D.** Khử từ tính trên các lớp lưu trữ thông tin nhị phân

> **Đáp án:** **B**  
> **Giải thích:** SEU có thể làm sai lệch nội dung một byte trong bảng FAT hoặc dữ liệu đo đạc; đòi hỏi phải có mã sửa lỗi ECC.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 21
**Khái niệm 'Bad Block Management' trong chip nhớ Flash của phân hệ C&DH là gì?**

- **A.** Quản lý vị trí địa lý của các trạm thu phát trên mặt đất
- **B.** Đánh dấu khối nhớ hỏng để không ghi dữ liệu vào ô nhớ đó
- **C.** Tự động nâng xung nhịp vi xử lý khi tải hệ thống tăng cao
- **D.** Xóa định kỳ các tệp dữ liệu đã được truyền thành công

> **Đáp án:** **B**  
> **Giải thích:** Bộ điều khiển nhớ tự động ánh xạ vùng nhớ hỏng sang các sector dự phòng nhằm duy trì độ tin cậy lưu trữ lâu dài.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 22
**Tại sao trong thiết kế phần mềm vệ tinh, việc ghi dữ liệu vào thẻ nhớ liên tục từng byte một (byte-by-byte) là một sai lầm lớn?**

- **A.** Thẻ nhớ chỉ hỗ trợ thao tác ghi theo khối 512 byte
- **B.** Dữ liệu từng byte sẽ bị biến mất khi mất nguồn đột ngột
- **C.** Tốc độ tản nhiệt của khối bán dẫn bị suy giảm nghiêm trọng
- **D.** Gây lãng phí năng lượng và làm giảm tuổi thọ chip nhớ

> **Đáp án:** **D**  
> **Giải thích:** Bộ nhớ Flash ghi theo từng khối; nên gom dữ liệu vào bộ đệm RAM rồi ghi một khối lớn để tối ưu hiệu suất và tuổi thọ thẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 23
**Hiện tượng 'Flash Wear-Out' (Mòn tế bào nhớ Flash) xảy ra do đặc tính vật lý nào của chất bán dẫn?**

- **A.** Tự động nén kích thước tệp nhật ký khi thẻ nhớ bị đầy
- **B.** Phân bổ ngẫu nhiên dữ liệu vào các ô nhớ chưa định dạng
- **C.** Phân phối chu kỳ ghi đồng đều lên toàn bộ các ô nhớ Flash
- **D.** Tăng tốc độ truyền tải trên bus dữ liệu nối tiếp SPI

> **Đáp án:** **B**  
> **Giải thích:** Lớp oxit cách điện cổng nổi (Floating Gate) suy thoái dần sau mỗi lần đặt điện áp cao để xóa khối dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 24
**Thuật toán 'Wear Leveling' (Cân bằng độ mòn) trong bộ điều khiển thẻ nhớ Flash có nhiệm vụ gì?**

- **A.** Tự động nén kích thước tệp nhật ký khi thẻ nhớ bị đầy
- **B.** Phân bổ ngẫu nhiên dữ liệu vào các ô nhớ chưa định dạng
- **C.** Phân phối chu kỳ ghi đồng đều lên toàn bộ các ô nhớ Flash
- **D.** Mở rộng không gian địa chỉ cho các tệp dữ liệu lớn

> **Đáp án:** **C**  
> **Giải thích:** Wear Leveling bảo đảm tuổi thọ của thẻ nhớ được kéo dài tối đa trên suốt vòng đời sứ mệnh.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 25
**Cấu trúc của một gói tin (Packet) viễn lệnh tiêu chuẩn thường bao gồm những trường dữ liệu cơ bản nào?**

- **A.** Chỉ có nội dung văn bản
- **B.** Header, Payload, và Trailer/Footer
- **C.** Một tấm ảnh màu
- **D.** Địa chỉ email của kỹ sư

> **Đáp án:** **B**  
> **Giải thích:** Header định danh gói tin, Payload mang thông điệp nghiệp vụ, và trường CRC bảo đảm tính toàn vẹn gói tin trước khi thực thi.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 26
**Nếu trường mã kiểm tra CRC của một gói tin viễn lệnh nhận được từ mặt đất không trùng khớp với mã tính toán tại vệ tinh, C&DH phải làm gì?**

- **A.** Chuyển tiếp lệnh điều khiển sang phân hệ phân phối nguồn
- **B.** Hủy bỏ gói tin lỗi và ghi cảnh báo vào nhật ký hệ thống
- **C.** Khởi động lại toàn bộ máy tính nhúng OBC ngay lập tức
- **D.** Tự động thực thi lệnh và bỏ qua sai lệch mã kiểm tra

> **Đáp án:** **B**  
> **Giải thích:** Thực thi một lệnh bị sai lệch bit có thể dẫn đến hậu quả thảm khốc như tắt vĩnh viễn phân hệ nguồn hoặc làm mất định hướng vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 27
**Khái niệm 'Command Counter' (Bộ đếm số lượng lệnh) trong gói tin viễn lệnh có tác dụng an toàn nào?**

- **A.** Chống tấn công phát lại và ngăn thực thi lệnh lặp lại
- **B.** Đếm số lượng ký tự văn bản gửi từ trạm điều khiển mặt đất
- **C.** Xóa bộ nhớ đệm nhận dữ liệu sau mỗi phiên kết nối vô tuyến
- **D.** Tăng tốc độ di chuyển của vệ tinh trên quỹ đạo hoạt động

> **Đáp án:** **A**  
> **Giải thích:** Vệ tinh chỉ chấp nhận các gói tin có số thứ tự tăng dần đều, loại bỏ hoàn toàn các gói tin cũ bị phát lặp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 28
**Trong phân hệ C&DH, chế độ vận hành 'Safe Mode' được thiết lập nhằm mục đích gì?**

- **A.** Định dạng lại hệ thống tệp tin trên toàn bộ các bộ nhớ
- **B.** Tối giản hoạt động để giữ vệ tinh sống và duy trì liên lạc
- **C.** Kích hoạt máy phát vô tuyến hoạt động ở công suất cực đại
- **D.** Bật cảm biến quang học chụp ảnh toàn cảnh bề mặt Trái Đất

> **Đáp án:** **B**  
> **Giải thích:** Safe Mode là trạng thái bảo vệ an toàn cao nhất khi hệ thống phát hiện các sự cố bất thường về nguồn hoặc cảm biến.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 29
**Tại sao kiến trúc phần mềm C&DH thường chia thành nhiều tầng (Layered Architecture: Driver -> OS -> Service -> Application)?**

- **A.** Giảm tốc độ thực thi của vi điều khiển để tiết kiệm pin
- **B.** Tối ưu hóa kích thước mã nhị phân khi nạp vào flash
- **C.** Mở rộng số dòng mã nguồn để đáp ứng tiêu chuẩn phần mềm
- **D.** Tách biệt phần cứng và nghiệp vụ, giúp mã dễ bảo trì hơn

> **Đáp án:** **D**  
> **Giải thích:** Kiến trúc phân tầng trừu tượng hóa các chi tiết phần cứng ngoại vi khỏi thuật toán điều khiển cấp cao.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 30
**Trong phân hệ C&DH, bảng cấu hình tham số hệ thống (Configuration Parameters) nên được lưu trữ tại đâu để an toàn?**

- **A.** Trong vùng nhớ bất biến có phân vùng bản sao lưu dự phòng
- **B.** Trong biến cục bộ của hàm khởi tạo ứng dụng hệ điều hành
- **C.** Trong thanh ghi tạm thời của bộ chuyển đổi tương tự số
- **D.** Trong bộ đệm truyền thông nối tiếp của mô đun thu phát

> **Đáp án:** **A**  
> **Giải thích:** Lưu trữ có dự phòng bảo đảm nếu một phân vùng cấu hình bị hỏng do bức xạ thì hệ thống vẫn có thể nạp lại bản sao an toàn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 31
**Khái niệm 'File System Corruption' (Hỏng hệ thống tệp) xảy ra khi nào trên thẻ nhớ của vệ tinh?**

- **A.** Mất nguồn đột ngột khi đang ghi bảng FAT hoặc thư mục gốc
- **B.** Nhiệt độ môi trường hoạt động của bo mạch đạt ngưỡng định mức
- **C.** Dung lượng bộ nhớ lưu trữ vượt quá giới hạn thiết kế ban đầu
- **D.** Bề mặt tiếp xúc của khe cắm thẻ nhớ bị tích tụ bụi bẩn cơ học

> **Đáp án:** **A**  
> **Giải thích:** Mất nguồn giữa chừng làm bảng FAT mất tính đồng bộ với dữ liệu thực tế trên các cluster, khiến hệ thống tệp không thể đọc được.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 32
**Để giảm thiểu nguy cơ hỏng hệ thống tệp FAT32 khi nguồn điện vệ tinh chập chờn, kỹ thuật lập trình an toàn là gì?**

- **A.** Mở tệp một lần duy nhất khi khởi động và duy trì mở liên tục
- **B.** Vô hiệu hóa hoàn toàn tính năng lưu trữ nhật ký vào bộ nhớ
- **C.** Tăng tần suất ghi dữ liệu lên nhiều lần trong mỗi chu kỳ
- **D.** Mở tệp khi cần, ghi nhanh, xả đệm bằng flush và đóng tệp sớm

> **Đáp án:** **D**  
> **Giải thích:** Thu hẹp tối đa khoảng thời gian tệp ở trạng thái mở giúp triệt tiêu xác suất sự cố mất nguồn trùng với lúc đang ghi Flash.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 33
**Khái niệm 'Cluster' trong định dạng hệ thống tệp FAT32 của thẻ nhớ là gì?**

- **A.** Một mạch tích hợp chuyên dụng trên bo máy tính nhúng vệ tinh
- **B.** Nhóm sector liên tiếp dùng làm đơn vị cấp phát không gian tệp
- **C.** Chuỗi ký tự định danh phiên bản của hệ thống tệp tin lưu trữ
- **D.** Giao diện kết nối nạp chương trình chuẩn JTAG của vi điều khiển

> **Đáp án:** **B**  
> **Giải thích:** FAT32 quản lý không gian đĩa theo các Cluster; mỗi tệp dù chỉ chứa 1 byte cũng sẽ chiếm tối thiểu một Cluster trọn vẹn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 34
**Sector vật lý tiêu chuẩn của thẻ nhớ MicroSD thông thường có kích thước là bao nhiêu byte?**

- **A.** 1024 byte
- **B.** 512 byte
- **C.** 64 byte
- **D.** 4096 byte

> **Đáp án:** **B**  
> **Giải thích:** Chuẩn phần cứng thẻ nhớ SD kinh điển đọc và ghi dữ liệu theo từng khối sector 512 bytes.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 35
**Bảng phân bổ tệp FAT (File Allocation Table) trong định dạng FAT32 lưu giữ thông tin cốt lõi nào?**

- **A.** Tệp ảnh nhị phân chứa ảnh chụp bề mặt Trái Đất của tải trọng
- **B.** Bản đồ liên kết chuỗi cluster của từng tệp và cluster trống
- **C.** Tốc độ xung nhịp giao tiếp trên bus nối tiếp của vi điều khiển
- **D.** Khóa bảo mật phần cứng dùng để mã hóa dữ liệu trên phân vùng thẻ

> **Đáp án:** **B**  
> **Giải thích:** FAT là danh sách liên kết trỏ từ cluster này sang cluster tiếp theo cho đến khi gặp dấu hiệu kết thúc tệp (EOF).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 36
**Khi thẻ nhớ MicroSD bị đầy 100% dung lượng trên quỹ đạo, chiến lược xử lý an toàn của phần mềm C&DH là gì?**

- **A.** Mở rộng dung lượng phần cứng của thẻ nhớ bằng vi lệnh từ xa
- **B.** Kích hoạt cơ cấu phóng cơ học để đẩy bộ nhớ ra ngoài không gian
- **C.** Ngắt nguồn điện của phân hệ C&DH và chấm dứt sứ mệnh vệ tinh
- **D.** Tự động xóa tệp cũ nhất hoặc dừng ghi tệp mới và báo về trạm

> **Đáp án:** **D**  
> **Giải thích:** Quản lý vòng đời lưu trữ chủ động ngăn ngừa lỗi tràn đĩa làm treo các tác vụ thu thập dữ liệu sống còn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 37
**Khái niệm 'Data Compression' (Nén dữ liệu) trong C&DH mang lại lợi thế chiến lược nào khi truyền tin qua vệ tinh?**

- **A.** Tăng cường điện áp cung cấp cho các nhánh tải trọng tiêu thụ
- **B.** Giảm kích thước tệp giúp tiết kiệm băng thông và thời gian phát
- **C.** Cải thiện độ sắc nét và dải tương phản của ảnh chụp viễn thám
- **D.** Giảm nhiệt độ hoạt động của bộ khuếch đại công suất vô tuyến

> **Đáp án:** **B**  
> **Giải thích:** Nén dữ liệu (như gzip, run-length hoặc thuật toán nén ảnh) tối ưu hóa tối đa lượng thông tin gửi về trạm trong vài phút qua trạm.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 38
**Trong kiến trúc C&DH, nguyên tắc 'Fail-Safe' có ý nghĩa thiết kế nào sau đây?**

- **A.** Tự động chuyển về trạng thái an toàn xác định trước khi có sự cố
- **B.** Đảm bảo toàn bộ linh kiện phần cứng hoạt động không bao giờ hỏng
- **C.** Tự kích hoạt lệnh hủy phần mềm điều khiển khi phát hiện sai số
- **D.** Tự động sửa chữa các lỗi vật lý trên đường mạch in của hệ thống

> **Đáp án:** **A**  
> **Giải thích:** Fail-Safe bảo đảm ngay cả khi có linh kiện hỏng, vệ tinh vẫn giữ nguyên vẹn khả năng phục hồi hoặc không phá hủy các phân hệ khác.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 39
**Giao thức truyền thông SPI (Serial Peripheral Interface) là chuẩn giao tiếp có đặc tính cơ bản nào?**

- **A.** Truyền thông nối tiếp bất đồng bộ sử dụng một dây tín hiệu duy nhất
- **B.** Truyền thông không dây tầm xa hoạt động trên băng tần vi ba công cộng
- **C.** Truyền thông đồng bộ, nối tiếp, song công toàn phần Master-Slave
- **D.** Truyền thông song song băng thông rộng với bus dữ liệu 32-bit tốc độ cao

> **Đáp án:** **C**  
> **Giải thích:** SPI là giao tiếp bus 4 dây tốc độ cao với xung nhịp đồng bộ do thiết bị Master phát ra.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 40
**Bốn đường tín hiệu vật lý tiêu chuẩn của một bus truyền thông SPI bao gồm những đường nào?**

- **A.** TX, RX, VCC, GND
- **B.** MOSI, MISO, SCK, và CS
- **C.** D+, D-, VBUS, GND
- **D.** SDA, SCL, INT, RST

> **Đáp án:** **B**  
> **Giải thích:** 4 đường SPI: Master Out Slave In (MOSI), Master In Slave Out (MISO), Serial Clock (SCK), và Chip Select (CS).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 41
**Đường tín hiệu 'MOSI' (Master Out Slave In) trong giao tiếp SPI có nhiệm vụ chức năng gì?**

- **A.** Lựa chọn chip Slave cần giao tiếp trên bus SPI đa điểm
- **B.** Truyền các bit dữ liệu từ Master sang thiết bị Slave
- **C.** Truyền các bit dữ liệu từ Slave phản hồi về Master
- **D.** Cung cấp xung nhịp đồng bộ cho quá trình dịch bit

> **Đáp án:** **B**  
> **Giải thích:** Dữ liệu điều khiển hoặc dữ liệu ghi được Master phát tuần tự từng bit ra chân MOSI đến chân dữ liệu vào của Slave.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 42
**Đường tín hiệu 'MISO' (Master In Slave Out) trong giao tiếp SPI đảm nhận chức năng nào?**

- **A.** Cung cấp điện áp nguồn hoạt động cho các linh kiện ngoại vi
- **B.** Truyền tín hiệu dữ liệu điều khiển từ Master sang cho Slave
- **C.** Truyền các bit dữ liệu từ Slave phản hồi về cho Master
- **D.** Kích hoạt tín hiệu ngắt phần cứng khi có dữ liệu mới đến

> **Đáp án:** **C**  
> **Giải thích:** Khi Master tạo xung Clock, Slave xuất dữ liệu trên đường MISO để Master đọc vào thanh ghi nội bộ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 43
**Đường tín hiệu 'SCK' (Serial Clock) trong giao tiếp SPI do thiết bị nào tạo ra và điều khiển?**

- **A.** Do trạm mặt đất điều khiển
- **B.** Do thiết bị Slave tự tạo ra
- **C.** Luôn luôn do thiết bị Master tạo ra
- **D.** Do đường nguồn tự dao động

> **Đáp án:** **C**  
> **Giải thích:** Master là thực thể duy nhất làm chủ tốc độ truyền và phát xung nhịp SCK đồng bộ cho toàn bộ bus.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 44
**Đường tín hiệu 'CS' (Chip Select) hoặc 'SS' (Slave Select) tích cực ở mức logic nào để chọn một thiết bị Slave?**

- **A.** Không phụ thuộc mức điện áp
- **B.** Tích cực ở mức điện áp trôi nổi
- **C.** Tích cực ở mức logic LOW
- **D.** Tích cực ở mức logic HIGH

> **Đáp án:** **C**  
> **Giải thích:** Đường CS tuân theo quy ước Active-Low; Master kéo chân CS của Slave nào xuống 0V thì Slave đó mới lắng nghe và phản hồi bus.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 45
**Khi chân CS của một thiết bị Slave ở mức logic HIGH (không được chọn), chân MISO của thiết bị Slave đó sẽ ở trạng thái nào?**

- **A.** Duy trì mức điện áp logic cao liên tục trên toàn bộ đường dây
- **B.** Chuyển về trạng thái trở kháng cao để tránh xung đột bus
- **C.** Phát các xung nhịp ngẫu nhiên để đồng bộ hóa mạch định thời
- **D.** Nối tắt trực tiếp đường tín hiệu xuống mức mass của hệ thống

> **Đáp án:** **B**  
> **Giải thích:** Ngắt ngõ ra về trạng thái High-Z cho phép nhiều Slave cùng nối chung đường MISO mà không bị chập ngắn mạch.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 46
**Nguyên lý truyền dữ liệu song công toàn phần (Full-duplex) của SPI dựa trên cấu trúc phần cứng nào giữa Master và Slave?**

- **A.** Hai cuộn cảm biến thiên ghép nối từ tính trên đường truyền tín hiệu
- **B.** Cáp quang đơn mốt truyền dẫn tín hiệu quang học tốc độ cao nội bộ
- **C.** Hai bộ nhớ đệm bán dẫn độc lập hoạt động theo cơ chế hàng đợi FIFO
- **D.** Hai thanh ghi dịch liên kết vòng tròn qua đường MOSI và MISO

> **Đáp án:** **D**  
> **Giải thích:** Mỗi xung SCK đẩy 1 bit từ thanh ghi Master sang Slave qua MOSI, đồng thời đẩy 1 bit từ thanh ghi Slave sang Master qua MISO.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 47
**Trong giao thức SPI, để đọc về một byte dữ liệu từ thiết bị Slave, Master bắt buộc phải làm gì?**

- **A.** Phát một byte ra MOSI để tạo xung SCK đẩy dữ liệu về
- **B.** Kéo đường tín hiệu Chip Select lên mức logic cao liên tục
- **C.** Chờ đợi thụ động trên bus dữ liệu cho đến khi Slave gửi byte
- **D.** Ngắt điện áp nguồn cung cấp cho mô đun ngoại vi đang kết nối

> **Đáp án:** **A**  
> **Giải thích:** Vì xung SCK do Master phát, muốn nhận byte từ Slave thì Master phải truyền đi một byte rỗng (Dummy Byte).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 48
**Bốn chế độ hoạt động (SPI Modes: Mode 0, 1, 2, 3) của giao tiếp SPI được định nghĩa dựa trên hai thông số cấu hình nào?**

- **A.** Địa chỉ Slave và số bit dữ liệu
- **B.** Điện áp nguồn và loại cáp
- **C.** Tốc độ truyền và độ dài dây dẫn
- **D.** Cực tính xung nhịp và Pha xung nhịp

> **Đáp án:** **D**  
> **Giải thích:** CPOL quy định mức logic của SCK khi nghỉ; CPHA quy định sườn xung nào (sườn 1 hay sườn 2) được dùng để lấy mẫu dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 49
**Thông số 'CPOL = 0' trong cấu hình SPI có ý nghĩa kỹ thuật gì?**

- **A.** Bus SPI bị tắt hoàn toàn
- **B.** Đường xung nhịp SCK luôn ở mức HIGH khi không truyền dữ liệu
- **C.** Xung nhịp có tần số 0 Hz
- **D.** Đường xung nhịp SCK ở mức logic LOW khi ở trạng thái nghỉ

> **Đáp án:** **D**  
> **Giải thích:** CPOL = 0 quy định trạng thái nhàn rỗi của SCK là mức thấp; CPOL = 1 quy định mức nhàn rỗi là mức cao.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 50
**Thông số 'CPHA = 0' trong cấu hình SPI có ý nghĩa kỹ thuật gì?**

- **A.** Dữ liệu được giữ cố định và không lấy mẫu trong toàn bộ chu kỳ xung
- **B.** Dữ liệu được lấy mẫu tại sườn chuyển tiếp thứ nhất của chu kỳ xung nhịp
- **C.** Dữ liệu được chuyển dịch liên tục mà không đồng bộ theo sườn xung nhịp
- **D.** Dữ liệu được lấy mẫu tại sườn chuyển tiếp thứ hai của chu kỳ xung nhịp

> **Đáp án:** **B**  
> **Giải thích:** CPHA = 0 lấy mẫu ngay tại sườn xung đầu tiên; CPHA = 1 lấy mẫu tại sườn xung thứ hai của chu kỳ clock.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 51
**Chế độ 'SPI Mode 0' có thông số cấu hình CPOL và CPHA cụ thể là bao nhiêu?**

- **A.** CPOL = 0, CPHA = 0
- **B.** CPOL = 0, CPHA = 1
- **C.** CPOL = 1, CPHA = 1
- **D.** CPOL = 1, CPHA = 0

> **Đáp án:** **A**  
> **Giải thích:** Mode 0 là chế độ phổ biến nhất: SCK nghỉ ở mức LOW và dữ liệu được chốt lấy mẫu ở sườn xung lên (Rising Edge).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 52
**Chế độ 'SPI Mode 3' có thông số cấu hình CPOL và CPHA là gì?**

- **A.** CPOL = 1, CPHA = 1
- **B.** CPOL = 0, CPHA = 1
- **C.** CPOL = 1, CPHA = 0
- **D.** CPOL = 0, CPHA = 0

> **Đáp án:** **A**  
> **Giải thích:** Mode 3 có SCK nghỉ ở mức HIGH và dữ liệu cũng được lấy mẫu ở sườn xung lên (sườn chuyển tiếp từ LOW lên HIGH).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 53
**Hầu hết các module thẻ nhớ MicroSD tiêu chuẩn hoạt động ở chế độ SPI nào sau đây?**

- **A.** Chỉ hoạt động ở Mode 1
- **B.** Không hỗ trợ SPI
- **C.** Chỉ hoạt động ở Mode 2
- **D.** SPI Mode 0

> **Đáp án:** **D**  
> **Giải thích:** Thẻ nhớ SD chấp nhận cả SPI Mode 0 (CPOL=0, CPHA=0) và Mode 3 (CPOL=1, CPHA=1) một cách linh hoạt.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 54
**Ưu điểm nổi bật nhất của giao thức SPI so với giao thức I2C là gì?**

- **A.** Giao thức SPI sử dụng ít đường dây kết nối vật lý hơn chuẩn I2C
- **B.** SPI đạt tốc độ truyền vượt trội và không cần điện trở kéo lên
- **C.** SPI hỗ trợ đánh địa chỉ mềm linh hoạt hơn rất nhiều so với I2C
- **D.** SPI cho phép cự ly truyền dẫn xa hàng trăm mét trên cáp xoắn đôi

> **Đáp án:** **B**  
> **Giải thích:** SPI sử dụng mạch lái Push-Pull ngõ ra tích cực, triệt tiêu độ trễ sườn lên RC của điện trở kéo, đạt tốc độ cực cao.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 55
**Nhược điểm chính của giao thức SPI khi cần kết nối với nhiều thiết bị ngoại vi trên cùng một bo mạch là gì?**

- **A.** Tốn nhiều dây vì mỗi Slave cần một đường CS riêng biệt
- **B.** Tốc độ truyền tải dữ liệu bị suy giảm một nửa so với chuẩn I2C
- **C.** Không hỗ trợ khả năng truyền dữ liệu nhị phân dung lượng lớn
- **D.** Đòi hỏi mỗi thiết bị ngoại vi phải có bộ tạo dao động thạch anh

> **Đáp án:** **A**  
> **Giải thích:** Để điều khiển N thiết bị Slave độc lập, Master cần $3 + N$ đường dây tín hiệu kết nối.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 56
**Nếu trên bo mạch có 4 thiết bị SPI Slave kết nối độc lập với vi điều khiển, tổng số đường tín hiệu GPIO cần dùng tối thiểu là:**

- **A.** 4 đường
- **B.** 8 đường
- **C.** 7 đường
- **D.** 16 đường

> **Đáp án:** **C**  
> **Giải thích:** Công thức: $3 + 4 = 7$ chân GPIO. Ba đường tín hiệu chung được mắc song song đến tất cả các thiết bị.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 57
**Cấu hình 'Nối tiếp vòng tròn' (Daisy-Chain) trong giao tiếp SPI có đặc điểm kết nối nào?**

- **A.** MISO của Slave trước nối vào MOSI của Slave sau, chung chân CS
- **B.** Loại bỏ hoàn toàn đường xung nhịp SCK mà vẫn duy trì tính đồng bộ
- **C.** Mỗi thiết bị Slave tích hợp một bộ vi xử lý độc lập để điều phối
- **D.** Tất cả các đường tín hiệu phản hồi MISO được đấu nối song song nhau

> **Đáp án:** **A**  
> **Giải thích:** Daisy-chain cho phép điều khiển chuỗi hàng chục chip nối tiếp mà chỉ tốn đúng 1 chân CS duy nhất.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 58
**Trên vi điều khiển ESP32, khối ngoại vi SPI phần cứng nào thường được ánh xạ mặc định cho giao tiếp thẻ nhớ và người dùng?**

- **A.** I2S
- **B.** VSPI
- **C.** UART2
- **D.** FSPI

> **Đáp án:** **B**  
> **Giải thích:** ESP32 trang bị hai khối SPI khả dụng cho người dùng là HSPI và VSPI với các chân phần cứng mặc định tối ưu tốc độ cao.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 59
**Các chân GPIO mặc định của khối VSPI trên ESP32 theo chuẩn phần cứng là những chân nào?**

- **A.** GPIO 1, 3, 4, 5
- **B.** GPIO 34, 35, 36, 39
- **C.** GPIO 21, 22, 16, 17
- **D.** MOSI, MISO, SCK, và CS

> **Đáp án:** **D**  
> **Giải thích:** Cấu hình chân VSPI mặc định của ESP32: SCK = 18, MISO = 19, MOSI = 23, CS = 5.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 60
**Các chân GPIO mặc định của khối HSPI trên vi điều khiển ESP32 là những chân nào?**

- **A.** GPIO 0, 2, 4, 16
- **B.** GPIO 18, 19, 21, 22
- **C.** MOSI, MISO, SCK, và CS
- **D.** GPIO 25, 26, 27, 32

> **Đáp án:** **C**  
> **Giải thích:** Bộ điều khiển HSPI mặc định dùng các chân: SCK = 14, MISO = 12, MOSI = 13, CS = 15.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 61
**Điện áp làm việc danh định của thẻ nhớ MicroSD tiêu chuẩn hiện nay là bao nhiêu?**

- **A.** 5.0 V
- **B.** 3.3 V
- **C.** 12.0 V
- **D.** 1.2 V

> **Đáp án:** **B**  
> **Giải thích:** Thẻ nhớ MicroSD hoạt động thuần túy ở mức điện áp 3.3V (dải chấp nhận từ 2.7V đến 3.6V).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 62
**Nếu sử dụng kit vi điều khiển 5V kết nối trực tiếp với thẻ nhớ MicroSD 3.3V mà không có mạch chuyển đổi mức logic (Logic Level Shifter), hậu quả là gì?**

- **A.** Không gây ra bất kỳ ảnh hưởng nào tới hoạt động của bo mạch
- **B.** Thẻ nhớ tự động định dạng lại toàn bộ cấu trúc hệ thống tệp
- **C.** Hỏng chip điều khiển bên trong thẻ nhớ do quá áp vượt ngưỡng
- **D.** Thẻ nhớ hoạt động ở xung nhịp cao hơn và cải thiện tốc độ ghi

> **Đáp án:** **C**  
> **Giải thích:** Tín hiệu 5V từ chân Master sẽ đánh thủng mạch đệm ngõ vào 3.3V của bộ điều khiển thẻ nhớ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 63
**Khi cấp nguồn ban đầu cho thẻ nhớ MicroSD, thẻ nhớ mặc định khởi động ở chế độ truyền thông gốc nào?**

- **A.** Chế độ SPI Mode
- **B.** Chế độ SD Bus Mode
- **C.** Chế độ UART
- **D.** Chế độ USB

> **Đáp án:** **B**  
> **Giải thích:** Thẻ nhớ khởi động ở chế độ bus SDIO bản địa; cần có chuỗi lệnh đặc biệt để chuyển sang chế độ SPI.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 64
**Để ép thẻ nhớ MicroSD chuyển từ chế độ mặc định sang chế độ giao tiếp 'SPI Mode', trình tự điều khiển là gì?**

- **A.** Kéo đường CS lên mức logic cao và gửi lệnh ngắt nguồn hoạt động
- **B.** Gửi chuỗi ký tự ASCII bất kỳ qua đường truyền nối tiếp bất đồng bộ
- **C.** Nhấn nút định dạng phần cứng trên mô đun giao tiếp với thẻ nhớ
- **D.** Giữ CS ở mức LOW, gửi tối thiểu 74 xung SCK rồi gửi lệnh CMD0

> **Đáp án:** **D**  
> **Giải thích:** Chân CS bị kéo LOW khi nhận lệnh CMD0 là dấu hiệu để bộ điều khiển thẻ nhớ nhận biết và khóa vào chế độ SPI Mode.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 65
**Mã lệnh 'CMD0' (GO_IDLE_STATE) gửi qua SPI đến thẻ nhớ có giá trị hex đầy đủ của khung lệnh 6-byte là:**

- **A.** 0x40 0x00 0x00 0x00 0x00 0x95
- **B.** 0x55 0xAA 0x55 0xAA 0x55 0xAA
- **C.** 0x00 0x00 0x00 0x00 0x00 0x00
- **D.** 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF

> **Đáp án:** **A**  
> **Giải thích:** Khung lệnh SPI gồm: Byte bắt đầu (0x40 | 0), 4 byte đối số (0x00000000) và byte mã kiểm tra CRC hợp lệ là 0x95.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 66
**Tại sao byte mã kiểm tra CRC của lệnh CMD0 bắt buộc phải là `0x95` trong khi ở chế độ SPI các lệnh khác thường bỏ qua CRC?**

- **A.** Giá trị này do nhà sản xuất linh kiện chọn ngẫu nhiên trong thiết kế
- **B.** Ở chế độ ban đầu cờ CRC vẫn bật nên bắt buộc đúng CRC cho CMD0
- **C.** Đây là mã khóa bảo mật mặc định để mở quyền đọc ghi của thẻ MicroSD
- **D.** Byte dữ liệu này đóng vai trò kích hoạt mạch ổn áp nội bộ của thẻ

> **Đáp án:** **B**  
> **Giải thích:** Sau khi đã chuyển sang SPI Mode thành công, thẻ nhớ sẽ mặc định tắt tính năng kiểm tra CRC (trừ khi bật lại bằng CMD59).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 67
**Mã phản hồi (Response R1) trả về từ thẻ nhớ MicroSD sau khi tiếp nhận lệnh CMD0 thành công là bao nhiêu?**

- **A.** 0x01
- **B.** 0x00
- **C.** 0x05
- **D.** 0xFF

> **Đáp án:** **A**  
> **Giải thích:** Mã 0x01 xác nhận thẻ nhớ đã chấp nhận lệnh reset và đang ở trạng thái nghỉ (Idle), sẵn sàng cho quá trình khởi tạo tiếp theo.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 68
**Lệnh SPI nào sau đây được gửi lặp lại trong quá trình khởi tạo để kiểm tra và kích hoạt thẻ nhớ sẵn sàng hoạt động hoàn toàn?**

- **A.** CMD24
- **B.** CMD12
- **C.** CMD17
- **D.** CMD8 và ACMD41

> **Đáp án:** **D**  
> **Giải thích:** CMD8 kiểm tra dải điện áp làm việc (Interface Condition), sau đó chuỗi lệnh ACMD41 kích hoạt quá trình khởi động nội bộ của chip nhớ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 69
**Mã phản hồi R1 trả về giá trị nào xác nhận thẻ nhớ MicroSD đã hoàn tất khởi tạo và sẵn sàng thực hiện các lệnh đọc/ghi?**

- **A.** 0x00
- **B.** 0x01
- **C.** 0x55
- **D.** 0x08

> **Đáp án:** **A**  
> **Giải thích:** Giá trị 0x00 thông báo thẻ nhớ đã kích hoạt xong toàn bộ khối mạch nội bộ và sẵn sàng tiếp nhận các lệnh đọc ghi sector.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 70
**Lệnh SPI nào được sử dụng để đọc một sector đơn lẻ (512 byte) từ thẻ nhớ MicroSD?**

- **A.** CMD0
- **B.** CMD55
- **C.** CMD24
- **D.** CMD17

> **Đáp án:** **D**  
> **Giải thích:** Lệnh CMD17 kèm theo địa chỉ sector yêu cầu thẻ nhớ truyền về khối dữ liệu 512 bytes.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 71
**Lệnh SPI nào được sử dụng để ghi một khối dữ liệu sector đơn (512 byte) vào thẻ nhớ MicroSD?**

- **A.** CMD17
- **B.** CMD24
- **C.** CMD8
- **D.** CMD9

> **Đáp án:** **B**  
> **Giải thích:** Lệnh CMD24 bắt đầu quá trình ghi một sector dữ liệu từ Master vào tế bào Flash của thẻ nhớ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 72
**Tần số xung nhịp SCK tối đa cho phép trong giai đoạn khởi tạo ban đầu (Initialization Phase) của thẻ nhớ MicroSD là bao nhiêu?**

- **A.** 100 MHz
- **B.** 1 GHz
- **C.** Không quá 400 kHz
- **D.** Tối thiểu 20 MHz

> **Đáp án:** **C**  
> **Giải thích:** Chuẩn SD quy định tần số khởi tạo phải nằm trong dải 100 kHz - 400 kHz để bảo đảm khả năng tương thích với tất cả các dòng thẻ cũ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 73
**Sau khi thẻ nhớ MicroSD đã khởi tạo thành công vào chế độ truyền dữ liệu (Data Transfer Phase), tần số xung nhịp SCK có thể nâng lên tới mức nào?**

- **A.** 10 MHz đến 25 MHz
- **B.** 1200 bps đến 9600 bps
- **C.** 100 kHz đến 400 kHz
- **D.** 500 kHz đến 1 MHz

> **Đáp án:** **A**  
> **Giải thích:** Trong pha truyền dữ liệu, Master có thể đẩy xung nhịp SPI lên hàng chục MHz để đạt tốc độ ghi đọc nhiều Megabyte mỗi giây.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 74
**Khái niệm 'Thẻ nhớ SDSC' (Standard Capacity) theo phân loại của Hiệp hội Thẻ SD (SD Association) có dung lượng tối đa là bao nhiêu?**

- **A.** 2 TB
- **B.** 512 MB
- **C.** 2 Giga-byte
- **D.** 32 GB

> **Đáp án:** **C**  
> **Giải thích:** Chuẩn SDSC nguyên bản sử dụng địa chỉ byte 32-bit, giới hạn dung lượng lưu trữ tối đa ở mức 2 GB.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 75
**Khái niệm 'Thẻ nhớ SDHC' (High Capacity) bao gồm các loại thẻ nhớ có dải dung lượng trong khoảng nào?**

- **A.** Nhỏ hơn hoặc bằng 2 GB
- **B.** Từ trên 32 GB đến 2 TB
- **C.** Từ trên 2 GB đến 32 GB
- **D.** Lớn hơn 2 TB

> **Đáp án:** **C**  
> **Giải thích:** SDHC sử dụng địa chỉ theo từng khối Sector 512-byte (Block Addressing), hỗ trợ dải dung lượng từ 4 GB đến 32 GB.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 76
**Khái niệm 'Thẻ nhớ SDXC' (Extended Capacity) bao gồm các thẻ có dung lượng trong khoảng nào?**

- **A.** Từ trên 32 GB đến 2 TB
- **B.** Từ trên 2 GB đến 32 GB
- **C.** Nhỏ hơn hoặc bằng 2 GB
- **D.** Lớn hơn 2 TB

> **Đáp án:** **A**  
> **Giải thích:** SDXC mở rộng dung lượng lên tới 2 TB, thường sử dụng định dạng hệ thống tệp exFAT theo mặc định xuất xưởng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 77
**Hệ thống tệp (File System) được khuyến nghị sử dụng rộng rãi và tương thích tốt nhất cho các dự án CubeSat với thẻ SDHC là gì?**

- **A.** NTFS
- **B.** FAT32
- **C.** HFS+
- **D.** ext4

> **Đáp án:** **B**  
> **Giải thích:** FAT32 có cấu trúc đơn giản, mã nguồn thư viện nhẹ, không đòi hỏi nhiều RAM và tương thích hoàn hảo trên mọi hệ điều hành.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 78
**Giới hạn kích thước tối đa của một tệp tin đơn lẻ (Single File Size Limit) trên hệ thống tệp FAT32 là bao nhiêu?**

- **A.** Dung lượng không bị giới hạn bởi cấu trúc hệ thống tệp
- **B.** Dung lượng tối đa của một tệp bị giới hạn ở mức 32 GB
- **C.** Dung lượng tối đa của một tệp bị giới hạn ở mức 2 GB
- **D.** Kích thước tối đa của một tệp trên FAT32 là 4 GB

> **Đáp án:** **D**  
> **Giải thích:** Do trường kích thước tệp trong cấu trúc thư mục của FAT32 được quy định bằng biến 32-bit: $2^{32} - 1 = 4,294,967,295\text{ bytes}$.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 79
**Giới hạn dung lượng phân vùng tối đa theo chuẩn định dạng của hệ thống tệp FAT32 thông thường là bao nhiêu?**

- **A.** 4 GB
- **B.** 512 MB
- **C.** 2 Tera-byte
- **D.** 100 MB

> **Đáp án:** **C**  
> **Giải thích:** FAT32 hỗ trợ phân vùng đĩa lên tới 2 TB với kích thước cluster 512 bytes (hoặc lớn hơn nếu tăng kích thước cluster).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 80
**Khu vực 'Master Boot Record' (MBR) trên thẻ nhớ nằm tại vị trí vật lý nào của bộ nhớ?**

- **A.** Ở sector cuối cùng của thẻ
- **B.** Tại Sector số 0 của thẻ nhớ
- **C.** Trong bộ nhớ RAM của vi điều khiển
- **D.** Nằm rải rác ở giữa thẻ

> **Đáp án:** **B**  
> **Giải thích:** Sector 0 chứa bảng phân vùng (Partition Table) định nghĩa vị trí bắt đầu và kích thước của từng phân vùng trên thẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 81
**Bảng phân bổ tệp FAT32 sử dụng bao nhiêu bit trong mỗi mục từ (Entry) để lưu chỉ số trỏ đến cluster tiếp theo?**

- **A.** 8 bit
- **B.** 28 bit thực tế
- **C.** 64 bit
- **D.** 16 bit

> **Đáp án:** **B**  
> **Giải thích:** Tên gọi FAT32 xuất phát từ mục từ 32-bit, nhưng thực chất chỉ sử dụng 28 bit để đánh địa chỉ cho $2^{28} \approx 268$ triệu cluster.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 82
**Giá trị đánh dấu kết thúc tệp (End of File - EOF) trong một mục từ của bảng phân bổ FAT32 thường nằm trong dải giá trị hex nào?**

- **A.** 0x0FFFFFF8 đến 0x0FFFFFFF
- **B.** 0x00000000 đến 0x00000007
- **C.** 0xAAAAAAAA đến 0xAAAAAAAF
- **D.** 0x00000008 đến 0x0000000F

> **Đáp án:** **A**  
> **Giải thích:** Bất kỳ giá trị nào từ 0x0FFFFFF8 trở lên trong bảng FAT đều báo hiệu cluster hiện tại là cluster cuối cùng của tệp tin.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 83
**Thư mục gốc (Root Directory) của hệ thống tệp FAT32 khác với FAT16 ở đặc điểm kiến trúc nào?**

- **A.** FAT32 chỉ cho phép lưu trữ tối đa 512 tệp tin trong thư mục gốc
- **B.** FAT32 chỉ hỗ trợ duy nhất một tệp tin duy nhất trong thư mục gốc
- **C.** FAT32 loại bỏ hoàn toàn khái niệm thư mục gốc trên phân vùng đĩa
- **D.** Thư mục gốc nằm ở cluster bất kỳ và có thể tự mở rộng kích thước

> **Đáp án:** **D**  
> **Giải thích:** FAT16 giới hạn thư mục gốc cố định 512 mục từ tại vùng cố định; FAT32 đối xử thư mục gốc như một chuỗi cluster linh hoạt.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 84
**Mỗi mục từ thư mục tiêu chuẩn (Standard Directory Entry) trong FAT32 có độ dài cố định là bao nhiêu byte?**

- **A.** 8 byte
- **B.** 64 byte
- **C.** 512 byte
- **D.** 32 byte

> **Đáp án:** **D**  
> **Giải thích:** Một Directory Entry 32-byte lưu trữ tên tệp ngắn (8.3 format), thuộc tính tệp, thời gian tạo/sửa đổi, cluster bắt đầu và kích thước tệp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 85
**Định dạng tên tệp ngắn chuẩn '8.3 format' trong hệ thống tệp FAT có quy ước cấu trúc như thế nào?**

- **A.** Tên tệp có chiều dài chuỗi ký tự tối đa 83 ký tự chuẩn ASCII
- **B.** Tên chính dài tối đa 8 ký tự, phần mở rộng dài tối đa 3 ký tự
- **C.** Tên tệp bắt buộc gồm 8 chữ số theo sau bởi 3 ký tự bảng chữ cái
- **D.** Tên tệp không được phép chứa bất kỳ dấu chấm ngăn cách định dạng nào

> **Đáp án:** **B**  
> **Giải thích:** Định dạng 8.3 là chuẩn sơ khai giúp mã nguồn nhúng tiết kiệm bộ nhớ xử lý chuỗi so với việc hỗ trợ tên tệp dài LFN.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 86
**Thuộc tính tệp 'Chỉ đọc' (Read-Only) trong mục từ thư mục FAT32 được kích hoạt bằng bit nào trong byte thuộc tính?**

- **A.** Bit 7
- **B.** Bit 4
- **C.** Bit 0
- **D.** Bit 1

> **Đáp án:** **C**  
> **Giải thích:** Mặt nạ thuộc tính: 0x01 = Read-Only, 0x02 = Hidden, 0x04 = System, 0x08 = Volume ID, 0x10 = Directory, 0x20 = Archive.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 87
**Hiện tượng 'Phân mảnh tệp' (File Fragmentation) trên hệ thống tệp FAT32 của thẻ nhớ xảy ra khi nào?**

- **A.** Khi thẻ nhớ bị nứt vỡ hoặc biến dạng cơ học trong quá trình phóng
- **B.** Khi các cluster của một tệp nằm rải rác không liên tục trên đĩa
- **C.** Khi nhiệt độ môi trường xung quanh vượt quá ngưỡng vận hành cho phép
- **D.** Khi người dùng thực hiện thao tác xóa dữ liệu định kỳ trên phân vùng

> **Đáp án:** **B**  
> **Giải thích:** Sau nhiều chu kỳ ghi và xóa xen kẽ, các cluster trống bị phân tán, buộc đầu đọc phải nhảy vị trí liên tục khi truy xuất tệp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 88
**Tại sao đối với hệ thống CubeSat, phân mảnh tệp trên thẻ nhớ có thể làm giảm hiệu suất ghi dữ liệu thời gian thực?**

- **A.** Tốn thời gian tra cứu bảng FAT và chuyển sector làm tăng độ trễ
- **B.** Làm sai lệch giá trị đo điện áp trên các nhánh nguồn thứ cấp
- **C.** Gây mất ổn định tần số dao động của bộ tạo xung nhịp thạch anh
- **D.** Làm tiêu hao năng lượng pin dự trữ gấp đôi so với định mức chuẩn

> **Đáp án:** **A**  
> **Giải thích:** Truy xuất tuần tự các sector liền kề luôn đạt tốc độ tối đa; phân mảnh làm phát sinh nhiều lệnh điều hướng gây trễ nhịp thu thập.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 89
**Điện trở kéo lên (Pull-up Resistor) ngoài giá trị $10\text{ k}\Omega$ gắn trên đường MISO và CS của thẻ nhớ SPI có tác dụng gì?**

- **A.** Giữ điện áp ổn định, tránh lơ lửng khi khởi động hoặc reset chip
- **B.** Chuyển đổi mức logic điện áp từ 5V xuống 3.3V cho chân tín hiệu
- **C.** Đo nhiệt độ tiếp giáp của khối bán dẫn bên trong thẻ nhớ Flash
- **D.** Tăng tốc độ đọc ghi dữ liệu trên giao diện bus nối tiếp của thẻ

> **Đáp án:** **A**  
> **Giải thích:** Điện trở kéo giữ mức logic HIGH an toàn khi các chân chưa được cấu hình, ngăn ngừa việc thẻ nhớ nhận nhầm tín hiệu rác.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 90
**Bộ nhớ đệm khối sector nội bộ (Sector Buffer) trong thư viện phần mềm điều khiển thẻ nhớ thường có kích thước tối thiểu là:**

- **A.** 4096 byte
- **B.** 128 byte
- **C.** 64 byte
- **D.** 512 byte

> **Đáp án:** **D**  
> **Giải thích:** Thư viện bắt buộc phải cấp phát một mảng đệm 512 byte trong SRAM để chứa dữ liệu của 1 sector trước khi ghi/đọc với thẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 91
**Khái niệm 'Single Block Write' (Ghi khối đơn) khác với 'Multiple Block Write' (Ghi đa khối - CMD25) ở điểm nào?**

- **A.** Ghi đa khối cho phép truyền nhiều sector liên tiếp chỉ với một lệnh
- **B.** Thao tác ghi khối đơn có tốc độ truyền tải nhanh hơn nhiều lần
- **C.** Lệnh CMD25 chỉ hỗ trợ truyền tải dữ liệu kích thước một byte đơn lẻ
- **D.** Lệnh CMD25 gây nguy cơ làm hỏng bảng phân bổ tệp trên phân vùng đĩa

> **Đáp án:** **A**  
> **Giải thích:** Multiple Block Write giảm thiểu đáng kể số lượng gói lệnh điều khiển qua lại trên bus SPI, tối ưu hóa tốc độ ghi file lớn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 92
**Tín hiệu bận (Busy Signal) của thẻ nhớ MicroSD sau khi hoàn tất nhận một khối ghi được biểu thị như thế nào trên đường MISO?**

- **A.** Đường tín hiệu MISO giữ ở mức điện áp nguồn 5V liên tục
- **B.** Đường tín hiệu MISO liên tục phát xung nhịp tần số 1 kHz
- **C.** Đường MISO giữ ở mức LOW cho đến khi ghi Flash hoàn tất
- **D.** Đường tín hiệu MISO tự động chuyển sang trạng thái thả nổi

> **Đáp án:** **C**  
> **Giải thích:** Trong khi các tế bào Flash đang nạp điện, thẻ nhớ kéo chân MISO xuống 0V; khi MISO trở lại mức HIGH, thẻ mới sẵn sàng nhận tiếp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 93
**Tại sao trong mã nguồn C++ điều khiển thẻ nhớ SPI, việc kiểm tra cờ bận (Busy check) phải đi kèm cơ chế thời gian chờ tối đa (Timeout)?**

- **A.** Giảm nhiệt độ tích tụ trên bề mặt vỏ chip nhớ trong lúc hoạt động
- **B.** Tăng tần số xung nhịp làm việc của bus truyền thông nối tiếp SPI
- **C.** Tránh treo vi điều khiển nếu thẻ nhớ bị hỏng hoặc mất kết nối
- **D.** Tiết kiệm dung lượng bộ nhớ RAM phân bổ cho các tác vụ ứng dụng

> **Đáp án:** **C**  
> **Giải thích:** Nếu không có Timeout, vòng lặp `while(spi_read() == 0x00)` sẽ kẹt chết CPU nếu thẻ nhớ không bao giờ nhả cờ bận.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 94
**Thời gian Timeout tối đa quy định trong chuẩn SD cho một thao tác ghi khối đơn (Write Block Timeout) thông thường là bao nhiêu?**

- **A.** 5 đến 10 giây
- **B.** 1 đến 5 mili-giây
- **C.** 250 đến 500 mili-giây
- **D.** 30 đến 60 giây

> **Đáp án:** **C**  
> **Giải thích:** Datasheet chuẩn SD ấn định giới hạn 250ms cho việc lập trình một sector Flash; vượt quá thời gian này được coi là lỗi ghi thẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 95
**Đường tín hiệu Chip Select (CS) của thẻ nhớ có nên được điều khiển bằng chân phần cứng SPI_CS chuyên dụng hay bằng chân GPIO thông thường?**

- **A.** Bắt buộc phải sử dụng chân chuyên dụng phần cứng do hãng quy định
- **B.** Có thể cấu hình bất kỳ chân GPIO ngõ ra nào có sẵn trên vi điều khiển
- **C.** Chỉ hỗ trợ kết nối qua các chân ngõ vào chuyển đổi tín hiệu tương tự
- **D.** Không bắt buộc kết nối chân Chip Select khi chỉ dùng một thiết bị

> **Đáp án:** **B**  
> **Giải thích:** Trong giao thức SPI Master, chân CS chỉ là một đường điều khiển logic đơn giản có thể gán linh hoạt vào bất kỳ chân GPIO nào.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 96
**Hiện tượng 'Ground Bounce' (Nảy mass) trên bus SPI tốc độ cao xảy ra do nguyên nhân nào?**

- **A.** Tác động của từ trường Trái Đất lên linh kiện điện tử trong quỹ đạo
- **B.** Hiện tượng hở mạch cơ học tại các điểm hàn nối trên bo mạch vệ tinh
- **C.** Dòng nạp xả quá nhanh trên sườn xung kết hợp cảm kháng đường mass
- **D.** Tác động của rung động âm học trong giai đoạn tên lửa phóng lên quỹ đạo

> **Đáp án:** **C**  
> **Giải thích:** Nảy mass tạo ra các xung gai điện áp trên đường GND cục bộ, có thể gây nhận diện sai mức logic của các bit dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 97
**Giải pháp thiết kế mạch in PCB để giảm thiểu hiện tượng phản xạ tín hiệu (Signal Reflection) trên đường xung SCK tần số cao (> 20 MHz) là gì?**

- **A.** Nối tiếp một điện trở nhỏ sát chân ngõ ra của Master
- **B.** Nâng mức điện áp hoạt động của đường truyền lên mức 5V
- **C.** Loại bỏ hoàn toàn đường dây mass chung giữa các thiết bị
- **D.** Thiết kế đường dây tín hiệu ngoằn ngoèo để tăng cảm kháng

> **Đáp án:** **A**  
> **Giải thích:** Điện trở phối hợp trở kháng triệt tiêu sóng phản xạ dội ngược trên đường truyền mạch in cao tốc.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 98
**Khi nhiều thiết bị SPI cùng chia sẻ chung một bus (chung MOSI, MISO, SCK), quy tắc vận hành bất di bất dịch là gì?**

- **A.** Không được phép kết nối chung chân xung SCK giữa các thiết bị ngoại vi
- **B.** Chỉ duy nhất một chân CS ở mức LOW, các chân CS khác phải ở mức HIGH
- **C.** Mỗi mô đun trên bus bắt buộc phải sử dụng một mức điện áp cấp nguồn riêng
- **D.** Toàn bộ các chân Chip Select phải được kéo đồng thời xuống mức logic LOW

> **Đáp án:** **B**  
> **Giải thích:** Nếu hai thiết bị cùng kích hoạt CS = LOW, hai chân MISO ngõ ra của chúng sẽ đối kháng nhau gây xung đột dữ liệu và ngắn mạch.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 99
**Mức logic của chân CS khi vi điều khiển không thực hiện bất kỳ giao dịch truyền nhận nào trên bus SPI phải là:**

- **A.** Mức HIGH
- **B.** Mức LOW
- **C.** Xung dao động
- **D.** Mức lơ lửng High-Z

> **Đáp án:** **A**  
> **Giải thích:** Giữ CS ở mức HIGH bảo đảm tất cả các Slave đều ở trạng thái ngủ, giải phóng đường MISO về trạng thái trở kháng cao an toàn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 100
**Trong môi trường không gian, bức xạ ion hóa có thể gây ra hiện tượng mất dữ liệu (Bit Flipping) trong thẻ nhớ Flash, giải pháp đối phó ở tầng C&DH là gì?**

- **A.** Gia nhiệt định kỳ để phục hồi các ô nhớ Flash bị lỗi do bức xạ
- **B.** Ghi nhân bản nhiều tệp song song kết hợp tính toán mã kiểm tra CRC
- **C.** Vô hiệu hóa bus SPI và chuyển hoàn toàn sang giao tiếp nối tiếp I2C
- **D.** Dán lớp phủ polymer trong suốt lên bề mặt vỏ bọc bên ngoài thẻ nhớ

> **Đáp án:** **B**  
> **Giải thích:** Lưu trữ đối xứng (Mirroring) bảo đảm nếu một tệp bị lỗi hỏng cấu trúc thì bản sao dự phòng vẫn sẵn sàng để phục hồi.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 101
**Độ dài vật lý của dây dẫn hoặc đường mạch in từ vi điều khiển tới khe cắm thẻ nhớ SPI nên được thiết kế như thế nào?**

- **A.** Độ dài của dây dẫn vật lý nối giữa vi điều khiển và mô đun thẻ nhớ
- **B.** Tần số xung nhịp làm việc của bộ tạo dao động thạch anh trên bo mạch
- **C.** Dung lượng bộ nhớ RAM nội bộ dành cho các bộ đệm sector thư viện
- **D.** Điện áp cung cấp từ bộ biến đổi nguồn thứ cấp trên khối máy tính C&DH

> **Đáp án:** **C**  
> **Giải thích:** Đường truyền SPI cao tốc rất nhạy cảm với điện dung phân tán ký sinh; đường dây dài sẽ làm méo mó dạng sóng xung nhịp SCK.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 102
**Thanh ghi 'CSD' (Card-Specific Data Register) 128-bit trên thẻ nhớ MicroSD cung cấp những thông số phần cứng cốt lõi nào?**

- **A.** Tọa độ địa lý của trạm thu phát dữ liệu vệ tinh mặt đất
- **B.** Nhiệt độ môi trường hoạt động thực tế của khối máy tính
- **C.** Khóa mã hóa bảo mật phần cứng dùng cho kênh truyền dữ liệu
- **D.** Thông số phần cứng gồm kích thước sector và dung lượng thực

> **Đáp án:** **D**  
> **Giải thích:** Driver thẻ nhớ đọc thanh ghi CSD để trích xuất các thông số hình học đĩa giúp tính toán chính xác tổng dung lượng phân vùng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 103
**Để sử dụng các hàm quản lý hệ thống tệp và giao tiếp thẻ nhớ SD trong mã nguồn C++, các thư viện chuẩn nào cần được include?**

- **A.** Bộ thư viện giao tiếp mạng không dây WiFi.h
- **B.** Bộ thư viện truyền thông Bluetooth nối tiếp BluetoothSerial.h
- **C.** Cặp thư viện hệ thống tệp FS.h và giao tiếp thẻ nhớ SD.h
- **D.** Thư viện giao tiếp truyền thông nối tiếp hai dây I2C Wire.h

> **Đáp án:** **C**  
> **Giải thích:** Thư viện FS.h cung cấp lớp trừu tượng hệ thống tệp và SD.h quản lý giao thức phần cứng thẻ nhớ qua bus SPI.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 104
**Để mở một tệp tin trên thẻ nhớ để ghi thêm dữ liệu vào cuối tệp (Append Mode), phương thức C++ nào được sử dụng?**

- **A.** Sử dụng phương thức SD.write() với cờ chế độ nhị phân
- **B.** Sử dụng phương thức SD.open() với chế độ chỉ đọc FILE_READ
- **C.** Sử dụng phương thức SD.create() để tạo mới tệp trắng
- **D.** Sử dụng phương thức SD.open() với chế độ ghi nối tiếp FILE_APPEND

> **Đáp án:** **D**  
> **Giải thích:** Chế độ FILE_APPEND (hoặc FILE_WRITE mở tệp đã có) di chuyển con trỏ tệp đến cuối tệp để ghi thêm mà không xóa nội dung cũ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 105
**Để ghi một chuỗi ký tự kèm ký tự xuống dòng vào tệp đang mở, phương thức C++ nào được gọi?**

- **A.** Phương thức myFile.put() ghi trực tiếp luồng ký tự
- **B.** Phương thức myFile.println() ghi chuỗi và ngắt dòng
- **C.** Phương thức myFile.send() truyền qua đệm SPI phần cứng
- **D.** Phương thức myFile.insert() chèn chuỗi vào con trỏ hiện tại

> **Đáp án:** **B**  
> **Giải thích:** Lớp File kế thừa từ lớp Print, do đó hỗ trợ đầy đủ các hàm quen thuộc như print(), println() và printf().  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 106
**Phương thức `myFile.size()` trong thư viện SD trả về thông số cụ thể nào của tệp?**

- **A.** Kích thước hiển thị phông chữ của văn bản trong tệp
- **B.** Kích thước tổng thể hiện tại của tệp tính bằng byte
- **C.** Tổng số lượng các cluster được cấp phát cho tệp tin
- **D.** Tổng số dòng ký tự văn bản hiện có bên trong tệp tin

> **Đáp án:** **B**  
> **Giải thích:** Giá trị trả về kiểu uint32_t cho biết chính xác độ dài byte của tệp đang mở.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 107
**Để đọc lần lượt từng ký tự từ một tệp đang mở ở chế độ `FILE_READ`, phương thức C++ nào được gọi?**

- **A.** myFile.get()
- **B.** myFile.pop()
- **C.** myFile.scan()
- **D.** myFile.read()

> **Đáp án:** **D**  
> **Giải thích:** Hàm read() trả về 1 byte dữ liệu tiếp theo trong tệp (kiểu int từ 0-255) hoặc trả về -1 nếu đã chạm mốc cuối tệp (EOF).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 108
**Để kiểm tra xem tệp đang mở còn dữ liệu khả dụng để tiếp tục đọc hay không, phương thức C++ nào được dùng?**

- **A.** myFile.available()
- **B.** myFile.check()
- **C.** myFile.isEnd()
- **D.** myFile.hasData()

> **Đáp án:** **A**  
> **Giải thích:** Hàm available() trả về số lượng byte còn lại từ con trỏ đọc hiện tại đến cuối tệp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 109
**Để lấy thông tin về tổng dung lượng không gian lưu trữ của thẻ nhớ (Total Bytes), phương thức nào của lớp SD được gọi?**

- **A.** Phương thức SD.getVolume() trả về thể tích khối nhớ
- **B.** Phương thức SD.size() trả về dung lượng phân vùng logic
- **C.** Phương thức SD.totalBytes() trả về tổng số byte của thẻ nhớ
- **D.** Phương thức SD.capacity() trả về giới hạn lưu trữ tối đa

> **Đáp án:** **C**  
> **Giải thích:** Phương thức totalBytes() trả về tổng số byte của phân vùng FAT32 trên thẻ nhớ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 110
**Để lấy thông tin về số lượng byte đã được sử dụng (Used Bytes) trên thẻ nhớ, hàm gọi là:**

- **A.** Phương thức SD.calcUsed() tính toán các cluster bị chiếm dụng
- **B.** Phương thức SD.usedBytes() trả về số byte đã sử dụng
- **C.** Phương thức SD.occupied() đếm số sector đã chứa dữ liệu
- **D.** Phương thức SD.busyBytes() lấy dung lượng đang được xử lý

> **Đáp án:** **B**  
> **Giải thích:** Hàm usedBytes() tính tổng dung lượng của tất cả các cluster đang được các tệp chiếm dụng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 111
**Công thức C++ nào tính toán tỷ lệ phần trăm không gian thẻ nhớ đã bị sử dụng?**

- **A.** Lấy dung lượng đã dùng chia cho tổng dung lượng thẻ nhớ rồi nhân với 100%
- **B.** Lấy tổng dung lượng chia cho 1024 để quy đổi sang đơn vị Kilobyte
- **C.** Lấy dung lượng đã dùng chia cho 1024 để quy đổi sang Kilobyte
- **D.** Lấy tổng dung lượng chia cho dung lượng đã dùng rồi nhân với 100%

> **Đáp án:** **A**  
> **Giải thích:** Tỷ lệ phần trăm tính bằng dung lượng đã dùng chia cho tổng dung lượng nhân với 100.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 112
**Lệnh `myFile.seek(0);` có tác dụng gì đối với tệp đang mở?**

- **A.** Chuyển con trỏ đọc ghi về vị trí byte đầu tiên của tệp
- **B.** Xóa toàn bộ dữ liệu hiện có trong tệp tin trên thẻ nhớ
- **C.** Di chuyển con trỏ đọc ghi tới vị trí byte cuối cùng của tệp
- **D.** Ghi đè toàn bộ các byte trong tệp bằng giá trị số không

> **Đáp án:** **A**  
> **Giải thích:** Hàm seek(pos) đặt lại vị trí con trỏ đọc/ghi đến byte thứ `pos` tính từ đầu tệp.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 113
**Phương thức `myFile.position()` trong C++ trả về thông tin gì?**

- **A.** Tọa độ địa lý của trạm thu phát dữ liệu vệ tinh mặt đất
- **B.** Vị trí offset hiện tại của con trỏ đọc ghi trong tệp tin
- **C.** Vị trí chỉ số hàng của tệp tin trong danh mục thư mục gốc
- **D.** Tốc độ xung nhịp đọc ghi trung bình của giao tiếp với thẻ

> **Đáp án:** **B**  
> **Giải thích:** Position cho biết con trỏ tệp đang đứng ở byte thứ mấy kể từ byte đầu tiên của tệp tin.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 114
**Để so sánh chính xác hai chuỗi ký tự C-string `cmd` và `ls`, hàm chuẩn nào trong C++ được sử dụng?**

- **A.** Sử dụng phương thức đối tượng cmd.equals(ls)
- **B.** Sử dụng hàm strcmp(cmd, ls) và so sánh kết quả trả về bằng 0
- **C.** So sánh trực tiếp con trỏ chuỗi cmd == ls bằng toán tử quan hệ
- **D.** Sử dụng hàm strcmp(cmd, ls) và so sánh kết quả trả về bằng 1

> **Đáp án:** **B**  
> **Giải thích:** Hàm strcmp(s1, s2) trả về số 0 khi hai chuỗi ký tự kết thúc bằng null hoàn toàn trùng khớp từng ký tự.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 115
**Tại sao sau khi ghi dữ liệu vào mảng ký tự `cmdBuffer`, việc gán ký tự null `cmdBuffer[index] = '\0';` ở cuối lại là bắt buộc?**

- **A.** Đánh dấu kết thúc chuỗi C-string tránh đọc tràn ô nhớ
- **B.** Định dạng màu sắc hiển thị của chuỗi ký tự trên cổng nối tiếp
- **C.** Kích hoạt ngắt truyền chuỗi qua giao thức truyền thông nối tiếp
- **D.** Tự động giải phóng vùng nhớ đệm đã cấp phát cho chuỗi ký tự

> **Đáp án:** **A**  
> **Giải thích:** Chuỗi C-string bắt buộc phải kết thúc bằng byte null (0x00); thiếu byte này sẽ gây lỗi đọc tràn bộ nhớ (Out-of-bounds Read).  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 116
**Để chuyển đổi một chuỗi ký tự tham số thành số nguyên trong C++ (ví dụ chuyển chuỗi `100` thành số 100), hàm nào được dùng?**

- **A.** sprintf()
- **B.** itoa
- **C.** atoi
- **D.** atof()

> **Đáp án:** **C**  
> **Giải thích:** Hàm atoi (ASCII to Integer) chuyển đổi chuỗi biểu diễn số nguyên thành giá trị nhị phân tương ứng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 117
**Để chuyển đổi một chuỗi ký tự tham số thành số thực dấu phẩy động (float), hàm chuẩn C++ là:**

- **A.** atof
- **B.** strcat()
- **C.** atoi
- **D.** to_string()

> **Đáp án:** **A**  
> **Giải thích:** Hàm atof chuyển đổi chuỗi số thập phân thành giá trị số thực float/double.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 118
**Để đo tốc độ ghi thực tế của thẻ nhớ (tính bằng KB/s) trong mã nguồn C++, phương pháp đo lường chuẩn là gì?**

- **A.** Giảm kích thước mã nhị phân của chương trình khi biên dịch
- **B.** Ngăn tràn bộ đệm nhờ giới hạn số byte ghi tối đa vào mảng
- **C.** Tăng tốc độ chuyển đổi chuỗi ký tự nhanh hơn hàm sprintf
- **D.** Tự động mã hóa bảo mật chuỗi ký tự trước khi lưu vào thẻ

> **Đáp án:** **B**  
> **Giải thích:** Đo lường thời gian thực thi trọn vẹn của chu trình ghi kèm ép xả bộ đệm phản ánh chính xác băng thông phần cứng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 119
**Hàm `SD.end();` trong C++ thực hiện nhiệm vụ gì?**

- **A.** Khởi động lại toàn bộ vi điều khiển trung tâm ngay lập tức
- **B.** Xóa vĩnh viễn toàn bộ các tệp tin hiện có trên phân vùng thẻ
- **C.** Ngắt nguồn điện cung cấp cho khe cắm thẻ nhớ ngoài của bo mạch
- **D.** Đóng tệp, giải phóng tài nguyên và hủy khởi tạo bus của thẻ

> **Đáp án:** **D**  
> **Giải thích:** Hàm SD.end() giải phóng bộ nhớ heap và đưa các chân ngoại vi SPI về trạng thái nhàn rỗi an toàn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 120
**Để kiểm tra xem một thư mục có chứa tệp tin con hay không trước khi thực hiện xóa bằng `rmdir()`, thuật toán C++ là gì?**

- **A.** Gọi trực tiếp hàm rmdir() mà không cần kiểm tra trạng thái tệp
- **B.** Định dạng lại toàn bộ thẻ nhớ để làm sạch các thư mục hệ thống
- **C.** Đổi tên thư mục chỉ định sang một định danh tạm thời trong bảng
- **D.** Dùng openNextFile() kiểm tra xem có tệp con trong thư mục không

> **Đáp án:** **D**  
> **Giải thích:** Quy tắc an toàn của hệ thống tệp FAT32 chỉ cho phép xóa thư mục khi bên trong nó hoàn toàn không chứa bất kỳ mục từ nào.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 121
**Phương thức `myFile.peek()` trong thư viện thẻ nhớ SD mang lại tính năng nào cho việc xử lý tệp tin?**

- **A.** Xem trước một byte mà không làm dịch chuyển con trỏ đọc
- **B.** In ký tự tiếp theo ra màn hình giám sát cổng nối tiếp ngay
- **C.** Xóa vĩnh viễn byte dữ liệu tiếp theo khỏi bộ đệm của tệp tin
- **D.** Chuyển đổi mã byte tiếp theo thành số nguyên không dấu 8-bit

> **Đáp án:** **A**  
> **Giải thích:** peek() giúp kiểm tra trước các ký tự điều khiển hoặc tiền tố dòng trước khi quyết định gọi read() để trích xuất dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 122
**Để kiểm tra xem thao tác ghi dữ liệu vào tệp có bị lỗi nửa chừng hay không, lập trình viên nên so sánh giá trị trả về của `file.write(buf, len)` với giá trị nào?**

- **A.** So sánh kết quả trả về với giá trị số không của hệ thống
- **B.** So sánh với độ dài len, nếu nhỏ hơn len thì ghi bị gián đoạn
- **C.** Kiểm tra trạng thái cờ báo lỗi phần cứng của bộ nhớ flash
- **D.** So sánh kết quả với kích thước ngăn xếp của tác vụ hiện tại

> **Đáp án:** **B**  
> **Giải thích:** Hàm write trả về số byte thực tế đã ghi thành công vào bộ đệm; số byte nhỏ hơn kỳ vọng báo hiệu lỗi hết đĩa.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 123
**Để tạo cấu trúc thư mục con phân cấp (ví dụ: `/2026/telemetry`), lệnh thực thi C++ nào là chuẩn xác?**

- **A.** Tạo tuần tự từng cấp thư mục từ thư mục cha /2026 rồi đến thư mục con /2026/telemetry
- **B.** Gọi trực tiếp phương thức addPath() với đường dẫn đầy đủ của thư mục con
- **C.** Kích hoạt hàm khởi tạo phân cấp createHierarchy() tự động xây dựng cây thư mục
- **D.** Mở đường dẫn tệp con ở chế độ FILE_CREATE để hệ thống tệp tự động sinh thư mục

> **Đáp án:** **A**  
> **Giải thích:** FAT32 yêu cầu tạo thư mục cha trước rồi mới tạo thư mục con bên trong để bảo đảm liên kết cấu trúc cây thư mục.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 124
**Trong phần mềm bay vệ tinh, lệnh thời gian thực (Realtime Command) có đặc điểm gì?**

- **A.** Được giải mã và thực thi ngay lập tức khi vệ tinh vừa nhận được
- **B.** Được lưu trữ vào thẻ nhớ ngoài và chỉ mở ra đọc sau một tuần
- **C.** Tự động kích hoạt cơ cấu đốt dây cắt anten sau ba mươi phút
- **D.** Bắt buộc phải có chữ ký số xác nhận từ tất cả các trạm phụ

> **Đáp án:** **A**  
> **Giải thích:** Lệnh thời gian thực (Realtime Command) được hàng đợi lệnh của phân hệ C&DH xử lý và thực thi ngay lập tức trong phiên liên lạc để điều khiển khẩn cấp hoặc kiểm tra trạng thái.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 125
**Lệnh hẹn giờ (Scheduled Command) trong kiến trúc C&DH giải quyết bài toán vận hành nào?**

- **A.** Thực thi tác vụ tự động tại thời điểm vệ tinh bay ngoài vùng phủ sóng
- **B.** Ghi đè bản sao lưu hệ điều hành khi trạm mặt đất mất kết nối mạng
- **C.** Tự động tắt nguồn khối pin mặt trời khi nhiệt độ khoang máy hạ thấp
- **D.** Phát sóng liên tục thông báo tọa độ cho máy bay thương mại dưới đất

> **Đáp án:** **A**  
> **Giải thích:** Vì vệ tinh LEO chỉ bay qua trạm mặt đất khoảng 10-12 phút mỗi lần, các lệnh chụp ảnh hoặc thí nghiệm tại vị trí xa phải được lập lịch hẹn giờ trước.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 126
**Hệ thống lọc và xác thực lệnh (Command Validation) trên C&DH có chức năng gì?**

- **A.** Loại bỏ lệnh sai mã định danh vệ tinh hoặc có tham số không hợp lệ
- **B.** Nén kích thước dữ liệu ảnh thu được từ cảm biến góc rộng xuống
- **C.** Tự động tính toán quỹ đạo rơi tự do của các mảnh vỡ trên không
- **D.** Kiểm tra mức độ suy hao năng lượng của các tấm pin quang điện

> **Đáp án:** **A**  
> **Giải thích:** Để bảo đảm an toàn, bộ giải mã lệnh C&DH sẽ kiểm tra mã Satellite ID, khóa xác thực và giới hạn tham số; nếu không khớp, lệnh sẽ bị hủy bỏ ngay để tránh lệnh giả hoặc nhiễu.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 127
**Dòng dữ liệu Telemetry Housekeeping (HK) chứa những thông tin cốt lõi nào?**

- **A.** Điện áp, dòng điện tiêu thụ, nhiệt độ và trạng thái các công tắc
- **B.** Toàn bộ tệp ảnh chụp bề mặt Trái Đất ở định dạng thô không nén
- **C.** Danh sách địa chỉ email của các chuyên gia điều hành trạm chính
- **D.** Bản sao lưu toàn bộ mã nguồn chương trình ứng dụng trên bộ nhớ

> **Đáp án:** **A**  
> **Giải thích:** Dữ liệu đo xa Housekeeping (HK) phản ánh sức khỏe định kỳ của phần cứng vệ tinh: điện áp pin, dòng tiêu thụ phân hệ, nhiệt độ cảm biến và trạng thái relay bật/tắt.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 128
**Dòng dữ liệu Telemetry Stored trên phân hệ C&DH phục vụ mục đích gì?**

- **A.** Lưu trữ lịch sử vận hành vào thẻ nhớ để tải xuống theo yêu cầu trạm
- **B.** Gửi cảnh báo nguy hiểm khẩn cấp tới các tàu vũ trụ đang bay gần
- **C.** Cung cấp xung nhịp chuẩn cho các bộ dao động thạch anh trên bo
- **D.** Tự động reset lại bộ nhớ đệm RAM mỗi khi trạm mặt đất gửi tín hiệu

> **Đáp án:** **A**  
> **Giải thích:** Dữ liệu Stored Telemetry ghi lại thông số lịch sử theo chu kỳ (ví dụ mỗi 30 giây) vào bộ nhớ Flash/SD; khi bay qua trạm mặt đất, trạm sẽ gửi lệnh kéo toàn bộ log về phân tích.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 129
**Cấu trúc bộ đệm vòng tròn (Ring Buffer) trong C&DH mang lại ưu điểm gì?**

- **A.** Tối ưu hóa quản lý hàng đợi và chống tràn bộ nhớ đệm hiệu quả
- **B.** Tự động nhân đôi dung lượng lưu trữ vật lý của chip nhớ Flash
- **C.** Mã hóa bảo mật toàn bộ dữ liệu theo thuật toán vân tay sinh học
- **D.** Tăng tốc độ xoay trục của anten vô tuyến bám theo đường chân trời

> **Đáp án:** **A**  
> **Giải thích:** Bộ đệm Ring Buffer (Circular FIFO) cho phép ghi và đọc dữ liệu liên tục theo con trỏ vòng tròn, tránh phân mảnh RAM và ngăn lỗi tràn bộ nhớ khi dữ liệu đến dồn dập.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 130
**Tại sao phân hệ C&DH phải đóng gói dữ liệu theo cấu trúc khung truyền tin chuẩn?**

- **A.** Giúp máy thu trạm mặt đất dễ dàng đồng bộ, phân tách và kiểm tra lỗi
- **B.** Giảm một nửa công suất tiêu thụ điện của các mạch logic kỹ thuật số
- **C.** Tự động hạ nhiệt độ của chip vi xử lý khi truyền tin ở tốc độ cao
- **D.** Ngăn chặn các phần mềm gián điệp xâm nhập từ các trạm nghiệp dư lậu

> **Đáp án:** **A**  
> **Giải thích:** Khung tin tiêu chuẩn (Header, Length, Payload, CRC Checksum) giúp phía thu dễ dàng tìm điểm bắt đầu đồng bộ, bóc tách dữ liệu và phát hiện bit lỗi truyền dẫn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 131
**Nguy cơ tiềm ẩn lớn nhất đối với hệ thống tệp tin FAT32 trên thẻ MicroSD trong vệ tinh là gì?**

- **A.** Hỏng bảng phân vùng tệp tin nếu xảy ra mất nguồn đột ngột khi đang ghi
- **B.** Tốc độ đọc dữ liệu bị giảm xuống dưới mười byte trên mỗi giây
- **C.** Thẻ nhớ bị nóng chảy do tiếp xúc với từ trường tự nhiên Trái Đất
- **D.** Không thể lưu trữ tệp tin có dung lượng lớn hơn năm kilobyte dữ liệu

> **Đáp án:** **A**  
> **Giải thích:** Hệ thống tệp FAT32 rất dễ bị hỏng File Allocation Table nếu nguồn bị sụt đột ngột (Brownout) trong lúc đang cập nhật metadata, dẫn đến mất khả năng đọc toàn bộ thẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 132
**Chiến lược bảo vệ hệ thống tệp tin trên thẻ MicroSD khi lập trình nhúng là gì?**

- **A.** Định kỳ đẩy bộ đệm xuống thẻ và đóng tệp tin ngay sau khi ghi xong
- **B.** Luôn mở tệp tin ở chế độ ghi đè toàn bộ từ đầu đến cuối phiên bay
- **C.** Chỉ ghi dữ liệu khi thẻ nhớ được làm mát xuống dưới âm hai mươi độ
- **D.** Tắt hoàn toàn đường truyền xung nhịp SPI khi bắt đầu ghi dữ liệu

> **Đáp án:** **A**  
> **Giải thích:** Sử dụng hàm `flush()` và đóng tệp (`close()`) ngay sau mỗi chu kỳ ghi dữ liệu giúp đảm bảo dữ liệu trong cache được đẩy xuống tế bào Flash, tránh mất mát khi mất nguồn.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 133
**Chiến thuật xử lý ghi nhật ký theo vòng tròn (Circular Log) giải quyết vấn đề gì?**

- **A.** Tự động ghi đè lên các tệp tin cũ nhất khi dung lượng bộ nhớ bị đầy
- **B.** Xóa sạch toàn bộ hệ điều hành để nhường chỗ lưu trữ cho ảnh mới chụp
- **C.** Nén các đoạn âm thanh Morse phát từ máy phát beacon thành văn bản
- **D.** Gửi cảnh báo yêu cầu người vận hành thay thẻ nhớ mới từ dưới mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Khi không gian lưu trữ bị đầy, Circular Log sẽ tự động xóa các log cũ nhất đã được tải xuống trạm mặt đất để lấy chỗ ghi nhật ký mới nhất, giữ hệ thống hoạt động liên tục.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 134
**Tại sao thời gian trên vệ tinh CubeSat luôn phải được đồng bộ theo chuẩn giờ UTC?**

- **A.** Đảm bảo tính chính xác cho các mốc thời gian nhật ký và lập lịch lệnh
- **B.** Giúp đồng hồ trên vệ tinh chạy nhanh hơn để bù đắp thuyết tương đối
- **C.** Để hệ điều hành nhúng không bao giờ bị tràn biến đếm mili-giây
- **D.** Tránh hiện tượng sai lệch múi giờ giữa các bang của nước Mỹ phóng

> **Đáp án:** **A**  
> **Giải thích:** Giờ phối hợp quốc tế (UTC) là mốc chuẩn toàn cầu cho hoạt động vũ trụ, giúp khớp chính xác thời điểm chụp ảnh, thu thập dữ liệu với vị trí vệ tinh trên quỹ đạo.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 135
**Cơ chế kiểm tra tính toàn vẹn dữ liệu bằng mã CRC32 trước khi truyền xuống nhằm mục đích gì?**

- **A.** Cho phép trạm mặt đất phát hiện chính xác khung tin bị lỗi đường truyền
- **B.** Mã hóa bảo mật chống nghe trộm nội dung bức ảnh chụp được từ quỹ đạo
- **C.** Tự động sửa chữa phần cứng bộ vi xử lý trung tâm nếu bị chập mạch
- **D.** Tăng gấp bốn lần công suất phát sóng vô tuyến của anten phân hệ COM

> **Đáp án:** **A**  
> **Giải thích:** Mã CRC32 được tính toán và đính kèm vào cuối gói tin; trạm mặt đất tính lại CRC và so sánh, nếu khác biệt sẽ yêu cầu phát lại (ARQ) hoặc loại bỏ gói tin hỏng.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 136
**Giao thức truyền lại tự động (Automatic Repeat Request - ARQ) hoạt động như thế nào?**

- **A.** Trạm mặt đất gửi danh sách số hiệu các gói bị mất để vệ tinh gửi lại
- **B.** Vệ tinh tự động gửi lại toàn bộ bộ nhớ Flash ba lần liên tiếp nhau
- **C.** Máy tính trên vệ tinh tự động khởi động lại sau mỗi gói tin truyền
- **D.** Trạm mặt đất tự suy đoán các byte bị mất dựa vào thuật toán trí tuệ nhân tạo

> **Đáp án:** **A**  
> **Giải thích:** Giao thức Selective ARQ cho phép trạm mặt đất chỉ định chính xác các số thứ tự gói (Packet Sequence Number) bị lỗi để CubeSat truyền lại, tiết kiệm băng thông.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 137
**Tại sao việc nén ảnh không mất dữ liệu (Lossless Compression) quan trọng trên C&DH?**

- **A.** Giảm dung lượng tệp tin cần truyền qua kênh vô tuyến băng thông thấp
- **B.** Tăng độ phân giải quang học của cảm biến máy ảnh lên gấp nhiều lần
- **C.** Làm thay đổi màu sắc quang phổ của thấu kính máy ảnh sang vùng hồng ngoại
- **D.** Xóa sạch các đám mây che phủ trên bề mặt địa hình chụp được từ trên cao

> **Đáp án:** **A**  
> **Giải thích:** Do băng thông đường truyền xuống (Downlink) của CubeSat rất hạn hẹp, nén ảnh giúp giảm thời gian truyền tải mà vẫn bảo toàn nguyên vẹn giá trị đo đạc khoa học.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 138
**Hệ điều hành thời gian thực (RTOS) giúp phân hệ C&DH quản lý tài nguyên như thế nào?**

- **A.** Phân chia thời gian CPU cho nhiều tác vụ chạy đồng thời theo độ ưu tiên
- **B.** Tự động thiết kế lại phần cứng mạch in khi phát hiện đường dây bị đứt
- **C.** Loại bỏ hoàn toàn sự cần thiết của các tụ lọc nguồn trên toàn hệ thống
- **D.** Ngăn chặn các photon năng lượng cao chiếu xuyên qua lớp vỏ hợp kim nhôm

> **Đáp án:** **A**  
> **Giải thích:** RTOS (như FreeRTOS) cung cấp cơ chế lập lịch tiền định (Preemptive Scheduler) giúp điều phối đa nhiệm các tác vụ C&DH, đọc cảm biến và truyền thông theo mức ưu tiên.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 139
**Tác động của bức xạ đối với các ô nhớ Flash trong môi trường không gian là gì?**

- **A.** Tích tụ điện tích làm trôi điện áp dẫn đến lỗi đọc sai ô nhớ
- **B.** Làm nóng chảy toàn bộ chân cắm linh kiện trên bo mạch in
- **C.** Làm thẻ nhớ tự động định dạng lại toàn bộ hệ thống tệp tin
- **D.** Làm biến đổi giao tiếp bus SPI thành giao thức hồng ngoại

> **Đáp án:** **A**  
> **Giải thích:** Liều chiếu xạ ion hóa tích lũy (TID) giữ lại các hạt mang điện trong lớp oxide cổng nổi của Flash, làm dịch chuyển điện áp ngưỡng đọc và gây lỗi dữ liệu sau một thời gian bay.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

### Câu 140
**Chức năng của bộ đệm nhớ tạm thời (RAM Buffer) trước khi ghi xuống thẻ nhớ MicroSD là gì?**

- **A.** Gom dữ liệu đủ khối một cung từ năm trăm mười hai byte để tối ưu hóa tốc độ
- **B.** Lọc bỏ toàn bộ các byte mang giá trị không để tiết kiệm năng lượng điện
- **C.** Tự động dịch chuyển vị trí các bit nhị phân để mã hóa chống trộm dữ liệu
- **D.** Hạ nhiệt độ làm việc của các chip nhớ Flash xuống mức âm mười độ C

> **Đáp án:** **A**  
> **Giải thích:** Thẻ MicroSD ghi dữ liệu theo từng cung từ 512 byte (Sector). Gom dữ liệu đủ 512 byte trong RAM rồi mới ghi một lần giúp tăng tốc độ và giảm hao mòn tế bào Flash.  
> **Mục tiêu củng cố:** Nắm vững cấu trúc 4 dây bus SPI, các chế độ Mode 0-3 và hệ thống tập tin FAT32  

---

## 📖 Doc 3.3: Nguyên Lý Đa Nhiệm FreeRTOS, Tranh Chấp Tài Nguyên & Khóa Mutex (32 câu)

### Câu 141
**Khái niệm 'Chuyển ngữ cảnh' (Context Switching) trong hệ điều hành đa nhiệm là quá trình gì?**

- **A.** Đổi tên định danh vi điều khiển trung tâm
- **B.** Thay đổi ngôn ngữ hiển thị trên giao diện
- **C.** Lưu ngữ cảnh tác vụ cũ và nạp tác vụ mới
- **D.** Chuyển đổi mức logic trên các chân tín hiệu

> **Đáp án:** **C**  
> **Giải thích:** Chuyển ngữ cảnh cho phép một lõi xử lý duy nhất có thể luân phiên phục vụ nhiều tác vụ độc lập.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 142
**Cơ chế lập lịch 'Chia sẻ thời gian' (Round-Robin Scheduling) thường được áp dụng cho nhóm tác vụ nào?**

- **A.** Chỉ áp dụng khi chip có 100 nhân
- **B.** Các tác vụ không bao giờ cần chạy
- **C.** Các tác vụ có cùng mức độ ưu tiên
- **D.** Tác vụ điều khiển khẩn cấp

> **Đáp án:** **C**  
> **Giải thích:** Round-Robin chia đều các lát thời gian (Time Slices / Ticks) cho các tác vụ ngang hàng để không tác vụ nào bị bỏ đói.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 143
**Cơ chế lập lịch 'Hợp tác' (Cooperative Multitasking) có đặc điểm vận hành nào sau đây?**

- **A.** Chọn ngẫu nhiên một tác vụ bất kỳ trong danh sách
- **B.** Luôn ưu tiên tác vụ vừa mới kết thúc vòng lặp
- **C.** Chọn tác vụ sử dụng ít dung lượng ngăn xếp nhất
- **D.** Luôn chọn tác vụ sẵn sàng có mức ưu tiên cao nhất

> **Đáp án:** **C**  
> **Giải thích:** Nhược điểm của đa nhiệm hợp tác là nếu một tác vụ bị lặp vô hạn, toàn bộ hệ điều hành sẽ bị treo cứng.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 144
**Khái niệm 'Không gian ngăn xếp' (Stack) của mỗi tác vụ trong FreeRTOS được sử dụng để làm gì?**

- **A.** Lưu trữ bảng cấu hình kết nối mạng nội bộ
- **B.** Chứa mã nguồn nhị phân của chương trình nạp
- **C.** Lưu biến cục bộ, địa chỉ hàm và thanh ghi CPU
- **D.** Lưu toàn bộ dữ liệu ảnh tải trọng viễn thám

> **Đáp án:** **C**  
> **Giải thích:** Nếu stack của một tác vụ quá nhỏ so với lượng biến cục bộ nó khai báo, hiện tượng tràn stack (Stack Overflow) sẽ làm crash hệ thống.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 145
**Hệ điều hành FreeRTOS cung cấp cơ chế bảo vệ nào để phát hiện hiện tượng Stack Overflow trong quá trình chạy thử nghiệm?**

- **A.** Tự động cấp phát mở rộng kích thước vùng nhớ RAM
- **B.** Dùng móc kiểm tra con trỏ hoặc mẫu byte canary
- **C.** Vô hiệu hóa tính năng đa nhiệm của hệ điều hành
- **D.** Tự động khởi động lại mềm hệ thống ngay lập tức

> **Đáp án:** **B**  
> **Giải thích:** FreeRTOS kiểm tra xem các byte đánh dấu cuối vùng stack (canary pattern) có bị ghi đè lên hay không ở mỗi lần chuyển ngữ cảnh.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 146
**Khái niệm 'Mutex' (Mutual Exclusion) trong hệ điều hành được sử dụng nhằm mục đích cốt lõi nào?**

- **A.** Cân bằng điện áp trên các nhánh nguồn thứ cấp
- **B.** Kéo dài tuổi thọ chu kỳ ghi xóa của bộ nhớ flash
- **C.** Tăng tốc độ tính toán cho khối dấu phẩy động
- **D.** Bảo vệ tài nguyên dùng chung khỏi xung đột truy cập

> **Đáp án:** **D**  
> **Giải thích:** Mutex đóng vai trò như một chiếc chìa khóa độc quyền: tác vụ nào cầm chìa khóa mới được phép thao tác với tài nguyên dùng chung.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 147
**Khái niệm 'Vùng tranh chấp' (Critical Section) trong mã nguồn đa nhiệm được hiểu là gì?**

- **A.** Khối lệnh chứa các định nghĩa tiền xử lý hệ thống
- **B.** Đoạn mã truyền nhận dữ liệu qua giao diện nối tiếp
- **C.** Đoạn mã truy cập tài nguyên chung dễ gây xung đột
- **D.** Vùng nhớ chứa các biến hằng số chỉ đọc của hệ thống

> **Đáp án:** **C**  
> **Giải thích:** Phải dùng Mutex hoặc cơ chế khóa ngắt để bảo vệ Critical Section, bảo đảm chỉ một thực thể được thực thi tại một thời điểm.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 148
**Khái niệm 'Hiện tượng Nghịch đảo Độ ưu tiên' (Priority Inversion) xảy ra trong kịch bản nào?**

- **A.** Tác vụ ưu tiên cao bị chặn bởi tác vụ ưu tiên thấp
- **B.** Tác vụ ưu tiên cao chạy liên tục không giải phóng
- **C.** Tác vụ ưu tiên thấp chiếm dụng toàn bộ bộ nhớ RAM
- **D.** Tác vụ trung bình bị chặn do thiếu tài nguyên ngoại vi

> **Đáp án:** **A**  
> **Giải thích:** Hậu quả là tác vụ ưu tiên cao bị trì hoãn vô thời hạn bởi các tác vụ ưu tiên trung bình không hề dùng đến tài nguyên chia sẻ.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 149
**Sự cố lịch sử nổi tiếng nào của tàu vũ trụ NASA trên Sao Hỏa năm 1997 là minh chứng kinh điển cho lỗi Priority Inversion?**

- **A.** Tàu Apollo 11
- **B.** Tàu thám hiểm Sao Hỏa Mars Pathfinder
- **C.** Kính thiên văn Hubble
- **D.** Trạm vũ trụ Quốc tế ISS

> **Đáp án:** **B**  
> **Giải thích:** Mars Pathfinder liên tục bị reset trên Sao Hỏa do luồng xử lý thông tin ưu tiên cao bị luồng viễn thông ưu tiên trung bình gián tiếp phong bế.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 150
**Cơ chế kỹ thuật nào được tích hợp trong RTOS hiện đại để khắc phục hoàn toàn sự cố Priority Inversion?**

- **A.** Hạ độ ưu tiên của tất cả các tác vụ về 0
- **B.** Không dùng Mutex
- **C.** Giao thức Kế thừa Độ ưu tiên
- **D.** Tắt toàn bộ hệ điều hành

> **Đáp án:** **C**  
> **Giải thích:** Tác vụ ưu tiên thấp nắm giữ Mutex sẽ được tạm thời nâng độ ưu tiên lên bằng độ ưu tiên của tác vụ cao nhất đang chờ nó giải phóng.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 151
**Sự khác biệt căn bản giữa 'Khóa Mutex' và 'Semaphore Nhị phân' (Binary Semaphore) trong FreeRTOS là gì?**

- **A.** Semaphore chỉ dùng cho các biến số thực dấu phẩy động
- **B.** Mutex có quyền sở hữu, Semaphore chỉ dùng đồng bộ hóa
- **C.** Mutex và Semaphore hoàn toàn tương đương nhau về cơ chế
- **D.** Mutex chỉ hỗ trợ đếm số lượng tài nguyên khả dụng nội bộ

> **Đáp án:** **B**  
> **Giải thích:** Chỉ tác vụ khóa Mutex mới được phép mở Mutex đó, trong khi một Semaphore có thể được kích hoạt (give) bởi một luồng khác.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 152
**Hiện tượng 'Bế tắc' (Deadlock) trong hệ thống đa nhiệm xảy ra khi nào?**

- **A.** Các tác vụ cùng bị chặn do giữ tài nguyên của nhau
- **B.** Vi điều khiển bị mất nguồn điện cung cấp đột ngột
- **C.** Bộ nhớ ngăn xếp của tác vụ bị tràn sang vùng khác
- **D.** Tốc độ xung nhịp vượt quá giới hạn thiết kế phần cứng

> **Đáp án:** **A**  
> **Giải thích:** Deadlock xảy ra khi tồn tại chu trình phụ thuộc vòng tròn giữa các khóa tài nguyên, khiến toàn bộ tiến trình dừng hoạt động.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 153
**Để chủ động phòng tránh hiện tượng Deadlock khi lập trình nhiều Mutex, nguyên tắc vàng về thứ tự khóa là gì?**

- **A.** Không bao giờ cấp phát quyền giải phóng khóa Mutex
- **B.** Chỉ cho phép một tác vụ duy nhất chạy trong hệ thống
- **C.** Chiếm giữ các khóa Mutex theo một thứ tự định trước
- **D.** Khóa và mở khóa ngẫu nhiên theo trạng thái tài nguyên

> **Đáp án:** **C**  
> **Giải thích:** Nếu mọi tác vụ đều chiếm khóa A trước rồi mới chiếm khóa B, chu trình phụ thuộc vòng tròn không thể hình thành.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 154
**Khi chuyển sang Safe Mode, phân hệ C&DH thường thực hiện hành động nào đối với các tác vụ phần mềm?**

- **A.** Dừng tác vụ tải trọng, duy trì nhận lệnh và giám sát nguồn
- **B.** Ngắt nguồn kết nối đến toàn bộ cảm biến và cơ cấu chấp hành
- **C.** Ép xung nhịp vi điều khiển trung tâm lên tần số cực đại
- **D.** Định dạng lại phân vùng hệ điều hành trong bộ nhớ Flash

> **Đáp án:** **A**  
> **Giải thích:** Giải phóng tài nguyên và năng lượng để vệ tinh tập trung duy trì kết nối sống còn với trạm điều khiển mặt đất.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 155
**Bộ đệm vòng tròn (Circular Buffer / Ring Buffer) trong bộ nhớ C&DH được ứng dụng phổ biến cho tác vụ nào?**

- **A.** Lưu trữ mã nguồn chương trình nhị phân của hệ điều hành
- **B.** Chuyển đổi điện áp pin thành góc quay cho tấm pin mặt trời
- **C.** Tối ưu hóa tần số dao động của bộ tạo xung nhịp thạch anh
- **D.** Lưu dữ liệu nhật ký liên tục và tự ghi đè khi bộ đệm đầy

> **Đáp án:** **D**  
> **Giải thích:** Ring Buffer hoạt động với kích thước bộ nhớ cố định, liên tục duy trì cửa sổ dữ liệu giám sát gần nhất mà không cần dọn dẹp RAM.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 156
**Khi vệ tinh nhận lệnh 'Reboot' từ trạm mặt đất, trước khi gọi hàm reset vi điều khiển, C&DH bắt buộc phải hoàn tất tác vụ nào?**

- **A.** Kích hoạt đèn chỉ thị trạng thái hoạt động ở mức sáng tối đa
- **B.** Đóng và lưu toàn bộ tệp tin, xả sạch các bộ đệm truyền thông
- **C.** Định dạng lại phân vùng lưu trữ hệ thống trên thẻ nhớ thứ cấp
- **D.** Tăng công suất phát sóng của khối vô tuyến lên mức tối đa quy định

> **Đáp án:** **B**  
> **Giải thích:** Đóng tệp đúng quy trình bảo vệ cấu trúc bảng phân bổ FAT của thẻ nhớ không bị hư hại (Corrupt) khi chip ngắt điện.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 157
**Phương thức `SD.exists(/data.csv)` trong C++ thực hiện tác vụ kiểm tra nào?**

- **A.** Xóa bỏ hoàn toàn tệp tin data.csv khỏi hệ thống thẻ
- **B.** Đo kích thước tổng thể và số cluster của tệp chỉ định
- **C.** Tạo mới tệp tin nếu tệp chưa từng tồn tại trên bộ nhớ
- **D.** Kiểm tra sự tồn tại của tệp hoặc thư mục trên thẻ nhớ

> **Đáp án:** **D**  
> **Giải thích:** Hàm exists() tra cứu bảng thư mục FAT để xác nhận sự hiện diện của đường dẫn tệp.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 158
**Hàm tạo tác vụ (Task) độc lập trong hệ điều hành FreeRTOS trên vi điều khiển ESP32 có tên gọi chuẩn là gì?**

- **A.** Lệnh gọi RTOS.runTask()
- **B.** Hàm xTaskCreatePinnedToCore()
- **C.** Lệnh khởi tạo startTask()
- **D.** Hàm hệ thống createThread()

> **Đáp án:** **B**  
> **Giải thích:** Hàm xTaskCreatePinnedToCore tạo luồng thực thi mới và ghim tác vụ đó vào nhân xử lý cụ thể (Core 0 hoặc Core 1).  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 159
**Tham số `usStackDepth` trong hàm `xTaskCreatePinnedToCore()` quy định thông số nào của tác vụ?**

- **A.** Kích thước ngăn xếp cấp phát cho tác vụ theo từ nhớ
- **B.** Mức độ ưu tiên thực thi của tác vụ trong hệ điều hành
- **C.** Tần số chu kỳ kích hoạt của tác vụ lấy mẫu cảm biến
- **D.** Thời gian chạy tối đa trước khi tác vụ bị cưỡng chế

> **Đáp án:** **A**  
> **Giải thích:** Cần tính toán cấp phát dung lượng stack vừa đủ: quá nhỏ gây tràn stack, quá lớn gây lãng phí bộ nhớ RAM hệ thống.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 160
**Tham số `uxPriority` trong hàm `xTaskCreate()` có ý nghĩa gì đối với bộ lập lịch FreeRTOS?**

- **A.** Số lượng nhân chạy tác vụ
- **B.** Mức độ ưu tiên của tác vụ
- **C.** Tên của tác vụ
- **D.** Tần số quét

> **Đáp án:** **B**  
> **Giải thích:** Bộ lập lịch Preemptive của FreeRTOS luôn trao quyền thực thi cho tác vụ có mức ưu tiên cao nhất đang ở trạng thái Ready.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 161
**Hàm tạo độ trễ trong FreeRTOS `vTaskDelay(pdMS_TO_TICKS(1000));` khác biệt căn bản với hàm `delay(1000)` ở điểm nào?**

- **A.** vTaskDelay có tốc độ xử lý nhanh hơn delay một trăm lần
- **B.** Hai hàm này hoàn toàn giống hệt nhau về cơ chế hoạt động
- **C.** vTaskDelay nhường CPU cho tác vụ khác, delay thì không
- **D.** Hàm delay tiết kiệm dung lượng bộ nhớ RAM nhiều hơn hẳn

> **Đáp án:** **C**  
> **Giải thích:** Hàm delay() chiếm dụng CPU chạy vòng lặp rỗng (busy-wait), trong khi vTaskDelay() nhường CPU cho các tác vụ khác làm việc.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 162
**Hàm `vTaskDelayUntil()` trong FreeRTOS mang lại ưu thế vượt trội nào cho các tác vụ lấy mẫu cảm biến tuần hoàn?**

- **A.** Tự động nâng cao độ phân giải lấy mẫu của các cảm biến
- **B.** Hoạt động chính xác mà không cần dùng đến ngắt định thời
- **C.** Đảm bảo chu kỳ thực thi cố định, tránh sai số tích lũy
- **D.** Giảm dòng tiêu thụ của vi điều khiển xuống mức tối thiểu

> **Đáp án:** **C**  
> **Giải thích:** vTaskDelayUntil tính toán khoảng thời gian ngủ bù trừ cho thời gian thực thi của chính tác vụ trong chu kỳ đó.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 163
**Để tạo một khóa Mutex trong FreeRTOS nhằm bảo vệ giao tiếp với thẻ nhớ SD, hàm khởi tạo C++ là:**

- **A.** Hàm xSemaphoreCreateMutex() cấp phát và trả về thẻ quản lý Semaphore
- **B.** Hàm xTaskCreateMutex() gán vùng nhớ khóa độc quyền cho tác vụ
- **C.** Toán tử new khởi tạo đối tượng Mutex thuộc kiểu Semaphore nhị phân
- **D.** Hàm initMutex() cấu hình cờ tài nguyên dùng chung trong nhân RTOS

> **Đáp án:** **A**  
> **Giải thích:** Hàm xSemaphoreCreateMutex() cấp phát cấu trúc dữ liệu Mutex nội bộ và trả về con trỏ quản lý SemaphoreHandle_t.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 164
**Để chiếm quyền giữ khóa Mutex trước khi bắt đầu ghi tệp trên thẻ nhớ, hàm FreeRTOS nào được gọi?**

- **A.** Hàm xMutexLock() với đối số chỉ định khóa tài nguyên
- **B.** Hàm xSemaphoreTake() với tham số thời gian chờ là portMAX_DELAY
- **C.** Hàm xSemaphoreGive() để báo hiệu tài nguyên đang bận
- **D.** Hàm waitMutex() yêu cầu nhân hệ điều hành cấp phát khóa

> **Đáp án:** **B**  
> **Giải thích:** Hàm xSemaphoreTake phong bế tác vụ chờ cho đến khi Mutex được giải phóng hoặc hết hạn thời gian timeout.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 165
**Tham số `portMAX_DELAY` trong hàm `xSemaphoreTake(mutex, portMAX_DELAY)` có ý nghĩa gì?**

- **A.** Tự động hủy bỏ khóa Mutex ngay khi xảy ra tình huống tranh chấp
- **B.** Chờ vô hạn cho đến khi chiếm được quyền sở hữu khóa Mutex
- **C.** Chỉ chờ tối đa một mili-giây rồi bỏ qua hoàn toàn thao tác khóa
- **D.** Không chờ đợi và trả về mã lỗi ngay nếu khóa hiện đang bận

> **Đáp án:** **B**  
> **Giải thích:** Hằng số portMAX_DELAY báo cho bộ lập lịch đưa tác vụ vào hàng đợi ngủ chờ không giới hạn thời gian.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 166
**Sau khi hoàn tất thao tác ghi thẻ nhớ trong Critical Section, lệnh bắt buộc phải gọi để nhả khóa Mutex cho các tác vụ khác là:**

- **A.** Hàm deleteMutex() hủy hoàn toàn đối tượng khóa khỏi bộ nhớ
- **B.** Hàm xSemaphoreTake() để xác nhận hoàn tất tác vụ ghi thẻ
- **C.** Hàm xSemaphoreGive() để trả quyền kiểm soát khóa cho tác vụ khác
- **D.** Hàm release() ngắt kết nối khóa khỏi tác vụ hiện hành

> **Đáp án:** **C**  
> **Giải thích:** Hàm xSemaphoreGive trả lại chìa khóa Mutex, đánh thức tác vụ tiếp theo có độ ưu tiên cao nhất đang chờ trong hàng đợi.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 167
**Nếu một tác vụ quên không gọi `xSemaphoreGive(mutex)` sau khi ghi thẻ nhớ xong, hậu quả thảm hại gì sẽ xảy ra?**

- **A.** Vi điều khiển tăng tốc độ thực thi xung nhịp lên gấp đôi
- **B.** Mô đun thẻ nhớ ngoài bị hư hỏng linh kiện bán dẫn vật lý
- **C.** Hệ điều hành tự động định dạng lại toàn bộ phân vùng tệp
- **D.** Các tác vụ khác bị chặn vĩnh viễn gây tê liệt hệ thống

> **Đáp án:** **D**  
> **Giải thích:** Quên nhả Mutex là lỗi rò rỉ khóa (Lock Leak) kinh điển dẫn tới bế tắc toàn bộ các luồng truy xuất tài nguyên dùng chung.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 168
**Để truyền một con trỏ hoặc bản ghi cấu trúc Telemetry từ tác vụ thu thập sang tác vụ ghi thẻ nhớ, cơ chế FreeRTOS nào là tối ưu nhất?**

- **A.** Ghi dữ liệu trực tiếp vào bộ nhớ flash nội bộ của chip
- **B.** Sử dụng hàm delay để đồng bộ hóa chu kỳ giữa các tác vụ
- **C.** Dùng hàng đợi QueueHandle_t kết hợp xQueueSend, Receive
- **D.** Sử dụng biến toàn cục dùng chung mà không cần bất kỳ khóa nào

> **Đáp án:** **C**  
> **Giải thích:** Queue cung cấp bộ đệm FIFO luồng an toàn (Thread-safe) giữa các tác vụ mà không cần tự xây dựng cơ chế khóa phức tạp.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 169
**Khi làm việc với tệp tin trên thẻ nhớ trong FreeRTOS, tại sao việc chia sẻ chung một con trỏ đối tượng `File` giữa hai tác vụ chạy song song là cực kỳ nguy hiểm?**

- **A.** Thẻ nhớ chỉ cho phép duy nhất một tác vụ truy cập trong suốt vòng đời
- **B.** Đối tượng File có con trỏ ghi đọc chung, truy cập đồng thời làm hỏng tệp
- **C.** Bus giao tiếp SPI sẽ bị chập nguồn điện nếu có hai tác vụ cùng gọi hàm
- **D.** Vi điều khiển ESP32 không hỗ trợ cơ chế đa nhiệm khi truy cập phần cứng

> **Đáp án:** **D**  
> **Giải thích:** Trạng thái nội bộ của đối tượng File không phải là Thread-safe; cần cô lập thao tác tệp vào một tác vụ duy nhất hoặc dùng Mutex bảo vệ.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 170
**Lệnh nào trong FreeRTOS được sử dụng để tự kết thúc và giải phóng hoàn toàn vùng nhớ ngăn xếp của chính tác vụ hiện tại?**

- **A.** Sử dụng lệnh return để thoát khỏi hàm vòng lặp vô hạn
- **B.** Gọi hàm vTaskEnd() để ra lệnh dừng bộ lập lịch hệ điều hành
- **C.** Gọi hàm exit(0) để ngắt toàn bộ tiến trình của vi điều khiển
- **D.** Gọi hàm vTaskDelete(NULL) với tham số NULL chỉ định chính tác vụ này

> **Đáp án:** **D**  
> **Giải thích:** Truyền tham số NULL vào hàm vTaskDelete() yêu cầu hệ điều hành hủy bỏ tác vụ đang chạy và thu hồi bộ nhớ stack.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 171
**Để truyền một con trỏ tham số khởi tạo cấu hình vào hàm tác vụ FreeRTOS khi gọi `xTaskCreatePinnedToCore()`, tham số nào được sử dụng?**

- **A.** Không thể truyền tham số
- **B.** Tham số pcName
- **C.** Tham số pvParameters
- **D.** Tham số uxPriority

> **Đáp án:** **C**  
> **Giải thích:** Con trỏ pvParameters cho phép truyền địa chỉ của cấu trúc dữ liệu tùy ý vào tác vụ mới được tạo.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

### Câu 172
**Cơ chế bảo vệ Semaphore và Mutex trong phần mềm nhúng C&DH ngăn ngừa lỗi gì?**

- **A.** Ngăn chặn hai tác vụ cùng truy cập đồng thời vào một bus ngoại vi chia sẻ
- **B.** Ngăn chặn các tia vũ trụ làm thay đổi tần số dao động thạch anh trên bo
- **C.** Tự động chuyển đổi giao thức I2C sang giao thức mạng không dây cục bộ
- **D.** Tăng tốc độ ghi dữ liệu nhị phân vào thẻ nhớ lên mức một gigabyte giây

> **Đáp án:** **A**  
> **Giải thích:** Khi nhiều tác vụ cùng sử dụng chung một tài nguyên (như bus I2C hoặc SPI thẻ nhớ), Mutex đảm bảo chỉ một tác vụ được thao tác tại một thời điểm, tránh xung đột dữ liệu.  
> **Mục tiêu củng cố:** Hiểu cơ chế đa nhiệm tiền định FreeRTOS, hiện tượng nghịch đảo ưu tiên và khóa Mutex  

---

## 📖 Doc 3.4: Bộ Định Thời Giám Sát Phần Cứng Watchdog Timer & Kiến Trúc Tự Phục Hồi FDIR (11 câu)

### Câu 173
**Khái niệm 'Hàng đợi Thông điệp' (Message Queue) trong FreeRTOS mang lại lợi ích nào cho giao tiếp liên tác vụ (IPC)?**

- **A.** Lưu trữ trực tiếp luồng video từ camera tải trọng
- **B.** Truyền dữ liệu an toàn và có thứ tự giữa các tác vụ
- **C.** Tự động đồng bộ hóa thời gian thực qua sóng vô tuyến
- **D.** Tăng tốc độ xung nhịp cho khối truyền thông nối tiếp

> **Đáp án:** **B**  
> **Giải thích:** Queue sao chép dữ liệu theo giá trị (by value) vào bộ đệm nội bộ của RTOS, tách biệt hoàn toàn vòng đời của hai tác vụ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 174
**Khái niệm 'Chó canh phần cứng' (Hardware Watchdog Timer - WDT) đóng vai trò lá chắn sống còn nào cho vệ tinh?**

- **A.** Báo động khi phát hiện xâm nhập cơ học từ bên ngoài
- **B.** Tự động reset chip nếu phần mềm không xóa cờ định kỳ
- **C.** Tự động phát tín hiệu cấp cứu vô tuyến về mặt đất
- **D.** Điều chỉnh hướng tấm pin mặt trời theo góc chiếu sáng

> **Đáp án:** **B**  
> **Giải thích:** Nếu phần mềm bị treo vào vòng lặp vô hạn, WDT sẽ đếm tràn (Timeout) và tái khởi động lại vi điều khiển về trạng thái an toàn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 175
**Hành động phần mềm định kỳ ghi tín hiệu xóa bộ đếm của Watchdog Timer được gọi bằng thuật ngữ chuyên ngành là gì?**

- **A.** Bẻ gãy đồng hồ
- **B.** Cho chó ăn / Đá chó canh
- **C.** Khóa chó canh
- **D.** Đặt lại ngày giờ

> **Đáp án:** **B**  
> **Giải thích:** Lệnh 'feed the dog' đặt lại bộ đếm WDT về 0 trước khi hết hạn thời gian quy định (thường từ vài trăm ms đến vài giây).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 176
**Nếu một lập trình viên đặt lệnh 'đá chó' WDT bên trong một chương trình ngắt định thời (Timer ISR) chạy độc lập, sai lầm nghiêm trọng là gì?**

- **A.** WDT vẫn bị xóa dù các tác vụ nghiệp vụ đã bị treo
- **B.** Bộ tạo dao động thạch anh ngoại vi bị hỏng vĩnh viễn
- **C.** Bộ đếm thời gian hệ thống hoạt động vượt ngưỡng chuẩn
- **D.** Nguồn pin vệ tinh bị suy giảm dung lượng nhanh chóng

> **Đáp án:** **A**  
> **Giải thích:** Ngắt Timer vẫn chạy ngầm định kỳ dù luồng chính bị lỗi; WDT phải do luồng nghiệp vụ chính kiểm tra và kích hoạt mới phản ánh sức khỏe thực sự.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 177
**Khái niệm 'Task Watchdog Timer' (TWDT) trong hệ điều hành FreeRTOS trên ESP32 theo dõi đối tượng nào?**

- **A.** Theo dõi nhiệt độ thực tế trên các khối nguồn thứ cấp
- **B.** Theo dõi tình trạng phản hồi định kỳ của từng tác vụ
- **C.** Giám sát cường độ tín hiệu thu phát trên anten vô tuyến
- **D.** Tính toán tọa độ và vận tốc của vệ tinh trên quỹ đạo

> **Đáp án:** **B**  
> **Giải thích:** TWDT của ESP-IDF cho phép phát hiện chính xác tác vụ nào đang bị chiếm dụng CPU quá lâu hoặc bị kẹt chết.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 178
**Khoảng thời gian Timeout điển hình thường được thiết lập cho Watchdog Timer trên hệ thống máy tính vệ tinh là bao nhiêu?**

- **A.** 5 đến 7 ngày
- **B.** 30 đến 60 phút
- **C.** 1 đến 5 giây
- **D.** 10 đến 50 micro-giây

> **Đáp án:** **C**  
> **Giải thích:** Ngưỡng 1-5 giây đủ dài để hệ thống hoàn tất các tác vụ ghi thẻ nhớ nặng nề, nhưng đủ ngắn để khôi phục vệ tinh kịp thời.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 179
**Khái niệm 'Fault Detection, Isolation and Recovery' (FDIR) trong C&DH là gì?**

- **A.** Phần mềm giám sát và biểu diễn đồ thị thông số viễn đo
- **B.** Cảm biến đo nhiệt độ tiếp giáp của các khối nguồn thứ cấp
- **C.** Bộ nhớ lưu trữ dữ liệu tốc độ cao tích hợp trên bo C&DH
- **D.** Quy trình tự động phát hiện, cô lập và phục hồi lỗi hệ thống

> **Đáp án:** **D**  
> **Giải thích:** Do độ trễ liên lạc và cửa sổ bay hạn chế, vệ tinh phải có năng lực tự cứu lấy mình khi phát sinh sự cố bất ngờ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 180
**Khái niệm 'Watchdog Task' (Tác vụ giám sát phần mềm) trong kiến trúc đa nhiệm C&DH có nhiệm vụ gì?**

- **A.** Vô hiệu hóa cổng giao tiếp nối tiếp khi hệ thống bận
- **B.** Liên tục gửi bản tin trạng thái lên giao diện trạm
- **C.** Kiểm tra các tác vụ trước khi xóa cờ WDT phần cứng
- **D.** Tắt màn hình giám sát để bảo vệ mạch tải trọng ngoài

> **Đáp án:** **C**  
> **Giải thích:** Nếu bất kỳ một tác vụ con nào bị kẹt hoặc chết, Watchdog Task sẽ cố tình không đá WDT phần cứng để chip reset phục hồi.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 181
**Hàm khởi tạo một hàng đợi thông điệp chứa tối đa 10 gói tin, mỗi gói có kích thước bằng `sizeof(TelemetryData)` là:**

- **A.** Sử dụng toán tử new để cấp phát mảng 10 phần tử TelemetryData
- **B.** Gọi hàm xTaskCreateQueue() với tham số kích thước mảng byte
- **C.** Gọi hàm xQueueCreate() với số lượng 10 và kích thước sizeof(TelemetryData)
- **D.** Gọi hàm createQueue() cấu hình đệm FIFO tĩnh trên bộ nhớ DRAM

> **Đáp án:** **C**  
> **Giải thích:** Hàm xQueueCreate cấp phát vùng nhớ RAM liên tục đủ chứa 10 phần tử dữ liệu cấu trúc.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 182
**Khi hàng đợi Queue đã bị lấp đầy 10 phần tử, hàm `xQueueSend(q, &data, 0)` với timeout bằng 0 sẽ phản ứng như thế nào?**

- **A.** Gọi xQueueSend() với khoảng thời gian chờ giới hạn 100 mili-giây
- **B.** Gọi xQueueSend() với tham số thời gian chờ là portMAX_DELAY
- **C.** Gọi sendQueue() thiết lập cờ ngắt không chờ phản hồi của tác vụ
- **D.** Gọi phương thức push() trực tiếp lên cấu trúc đệm vòng tròn FIFO

> **Đáp án:** **B**  
> **Giải thích:** Timeout = 0 (Non-blocking send) cho phép tác vụ kiểm tra kết quả ngay và chủ động ghi log cảnh báo hàng đợi bị tràn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

### Câu 183
**Hàng đợi thông điệp (Message Queue) trong kiến trúc phần mềm C&DH dùng để làm gì?**

- **A.** Truyền nhận an toàn dữ liệu và tín hiệu đồng bộ giữa các tác vụ độc lập
- **B.** Lưu trữ vĩnh viễn các bức ảnh chụp được khi bộ nhớ Flash bị hỏng hoàn toàn
- **C.** Khuếch đại biên độ tín hiệu âm tần trước khi đưa vào bộ điều chế sóng mang
- **D.** Đo đạc chính xác dòng rò tĩnh của các bóng bán dẫn hiệu ứng trường CMOS

> **Đáp án:** **A**  
> **Giải thích:** Message Queue là cơ chế IPC (Inter-Process Communication) an toàn luồng, cho phép một tác vụ (ví dụ nhận lệnh UART) gửi gói tin cho tác vụ thực thi xử lý tuần tự.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý hoạt động của WDT và chiến lược xử lý sự cố FDIR  

---

## 💻 Thực hành: Giao Tiếp Thẻ Nhớ MicroSD SPI & Lưu Trữ Dữ Liệu (Lab3-01a, Lab3-01b) (18 câu)

### Câu 184
**Thuật toán mã sửa lỗi 'Error Correction Code' (ECC) tích hợp trong hệ thống lưu trữ của C&DH giúp đạt được năng lực nào?**

- **A.** Tăng tốc độ đọc ghi dữ liệu trên giao tiếp ngoại vi SPI
- **B.** Mở rộng gấp đôi dung lượng lưu trữ khả dụng của bộ nhớ
- **C.** Tự động loại bỏ các đoạn mã độc phát sinh trong bộ nhớ
- **D.** Tự động phát hiện và sửa các bit dữ liệu bị lật sai lệch

> **Đáp án:** **D**  
> **Giải thích:** Thuật toán như Hamming hoặc Reed-Solomon có thể tự khôi phục dữ liệu gốc nếu số bit bị hỏng nằm trong ngưỡng cho phép.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 185
**Mục tiêu của việc sử dụng định dạng tệp CSV (Comma-Separated Values) cho nhật ký telemetry trên thẻ nhớ vệ tinh là gì?**

- **A.** Tạo định dạng hiển thị nhiều màu sắc trên phần mềm trạm mặt đất
- **B.** Dạng văn bản trực quan, nhẹ, dễ xử lý bằng C++ và bảng tính
- **C.** Giảm dung lượng chiếm dụng của bộ nhớ RAM trong quá trình khởi động
- **D.** Mã hóa tuyệt mật nội dung dữ liệu trước khi phát xuống mặt đất

> **Đáp án:** **B**  
> **Giải thích:** Các trường dữ liệu ngăn cách nhau bởi dấu phẩy giúp việc phân tích và trực quan hóa telemetry sau này trở nên cực kỳ thuận tiện.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 186
**Lệnh C++ chuẩn để khởi tạo giao tiếp với thẻ nhớ SD bằng chân chọn chip `CS_PIN` là gì?**

- **A.** Phương thức SD.init() thiết lập thanh ghi SPI
- **B.** Phương thức SD.start() kích hoạt luồng truyền thông
- **C.** Phương thức SD.begin() chỉ định chân chọn chip CS
- **D.** Phương thức SD.open() nạp tệp hệ thống đầu tiên

> **Đáp án:** **C**  
> **Giải thích:** Hàm SD.begin(ssPin) cấu hình các chân SPI, phát chuỗi xung chuyển chế độ và nạp cấu trúc hệ thống tệp FAT32.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 187
**Giá trị trả về của hàm `SD.begin(CS_PIN)` trong ngôn ngữ C++ có kiểu dữ liệu và ý nghĩa gì?**

- **A.** Kiểu int, trả về tổng dung lượng của thẻ nhớ
- **B.** Kiểu float, trả về điện áp hoạt động của thẻ
- **C.** Kiểu String, trả về chuỗi tên tệp hệ thống
- **D.** Kiểu bool, trả về true nếu thành công và false

> **Đáp án:** **D**  
> **Giải thích:** Kiểm tra giá trị trả về của SD.begin() là bước sống còn để phát hiện sớm các sự cố về thẻ nhớ trước khi ghi tệp.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 188
**Đoạn mã C++ nào sau đây kiểm tra an toàn kết nối thẻ nhớ và in thông báo lỗi nếu không tìm thấy thẻ?**

- **A.** Dùng vòng lặp chờ vô hạn cho đến khi hàm SD.begin() trả về
- **B.** Gọi trực tiếp hàm SD.begin() và bỏ qua giá trị trả về
- **C.** Tự động format thẻ nhớ nếu hàm SD.begin() trả về giá trị false
- **D.** Kiểm tra giá trị trả về của SD.begin(), nếu false thì ghi nhận lỗi và thoát hàm

> **Đáp án:** **D**  
> **Giải thích:** Mẫu code chuẩn kiểm tra kết quả khởi tạo, cảnh báo lỗi lên Serial và thoát hàm để tránh crash chương trình.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 189
**Đối tượng `File` trả về từ phương thức `SD.open()` có thể được kiểm tra tính hợp lệ bằng cú pháp logic nào?**

- **A.** Kiểm tra thuộc tính kích thước tệp trả về có khác 0 hay không
- **B.** Kiểm tra điều kiện phủ định logic của đối tượng File (if (!myFile))
- **C.** So sánh con trỏ tệp trực tiếp với giá trị con trỏ rỗng NULL
- **D.** So sánh đối tượng tệp có bằng hằng số logic boolean true hay không

> **Đáp án:** **B**  
> **Giải thích:** Lớp File nạp chồng toán tử bool; biểu thức `!myFile` trả về true nếu việc mở tệp thất bại (ví dụ tệp không tồn tại hoặc thẻ bị đầy).  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 190
**Phương thức `myFile.flush()` có ý nghĩa kỹ thuật sống còn nào đối với hệ thống máy tính vệ tinh?**

- **A.** Đẩy dữ liệu từ bộ đệm RAM xuống thẻ nhớ Flash vật lý
- **B.** Đóng vĩnh viễn tệp dữ liệu và hủy đối tượng tệp tin
- **C.** Xóa trắng toàn bộ nội dung dữ liệu bên trong tệp tin
- **D.** Đổi tên tệp dữ liệu sang một định dạng tệp tin dự phòng

> **Đáp án:** **A**  
> **Giải thích:** Nếu mất nguồn trước khi gọi flush() hoặc close(), dữ liệu còn nằm trong bộ đệm RAM 512-byte sẽ bị mất hoàn toàn.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 191
**Sự khác biệt cốt lõi giữa phương thức `myFile.flush()` và `myFile.close()` trong C++ là gì?**

- **A.** close chạy nhanh hơn phương thức flush gấp nhiều lần khi thực thi
- **B.** flush thực hiện xóa thẻ nhớ còn phương thức close thì giữ nguyên tệp
- **C.** flush đẩy đệm nhưng giữ tệp mở; close xả đệm rồi đóng hẳn tệp tin
- **D.** Hai phương thức này hoàn toàn tương đương nhau về mặt hành vi phần mềm

> **Đáp án:** **C**  
> **Giải thích:** Gọi flush() định kỳ bảo đảm dữ liệu được lưu an toàn xuống thẻ nhớ mà không cần tốn chi phí mở lại tệp.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 192
**Để đóng tệp tin và giải phóng hoàn toàn các tài nguyên vùng nhớ liên quan trên ESP32, lệnh C++ là:**

- **A.** Phương thức myFile.close() đóng tệp và giải phóng đệm
- **B.** Phương thức myFile.release() hủy con trỏ tham chiếu
- **C.** Phương thức myFile.stop() dừng tác vụ đọc ghi hiện hành
- **D.** Phương thức myFile.end() đặt lại trạng thái kênh SPI

> **Đáp án:** **A**  
> **Giải thích:** Hàm close() cập nhật kích thước tệp trong bảng thư mục FAT và giải phóng con trỏ tệp trong hệ thống.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 193
**Đoạn mã C++ nào sau đây in toàn bộ nội dung của tệp `log.txt` ra cửa sổ Serial Monitor một cách chuẩn xác?**

- **A.** Đọc toàn bộ tệp vào một biến String duy nhất rồi in ra cổng Serial
- **B.** Lặp kiểm tra còn dữ liệu bằng available(), đọc từng byte và ghi ra Serial
- **C.** Gọi hàm đọc toàn bộ tệp readAll() và truyền trực tiếp vào cổng Serial
- **D.** Chỉ đọc duy nhất một byte đầu tiên tại vị trí con trỏ của tệp tin

> **Đáp án:** **B**  
> **Giải thích:** Vòng lặp đọc từng byte bằng f.read() và xuất trực tiếp ra Serial bằng Serial.write() cho đến khi hết dữ liệu sẵn sàng.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 194
**Để xóa vĩnh viễn một tệp tin đã có trên thẻ nhớ (ví dụ tệp `/temp.txt`), lệnh C++ nào được gọi?**

- **A.** Phương thức SD.erase() định dạng vùng nhớ tệp
- **B.** Phương thức SD.delete() xóa bản ghi tệp trong bảng FAT
- **C.** Phương thức SD.remove() xóa tệp tin theo đường dẫn chỉ định
- **D.** Phương thức SD.clear() đặt toàn bộ byte của tệp về 0

> **Đáp án:** **C**  
> **Giải thích:** Hàm remove(path) xóa mục từ của tệp trong thư mục và trả các cluster liên quan về danh sách trống của bảng FAT.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 195
**Để tạo một thư mục mới trên thẻ nhớ (ví dụ thư mục `/telemetry`), lệnh C++ tương ứng là:**

- **A.** Phương thức SD.addDir() đăng ký thư mục mới
- **B.** Phương thức SD.newDir() khởi tạo mục lục thư mục
- **C.** Phương thức SD.createFolder() tạo thư mục đa tầng
- **D.** Phương thức SD.mkdir() tạo thư mục theo đường dẫn chỉ định

> **Đáp án:** **D**  
> **Giải thích:** Hàm mkdir(path) tạo một Directory Entry mới có thuộc tính thư mục (0x10) trên cấu trúc cây của FAT32.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 196
**Để xóa một thư mục rỗng trên thẻ nhớ, hàm C++ nào được sử dụng?**

- **A.** Phương thức SD.clearDir() xóa các liên kết thư mục
- **B.** Phương thức SD.removeDir() hủy phân vùng thư mục
- **C.** Phương thức SD.rmdir() xóa thư mục rỗng chỉ định
- **D.** Phương thức SD.deleteFolder() giải phóng bảng thư mục

> **Đáp án:** **C**  
> **Giải thích:** Hàm rmdir(path) loại bỏ thư mục chỉ định với điều kiện thư mục đó không chứa tệp tin con bên trong.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 197
**Đoạn mã C++ nào sau đây ghi một dòng tiêu đề (Header) cho tệp CSV chỉ khi tệp đó được tạo mới lần đầu?**

- **A.** Luôn xóa tệp tin cũ đi nếu tệp đã tồn tại trước khi ghi tiêu đề
- **B.** Chỉ tạo tệp rỗng bằng hàm touch() nếu tệp chưa từng tồn tại
- **C.** Luôn mở tệp ở chế độ ghi mới để tự động chèn dòng tiêu đề
- **D.** Dùng hàm SD.exists() kiểm tra, chỉ ghi tiêu đề nếu tệp chưa tồn tại

> **Đáp án:** **D**  
> **Giải thích:** Kiểm tra exists() trước khi mở tệp ghi ngăn chặn việc ghi đè dòng tiêu đề lặp lại vào giữa tệp dữ liệu cũ.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 198
**Để mở thư mục gốc `/` và duyệt tuần tự các tệp con bên trong bằng thư viện SD trên ESP32, đoạn mã khởi tạo là:**

- **A.** Mở thư mục gốc và gọi hàm listAll() để in toàn bộ tệp tin
- **B.** Mở thư mục gốc bằng hàm getFiles() để lấy danh sách mảng tệp
- **C.** Mở thư mục gốc rồi lặp gọi openNextFile() đến khi trả về đối tượng rỗng
- **D.** Mở thư mục gốc và gọi hàm list() để nạp vào danh sách đệm

> **Đáp án:** **C**  
> **Giải thích:** Phương thức openNextFile() duyệt tuần tự qua từng mục từ trong bảng thư mục cho đến khi không còn tệp nào (trả về false).  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 199
**Hàm C++ nào sau đây loại bỏ các ký tự khoảng trắng thừa (Whitespace) hoặc ký tự xuống dòng `\r`, `\n` ở hai đầu của chuỗi lệnh?**

- **A.** Dùng hàm strlen() để đếm số ký tự
- **B.** Dùng hàm strcpy() để sao chép chuỗi
- **C.** Dùng hàm atoi() để chuyển thành số
- **D.** Dùng hàm trim() hoặc gán ký tự '\0'

> **Đáp án:** **D**  
> **Giải thích:** Thao tác trim loại bỏ các ký tự điều khiển ẩn, giúp phép so sánh lệnh bằng strcmp không bị sai lệch ngoài ý muốn.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 200
**Cú pháp C++ nào sau đây giúp định dạng dữ liệu Telemetry thành một dòng văn bản CSV chuẩn xác để ghi vào thẻ nhớ?**

- **A.** Dùng hàm snprintf() với kích thước đệm đích để kiểm soát tràn chuỗi
- **B.** Dùng hàm snprintf() định dạng toàn bộ các trường số thành ký tự chuỗi %s
- **C.** Dùng hàm snprintf() với hằng số độ dài cố định không kiểm tra kích thước đệm
- **D.** Dùng hàm strncpy() sao chép trực tiếp định dạng thô vào bộ đệm

> **Đáp án:** **A**  
> **Giải thích:** Hàm snprintf ghép các trường dữ liệu ngăn cách bởi dấu phẩy và kết thúc bằng mã xuống dòng chuẩn `\r\n`.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

### Câu 201
**Đoạn mã C++ nào sau đây đọc lần lượt từng dòng văn bản từ tệp nhật ký trên thẻ nhớ cho đến khi hết tệp?**

- **A.** Lặp kiểm tra available() và đọc toàn bộ tệp bằng readString()
- **B.** Lặp kiểm tra available() và phân tách từ đơn bằng readWord()
- **C.** Lặp kiểm tra available() và tách dòng bằng readStringUntil('\n')
- **D.** Lặp kiểm tra available() và gọi hàm giả định readLine()

> **Đáp án:** **C**  
> **Giải thích:** Hàm readStringUntil('\n') trích xuất từng bản ghi telemetry một cách tiện lợi để phục vụ phân tích.  
> **Mục tiêu củng cố:** Lập trình đọc ghi dữ liệu viễn trắc trên thẻ nhớ MicroSD qua bus SPI  

---

## 📖 Doc 3.2: Kiến Trúc Hệ Thống Lệnh Shell CLI & Phân Tích Cú Pháp Ký Tự (13 câu)

### Câu 202
**Khi truyền dữ liệu gói tin trong phân hệ C&DH, mã kiểm tra dư thừa tuần hoàn (CRC - Cyclic Redundancy Check) có vai trò gì?**

- **A.** Mã hóa nội dung dữ liệu nhằm ngăn chặn nghe lén thông tin
- **B.** Tăng tốc độ truyền tải trên kênh thông tin vô tuyến hai chiều
- **C.** Phát hiện lỗi sai lệch bit dữ liệu trên đường truyền vật lý
- **D.** Nén kích thước khung truyền để tiết kiệm băng thông vô tuyến

> **Đáp án:** **C**  
> **Giải thích:** Mã CRC (ví dụ CRC-16 hoặc CRC-32) phát hiện hầu như toàn bộ các lỗi chập chờn hoặc nhiễu bit đơn và đa bit.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 203
**Trước khi thẻ nhớ bắt đầu truyền khối 512 byte dữ liệu về cho Master trong lệnh đọc, thẻ sẽ gửi một byte đánh dấu bắt đầu (Data Token) có giá trị là:**

- **A.** 0xFF
- **B.** 0x55
- **C.** 0xFE
- **D.** 0x00

> **Đáp án:** **C**  
> **Giải thích:** Byte 0xFE là tín hiệu nhận diện bắt đầu khối dữ liệu hợp lệ (Data Start Token) trong chuẩn giao thức SPI của SD Card.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 204
**Khi lập trình giao diện dòng lệnh (CLI - Command Line Interface) qua cổng Serial, hàm nào trong C++ thường được dùng để phân tách chuỗi lệnh thành các từ tố (Tokens)?**

- **A.** strtok()
- **B.** split()
- **C.** slice()
- **D.** parse()

> **Đáp án:** **A**  
> **Giải thích:** Hàm strtok(str, delim) là hàm chuẩn trong thư viện string.h của C để tách chuỗi theo các ký tự phân cách (như dấu cách).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 205
**Lệnh dòng lệnh `ls` (List files) trong shell vệ tinh có chức năng tương ứng nào?**

- **A.** Định dạng lại toàn bộ phân vùng trên thẻ nhớ lưu trữ
- **B.** Liệt kê danh sách các tệp tin và thư mục có trên thẻ
- **C.** Khởi động lại toàn bộ hệ điều hành thời gian thực RTOS
- **D.** Hiển thị các thông số trạng thái pin và dòng tiêu thụ

> **Đáp án:** **B**  
> **Giải thích:** Lệnh ls (tương tự như trong Unix/Linux) quét thư mục gốc và in danh sách tên tệp kèm kích thước ra màn hình.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 206
**Lệnh dòng lệnh `cat <filename>` trong giao diện CLI của vệ tinh có chức năng gì?**

- **A.** Xóa bỏ hoàn toàn tệp tin chỉ định khỏi thẻ nhớ lưu trữ
- **B.** Di chuyển tệp tin sang một thư mục hệ thống dự phòng khác
- **C.** Sao chép nội dung tệp tin sang một phân vùng nhớ tạm thời
- **D.** Đọc và in toàn bộ nội dung tệp văn bản ra cổng Serial

> **Đáp án:** **D**  
> **Giải thích:** Lệnh cat (concatenate) là lệnh kinh điển để kiểm tra nhanh nội dung nhật ký telemetry lưu trong thẻ nhớ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 207
**Lệnh dòng lệnh `rm <filename>` trong giao diện CLI thực hiện hành vi nào sau đây?**

- **A.** Tạo một thư mục mới trên phân vùng lưu trữ của thẻ nhớ
- **B.** Đổi tên tệp tin chỉ định sang một định danh quy ước mới
- **C.** Xóa vĩnh viễn tệp tin chỉ định bằng hàm SD.remove()
- **D.** Tải tệp tin nhị phân từ trạm mặt đất vào hệ thống nhớ

> **Đáp án:** **C**  
> **Giải thích:** Lệnh rm (remove) giúp kỹ sư mặt đất dọn dẹp các tệp nhật ký cũ khi thẻ nhớ sắp đầy dung lượng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 208
**Lệnh dòng lệnh `df` (Disk Free) trong hệ thống C&DH hiển thị thông tin gì?**

- **A.** Hiển thị tổng số ngày hoạt động của vệ tinh trên quỹ đạo
- **B.** Hiển thị tổng dung lượng, đã dùng và còn trống của đĩa
- **C.** Định dạng lại toàn bộ phân vùng hệ thống tệp của thẻ nhớ
- **D.** Đo nhiệt độ hoạt động của khối vi điều khiển trung tâm

> **Đáp án:** **B**  
> **Giải thích:** Lệnh df (Disk Free) giúp người vận hành nắm bắt nhanh mức độ sử dụng không gian lưu trữ của hệ thống.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 209
**Lệnh dòng lệnh `reboot` trong giao diện CLI của vệ tinh kích hoạt chức năng gì?**

- **A.** Định dạng lại toàn bộ bộ nhớ flash của hệ thống vệ tinh
- **B.** Ngắt nguồn vĩnh viễn để đưa vệ tinh vào trạng thái ngủ
- **C.** Bật đèn tín hiệu chỉ thị trạng thái hoạt động trên bo
- **D.** Gọi hàm esp_restart() để khởi động lại máy tính nhúng OBC

> **Đáp án:** **D**  
> **Giải thích:** Lệnh reboot gửi qua cổng Serial cho phép kỹ sư tái khởi động hệ thống từ xa mà không cần ngắt điện thủ công.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 210
**Lệnh dòng lệnh `help` trong giao diện CLI đóng vai trò hỗ trợ nào cho người dùng?**

- **A.** Tự động phát hiện và sửa chữa các lỗi trong mã nguồn C++
- **B.** Gửi tín hiệu cấp cứu vô tuyến khẩn cấp về trạm điều khiển
- **C.** In ra danh sách các lệnh CLI kèm theo cú pháp hướng dẫn
- **D.** Kích hoạt kết nối mạng không dây công cộng của vi xử lý

> **Đáp án:** **C**  
> **Giải thích:** Lệnh help hiển thị menu trợ giúp tổng quan về các chức năng tương tác sẵn có của hệ thống.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 211
**Để đọc một dòng lệnh hoàn chỉnh nhập từ bàn phím qua Serial Monitor kết thúc bằng ký tự xuống dòng `\n`, thuật toán C++ an toàn là:**

- **A.** Gọi trực tiếp hàm Serial.readString() không giới hạn kích thước đệm
- **B.** Dùng vòng lặp vô hạn đọc ký tự liên tục mà không kiểm tra đệm tràn
- **C.** Chỉ đọc một byte duy nhất rồi xử lý ngay lập tức bỏ qua ký tự tiếp
- **D.** Đọc tuần tự từng ký tự vào mảng đệm cho đến khi gặp ký tự xuống dòng hoặc đầy đệm

> **Đáp án:** **D**  
> **Giải thích:** Thuật toán nhận ký tự có kiểm soát giới hạn biên mảng triệt tiêu hoàn toàn nguy cơ tràn bộ đệm khi nhập chuỗi quá dài.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 212
**Để định tuyến (Route) lệnh từ chuỗi nhập CLI đến hàm thực thi tương ứng, cấu trúc điều khiển C++ nào thường được sử dụng phổ biến?**

- **A.** Chuỗi các chỉ thị tiền xử lý định nghĩa sẵn
- **B.** Cấu trúc vòng lặp điều kiện lồng nhau phức tạp
- **C.** Lệnh nhảy trực tiếp không điều kiện trong mã
- **D.** Chuỗi so sánh chuỗi lệnh bằng hàm strcmp()

> **Đáp án:** **D**  
> **Giải thích:** Cấu trúc so sánh chuỗi tuần tự hoặc bảng băm ánh xạ chuỗi - con trỏ hàm (Function Pointer Dispatch Table) là giải pháp phân nhánh chuẩn cho CLI nhúng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 213
**Trong việc tổ chức CLI chuyên nghiệp, cấu trúc dữ liệu `struct Command { const char* name; void (*func)(int, char**); const char* desc; };` đem lại lợi ích gì?**

- **A.** Tăng cường điện áp cung cấp cho các linh kiện ngoại vi trên bo
- **B.** Đóng gói tên lệnh, hàm xử lý và mô tả giúp dễ quản lý mở rộng
- **C.** Giảm tốc độ xung nhịp xử lý của hệ thống để tiết kiệm năng lượng
- **D.** Tự động gửi email báo cáo trạng thái lỗi về cho trung tâm điều hành

> **Đáp án:** **B**  
> **Giải thích:** Bảng Command Table là mẫu thiết kế chuẩn công nghiệp cho các hệ thống Command Parser trên vệ tinh và thiết bị IoT nhúng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

### Câu 214
**Giao diện dòng lệnh CLI (Command Line Interface) trên C&DH thường dùng trong giai đoạn nào?**

- **A.** Giai đoạn tích hợp, kiểm tra thử nghiệm chức năng và gỡ lỗi mặt đất
- **B.** Chỉ kích hoạt khi vệ tinh đang thực hiện phóng tách tầng tên lửa
- **C.** Dùng để phát thông báo thoại trực tiếp cho các phi hành gia trên tàu
- **D.** Dùng để thay đổi vị trí tương đối của các hành tinh trong thái dương

> **Đáp án:** **A**  
> **Giải thích:** CLI qua cổng UART nối tiếp là công cụ cực kỳ thuận tiện để kỹ sư gõ lệnh kiểm tra từng cảm biến, đọc nhật ký và cấu hình thông số vệ tinh trong phòng sạch trước khi phóng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý thiết kế bộ phân tích cú pháp dòng lệnh Shell CLI  

---

## 💻 Thực hành: Hệ Thống Lệnh Dòng Lệnh Shell CLI Quản Lý Tệp (Lab3-02) (2 câu)

### Câu 215
**Khi lập trình CLI, hàm C++ nào sau đây giúp chuyển đổi toàn bộ các ký tự của chuỗi lệnh nhập vào thành chữ thường (Lowercase) để xử lý không phân biệt hoa thường?**

- **A.** Duyệt từng ký tự trong chuỗi và chuyển đổi bằng hàm toupper()
- **B.** Duyệt từng ký tự trong chuỗi và chuyển đổi bằng hàm toascii()
- **C.** Duyệt từng ký tự trong chuỗi và chuyển đổi bằng hàm tolower()
- **D.** Duyệt từng ký tự trong chuỗi và kiểm tra điều kiện bằng islower()

> **Đáp án:** **C**  
> **Giải thích:** Duyệt qua từng ký tự và dùng hàm tolower() chuẩn hóa chuỗi lệnh, giúp người dùng gõ `LS`, `Ls` hay `ls` thì hệ thống đều hiểu đúng.  
> **Mục tiêu củng cố:** Lập trình bộ phân tích cú pháp dòng lệnh CLI quản lý tập tin trên thẻ nhớ  

---

### Câu 216
**Cú pháp khai báo một con trỏ hàm trong C++ trỏ đến một hàm xử lý lệnh CLI có dạng `void handler(int argc, char** argv)` là:**

- **A.** Định nghĩa con trỏ hàm kiểu void nhận tham số độ dài int và đệm ký tự char*
- **B.** Định nghĩa con trỏ hàm kiểu int nhận tham số độ dài int và chuỗi ký tự char*
- **C.** Định nghĩa con trỏ hàm kiểu void nhận hai tham số int argc và char** argv
- **D.** Định nghĩa con trỏ hàm kiểu int nhận hai tham số int argc và char** argv

> **Đáp án:** **C**  
> **Giải thích:** Bảng con trỏ hàm giúp tổ chức mã nguồn CLI chuyên nghiệp, dễ dàng mở rộng thêm các tập lệnh mới mà không làm rối cấu trúc code.  
> **Mục tiêu củng cố:** Lập trình bộ phân tích cú pháp dòng lệnh CLI quản lý tập tin trên thẻ nhớ  

---

