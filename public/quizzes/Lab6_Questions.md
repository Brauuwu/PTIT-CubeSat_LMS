# Ngân hàng Câu hỏi Trắc nghiệm - Lab 6

> **Tổng số câu hỏi:** 214 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 6.1: Vai Trò Khung Cơ Khí & Tác Động Đa Chiều Lên Các Phân Hệ Khác (109 câu)

### Câu 1
**Trong kiến trúc tổng thể của vệ tinh CubeSat, phân hệ Cấu trúc Cơ khí (Structure) đảm nhận vai trò nền tảng nào?**

- **A.** Xử lý các thuật toán điều khiển của hệ thống
- **B.** Tạo ra nguồn điện năng cho toàn bộ vệ tinh
- **C.** Phát sóng viễn thông truyền dữ liệu về đất
- **D.** Khung chịu lực, định vị và bảo vệ các phân hệ

> **Đáp án:** **D**  
> **Giải thích:** Khung cơ khí là bệ đỡ vật lý bảo đảm tính toàn vẹn hình học và bảo vệ các bảng mạch điện tử khỏi các tác nhân cơ lý bên ngoài.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 2
**Tác động hỗ trợ trực tiếp của khung cấu trúc kim loại đối với phân hệ Năng lượng (EPS) là gì?**

- **A.** Tự động kích hoạt chu trình sạc cho pin
- **B.** Tăng mức điện áp nguồn pin lên gấp đôi
- **C.** Biến đổi dòng xoay chiều thành một chiều
- **D.** Bảo vệ cell pin và tản nhiệt cho mạch nguồn

> **Đáp án:** **D**  
> **Giải thích:** Khung kim loại hấp thụ nhiệt lượng từ mạch Buck/Boost và kẹp giữ cell Li-Po chống biến dạng cơ học trong môi trường chân không.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 3
**Tác động bảo vệ quan trọng của khung vỏ nhôm kín đối với máy tính trung tâm (OBC) và các mạch số là gì?**

- **A.** Chắn can nhiễu điện từ và giảm liều bức xạ
- **B.** Tự động phát hiện và vá lỗi mã nguồn bay
- **C.** Gia tăng xung nhịp hoạt động của vi xử lý
- **D.** Lưu trữ dữ liệu thay cho bộ nhớ bán dẫn

> **Đáp án:** **A**  
> **Giải thích:** Vỏ nhôm ngăn chặn nhiễu cao tần giữa các mạch và hấp thụ các hạt mang điện năng lượng thấp của gió Mặt Trời.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 4
**Khung cơ khí giữ vai trò quyết định nào đối với cụm cảm biến quán tính (IMU) và tải trọng quang học Camera?**

- **A.** Tự động lấy nét cho thấu kính máy ảnh
- **B.** Cố định hệ tọa độ tránh lệch trục cảm biến
- **C.** Làm mát chủ động cho cụm cảm biến nhiệt
- **D.** Cung cấp đường nguồn điện áp ổn định 5V

> **Đáp án:** **B**  
> **Giải thích:** Biến dạng khung cơ khí sẽ làm lệch trục góc quang học của camera và sai lệch ma trận xoay của các thuật toán định hướng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 5
**Bộ phận nào trên khung cơ khí của CubeSat đóng vai trò là giao diện tiếp xúc cơ học trực tiếp với ống phóng P-POD của tên lửa đẩy?**

- **A.** Bề mặt của các tấm pin quang điện ngoài
- **B.** 4 thanh ray nhẵn dọc theo 4 cạnh góc đứng
- **C.** Hệ thống cáp nối tín hiệu giữa các bo
- **D.** Cụm thấu kính quang học của máy ảnh bay

> **Đáp án:** **B**  
> **Giải thích:** 4 thanh ray là các chi tiết duy nhất được phép tì trượt trực tiếp vào vách lòng ống phóng trong suốt quá trình tên lửa bay lên.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 6
**Tải trọng gia tốc tĩnh cực đại (Static Quasi-steady Acceleration) mà khung cơ khí CubeSat phải chịu đựng trong giai đoạn phóng tên lửa thường đạt khoảng:**

- **A.** 1 g đến 2 g
- **B.** 80 g đến 100 g
- **C.** 8 g đến 15 g
- **D.** 0.1 g đến 0.5 g

> **Đáp án:** **C**  
> **Giải thích:** Động cơ tên lửa đẩy tạo ra gia tốc nén dọc trục cực lớn; khung sườn vệ tinh bắt buộc không được bị vênh nứt dưới tải trọng này.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 7
**Môi trường dao động ngẫu nhiên (Random Vibration) tác động lên khung CubeSat trong lúc tên lửa vượt qua tầng khí quyển dày có dải tần số điển hình là:**

- **A.** 100 kHz đến 500 kHz
- **B.** 20 Hz đến 2000 Hz
- **C.** 0.01 Hz đến 0.1 Hz
- **D.** 1 MHz đến 10 MHz

> **Đáp án:** **B**  
> **Giải thích:** Thử nghiệm rung ngẫu nhiên (Vibration Shake Table Test) theo chuẩn GEVS của NASA quét từ 20 Hz đến 2000 Hz để kiểm tra độ bền mỏi.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 8
**Tần số dao động riêng cơ bản thứ nhất (Fundamental Natural Frequency / First Resonance) của khung cơ khí CubeSat 1U bắt buộc phải thỏa mãn điều kiện nào?**

- **A.** Không cần quan tâm tần số dao động riêng
- **B.** Tần số riêng càng thấp thì càng an toàn
- **C.** Tần số riêng thứ nhất vượt ngưỡng quy định
- **D.** Bắt buộc phải cố định chính xác tại 50 Hz

> **Đáp án:** **C**  
> **Giải thích:** Tần số riêng cao tránh hiện tượng cộng hưởng cơ học phá hủy (Resonance Catastrophe) với các tần số kích động chính của động cơ tên lửa mẹ.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 9
**Hiện tượng 'Hàn lạnh trong chân không' (Cold Welding / Vacuum Welding) giữa các bề mặt kim loại là gì?**

- **A.** 500 Hz đến 1000 Hz
- **B.** 10 Hz đến 20 Hz
- **C.** 50 Hz đến 100 Hz
- **D.** 0.1 Hz đến 1.0 Hz

> **Đáp án:** **B**  
> **Giải thích:** Trong chân không không có lớp màng oxit và không khí ngăn cách; các nguyên tử kim loại ở hai bề mặt nhận diện nhau tạo thành một khối liền.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 10
**Rủi ro thảm khốc nào sẽ xảy ra nếu thanh ray của CubeSat bị hàn lạnh với thành ống phóng P-POD?**

- **A.** 5.0 đến 6.0
- **B.** 1.25 đến 2.0
- **C.** 0.1 đến 0.2
- **D.** 20.0 đến 50.0

> **Đáp án:** **B**  
> **Giải thích:** Hiện tượng kẹt dính thanh ray trong lòng ống phóng P-POD là nguyên nhân từng làm nhiều vệ tinh nhỏ đời đầu không thể triển khai.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 11
**Phương pháp xử lý bề mặt bắt buộc nào được quy định cho 4 thanh ray nhôm của CubeSat để chống hiện tượng hàn lạnh?**

- **A.** Quét một lớp sơn dầu bảo vệ thông thường
- **B.** Bôi mỡ khoáng bôi trơn bề mặt chuyển động
- **C.** Anode hóa cứng Type III tạo lớp oxit Al2O3
- **D.** Mạ một lớp vàng nguyên chất lên thanh ray

> **Đáp án:** **C**  
> **Giải thích:** Lớp oxit nhôm gốm cực cứng ($Al_2O_3$) không có tính chất kim loại, triệt tiêu hoàn toàn nguy cơ liên kết hàn lạnh với vách nhôm của P-POD.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 12
**Chiều dày tối thiểu của lớp Anode hóa cứng Type III trên bề mặt 4 thanh ray của CubeSat theo tiêu chuẩn CalPoly là bao nhiêu?**

- **A.** 0.1 mm đến 0.2 mm
- **B.** 10 mm đến 15 mm
- **C.** 1.5 mm đến 2.0 mm
- **D.** 50 mm đến 100 mm

> **Đáp án:** **D**  
> **Giải thích:** Độ dày lớp Anode cứng $\ge 25\ \mu\text{m}$ bảo đảm lớp màng bảo vệ không bị cào xước tróc lộ nhôm trần khi trượt dưới lực ép rung động.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 13
**Tại sao trên vệ tinh không gian, bu lông và ốc vít bắt buộc phải được chế tạo từ thép không gỉ Austenit (Inox A2-70 hoặc A4-80)?**

- **A.** Vì thép không gỉ nhẹ hơn kim loại nhôm
- **B.** Bền cao, chống ăn mòn và không có từ tính
- **C.** Vì thép Austenit có khả năng dẫn điện kém
- **D.** Vì bề mặt thép có độ sáng bóng thẩm mỹ

> **Đáp án:** **B**  
> **Giải thích:** Vật liệu có từ tính (như sắt thép thường) sẽ tạo ra mô-men từ ký sinh tương tác với từ trường Trái Đất làm mất ổn định tư thế vệ tinh.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 14
**Tại sao các loại đai ốc tự khóa bằng vòng đệm nylon (Nylon-insert Lock Nuts / Nyloc) lại bị NGHIÊM CẤM sử dụng trong vệ tinh không gian?**

- **A.** Vì vòng đệm nylon làm tăng khối lượng kết cấu
- **B.** Nylon bị thoái hóa và thoát khí mạnh trong chân không
- **C.** Vì giá thành sản xuất đai ốc nylon quá đắt đỏ
- **D.** Vì chất liệu nylon có tính dẫn điện quá mạnh

> **Đáp án:** **B**  
> **Giải thích:** Quy định nghiêm ngặt của NASA/ESA cấm sử dụng các chi tiết khóa ren bằng vật liệu polyme không đạt chuẩn thoát khí ASTM E595.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 15
**Vòng đệm vênh (Split Lock Washer) hoặc vòng đệm đĩa Belleville (Belleville Washer) có tác dụng gì khi ghép nối bu lông?**

- **A.** Duy trì lực căng đàn hồi khi có giãn nở nhiệt
- **B.** Hạ mức điện áp nguồn cấp xuống ngưỡng an toàn
- **C.** Tăng tính thẩm mỹ hình học cho đầu mũ bu lông
- **D.** Hỗ trợ làm mát nhanh cho cụm ren tiếp xúc

> **Đáp án:** **A**  
> **Giải thích:** Chênh lệch hệ số giãn nở nhiệt giữa bu lông inox và trụ nhôm dễ làm mất lực kẹp ở nhiệt độ âm; vòng đệm đàn hồi bù trừ khe hở này.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 16
**Khái niệm 'Hệ số giãn nở nhiệt' (CTE - Coefficient of Thermal Expansion) có ý nghĩa thiết kế cơ khí quan trọng nào trên quỹ đạo?**

- **A.** Độ sáng phản xạ của bề mặt khi kim loại nóng lên
- **B.** Độ biến thiên chiều dài trên mỗi độ C thay đổi
- **C.** Nhiệt độ tới hạn khiến kim loại bắt đầu nóng chảy
- **D.** Tốc độ dẫn truyền nhiệt lượng dọc theo vật liệu

> **Đáp án:** **B**  
> **Giải thích:** Trên quỹ đạo nhiệt độ dao động từ -40°C đến +80°C; nếu các vật liệu ghép nối có CTE quá lệch nhau sẽ sinh ra ứng suất nhiệt làm nứt mối nối.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 17
**Để tránh hiện tượng nứt gãy bảng mạch sợi thủy tinh FR-4 khi bắt chặt vào khung nhôm có CTE lớn hơn, giải pháp cơ khí là gì?**

- **A.** Dùng lỗ oval hoặc đệm đàn hồi giảm chấn
- **B.** Khoét lỗ bắt ốc thật rộng so với thân bu lông
- **C.** Dán cố định bo mạch bằng keo dán tức thì
- **D.** Không sử dụng bu lông định vị cho bo mạch

> **Đáp án:** **A**  
> **Giải thích:** Rãnh oval cho phép bo mạch tự do co dãn trượt nhẹ theo phương ngang khi nhiệt độ thay đổi mà không bị kích ép cong vênh.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 18
**Bốn thanh ray dẫn hướng của CubeSat yêu cầu độ nhám bề mặt (Surface Roughness) tối đa không được vượt quá:**

- **A.** 10 milimet
- **B.** Không giới hạn độ nhám
- **C.** 50 micro-mét
- **D.** 0.8 micro-mét

> **Đáp án:** **D**  
> **Giải thích:** Bề mặt thanh ray phải được mài bóng đạt độ nhám Ra ≤ 0.8 µm để giảm thiểu tối đa lực ma sát khi đẩy trượt trong ống phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 19
**Yêu cầu về độ vát cạnh (Chamfer) tại các đầu của thanh ray CubeSat theo chuẩn CalPoly là gì?**

- **A.** Cạnh mép tiếp xúc phải thật sắc nhọn 90 độ
- **B.** Bắt buộc vát góc 45 độ với cạnh vát tối thiểu 1 mm
- **C.** Vát vuông góc 90 độ dọc theo toàn bộ chiều dài
- **D.** Cạnh mép gia công dạng răng cưa chống trượt

> **Đáp án:** **B**  
> **Giải thích:** Góc vát 1.0 mm ngăn chặn mép thanh ray cào xước hoặc đâm kẹt vào các gờ nối bên trong lòng ống phóng P-POD.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 20
**Tấm pin Mặt Trời (Solar Panel) gắn ở 6 mặt ngoài của CubeSat thường sử dụng vật liệu nền (Substrate) bằng chất liệu gì?**

- **A.** Bìa xốp đàn hồi có trọng lượng siêu nhẹ
- **B.** Kính xây dựng thông thường cắt theo kích thước
- **C.** Nhôm tổ ong hoặc tấm mạch in sợi thủy tinh FR-4
- **D.** Gỗ ép công nghiệp phủ sơn chống ẩm bề mặt

> **Đáp án:** **C**  
> **Giải thích:** Cấu trúc nhôm tổ ong hoặc PCB nhiều lớp mang lại độ phẳng cơ học tuyệt đối và độ cứng cao chống uốn dưới tác động nhiệt.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 21
**Băng dính hai mặt chuyên dụng nào của hãng 3M thường được dùng để dán pin Mặt Trời lên khung cơ khí đạt chuẩn không gian?**

- **A.** Băng dính cách điện PVC thông dụng trong nhà
- **B.** Băng dính đóng gói thùng hàng carton chịu lực
- **C.** Keo dính bẫy chuột gia dụng có độ bám dính cao
- **D.** Băng dính acrylic 3M 966 hoặc màng keo silicone

> **Đáp án:** **D**  
> **Giải thích:** Màng keo 3M 966 duy trì lực dính kết cực mạnh trong dải nhiệt từ -70°C đến +150°C và có tỷ lệ thoát khí cực thấp.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 22
**Trọng lượng tối đa cho phép đối với một vệ tinh CubeSat 1U tiêu chuẩn nâng cấp hiện nay thông thường là bao nhiêu?**

- **A.** 4.0 kg đến 5.0 kg
- **B.** 8.0 kg đến 10.0 kg
- **C.** 0.5 kg đến 0.8 kg
- **D.** 1.33 kg đến 2.00 kg

> **Đáp án:** **D**  
> **Giải thích:** Quy định khối lượng trần bảo đảm động lực học giải phóng của lò xo ống phóng không bị quá tải.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 23
**Nếu CubeSat bị vượt quá trọng lượng quy định (ví dụ nặng 2.5 kg đối với 1U), hậu quả của đơn vị phóng là gì?**

- **A.** Đơn vị phóng từ chối tích hợp do vi phạm an toàn
- **B.** Vệ tinh được ưu tiên bố trí ở vị trí phóng đẹp
- **C.** Chủ đầu tư nộp thêm khoản tiền phạt quá tải trọng
- **D.** Tên lửa đẩy tự động tăng công suất động cơ đẩy

> **Đáp án:** **A**  
> **Giải thích:** An toàn tên lửa mẹ là tối thượng; bất kỳ vệ tinh nào không đạt yêu cầu khối lượng và kích thước đều bị loại bỏ ngay lập tức.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 24
**Thử nghiệm sốc cơ học (Pyroshock / Mechanical Shock Test) mô phỏng hiện tượng vật lý nào trong quá trình bay của tên lửa?**

- **A.** Áp lực gió bão thổi mạnh vào vỏ bảo vệ ngoài
- **B.** Sóng áp suất âm thanh phát ra từ buồng động cơ
- **C.** Dao động xóc nảy khi vận chuyển bằng xe cơ giới
- **D.** Xung lực cực lớn khi kích nổ bu-lông tách tầng

> **Đáp án:** **D**  
> **Giải thích:** Sốc hỏa thuật tạo ra sóng ứng suất tần số cao hàng kHz chạy xuyên qua khung nhôm, có thể làm vỡ các linh kiện bán dẫn và thạch anh giòn.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 25
**Thử nghiệm chân không nhiệt (Thermal Vacuum - TVAC) kiểm tra tính toàn vẹn cơ khí của CubeSat trong điều kiện nào?**

- **A.** Ngâm chìm toàn bộ trong bể nước đá thử nghiệm
- **B.** Rung lắc liên tục bên trong tủ lạnh bảo quản
- **C.** Áp suất cực thấp kết hợp chu kỳ nhiệt khắc nghiệt
- **D.** Áp suất khí quyển bình thường và đốt nóng bằng lửa

> **Đáp án:** **C**  
> **Giải thích:** TVAC tái hiện chân thực nhất môi trường không gian LEO để phát hiện các khuyết tật về ứng suất nhiệt, lỏng ốc vít và kẹt cơ học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 26
**Lớp chắn bức xạ ion hóa bằng nhôm (Aluminum Equivalent Shielding) có độ dày điển hình 1.5 mm đến 2.0 mm trên vỏ CubeSat có tác dụng giảm thiểu đại lượng nào?**

- **A.** Giảm liều hấp thụ electron và proton năng lượng thấp
- **B.** Ngăn chặn hoàn toàn sự thâm nhập của sóng vô tuyến
- **C.** Giảm đáng kể khối lượng tổng thể của khung cấu trúc
- **D.** Giảm nhiệt độ bề mặt vỏ ngoài khi tiếp xúc Mặt Trời

> **Đáp án:** **A**  
> **Giải thích:** Vỏ nhôm 2mm hấp thụ phần lớn các hạt mang điện năng lượng thấp, giảm liều TID hàng năm từ 50 krad xuống dưới 5 krad.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 27
**Tiếng ồn âm học cực đại (Acoustic Noise) sinh ra từ luồng phụt động cơ tên lửa tác động lên thân vỏ CubeSat lúc phóng có thể đạt mức áp suất âm:**

- **A.** 10 dB đến 20 dB SPL
- **B.** 250 dB đến 300 dB SPL
- **C.** 50 dB đến 60 dB SPL
- **D.** 140 dB đến 145 dB SPL

> **Đáp án:** **D**  
> **Giải thích:** Sóng âm năng lượng cao nén ép làm rung màng các tấm pin Mặt Trời và vỏ mỏng, đòi hỏi cấu trúc phải có khả năng tiêu tán năng lượng âm học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 28
**Thử nghiệm quét dao động hình sin mức thấp (Low-level Sine Sweep Test) thực hiện trước và sau rung động ngẫu nhiên nhằm mục đích gì?**

- **A.** Xác định tần số riêng và phát hiện hư hại kết cấu
- **B.** Đo nhiệt độ bề mặt vỏ chip xử lý trung tâm OBC
- **C.** Đo mức độ tiếng ồn âm học do bàn rung phát ra
- **D.** Kiểm tra sự đổi màu của lớp sơn phủ bảo vệ ngoài

> **Đáp án:** **A**  
> **Giải thích:** Nếu tần số riêng bị dịch chuyển lệch quá 5%, đó là dấu hiệu cảnh báo bu lông bị lỏng hoặc khung sườn xuất hiện vết nứt vi mô.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 29
**Hệ số an toàn cơ học (Factor of Safety - FoS) theo tiêu chuẩn thiết kế cấu trúc không gian của NASA thường được chọn là bao nhiêu?**

- **A.** FoS = 1.0 cho mọi tải trọng phá hủy
- **B.** FoS = 1.25 đến 1.4 cho chảy và 1.5 đến 2.0 cho bền
- **C.** FoS = 8.0 đến 10.0 bảo đảm tuyệt đối không hư hỏng
- **D.** FoS = 0.4 đến 0.5 để tối ưu triệt để khối lượng khung

> **Đáp án:** **B**  
> **Giải thích:** Hệ số an toàn bảo đảm kết cấu không bao giờ bị biến dạng dẻo vĩnh viễn dưới tải trọng phóng khắc nghiệt nhất.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 30
**Công thức tính Biên độ an toàn (Margin of Safety - MoS) của kết cấu cơ khí theo ứng suất cho phép và ứng suất thực tế là:**

- **A.** MoS = [Ứng suất tính toán / (Ứng suất cho phép × FoS)] + 1
- **B.** MoS = [Ứng suất tính toán / (Ứng suất cho phép × FoS)] - 1
- **C.** MoS = [Ứng suất cho phép / (Ứng suất tính toán × FoS)] - 1
- **D.** MoS = [Ứng suất cho phép × FoS / Ứng suất tính toán] + 1

> **Đáp án:** **C**  
> **Giải thích:** Điều kiện bền bắt buộc trong hàng không vũ trụ là $\text{MoS} \ge 0$; nếu $\text{MoS} < 0$, kết cấu không đạt chuẩn an toàn phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 31
**Phương pháp phân tích phần tử hữu hạn (FEA - Finite Element Analysis) được kỹ sư cơ khí sử dụng trên mô hình 3D của CubeSat để làm gì?**

- **A.** Vẽ bản vẽ phối cảnh 3D phục vụ công tác tài liệu
- **B.** Đo độ ẩm tương đối của môi trường phòng thí nghiệm
- **C.** Mô phỏng phân bố ứng suất Von Mises và biến dạng
- **D.** Tính toán thời gian bay trên quỹ đạo của CubeSat

> **Đáp án:** **C**  
> **Giải thích:** FEA phát hiện các điểm tập trung ứng suất cao (Stress Hotspots) để kịp thời gia cố hoặc khoét rãnh giảm trọng lượng tối ưu.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 32
**Để giảm thiểu hiện tượng tập trung ứng suất tại các góc vuông bên trong của khung nhôm gia công CNC, giải pháp thiết kế là:**

- **A.** Khoét thủng các lỗ rỗng tại vị trí góc nhọn
- **B.** Gia công góc vuông sắc nét 90 độ tuyệt đối
- **C.** Bo tròn góc lượn với bán kính tối thiểu R ≥ 1.0 mm
- **D.** Cắt vát đứt góc vuông thành biên dạng hở

> **Đáp án:** **C**  
> **Giải thích:** Góc lượn bán kính chuyển tiếp mượt mà phân tán dòng ứng suất, triệt tiêu nguy cơ khởi sinh vết nứt mỏi tại đáy rãnh.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 33
**Đường truyền tải trọng chính (Primary Load Path) trong kết cấu CubeSat khi tên lửa phóng lên dọc trục diễn ra như thế nào?**

- **A.** Tải trọng truyền trực tiếp qua thấu kính camera
- **B.** Tải trọng phân tán qua bề mặt các tấm pin Mặt Trời
- **C.** Tải từ bo mạch qua trụ góc vào thanh ray xuống đáy
- **D.** Tải trọng truyền dọc theo sợi cáp anten phát thanh

> **Đáp án:** **C**  
> **Giải thích:** 4 thanh ray đóng vai trò 4 cột trụ chịu lực dọc trục chính, phân phối tải trọng nén đều xuống hệ thống đế đẩy.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 34
**Tại sao trên khung vỏ và các tấm ốp kín của CubeSat bắt buộc phải bố trí các lỗ thông áp (Venting Holes)?**

- **A.** Luồn các đường dây cáp tín hiệu ra bên ngoài vỏ
- **B.** Cho phép ánh sáng Mặt Trời rọi vào bên trong khoang
- **C.** Lấy gió đối lưu làm mát cho cụm vi xử lý trung tâm
- **D.** Thoát nhanh không khí khi phóng tránh nổ bung tấm vỏ

> **Đáp án:** **D**  
> **Giải thích:** Trong 90 giây đầu phóng, áp suất ngoài giảm từ 1 atm về 0; nếu không có lỗ thông hơi, áp suất dư 1 atm bên trong sẽ xé rách các tấm ốp mỏng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 35
**Quy tắc ngón tay cái (Rule of Thumb) về diện tích lỗ thông áp tối thiểu cho khoang kín CubeSat theo tiêu chuẩn NASA là:**

- **A.** Tối thiểu 1.0 mm² diện tích lỗ cho 1.0 lít thể tích
- **B.** Không cần bố trí bất kỳ lỗ thoát khí nào trên vỏ
- **C.** Diện tích lỗ thoát khí cố định 100 cm² cho toàn bộ
- **D.** Diện tích 1.0 cm² cho mỗi milimét khối thể tích trong

> **Đáp án:** **A**  
> **Giải thích:** Tỷ lệ diện tích này bảo đảm tốc độ xả áp suất khí ($dp/dt$) theo kịp tốc độ giảm áp của khoang hàng tên lửa đẩy.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 36
**Độ dẫn nhiệt tiếp xúc (Thermal Contact Conductance) qua mối ghép bu lông giữa các tấm kim loại trong môi trường chân không phụ thuộc vào yếu tố nào?**

- **A.** Độ ẩm của không khí xung quanh vị trí tiếp xúc
- **B.** Màu sắc quang học của bu lông và bề mặt ghép
- **C.** Chiều dài danh định của thân bu lông ghép nối
- **D.** Lực kẹp bu lông, độ phẳng tiếp xúc và đệm dẫn nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Trong chân không, nhiệt chỉ truyền qua các điểm vi tiếp xúc kim loại; lực kẹp lớn và đệm mềm tăng diện tích tiếp xúc thực tế.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 37
**Miếng đệm lá kim loại Indium (Indium Foil) thường được chèn giữa đế chip công suất và khung nhôm nhằm mục đích gì?**

- **A.** Tăng thêm khối lượng dằn cho cấu trúc cơ khí
- **B.** Làm tăng tính thẩm mỹ cho mối nối linh kiện
- **C.** Tạo lớp cách điện chịu điện áp đánh thủng 1000V
- **D.** Biến dạng lấp đầy khe hở tế vi giúp tăng dẫn nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Độ dẫn nhiệt tuyệt hảo của Indium trong chân không giải quyết bài toán tản nhiệt từ đế vi xử lý ra khung sườn.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 38
**Khái niệm 'Co-planarity' (Độ phẳng đồng phẳng) của 4 thanh ray trên CubeSat có ý nghĩa kiểm tra hình học nào?**

- **A.** Độ nhám bề mặt gia công của các thanh ray giống nhau
- **B.** Chiều dài của cả 4 thanh ray bằng nhau tuyệt đối
- **C.** Bốn mặt ray cùng nằm trên một hình lăng trụ lý thuyết
- **D.** Cả bốn thanh ray đều có cùng màu sắc Anode hóa

> **Đáp án:** **C**  
> **Giải thích:** Nếu khung bị vặn xoắn (Warped), các thanh ray sẽ cắn chéo vào rãnh trượt P-POD gây bó kẹt cơ học khi đẩy ra.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 39
**Hậu quả của việc bụi bẩn hoặc hạt phoi kim loại kẹt trong rãnh công tắc hành trình tại chân ray là gì?**

- **A.** Công tắc kẹt không bật khiến vệ tinh mất nguồn
- **B.** Làm gia tăng nhẹ điện trở tiếp xúc của đường dây
- **C.** Làm trầy xước bề mặt của các tấm pin quang điện
- **D.** Làm công tắc đóng ngắt với tốc độ nhanh hơn nhiều

> **Đáp án:** **A**  
> **Giải thích:** Kẹt cơ khí công tắc hành trình là lỗi đơn điểm (Single Point of Failure) chí mạng dẫn đến vệ tinh bị 'chết từ trong trứng nước'.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 40
**Để giảm chấn động cơ học cho cụm Camera quang học nhạy cảm, giải pháp cơ khí tối ưu là gì?**

- **A.** Lắp camera trên đệm giảm chấn silicone không gian
- **B.** Treo camera lơ lửng bằng hệ dây cáp thép bện
- **C.** Buộc chặt camera vào khung bằng vòng cao su dẻo
- **D.** Hàn chết cụm đế camera vào khung nhôm bằng thiếc

> **Đáp án:** **A**  
> **Giải thích:** Vòng đệm giảm chấn hấp thụ các sóng xung kích tần số cao, bảo vệ thấu kính quang học không bị nứt vỡ hoặc lệch tâm tiêu cự.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 41
**Vật liệu băng dính Polyimide chịu nhiệt cao (Kapton) dùng để bọc bó dây cáp trong khung CubeSat có khả năng chịu nhiệt trong dải nào?**

- **A.** Từ -269°C đến +400°C không nóng chảy hay mất cách điện
- **B.** Từ -10°C đến +50°C không nóng chảy hay biến dạng cơ học
- **C.** Từ 0°C đến +100°C đáp ứng các môi trường công nghiệp nhẹ
- **D.** Từ +50°C đến +150°C chuyên dùng cho các thiết bị nhiệt dân dụng

> **Đáp án:** **A**  
> **Giải thích:** Kapton là vật liệu cách điện kinh điển của ngành vũ trụ, trơ hóa học và không bị lão hóa trong môi trường bức xạ không gian.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 42
**Khái niệm 'Keep-out Zone' trên mặt ngoài của CubeSat 1U quy định giới hạn hình học nào?**

- **A.** Vùng cấm đặt chân thao tác của các phi hành gia
- **B.** Khu vực không gian cấm vệ tinh bay cắt ngang qua
- **C.** Vùng cấm bố trí chi tiết lồi tránh va ống phóng
- **D.** Vùng bề mặt khung kim loại không được phép sơn màu

> **Đáp án:** **C**  
> **Giải thích:** Quy định nghiêm ngặt: mọi chi tiết linh kiện trên các mặt bên không được nhô ra quá 6.5 mm tính từ mặt phẳng thanh ray.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 43
**Mặt cắt của thanh ray CubeSat ở 4 góc có tiết diện hình học tối thiểu theo tiêu chuẩn CalPoly là:**

- **A.** Tiết diện hình ngôi sao năm cánh cách điệu
- **B.** Tiết diện hình tròn với đường kính chỉ 1 mm
- **C.** Tiết diện hình tam giác nhọn hướng ra phía ngoài
- **D.** Mặt phẳng rộng tối thiểu 8.5 mm tiếp xúc ray

> **Đáp án:** **D**  
> **Giải thích:** Chiều rộng tiếp xúc 8.5 mm dọc suốt chiều dài thanh ray phân bổ áp lực tiếp xúc đồng đều lên lòng ống phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 44
**Độ cứng bề mặt của lớp Anode hóa cứng Type III trên thang đo độ cứng Rockwell C hoặc Vickers xấp xỉ khoảng:**

- **A.** 10 đến 15 HRC
- **B.** 25 đến 35 HRC
- **C.** 60 đến 70 HRC
- **D.** 90 đến 100 HRC

> **Đáp án:** **C**  
> **Giải thích:** Lớp oxit nhôm gốm cứng như sapphire, chống mài mòn và cào xước cơ học tối đa.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 45
**Tại sao trong quá trình gia công cơ khí chính xác khung CubeSat bằng máy phay CNC, việc tẩy rửa dầu cắt gọt (Degreasing) là bắt buộc?**

- **A.** Loại bỏ dầu cắt gọt ngăn nguồn phát sinh khí thoát
- **B.** Tạo độ sáng bóng bề mặt nhằm tăng tính thẩm mỹ
- **C.** Làm cho kim loại nhôm mềm hơn để dễ uốn nắn
- **D.** Giảm khối lượng dư thừa của khung sườn kim loại

> **Đáp án:** **A**  
> **Giải thích:** Dầu gia công đọng trong các lỗ ren sẽ sôi và bay hơi mù mịt trong chân không nhiệt nếu không được tẩy rửa siêu âm triệt để.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 46
**Dung dịch tẩy rửa siêu âm (Ultrasonic Cleaning) chuyên dụng cho chi tiết không gian thường sử dụng dung môi nào?**

- **A.** Cồn Isopropyl tinh khiết hoặc dung dịch hàng không
- **B.** Nước máy sinh hoạt chưa qua bất kỳ hệ thống lọc
- **C.** Nước xà phòng tẩy rửa thông thường trong gia đình
- **D.** Dung môi xăng thơm công nghiệp pha loãng sơn

> **Đáp án:** **A**  
> **Giải thích:** IPA tinh khiết bay hơi hoàn toàn không để lại cặn bám hữu cơ trên bề mặt kim loại.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 47
**Khái niệm 'Ground Bonding' (Liên kết nối mass khung vỏ) trên vệ tinh CubeSat yêu cầu thông số kỹ thuật nào?**

- **A.** Khung kim loại dẫn điện liên tục về mass GND
- **B.** Không cần thực hiện nối mass cho khung kim loại
- **C.** Tất cả các chi tiết khung phải cách điện hoàn toàn
- **D.** Điện trở liên kết mass bắt buộc lớn hơn 1 Mega-Ohm

> **Đáp án:** **A**  
> **Giải thích:** Tiêu chuẩn an toàn tĩnh điện yêu cầu toàn bộ vỏ kim loại phải là một khối đẳng thế (Equipotential) để triệt tiêu tĩnh điện vũ trụ.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 48
**Hậu quả nguy hiểm nếu một tấm kim loại của khung CubeSat bị cô lập cách điện (Floating Metal) trong không gian là gì?**

- **A.** Tích tụ tĩnh điện gây phóng hồ quang phá hủy vi mạch
- **B.** Tấm kim loại sẽ bị lạnh đi nhanh chóng khi bay
- **C.** Tấm kim loại sẽ tự động tách rời và bay mất
- **D.** Không gây ra bất kỳ rủi ro nào cho các bo mạch

> **Đáp án:** **A**  
> **Giải thích:** Hiện tượng phóng điện hồ quang tĩnh điện (ESD Arc) trong không gian có thể đánh thủng lớp cách điện và phá hủy các đường mạch lân cận.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 49
**Để bảo đảm tính dẫn điện liên kết mass giữa các chi tiết nhôm đã Anode hóa, kỹ sư bắt buộc phải làm gì tại các điểm tiếp xúc bu lông?**

- **A.** Khoét bớt lớp Anode cách điện hoặc dùng đệm răng cưa
- **B.** Quét thêm một lớp sơn cách điện dày lên mặt tiếp xúc
- **C.** Dán băng dính cách điện hai mặt tại vị trí bắt ốc
- **D.** Tra mỡ khoáng bôi trơn cách điện vào toàn bộ mặt ren

> **Đáp án:** **A**  
> **Giải thích:** Lớp Anode oxit là chất cách điện tuyệt đối; bắt buộc phải có điểm tiếp xúc kim loại trần để dẫn dòng tĩnh điện về mass.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 50
**Mối nguy hại của việc sử dụng các kim loại có điện thế hóa học quá lệch nhau (như Nhôm tiếp xúc trực tiếp với Đồng) trên khung vệ tinh là gì?**

- **A.** Tạo ra một viên pin hóa học tự động tích trữ điện
- **B.** Ăn mòn điện hóa trong môi trường ẩm phá hủy nhôm
- **C.** Làm suy giảm đáng kể tổng khối lượng của vệ tinh
- **D.** Làm gia tăng độ bền cơ học cho các mối ghép ren

> **Đáp án:** **B**  
> **Giải thích:** Cặp kim loại khác bản chất tiếp xúc trong không khí ẩm tạo ra pin galvanic ăn mòn mòn rỗ bề mặt nhôm.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 51
**Khoảng cách hở an toàn tối thiểu giữa các đường mạch in trên bo mạch và vách trong của khung kim loại CubeSat là bao nhiêu?**

- **A.** 0.1 mm đến 0.2 mm
- **B.** 40 mm đến 50 mm
- **C.** 10 mm đến 15 mm
- **D.** 1.5 mm đến 2.0 mm

> **Đáp án:** **D**  
> **Giải thích:** Vùng cấm (Keep-out Zone) quanh mép bo mạch bảo đảm không xảy ra hiện tượng đoản mạch chạm mát khi khung bị biến dạng đàn hồi dưới rung động.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 52
**Tác dụng của các rãnh định vị (Alignment Pins / Dowel Pins) trên khung cơ khí gia công CNC là gì?**

- **A.** Cải thiện khả năng dẫn truyền dòng điện giữa các mặt
- **B.** Tăng tính thẩm mỹ hình học cho các mối ghép nối khung
- **C.** Định vị chính xác chi tiết trước khi siết bu lông
- **D.** Làm giảm trọng lượng tổng thể của cụm khung cơ khí

> **Đáp án:** **C**  
> **Giải thích:** Chốt định vị gánh toàn bộ lực cắt ngang (Shear Loads), bảo vệ thân bu lông khỏi bị uốn cong.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 53
**Đặc tính của đai ốc ren hạt (Clinchnut / PEM Nut) ép chìm vào tấm nhôm mỏng của khung CubeSat là gì?**

- **A.** Có khả năng trượt di chuyển tự do dọc theo rãnh dẫn
- **B.** Được chế tạo từ vật liệu nhựa kỹ thuật chịu lực cao
- **C.** Rất dễ bị rơi tuột ra khỏi tấm khi gặp rung động
- **D.** Tạo lỗ ren kim loại cứng vĩnh viễn trên nhôm mỏng

> **Đáp án:** **D**  
> **Giải thích:** PEM Nut được ép dập nguội vào lỗ đột của tấm nhôm, kim loại nhôm biến dạng chảy vào rãnh hãm tạo thành liên kết cơ học nguyên khối.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 54
**Chi tiết ren cấy thép xoắn (Helicoil / Wire Thread Insert) cấy vào các lỗ ren trên khung nhôm có tác dụng gì?**

- **A.** Thu hẹp đường kính danh định của ren xuống mức nhỏ
- **B.** Làm tăng khối lượng dằn cân bằng cho cấu trúc khung
- **C.** Bảo vệ ren nhôm mềm chống trờn khi tháo siết lại
- **D.** Cách điện hoàn toàn cho bu lông khỏi khung vỏ kim loại

> **Đáp án:** **C**  
> **Giải thích:** Ống lót ren thép lò xo Helicoil phân phối lực kẹp đều lên các vòng ren nhôm, tăng tuổi thọ và độ bền kéo của mối ghép.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 55
**Quy trình kiểm tra trực quan (Visual Inspection) sau khi siết xong bu lông sử dụng kính hiển vi quang học nhằm phát hiện điều gì?**

- **A.** Phát hiện vết nứt bo mạch, phoi kim loại và xước ray
- **B.** Đo đạc màu sắc quang học chính xác của các vi mạch
- **C.** Giám sát độ ẩm tương đối của không khí phòng sạch
- **D.** Đo mức độ chiếu sáng của đèn huỳnh quang trong phòng

> **Đáp án:** **A**  
> **Giải thích:** Mạt vụn kim loại sinh ra khi vặn ốc có thể gây đoản mạch; cần dùng kính lúp kiểm tra và hút bụi làm sạch tuyệt đối.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 56
**Quy trình xử lý bề mặt chọn lọc (Selective Masking) trên khung nhôm CubeSat được phối hợp như thế nào?**

- **A.** Mạ vàng toàn bộ bề mặt của tất cả các chi tiết khung
- **B.** Sơn tĩnh điện phủ kín mọi vị trí bề mặt trong và ngoài
- **C.** Anode cứng ở 4 thanh ray và phủ Alodine ở mặt trong
- **D.** Để trần bề mặt hợp kim nhôm không qua xử lý bảo vệ

> **Đáp án:** **C**  
> **Giải thích:** Dán che (Masking) thanh ray khi nhúng Alodine và ngược lại là kỹ thuật xử lý bề mặt kinh điển bảo đảm cả độ cứng cơ học lẫn tính dẫn điện vỏ.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 57
**Bu lông ren M3 có bước ren tiêu chuẩn (Coarse Thread Pitch) là bao nhiêu milimet?**

- **A.** 1.0 mm
- **B.** 0.1 mm
- **C.** 0.5 mm
- **D.** 2.0 mm

> **Đáp án:** **C**  
> **Giải thích:** Tiêu chuẩn ren hệ mét ISO: bu lông M3 tiêu chuẩn có bước ren là 0.5 mm.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 58
**Trình tự siết các bu lông trên một mặt phẳng khung cơ khí nên tuân theo quy tắc nào để tránh vênh méo?**

- **A.** Siết tuần tự vòng tròn theo chiều kim đồng hồ
- **B.** Siết ngẫu nhiên
- **C.** Siết chặt một con ốc duy nhất trước rồi siết các con còn lại
- **D.** Siết chéo đối xứng chữ X theo nhiều bước tăng dần lực siết

> **Đáp án:** **D**  
> **Giải thích:** Siết đối xứng chữ X phân bố ứng suất kẹp đều đặn, bảo đảm bề mặt phẳng tiếp xúc song song hoàn hảo.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 59
**Miếng chêm mỏng căn chỉnh cơ khí (Shims) bằng thép lá inox dày từ 0.05 mm đến 0.1 mm được sử dụng để làm gì?**

- **A.** Bù sai số tích lũy dung sai gia công khối PC/104
- **B.** Bọc cách điện và bảo vệ cơ học cho cụm pin nguồn
- **C.** Thay thế trực tiếp cho các trụ ren chịu lực cách tầng
- **D.** Làm tăng ma sát tiếp xúc giữa các tấm ghép kim loại

> **Đáp án:** **A**  
> **Giải thích:** Chêm Shims tinh chỉnh khoảng hở cơ học với độ chính xác hàng chục micron trước khi khóa bu lông cố định.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 60
**Dây đai buộc bó dây cáp chuyên dụng trong hàng không vũ trụ (Lacing Tape) thường được chế tạo bằng sợi gì?**

- **A.** Sợi nilon bó dây điện tiêu chuẩn thông thường
- **B.** Sợi cao su tổng hợp có tính đàn hồi co giãn
- **C.** Dây sợi gai tự nhiên thắt nút thủ công ngoài
- **D.** Sợi Nomex hoặc Dacron tẩm sáp đạt chuẩn ASTM

> **Đáp án:** **D**  
> **Giải thích:** Lacing Tape bằng sợi Nomex/Dacron không bị giòn gãy trong chân không, chịu nhiệt độ cao và không gây thoát khí outgassing.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 61
**Hiện tượng râu thiếc (Tin Whiskers) trên các mối hàn điện tử trong không gian là gì?**

- **A.** 0.01 N·m đến 0.02 N·m
- **B.** 0.4 N·m đến 0.6 N·m
- **C.** 10 N·m đến 15 N·m
- **D.** 50 N·m đến 100 N·m

> **Đáp án:** **C**  
> **Giải thích:** Râu thiếc dẫn điện có thể gây chập đoản mạch ngẫu nhiên; do đó tiêu chuẩn không gian bắt buộc dùng hợp kim thiếc-chì (Sn63Pb37) hoặc phủ Conformal Coating.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 62
**Lớp phủ bảo vệ bo mạch (Conformal Coating bằng màng Parylene hoặc Polyurethane) có tác dụng gì đối với khối cơ khí?**

- **A.** Tăng tốc độ xung nhịp xử lý dữ liệu của bo mạch
- **B.** Màng polyme bọc kín ngăn bụi phoi ốc và chống rung
- **C.** Hỗ trợ hệ thống tản nhiệt nước tuần hoàn cưỡng bức
- **D.** Làm gia tăng độ cứng và khối lượng của các tấm bo

> **Đáp án:** **B**  
> **Giải thích:** Lớp phủ màng Conformal cố định các linh kiện dán bề mặt, ngăn chặn đoản mạch do mảnh vụn cơ học sinh ra trong lúc phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 63
**Lực nén lò xo của công tắc hành trình tại chân ray khi bị ép vào ống phóng P-POD thông thường yêu cầu trong khoảng nào?**

- **A.** 0.5 N đến 1.5 N
- **B.** 0.01 N đến 0.05 N
- **C.** 100 N đến 150 N
- **D.** 10 kN đến 15 kN

> **Đáp án:** **A**  
> **Giải thích:** Lực lò xo công tắc vừa đủ để bật dứt khoát khi tách ống phóng nhưng không gây lực cản ma sát quá lớn cản trở việc đẩy vệ tinh.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 64
**Chốt rút Remove-Before-Flight (RBF Pin) thường được gắn kèm dải cờ đỏ (Red Flag) nhằm mục đích an toàn nào?**

- **A.** Cảnh báo trực quan tránh quên rút trước khi nắp đóng
- **B.** Tăng tính thẩm mỹ quang học cho toàn bộ vệ tinh
- **C.** Che chắn bụi bẩn môi trường cho cụm cảm biến quang
- **D.** Xác định hướng gió và vận tốc gió tại bệ phóng

> **Đáp án:** **A**  
> **Giải thích:** Dải cờ 'REMOVE BEFORE FLIGHT' màu đỏ rực rỡ là quy chuẩn an toàn hàng không bắt buộc phải nhìn thấy và kiểm tra checklist trước giờ bay.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 65
**Vật liệu giao diện nhiệt (TIM - Thermal Interface Material) dạng tấm đệm đàn hồi (Thermal Gap Pad) chèn giữa chip và khung nhôm có ưu điểm gì?**

- **A.** 10 mm đến 20 mm
- **B.** 5.0 mm đến 7.0 mm
- **C.** 0.1 mm đến 0.2 mm
- **D.** 0.5 mm đến 1.0 mm

> **Đáp án:** **C**  
> **Giải thích:** Miếng đệm Gap Pad chuyên dụng không gian không chứa dầu tự do (Silicone-free hoặc Low-outgassing) giữ độ dẫn nhiệt ổn định lâu dài.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 66
**Tại sao mỡ tản nhiệt silicone thông thường dùng cho máy tính để bàn (CPU Thermal Paste) lại bị CẤM dùng trong vệ tinh?**

- **A.** Làm đoản mạch gây bốc cháy các linh kiện bán dẫn
- **B.** Dẫn nhiệt kém hơn nhiều so với kim loại thông thường
- **C.** Giá thành thương mại quá đắt đỏ so với ngân sách
- **D.** Dầu silicone sôi bay hơi trong chân không bẩn thấu kính

> **Đáp án:** **D**  
> **Giải thích:** Hiện tượng bay hơi dầu silicone là thủ phạm hàng đầu gây hỏng các tải trọng quang học trong các nhiệm vụ không gian đời đầu.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 67
**Quy tắc kiểm tra độ sạch bề mặt bằng đèn cực tím (UV Blacklight Inspection) ở bước sóng 365 nm dựa trên hiện tượng gì?**

- **A.** Đo đạc nhiệt độ bề mặt của các chi tiết kim loại
- **B.** Tia cực tím hỗ trợ làm khô nhanh các lớp keo dán
- **C.** Chất hữu cơ phát huỳnh quang dưới ánh sáng tia cực tím
- **D.** Tia cực tím tiêu diệt vi khuẩn bám trên khung sườn

> **Đáp án:** **C**  
> **Giải thích:** Kiểm tra huỳnh quang UV là quy trình tiêu chuẩn của phòng sạch hàng không vũ trụ để xác nhận độ sạch quang học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 68
**Túi đóng gói vận chuyển vệ tinh CubeSat (Transport Packaging) yêu cầu tiêu chuẩn bảo vệ nào?**

- **A.** Túi nilon thông thường bọc xốp giảm chấn bên ngoài
- **B.** Hộp giấy carton thông gió tự nhiên không đậy nắp
- **C.** Thùng gỗ thông mộc gia công thô ghép đinh cơ khí
- **D.** Túi ESD kín hút ẩm, hút chân không hoặc bơm Nitơ

> **Đáp án:** **D**  
> **Giải thích:** Môi trường khí trơ Nitơ khô ngăn ngừa độ ẩm khí quyển xâm nhập gây ăn mòn điện hóa và ngăn bụi bẩn bám vào các chi tiết cơ khí.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 69
**Độ chênh giãn nở nhiệt (Thermal Expansion Mismatch) giữa thanh ren inox (alpha ~ 16 ppm/K) và trụ nhôm (alpha ~ 23 ppm/K) khi nhiệt độ giảm xuống -40°C trong vùng tối có thể gây ra hiện tượng gì?**

- **A.** Lực kẹp siết trước giảm nhẹ do nhôm co nhiều hơn thép
- **B.** Điện áp của khối pin nguồn bị gia tăng đột ngột cao
- **C.** Trụ nhôm bị nóng chảy biến dạng cục bộ tại bề mặt
- **D.** Thân bu lông thép bị kéo đứt gãy ngay lập tức tức thì

> **Đáp án:** **A**  
> **Giải thích:** Do nhôm co lại nhiều hơn thép ở nhiệt độ âm sâu, khoảng cách kẹp co ngắn lại làm giảm lực căng trước; vì vậy cần có đệm vênh hoặc keo khóa ren để duy trì mối ghép.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 70
**Ứng suất kéo siết trước (Preload Stress) tối ưu trên thân bu lông thép không gỉ A2-70 thường được khống chế ở mức nào so với giới hạn chảy của vật liệu?**

- **A.** 10% đến 20%
- **B.** 95% đến 99%
- **C.** 65% đến 75%
- **D.** 30% đến 40%

> **Đáp án:** **C**  
> **Giải thích:** Khống chế lực siết ở mức 65-75% giới hạn đàn hồi bảo đảm mối ghép không bị lỏng khi rung động mà bu lông không bị biến dạng dẻo vĩnh viễn.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 71
**Khi kiểm tra độ phẳng bề mặt lắp ghép của các tấm khung nhôm CubeSat bằng thước tóc và căn lá, độ cong vênh tối đa cho phép thường không vượt quá:**

- **A.** 0.05 đến 0.10
- **B.** 1.50 đến 2.00
- **C.** 0.15 đến 0.20
- **D.** 0.50 đến 0.70

> **Đáp án:** **C**  
> **Giải thích:** Dung sai độ phẳng khắt khe bảo đảm khi siết các tấm khung vào nhau không làm cong vênh bo mạch điện tử bên trong.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 72
**Việc áp dụng mô-men siết (Torque) quá mức quy định lên bu lông thép vặn vào ren nhôm của khung vệ tinh sẽ dẫn đến hư hại nghiêm trọng nào?**

- **A.** Làm bo mạch điện tử bị nhiễm từ trường vĩnh viễn
- **B.** Bu lông thép bị nổ tung do ứng suất xoắn vượt tải
- **C.** Trờn ren nhôm do độ bền cắt của nhôm thấp hơn thép
- **D.** Làm cell pin Li-Po bên trong bị phồng rộp biến dạng

> **Đáp án:** **C**  
> **Giải thích:** Ren nhôm mềm rất dễ bị tuốt ren nếu siết quá mô-men cho phép; do đó bắt buộc phải dùng cờ lê lực kiểm soát chính xác mô-men siết.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 73
**Băng keo nhôm tráng bạc hoặc băng keo Kapton dán bên ngoài khung nhôm CubeSat nhằm mục đích kỹ thuật nào?**

- **A.** Điều chỉnh hệ số bức xạ nhiệt và chống trầy xước
- **B.** Tăng tính thẩm mỹ thị giác cho thân vỏ của vệ tinh
- **C.** Tăng thêm khối lượng dằn cần thiết cho khối cơ khí
- **D.** Đóng vai trò như bề mặt anten thu sóng vô tuyến phụ

> **Đáp án:** **A**  
> **Giải thích:** Băng dán bề mặt chuyên dụng kiểm soát tỷ lệ hấp thụ và phát xạ nhiệt của vệ tinh đồng thời che chắn các khe hở cơ học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 74
**Trong thử nghiệm rung động ngẫu nhiên (Random Vibration Test), đồ gá rung (Vibration Fixture) gắn vệ tinh vào bàn rung phải đáp ứng yêu cầu cơ học nào?**

- **A.** Chế tạo bằng vật liệu gỗ ép công nghiệp chịu lực
- **B.** Gia công từ khối cao su đàn hồi có giảm chấn cao
- **C.** Cứng vững cao với tần số riêng vượt xa dải thử nghiệm
- **D.** Càng nhẹ càng tốt nhằm giảm quán tính tải cho bàn rung

> **Đáp án:** **C**  
> **Giải thích:** Đồ gá rung phải siêu cứng để truyền sóng rung trung thực từ bàn rung vào mẫu thử mà không tự sinh ra cộng hưởng riêng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 75
**Tần số cộng hưởng dao động tự nhiên bậc nhất (First Fundamental Resonance Frequency) của khung CubeSat theo yêu cầu phóng thường phải đạt ngưỡng nào?**

- **A.** 50 mm đến 100 mm
- **B.** 0.01 mm đến 0.05 mm
- **C.** 5.0 mm đến 10 mm
- **D.** 0.5 mm đến 1.0 mm

> **Đáp án:** **A**  
> **Giải thích:** Tên lửa đẩy tạo ra rung động mạnh ở dải tần thấp; khung vệ tinh bắt buộc phải có tần số riêng bậc nhất > 90-100 Hz để không bị rung cộng hưởng làm gãy khung.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 76
**Hiện tượng tập trung ứng suất (Stress Concentration) tại các góc nhọn bên trong khung gia công CNC được giảm thiểu bằng biện pháp thiết kế nào?**

- **A.** 0.05 mm đến 0.10 mm
- **B.** 10 mm đến 15 mm
- **C.** 1.5 mm đến 2.0 mm
- **D.** 0.2 mm đến 0.4 mm

> **Đáp án:** **B**  
> **Giải thích:** Bán kính bo tròn góc lượn (Fillet) làm mượt mà đường truyền ứng suất, triệt tiêu nguy cơ xuất hiện vết nứt chân chim do mỏi vật liệu.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 77
**Tác dụng của các lỗ khoét kiểm tra trực quan (Inspection Windows / Cutouts) trên các mặt bên của khung CubeSat là gì?**

- **A.** 0.1 mm đến 0.2 mm
- **B.** 5.0 mm đến 10 mm
- **C.** 1.0 mm đến 1.5 mm
- **D.** 20 mm đến 30 mm

> **Đáp án:** **D**  
> **Giải thích:** Lỗ khoét kỹ thuật vừa tối ưu hóa giảm trọng lượng khung, vừa hỗ trợ kỹ sư kết nối cáp kiểm tra trước giờ phóng mà không cần tháo toàn bộ khung vỏ.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 78
**Đệm lò xo đĩa (Belleville Washer / Disc Spring) được ưu tiên sử dụng trong các mối ghép bu lông chịu biến thiên nhiệt lớn vì đặc tính nào?**

- **A.** Tự động siết ốc chặt hơn theo thời gian hoạt động
- **B.** Có khả năng dẫn truyền nhiệt lượng tốt nhất hiện nay
- **C.** Duy trì lực kẹp đàn hồi ổn định khi có co giãn nhiệt
- **D.** Cách điện hoàn toàn giữa thân bu lông và tấm ghép

> **Đáp án:** **C**  
> **Giải thích:** Đệm đĩa Belleville có độ đàn hồi phi tuyến, bù trừ độ co giãn vi mô của thanh ren khi vệ tinh luân phiên đi qua vùng nắng và vùng tối quỹ đạo.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 79
**Việc sử dụng chốt định vị côn hoặc trụ (Dowel Pins) kết hợp với bu lông trong liên kết khung cơ khí CubeSat nhằm mục đích gì đối với tải trọng cắt?**

- **A.** Gánh hoàn toàn lực cắt trượt, giữ bu lông chỉ chịu kéo
- **B.** Làm tăng tính thẩm mỹ bên ngoài cho kết cấu khung nhôm
- **C.** Làm gia tăng độ ma sát bám dính giữa hai bề mặt phẳng
- **D.** Tạo điều kiện cho khung sườn có thể xoay tự do quanh trục

> **Đáp án:** **A**  
> **Giải thích:** Phân tách tải trọng: Chốt định vị chịu lực cắt trượt, bu lông chịu lực kéo dọc trục giúp mối ghép đạt độ bền mỏi tối đa.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 80
**Bề mặt 4 thanh ray CubeSat sau khi xử lý Anode hóa cứng Type III (MIL-A-8625) có màu sắc đặc trưng tự nhiên là gì trước khi nhuộm?**

- **A.** 0.05 đến 0.10
- **B.** 1.50 đến 2.00
- **C.** 0.15 đến 0.20
- **D.** 0.50 đến 0.70

> **Đáp án:** **B**  
> **Giải thích:** Lớp mạ Hard Anodize dày 25-50 micron có màu xám sẫm tự nhiên do cấu trúc gốm nhôm oxit đặc khít.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 81
**Dải cờ 'REMOVE BEFORE FLIGHT' gắn kèm chốt RBF cơ khí theo thông lệ kỹ thuật hàng không cần có kích thước tối thiểu như thế nào?**

- **A.** 1.0% đến 2.0%
- **B.** 15% đến 25%
- **C.** 45% đến 55%
- **D.** 80% đến 90%

> **Đáp án:** **A**  
> **Giải thích:** Dải cờ kích thước lớn bảo đảm nhân viên phóng có thể nhận biết từ khoảng cách xa và loại bỏ hoàn toàn nguy cơ quên rút chốt trước khi đóng nắp ống phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 82
**Trong quy trình tự kiểm tra thông mạch khung sườn (Chassis Ground Bonding Test) bằng bo mạch OBC, mạch đo phân áp dùng chân ADC kiểm tra thông số nào?**

- **A.** Đo nhiệt độ bề mặt khung bằng cảm biến tích hợp sẵn trên bo mạch
- **B.** Đo độ ẩm tương đối của môi trường buồng thử nghiệm xung quanh
- **C.** Kiểm tra màu sắc quang học của lớp sơn anode bảo vệ bề mặt khung nhôm
- **D.** Đo điện áp rơi hoặc điện trở giữa khung và mass; giá trị dưới 0.1 Ohm là đạt chuẩn

> **Đáp án:** **D**  
> **Giải thích:** Bơm một dòng điện thử nghiệm nhỏ qua mối nối khung vỏ; nếu chân ADC đo được điện áp cực thấp ($< vài\text{ mV}$), khẳng định liên kết mass hoàn hảo.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 83
**Để kiểm tra xem đường nguồn 3.3V hoặc 5V có bị chập ngắn mạch vào khung nhôm hay không (Chassis Isolation Test), giải thuật phần mềm là:**

- **A.** Kích hoạt toàn bộ các tải công suất tiêu thụ tối đa cùng một lúc
- **B.** Đo dòng tĩnh không tải từ IC nguồn; nếu dòng vọt cao bất thường báo hiệu rò khung
- **C.** Tắt toàn bộ hệ thống máy tính trung tâm của vệ tinh CubeSat
- **D.** Thực hiện định dạng lại phân vùng dữ liệu trên thẻ nhớ microSD

> **Đáp án:** **B**  
> **Giải thích:** Hiện tượng chạm chập đường nguồn hoặc chân tín hiệu vào khung sườn kim loại sẽ làm dòng tiêu thụ tăng vọt hoặc gây sụt áp đường nguồn.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 84
**Để theo dõi sự phân bố nhiệt độ không đồng đều (Thermal Gradient) giữa các tầng trong khối xếp chồng, mã C++ cần thực hiện tác vụ nào?**

- **A.** Chỉ thu thập dữ liệu nhiệt độ ở môi trường bên ngoài vỏ
- **B.** Vô hiệu hóa toàn bộ các đầu đo nhiệt độ trên các bo mạch
- **C.** Chỉ đọc một cảm biến duy nhất gắn trên bo mạch vi xử lý
- **D.** Đọc cảm biến chip OBC, bo nguồn EPS và BMP280 ở các tầng

> **Đáp án:** **D**  
> **Giải thích:** So sánh nhiệt độ giữa các tầng phát hiện các điểm nghẽn nhiệt (Thermal Bottlenecks) do tiếp xúc cơ khí tản nhiệt kém.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 85
**Trong giao diện dòng lệnh CLI, lệnh `mech_status` có thể được lập trình để hiển thị các thông số cơ khí nào?**

- **A.** Truyền tải hình ảnh trực tiếp từ trạm thu mặt đất lên
- **B.** Hiển thị danh sách các địa chỉ trang mạng được kết nối
- **C.** Trạng thái công tắc, dòng tĩnh, nhiệt độ và kết quả bus
- **D.** Hiển thị mật khẩu đăng nhập của máy tính điều khiển trạm

> **Đáp án:** **C**  
> **Giải thích:** Lệnh chẩn đoán nhanh giúp kỹ sư cơ khí kiểm tra tức thì trạng thái điện - cơ của khối vệ tinh trên bàn lắp ráp.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 86
**Công thức C++ tính toán mô-men quán tính $I_{zz}$ quanh trục Z của tập hợp các chất điểm là:**

- **A.** Lặp tính tổng tích khối lượng nhân bình phương tọa độ z: m[i]*(z[i]*z[i])
- **B.** Lặp tính tổng tích khối lượng nhân tổng hai tọa độ x và y: m[i]*(x[i]+y[i])
- **C.** Lặp tính tổng tích khối lượng nhân tổng bình phương (x^2 + y^2): m[i]*(x[i]^2 + y[i]^2)
- **D.** Lặp tính tổng tích khối lượng nhân tích hai tọa độ x và z: m[i]*(x[i]*z[i])

> **Đáp án:** **C**  
> **Giải thích:** Định lý mô-men quán tính: khoảng cách bình phương tới trục Z là $r^2 = x^2 + y^2$; nhân với khối lượng $m_i$ cho ra $I_{zz}$.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 87
**Để cấu hình chân đọc công tắc hành trình tại chân ray với điện trở kéo lên nội bộ trong C++, lệnh khởi tạo là:**

- **A.** Cấu hình chân công tắc ở chế độ ngõ vào kéo lên INPUT_PULLUP bằng pinMode()
- **B.** Cấu hình chân công tắc ở chế độ ngõ ra OUTPUT bằng hàm pinMode()
- **C.** Cấu hình chân công tắc ở chế độ ngõ vào thuần túy INPUT không trở kéo
- **D.** Khai báo chân công tắc làm chân ngắt ngoài cạnh xuống FALLING

> **Đáp án:** **A**  
> **Giải thích:** Cấu hình INPUT_PULLUP bảo đảm chân có mức điện áp 3.3V xác định khi công tắc mở ra mà không cần điện trở kéo ngoài.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 88
**Trong phần mềm nhúng hàng không vũ trụ, từ khóa `assert(offset <= 20.0f);` được sử dụng trong giai đoạn tích hợp thử nghiệm nhằm mục đích gì?**

- **A.** Xóa biến offset khỏi vùng nhớ đệm ngăn xếp hệ thống
- **B.** Tăng tốc độ thực thi cho các hàm xử lý tính toán số học
- **C.** Dừng chương trình báo lỗi nếu lệch tâm vượt quá 20 mm
- **D.** Tự động điều chỉnh bù trừ vị trí trọng tâm về tọa độ gốc

> **Đáp án:** **C**  
> **Giải thích:** Lệnh assert bắt các sai sót thiết kế cơ khí nghiêm trọng ngay trong pha thử nghiệm tích hợp trước khi bàn giao phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 89
**Trong quy trình thử nghiệm tích hợp khung, tại sao việc ghi lại toàn bộ nhật ký kiểm tra vào tệp `/integration.log` là bắt buộc?**

- **A.** Cung cấp bằng chứng kiểm định chất lượng cho cấp phép bay
- **B.** Phục vụ công tác nộp báo cáo thực hành cho giảng viên
- **C.** Không đem lại bất kỳ ý nghĩa kỹ thuật thực tế nào cả
- **D.** Làm đầy dung lượng lưu trữ trên thẻ nhớ để thử nghiệm

> **Đáp án:** **A**  
> **Giải thích:** Hồ sơ dữ liệu thử nghiệm tích hợp là tài liệu pháp lý kỹ thuật bắt buộc để chứng minh vệ tinh đạt chuẩn an toàn trước khi nạp vào tên lửa mẹ.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 90
**Để định kỳ ghi dữ liệu nhật ký cơ khí cứ mỗi 500ms vào thẻ nhớ SD, cấu trúc C++ phi phong bế là:**

- **A.** Dùng kỹ thuật phi phong bế: đủ chu kỳ 500ms thì ghi dữ liệu nhật ký và cập nhật mốc
- **B.** Dùng hàm delay(500) chặn toàn bộ tiến trình để chờ đủ thời gian ghi nhật ký
- **C.** Ghi nhật ký liên tục sau mỗi chu kỳ lệnh mà không giới hạn tần suất
- **D.** Chỉ ghi nhật ký duy nhất một lần khi hệ thống vừa khởi động xong

> **Đáp án:** **A**  
> **Giải thích:** Định thời bằng millis() cho phép hệ thống duy trì tần số ghi mẫu 2Hz đều đặn mà không làm gián đoạn các luồng khác.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 91
**Khi phát hiện tốc độ biến thiên nhiệt độ vượt quá ngưỡng sốc nhiệt (> 5°C/phút), hành động phòng ngừa phần mềm là:**

- **A.** Tắt máy tính trung tâm và kích hoạt chu trình hủy lệnh
- **B.** Kích nổ bu lông cắt chốt giải phóng cơ cấu khẩn cấp
- **C.** Ghi log cảnh báo sốc nhiệt và tạm hoãn tác vụ gia nhiệt
- **D.** Xóa toàn bộ các tệp cấu hình trên phân vùng lưu trữ

> **Đáp án:** **C**  
> **Giải thích:** Sốc nhiệt làm thay đổi tiêu cự ống kính quang học; tạm hoãn chụp ảnh giúp thấu kính ổn định kích thước hình học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 92
**Mô hình Breadboard Model (BBM) trong quy trình phát triển vệ tinh phục vụ mục tiêu gì?**

- **A.** 1.00 đến 1.33 kg cho cấu trúc 1U tiêu chuẩn
- **B.** 10.0 đến 12.0 kg cho cấu trúc 1U tiêu chuẩn
- **C.** 0.10 đến 0.20 kg cho cấu trúc 1U tiêu chuẩn
- **D.** 25.0 đến 30.0 kg cho cấu trúc 1U tiêu chuẩn

> **Đáp án:** **A**  
> **Giải thích:** Mô hình BBM là bản mẫu thử nghiệm nguyên lý trên bàn thí nghiệm (Table-sat) bằng các linh kiện phát triển nhanh, nhằm xác thực sơ đồ khối chức năng và phần mềm cơ sở.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 93
**Mô hình cấu trúc nhiệt Structural Thermal Model (STM) được chế tạo nhằm nhiệm vụ nào?**

- **A.** Xác thực độ bền cơ học và đặc tính nhiệt mà không mạo hiểm linh kiện điện tử
- **B.** Kiểm tra tốc độ truyền dữ liệu ảnh chụp của máy ảnh tải trọng quang học
- **C.** Đo đạc chính xác dòng điện nạp vào tế bào quang điện trong môi trường tối
- **D.** Lập trình các thuật toán nhận dạng giọng nói điều khiển trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Mô hình STM có cấu trúc khung và phân bố khối lượng, nhiệt dung giống hệt vệ tinh thật nhưng lắp tải nhiệt giả định (Dummy Masses/Heaters) để thử rung và sốc nhiệt an toàn.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 94
**Mô hình kỹ thuật Engineering Model (EM) khác biệt với mô hình bay FM ở điểm cốt lõi nào?**

- **A.** Dùng linh kiện cấp công nghiệp để thử nghiệm định chuẩn mức khắc nghiệt
- **B.** Được chế tạo từ vật liệu gỗ ép để giảm thiểu chi phí gia công cơ khí
- **C.** Không được tích hợp bất kỳ vi điều khiển xử lý tín hiệu trung tâm nào
- **D.** Có kích thước hình học lớn gấp đôi kích thước tiêu chuẩn của CubeSat

> **Đáp án:** **A**  
> **Giải thích:** Mô hình EM có độ trung thực cao về chức năng và hình học nhưng dùng linh kiện thương mại/công nghiệp; nó chịu các bài thử Qualification khắc nghiệt và dùng làm thiết bị dự phòng mặt đất.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 95
**Mô hình tiền bay Proto-Flight Model (PFM) thường được áp dụng trong hoàn cảnh nào?**

- **A.** Không vượt quá hai centimet so với tâm hình học
- **B.** Phải nằm chính xác tại góc mép ngoài cùng của thanh ray
- **C.** Phải đặt hoàn toàn bên ngoài khung vỏ cấu trúc cơ khí
- **D.** Được phép nằm lệch tự do mà không cần bất kỳ kiểm soát nào

> **Đáp án:** **A**  
> **Giải thích:** Chiến lược PFM (Proto-Flight Model) kết hợp thử nghiệm định chuẩn và chấp nhận trên chính mẫu phần cứng sẽ bay lên quỹ đạo, rất phổ biến trong các dự án CubeSat trường đại học.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 96
**Mục đích cơ bản của bài thử nghiệm rung ngẫu nhiên (Random Vibration Test) là gì?**

- **A.** Mô phỏng môi trường âm học và rung động dữ dội trong pha phóng của tên lửa
- **B.** Kiểm tra khả năng chịu đựng của vệ tinh khi va chạm với thiên thạch lớn
- **C.** Tạo ra điện trường cảm ứng để nạp điện cho các khối pin sạc bên trong
- **D.** Làm lỏng các khớp nối cơ khí để anten dễ dàng bung ra trên quỹ đạo

> **Đáp án:** **A**  
> **Giải thích:** Quá trình tên lửa đốt động cơ đẩy tạo ra rung động cơ học và sóng âm cực mạnh truyền qua khung giá đỡ; thử rung ngẫu nhiên đảm bảo phần cứng sống sót qua giai đoạn phóng.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 97
**Dải tần số quét rung ngẫu nhiên tiêu chuẩn theo quy chuẩn phóng không gian thường lên tới bao nhiêu?**

- **A.** Lên tới hai ngàn héc (2000 Hz) theo các tiêu chuẩn phóng quốc tế
- **B.** Chỉ quét trong dải âm thanh siêu trầm từ một đến năm héc duy nhất
- **C.** Lên tới một trăm megahéc tương đương tần số sóng vô tuyến truyền hình
- **D.** Chỉ quét ở một tần số cố định duy nhất bằng tần số quay của Trái Đất

> **Đáp án:** **A**  
> **Giải thích:** Tiêu chuẩn thử nghiệm tải rung phóng (như NASA-GEVS hay ISO-19683) quy định dải tần số rung ngẫu nhiên điển hình từ 20 Hz đến 2000 Hz.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 98
**Thử nghiệm kéo nén hình sin tần số thấp (Sin-burst Test) nhằm đánh giá yếu tố nào?**

- **A.** 0.10 đến 0.15 mm tạo độ hở trượt ray an toàn
- **B.** 5.00 đến 10.0 mm tạo khoảng hở cơ khí rất lớn
- **C.** 1.00 đến 2.00 cm cho phép xê dịch linh hoạt
- **D.** Chính xác 0.00 mm tuyệt đối không khe hở

> **Đáp án:** **A**  
> **Giải thích:** Bài thử Sin-burst (vài chu kỳ hình sin tần số thấp dưới tần số cộng hưởng thứ nhất) áp đặt lực quán tính tương đương tải trọng gia tốc tĩnh tối đa mà tên lửa tạo ra khi tăng tốc.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 99
**Thử nghiệm sốc cơ học (Shock Test) trên vệ tinh mô phỏng hiện tượng nào của vụ phóng?**

- **A.** Sóng xung kích lan truyền khi kích nổ các cơ cấu hỏa thuật tách tầng
- **B.** Sự va chạm trực tiếp của đầu mũi tên lửa vào các đám mây giông bão
- **C.** Hiện tượng rơi tự do của vệ tinh từ độ cao một mét xuống nền bê tông
- **D.** Lực cản không khí tác dụng vào các cánh pin mặt trời khi bung xòe ra

> **Đáp án:** **A**  
> **Giải thích:** Khi các tầng tên lửa tách ra hoặc nắp chụp đầu tên lửa bung mở, các cơ cấu cắt hỏa thuật (pyrotechnic) phát nổ tạo ra xung sốc tần số cao truyền vào thân vệ tinh.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 100
**Mục tiêu cốt lõi của thử nghiệm chân không nhiệt (Thermal Vacuum - TVAC) là gì?**

- **A.** Xác thực hoạt động điện tử trong môi trường chân không và nhiệt độ khắc nghiệt
- **B.** Làm bốc hơi hoàn toàn các mối hàn thiếc dư thừa trên các bảng mạch in
- **C.** Đo đạc lực hút hấp dẫn của Trái Đất tác dụng lên từng linh kiện điện tử
- **D.** Kiểm tra khả năng chịu áp suất nén cao của vỏ nhôm CubeSat trong nước

> **Đáp án:** **A**  
> **Giải thích:** TVAC đặt vệ tinh vào buồng chân không cao (< 10^-4 Torr) và luân chuyển chu kỳ nhiệt nóng/lạnh cực đoan (-20°C đến +60°C) để phát hiện lỗi linh kiện và kiểm tra tản nhiệt.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 101
**Quy trình sấy nhiệt chân không (Bake-Out) được thực hiện nhằm mục đích gì?**

- **A.** Loại bỏ triệt để các chất hữu cơ dễ bay hơi bốc hơi khỏi vật liệu chế tạo
- **B.** Tăng độ cứng vững cơ học của khung hợp kim nhôm lên gấp hai lần
- **C.** Làm tan chảy các lớp màng oxit cách điện bám trên các chân cắm kết nối
- **D.** Khử từ tính dư thừa của các ốc vít kim loại bằng thép không gỉ

> **Đáp án:** **A**  
> **Giải thích:** Trong chân không, keo dán, màng bọc và vật liệu composite thoát khí (Outgassing); sấy Bake-Out giúp giải phóng trước các khí này để không ngưng tụ làm bẩn ống kính máy ảnh và tế bào quang điện.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 102
**Sự khác biệt cốt lõi giữa Xác minh (Verification) và Xác thực (Validation) là gì?**

- **A.** Xác minh kiểm tra đúng yêu cầu kỹ thuật, xác thực kiểm tra đúng nhu cầu sứ mệnh
- **B.** Xác minh dành cho phần cứng cơ khí, xác thực dành cho phần mềm ứng dụng
- **C.** Xác minh thực hiện trên quỹ đạo, xác thực thực hiện tại phòng thí nghiệm
- **D.** Xác minh do trạm mặt đất làm, xác thực do máy tính trên bo tự động làm

> **Đáp án:** **A**  
> **Giải thích:** Verification trả lời câu hỏi 'Hệ thống có được chế tạo đúng quy chuẩn kỹ thuật không?'; trong khi Validation trả lời câu hỏi 'Đây có đúng là hệ thống đáp ứng mục tiêu người dùng cần không?'.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 103
**Mức thử nghiệm định chuẩn (Qualification Level) có hệ số an toàn như thế nào so với mức bay?**

- **A.** Áp đặt mức tải lớn hơn môi trường bay thực tế thường từ một phẩy hai lăm lần
- **B.** Áp đặt mức tải thấp hơn một nửa để bảo vệ độ bền của các bảng mạch in
- **C.** Chỉ thử nghiệm ở nhiệt độ phòng và không áp dụng bất kỳ lực rung lắc nào
- **D.** Áp đặt tải trọng gấp mười lần để phá hủy hoàn toàn mẫu thử nghiệm

> **Đáp án:** **A**  
> **Giải thích:** Thử nghiệm định chuẩn (QT) áp dụng mức tải khắc nghiệt hơn mức dự kiến tối đa (MPE) với biên độ an toàn (thường 1.25x hoặc +3dB) nhằm chứng minh thiết kế có đủ biên độ chịu lực.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 104
**Mục đích của việc kiểm tra chấp nhận (Acceptance Testing) trên mô hình bay FM là gì?**

- **A.** Xác nhận chất lượng lắp ráp chế tạo mà không làm suy hao tuổi thọ phần cứng
- **B.** Tìm kiếm giới hạn tải trọng phá hủy cơ học cực đại của cấu trúc khung
- **C.** Đo đạc độ suy thoái của các tế bào quang điện dưới liều chiếu xạ gamma cao
- **D.** Kích hoạt thử nghiệm nổ cơ cấu cắt dây hỏa thuật ngay trong phòng sạch

> **Đáp án:** **A**  
> **Giải thích:** Thử nghiệm chấp nhận (AT) được thực hiện ở mức tải tối đa dự kiến (1.0x MPE không có margin) trên chính thiết bị bay FM để kiểm tra khuyết tật chế tạo mà không gây mỏi hỏng hóc linh kiện.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 105
**Quy trình kiểm tra trực quan sau bài thử nghiệm rung động cơ học bao gồm những nội dung nào?**

- **A.** Kiểm tra không bị lỏng ốc vít, không nứt vỡ kính pin và anten không bung sớm
- **B.** Đo đạc độ ẩm không khí bên trong khoang máy và màu sắc lớp sơn phủ
- **C.** Đếm số dòng mã nguồn phần mềm đã được nạp vào bộ nhớ vi điều khiển
- **D.** Kiểm tra tài khoản ngân hàng chi trả phí thuê phòng thử nghiệm bàn rung

> **Đáp án:** **A**  
> **Giải thích:** Sau bài thử rung, kỹ sư tiến hành kiểm tra ngoại quan nghiêm ngặt: siết lại cờ lê lực kiểm tra ốc vít, soi kính hiển vi kiểm tra tế bào quang điện và kiểm tra chốt giữ anten.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 106
**Quy định tiêu chuẩn về tần số dao động riêng cơ bản của cấu trúc CubeSat thường là bao nhiêu?**

- **A.** Phải lớn hơn sáu mươi héc để tránh hiện tượng cộng hưởng nguy hiểm với tên lửa
- **B.** Phải nhỏ hơn một héc để cấu trúc có thể dao động uốn lượn mềm dẻo trong gió
- **C.** Phải đúng bằng một trăm megahéc để cộng hưởng với tần số thu phát của anten
- **D.** Không có bất kỳ quy định nào về tần số dao động riêng của cấu trúc vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Các nhà cung cấp phóng yêu cầu tần số dao động riêng thứ nhất (Fundamental Natural Frequency) của CubeSat phải trên 60-100 Hz để tránh cộng hưởng phá hủy với dao động của tên lửa.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 107
**Thử nghiệm liều chiếu xạ tích lũy (Total Ionizing Dose - TID) sử dụng nguồn phát bức xạ nào?**

- **A.** Nguồn đồng vị phóng xạ Cobalt-60 phát tia gamma năng lượng cao
- **B.** Đèn chiếu tia cực tím công suất lớn dùng khử trùng trong phòng mổ y tế
- **C.** Máy phát sóng siêu âm chẩn đoán hình ảnh dùng trong các bệnh viện lớn
- **D.** Chùm bức xạ ánh sáng khả kiến phát ra từ các bóng đèn halogen công nghiệp

> **Đáp án:** **A**  
> **Giải thích:** Cobalt-60 là nguồn chuẩn quốc tế phát tia gamma mô phỏng liều hấp thụ bức xạ ion hóa tích lũy của linh kiện bán dẫn trong suốt nhiều năm hoạt động trên quỹ đạo không gian.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 108
**Tiêu chuẩn quốc tế ISO-19683 chuyên biệt cho dòng vệ tinh nào trong ngành vũ trụ?**

- **A.** Thử nghiệm định chuẩn và chấp nhận cho các tàu vũ trụ và vệ tinh cỡ nhỏ
- **B.** Quy chuẩn thiết kế trang phục phi hành gia đổ bộ lên bề mặt Sao Hỏa
- **C.** Tiêu chuẩn vệ sinh an toàn thực phẩm đóng gói cho phi hành đoàn không gian
- **D.** Quy định kích thước đường ray tàu hỏa vận chuyển tên lửa tới bệ phóng

> **Đáp án:** **A**  
> **Giải thích:** ISO-19683 là bộ tiêu chuẩn quốc tế định nghĩa các yêu cầu thử nghiệm môi trường (vibration, shock, thermal, EMC) được tối ưu hóa riêng cho các dòng vệ tinh siêu nhỏ (CubeSat/SmallSat).  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

### Câu 109
**Kiểm tra chức năng toàn diện đầu-cuối (End-to-End Functional Test) xác nhận điều gì?**

- **A.** Toàn bộ chu trình gửi lệnh, chụp ảnh và truyền telemetry hoạt động hoàn chỉnh
- **B.** Khối lượng của toàn bộ hệ thống vệ tinh không vượt quá mười kilôgam
- **C.** Nhiệt độ ngoài trời của bãi phóng đạt tiêu chuẩn khí hậu ấm áp thuận lợi
- **D.** Tất cả các tài liệu dự án đã được dịch hoàn toàn sang tiếng Pháp chuẩn

> **Đáp án:** **A**  
> **Giải thích:** E2E Test kiểm tra toàn bộ chuỗi mắt xích: từ lúc trạm mặt đất phát lệnh vô tuyến qua không gian, OBC xử lý, cảm biến ghi dữ liệu đến việc truyền telemetry phản hồi thành công.  
> **Mục tiêu củng cố:** Hiểu vai trò đa chiều của khung cơ khí: tản nhiệt EPS, chắn EMI, ground plane và trục chuẩn  

---

## 📖 Doc 6.3: Tiêu Chuẩn Ngăn Xếp PC/104, Bu Lông Thông Hơi & Cân Bằng Trọng Tâm CoM (38 câu)

### Câu 110
**Khung cấu trúc kim loại ảnh hưởng như thế nào đến khả năng hoạt động của phân hệ Truyền thông (COM)?**

- **A.** Làm mặt phẳng đất phản xạ cho anten đơn cực
- **B.** Thay đổi màu sắc bề mặt bức xạ của anten
- **C.** Tăng tần số phát sóng của anten lên mười lần
- **D.** Ngăn chặn hoàn toàn sóng viễn thông phát xạ

> **Đáp án:** **A**  
> **Giải thích:** Anten đơn cực cần có mặt phẳng dẫn điện của khung vệ tinh làm đối trọng để đạt được sự phối hợp trở kháng và búp sóng bức xạ tối ưu.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 111
**Mối quan hệ giữa sự phân bố khối lượng của khung cơ khí và động lực học tách vệ tinh khỏi ống phóng là gì?**

- **A.** Khối lượng không tác động tới động lực học
- **B.** Khung càng nặng thì vệ tinh bay càng nhanh
- **C.** Lệch CoM tạo mô-men gây quay lộn dữ dội
- **D.** Trọng tâm luôn tự động nằm ở tâm hình học

> **Đáp án:** **C**  
> **Giải thích:** Lực đẩy lò xo P-POD tác dụng lên mặt đáy; độ lệch của trọng tâm so với trục đẩy sinh ra mô-men ngẫu lực gây vận tốc quay lộn ban đầu (Tip-off rate).  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 112
**Tiêu chuẩn thiết kế quốc tế CalPoly quy định vị trí trọng tâm (CoM) thực tế của một CubeSat 1U phải nằm trong giới hạn nào?**

- **A.** Phải nằm lệch hẳn về một góc của cấu trúc
- **B.** Có thể nằm tại bất kỳ vị trí tùy ý nào
- **C.** Bán kính lệch không quá ±2.0 cm quanh tâm
- **D.** Nằm cách tâm hình học một khoảng tối thiểu 5 cm

> **Đáp án:** **C**  
> **Giải thích:** Giới hạn nghiêm ngặt $\pm 2\text{ cm}$ bảo đảm lực bung lò xo không tạo ra mô-men quay lộn vượt quá khả năng ổn định của hệ thống.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 113
**Kiến trúc xếp chồng bo mạch tiêu chuẩn công nghiệp 'PC/104' được định nghĩa bởi đặc điểm hình học nào?**

- **A.** Các bo mạch được gắn bố trí hoàn toàn ngẫu nhiên
- **B.** Các bo mạch có biên dạng hình tròn đồng tâm
- **C.** Các bo mạch được liên kết với nhau bằng dây cáp
- **D.** Bo mạch xếp chồng song song qua 4 trụ và đầu bus

> **Đáp án:** **D**  
> **Giải thích:** Chuẩn PC/104 là kiến trúc mô-đun hóa kinh điển của ngành công nghiệp nhúng, tạo nên cấu trúc khối cực kỳ cứng vững và đồng nhất.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 114
**Kích thước danh định của một bo mạch PCB chuẩn PC/104 sử dụng cho CubeSat 1U là bao nhiêu?**

- **A.** 50.0 mm x 50.0 mm
- **B.** 90.17 mm x 95.89 mm
- **C.** 200.0 mm x 200.0 mm
- **D.** 10.0 mm x 10.0 mm

> **Đáp án:** **B**  
> **Giải thích:** Kích thước 90x96 mm vừa khít thể tích lọt lòng bên trong của cấu trúc 1U sau khi trừ đi chiều dày thành khung nhôm.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 115
**Bốn lỗ bắt bu lông tại 4 góc của bo mạch chuẩn PC/104 thường có đường kính lỗ danh định là bao nhiêu?**

- **A.** 3.2 mm
- **B.** 0.5 mm
- **C.** 1.0 mm
- **D.** 10.0 mm

> **Đáp án:** **A**  
> **Giải thích:** Lỗ 3.2 mm cho phép bu lông M3 đi qua tự do kèm theo vòng đệm phẳng giảm chấn.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 116
**Khoảng cách tầng (Stacking Height) giữa các bo mạch trong khối PC/104 CubeSat được duy trì bởi linh kiện cơ khí nào?**

- **A.** Hệ thống dây treo lò xo giảm chấn chuyển động
- **B.** Trụ ren kim loại chuẩn cao 15 mm hoặc 20 mm
- **C.** Keo nến nóng chảy dán cố định các tấm bo
- **D.** Miếng đệm carton chèn chặt giữa các tầng

> **Đáp án:** **B**  
> **Giải thích:** Các trụ ren standoffs chịu toàn bộ tải trọng nén và kéo dọc trục của khối xếp chồng, ngăn các bảng mạch va đập vào nhau.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 117
**Đầu nối bus xếp chồng xuyên tầng (Stack-through Header Connector) trong kiến trúc PC/104 có ưu điểm kỹ thuật nào?**

- **A.** Làm tăng tính thẩm mỹ cho khối xếp chồng bo
- **B.** Tăng xung nhịp dao động của thạch anh hệ thống
- **C.** Chống cháy nổ tuyệt đối cho toàn bộ mạch điện
- **D.** Chân cắm xuyên tầng truyền tín hiệu và đường bus

> **Đáp án:** **D**  
> **Giải thích:** Loại bỏ các bó dây nối chằng chịt giúp giảm thiểu nguy cơ đứt gãy dây do rung động và giảm thể tích chiếm chỗ.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 118
**Thứ tự sắp xếp tối ưu theo chiều dọc của các phân hệ trong khối xếp chồng PC/104 từ đáy lên nóc CubeSat là gì?**

- **A.** Không cần tuân theo bất kỳ trật tự bố trí nào
- **B.** Đáy: Anten phát sóng; Giữa: Bo mạch; Nóc: Khối pin
- **C.** Đáy: Máy ảnh; Giữa: Khối pin; Nóc: Khối nguồn EPS
- **D.** Đáy: Bo EPS, Pin; Giữa: OBC; Nóc: Camera và COM

> **Đáp án:** **D**  
> **Giải thích:** Pin và EPS nặng nhất đặt sát đáy hạ thấp trọng tâm và tản nhiệt trực tiếp ra khung đáy; COM và Camera ở nóc để thuận tiện nối anten và nhìn ra ngoài.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 119
**Keo khóa ren kỵ khí (Threadlocker như Loctite 222 hoặc 242/243) bắt buộc phải tra vào ren bu lông nhằm mục đích gì?**

- **A.** Hàn dính vĩnh viễn mối ren không thể tháo rời
- **B.** Chống gỉ sét mối ren trong môi trường nước mặn
- **C.** Bôi trơn giúp ren bu lông xoay trơn tru hơn
- **D.** Chống tự tháo lỏng bu lông dưới rung động phóng

> **Đáp án:** **D**  
> **Giải thích:** Rung động phóng làm lỏng ốc vít trong tích tắc nếu không có keo khóa ren; Loctite kỵ khí đông cứng khi không có không khí trong khe ren.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 120
**Loại keo khóa ren Loctite 222 (màu tím) có đặc tính kỹ thuật nào phù hợp cho bu lông kích thước nhỏ (M2 - M3)?**

- **A.** Khóa chết vĩnh viễn chỉ tháo được khi nung nóng
- **B.** Đông cứng tức thì trong vòng một giây tiếp xúc
- **C.** Độ bền vừa phải, dễ tháo lắp bằng dụng cụ tay
- **D.** Dẫn điện tốt giúp nối mass qua thân bu lông

> **Đáp án:** **C**  
> **Giải thích:** Loctite 222 chống tháo tự do do rung động nhưng vẫn cho phép kỹ sư vặn tháo dễ dàng khi cần hiệu chỉnh trong phòng lab.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 121
**Để cân bằng trọng tâm (CoM) của vệ tinh bị lệch tâm về đúng tâm hình học, giải pháp cơ khí thực địa là gì?**

- **A.** Gọt mỏng bớt một phần của thanh ray định hướng
- **B.** Bố trí thêm tải trọng cân bằng tại góc đối diện
- **C.** Đổ thêm dung dịch chất lỏng vào bên trong khoang
- **D.** Tháo bớt các bu lông chịu lực của khung sườn

> **Đáp án:** **B**  
> **Giải thích:** Các miếng kim loại nhỏ được tính toán khối lượng chính xác và bắt chặt vào khung để kéo trọng tâm về vị trí an toàn.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 122
**Phương pháp xác định vị trí trọng tâm (CoM) của CubeSat trong phòng thí nghiệm thường sử dụng thiết bị nào?**

- **A.** Sử dụng cân đĩa cơ học trong phòng thí nghiệm
- **B.** Thả rơi tự do trong buồng hút chân không cao
- **C.** Bàn xoay đo CoM hoặc phương pháp treo dây dọi
- **D.** Đo khoảng cách cơ học bằng thước cặp cơ khí

> **Đáp án:** **C**  
> **Giải thích:** Giao điểm của các đường dây dọi đi qua điểm treo ở 3 tư thế khác nhau xác định chính xác tọa độ $(X_{cm}, Y_{cm}, Z_{cm})$ trong không gian.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 123
**Mô-men quán tính khối lượng (Mass Moment of Inertia - MOI: $I_{xx}, I_{yy}, I_{zz}$) của vệ tinh quyết định đại lượng động lực học nào?**

- **A.** Mức cản trở chuyển động quay quanh trục quán tính
- **B.** Tốc độ bay tịnh tiến của vệ tinh trên quỹ đạo
- **C.** Dung lượng điện năng tiêu thụ của mạch nguồn bay
- **D.** Tần số bức xạ sóng vô tuyến của hệ thống anten

> **Đáp án:** **A**  
> **Giải thích:** MOI là đại lượng tương đương với khối lượng trong chuyển động quay: $T = I \times \alpha$; MOI quyết định độ khó của việc điều khiển tư thế.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 124
**Thanh ren chịu lực (Threaded Rods) xâu qua toàn bộ 4 góc của khối PC/104 để kẹp chặt các tầng có kích thước ren phổ biến là:**

- **A.** M12
- **B.** M3
- **C.** M8
- **D.** M1

> **Đáp án:** **B**  
> **Giải thích:** Thanh ren M3 bằng inox xâu suốt từ tấm đáy lên tấm nóc là giải pháp gia cố kết cấu xếp chồng cực kỳ phổ biến.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 125
**Đai ốc chặn (Locking Nuts) ở hai đầu thanh ren PC/104 cần được trang bị thêm phụ kiện nào để chống rung?**

- **A.** Đệm vênh lò xo kết hợp keo khóa ren Loctite
- **B.** Băng dính giấy thông thường quấn quanh đầu ren
- **C.** Dây chun cao su buộc chặt bên ngoài đai ốc
- **D.** Vòng đệm bằng xốp cách nhiệt chèn giữa ren

> **Đáp án:** **A**  
> **Giải thích:** Đệm lò xo duy trì lực căng trước (Preload) ngăn ngừa đai ốc bị nới lỏng khi thanh ren bị giãn nở vì nhiệt.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 126
**Khái niệm 'Bảng cân đối khối lượng' (Mass Budget) của vệ tinh CubeSat theo dõi thông số nào?**

- **A.** Khối lượng tổng thể của hệ thống tên lửa phóng mẹ
- **B.** Lực đẩy cực đại sinh ra từ động cơ tên lửa chính
- **C.** Bảng kê tổng chi phí tài chính của từng linh kiện
- **D.** Bảng kê khối lượng từng linh kiện kèm biên dự phòng

> **Đáp án:** **D**  
> **Giải thích:** Mass Budget bảo đảm tổng trọng lượng tích lũy của toàn bộ vệ tinh không bao giờ vượt quá ngưỡng trần của tiêu chuẩn ống phóng.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 127
**Hệ số dự phòng khối lượng (Mass Margin) khuyến nghị trong giai đoạn thiết kế cơ sở của CubeSat thường là bao nhiêu?**

- **A.** 0% đến 2%
- **B.** 15% đến 20%
- **C.** 45% đến 55%
- **D.** 90% đến 100%

> **Đáp án:** **B**  
> **Giải thích:** Biên dự phòng bù đắp cho sự tăng khối lượng thực tế của dây dẫn, keo dán và các linh kiện phát sinh trong quá trình tích hợp.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 128
**Cảm biến lực đo mô-men xoắn (Load Cell) tích hợp trong đồ gá đo trọng tâm hoạt động dựa trên hiệu ứng gì?**

- **A.** Điện trở cầu Wheatstone thay đổi theo lực nén
- **B.** Hiệu ứng quang điện sinh dòng khi có ánh sáng chiếu
- **C.** Hiệu ứng giãn nở nhiệt của phần tử cảm biến lưỡng kim
- **D.** Hiện tượng bức xạ hạt phân rã tự nhiên theo thời gian

> **Đáp án:** **A**  
> **Giải thích:** Strain Gauge đo chính xác lực tác dụng tại các điểm tựa để tính toán tọa độ trọng tâm theo nguyên lý cân bằng mô-men đòn bẩy.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 129
**Khi đo trọng tâm CoM của CubeSat bằng 3 cảm biến lực đặt dưới 3 chân đế, tọa độ trọng tâm $X_{cm}$ được tính theo công thức:**

- **A.** X_cm = (x1 + x2 + x3) / 3
- **B.** X_cm = (F1 * x1 * F2 * x2 * F3 * x3) / (F1 + F2 + F3)
- **C.** X_cm = (F1 + F2 + F3) / (x1 + x2 + x3)
- **D.** X_cm = (F1 * x1 + F2 * x2 + F3 * x3) / (F1 + F2 + F3)

> **Đáp án:** **D**  
> **Giải thích:** Công thức tính trọng tâm cổ điển: tổng mô-men lực chia cho tổng lực trọng trường tác dụng.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 130
**Bu lông thông hơi (Drilled-core Vented Screws) có một lỗ khoan xuyên tâm dọc trục bu lông được dùng để làm gì?**

- **A.** Tạo đường ống dẫn luồn các dây điện tín hiệu nhỏ
- **B.** Dẫn dầu bôi trơn khoáng thẩm thấu vào các rãnh ren
- **C.** Làm giảm trọng lượng bản thân của thân bu lông ghép
- **D.** Thoát khí đáy lỗ ren trong chân không triệt rò ảo

> **Đáp án:** **D**  
> **Giải thích:** Khí nén kẹt dưới đáy ốc không có lỗ thoát sẽ xì dần dần trong chân không (Virtual Leak), phá hủy kết quả thử nghiệm TVAC.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 131
**Hiện tượng 'Rò rỉ ảo' (Virtual Leak) trong các thử nghiệm chân không nhiệt TVAC gây ra khó khăn gì?**

- **A.** Làm cháy động cơ của máy bơm hút chân không thử nghiệm
- **B.** Khí rò chậm từ khe ren làm buồng khó đạt chân không
- **C.** Làm nổ tung buồng thử nghiệm do hiện tượng quá áp
- **D.** Làm nhiệt độ buồng thử nghiệm gia tăng đột biến nhanh

> **Đáp án:** **B**  
> **Giải thích:** Rò rỉ ảo làm kỹ sư tưởng nhầm gioăng buồng thử nghiệm bị hở, làm lãng phí nhiều ngày đo kiểm vô ích.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 132
**Tấm ép khối pin (Battery Compression Plate) trong phân hệ cơ khí có vai trò gì đối với cell pin Li-Po túi dẹp?**

- **A.** 1.0 mm đến 1.5 mm
- **B.** 50 mm đến 80 mm
- **C.** 8.0 mm đến 8.5 mm
- **D.** 0.05 mm đến 0.1 mm

> **Đáp án:** **A**  
> **Giải thích:** Áp lực kẹp nhẹ đều đặn kéo dài tuổi thọ chu kỳ cell pin Li-Po dạng túi và duy trì tiếp xúc nhiệt tối ưu với tấm tản nhiệt.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 133
**Phần trăm tỷ trọng khối lượng của khung cấu trúc cơ khí (Structural Mass Fraction) so với tổng khối lượng của CubeSat 1U thông thường chiếm khoảng:**

- **A.** 15% đến 25%
- **B.** 45% đến 55%
- **C.** 80% đến 90%
- **D.** 1% đến 2%

> **Đáp án:** **A**  
> **Giải thích:** Tỷ trọng 15-25% là tỷ lệ vàng cân bằng giữa độ cứng vững chịu lực rung động và việc dành thể tích, tải trọng cho pin và các phân hệ khác.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 134
**Phương pháp đo khối lượng toàn bộ vệ tinh CubeSat với độ chính xác cao trong phòng thí nghiệm sử dụng thiết bị nào?**

- **A.** Cân bàn cơ học dùng quả cân tiêu chuẩn hiệu chuẩn
- **B.** Cân phân tích điện tử độ phân giải cao được kiểm định
- **C.** Cân treo đồng hồ có lò xo đàn hồi định mức cơ bản
- **D.** Ước lượng gián tiếp theo thể tích bao ngoài hình học

> **Đáp án:** **B**  
> **Giải thích:** Cân phân tích điện tử chuẩn phòng thí nghiệm bảo đảm số liệu tổng khối lượng đáp ứng chính xác bảng chỉ tiêu Mass Budget.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 135
**Tiêu chuẩn quốc tế ASTM E595 quy định chỉ số tổng lượng khối lượng suy giảm (TML - Total Mass Loss) của vật liệu trong chân không phải đạt yêu cầu nào?**

- **A.** TML < 10.0%
- **B.** TML = 0.00%
- **C.** TML > 50%
- **D.** TML < 1.0%

> **Đáp án:** **D**  
> **Giải thích:** Giới hạn TML dưới 1.0% là ngưỡng bắt buộc của NASA/ESA nhằm bảo đảm vật liệu không bị bốc hơi hao hụt trọng lượng quá mức trong không gian.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 136
**Khi thiết kế vách ngăn bảo vệ khối pin (Battery Enclosure), tấm cách ly cơ học bằng vật liệu composite FR-4 hoặc polyimide có vai trò gì?**

- **A.** Làm gia tăng đáng kể khả năng truyền nhiệt của khối pin
- **B.** Hỗ trợ tích lũy thêm điện năng cho toàn bộ hệ thống nguồn
- **C.** Tích hợp hệ thống làm mát bằng chất lỏng vi tuần hoàn
- **D.** Chống mài mòn túi pin với khung, cách ly điện và nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Tấm cách ly đệm giữa cell pin Li-Po và vách nhôm bảo vệ màng bọc pin không bị cạnh kim loại sắc cọ thủng dưới gia tốc rung lắc.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 137
**Khi cân bằng khối lượng CubeSat 1U, nếu phát hiện trọng tâm CoM bị lệch khỏi vùng an toàn cho phép (+-20 mm), kỹ sư cơ khí sử dụng giải pháp nào?**

- **A.** Uốn cong nhẹ thanh ray định hướng để bù trừ khoảng lệch
- **B.** Bố trí lại khối nặng hoặc thêm tải trọng dằn đối xứng
- **C.** Khoét thêm các lỗ rỗng trên bề mặt túi cell pin mềm
- **D.** Cắt bỏ bớt một góc của bo mạch máy tính trung tâm OBC

> **Đáp án:** **B**  
> **Giải thích:** Lắp thêm các miếng khối lượng dằn (Ballast Mass) hoặc hoán đổi tầng pin là kỹ thuật cân bằng trọng tâm tiêu chuẩn trong cơ học vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 138
**Để tính toán tọa độ trọng tâm $X_{cm}$ trong chương trình C++ từ mảng các phần tử có khối lượng $m[i]$ và tọa độ $x[i]$, giải thuật là:**

- **A.** Lặp tính tổng tích m[i]*x[i] và tổng khối lượng m[i], rồi chia hai tổng cho nhau
- **B.** Lặp tính tổng m[i]+x[i] và tổng khối lượng m[i], rồi chia hai tổng cho nhau
- **C.** Lặp tính tổng tích m[i]*x[i] và tổng tọa độ x[i], rồi nhân hai tổng với nhau
- **D.** Chỉ nhân khối lượng và tọa độ của phần tử đầu tiên m[0]*x[0] rồi trừ tổng khối lượng

> **Đáp án:** **A**  
> **Giải thích:** Thuật toán tích lũy tổng mô-men tĩnh $\sum m_i x_i$ và chia cho tổng khối lượng $\sum m_i$ cho ra chính xác vị trí trọng tâm.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 139
**Đoạn mã C++ nào sau đây kiểm tra xem độ lệch trọng tâm so với tâm hình học lý thuyết $(0, 0, 0)$ có vượt quá ngưỡng cho phép 20 mm hay không:**

- **A.** Cộng đại số trực tiếp 3 tọa độ X_cm + Y_cm + Z_cm và so sánh với 20 mm
- **B.** Lấy giá trị lớn nhất trong 3 tọa độ trọng tâm và so sánh với 20 mm
- **C.** Cộng tổng giá trị tuyệt đối của hai trục X và Y rồi so sánh với 20 mm
- **D.** Tính khoảng cách Euclid căn bậc hai (x*x + y*y + z*z) và so sánh với ngưỡng 20 mm

> **Đáp án:** **D**  
> **Giải thích:** Tính khoảng cách Euclid 3 chiều từ gốc tọa độ tâm hình học đến điểm trọng tâm và so sánh với bán kính giới hạn 20.0 mm.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 140
**Sau khi hoàn tất lắp ráp toàn bộ khối PC/104 vào khung nhôm, quy trình quét bus I2C (Post-assembly I2C Health Check) có tác dụng gì?**

- **A.** Tự động thay đổi địa chỉ định danh của các con chip
- **B.** Hỗ trợ làm mát nhanh cho các tầng bo mạch điện tử
- **C.** Xác nhận cảm biến phản hồi ACK, bảo đảm bus không lỏng
- **D.** Xóa sạch dữ liệu lưu trữ tạm trên bộ nhớ flash

> **Đáp án:** **C**  
> **Giải thích:** Nếu thiếu một địa chỉ thiết bị Slave quen thuộc, kỹ sư biết ngay tầng bo mạch tương ứng bị lỏng chân cắm header trong quá trình siết bu lông.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 141
**Để tính toán tọa độ trọng tâm theo cả 3 trục $X, Y, Z$ trong C++, cấu trúc dữ liệu thích hợp để biểu diễn một thành phần khối lượng là:**

- **A.** Định nghĩa cấu trúc struct MassElement chứa khối lượng float và 3 tọa độ x, y, z
- **B.** Khai báo cấu trúc chứa mảng 4 phần tử khối lượng và mảng 3 phần tử tọa độ
- **C.** Khai báo cấu trúc chứa biến trọng lượng double và mảng vị trí pos 3 chiều
- **D.** Khai báo cấu trúc biểu diễn tọa độ cầu gồm bán kính r và hai góc quay

> **Đáp án:** **A**  
> **Giải thích:** Cấu trúc MassElement đóng gói khối lượng và tọa độ không gian 3 chiều của từng linh kiện để phục vụ tính toán.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 142
**Hàm C++ nào sau đây tính toán véc-tơ trọng tâm 3 chiều từ mảng các phần tử `MassElement elements[N]`:**

- **A.** Khởi tạo hàm tính trọng tâm nhưng luôn gán véc-tơ kết quả về gốc tọa độ 0
- **B.** Tính tổng mô-men tĩnh theo từng trục chia cho tổng khối lượng qua hàm calcWeighted()
- **C.** Gán véc-tơ trọng tâm bằng đúng tọa độ của phần tử đầu tiên trong mảng
- **D.** Gán véc-tơ trọng tâm bằng đúng tọa độ của phần tử cuối cùng trong mảng

> **Đáp án:** **B**  
> **Giải thích:** Hàm tính toán trọng tâm 3 chiều chuẩn xác bằng cách lấy trung bình có trọng số theo khối lượng trên cả 3 trục tọa độ.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 143
**Hàm C++ nào sau đây mô phỏng tính toán khối lượng còn lại của Mass Margin (kg) trong bảng cân đối khối lượng:**

- **A.** Lấy khối lượng giới hạn trừ khối lượng hiện tại mà không chia tỷ lệ
- **B.** Lấy khối lượng hiện tại chia cho khối lượng giới hạn cho phép
- **C.** Cộng hai khối lượng lại với nhau rồi nhân với hệ số an toàn 1.5
- **D.** Tính tỷ lệ phần trăm khối lượng dự trữ: ((limit - cur) / limit) * 100%

> **Đáp án:** **D**  
> **Giải thích:** Tính toán tỷ lệ phần trăm khối lượng dự phòng còn lại so với giới hạn trần quy định của ống phóng.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 144
**Đoạn mã C++ nào sau đây cài đặt chức năng cảnh báo nếu phát hiện một bo mạch trong khối PC/104 bị mất phản hồi I2C bất thường:**

- **A.** Duyệt danh sách thiết bị; nếu có thiết bị không phản hồi thì bỏ qua không xử lý
- **B.** Duyệt danh sách thiết bị I2C; nếu phát hiện mất kết nối thiết bị nào thì kích hoạt cờ cảnh báo
- **C.** Chỉ kiểm tra thiết bị đầu tiên trong danh sách và bỏ qua các khối còn lại
- **D.** Khởi động lại toàn bộ hệ thống ngay khi bắt đầu quét thiết bị đầu tiên

> **Đáp án:** **B**  
> **Giải thích:** Quét định kỳ toàn bộ danh sách thiết bị I2C phát hiện kịp thời các sự cố lỏng chân cắm bus xuyên tầng PC/104 khi rung động.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 145
**Để kiểm tra xem chân nối đất của anten COM có thực sự tiếp xúc điện tốt với khung nhôm hay không bằng phần mềm, nguyên lý là:**

- **A.** Đo hệ số sóng đứng SWR; SWR thấp gần 1.0 chứng minh anten tiếp xúc mass tốt
- **B.** Ngắt toàn bộ đường nguồn nuôi của phân hệ truyền thông không dây
- **C.** Đo nhiệt độ trên vỏ kim loại của cổng kết nối SMA bằng cảm biến hồng ngoại
- **D.** Đo dòng điện một chiều DC chạy qua dây cáp đồng trục dẫn sóng

> **Đáp án:** **A**  
> **Giải thích:** Hệ số sóng đứng SWR thấp khẳng định anten đã phối hợp trở kháng tối ưu với mặt phẳng mass khung kim loại của vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 146
**Hàm C++ nào sau đây in ra thông số tổng khối lượng của vệ tinh được cấu hình từ bảng tham số:**

- **A.** In khối lượng vệ tinh với định dạng số nguyên không có phần thập phân
- **B.** In nhãn văn bản cố định mà không kèm giá trị số đo thực tế
- **C.** Chuyển giá trị khối lượng sang chuỗi ký tự thô không kiểm soát định dạng
- **D.** In tổng khối lượng vệ tinh kèm đơn vị kg với độ chính xác 3 chữ số thập phân

> **Đáp án:** **D**  
> **Giải thích:** In ra khối lượng chính xác đến gram để đối chiếu với bảng cân đối khối lượng Mass Budget.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

### Câu 147
**Đoạn mã C++ nào sau đây kiểm tra xem tổng khối lượng có vượt quá ngưỡng cho phép 1.330 kg hay không:**

- **A.** Cảnh báo khi khối lượng vệ tinh nhỏ hơn 1.000 kg quy định
- **B.** Chỉ cảnh báo khi khối lượng vệ tinh bằng chính xác 1.330 kg
- **C.** Kiểm tra tổng khối lượng vệ tinh; nếu vượt quá giới hạn 1.330 kg chuẩn 1U thì cảnh báo
- **D.** Bỏ qua bước kiểm tra khối lượng vì khung sườn nhôm luôn nhẹ

> **Đáp án:** **C**  
> **Giải thích:** Xác thực khối lượng không vượt quá giới hạn trần của ống phóng P-POD tiêu chuẩn.  
> **Mục tiêu củng cố:** Nắm vững chuẩn ngăn xếp PC/104, bu lông thông hơi chống rò rỉ ảo và cân bằng trọng tâm  

---

## 📖 Doc 6.2: Vật Liệu Hợp Kim Không Gian Al 6061-T6, Xử Lý Bề Mặt & Thoát Khí Chân Không (13 câu)

### Câu 148
**Tiêu chuẩn thử nghiệm thoát khí trong chân không nhiệt ASTM E595 (Outgassing Test) đặt ra những giới hạn nghiêm ngặt nào đối với vật liệu không gian?**

- **A.** Vật liệu phải phát ra ánh sáng huỳnh quang
- **B.** TML ≤ 1.0% và lượng ngưng tụ CVCM ≤ 0.10%
- **C.** Vật liệu phải hòa tan hoàn toàn trong nước
- **D.** Khối lượng vật liệu càng nặng thì càng tốt

> **Đáp án:** **B**  
> **Giải thích:** Tiêu chuẩn NASA ASTM E595 bảo đảm các chất kết dính, băng keo và polyme không bay hơi làm bẩn các bề mặt quang học trong chân không.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 149
**Hậu quả nghiêm trọng của hiện tượng thoát khí (Outgassing) từ vật liệu kém chất lượng bên trong CubeSat là gì?**

- **A.** Hơi ngưng tụ bám màng bẩn lên kính và tấm pin
- **B.** Vệ tinh bị suy giảm khối lượng nhanh chóng
- **C.** Làm gia tăng độ bền cơ học của khung sườn
- **D.** Giúp tấm pin Mặt Trời nạp điện nhanh hơn

> **Đáp án:** **A**  
> **Giải thích:** Lớp màng ngưng tụ hữu cơ làm mờ đục ống kính viễn thám và giảm sút nghiêm trọng công suất hấp thụ photon của pin Mặt Trời.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 150
**Hợp kim nhôm hàng không vũ trụ nào được sử dụng phổ biến nhất để gia công khung cấu trúc CubeSat 1U?**

- **A.** Thép gang xám công nghiệp nặng thông dụng
- **B.** Hợp kim nhôm Al 6061-T6 hoặc Al 7075-T6
- **C.** Kim loại chì nguyên chất có khối lượng lớn
- **D.** Nhôm đúc thông thường dùng trong gia dụng

> **Đáp án:** **B**  
> **Giải thích:** Al 6061-T6 có độ bền kéo cao (~310 MPa), tỷ trọng nhẹ (2.7 g/cm³), dẫn nhiệt tốt, dễ gia công phay CNC chính xác và chi phí hợp lý.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 151
**Hợp kim nhôm Al 7075-T6 có ưu thế vượt trội nào so với Al 6061-T6 trong các kết cấu chịu lực cao?**

- **A.** Dễ hàn dính bằng thiếc hàn mạch hơn Al 6061
- **B.** Chống chịu ăn mòn tốt hơn trong môi trường biển
- **C.** Độ bền kéo và giới hạn chảy vượt trội gần gấp đôi
- **D.** Có khối lượng riêng nhẹ hơn Al 6061 khoảng mười lần

> **Đáp án:** **C**  
> **Giải thích:** Al 7075-T6 (hệ hợp kim Nhôm-Kẽm) có độ bền cơ học tương đương nhiều loại thép nhưng trọng lượng chỉ bằng một phần ba.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 152
**Đặc tính dẫn nhiệt cao của hợp kim nhôm (khoảng 160 - 170 W/(m·K)) mang lại lợi ích gì cho việc kiểm soát nhiệt độ CubeSat?**

- **A.** Giữ nhiệt độ bên trong vệ tinh cố định 100 độ C
- **B.** Làm nóng nhanh toàn bộ khung vỏ khi vào vùng tối
- **C.** Dẫn nhiệt linh kiện ra vỏ ngoài để bức xạ nhiệt
- **D.** Cách nhiệt hoàn toàn giữa bên trong và bên ngoài

> **Đáp án:** **C**  
> **Giải thích:** Trong môi trường không gian không có không khí đối lưu, dẫn nhiệt qua khung nhôm là giải pháp làm mát thụ động duy nhất cho các vi mạch.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 153
**Mô-men xoắn siết khuyến nghị tiêu chuẩn cho bu lông thép không gỉ kích thước M3 bắt vào ren hợp kim nhôm Al 6061 là bao nhiêu?**

- **A.** 0.6 N·m đến 0.9 N·m
- **B.** 50 N·m đến 70 N·m
- **C.** 10 N·m đến 15 N·m
- **D.** 0.01 N·m đến 0.05 N·m

> **Đáp án:** **A**  
> **Giải thích:** Mức lực $0.6 - 0.9\text{ N}\cdot\text{m}$ bảo đảm lực kẹp chặt tối ưu mà không làm đứt ren nhôm mềm hơn.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 154
**Giải pháp ngăn ngừa ăn mòn điện hóa giữa bu lông thép không gỉ và khung sườn hợp kim nhôm là gì?**

- **A.** Dùng lớp mạ tương thích hoặc hợp chất chống dính kẹt
- **B.** Không sử dụng bất kỳ bu lông cơ khí nào trong khung
- **C.** Hàn nhiệt nóng chảy trực tiếp hai kim loại với nhau
- **D.** Ngâm toàn bộ kết cấu khung nhôm trong nước muối đặc

> **Đáp án:** **A**  
> **Giải thích:** Lớp màng ngăn cách triệt tiêu tiếp xúc điện phân trực tiếp giữa hai kim loại có độ chênh điện thế galvanic lớn.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 155
**Ký hiệu trạng thái nhiệt luyện '-T6' trong hợp kim nhôm Al 6061-T6 có ý nghĩa kỹ thuật nào?**

- **A.** Bề mặt hợp kim nhôm được tôi cứng bằng chùm tia laser
- **B.** Kim loại được làm nguội tự nhiên trong không khí tĩnh
- **C.** Tôi dung dịch kết hợp hóa già nhân tạo để hóa bền
- **D.** Nhôm nguyên chất không qua bất kỳ quá trình xử lý nhiệt

> **Đáp án:** **C**  
> **Giải thích:** Quy trình xử lý nhiệt T6 tạo ra mạng pha kết tủa liên kim phân tán mịn, nâng giới hạn bền kéo lên mức tối đa.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 156
**Lớp phủ chuyển đổi hóa học Alodine (Chromate Conversion Coating MIL-DTL-5541 Class 3) khác với lớp mạ Anode ở đặc tính cốt lõi nào?**

- **A.** Lớp phủ Alodine là vật liệu cách điện hoàn toàn 100%
- **B.** Lớp phủ Alodine có độ dày lớn hơn lớp Anode tới 10 lần
- **C.** Duy trì dẫn điện tốt và chống oxy hóa bề mặt nhôm
- **D.** Lớp phủ Alodine luôn có màu đen mờ đặc trưng quang học

> **Đáp án:** **C**  
> **Giải thích:** Anode hóa tạo lớp oxit cách điện; do đó các mặt trong cần dẫn điện tiếp mass bắt buộc phải phủ Alodine Class 3.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 157
**Độ sâu ăn khớp ren tối thiểu (Minimum Thread Engagement Length) khi vặn bu lông thép vào lỗ ren trong hợp kim nhôm mềm là:**

- **A.** Tối thiểu 1.5 đến 2.0 lần đường kính thân bu lông
- **B.** Tối thiểu 0.2 đến 0.5 lần đường kính thân bu lông
- **C.** Tối thiểu 5.0 đến 6.0 lần đường kính thân bu lông
- **D.** Tối thiểu 10 đến 12 lần đường kính thân bu lông

> **Đáp án:** **A**  
> **Giải thích:** Vì nhôm có giới hạn bền cắt thấp hơn thép, độ sâu ăn khớp sâu $\ge 1.5D$ bảo đảm lực căng sẽ làm đứt bu lông thép trước khi tuột ren nhôm.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 158
**Chỉ số CVCM (Collected Volatile Condensable Material) trong thử nghiệm thoát khí ASTM E595 khống chế mức ngưng tụ vật chất bay hơi không vượt quá bao nhiêu?**

- **A.** CVCM < 5.0%
- **B.** CVCM < 0.10%
- **C.** CVCM = 50%
- **D.** Không khống chế CVCM

> **Đáp án:** **B**  
> **Giải thích:** Chỉ số ngưng tụ hơi độc hại CVCM < 0.1% bảo vệ các thấu kính quang học và pin mặt trời không bị màng dầu ngưng tụ làm mờ đục.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 159
**Vật liệu hợp kim nhôm tiêu chuẩn hàng đầu để gia công khung cấu trúc CubeSat là gì?**

- **A.** Hợp kim nhôm hàng không chuẩn bảy không bảy lăm hoặc sáu không sáu một
- **B.** Hợp kim gang xám đúc dùng làm nắp cống thoát nước trên đường phố
- **C.** Kim loại chì nguyên chất có khả năng hấp thụ hoàn toàn tia bức xạ gamma
- **D.** Thép carbon xây dựng giá rẻ dễ bị ăn mòn rỉ sét trong môi trường ẩm

> **Đáp án:** **A**  
> **Giải thích:** Nhôm Al 7075-T6 và Al 6061-T6 có tỉ số độ bền trên trọng lượng rất cao, khả năng gia công CNC chính xác, tính dẫn nhiệt tuyệt vời và được chuẩn hóa trong tiêu chuẩn CubeSat Design Spec.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

### Câu 160
**Lớp mạ bề mặt Anodize cứng trên các thanh ray góc của CubeSat có tác dụng kỹ thuật gì?**

- **A.** Chống hiện tượng hàn lạnh và giảm ma sát trượt khi vệ tinh phóng khỏi ống POD
- **B.** Tăng khả năng dẫn điện trực tiếp giữa thân vỏ vệ tinh và vỏ ngoài tên lửa
- **C.** Làm biến đổi màu sắc thân vỏ để phục vụ nhận dạng quang học từ kính thiên văn
- **D.** Hấp thụ tối đa sóng radar của trạm mặt đất để ngụy trang vệ tinh trên quỹ đạo

> **Đáp án:** **A**  
> **Giải thích:** Hard Anodizing tạo lớp oxit nhôm gốm cực cứng cách điện, ngăn hiện tượng dính kết phân tử kim loại trong chân không (Cold Welding) và đảm bảo thanh ray trượt mượt mà ra khỏi POD.  
> **Mục tiêu củng cố:** Nắm vững đặc tính hợp kim nhôm, công nghệ mạ bề mặt và tiêu chuẩn thoát khí chân không  

---

## 💻 Thực hành: Quy Trình Lắp Ráp Khung Vệ Tinh CubeSat 1U & Kiểm Định Kỹ Thuật (54 câu)

### Câu 161
**Quy trình siết bu lông trên khung CubeSat bắt buộc phải sử dụng dụng cụ đo chuyên dụng nào?**

- **A.** Tua-vít điện tự động tốc độ cao trong xưởng
- **B.** Cờ-lê lực chuẩn kiểm soát chính xác mô-men siết
- **C.** Kìm bấm cơ khí thông thường dùng trong sửa xe
- **D.** Dùng tay vặn siết hết lực theo cảm nhận cơ học

> **Đáp án:** **B**  
> **Giải thích:** Siết quá lỏng làm bu lông tuột khi rung động; siết quá chặt làm trờn ren nhôm hoặc gây ứng suất dư nứt bo mạch.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 162
**Khoảng hở dung sai lắp ghép (Clearance Tolerance) giữa thanh ray CubeSat và thành trong ống phóng P-POD thường chỉ nằm trong khoảng:**

- **A.** 5.0 mm đến 10.0 mm
- **B.** 10 mm đến 15 mm
- **C.** 1.0 mm đến 1.5 mm
- **D.** 0.1 mm đến 0.3 mm

> **Đáp án:** **D**  
> **Giải thích:** Dung sai cơ khí chính xác bảo đảm vệ tinh không bị rung lắc va đập mạnh trong ống phóng nhưng không bị bó kẹt cơ học.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 163
**Để đo đạc kiểm tra kích thước hình học bao ngoài của vệ tinh CubeSat sau khi lắp ráp xong, dụng cụ đo chính xác là gì?**

- **A.** Thước kẻ học sinh bằng nhựa có vạch chia mm
- **B.** Ước lượng định tính bằng mắt thường của kỹ sư
- **C.** Đồ gá kiểm tra bao hình gia công chuẩn P-POD
- **D.** Thước dây vải mềm dùng trong ngành may mặc

> **Đáp án:** **C**  
> **Giải thích:** Đồ gá Go/No-Go mô phỏng chính xác lòng ống phóng; vệ tinh phải trượt qua đồ gá mượt mà dưới tác dụng của trọng lực mới đạt chuẩn bay.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 164
**Quy trình lắp ráp cơ khí vệ tinh CubeSat bắt buộc phải thực hiện trong môi trường phòng sạch (Cleanroom) cấp độ nào?**

- **A.** Thực hiện lắp ráp ngoài trời trong điều kiện tự nhiên
- **B.** Phòng sạch tiêu chuẩn ISO Class 7 hoặc Class 8
- **C.** Thực hiện trong phòng thí nghiệm học tập bình thường
- **D.** Thực hiện dưới hầm khai thác khoáng sản kín gió

> **Đáp án:** **B**  
> **Giải thích:** Phòng sạch kiểm soát chặt chẽ mật độ hạt bụi trong không khí, ngăn bụi bám vào cảm biến ảnh và các cơ cấu quang học.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 165
**Trang phục bắt buộc của kỹ sư khi thao tác lắp ráp cấu trúc CubeSat trong phòng sạch bao gồm:**

- **A.** Áo choàng chống tĩnh điện, găng nitrile và vòng ESD
- **B.** Găng tay len dệt kim và quần áo bảo hộ lao động vải
- **C.** Trang phục thường ngày bằng sợi cotton thông thường
- **D.** Áo mưa nilon tiện lợi dùng một lần chống bụi bẩn

> **Đáp án:** **A**  
> **Giải thích:** Trang phục phòng sạch ngăn chặn các hạt biểu bì da, bụi vải và tĩnh điện từ cơ thể người truyền vào vệ tinh.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 166
**Vòng đeo tay chống tĩnh điện (ESD Wrist Strap) được nối vào đâu trong suốt quá trình lắp ráp bo mạch vào khung?**

- **A.** Nối vào cọc tiếp địa an toàn qua trở bảo vệ 1 MOhm
- **B.** Kẹp trực tiếp vào vải quần áo bảo hộ của kỹ sư
- **C.** Nối vào cực dương của bộ pin nguồn trên vệ tinh
- **D.** Cắm trực tiếp vào lỗ tiếp địa ổ điện lưới 220V

> **Đáp án:** **A**  
> **Giải thích:** Vòng ESD xả liên tục điện tích tĩnh điện từ cơ thể xuống đất một cách từ từ và an toàn qua trở 1 MΩ, triệt tiêu xung phóng điện phá hỏng chip CMOS.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 167
**Dụng cụ siết ốc bằng tay (Tua-vít) dùng trong lắp ráp CubeSat bắt buộc phải có chứng chỉ nào?**

- **A.** Chứng chỉ chịu nhiệt độ khắc nghiệt lên tới 1000°C
- **B.** Chứng chỉ hiệu chuẩn lực siết và tay cầm chống ESD
- **C.** Chứng chỉ chống nước đạt tiêu chuẩn công nghiệp IP68
- **D.** Chứng chỉ phòng chống cháy nổ trong khu vực nguy hiểm

> **Đáp án:** **B**  
> **Giải thích:** Dụng cụ ESD-safe ngăn ngừa việc phóng tĩnh điện từ tay cầm kim loại vào các linh kiện trên bo mạch.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 168
**Mối nguy hiểm của hiện tượng kẹt ren (Galling / Thread Seizure) khi siết bu lông thép không gỉ vào ren nhôm là gì?**

- **A.** Bu lông ghép nối bị lỏng ra trong quá trình bay
- **B.** Bu lông bị đổi màu sắc bề mặt do phản ứng quang hóa
- **C.** Ren cào xước dính kết cục bộ làm bu lông kẹt chết
- **D.** Thân ren bu lông tự động kéo dài ra do ma sát

> **Đáp án:** **C**  
> **Giải thích:** Galling là hiện tượng dính kết nguội do ma sát trượt khô; bắt buộc phải kiểm soát tốc độ siết và dùng keo khóa ren làm chất đệm bôi trơn tạm thời.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 169
**Tốc độ vặn bu lông bằng dụng cụ cầm tay khi lắp ráp kết cấu không gian nên được thực hiện như thế nào?**

- **A.** Vặn từ từ đều tay tránh sinh nhiệt ma sát kẹt ren
- **B.** Vặn thật giật cục với gia tốc xoay góc cực lớn
- **C.** Vặn càng nhanh càng tốt bằng máy bắn bu lông điện
- **D.** Vừa siết bu lông vừa dùng búa gõ nhẹ vào đầu ốc

> **Đáp án:** **A**  
> **Giải thích:** Vặn chậm bằng tay giúp kỹ sư cảm nhận được độ êm của đường ren và ngăn ngừa tăng nhiệt do ma sát.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 170
**Đồ gá kiểm tra bao hình kích thước CalPoly (Go / No-Go Gauge) có dung sai gia công cơ khí yêu cầu chính xác tới mức nào?**

- **A.** ±3.0 mm đến ±5.0 mm
- **B.** ±0.5 mm đến ±1.0 mm
- **C.** ±0.02 mm đến ±0.05 mm
- **D.** ±10 mm đến ±15 mm

> **Đáp án:** **C**  
> **Giải thích:** Đồ gá Go/No-Go phải được đo kiểm bằng máy đo tọa độ quang học/tiếp xúc CMM bảo đảm độ chính xác tuyệt đối.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 171
**Đoạn mã C++ nào sau đây cấu hình và đọc trạng thái công tắc hành trình triển khai CubeSat (Deployment Switch) hoạt động theo kiểu công tắc đóng tiếp điểm xuống Mass khi còn ở trong ống phóng P-POD:**

- **A.** pinMode(deployPin, OUTPUT); bool deployed = (digitalRead(deployPin) == LOW);
- **B.** pinMode(deployPin, INPUT_PULLUP); bool deployed = (digitalRead(deployPin) == HIGH);
- **C.** pinMode(deployPin, INPUT_PULLDOWN); bool deployed = (analogRead(deployPin) > 512);
- **D.** pinMode(deployPin, INPUT); bool deployed = (touchRead(deployPin) == 0);

> **Đáp án:** **B**  
> **Giải thích:** Khi vệ tinh nằm trong ống phóng P-POD, công tắc bị đè nén nối tiếp điểm xuống mass (LOW). Khi phóng ra ngoài vũ trụ, công tắc nhả ra và điện trở kéo lên nội (INPUT_PULLUP) kéo chân tín hiệu lên mức HIGH, kích hoạt vệ tinh hoạt động.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 172
**Theo tiêu chuẩn vận hành an toàn CubeSat, sau khi phát hiện công tắc hành trình bật ON, đoạn mã C++ bắt buộc phải thực thi hành vi nào?**

- **A.** Tự động tắt nguồn hệ thống vi điều khiển vĩnh viễn
- **B.** Đếm im lặng 30 phút, không phát RF và không bung anten
- **C.** Kích hoạt phát sóng vô tuyến công suất tối đa ngay lập tức
- **D.** Định dạng lại toàn bộ hệ thống tệp trên thẻ nhớ SD

> **Đáp án:** **B**  
> **Giải thích:** Khoảng lặng 30 phút bảo vệ an toàn cho tên lửa mẹ và các vệ tinh khác cùng khoang hàng không bị gây nhiễu sóng hoặc vướng víu cơ học.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 173
**Đoạn mã C++ nào sau đây cài đặt chu trình đếm lùi khoảng lặng 30 phút (1800 giây) an toàn không phong bế hệ thống:**

- **A.** Dùng vòng lặp while với hàm delay(10) gây chặn toàn bộ hệ thống trong 30 phút
- **B.** Dùng vòng lặp for với độ trễ micro-giây lặp lại hàng triệu lần
- **C.** Đưa chip vào giấc ngủ sâu sleep(1) không thể duy trì đếm thời gian thực
- **D.** Dùng vòng lặp kiểm tra millis() đủ 30 phút (1800000 ms) và liên tục đá chó Watchdog

> **Đáp án:** **D**  
> **Giải thích:** Vòng lặp chờ 1800 giây kết hợp lệnh đá chó canh Watchdog định kỳ để vi điều khiển không bị reset trong thời gian giữ im lặng.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 174
**Đoạn mã C++ nào sau đây kiểm tra sự có mặt đồng thời của cả 3 phân hệ ngoại vi I2C (MAX17048: 0x36, MPU6500: 0x68, BMP280: 0x76):**

- **A.** Chỉ kiểm tra sự hiện diện của 2 thiết bị tại địa chỉ 0x36 và 0x68
- **B.** Gọi lệnh đọc bus ngẫu nhiên và kiểm tra tổng số thiết bị bằng 3
- **C.** Kiểm tra phản hồi đồng thời của cả 3 địa chỉ I2C: EPS (0x36), MPU (0x68) và BMP (0x76)
- **D.** Kiểm tra điều kiện OR giữa địa chỉ 0x00 và địa chỉ không xác định 0x77

> **Đáp án:** **C**  
> **Giải thích:** Hàm tự kiểm tra hệ thống (Health Check) thẩm định sự toàn vẹn của liên kết bus giữa các tầng bo mạch sau khi siết khung cơ khí.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 175
**Đoạn mã C++ nào sau đây cảnh báo dòng tĩnh bất thường ngay trong hàm `setup()`:**

- **A.** Đo dòng tiêu thụ; nếu dòng vượt ngưỡng an toàn MAX_I thì phát cảnh báo ngắn mạch
- **B.** Đo điện áp bus nguồn; nếu điện áp tụt dưới ngưỡng MIN_V thì cảnh báo ngắn mạch
- **C.** Đo dòng điện và dùng vòng lặp chờ vô hạn cho đến khi hết ngắn mạch
- **D.** Chỉ cảnh báo khi dòng tiêu thụ đo được bằng chính xác số không

> **Đáp án:** **B**  
> **Giải thích:** Bẫy lỗi dòng rò giúp kỹ sư ngắt nguồn khẩn cấp để kiểm tra cơ khí trước khi hiện tượng ngắn mạch làm cháy linh kiện.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 176
**Đoạn mã C++ nào sau đây tính toán độ chênh lệch nhiệt độ cực đại giữa các tầng trong vệ tinh:**

- **A.** Lấy nhiệt độ cao nhất trừ nhiệt độ thấp nhất trong 3 điểm đo rồi so sánh với ngưỡng 15°C
- **B.** Cộng tổng độ lệch nhiệt độ giữa các cặp điểm đo kế tiếp nhau
- **C.** Tính nhiệt độ trung bình cộng của cả 3 điểm đo trên thân vệ tinh
- **D.** Lấy giá trị lớn nhất của hai điểm đầu trừ giá trị nhỏ nhất của hai điểm sau

> **Đáp án:** **A**  
> **Giải thích:** Chênh lệch nhiệt quá lớn (> 15°C) cảnh báo nhiệt lượng từ bộ nguồn không truyền được sang khung vỏ tản nhiệt một cách thông suốt.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 177
**Khi thực hiện thử nghiệm thả rơi tự do hoặc rung lắc cơ khí trong phòng lab, đoạn mã C++ nào trên MPU6500 ghi nhận giá trị gia tốc đỉnh (Peak Shock Acceleration):**

- **A.** Đọc độ lớn gia tốc hiện tại và đặt lại giá trị đỉnh về số không
- **B.** Đọc độ lớn gia tốc tổng thể; nếu lớn hơn giá trị đỉnh cũ thì cập nhật peak_g
- **C.** Gán trực tiếp độ lớn gia tốc tức thời vào biến đỉnh mà không so sánh
- **D.** Chỉ cập nhật giá trị gia tốc đỉnh khi số đo tức thời mang giá trị âm

> **Đáp án:** **B**  
> **Giải thích:** Thuật toán bắt đỉnh xung (Peak Hold) lưu lại mức gia tốc quán tính lớn nhất mà khung cơ khí phải hứng chịu trong quá trình thử nghiệm va đập.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 178
**Đoạn mã C++ nào sau đây cài đặt bộ lọc chống rung cơ học (Software Debounce) cho công tắc hành trình tại chân ray:**

- **A.** Đọc chân công tắc một lần duy nhất mà không có cơ chế lọc rung
- **B.** Lấy mẫu 10 lần liên tiếp; nếu số lần đọc mức HIGH lớn hơn 7 thì xác nhận đã bung
- **C.** Tạo trễ 50 mili-giây rồi đọc trực tiếp giá trị chân công tắc duy nhất
- **D.** Đọc giá trị điện áp tương tự và so sánh với mức ngưỡng 2048

> **Đáp án:** **B**  
> **Giải thích:** Lấy mẫu 10 lần liên tiếp cách nhau 5ms; chỉ xác nhận bung khi có tối thiểu 8/10 lần đọc mức logic HIGH ổn định.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 179
**Trong phần mềm tự kiểm tra cơ khí, đoạn mã C++ nào ghi nhận trạng thái thông mạch mass khung và in báo cáo định dạng chuẩn:**

- **A.** In thông số tiếp xúc mass đạt chuẩn khi điện trở đo được nhỏ hơn 0.1 Ohm
- **B.** In thông số tiếp xúc mass đạt chuẩn khi điện trở đo được nhỏ hơn 1.0 Ohm
- **C.** In thông số tiếp xúc mass đạt chuẩn khi điện trở đo được nhỏ hơn 10 Ohm
- **D.** In thông số tiếp xúc mass đạt chuẩn khi điện trở đo được bằng chính xác 0 Ohm

> **Đáp án:** **A**  
> **Giải thích:** Xuất kết quả chẩn đoán trực quan giúp kỹ sư kiểm tra nghiệm thu (Acceptance Review) nhanh chóng trên màn hình.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 180
**Để giám sát liên tục nhiệt độ của pin Li-Po trong quá trình sạc thử nghiệm tích hợp khung, đoạn mã kiểm tra quá nhiệt là:**

- **A.** Ngắt sạc khi nhiệt độ pin dưới 0°C nhưng không giới hạn ngưỡng nhiệt độ cao
- **B.** Ngắt sạc khi nhiệt độ pin vượt 45°C nhưng không kiểm tra ngưỡng nhiệt độ thấp
- **C.** Kiểm tra nhiệt độ pin trong dải an toàn 0°C đến 45°C; ngoài dải lập tức ngắt sạc
- **D.** Cho phép sạc pin liên tục ở mọi dải nhiệt độ môi trường ngoài không gian

> **Đáp án:** **C**  
> **Giải thích:** Tự động ngắt dòng sạc khi nhiệt độ cell pin vượt 45°C bảo vệ khối pin khỏi nguy cơ thoát nhiệt trong không gian kín của khung.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 181
**Đoạn mã C++ nào sau đây lưu trữ dữ liệu rung động đỉnh từ MPU6500 vào tệp nhật ký `/vibe_log.csv` trên thẻ nhớ SD:**

- **A.** Mở tệp CSV và in trực tiếp chuỗi ký tự mà không ghi mốc thời gian
- **B.** Ghi đè tệp tin sau mỗi mẫu đo khiến dữ liệu cũ bị mất hoàn toàn
- **C.** Chỉ ghi duy nhất một giá trị gia tốc đỉnh đầu tiên rồi đóng tệp
- **D.** Mở tệp ở chế độ ghi tiếp (FILE_APPEND) và ghi định dạng mốc thời gian cùng 3 trục gia tốc

> **Đáp án:** **D**  
> **Giải thích:** Ghi nhật ký rung động theo thời gian thực phục vụ việc phân tích phổ dao động cơ học sau các bài thử nghiệm rung xóc.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 182
**Hàm C++ nào sau đây đo thời gian thực thi của một chu trình quét toàn bộ cảm biến trong khung máy:**

- **A.** Đo thời gian bằng hàm millis() và in kết quả ra màn hình bằng mili-giây
- **B.** Đo thời gian bằng hàm micros() trước và sau hàm kiểm tra để lấy độ chênh micro-giây
- **C.** Đếm số chu kỳ xung nhịp lệnh máy của bộ vi xử lý trung tâm
- **D.** Lấy mốc thời gian micros() sau khi trừ trước khi thực hiện để tính thời gian thực thi

> **Đáp án:** **D**  
> **Giải thích:** Đo lường thời gian thực thi cấp micro-giây giúp đánh giá hiệu năng CPU và kiểm tra tính tiền định của các tác vụ thu thập.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 183
**Đoạn mã C++ nào sau đây kiểm tra xem pin có bị sụt áp đột ngột khi bật đồng thời các phân hệ sau khi lắp khung hay không:**

- **A.** Đo điện áp pin trước khi bật tải và so sánh với giá trị định mức danh định
- **B.** Bật tải, đo điện áp pin rồi so sánh trực tiếp với điện áp nguồn 5V
- **C.** Đo điện áp trước khi bật tải, kích hoạt tải, đo lại; nếu độ sụt vượt ngưỡng thì cảnh báo pin yếu
- **D.** Đo dòng tiêu thụ của tải và chia cho điện trở nội của cell pin

> **Đáp án:** **C**  
> **Giải thích:** Đo kiểm độ sụt áp tức thời $\Delta V$ khi đóng tải công suất kiểm tra nội trở của khối nguồn và phát hiện nguy cơ chạm chập cơ khí.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 184
**Hàm C++ nào sau đây tạo chuỗi định dạng báo cáo kiểm tra khung cơ khí hoàn chỉnh:**

- **A.** Ghép nối các chuỗi văn bản bằng toán tử cộng chuỗi String của Arduino
- **B.** Sử dụng hàm snprintf() định dạng trạng thái khung sườn, trọng tâm và kết nối an toàn
- **C.** In từng dòng văn bản độc lập ra cổng Serial mà không lưu vào bộ đệm
- **D.** Sao chép trực tiếp mảng byte dữ liệu nhị phân vào cổng truyền thông

> **Đáp án:** **B**  
> **Giải thích:** Đóng gói kết quả kiểm tra thành chuỗi văn bản có cấu trúc phục vụ việc hiển thị trên giao diện giám sát hoặc truyền qua cổng Serial.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 185
**Đoạn mã C++ nào sau đây thực hiện việc đọc liên tục giá trị gia tốc để phát hiện khoảnh khắc vệ tinh được đẩy ra khỏi ống phóng P-POD (Ejection Detection):**

- **A.** Đọc độ lớn gia tốc liên tục; nếu vượt ngưỡng va đập cho phép thì ghi nhận sự kiện rung chấn
- **B.** Đọc gia tốc và so sánh với ngưỡng gia tốc tĩnh trọng trường 1g
- **C.** Chỉ đọc gia tốc trục Z và bỏ qua hai thành phần gia tốc trục X và Y
- **D.** Lấy tích phân gia tốc theo thời gian để tính vận tốc va chạm cơ khí

> **Đáp án:** **A**  
> **Giải thích:** Sự kết hợp giữa công tắc hành trình bật mở và gia tốc kế chuyển về trạng thái vi trọng lực ($a \approx 0\text{ g}$) là bằng chứng kép khẳng định vệ tinh đã bay vào quỹ đạo.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 186
**Đoạn mã C++ nào sau đây kiểm tra chu kỳ đếm nhịp hoạt động (Tick Heartbeat) của hệ thống cơ khí mỗi 1000 mili-giây:**

- **A.** Kiểm tra hiệu số millis() trôi qua lớn hơn hoặc bằng 1000 ms để thực thi chu kỳ 1 Hz
- **B.** Dùng vòng lặp while với hàm delay(1000) chặn hệ thống mỗi giây một lần
- **C.** Đếm số lượng ngắt ngoài xuất hiện trên chân tín hiệu xung nhịp
- **D.** Lấy hiệu số millis() hiện tại trừ mốc trước; đủ 1000 ms thì cập nhật mốc và kiểm tra

> **Đáp án:** **D**  
> **Giải thích:** Định thời phi phong bế thực thi định kỳ các bài kiểm tra chẩn đoán sức khỏe cơ học của vệ tinh theo thời gian thực.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 187
**Khi phát hiện nhiệt độ của một bo mạch vượt quá ngưỡng cho phép trong thử nghiệm nhiệt, hàm C++ nào kích hoạt biện pháp giảm tải khẩn cấp:**

- **A.** Tắt các tải tiêu thụ công suất cao của tải trọng để hạ nhiệt bảo vệ bo mạch
- **B.** Tăng xung nhịp vi điều khiển lên mức tối đa để xử lý thoát nhiệt nhanh
- **C.** Bật toàn bộ máy ảnh và bộ phát sóng LoRa ở mức công suất cao nhất
- **D.** Khởi động lại toàn bộ vi điều khiển liên tục trong vòng lặp kín

> **Đáp án:** **A**  
> **Giải thích:** Ngắt phụ tải công suất cao và hạ tần số xung nhịp CPU từ 240MHz xuống 80MHz là giải pháp phần mềm tức thời để hạ nhiệt bo mạch.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 188
**Hàm C++ nào sau đây tính toán năng lượng tiêu tán nhiệt ước tính (Joule) của toàn bộ vệ tinh trong một khoảng thời gian $\Delta t$:**

- **A.** Tính tích của điện áp, dòng điện và khoảng thời gian trôi qua: E = (V * I) * dt
- **B.** Lấy điện áp chia cho dòng điện rồi nhân với khoảng thời gian trôi qua
- **C.** Lấy dòng điện nhân với bình phương khoảng thời gian trôi qua: I * dt^2
- **D.** Lấy điện áp chia cho bình phương khoảng thời gian trôi qua: V / dt^2

> **Đáp án:** **A**  
> **Giải thích:** Định luật Joule: Năng lượng nhiệt tiêu tán bằng tích số công suất tiêu thụ $P = V \times I$ nhân với khoảng thời gian hoạt động tính bằng giây.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 189
**Đoạn mã C++ nào sau đây chuyển đổi trạng thái máy của vệ tinh sang chế độ 'SAU PHÓNG' (Post-deployment Mode) sau khi kết thúc khoảng lặng 30 phút:**

- **A.** Nếu đã qua 30 phút khoảng lặng và anten chưa bung thì chuyển sang trạng thái bung anten
- **B.** Nếu đã qua 30 phút khoảng lặng và anten đã bung thì lại kích hoạt bung anten tiếp
- **C.** Kích hoạt bung anten ngay lập tức khi vừa tách khỏi ống phóng tên lửa đẩy
- **D.** Chuyển thẳng sang chế độ phát Beacon công suất cao khi chưa mở anten

> **Đáp án:** **A**  
> **Giải thích:** Sau 30 phút im lặng, hệ thống kích hoạt lệnh bung anten vô tuyến và chuyển máy trạng thái sang chế độ vận hành danh định.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 190
**Hàm C++ nào sau đây xuất xung kích hoạt cơ cấu nhiệt đốt dây cước bung anten (Burn-wire Antenna Deployment):**

- **A.** Cấu hình chân đốt nhiệt làm OUTPUT nhưng không xuất mức điện áp điều khiển
- **B.** Xuất mức logic HIGH lên chân đốt nhiệt trong thời gian xung định trước rồi kéo về LOW
- **C.** Phát mức logic HIGH liên tục không ngắt khiến cầu chì nhiệt bị cháy đứt
- **D.** Phát xung nhịp điều chế độ rộng PWM ở chu kỳ làm việc cực thấp 1%

> **Đáp án:** **B**  
> **Giải thích:** Dòng điện chạy qua điện trở nhiệt trong 5 giây nung nóng làm đứt dây cước polymer (dây câu cá Dyneema), giải phóng ăng-ten thước cuộn bung ra ngoài.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 191
**Đoạn mã C++ nào sau đây kiểm tra xác nhận anten đã bung thành công qua tiếp điểm hành trình của anten:**

- **A.** Đọc mức logic chân công tắc một lần duy nhất mà không ghi nhật ký
- **B.** Kiểm tra chân công tắc bung anten; nếu đạt trạng thái bung thì ghi nhận thành công
- **C.** Luôn báo cáo anten đã bung thành công bất kể trạng thái tiếp điểm công tắc
- **D.** Dùng vòng lặp chờ vô hạn cho đến khi chân công tắc chuyển trạng thái

> **Đáp án:** **B**  
> **Giải thích:** Tiếp điểm cơ học xác nhận trạng thái mở của anten; nếu chưa bung sau 5 giây, hệ thống có thể lập trình kích hoạt đốt lại lần 2.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 192
**Đoạn mã C++ nào sau đây kiểm tra xem nhiệt độ của vi điều khiển OBC có vượt quá giới hạn an toàn 75°C hay không:**

- **A.** Kiểm tra nhiệt độ nội bộ chip nhỏ hơn 0°C và phát cảnh báo đóng băng
- **B.** Kiểm tra nhiệt độ nội bộ chip bằng chính xác 0°C để xác định lỗi cảm biến
- **C.** Bỏ qua việc theo dõi nhiệt độ vi điều khiển vì chip tự tản nhiệt hoàn toàn
- **D.** Đọc nhiệt độ nội chip qua temperatureRead(); nếu vượt ngưỡng an toàn thì cảnh báo quá nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Hàm temperatureRead() trên ESP32 đọc cảm biến nhiệt on-chip để bảo vệ lõi silicon không bị thoái hóa nhiệt.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 193
**Hàm C++ nào sau đây kiểm tra xem điện áp cell pin có nằm trong dải làm việc an toàn từ 3.3V đến 4.2V hay không:**

- **A.** Kiểm tra điện áp cell pin luôn lớn hơn 4.2V là đạt tiêu chuẩn an toàn
- **B.** Kiểm tra điện áp cell pin luôn nhỏ hơn 3.0V là đạt tiêu chuẩn an toàn
- **C.** Kiểm tra điện áp cell pin nằm trong dải hoạt động an toàn từ 3.0V đến 4.2V
- **D.** Kiểm tra điện áp cell pin bằng chính xác điện áp danh định 3.7V

> **Đáp án:** **C**  
> **Giải thích:** Kiểm tra điện áp trong cửa sổ ngưỡng an toàn ngăn ngừa cả sự cố xả sâu lẫn sự cố quá nạp.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 194
**Đoạn mã C++ nào sau đây cài đặt cơ chế thử lại kích hoạt dây nhiệt bung anten tối đa 3 lần nếu lần đầu thất bại:**

- **A.** Lặp kích hoạt đốt dây nhiệt 3 lần liên tiếp mà không kiểm tra công tắc bung
- **B.** Dùng vòng lặp trong khi anten chưa bung thì đốt liên tục không có thời gian hồi nhiệt
- **C.** Chỉ thử đốt dây nhiệt duy nhất một lần; nếu thất bại thì dừng toàn bộ sứ mệnh
- **D.** Thử lại tối đa 3 lần; mỗi lần kích hoạt nếu chưa bung thì nghỉ nguội rồi thử tiếp

> **Đáp án:** **D**  
> **Giải thích:** Vòng lặp giới hạn 3 lần thử lại bảo vệ mạch nguồn không bị cạn pin nếu dây nhiệt bị đứt hoặc chập cơ học.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 195
**Hàm C++ nào sau đây chuyển đổi giá trị gia tốc đo từ đơn vị 'g' sang đơn vị mét trên giây bình phương ($m/s^2$):**

- **A.** Giữ nguyên giá trị gia tốc đo được theo đơn vị g mà không quy đổi
- **B.** Nhân giá trị gia tốc đo theo đơn vị g với hệ số thang đo 100.0
- **C.** Nhân giá trị gia tốc đo theo g với gia tốc trọng trường tiêu chuẩn 9.80665 m/s²
- **D.** Chia giá trị gia tốc đo theo g cho gia tốc trọng trường tiêu chuẩn 9.80665

> **Đáp án:** **C**  
> **Giải thích:** Nhân với gia tốc trọng trường chuẩn $g_0 = 9.80665\text{ m/s}^2$ chuyển đổi chính xác sang hệ đơn vị SI.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 196
**Đoạn mã C++ nào sau đây tính toán độ dốc biến thiên nhiệt độ (Thermal Slew Rate tính bằng °C/phút) của khung sườn:**

- **A.** Lấy độ chênh nhiệt độ chia cho khoảng thời gian tính bằng micro-giây
- **B.** Lấy hiệu số nhiệt độ giữa hai mốc chia cho khoảng thời gian trôi qua tính bằng giây
- **C.** Nhân độ chênh nhiệt độ với bình phương khoảng thời gian trôi qua
- **D.** Lấy nhiệt độ hiện tại chia cho tổng thời gian hoạt động của hệ thống

> **Đáp án:** **B**  
> **Giải thích:** Theo dõi tốc độ thay đổi nhiệt độ $dT/dt$ phát hiện các cú sốc nhiệt đột ngột khi vệ tinh bay từ pha tối ra pha sáng.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 197
**Hàm C++ nào sau đây khởi tạo biến mảng chứa 6 giá trị cảm biến nhiệt độ phân bố trên 6 mặt vỏ vệ tinh:**

- **A.** Khai báo một mảng 6 ký tự kiểu char để lưu nhiệt độ các mặt vỏ
- **B.** Khai báo một biến số thực đơn lẻ float duy nhất cho toàn bộ 6 mặt
- **C.** Khai báo mảng 6 con trỏ void trỏ đến vùng nhớ cảm biến nhiệt độ
- **D.** Khai báo một mảng 6 phần tử kiểu số thực float panelTemps[6]

> **Đáp án:** **D**  
> **Giải thích:** Khởi tạo mảng số thực lưu nhiệt độ của 6 mặt (+X, -X, +Y, -Y, +Z, -Z) để đánh giá cân bằng nhiệt tổng thể.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 198
**Đoạn mã C++ nào sau đây tìm mặt vỏ có nhiệt độ cao nhất trong mảng 6 mặt:**

- **A.** Khởi tạo maxT bằng 0 rồi so sánh lần lượt với nhiệt độ các mặt vỏ
- **B.** Gán maxT bằng phần tử cuối cùng trong mảng rồi duyệt ngược về đầu
- **C.** Khởi tạo maxT bằng phần tử đầu tiên, duyệt qua các mặt; nếu mặt nào lớn hơn thì cập nhật
- **D.** Lấy tổng nhiệt độ của cả 6 mặt vỏ chia cho số lượng mặt

> **Đáp án:** **C**  
> **Giải thích:** Tìm giá trị nhiệt độ đỉnh giúp xác định mặt nào đang hướng thẳng về phía Mặt Trời (Sun-facing side).  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 199
**Đoạn mã C++ nào sau đây tìm mặt vỏ có nhiệt độ thấp nhất trong mảng 6 mặt:**

- **A.** Khởi tạo minT bằng phần tử đầu tiên, duyệt qua các mặt; nếu mặt nào nhỏ hơn thì cập nhật
- **B.** Khởi tạo minT bằng số 0 rồi so sánh với các giá trị đo tiếp theo
- **C.** Gán minT bằng giá trị nhiệt độ tuyệt đối âm 273°C cố định
- **D.** Lấy giá trị nhiệt độ của mặt vỏ đối diện trừ đi mặt vỏ hướng nắng

> **Đáp án:** **A**  
> **Giải thích:** Mặt có nhiệt độ thấp nhất là mặt đang hướng về khoảng không vũ trụ sâu (Deep-space facing side).  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 200
**Để kiểm tra xem thẻ nhớ SD có bị lỏng chân do rung lắc trong quá trình lắp ráp cơ khí hay không, hàm C++ là:**

- **A.** Mở tệp tạm trên thẻ nhớ và bỏ qua việc kiểm tra giá trị đối tượng trả về
- **B.** Định dạng lại thẻ nhớ sau mỗi đợt thử nghiệm rung sóc cơ học
- **C.** Đo điện trở tiếp xúc giữa các chân giao tiếp SPI của thẻ nhớ
- **D.** Mở một tệp thử nghiệm; nếu đối tượng tệp trả về không hợp lệ thì phát cảnh báo lỏng thẻ

> **Đáp án:** **D**  
> **Giải thích:** Thao tác ghi và xóa một tệp tạm nhỏ xác thực rằng cả bus SPI và nguồn cấp cho thẻ nhớ đều hoạt động thông suốt.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 201
**Đoạn mã C++ nào sau đây cảnh báo người vận hành nếu phát hiện dung lượng thẻ nhớ còn trống dưới 10 Megabyte:**

- **A.** Tính dung lượng còn trống (totalBytes - usedBytes); nếu dưới 10MB thì cảnh báo đầy bộ nhớ
- **B.** Kiểm tra dung lượng đã sử dụng usedBytes lớn hơn 0 thì cảnh báo thẻ nhớ đầy
- **C.** Kiểm tra tổng dung lượng totalBytes nhỏ hơn 1GB thì cảnh báo lỗi thẻ nhớ
- **D.** Chỉ cảnh báo khi dung lượng còn lại của thẻ nhớ bằng chính xác 0 byte

> **Đáp án:** **A**  
> **Giải thích:** Cảnh báo sớm giúp kỹ sư chủ động tải xuống hoặc dọn dẹp các tệp nhật ký cũ trước khi thẻ nhớ bị đầy hoàn toàn.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 202
**Hàm C++ nào sau đây tính toán giá trị trung bình của mảng 32 mẫu đo điện áp để triệt tiêu nhiễu trước khi đánh giá sụt áp:**

- **A.** Cộng dồn giá trị của 32 mẫu đo trong mảng rồi chia cho 32 để lấy trung bình
- **B.** Lấy mẫu đo đầu tiên cộng với mẫu đo cuối cùng rồi chia đôi
- **C.** Tìm giá trị lớn nhất và nhỏ nhất trong 32 mẫu rồi lấy trung bình
- **D.** Nhân 32 mẫu đo lại với nhau rồi lấy căn bậc 32 của tích số

> **Đáp án:** **A**  
> **Giải thích:** Lấy trung bình cộng 32 mẫu triệt tiêu tạp âm ngẫu nhiên, cho kết quả đo điện áp ổn định cao.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 203
**Hàm C++ nào sau đây đặt lại toàn bộ các cờ trạng thái kiểm tra cơ khí về giá trị mặc định ban đầu:**

- **A.** Đặt tất cả các cờ kiểm tra cơ khí lên mức 1 biểu thị hệ thống đang lỗi
- **B.** Xóa toàn bộ các biến cấu hình trong bộ nhớ Flash ROM của chip
- **C.** Ngắt nguồn toàn bộ các cảm biến cơ khí trên thân vệ tinh
- **D.** Đặt lại toàn bộ các cờ trạng thái kiểm tra cơ khí về 0 trước phiên kiểm thử mới

> **Đáp án:** **D**  
> **Giải thích:** Xóa sạch cờ trạng thái để chuẩn bị cho chu trình kiểm thử nghiệm thu mới.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 204
**Đoạn mã C++ nào sau đây ghi đè số đếm chu kỳ thử nghiệm cơ khí vào vùng nhớ bất biến RTC SRAM:**

- **A.** Khai báo biến đếm chu kỳ thử nghiệm là biến cục bộ khởi tạo lại bằng 0
- **B.** Khai báo biến đếm chu kỳ thử nghiệm dưới dạng hằng số const không đổi
- **C.** Ghi chỉ số chu kỳ thử nghiệm vào vùng nhớ EEPROM hoặc NVS để không mất khi reset
- **D.** In chu kỳ thử nghiệm ra cổng Serial mà không lưu trữ vào bộ nhớ

> **Đáp án:** **C**  
> **Giải thích:** Biến RTC lưu giữ số lần vệ tinh đã vượt qua các chu kỳ thử nghiệm cơ khí mà không bị mất dữ liệu khi tắt nguồn.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 205
**Để kiểm tra xem bu-lông có bị rung lỏng làm ngắt mạch liên kết mass hay không trong bài thử rung, đoạn mã polling liên tục là:**

- **A.** Đọc chân kiểm tra nối đất; nếu mức logic chuyển lên HIGH chứng tỏ bu-lông bị lỏng mass
- **B.** Đọc chân kiểm tra nối đất; nếu mức logic là LOW thì lập tức phát cảnh báo
- **C.** Đo điện dung giữa hai mặt kim loại của khung nhôm anot hóa
- **D.** Chụp ảnh bề mặt mối ghép bu-lông bằng camera để phân tích quang học

> **Đáp án:** **A**  
> **Giải thích:** Phát hiện mất tiếp xúc mass tức thì giúp xác định chính xác thời điểm bu-lông bị lỏng trong lúc rung.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 206
**Đoạn mã C++ nào sau đây cấu hình cổng Serial xuất dữ liệu ở tốc độ cao 115200 baud để xuất dữ liệu rung động không bị nghẽn:**

- **A.** Cấu hình tốc độ truyền 115200 baud bằng hàm không chuẩn setSpeed()
- **B.** Cấu hình tốc độ truyền 9600 baud và chờ cổng nối tiếp sẵn sàng
- **C.** Khởi tạo cổng nối tiếp nhưng không kiểm tra trạng thái sẵn sàng kết nối
- **D.** Gọi Serial.begin(115200) và dùng vòng lặp while(!Serial) chờ kết nối ổn định

> **Đáp án:** **D**  
> **Giải thích:** Baud rate 115200 bps bảo đảm đường truyền log rung động tần số cao không bị tràn bộ đệm UART.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 207
**Hàm C++ nào sau đây đóng gói thông điệp cảnh báo cơ khí thành gói tin telemetry gửi về trạm mặt đất:**

- **A.** Chỉ gửi một byte mã lỗi duy nhất qua giao thức truyền thông SPI
- **B.** Dùng hàm snprintf() đóng gói chuỗi cảnh báo chứa mã lỗi và thông số cảm biến tương ứng
- **C.** Ghi thông điệp cảnh báo trực tiếp vào thanh ghi điều khiển ngắt
- **D.** Lưu thông điệp cảnh báo vào biến số thực dấu phẩy động

> **Đáp án:** **B**  
> **Giải thích:** Định dạng thông điệp cảnh báo sự cố cơ khí rõ ràng kèm theo dấu thời gian xảy ra lỗi.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 208
**Hàm C++ nào sau đây đọc giá trị dòng điện tiêu thụ của mạch đốt dây cước từ cảm biến dòng:**

- **A.** Đo dòng đốt và cảnh báo nếu dòng điện đo được bằng đúng 0 mA
- **B.** Đo dòng đốt; nếu dòng nhỏ hơn ngưỡng tối thiểu MIN_BURN_I thì cảnh báo đứt dây nhiệt
- **C.** Chỉ đo điện áp cấp cho mạch đốt nhiệt mà không đo dòng điện
- **D.** Dùng cảm biến tiệm cận quang học để phát hiện đứt dây cước

> **Đáp án:** **B**  
> **Giải thích:** Kiểm tra dòng điện đốt: nếu dòng dưới 0.5A chứng tỏ dây điện trở bị đứt hoặc hở mạch tiếp điểm.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 209
**Hàm C++ nào sau đây cảnh báo nguy cơ ngắn mạch nếu dòng đốt vượt quá 3.0A:**

- **A.** Ngắt nguồn cung cấp điện của toàn bộ hệ thống CubeSat ngay lập tức
- **B.** Tăng thời gian cấp xung kích hoạt nhiệt lên gấp đôi để thông mạch
- **C.** Bỏ qua cảnh báo ngắn mạch và tiếp tục cấp nguồn cho dây nhiệt
- **D.** Nếu dòng đốt vượt quá ngưỡng tối đa 3.0A thì lập tức kéo chân điều khiển về LOW để ngắt mạch

> **Đáp án:** **D**  
> **Giải thích:** Bảo vệ ngắt dòng quá tải tức thì ngăn chặn nguy cơ cháy mạch hoặc sụt nguồn toàn bộ vệ tinh.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 210
**Đoạn mã C++ nào sau đây ghi lại trạng thái cuối cùng của phân hệ cơ khí trước khi vệ tinh vào chế độ ngủ Deep Sleep:**

- **A.** Khai báo trạng thái trong biến cục bộ tạm thời bị xóa sau mỗi hàm
- **B.** Lưu trạng thái cơ khí vào một hằng số không thể sửa đổi giá trị
- **C.** Chỉ in trạng thái ra màn hình máy tính mà không ghi vào bộ nhớ lưu trữ
- **D.** Ghi mã trạng thái cơ khí vào ô nhớ phi bốc hơi RTC RAM hoặc EEPROM

> **Đáp án:** **D**  
> **Giải thích:** Bảo toàn trạng thái cơ khí trong RTC RAM giúp hệ thống tiếp tục chu trình logic chính xác sau khi thức dậy.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 211
**Hàm C++ nào sau đây kiểm tra tính toàn vẹn của tệp cấu hình cơ khí `/mech_cfg.json` trên thẻ nhớ SD:**

- **A.** Chỉ kiểm tra tệp cấu hình có tồn tại trên thẻ nhớ hay không bằng SD.exists()
- **B.** Mở tệp cấu hình và đọc trực tiếp dữ liệu mà không kiểm tra kích thước
- **C.** Mở tệp cấu hình, kiểm tra tệp hợp lệ và kích thước lớn hơn 0 trước khi nạp dữ liệu
- **D.** Xóa tệp cấu hình cũ và tự động tạo mới tệp trắng mỗi khi khởi động

> **Đáp án:** **C**  
> **Giải thích:** Xác nhận tệp cấu hình không chỉ tồn tại mà còn có kích thước dữ liệu khác 0 trước khi nạp tham số.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 212
**Đoạn mã C++ nào sau đây thiết lập cờ xác nhận cấu trúc cơ khí đã hoàn tất nghiệm thu toàn diện:**

- **A.** Đặt cờ chứng nhận cơ khí về false và xóa sạch nhật ký kiểm tra
- **B.** Đặt cờ isStructureQualified = true và ghi mốc thời gian hoàn tất vào nhật ký
- **C.** Khởi động lại vi điều khiển để đặt lại toàn bộ hệ thống về ban đầu
- **D.** Gửi gói tin cấp cứu SOS về trạm mặt đất qua kênh LoRa

> **Đáp án:** **B**  
> **Giải thích:** Cờ hiệu kết luận nghiệm thu là điều kiện tiên quyết trong ma trận kiểm thử trước khi bàn giao vệ tinh.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 213
**Hàm C++ nào sau đây tính toán tỷ số giữa công suất tản nhiệt thực tế và diện tích bề mặt khung vỏ nhôm ($W/m^2$):**

- **A.** Lấy tổng công suất tản nhiệt chia đều cho 6 mặt vỏ của vệ tinh
- **B.** Nhân tổng công suất tản nhiệt với diện tích bề mặt vỏ nhôm
- **C.** Lấy tổng công suất nhiệt chia cho tổng diện tích bề mặt bức xạ: q = P / Area
- **D.** Lấy nhiệt độ vỏ bình phương chia cho công suất nhiệt tỏa ra

> **Đáp án:** **C**  
> **Giải thích:** CubeSat 1U có 6 mặt $0.1\text{m} \times 0.1\text{m}$, tổng diện tích $6 \times 0.01 = 0.06\text{ m}^2$; mật độ dòng nhiệt tính bằng tổng công suất chia cho 0.06.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

### Câu 214
**Đoạn mã C++ nào sau đây cảnh báo nếu mật độ dòng nhiệt tản trên khung vượt quá ngưỡng an toàn 100 W/m²:**

- **A.** Chỉ cảnh báo khi mật độ dòng nhiệt tản trên khung nhỏ hơn số 0
- **B.** Dùng vòng lặp chờ vô hạn cho đến khi mật độ dòng nhiệt hạ thấp
- **C.** Kiểm tra mật độ dòng nhiệt tản q; nếu vượt quá ngưỡng an toàn 100 W/m² thì cảnh báo quá nhiệt
- **D.** Bỏ qua cảnh báo vì nhôm anot hóa có khả năng dẫn nhiệt vô hạn

> **Đáp án:** **C**  
> **Giải thích:** Cảnh báo quá tải nhiệt bề mặt giúp kỹ sư điều chỉnh chu kỳ công tác (Duty Cycle) của các tải công suất.  
> **Mục tiêu củng cố:** Thực hành lắp ráp bộ khung cơ khí, siết bu lông theo quy chuẩn và đo đạc dung sai  

---

