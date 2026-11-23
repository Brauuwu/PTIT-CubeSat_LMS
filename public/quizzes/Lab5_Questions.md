# Ngân hàng Câu hỏi Trắc nghiệm - Lab 5

> **Tổng số câu hỏi:** 223 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 5.1: Lý Thuyết Truyền Thông Vô Tuyến Không Gian & Cân Bằng Tuyến Link Budget (118 câu)

### Câu 1
**Trong kiến trúc của một vệ tinh CubeSat, phân hệ Truyền thông (COM) đảm nhận vai trò cốt lõi nào?**

- **A.** Duy trì liên lạc vô tuyến hai chiều giữa vệ tinh và trạm
- **B.** Chuyển hóa quang năng Mặt Trời thành điện năng nguồn
- **C.** Kiểm soát nhiệt độ vệ tinh không bị đóng băng trên quỹ đạo
- **D.** Tạo lực đẩy cơ học để hiệu chỉnh và nâng cao quỹ đạo bay

> **Đáp án:** **A**  
> **Giải thích:** COM là đường dây liên lạc sống còn duy nhất cho phép gửi lệnh chỉ huy lên vệ tinh và truyền nhận dữ liệu khoa học về mặt đất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 2
**Khái niệm 'Đường lên' (Uplink) trong kỹ thuật thông tin vệ tinh được định nghĩa là gì?**

- **A.** Tuyến truyền sóng vô tuyến từ vệ tinh xuống mặt đất
- **B.** Tuyến sóng vô tuyến từ trạm mặt đất gửi lên vệ tinh
- **C.** Dòng điện cung cấp từ bộ pin thứ cấp lên các bo mạch
- **D.** Tuyến liên lạc vô tuyến giữa các vệ tinh bay cùng biên đội

> **Đáp án:** **B**  
> **Giải thích:** Uplink là kênh liên lạc truyền các bản tin viễn lệnh (Telecommand) và dữ liệu cấu hình từ mặt đất lên vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 3
**Cơ quan chuyên trách quốc tế chịu trách nhiệm điều phối và phân bổ tần số vô tuyến cho tất cả các vệ tinh không gian là tổ chức nào?**

- **A.** Ngân hàng Thế giới
- **B.** Tổ chức Y tế Thế giới
- **C.** Hiệp hội Hàng không Dân dụng
- **D.** Liên minh Viễn thông Quốc tế

> **Đáp án:** **D**  
> **Giải thích:** ITU quản lý phổ tần số vô tuyến toàn cầu nhằm tránh hiện tượng can nhiễu lẫn nhau giữa các vệ tinh và hệ thống mặt đất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 4
**Băng tần vô tuyến nghiệp dư UHF (Ultra High Frequency) thường được cấp phép cho các vệ tinh giáo dục CubeSat nằm trong dải tần số nào?**

- **A.** 430 MHz đến 440 MHz
- **B.** 144 MHz đến 148 MHz
- **C.** 10 GHz đến 12 GHz
- **D.** 2.4 GHz đến 2.5 GHz

> **Đáp án:** **A**  
> **Giải thích:** Dải tần UHF 435-438 MHz là băng tần không gian nghiệp dư phổ biến nhất cho các dự án vệ tinh đại học nhờ thiết bị nhỏ gọn.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 5
**Băng tần VHF (Very High Frequency) dành cho liên lạc vệ tinh nghiệp dư nằm trong khoảng tần số nào?**

- **A.** 1240 MHz đến 1300 MHz
- **B.** 430 MHz đến 440 MHz
- **C.** 144 MHz đến 146 MHz
- **D.** 26.9 MHz đến 27.4 MHz

> **Đáp án:** **C**  
> **Giải thích:** Băng VHF có bước sóng ~2 mét, thường được dùng cho kênh truyền viễn lệnh (Uplink) hoặc phát tín hiệu ngọn đuốc (Beacon).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 6
**Băng tần vô tuyến S-band (khoảng 2.0 GHz đến 2.4 GHz) thường được trang bị trên các CubeSat nhằm mục đích gì?**

- **A.** Truyền đường xuống tốc độ cao cho ảnh và dữ liệu tải trọng
- **B.** Cung cấp nguồn năng lượng điện thay thế các tấm pin
- **C.** Xác định tọa độ vị trí của vệ tinh khi đi vào vùng tối
- **D.** Đo nhiệt độ tiếp giáp của các phần tử chấn tử anten

> **Đáp án:** **A**  
> **Giải thích:** Tần số cao của băng S cho phép mở rộng băng thông truyền dẫn từ vài trăm kbps lên tới hàng chục Mbps.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 7
**Định luật truyền sóng tự do Friis (Friis Transmission Equation) xác định công suất tín hiệu thu được ($P_r$) dựa trên các yếu tố nào?**

- **A.** Công suất phát, độ lợi hai anten, bước sóng và khoảng cách
- **B.** Chỉ phụ thuộc vào độ cao tương đối của trạm thu mặt đất
- **C.** Tổng khối lượng vật lý của khung vỏ kết cấu vệ tinh
- **D.** Nhiệt độ nhiệt động học trung bình của tầng khí quyển

> **Đáp án:** **A**  
> **Giải thích:** Công thức Friis kinh điển: $P_r = P_t \times G_t \times G_r \times (\lambda / (4\pi d))^2$.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 8
**Suy hao đường truyền trong không gian tự do (Free-Space Path Loss - FSPL) là hiện tượng suy giảm công suất sóng do nguyên nhân vật lý nào?**

- **A.** Do sóng vô tuyến bị các hạt bụi trong vũ trụ hấp thụ
- **B.** Do năng lượng sóng bị cản trở bởi các tầng mây dày
- **C.** Do năng lượng sóng phát tán hình cầu khi khoảng cách tăng
- **D.** Do ma sát cơ học với các phân tử khí quyển loãng

> **Đáp án:** **C**  
> **Giải thích:** Sóng phát ra từ một nguồn đẳng hướng phân tán trên diện tích mặt cầu $4\pi d^2$; diện tích hứng sóng cố định sẽ nhận được mật độ năng lượng giảm theo nghịch đảo bình phương khoảng cách.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 9
**Công thức tính suy hao truyền sóng tự do FSPL (tính theo đơn vị decibel - dB) theo cự ly $d$ (km) và tần số $f$ (MHz) xấp xỉ là:**

- **A.** FSPL = d / f + 32.44
- **B.** FSPL = 20log10 - 20log10
- **C.** FSPL = 10log10
- **D.** FSPL ≈ 20log10 + 20log10 + 32.44

> **Đáp án:** **D**  
> **Giải thích:** Quy đổi chuẩn: $\text{FSPL} = 20\log_{10}(d_{\text{km}}) + 20\log_{10}(f_{\text{MHz}}) + 32.44\text{ dB}$.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 10
**Khái niệm 'Ngân sách đường truyền' (Link Budget) trong thiết kế thông tin không gian là gì?**

- **A.** Bảng tính toán cân bằng độ lợi và suy hao để đảm bảo SNR
- **B.** Số lượng các vệ tinh cùng hoạt động trên một mặt phẳng
- **C.** Dung lượng điện tiêu thụ của khối phát vô tuyến trên quỹ đạo
- **D.** Bảng thống kê kinh phí mua sắm linh kiện thu phát sóng

> **Đáp án:** **A**  
> **Giải thích:** Link Budget là công cụ cốt lõi chứng minh toán học rằng tín hiệu truyền từ quỹ đạo về mặt đất có đủ độ mạnh để giải mã thành công.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 11
**Hệ số dự phòng đường truyền (Link Margin) tối thiểu khuyến nghị trong thiết kế thông tin vệ tinh CubeSat là bao nhiêu?**

- **A.** -5 dB đến 0 dB
- **B.** 0.5 dB đến 1.5 dB
- **C.** 15 dB đến 25 dB
- **D.** 3 dB đến 6 dB

> **Đáp án:** **D**  
> **Giải thích:** Biên dự phòng 3-6 dB bù đắp cho sự suy hao phụ trợ không lường trước do trôi góc bám anten, phân cực lệch hoặc thời tiết mưa ẩm.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 12
**Đơn vị đo công suất vô tuyến 'dBm' biểu diễn mức công suất so với mốc chuẩn nào?**

- **A.** Mức công suất chuẩn 1 mili-Watt
- **B.** Mức công suất chuẩn 1 kilo-Watt
- **C.** Mức công suất chuẩn 1 micro-Watt
- **D.** Mức công suất chuẩn 1 Watt

> **Đáp án:** **A**  
> **Giải thích:** Công thức: $P(\text{dBm}) = 10 \times \log_{10}(P / 1\text{mW})$; ví dụ $100\text{ mW} = +20\text{ dBm}$, $1\text{ W} = +30\text{ dBm}$.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 13
**Mức công suất phát vô tuyến +20 dBm tương ứng với công suất thực tế tính bằng mili-Watt (mW) là bao nhiêu?**

- **A.** 1000 mW
- **B.** 500 mW
- **C.** 100 mW
- **D.** 20 mW

> **Đáp án:** **C**  
> **Giải thích:** $10^{(20/10)} = 10^2 = 100\text{ mW}$.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 14
**Tỷ số tín hiệu trên tạp âm (SNR - Signal-to-Noise Ratio) được định nghĩa là tỷ lệ giữa đại lượng nào?**

- **A.** Tỷ lệ công suất tín hiệu trên công suất tạp âm nền
- **B.** Tỷ lệ tần số sóng mang phát so với tần số thu nhận
- **C.** Tỷ lệ công suất pin nguồn so với công suất tải ngoài
- **D.** Tỷ lệ trọng lượng anten so với toàn bộ khối lượng vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Chỉ số SNR đo lường độ rõ ràng của tín hiệu; SNR càng cao thì xác suất thu sai bit (BER) càng giảm.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 15
**Nhiệt tạp âm nền (Thermal Noise Power) của một hệ thống thu được tính theo công thức nào?**

- **A.** N = P / R
- **B.** N = V × I
- **C.** N = m × c²
- **D.** N = k × T × B

> **Đáp án:** **D**  
> **Giải thích:** Công thức Nyquist: $N = k \times T \times B$, trong đó $k$ là hằng số Boltzmann, $T$ là nhiệt độ tạp âm tương đương (Kelvin) và $B$ là băng thông (Hz).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 16
**Hiện tượng dịch tần Doppler (Doppler Shift) xảy ra trong liên lạc với vệ tinh quỹ đạo thấp LEO do nguyên nhân vật lý nào?**

- **A.** Do nhiệt độ tiếp giáp của anten phát tăng cao liên tục
- **B.** Do áp suất khí quyển biến thiên theo độ cao quỹ đạo
- **C.** Do điện áp bộ pin sạc của vệ tinh bị sụt giảm dần
- **D.** Do vận tốc tương đối biến thiên giữa vệ tinh và trạm

> **Đáp án:** **D**  
> **Giải thích:** Tần số sóng vô tuyến bị nén dồn lại (tăng lên) khi vệ tinh bay đến gần trạm và bị dãn ra (giảm xuống) khi vệ tinh bay ra xa trạm.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 17
**Độ dịch tần Doppler cực đại ($\Delta f$) đối với một vệ tinh CubeSat bay ở quỹ đạo LEO phát sóng ở tần số UHF 435 MHz có thể lên tới khoảng:**

- **A.** Độ lệch tần số khoảng ±50 Hz đến ±100 Hz
- **B.** Độ lệch tần số khoảng ±9 kHz đến ±10 kHz
- **C.** Độ lệch tần số khoảng ±800 kHz đến ±1 MHz
- **D.** Độ lệch tần số khoảng ±80 MHz đến ±100 MHz

> **Đáp án:** **B**  
> **Giải thích:** Vận tốc tiếp tuyến $\approx 7.5\text{ km/s}$ cho độ lệch: $\Delta f = (v/c) \times f_0 = (7.5 \times 10^3 / 3 \times 10^8) \times 435 \times 10^6 \approx 10.8\text{ kHz}$.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 18
**Trong một phiên bay qua trạm (Satellite Pass), quy luật thay đổi tần số thu được do hiệu ứng Doppler diễn ra như thế nào?**

- **A.** Tần số thu nhận dao động ngẫu nhiên xung quanh tần số phát
- **B.** Tần số cao nhất khi vừa mọc, giảm dần và thấp nhất khi lặn
- **C.** Tần số thấp nhất khi vừa mọc và tăng dần đều tới khi lặn
- **D.** Tần số luôn cố định không đổi trong suốt toàn bộ phiên bay

> **Đáp án:** **B**  
> **Giải thích:** Đường cong Doppler có dạng chữ S dốc đứng nhất tại thời điểm vệ tinh đạt cự ly tiếp cận gần trạm nhất (TCA - Time of Closest Approach).  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 19
**Chế độ truyền thông 'Bán song công' (Half-Duplex) có đặc điểm vận hành nào sau đây?**

- **A.** Cho phép truyền nhận dữ liệu đồng thời theo cả hai chiều
- **B.** Hai chiều nhưng không đồng thời: phát xong mới chuyển thu
- **C.** Chỉ cho phép truyền dữ liệu một chiều từ trên xuống dưới
- **D.** Chỉ hỗ trợ truyền tín hiệu tương tự mà không truyền số

> **Đáp án:** **D**  
> **Giải thích:** Bán song công luân phiên chia sẻ thời gian giữa phát và thu (Time-Division Duplexing), đơn giản hóa kết cấu phần cứng.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 20
**Tại sao trên các vệ tinh CubeSat cỡ nhỏ 1U, chế độ Bán song công (Half-Duplex) lại được ưu tiên tuyệt đối so với Song công toàn phần?**

- **A.** Do luật pháp quốc tế nghiêm cấm sử dụng song công
- **B.** Tránh bộ phát làm điếc bộ thu và dùng chung 1 anten qua T/R
- **C.** Bán song công đạt tốc độ truyền dữ liệu nhanh hơn mười lần
- **D.** Không có vi mạch bán dẫn nào hỗ trợ tính năng truyền song công

> **Đáp án:** **B**  
> **Giải thích:** Song công toàn phần đòi hỏi bộ lọc ghép kênh Diplexer kích thước rất cồng kềnh và đắt đỏ để ngăn công suất phát vài Watt thổi cháy tầng đầu thu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 21
**Hiện tượng 'Tự làm điếc máy thu' (Receiver Desensitization / Desense) trên vệ tinh xảy ra khi nào?**

- **A.** Chỉ phát sóng khi vệ tinh bay qua các đại dương lớn
- **B.** Phát vô tuyến công suất cao liên tục không nghỉ 24/7
- **C.** Chỉ bật máy phát khi bay vào tầm phủ của trạm mặt đất
- **D.** Chỉ bật máy thu mà không bao giờ kích hoạt máy phát

> **Đáp án:** **C**  
> **Giải thích:** Máy thu thu tín hiệu nano-Watt từ mặt đất; nếu máy phát milli-Watt hoạt động cùng lúc trên cùng dải tần, máy thu sẽ bị tê liệt hoàn toàn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 22
**Khái niệm 'Khung truyền dữ liệu' (Packet Frame) trong giao thức thông tin vô tuyến được hiểu là gì?**

- **A.** Bản tin định kỳ phát tình trạng kỹ thuật của vệ tinh
- **B.** Lệnh điều khiển khẩn cấp truyền từ trung tâm mặt đất
- **C.** Tệp tin hình ảnh tải trọng quang học có dung lượng lớn
- **D.** Mã nguồn phần mềm hệ điều hành nhúng của máy tính OBC

> **Đáp án:** **B**  
> **Giải thích:** Đóng gói thành các khung dữ liệu rời rạc là nền tảng để bộ thu có thể đồng bộ nhịp bit, định vị đầu gói và kiểm tra lỗi.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 23
**Trường tín hiệu 'Preamble' (Tiền tố đồng bộ) đặt ở đầu mỗi khung truyền vô tuyến có chức năng kỹ thuật gì?**

- **A.** Định dạng toàn bộ hệ thống tệp tin trên phân vùng thẻ
- **B.** Giúp máy thu nhận diện, đồng bộ bit và tìm điểm đầu khung
- **C.** Tính toán mức tiêu thụ năng lượng của khối vô tuyến
- **D.** Kéo dài kích thước tệp dữ liệu để tăng độ tin cậy truyền

> **Đáp án:** **C**  
> **Giải thích:** Chuỗi Preamble cung cấp các bước nhảy trạng thái liên tục giúp tầng tách sóng máy thu căn chỉnh đúng pha lấy mẫu trước khi đọc dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 24
**Trường 'Tiêu đề' (Header) của một gói tin giao thức truyền thông thường chứa các thông tin nào sau đây?**

- **A.** Toàn bộ khối dữ liệu điểm ảnh của bức ảnh viễn thám
- **B.** Chữ ký số và thông tin chứng thực của kỹ sư điều hành
- **C.** Hình ảnh quang học của trạm thu phát tín hiệu mặt đất
- **D.** Địa chỉ nguồn, đích, loại gói, số thứ tự và độ dài tải

> **Đáp án:** **D**  
> **Giải thích:** Header cung cấp các thông số siêu dữ liệu (Metadata) giúp tầng mạng định tuyến và tầng ứng dụng xử lý đúng gói tin.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 25
**Tín hiệu phản hồi 'NACK' (Negative Acknowledgment Packet) được gửi đi trong tình huống nào?**

- **A.** Khi điều kiện thời tiết tại trạm thu mặt đất chuyển xấu
- **B.** Khi vệ tinh chuyển sang trạng thái ngủ đông tiết kiệm điện
- **C.** Khi sai CRC hoặc mất gói, yêu cầu bên phát gửi lại ngay
- **D.** Khi bên thu đã tiếp nhận thành công toàn bộ tệp dữ liệu

> **Đáp án:** **C**  
> **Giải thích:** Gói NACK kích hoạt chu trình phát lại sớm mà không cần phải chờ hết thời gian Timeout của bên phát.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 26
**Khái niệm 'Phân mảnh gói tin' (Packet Fragmentation) trong phân hệ COM được hiểu là gì?**

- **A.** Chia tệp lớn thành nhiều mảnh nhỏ vừa kích thước khung
- **B.** Xóa bỏ các đoạn dữ liệu không quan trọng của tệp tin
- **C.** Nén giảm dung lượng của các tệp ảnh chụp viễn thám
- **D.** Làm vỡ các linh kiện bán dẫn do va chạm cơ học

> **Đáp án:** **A**  
> **Giải thích:** Kênh vô tuyến không gian có xác suất lỗi bit (BER) nhất định; gói tin càng dài thì xác suất cả gói bị lỗi hỏng càng tăng vọt.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 27
**Tại sao trên kênh truyền vô tuyến không gian chập chờn, việc gửi nhiều gói tin nhỏ lại đạt hiệu quả tổng thể cao hơn gửi một gói tin khổng lồ?**

- **A.** Gói tin dung lượng nhỏ có tốc độ lan truyền nhanh hơn
- **B.** Truyền gói nhỏ tiêu tốn ít năng lượng nguồn hơn gói lớn
- **C.** Khi lỗi chỉ cần truyền lại gói nhỏ thay vì cả tệp lớn
- **D.** Trạm mặt đất chỉ hỗ trợ giải mã các khung dữ liệu nhỏ

> **Đáp án:** **C**  
> **Giải thích:** Tối ưu hóa kích thước gói (Packet Sizing) theo chất lượng kênh giúp tối đa hóa thông lượng dữ liệu hữu ích (Goodput).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 28
**Khung truyền vô tuyến nghiệp dư tiêu chuẩn 'AX.25' (dẫn xuất từ chuẩn HDLC) sử dụng cờ đánh dấu đầu/cuối (Flag) có giá trị byte cố định là:**

- **A.** 0x7E
- **B.** 0xFF
- **C.** 0x55
- **D.** 0x00

> **Đáp án:** **A**  
> **Giải thích:** Byte cờ 0x7E là dấu hiệu phân cách khung truyền kinh điển của họ giao thức HDLC và AX.25.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 29
**Kỹ thuật 'Chèn bit' (Bit Stuffing) trong chuẩn truyền khung AX.25 có nhiệm vụ gì?**

- **A.** Kéo dài kích thước khung truyền để tăng độ tin cậy liên lạc
- **B.** Chèn bit 0 sau 5 bit 1 liên tiếp để tránh tạo cờ 0x7E giả
- **C.** Mã hóa nội dung bản tin theo thuật toán mã hóa khóa công khai
- **D.** Nâng cao hệ số khuếch đại công suất bức xạ của anten phát

> **Đáp án:** **B**  
> **Giải thích:** Bit Stuffing bảo đảm tính duy nhất của cờ 0x7E trên đường truyền; bên nhận sẽ tự động gỡ bỏ bit 0 này.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 30
**Khung truyền AX.25 ở tầng liên kết dữ liệu bắt buộc phải chứa trường thông tin nhận diện nào của nhà khai thác vệ tinh?**

- **A.** Hô hiệu vô tuyến nghiệp dư của vệ tinh và của trạm mặt đất
- **B.** Số định danh căn cước công dân của các thành viên dự án
- **C.** Tọa độ vị trí địa lý cá nhân của người vận hành trạm thu
- **D.** Số tài khoản thanh toán quốc tế của đơn vị chế tạo vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Luật viễn thông quốc tế quy định mọi bức điện phát sóng nghiệp dư đều phải mang định danh hô hiệu (Callsign) rõ ràng.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 31
**Tốc độ truyền dữ liệu (Data Rate) của một kênh vô tuyến được đo bằng đơn vị chuẩn nào?**

- **A.** Hertz
- **B.** Volt
- **C.** Joule
- **D.** Bit trên giây

> **Đáp án:** **D**  
> **Giải thích:** Đơn vị bit/s biểu thị số lượng bit nhị phân được truyền thành công qua kênh liên lạc trong một giây.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 32
**Khái niệm 'Băng thông' (Bandwidth) của một kênh truyền vô tuyến được hiểu là gì?**

- **A.** Độ rộng vật lý đo được của chấn tử anten trên vệ tinh
- **B.** Khoảng cách truyền sóng thẳng từ anten tới trạm thu đất
- **C.** Độ rộng dải tần số mà tín hiệu chiếm trong phổ điện từ
- **D.** Vận tốc di chuyển của dòng điện bên trong dây cáp đồng

> **Đáp án:** **C**  
> **Giải thích:** Băng thông càng rộng thì khả năng truyền tải lượng thông tin trong một đơn vị thời gian càng lớn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 33
**Kỹ thuật điều chế tín hiệu vô tuyến (Modulation) có vai trò vật lý cốt lõi nào?**

- **A.** Tăng cường tổng khối lượng của hệ thống vệ tinh nhân tạo
- **B.** Hạ thấp mức điện áp làm việc của khối pin năng lượng
- **C.** Tạo hiện tượng phát quang trên bề mặt các chấn tử anten
- **D.** Biến đổi thông số sóng mang theo tín hiệu dữ liệu cần gửi

> **Đáp án:** **D**  
> **Giải thích:** Sóng mang tần số cao có khả năng bức xạ bức xạ điện từ và truyền xa qua không gian; điều chế nhúng dữ liệu vào sóng mang đó.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 34
**Phương pháp điều chế khóa dịch tần số (FSK - Frequency Shift Keying) mã hóa dữ liệu nhị phân 0 và 1 như thế nào?**

- **A.** Biến đổi màu sắc hiển thị của sóng điện từ lan truyền
- **B.** Thay đổi biên độ dao động của tín hiệu sóng mang cao tần
- **C.** Bật và tắt hoàn toàn công suất phát sóng mang vô tuyến
- **D.** Dùng hai tần số sóng mang đại diện cho mức logic 1 và 0

> **Đáp án:** **D**  
> **Giải thích:** FSK có biên độ sóng không đổi (Constant Envelope), cho phép bộ khuếch đại công suất hoạt động ở chế độ bão hòa đạt hiệu suất năng lượng cao.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 35
**Phương pháp điều chế GFSK (Gaussian Frequency Shift Keying) khác với FSK thông thường ở đặc tính nào?**

- **A.** GFSK chỉ được áp dụng trên các vệ tinh cỡ lớn và trạm
- **B.** GFSK không sử dụng sóng mang trong quá trình điều chế
- **C.** GFSK phát bức xạ điện từ ở mức công suất cao hơn FSK
- **D.** Dùng bộ lọc Gaussian làm mịn xung vuông thu hẹp phổ bức xạ

> **Đáp án:** **D**  
> **Giải thích:** Bộ lọc Gaussian triệt tiêu các búp sóng phụ tần số cao, giảm thiểu can nhiễu sang các kênh lân cận.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 36
**Phương pháp điều chế khóa dịch pha (BPSK - Binary Phase Shift Keying) mã hóa bit 0 và 1 bằng cách nào?**

- **A.** Thay đổi tần số sóng mang theo quy luật điều hòa liên tục
- **B.** Thay đổi chiều dài cơ học của các chấn tử anten phát sóng
- **C.** Đảo pha của sóng mang đi 180 độ giữa hai mức logic 0 và 1
- **D.** Đóng ngắt nguồn điện cung cấp cho khối phát công suất cao

> **Đáp án:** **C**  
> **Giải thích:** BPSK mang lại hiệu quả năng lượng cao nhất trong các chuẩn điều chế nhị phân, là chuẩn điều chế ưa chuộng trong thông tin không gian sâu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 37
**Khái niệm 'BER' (Bit Error Rate - Tỷ lệ lỗi bit) trong truyền thông vô tuyến là gì?**

- **A.** Độ rộng góc mở không gian của búp sóng bức xạ chính anten
- **B.** Tỷ số bit bị giải mã sai lệch so với tổng số bit đã truyền
- **C.** Tốc độ truyền dữ liệu hữu ích tính bằng kilobit trên giây
- **D.** Nhiệt độ tiếp giáp bán dẫn bên trong khối mạch thu cao tần

> **Đáp án:** **B**  
> **Giải thích:** BER đo lường chất lượng kênh truyền; ví dụ $\text{BER} = 10^{-5}$ nghĩa là trung bình cứ truyền 100.000 bit thì có 1 bit bị lỗi.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 38
**Để giảm thiểu tỷ lệ lỗi bit (BER) mà không cần tăng công suất phát sóng, giải pháp kỹ thuật là gì?**

- **A.** Dùng mã sửa lỗi FEC như Convolutional, Reed-Solomon, LDPC
- **B.** Tăng giá trị điện trở thuần của các đường dây dẫn tín hiệu
- **C.** Tắt toàn bộ hệ thống đèn chỉ thị trạng thái hoạt động bo
- **D.** Thu hẹp khoảng cách quỹ đạo giữa vệ tinh và trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Mã sửa lỗi FEC chèn thêm các bit dư thừa có quy luật toán học, cho phép máy thu tự phát hiện và sửa chữa các bit bị đảo mà không cần phát lại.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 39
**Khái niệm 'Gain mã hóa' (Coding Gain) của bộ mã sửa lỗi FEC là gì?**

- **A.** Hệ số gia tăng nhiệt độ của khối khuếch đại công suất PA
- **B.** Kinh phí tiết kiệm được khi lựa chọn chip bán dẫn thương mại
- **C.** Mức giảm công suất phát cần thiết để đạt cùng một mức BER
- **D.** Độ dài vật lý mở rộng thêm của chấn tử anten phát sóng

> **Đáp án:** **C**  
> **Giải thích:** Mã FEC hiện đại có thể mang lại Coding Gain từ 6 dB đến 9 dB, tương đương việc giảm công suất máy phát đi 4 đến 8 lần.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 40
**Khái niệm 'Interleaving' (Xáo trộn bit) trong truyền thông không gian có tác dụng kỹ thuật nào?**

- **A.** Tăng tốc độ xung nhịp dao động của vi điều khiển trung tâm
- **B.** Phân tán cụm lỗi bit liên tiếp thành các lỗi rời để FEC sửa
- **C.** Giảm kích thước tệp tin trước khi truyền qua kênh thông tin
- **D.** Xáo trộn thứ tự dữ liệu nhằm phục vụ mục đích mã hóa mật

> **Đáp án:** **B**  
> **Giải thích:** Mã FEC sửa rất tốt lỗi rải rác nhưng bất lực trước chuỗi lỗi dồn cục; Interleaving biến lỗi chùm thành các lỗi đơn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 41
**Tín hiệu ngọn đuốc (Beacon) của vệ tinh CubeSat là loại tín hiệu gì?**

- **A.** Tốc độ xử lý của thuật toán giải mã tín hiệu trên máy tính
- **B.** Mức công suất tín hiệu tối thiểu tại đầu vào để giải mã đúng
- **C.** Điện áp danh định cấp nguồn cho khối mạch tích hợp vô tuyến
- **D.** Nhiệt độ môi trường lạnh nhất mà máy thu có thể hoạt động

> **Đáp án:** **B**  
> **Giải thích:** Beacon là nhịp đập của vệ tinh; các trạm mặt đất nghiệp dư toàn cầu dựa vào Beacon để xác nhận vệ tinh đã đi vào hoạt động.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 42
**Định dạng mã Morse (CW - Continuous Wave) thường được một số CubeSat sử dụng để phát tín hiệu Beacon vì lý do gì?**

- **A.** Không đòi hỏi phải lập trình vi điều khiển để tạo xung nhịp
- **B.** Cho phép truyền tải các luồng dữ liệu hình ảnh độ nét cao
- **C.** Bắt buộc theo các công ước hàng hải quốc tế đã ban hành từ lâu
- **D.** Băng thông hẹp, SNR cực thấp, tai người dễ giải mã dưới tạp âm

> **Đáp án:** **D**  
> **Giải thích:** Tín hiệu CW ngắt mở sóng mang đơn giản có thể được thu nhận thành công bằng những máy thu vô tuyến thô sơ nhất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 43
**Mối nguy hiểm của việc phát sóng vô tuyến liên tục với chu kỳ công tác (Duty Cycle) 100% trên CubeSat 1U là gì?**

- **A.** Làm đảo ngược cực tính của từ trường xung quanh vỏ vệ tinh
- **B.** Gây phá hủy và làm thủng các tầng ô-dôn trong bầu khí quyển
- **C.** Khối PA sinh nhiệt lớn, chân không không đối lưu gây cháy chip
- **D.** Làm sai lệch tần số dao động chuẩn của khối thạch anh thu sóng

> **Đáp án:** **C**  
> **Giải thích:** Hiệu suất PA chỉ khoảng 30-50%, phần công suất còn lại biến thành nhiệt lượng nung nóng bo mạch nếu phát liên tục không nghỉ.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 44
**Khái niệm 'Slotted ALOHA' trong giao thức truy cập ngẫu nhiên đường truyền vô tuyến là gì?**

- **A.** Tỷ số giữa dung lượng bộ nhớ RAM và bộ nhớ Flash của máy
- **B.** Mức công suất phát vô tuyến cực đại tính theo đơn vị Watt
- **C.** Mức chênh lệch giữa công suất thu thực tế và độ nhạy máy thu
- **D.** Số lượng các vệ tinh cùng hoạt động trên một mặt phẳng quỹ

> **Đáp án:** **C**  
> **Giải thích:** Slotted ALOHA tăng gấp đôi hiệu suất thông lượng cực đại so với giao thức Pure ALOHA truyền tự do.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 45
**Hiện tượng 'Va chạm gói tin' (Packet Collision) trên kênh vô tuyến xảy ra khi nào?**

- **A.** Khi nguồn năng lượng tích lũy trong bộ pin bị cạn kiệt hoàn toàn
- **B.** Khi một trong các nhánh của chấn tử anten bị nứt gãy cơ học ngoài
- **C.** Khi hai hay nhiều máy phát cùng phát trên một tần số cùng một lúc
- **D.** Khi cấu trúc cơ học của vệ tinh va chạm vật lý với trạm mặt đất

> **Đáp án:** **C**  
> **Giải thích:** Xung đột năng lượng sóng tại ăng-ten thu làm biến dạng dạng sóng, dẫn tới kiểm tra sai mã CRC ở cả hai gói tin.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 46
**Giao thức CSMA (Carrier Sense Multiple Access - Lắng nghe sóng mang trước khi phát) giúp giảm va chạm như thế nào?**

- **A.** Tăng cường công suất phát sóng để đè bẹp các tín hiệu lân cận
- **B.** Cho phép máy phát liên tục bức xạ sóng cao tần không ngừng nghỉ
- **C.** Tự động đo nhiệt độ môi trường trước khi truyền phát gói tin
- **D.** Đo năng lượng kênh; chỉ phát khi kênh rảnh, bận thì lùi lại chờ

> **Đáp án:** **D**  
> **Giải thích:** Nguyên tắc 'Lắng nghe trước khi nói' (Listen-Before-Talk) là biện pháp hữu hiệu giảm thiểu đụng độ trên các kênh dùng chung.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 47
**Thuật toán 'Lùi ngẫu nhiên' (Random Exponential Back-off) trong giao thức CSMA có tác dụng gì khi phát hiện kênh bận?**

- **A.** Chờ một thời gian ngẫu nhiên trước khi phát lại, tránh cùng phát
- **B.** Tắt vĩnh viễn khối phát sóng của vệ tinh để tránh xung đột bus
- **C.** Tự động nâng tần số sóng mang của hệ thống lên gấp hai lần chuẩn
- **D.** Khởi động lại toàn bộ hệ điều hành nhúng của máy tính trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Thời gian lùi ngẫu nhiên phân tán thời điểm truyền của các trạm, giải tỏa hiện tượng xung đột dây chuyền.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 48
**Khái niệm 'Time-of-Flight' (ToF - Thời gian lan truyền) của sóng vô tuyến từ vệ tinh LEO ở cự ly 1000 km tới mặt đất là khoảng bao nhiêu?**

- **A.** 3.3 mili-giây
- **B.** 60 giây
- **C.** 0.001 micro-giây
- **D.** 1.0 giây

> **Đáp án:** **A**  
> **Giải thích:** Sóng điện từ lan truyền với tốc độ ánh sáng $c \approx 3 \times 10^8\text{ m/s}$; độ trễ 3.3ms là rất nhỏ đối với các giao thức thời gian thực.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 49
**Tại sao trên vệ tinh không gian, anten phát sóng thường được ưu tiên chọn loại có búp sóng rộng (Wide Beamwidth) hoặc gần như vô hướng?**

- **A.** Anten búp rộng giúp tối đa hóa độ lợi bức xạ ra không gian
- **B.** Quy chuẩn của Hiệp hội Viễn thông Quốc tế bắt buộc áp dụng
- **C.** Anten búp rộng có trọng lượng nhẹ hơn đáng kể các loại khác
- **D.** Đảm bảo trạm đất thu được tín hiệu bất kể hướng quay vệ tinh

> **Đáp án:** **D**  
> **Giải thích:** Anten định hướng búp hẹp có độ lợi cao nhưng nếu vệ tinh bị quay lộn lệch hướng búp sóng thì liên lạc sẽ bị cắt đứt hoàn toàn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 50
**Khái niệm 'Footprint' (Vùng phủ sóng mặt đất) của một vệ tinh viễn thông được hiểu là gì?**

- **A.** Vùng bề mặt Trái Đất nhìn thấy vệ tinh trên góc ngẩng tối thiểu
- **B.** Kích thước hình học thực tế của chân đế cố định cột anten
- **C.** Vết loang của nhiên liệu phản lực trên bề mặt đại dương
- **D.** Dấu vết in cơ học của các phi hành gia trên bề mặt trạm

> **Đáp án:** **A**  
> **Giải thích:** Footprint của một vệ tinh LEO độ cao 500 km là một hình tròn khổng lồ đường kính khoảng 4000 - 5000 km trên mặt đất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 51
**Hiện tượng nhấp nháy tầng điện ly (Ionospheric Scintillation) gây ra tác động nào đối với tín hiệu vô tuyến truyền từ CubeSat?**

- **A.** Làm gia tăng mức điện áp cung cấp của bộ pin năng lượng
- **B.** Làm tín hiệu thu dao động biên độ và pha, gây mờ sóng nhanh
- **C.** Làm biến đổi tần số dao động chuẩn của bộ tạo nhịp thạch anh
- **D.** Làm thay đổi màu sắc của lớp mạ bảo vệ bên ngoài anten

> **Đáp án:** **B**  
> **Giải thích:** Mật độ plasma không đồng nhất trong tầng điện ly làm tán xạ sóng vô tuyến, gây méo dạng sóng và rớt gói tin.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 52
**Thành phần 'Bộ khuếch đại công suất' (PA - Power Amplifier) trong khối phát vô tuyến có nhiệm vụ gì?**

- **A.** Hạ mức điện áp cung cấp từ bộ pin lưu trữ cho các khối tải
- **B.** Lọc bỏ hoàn toàn các thành phần sóng hài bậc cao của sóng
- **C.** Khuếch đại tín hiệu âm thanh thu được từ microphone tích hợp
- **D.** Nâng công suất cao tần lên mức đủ lớn trước khi đưa ra anten

> **Đáp án:** **D**  
> **Giải thích:** PA là tầng cuối cùng của máy phát, quyết định cường độ trường bức xạ phát vào không gian.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 53
**Thành phần 'Bộ khuếch đại tạp âm thấp' (LNA - Low Noise Amplifier) trong khối thu vô tuyến đóng vai trò cốt lõi nào?**

- **A.** Phát sóng điện từ công suất cao ra ngoài môi trường vũ trụ
- **B.** Khuếch đại tín hiệu cực yếu từ anten và chèn ít tạp âm nhất
- **C.** Chuyển đổi dòng điện xoay chiều thành dòng điện một chiều
- **D.** Tạo nguồn tạp âm trắng phục vụ việc kiểm thử mạch thu

> **Đáp án:** **B**  
> **Giải thích:** Hệ số tạp âm (Noise Figure) của tầng LNA đầu tiên quyết định độ nhạy của toàn bộ chuỗi thu nhận tín hiệu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 54
**Khóa chuyển mạch Anten thu/phát (T/R Switch - Transmit/Receive Switch) trong hệ thống bán song công có chức năng gì?**

- **A.** Tự động đảo cực tính của bộ pin nguồn khi dòng điện đổi chiều
- **B.** Nối anten với bộ phát khi phát và với bộ thu khi nhận sóng
- **C.** Điều chỉnh góc quay cơ học của búp sóng anten trạm mặt đất
- **D.** Ngắt toàn bộ hệ thống nguồn điện của vệ tinh khi có sự cố

> **Đáp án:** **B**  
> **Giải thích:** T/R switch (thường dùng diode PIN cao tần) cách ly an toàn bộ thu khỏi công suất lớn của bộ phát khi phát.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 55
**Ăng-ten dải thép thước cuộn bung tự do (Deployable Tape-measure Spring Antenna) thường được các nhóm chế tạo CubeSat ưa chuộng vì ưu điểm nào?**

- **A.** Không đòi hỏi bất kỳ mối hàn nối cơ điện nào trong lắp ráp
- **B.** Chế tạo bằng vật liệu sợi quang học có độ đàn hồi rất cao
- **C.** Cuộn gọn trong thể tích 1U khi phóng, tự bung thẳng khi mở
- **D.** Có khả năng thu nhận đồng thời mọi tần số sóng vô tuyến

> **Đáp án:** **C**  
> **Giải thích:** Vật liệu thép hợp kim đàn hồi mang lại cơ cấu bung thụ động cực kỳ tin cậy và chi phí chế tạo thấp.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 56
**Hiện tượng sóng điện từ phân cực tròn (Circular Polarization: RHCP / LHCP) có đặc điểm quay của véc-tơ điện trường $\vec{E}$ như thế nào?**

- **A.** Véc-tơ điện trường chỉ dao động tịnh tiến trên một đường cố định
- **B.** Đầu mút véc-tơ điện trường quay tròn trong mặt phẳng vuông góc
- **C.** Thành phần điện trường bị triệt tiêu hoàn toàn khi truyền sóng
- **D.** Thành phần điện trường tự động chuyển hóa thành từ trường xoáy

> **Đáp án:** **B**  
> **Giải thích:** Sóng phân cực tròn xoay theo chiều kim đồng hồ (RHCP - Right Hand) hoặc ngược chiều kim đồng hồ (LHCP - Left Hand).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 57
**Hiện tượng suy hao không khớp phân cực (Polarization Mismatch Loss) giữa hai anten phân cực thẳng trực giao nhau (ví dụ một anten đứng, một anten ngang) trên lý thuyết là bao nhiêu?**

- **A.** Mức suy giảm công suất danh định trên đường truyền chỉ là 3 dB
- **B.** Không xảy ra bất kỳ sự suy hao công suất nào giữa hai anten
- **C.** Mức suy giảm công suất bức xạ trên đường truyền đạt chuẩn 1 dB
- **D.** Về mặt lý thuyết là triệt tiêu hoàn toàn công suất thu nhận

> **Đáp án:** **D**  
> **Giải thích:** Phân cực vuông góc triệt tiêu cảm ứng dòng điện trên thanh anten thu, gây mất liên lạc nghiêm trọng nếu vệ tinh quay lệch góc.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 58
**Hiệu ứng xoay Faraday (Faraday Rotation) trong tầng điện ly Trái Đất tác động như thế nào đến sóng vô tuyến truyền qua?**

- **A.** Từ trường và plasma tầng điện ly làm xoay mặt phẳng phân cực
- **B.** Làm sóng vô tuyến bị biến đổi thành chùm ánh sáng nhìn thấy
- **C.** Làm tần số của sóng mang tăng lên một bậc trong dải phổ sóng
- **D.** Làm chậm vận tốc lan truyền của ánh sáng xuống giá trị bằng 0

> **Đáp án:** **A**  
> **Giải thích:** Góc quay Faraday biến thiên theo hoạt động Mặt Trời, làm cho sóng phân cực thẳng từ vệ tinh bị lệch góc khi chạm mặt đất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 59
**Chỉ số RSSI (Received Signal Strength Indicator) đo lường đại lượng nào của tín hiệu vô tuyến?**

- **A.** Tần số dao động thực tế của sóng mang vô tuyến thu được
- **B.** Mức công suất tín hiệu thu nhận được tại cổng ngõ vào anten
- **C.** Độ ẩm tương đối của môi trường không khí xung quanh trạm thu
- **D.** Vận tốc di chuyển của luồng gió tác động lên chấn tử anten

> **Đáp án:** **B**  
> **Giải thích:** RSSI giúp đánh giá độ mạnh yếu của đường truyền và hướng bám của hệ thống anten mặt đất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 60
**Mối quan hệ giữa tốc độ truyền vô tuyến (Air Data Rate) và độ nhạy thu (Receiver Sensitivity) của máy thu là gì?**

- **A.** 50 W đến 100 W (+47 dBm đến +50 dBm)
- **B.** 0.5 mW đến 1.0 mW (-3 dBm đến 0 dBm)
- **C.** 5 mW đến 10 mW (+7 dBm đến +10 dBm)
- **D.** 100 mW đến 1000 mW (+20 dBm đến +30 dBm)

> **Đáp án:** **D**  
> **Giải thích:** Giảm tốc độ bit cho phép bộ thu tích lũy năng lượng trên mỗi bit ($E_b$) lớn hơn, mở rộng cự ly liên lạc đáng kể.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 61
**Khi truyền dữ liệu ở Air Data Rate 2.4 kbps, thời gian truyền một gói tin 128 byte qua sóng vô tuyến (Time-on-Air) xấp xỉ là:**

- **A.** Nâng cao tốc độ quay quanh trục quán tính của cấu trúc vệ tinh
- **B.** Bảo đảm module không bị sụt áp làm reset khi phát công suất lớn
- **C.** Tăng cường độ nhạy thu của các linh kiện vi cơ bán dẫn bên trong
- **D.** Hạn chế sự xâm nhập của bức xạ ion hóa từ môi trường không gian

> **Đáp án:** **A**  
> **Giải thích:** Thời gian truyền: $T \approx (128 \times 8) / 2400 \approx 0.426\text{ s} = 426\text{ ms}$ (chưa tính thời gian Preamble).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 62
**Hiện tượng 'Time-on-Air' kéo dài có nhược điểm gì đối với vận hành của vệ tinh?**

- **A.** Kéo chân M0 và M1 lên mức logic HIGH trước khi gửi bản tin cấu hình
- **B.** Kéo đồng thời cả hai chân M0 và M1 xuống mức logic LOW danh định
- **C.** Đặt chân M0 ở mức HIGH và chân điều khiển M1 ở mức logic LOW
- **D.** Ngắt kết nối hoàn toàn hai chân M0 và M1 khỏi mạch vi điều khiển

> **Đáp án:** **D**  
> **Giải thích:** Thời gian chiếm sóng càng dài thì xác suất bị nhiễu xung phá hỏng gói tin càng cao và khối PA tiêu tốn nhiều pin hơn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 63
**Tải giả vô tuyến (Dummy Load) chuẩn 50 Ohm có tác dụng kỹ thuật nào trong phòng thí nghiệm?**

- **A.** Nâng cao mức điện áp cung cấp cho các module điện tử trên bo mạch
- **B.** Phát sóng vô tuyến đi xa hàng nghìn mét trong môi trường tự do
- **C.** Lọc sạch tạp âm tần số âm thanh từ khối thu trước khi ra loa ngoài
- **D.** Hấp thụ năng lượng cao tần thành nhiệt, thử nghiệm không bức xạ

> **Đáp án:** **D**  
> **Giải thích:** Dummy Load bảo vệ máy phát không bị cháy do sóng phản xạ và ngăn chặn việc bức xạ tín hiệu trái phép ra môi trường xung quanh.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 64
**Hệ số sóng đứng điện áp (VSWR - Voltage Standing Wave Ratio) của một anten phản ánh điều gì?**

- **A.** Tạo hiện tượng đoản mạch trên đường cấp nguồn của khối vô tuyến
- **B.** Tăng cường gấp đôi độ nhạy thu của mạch tiền khuếch đại LNA
- **C.** Năng lượng phản xạ lớn dội ngược làm nóng cháy tầng công suất PA
- **D.** Làm thay đổi tần số dao động chuẩn của bộ tạo nhịp thạch anh

> **Đáp án:** **A**  
> **Giải thích:** Chỉ số $\text{VSWR} \le 1.5$ biểu thị anten phối hợp trở kháng tốt; nếu VSWR > 2.0 hoặc 3.0, phần lớn công suất phát bị dội ngược lại máy phát.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 65
**Dây cáp đồng trục cao tần (Coaxial Cable như RG-316 hoặc RG-58) nối từ bo mạch COM ra anten có trở kháng đặc tính chuẩn là bao nhiêu?**

- **A.** 600 Ohm
- **B.** 8 Ohm
- **C.** 75 Ohm
- **D.** 50 Ohm

> **Đáp án:** **D**  
> **Giải thích:** Chuẩn trở kháng vô tuyến của ngành viễn thông quân sự và không gian luôn là 50 Ohm (chuẩn truyền hình cáp dân dụng là 75 Ohm).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 66
**Đầu nối đồng trục cao tần loại 'SMA' (SubMiniature version A) thường dùng trên CubeSat có đặc tính kỹ thuật nào?**

- **A.** Đầu nối có kết cấu gồm 4 chân cắm chuyển mạch tiếp điểm mạ vàng
- **B.** Chỉ hỗ trợ truyền tải dòng điện một chiều công suất nhỏ nội bộ
- **C.** Đầu nối ren chắc, trở kháng 50 Ohm, hoạt động ổn định tới 18 GHz
- **D.** Đầu nối dạng ngàm kẹp bằng vật liệu nhựa polyme cách điện cao áp

> **Đáp án:** **C**  
> **Giải thích:** Khớp nối ren vặn cơ học của chuẩn SMA bảo đảm tiếp xúc điện tuyệt đối an toàn dưới các rung động khắc nghiệt khi phóng tên lửa.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 67
**Đầu nối 'RP-SMA' (Reverse Polarity SMA) khác với chuẩn SMA thông thường ở điểm nào?**

- **A.** Không hỗ trợ khả năng truyền dẫn tín hiệu cao tần trong mạch
- **B.** Toàn bộ thân vỏ được gia công từ hợp kim nhôm thay vì đồng thau
- **C.** Cấu trúc chân kim và lỗ cắm ở lõi trung tâm bị đảo ngược cho nhau
- **D.** Kích thước đường kính ren vặn theo chiều ngược kim đồng hồ chuẩn

> **Đáp án:** **C**  
> **Giải thích:** RP-SMA ban đầu được thiết kế cho thiết bị WiFi dân dụng; cần lưu ý để tránh cắm nhầm làm gãy chân hoặc hở mạch tín hiệu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 68
**Bộ lọc thông thấp (LPF - Low Pass Filter) đặt sau tầng khuếch đại công suất PA của máy phát có nhiệm vụ gì?**

- **A.** Triệt tiêu sóng hài bậc cao do PA phi tuyến, tránh nhiễu dải khác
- **B.** Lọc sạch bụi bẩn và hơi nước bám trên bề mặt các chấn tử anten
- **C.** Tăng cường mức điện áp cung cấp cho khối khuếch đại công suất
- **D.** Làm mát bề mặt vỏ kim loại của các linh kiện bán dẫn công suất

> **Đáp án:** **A**  
> **Giải thích:** Bộ lọc LPF bảo đảm phổ phát xạ đáp ứng các tiêu chuẩn quy định nghiêm ngặt của ITU về mức phát xạ giả (Spurious Emissions).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 69
**Ăng-ten đơn cực một phần tư bước sóng (Quarter-wave Monopole: $L \approx \lambda/4$) yêu cầu điều kiện phần cứng nào để hoạt động tối ưu?**

- **A.** Hoạt động tối ưu mà không đòi hỏi bất kỳ mặt phẳng mass nào kèm
- **B.** Cần mặt phẳng dẫn điện đối xứng từ khung vỏ để tạo ảnh điện từ
- **C.** Bắt buộc phải nhúng các đầu cực kim loại của anten vào dung dịch
- **D.** Bắt buộc phải đấu nối trực tiếp lên đường nguồn điện xoay chiều

> **Đáp án:** **B**  
> **Giải thích:** Khung kim loại vệ tinh đóng vai trò mặt phẳng đất phản xạ, biến anten đơn cực thành hệ thống bức xạ tương đương anten lưỡng cực.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 70
**Ăng-ten lưỡng cực nửa bước sóng (Half-wave Dipole: $L \approx \lambda/2$) có trở kháng ngõ vào bức xạ chuẩn xấp xỉ bằng:**

- **A.** 10 Ohm
- **B.** 50 Ohm
- **C.** 300 Ohm
- **D.** 73 Ohm

> **Đáp án:** **D**  
> **Giải thích:** Trở kháng danh định của dipole nửa bước sóng là $\approx 73\ \Omega$, thường được phối hợp trở kháng về chuẩn 50 Ohm.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 71
**Hệ số phản xạ ($S_{11}$ Parameter / Return Loss) của một anten phản ánh điều gì?**

- **A.** Tổng khối lượng cơ học của toàn bộ kết cấu cơ khí anten ngoài
- **B.** Vận tốc di chuyển của luồng gió tác động lên bề mặt chấn tử anten
- **C.** Tỷ lệ công suất phản xạ dội về so với công suất đưa vào anten
- **D.** Màu sắc của lớp phủ chống ăn mòn hóa học bên ngoài vỏ chấn tử

> **Đáp án:** **C**  
> **Giải thích:** Chỉ số $S_{11} \le -10\text{ dB}$ biểu thị hơn 90% công suất đưa vào được anten bức xạ ra không gian, chỉ dưới 10% bị phản xạ.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 72
**Băng thông làm việc của anten (Antenna Bandwidth) thường được định nghĩa là dải tần số thỏa mãn điều kiện nào?**

- **A.** Dải tần số chỉ hỗ trợ truyền tải các tín hiệu âm thanh tương tự
- **B.** Dải tần số hoạt động liên tục kéo dài từ 0 Hz đến vô hạn định
- **C.** Dải tần bức xạ ra các chùm ánh sáng trong vùng quang phổ mắt thấy
- **D.** Dải tần số thỏa mãn S11 <= -10 dB tương ứng VSWR <= 1.92

> **Đáp án:** **D**  
> **Giải thích:** Băng thông anten là dải tần mà hệ thống duy trì được sự phối hợp trở kháng tốt với máy phát.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 73
**Hiệu suất bức xạ của anten (Radiation Efficiency) được định nghĩa là tỷ số giữa:**

- **A.** Tỷ số công suất bức xạ ra sóng so với công suất cao tần đưa vào
- **B.** Tỷ số giữa cường độ dòng điện tiêu thụ và điện áp hoạt động cấp
- **C.** Tỷ số giữa chiều dài hình học và chiều rộng bề ngang của anten
- **D.** Tỷ số giữa nhiệt độ tiếp giáp bán dẫn và áp suất môi trường khí

> **Đáp án:** **A**  
> **Giải thích:** Tổn hao nhiệt trên điện trở thuần của dây kim loại làm giảm hiệu suất bức xạ của anten.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 74
**Mối quan hệ giữa độ lợi anten ($G$) và tính định hướng ($D$) tuân theo công thức nào?**

- **A.** G = D / η
- **B.** G = D² × η
- **C.** G = D + η
- **D.** G = η × D

> **Đáp án:** **D**  
> **Giải thích:** Độ lợi anten tính bằng tích số giữa hệ số định hướng hình học và hiệu suất bức xạ thực tế.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 75
**Đơn vị đo độ lợi anten 'dBi' biểu thị độ lợi so với loại anten chuẩn nào?**

- **A.** Hệ số độ lợi so sánh trực tiếp với một sợi dây kim loại đơn cực
- **B.** Độ lợi tính toán theo mô hình của anten định hướng chuẩn Yagi
- **C.** Độ lợi tương đối so với anten thu sóng truyền hình thương mại
- **D.** Độ lợi so với anten bức xạ đẳng hướng lý thuyết theo mọi hướng

> **Đáp án:** **D**  
> **Giải thích:** Anten đẳng hướng lý thuyết có độ lợi chuẩn là $0\text{ dBi}$.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 76
**Độ lợi bức xạ cực đại của một anten lưỡng cực nửa bước sóng (Half-wave Dipole) so với nguồn đẳng hướng là bao nhiêu?**

- **A.** +10 dBi
- **B.** +2.15 dBi
- **C.** 0 dBi
- **D.** +50 dBi

> **Đáp án:** **B**  
> **Giải thích:** Do tập trung năng lượng vào mặt phẳng vuông góc với thân dây, dipole nửa bước sóng có độ lợi định hướng $+2.15\text{ dBi}$.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 77
**Trong cấu trúc của anten định hướng Yagi-Uda, chấn tử tích cực (Driven Element) có chức năng gì?**

- **A.** Đóng vai trò làm khung xương chịu tải cơ học cho toàn bộ anten
- **B.** Chấn tử duy nhất nối cáp dẫn sóng cao tần để phát hoặc thu sóng
- **C.** Nối trực tiếp xuống cọc tiếp địa bảo vệ trạm khỏi sét đánh lan
- **D.** Chỉ đóng vai trò phản xạ các chùm sóng điện từ phân kỳ phía sau

> **Đáp án:** **B**  
> **Giải thích:** Chấn tử tích cực chuyển đổi năng lượng giữa đường cáp đồng trục và không gian điện từ.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 78
**Chấn tử phản xạ (Reflector) trong anten Yagi được bố trí ở vị trí nào và có chiều dài như thế nào so với chấn tử tích cực?**

- **A.** Nằm sau chấn tử tích cực và có kích thước dài hơn 5%
- **B.** Có kích thước chiều dài hình học thu gọn hoàn toàn bằng không
- **C.** Bố trí ở phía trước chấn tử tích cực và có chiều dài ngắn hơn
- **D.** Lắp đặt vuông góc một góc 90 độ so với mặt phẳng các chấn tử

> **Đáp án:** **A**  
> **Giải thích:** Chấn tử phản xạ dài hơn đóng vai trò như một tấm gương phản chiếu, đẩy búp sóng chính vươn về phía trước.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 79
**Các chấn tử dẫn xạ (Directors) trong anten Yagi được bố trí như thế nào?**

- **A.** Chế tạo bằng vật liệu nhựa polyme dẫn từ tính công nghệ cao
- **B.** Bố trí ở phía sau lưng của chấn tử phản xạ trên thanh ngang
- **C.** Bố trí phía trước chấn tử tích cực và có chiều dài ngắn dần
- **D.** Đấu nối trực tiếp vào nguồn điện áp xoay chiều của trạm phát đất

> **Đáp án:** **C**  
> **Giải thích:** Các chấn tử dẫn xạ định hình và kéo dài búp sóng chính về phía trước, tăng độ lợi định hướng của anten.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 80
**Độ rộng búp sóng nửa công suất (HPBW - Half Power Beamwidth / 3dB Beamwidth) của anten định hướng là gì?**

- **A.** Góc mở giữa hai hướng có công suất suy giảm một nửa so với cực đại
- **B.** Độ rộng của dải tần số làm việc thỏa mãn hệ số sóng đứng chuẩn
- **C.** Góc quay cơ học tối đa của hệ thống động cơ bám hướng tự động
- **D.** Chiều cao tính toán từ đỉnh cột anten xuống mặt phẳng mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Độ lợi anten càng cao thì góc mở búp sóng HPBW càng hẹp, đòi hỏi cơ cấu quay bám trạm mặt đất phải càng chính xác.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 81
**Tỷ số trước-trên-sau (Front-to-Back Ratio - F/B Ratio) của anten định hướng đo lường thông số nào?**

- **A.** Khoảng cách cơ học giữa các phần tử chấn tử trên khung giá đỡ
- **B.** Tổng trọng lượng cơ học của toàn bộ kết cấu hệ thống anten trạm
- **C.** Tỷ số công suất búp chính phía trước so với rò rỉ phía sau anten
- **D.** Chiều dài tổng thể tính từ đầu trước tới điểm cuối sau của anten

> **Đáp án:** **C**  
> **Giải thích:** Tỷ số F/B cao (ví dụ > 20 dB) giúp trạm mặt đất triệt tiêu hiệu quả các nguồn nhiễu công nghiệp phát ra từ phía sau anten.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 82
**Cáp đồng trục chất lượng cao LMR-400 có ưu điểm vượt trội nào so với cáp RG-58 truyền thống ở tần số UHF 435 MHz?**

- **A.** Giá thành mua sắm trên thị trường thương mại rẻ hơn mười lần
- **B.** Độ suy hao trên một đơn vị chiều dài thấp hơn rất nhiều lần
- **C.** Độ mềm dẻo và tính linh hoạt khi uốn cong vượt trội hơn đáng kể
- **D.** Toàn bộ cấu trúc vỏ và lõi được chế tạo hoàn toàn bằng vật liệu

> **Đáp án:** **B**  
> **Giải thích:** Cáp tổn hao thấp LMR-400 giữ lại trọn vẹn từng phần mười decibel quý giá của tín hiệu vệ tinh yếu.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 83
**Giao thức điều khiển nối tiếp chuẩn 'Easycomm' hoặc 'GS-232' được phần mềm máy tính sử dụng để làm gì?**

- **A.** Kích hoạt cảm biến quang học chụp ảnh toàn cảnh bề mặt địa cầu
- **B.** Đo lường điện áp và dòng điện tiêu thụ của các module trên vệ tinh
- **C.** Nạp mã nguồn chương trình firmware mới cho vi điều khiển trung
- **D.** Gửi lệnh điều khiển góc phương vị và góc ngẩng tới động cơ quay

> **Đáp án:** **D**  
> **Giải thích:** Phần mềm bám quỹ đạo gửi chuỗi lệnh chuẩn (ví dụ `AZ180.0 EL45.0`) qua cổng COM tới bộ điều khiển cơ cấu quay.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 84
**Thời điểm 'TCA' (Time of Closest Approach) trong một phiên bay của vệ tinh là lúc nào?**

- **A.** Thời điểm bộ pin năng lượng của vệ tinh bị cạn kiệt hoàn toàn
- **B.** Thời điểm vệ tinh bắt đầu lặn xuống dưới đường chân trời của trạm
- **C.** Khoảnh khắc cự ly gần nhất, góc ngẩng cao nhất và Doppler đổi dấu
- **D.** Khoảnh khắc vệ tinh vừa xuất hiện ở đường chân trời phía đông trạm

> **Đáp án:** **C**  
> **Giải thích:** Tại thời điểm TCA, công suất tín hiệu thu được thường mạnh nhất do cự ly suy hao đường truyền ngắn nhất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 85
**Thời điểm 'LOS' (Loss of Signal) trong một phiên bay của vệ tinh biểu thị sự kiện nào?**

- **A.** Khoảnh khắc vệ tinh gặp sự cố nổ phá hủy kết cấu trên không gian
- **B.** Thời điểm vệ tinh lặn dưới chân trời và tín hiệu mất hoàn toàn
- **C.** Thời điểm hệ thống nguồn điện lưới của trạm thu mặt đất bị mất
- **D.** Thời điểm một trong các chấn tử của anten bị nứt gãy cơ học ngoài

> **Đáp án:** **B**  
> **Giải thích:** LOS đánh dấu điểm kết thúc của phiên liên lạc; hệ thống anten dừng bám và quay về vị trí chờ phiên tiếp theo.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 86
**Góc ngẩng cực đại (Maximum Elevation) của một phiên bay qua trạm quyết định yếu tố chất lượng nào?**

- **A.** Tốc độ tự quay quanh trục quán tính của Trái Đất trong một ngày
- **B.** Màu sắc quang phổ phản xạ từ lớp phủ bề mặt ngoài của khung vệ
- **C.** Tổng số lượng anten cần phải bố trí đồng thời tại trạm thu mặt đất
- **D.** Góc ngẩng cực đại càng cao thì khoảng cách gần, suy hao ít hơn

> **Đáp án:** **D**  
> **Giải thích:** Các phiên bay cao (Max El > 45° hoặc qua thiên đỉnh 90°) là cơ hội vàng để tải xuống lượng dữ liệu hình ảnh lớn nhất.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 87
**Để định nghĩa một cấu trúc gói tin vô tuyến (Packet Frame) chuẩn trong ngôn ngữ C++, từ khóa nào được sử dụng?**

- **A.** class __attribute__((aligned(4))) Packet
- **B.** struct __attribute__((packed)) Packet
- **C.** union __attribute__((transparent_union)) Packet
- **D.** struct __attribute__((deprecated)) Packet

> **Đáp án:** **B**  
> **Giải thích:** Thuộc tính `__attribute__((packed))` yêu cầu trình biên dịch không chèn các byte đệm (Padding bytes), bảo đảm các trường dữ liệu nằm liên tục.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 88
**Tại sao thuộc tính `__attribute__((packed))` lại là bắt buộc khi định nghĩa cấu trúc khung truyền nhị phân trong C++ nhúng?**

- **A.** Để bảo vệ các bóng bán dẫn bên trong bộ khuếch đại không bị nóng
- **B.** Năng lượng thu được từ tấm pin mặt trời 1U nhỏ hơn công suất phát
- **C.** Quy định của các cơ quan quản lý tần số vũ trụ quốc tế bắt buộc
- **D.** Để các nhà khoa học nghiệp dư có thời gian phân tích gói viễn đo

> **Đáp án:** **C**  
> **Giải thích:** Nếu thiếu `packed`, trình biên dịch có thể tự chèn 1-3 byte rác vào giữa các biến `uint8_t` và `uint16_t`, khiến bên nhận giải mã sai lệch hoàn toàn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 89
**Trong cấu trúc khung tin C++, trường số thứ tự gói (Sequence Number) kiểu `uint16_t` mang lại công dụng gì?**

- **A.** Đo nhiệt độ tiếp giáp bán dẫn của khối phát sóng vô tuyến
- **B.** Đếm tổng số lượng byte dữ liệu hữu ích có trong gói tin
- **C.** Mã hóa nội dung dữ liệu nhị phân trước khi đưa ra anten
- **D.** Giúp bên nhận phát hiện mất gói, loại bỏ trùng và xếp thứ tự

> **Đáp án:** **D**  
> **Giải thích:** Bộ đếm tuần tự tăng dần (0, 1, 2, ...) là cơ sở để bên thu yêu cầu phát lại chính xác gói tin bị thiếu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 90
**Để phân mảnh một tệp dữ liệu kích thước lớn (ví dụ `fileSize = 4096` byte) thành các mảnh nhỏ kích thước `CHUNK_SIZE = 128` byte, công thức tính tổng số gói là:**

- **A.** Công thức chia trực tiếp: fileSize / CHUNK_SIZE
- **B.** Công thức làm tròn lên: (fileSize + CHUNK_SIZE - 1) / CHUNK_SIZE
- **C.** Công thức chia lấy dư: (fileSize / CHUNK_SIZE) + 1
- **D.** Công thức cộng bù: (fileSize + 1) / CHUNK_SIZE

> **Đáp án:** **B**  
> **Giải thích:** Công thức làm tròn lên chuẩn trong C: `(fileSize + CHUNK_SIZE - 1) / CHUNK_SIZE` bảo đảm khối dữ liệu lẻ cuối cùng vẫn được đóng gói trọn vẹn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 91
**Trong máy trạng thái thu nhận gói tin, khi đang ở trạng thái `WAIT_MAGIC1`, điều kiện nào để chuyển sang `WAIT_MAGIC2`?**

- **A.** Chuyển vô điều kiện sang trạng thái chờ nhận byte ma thuật thứ hai
- **B.** Luôn giữ nguyên trạng thái chờ đầu tiên bất kể byte nhận được
- **C.** Bỏ qua byte kiểm tra và chuyển thẳng sang đọc tiêu đề gói tin
- **D.** Kiểm tra đúng byte ma thuật đầu tiên thì chuyển sang WAIT_MAGIC2, nếu sai quay về WAIT_MAGIC1

> **Đáp án:** **D**  
> **Giải thích:** Chỉ khi đọc đúng byte ma thuật đầu tiên (0x55), máy thu mới chuyển sang chờ byte ma thuật thứ hai; nếu sai lập tức quay về trạng thái chờ ban đầu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 92
**Để định kỳ phát gói tin ngọn đuốc (Beacon Packet) mỗi 30 giây một lần mà không dùng hàm `delay()`, cấu trúc mã C++ là:**

- **A.** Lặp kiểm tra định kỳ 30 giây bằng millis() nhưng quên cập nhật lại biến mốc
- **B.** Kiểm tra hiệu số millis() hiện tại trừ mốc trước lớn hơn 30000 ms, gửi Beacon rồi cập nhật mốc
- **C.** Gọi hàm delay(30000) chặn hệ thống trong 30 giây rồi phát Beacon
- **D.** Dùng ngắt timer cứng phát Beacon liên tục mà không kiểm tra trạng thái

> **Đáp án:** **B**  
> **Giải thích:** Kỹ thuật định thời phi phong bế bằng millis() duy trì việc phát nhịp tim beacon đều đặn trong khi vệ tinh vẫn thực thi các nhiệm vụ đo đạc khác.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 93
**Khi truyền chuỗi ký tự ASCII qua vô tuyến, tại sao việc chuyển đổi các số thực thành định dạng nhị phân nguyên thủy (Binary format) lại tiết kiệm băng thông hơn?**

- **A.** Số thực dạng chuỗi tốn 8 byte, trong khi dạng nhị phân chỉ tốn 4 byte
- **B.** Dữ liệu nhị phân có màu sắc hiển thị trực quan hơn văn bản ASCII
- **C.** Các gói tin nhị phân có vận tốc lan truyền qua sóng vô tuyến nhanh
- **D.** Không có bất kỳ sự khác biệt nào về hiệu quả chiếm dụng băng thông

> **Đáp án:** **A**  
> **Giải thích:** Định dạng nhị phân giảm ít nhất 50% dung lượng gói tin so với việc truyền chuỗi văn bản ASCII thuần túy.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 94
**Để đo thời gian trễ khứ hồi (RTT - Round Trip Time) của một gói tin viễn lệnh trong C++, công thức tính toán là:**

- **A.** Lấy mốc thời gian hiện tại millis() chia đôi
- **B.** Lấy mốc thời gian nhận gói PONG trừ đi mốc thời gian ghi trong gói PING
- **C.** Nhân đôi thời gian trễ của hàm delay() khi phát gói tin
- **D.** Đọc giá trị bộ đếm chu kỳ CPU tại thời điểm nhận gói tin

> **Đáp án:** **B**  
> **Giải thích:** Hiệu số thời gian giữa lúc phát lệnh PING và lúc nhận được phản hồi PONG là thước đo độ trễ mạng thực tế của đường truyền.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 95
**Trong mã nguồn xử lý gói tin, nếu nhận được gói tin có trường địa chỉ đích `dest_addr` không trùng với địa chỉ của vệ tinh và cũng không phải địa chỉ quảng bá (Broadcast 0xFFFF), hành vi xử lý đúng là:**

- **A.** Khởi động lại toàn bộ máy tính nhúng OBC của vệ tinh
- **B.** Gửi gói tin phản hồi báo lỗi về cho trạm thu mặt đất
- **C.** Xóa toàn bộ các tệp tin trong bộ nhớ Flash của phân hệ
- **D.** Bỏ qua gói tin, không xử lý và không gửi ACK để nhường kênh

> **Đáp án:** **D**  
> **Giải thích:** Lọc địa chỉ ở tầng liên kết dữ liệu giúp vệ tinh không bị phân tâm bởi các gói tin vô tuyến của các thiết bị khác hoạt động cùng tần số.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 96
**Để bảo đảm tính tương thích giữa các kiến trúc máy tính có thứ tự byte khác nhau (Endianness), các trường số nguyên 16-bit trong gói tin mạng nên được chuẩn hóa bằng các hàm nào?**

- **A.** Hàm tính lũy thừa số học pow() trong thư viện chuẩn
- **B.** Dùng hàm htons() khi gửi và ntohs() khi nhận gói tin
- **C.** Hàm tính giá trị tuyệt đối abs() trong thư viện chuẩn
- **D.** Hàm làm tròn số nguyên round() trong thư viện chuẩn

> **Đáp án:** **B**  
> **Giải thích:** Các hàm htons (Host to Network Short) và ntohs (Network to Host Short) chuẩn hóa thứ tự byte theo quy ước Big-Endian của mạng.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 97
**Để theo dõi chất lượng kênh truyền trong suốt thời gian hoạt động, cấu trúc lưu trữ thống kê truyền thông trong C++ gồm những biến nào?**

- **A.** Khai báo các biến đếm số gói phát, số gói nhận, số gói lỗi và số lần gửi lại
- **B.** Lưu toàn bộ nội dung của mọi gói tin đã phát vào mảng chuỗi RAM
- **C.** Xóa toàn bộ các biến thống kê về giá trị 0 sau mỗi chu kỳ giây
- **D.** Đo điện áp trên chân ăng-ten để suy ra tỷ lệ lỗi gói tin

> **Đáp án:** **A**  
> **Giải thích:** Các biến đếm gói tin phát thành công, gói tin nhận được, lỗi CRC và số lần timeout cung cấp số liệu phân tích độ tin cậy của liên kết viễn thông.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 98
**Công thức C++ nào tính toán tỷ lệ lỗi gói tin (Packet Error Rate - PER) từ các biến đếm thống kê:**

- **A.** Lấy tổng số gói tin phát đi chia cho tổng số gói tin bị lỗi
- **B.** Lấy số gói tin nhận thành công chia cho tổng số gói tin phát đi
- **C.** Lấy số gói tin bị mất chia cho tổng dung lượng tệp tin truyền
- **D.** Lấy số gói lỗi chia cho tổng số gói nhận rồi nhân với 100%

> **Đáp án:** **D**  
> **Giải thích:** Tỷ lệ PER đo lường tỷ lệ phần trăm số gói tin bị hỏng CRC trên tổng số khung dữ liệu mà máy thu phát hiện được trên đường truyền.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 99
**Lệnh dòng lệnh CLI `com_stat` gửi qua cổng Serial có thể được lập trình để in ra các thông số viễn thông nào?**

- **A.** Danh sách toàn bộ các tệp tin đang có trên thẻ nhớ ngoài
- **B.** Khóa mật khẩu giải mã các luồng dữ liệu của trạm thu đất
- **C.** In tổng số gói phát, nhận, số lần thử lại, PER và RSSI
- **D.** Mã nguồn nhị phân của chương trình hệ thống điều khiển

> **Đáp án:** **C**  
> **Giải thích:** Lệnh chẩn đoán viễn thông thời gian thực giúp kỹ sư đánh giá tức thì chất lượng kết nối với vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 100
**Theo quy ước quốc tế về mã Morse, độ dài thời gian của một dấu Gạch (Dah) bằng bao nhiêu lần độ dài của một dấu Chấm (Dit)?**

- **A.** Độ dài thời gian của hai dấu hoàn toàn bằng nhau
- **B.** Chính xác bằng 3 lần thời lượng của dấu Chấm
- **C.** Bằng một nửa thời gian thời lượng của dấu Chấm
- **D.** Bằng đúng 10 lần thời gian thời lượng của dấu Chấm

> **Đáp án:** **B**  
> **Giải thích:** Tỷ lệ chuẩn mã Morse: 1 Dah = 3 Dit; khoảng cách giữa các ký tự trong một từ là 3 Dit, và khoảng cách giữa hai từ là 7 Dit.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 101
**Để ngăn chặn việc thực thi các viễn lệnh giả mạo hoặc nhiễu rác vô tình có cấu trúc đúng, trường dữ liệu bảo mật nào nên có trong Header?**

- **A.** Chỉ phát một xung điện áp duy nhất ra chân tín hiệu kích nổ
- **B.** Pha đếm lùi, đốt nóng dây nhiệt cắt dây giữ rồi xác nhận bung
- **C.** Kéo chân GPIO ngõ ra lên mức logic cao liên tục không giới hạn
- **D.** Khởi động lại toàn bộ vi điều khiển ngay sau khi nhận lệnh

> **Đáp án:** **C**  
> **Giải thích:** Cơ chế xác thực lệnh (Command Authentication) bảo đảm vệ tinh chỉ thực thi các viễn lệnh xuất phát từ trạm điều khiển chính thức.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 102
**Trong giao thức truyền thông vệ tinh, tại sao trường mã loại gói tin `packet.type` (Packet Type) lại cần thiết?**

- **A.** Dùng các mô-tơ bước điều khiển góc bám với độ phân giải cao
- **B.** Chỉ sử dụng duy nhất một anten dây đơn cực vô hướng cố định
- **C.** Sử dụng anten mảng quét búp sóng điện tử theo cả hai trục
- **D.** Lắp đặt khớp xoay thứ ba để triệt tiêu điểm kỳ dị thiên đỉnh

> **Đáp án:** **C**  
> **Giải thích:** Mã định danh loại gói (Packet Type Identifier) phân tách các dịch vụ tầng ứng dụng khác nhau trên cùng một tuyến truyền dẫn.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 103
**Khi biến đếm số thứ tự gói `seq` kiểu `uint16_t` đạt giá trị cực đại 65535, phép toán tăng tuần tự `seq++` trong C++ sẽ dẫn đến kết quả gì?**

- **A.** Tự động quay vòng về 0 theo quy luật số học mô-đun 2^16
- **B.** Biến số tự động chuyển sang biểu diễn giá trị số nguyên âm
- **C.** Giá trị biến số bị ghim cố định ở mức giới hạn 65535
- **D.** Làm treo vi điều khiển do phát sinh lỗi ngoại lệ tràn số

> **Đáp án:** **A**  
> **Giải thích:** Số nguyên không dấu trong C++ tự động quay vòng khi tràn số mà không sinh ngoại lệ; thuật toán so sánh trượt phải tính đến hiện tượng quay vòng này.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 104
**Để tính toán khoảng cách số thứ tự giữa hai gói tin có xét đến hiện tượng quay vòng mô-đun 65536 trong C++, công thức an toàn là:**

- **A.** Ép kiểu hiệu số (seqB - seqA) về số nguyên không dấu 16-bit uint16_t
- **B.** Sử dụng hàm abs() lấy trị tuyệt đối hiệu số của hai số có dấu
- **C.** Cộng trực tiếp hai số thứ tự seqB và seqA lại với nhau
- **D.** Lấy hiệu số trực tiếp bằng biến số nguyên có dấu kiểu int

> **Đáp án:** **A**  
> **Giải thích:** Phép trừ trên số nguyên không dấu 16-bit tự động bù hai và bảo toàn khoảng cách tương đối chính xác ngay cả khi biến bị tràn số quay vòng.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 105
**Để thông báo cho vệ tinh biết danh sách nhiều mảnh gói tin bị mất bằng một mảng mặt nạ bit (Bitmask 64-bit), cấu trúc bản tin C++ là:**

- **A.** Khai báo một cấu trúc chỉ chứa một biến số nguyên đơn lẻ
- **B.** Định nghĩa struct BitmaskNack chứa loại gói, số thứ tự cơ sở và mặt nạ 64-bit uint64_t
- **C.** Sử dụng một biến số thực dấu phẩy động duy nhất để lưu mặt nạ
- **D.** Khai báo một mảng 10 ký tự văn bản để lưu trữ danh sách thiếu

> **Đáp án:** **B**  
> **Giải thích:** Mỗi bit trong trường `uint64_t mask` biểu thị trạng thái thiếu của 64 gói tin liên tiếp kể từ `baseSeq`, nén danh sách lỗi cực kỳ gọn nhẹ.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 106
**Để tạo hạt giống ngẫu nhiên (Random Seed) trong C++ phục vụ việc mô phỏng nhiễu đường truyền hoặc sinh mã xác thực gói tin, lệnh khởi tạo chuẩn là:**

- **A.** Khởi tạo mầm ngẫu nhiên bằng giá trị hằng số cố định bằng 0
- **B.** Khởi tạo mầm ngẫu nhiên bằng một chuỗi số nguyên cố định 1234
- **C.** Khởi tạo mầm ngẫu nhiên bằng giá trị hằng số tròn 100
- **D.** Khởi tạo mầm ngẫu nhiên bằng giá trị đọc nhiễu điện từ từ chân ADC trôi nổi

> **Đáp án:** **D**  
> **Giải thích:** Đọc mẫu nhiễu nhiệt điện từ tại chân ADC trôi nổi (như GPIO 36) cung cấp nguồn entropy vật lý ngẫu nhiên để khởi tạo bộ sinh số ngẫu nhiên.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 107
**Số vòng quay quanh Trái Đất mà một vệ tinh quỹ đạo tầm thấp (LEO) hoàn thành mỗi ngày là bao nhiêu?**

- **A.** 14 đến 16 vòng mỗi ngày đêm
- **B.** 1 đến 2 vòng mỗi ngày đêm
- **C.** 30 đến 40 vòng mỗi ngày đêm
- **D.** 60 đến 72 vòng mỗi ngày đêm

> **Đáp án:** **A**  
> **Giải thích:** Ở độ cao LEO khoảng 400 - 600 km, chu kỳ quỹ đạo của vệ tinh là khoảng 90 đến 96 phút, tương đương với 14 đến 16 vòng quay quanh Trái Đất trong 24 giờ.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 108
**Hiện tượng dịch tần Doppler trong truyền thông vệ tinh LEO xuất hiện do nguyên nhân vật lý nào?**

- **A.** Vận tốc di chuyển tương đối rất lớn giữa vệ tinh và trạm trên mặt đất
- **B.** Sự giãn nở nhiệt của vỏ nhôm CubeSat khi đi từ vùng tối ra vùng sáng
- **C.** Sự suy giảm công suất phát sóng vô tuyến theo bình phương khoảng cách
- **D.** Hiện tượng ion hóa không khí xung quanh anten thu phát ở độ cao lớn

> **Đáp án:** **A**  
> **Giải thích:** Vệ tinh LEO bay với vận tốc khoảng 7.5 km/s, khiến tần số sóng vô tuyến thu được bị dịch cao hơn khi vệ tinh tiến lại gần (AOS) và dịch thấp hơn khi rời xa (LOS).  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 109
**Mục đích cốt lõi của bảng tính ngân sách đường truyền (Link Budget) là gì?**

- **A.** Cân đối công suất phát, độ lợi anten và suy hao để đảm bảo chất lượng thu
- **B.** Tính toán chi phí tài chính mua sắm thiết bị phần cứng của phân hệ COM
- **C.** Xác định số lượng nhân sự trực ca tại đài điều khiển trạm mặt đất
- **D.** Dự toán lượng pin tiêu hao khi vệ tinh thực hiện chụp ảnh liên tục

> **Đáp án:** **A**  
> **Giải thích:** Link Budget tính toán tổng đại số của công suất phát, độ lợi anten, suy hao không gian tự do (FSPL) và độ nhạy máy thu để đảm bảo tỉ số tín hiệu trên tạp âm (SNR) đạt yêu cầu giải mã.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 110
**Anten dây đơn cực hoặc lưỡng cực dải tần VHF/UHF trên CubeSat có đặc điểm cơ học gì?**

- **A.** Phải gập gọn sát thân vỏ khi phóng và tự động bung ra khi đã lên quỹ đạo
- **B.** Được đúc liền khối cố định với khung nhôm không thể tháo rời được
- **C.** Được chế tạo từ sợi thủy tinh cách điện có độ dẻo cao và không dẫn điện
- **D.** Phải ngâm trong dầu làm mát chuyên dụng để tránh bị nóng chảy trong chân không

> **Đáp án:** **A**  
> **Giải thích:** Bước sóng VHF/UHF khá dài (~70cm ở UHF) nên anten dài hàng chục centimet, bắt buộc phải cuộn gọn bằng dây cước và dùng điện trở đốt đứt dây để bung anten sau khi rời tên lửa.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 111
**Ưu điểm nổi bật của anten vi dải (Patch Antenna) dải tần S-band và X-band là gì?**

- **A.** Kích thước phẳng gắn trực tiếp lên thân vỏ không cần cơ cấu bung cơ khí
- **B.** Có khả năng tự động quay hướng bám theo tín hiệu của trạm mặt đất
- **C.** Hoàn toàn miễn nhiễm với mọi loại nhiễu điện từ trường trong không gian
- **D.** Không cần cấp tín hiệu cao tần từ bộ khuếch đại công suất trên bo mạch

> **Đáp án:** **A**  
> **Giải thích:** Ở tần số GHz (S-band, X-band), bước sóng ngắn cho phép thiết kế anten dạng tấm phẳng mỏng (Patch) dán cố định trên bề mặt CubeSat, loại bỏ hoàn toàn rủi ro kẹt cơ cấu bung mở.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 112
**Tín hiệu Continuous Wave (CW) Beacon phát mã Morse đóng vai trò gì trong phân hệ COM?**

- **A.** Kênh liên lạc dự phòng cực kỳ tin cậy tiêu thụ ít điện năng khi có sự cố
- **B.** Kênh truyền tải toàn bộ các đoạn video màu sắc nét ghi từ quỹ đạo
- **C.** Kênh gửi lệnh nạp firmware từ trạm mặt đất lên vi điều khiển trên bo
- **D.** Kênh phát nhạc giải trí cho các kỹ sư trực trạm trong giờ nghỉ ngơi

> **Đáp án:** **A**  
> **Giải thích:** CW Beacon phát sóng liên tục bật/tắt (OOK) mã Morse công suất chỉ vài trăm mili-watt; tín hiệu này rất dễ thu và giải mã bằng tai ngay cả khi tỉ số SNR cực thấp.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 113
**Cơ quan quốc tế nào điều phối việc cấp phép tần số cho các vệ tinh CubeSat giáo dục?**

- **A.** Liên minh Viễn thông Quốc tế và Hiệp hội Vô tuyến Nghiệp dư Quốc tế
- **B.** Tổ chức Y tế Thế giới và Quỹ Tiền tệ Quốc tế của Liên Hợp Quốc
- **C.** Hiệp hội Vận tải Hàng không Quốc tế và Cục Hàng không Liên bang
- **D.** Tổ chức Thương mại Thế giới và Ngân hàng Tái thiết Phát triển

> **Đáp án:** **A**  
> **Giải thích:** Việc sử dụng tần số phải được điều phối qua ITU (International Telecommunication Union) và IARU (International Amateur Radio Union) để tránh gây nhiễu cho các mạng viễn thông toàn cầu.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 114
**Các phương thức điều chế số phổ biến nhất trên máy thu phát phân hệ COM vệ tinh nhỏ là gì?**

- **A.** Điều chế khóa dịch tần FSK và điều chế khóa dịch pha BPSK hoặc QPSK
- **B.** Điều chế biên độ AM tương tự dùng cho các đài phát thanh sóng ngắn
- **C.** Điều chế tần số FM tương tự băng thông siêu rộng cho âm thanh nổi
- **D.** Điều chế xung mã lượng tử hóa không gian đa chiều tốc độ terabit

> **Đáp án:** **A**  
> **Giải thích:** FSK (Frequency Shift Keying) đơn giản, tin cậy; trong khi BPSK và QPSK (Phase Shift Keying) cho hiệu quả sử dụng phổ và năng lượng cao (Eb/N0), chuẩn hóa trên CubeSat.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 115
**Giới hạn công suất phát vô tuyến (RF Output Power) trên CubeSat 1U thường bị giới hạn bởi yếu tố nào?**

- **A.** Dung lượng dự trữ của pin và khả năng tản nhiệt của thân vỏ trong chân không
- **B.** Độ bền cơ học của dây anten khi phát sóng công suất lớn trong gió vũ trụ
- **C.** Quy định cấm phát sóng vô tuyến vượt quá một mili-oát của Liên Hợp Quốc
- **D.** Sự suy giảm vận tốc bay của vệ tinh do áp suất bức xạ của sóng điện từ

> **Đáp án:** **A**  
> **Giải thích:** Máy phát công suất cao (PA) tiêu thụ dòng điện lớn từ pin và tỏa nhiều nhiệt; trong môi trường chân không không có đối lưu không khí, phát sóng quá lâu sẽ gây quá nhiệt cháy hỏng chip PA.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 116
**Suy hao không gian tự do (Free Space Path Loss) phụ thuộc vào những yếu tố vật lý nào?**

- **A.** Tỉ lệ thuận với bình phương khoảng cách truyền dẫn và bình phương tần số sóng
- **B.** Tỉ lệ nghịch với vận tốc bay của vệ tinh trên quỹ đạo quanh Trái Đất
- **C.** Chỉ phụ thuộc vào độ ẩm của không khí tại vị trí đặt đài trạm mặt đất
- **D.** Phụ thuộc vào kích thước hình học của các tấm pin mặt trời trên vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Theo phương trình truyền sóng Friis, FSPL tăng theo bình phương cự ly d và bình phương tần số f; do đó cự ly càng xa (khi vệ tinh ở góc thấp) thì tín hiệu thu được càng suy giảm mạnh.  
> **Mục tiêu củng cố:** Nắm vững phương trình suy hao Friis, tính toán Link Budget và hiệu ứng Doppler  

---

### Câu 117
**Hiện tượng phân cực sóng vô tuyến bị xoay khi truyền qua tầng điện ly Trái Đất gọi là gì?**

- **A.** Hiệu ứng quay mặt phẳng phân cực Faraday do tác động của từ trường
- **B.** Hiện tượng tán sắc ánh sáng mặt trời qua lớp hơi nước trong khí quyển
- **C.** Hiệu ứng biến điệu biên độ sóng mang do tầng đối lưu bị nhiễu loạn
- **D.** Hiện tượng khúc xạ sóng âm thanh trong môi trường chân không vũ trụ

> **Đáp án:** **A**  
> **Giải thích:** Hiệu ứng Faraday (Faraday Rotation) làm xoay mặt phẳng phân cực của sóng phân cực thẳng; để khắc phục, trạm mặt đất thường sử dụng anten phân cực tròn (Circular Polarization).  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

### Câu 118
**Trên Trang Web Cấu Hình PTITCube RF Configurator, tính năng nào giúp người dùng nhanh chóng nạp cấu hình tối ưu đã được thiết lập sẵn cho các mục đích truyền viễn trắc vệ tinh, truyền tầm xa hoặc truyền dữ liệu tốc độ cao?**

- **A.** Quick Presets (Cấu hình mẫu định sẵn theo nhu cầu nhiệm vụ)
- **B.** Format Disk (Định dạng lại thẻ nhớ)
- **C.** Over-The-Air Flashing (Nạp code qua sóng radio)
- **D.** Auto Orbit Calculation (Tự tính toán quỹ đạo bay)

> **Đáp án:** **A**  
> **Giải thích:** Tính năng Quick Presets trên trang web cấu hình cung cấp sẵn các bộ thông số tối ưu (như CubeSat Telemetry, Long Range, High Speed) giúp kỹ sư thiết lập tức thì chỉ với một cú nhấp chuột.  
> **Mục tiêu củng cố:** Nắm vững cơ sở lý thuyết truyền sóng không gian băng tần UHF  

---

## 📖 Doc 5.3: Khung Bản Tin Telemetry, Thuật Toán CRC-16 & Kiến Trúc Trạm Mặt Đất (52 câu)

### Câu 119
**Khái niệm 'Đường xuống' (Downlink) trong kỹ thuật thông tin vệ tinh là gì?**

- **A.** Tuyến truyền sóng vô tuyến từ vệ tinh xuống mặt đất
- **B.** Tín hiệu truyền dữ liệu số qua cáp giao tiếp USB
- **C.** Dòng điện xả từ bộ pin thứ cấp vào các tải tiêu thụ
- **D.** Sóng vô tuyến phản xạ ngược từ bề mặt của đại dương

> **Đáp án:** **A**  
> **Giải thích:** Downlink mang toàn bộ thông số viễn đo kỹ thuật (Housekeeping Telemetry) và dữ liệu tải trọng khoa học (Payload Data) về trạm.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 120
**Một vệ tinh phát sóng ở băng tần UHF 435 MHz bay ở quỹ đạo cách trạm mặt đất 1000 km, suy hao FSPL xấp xỉ khoảng:**

- **A.** 85 dB
- **B.** 145 dB
- **C.** 195 dB
- **D.** 250 dB

> **Đáp án:** **B**  
> **Giải thích:** $\text{FSPL} = 20\log_{10}(1000) + 20\log_{10}(435) + 32.44 = 60 + 52.77 + 32.44 \approx 145.2\text{ dB}$.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 121
**Nếu trạm mặt đất không có cơ chế điều chỉnh bù sai lệch tần số Doppler (Doppler Tracking / AFC), hậu quả đối với việc thu nhận dữ liệu là gì?**

- **A.** Bổ sung các tấm chắn bức xạ nhiệt xung quanh module thu
- **B.** Phần mềm tự động dịch tần số thu phát bù theo Doppler
- **C.** Tăng công suất phát sóng của vệ tinh lên mức tối đa
- **D.** Sử dụng anten thu có độ rộng búp sóng cực kỳ hẹp

> **Đáp án:** **A**  
> **Giải thích:** Độ lệch 10 kHz vượt xa băng thông thu hẹp của nhiều chế độ điều chế, bắt buộc phần mềm trạm phải liên tục chỉnh tần số thu.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 122
**Trường 'Từ đồng bộ' (Sync Word / Preamble Delimiter) trong khung truyền vô tuyến đóng vai trò gì?**

- **A.** Xóa toàn bộ các gói tin đang chờ trong hàng đợi phát
- **B.** Báo hiệu chính xác điểm bắt đầu của dữ liệu tải trọng
- **C.** Đo điện áp và nhiệt độ của khối máy tính nhúng OBC
- **D.** Nâng cao độ nhạy thu của khối tiền khuếch đại LNA

> **Đáp án:** **B**  
> **Giải thích:** Bộ thu quét liên tục từng bit; khi nhận đúng chuỗi Sync Word định trước, nó bắt đầu gom các bit tiếp theo thành các byte có cấu trúc.  
> **Mục tiêu củng cố:** Hiểu cấu trúc gói viễn lệnh và cơ chế phản hồi chấp hành  

---

### Câu 123
**Mã kiểm tra dư thừa tuần hoàn (CRC) đặt ở cuối khung truyền vô tuyến có vai trò sống còn nào?**

- **A.** Phát hiện bit sai do nhiễu để chấp nhận hoặc hủy gói tin
- **B.** Nén kích thước dữ liệu để tiết kiệm băng thông truyền
- **C.** Mã hóa bảo mật luồng thông tin chống bị nghe lén trộm
- **D.** Tăng cường công suất bức xạ điện từ ra ngoài không gian

> **Đáp án:** **A**  
> **Giải thích:** Nếu mã CRC tính toán tại bên nhận không khớp với trường CRC trong gói, gói tin bị hỏng sẽ bị loại bỏ ngay lập tức.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 124
**Giao thức kiểm soát luồng và sửa lỗi 'Dừng và Chờ' (Stop-and-Wait ARQ) hoạt động theo nguyên tắc nào?**

- **A.** Bên thu chủ động truyền dữ liệu trước cho bên phát nhận
- **B.** Cả hai bên cùng đồng thời truyền dữ liệu lên đường truyền
- **C.** Bên phát gửi liên tục mà không cần quan tâm phản hồi
- **D.** Gửi từng gói và chờ ACK từ bên thu trước khi gửi tiếp

> **Đáp án:** **D**  
> **Giải thích:** Stop-and-Wait là giao thức ARQ (Automatic Repeat reQuest) đơn giản nhất, bảo đảm độ tin cậy tuyệt đối dù kênh truyền bị chập chờn.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 125
**Tín hiệu phản hồi 'ACK' (Acknowledgment Packet) trong giao thức ARQ mang ý nghĩa gì?**

- **A.** Yêu cầu ngắt kết nối phiên liên lạc vô tuyến hiện tại
- **B.** Báo gói tin nhận vẹn toàn, sẵn sàng nhận gói tiếp theo
- **C.** Cảnh báo nguồn năng lượng pin tại trạm mặt đất bị yếu
- **D.** Thông báo gói tin bị lỗi dữ liệu và yêu cầu truyền lại

> **Đáp án:** **B**  
> **Giải thích:** Gói ACK là tín hiệu báo tin vui giúp bên phát yên tâm chuyển sang truyền phân đoạn dữ liệu kế tiếp.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 126
**Khoảng thời gian chờ phản hồi tối đa (ARQ Timeout) trong giao thức Stop-and-Wait được thiết lập nhằm mục đích gì?**

- **A.** Để xả bớt lượng điện tích dư thừa tích lũy trong pin
- **B.** Tránh treo bên phát nếu gói tin hoặc gói ACK bị thất lạc
- **C.** Để nâng cao tốc độ truyền tải trên kênh thông tin số
- **D.** Để tắt máy tính nhúng sau khi hoàn tất phiên truyền dữ liệu

> **Đáp án:** **B**  
> **Giải thích:** Nếu hết thời gian Timeout mà chưa nhận được ACK, bên phát tự động phát lại (Retransmit) gói tin đó.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 127
**Quá trình 'Tái cấu trúc dữ liệu' (Packet Reassembly) tại trạm mặt đất diễn ra như thế nào?**

- **A.** Ghép ngẫu nhiên các mảnh dữ liệu nhận được trong bộ nhớ
- **B.** Tự động loại bỏ toàn bộ các gói tin có chỉ số thứ tự chẵn
- **C.** Vẽ lại dữ liệu bức ảnh thủ công trên giao diện máy tính
- **D.** Kiểm tra số thứ tự, xếp mảnh vào đúng offset để dựng tệp

> **Đáp án:** **D**  
> **Giải thích:** Nhờ trường số thứ tự trong Header, các gói tin dù đến lệch thời gian vẫn được ghép lại chính xác thành tệp nhị phân ban đầu.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 128
**Tiêu chuẩn quốc tế CCSDS (Consultative Committee for Space Data Systems) do các cơ quan không gian lớn (NASA, ESA, JAXA) xây dựng nhằm mục tiêu gì?**

- **A.** Chuẩn hóa giao thức và khung truyền để dùng chung trạm
- **B.** Quy định màu sắc sơn phủ bên ngoài khung vỏ của vệ tinh
- **C.** Định giá dịch vụ phóng tải trọng thương mại lên quỹ đạo
- **D.** Kinh doanh các module thu phát sóng vô tuyến chuyên dụng

> **Đáp án:** **A**  
> **Giải thích:** CCSDS là chuẩn mực cao cấp nhất của ngành hàng không vũ trụ toàn cầu cho các sứ mệnh khoa học liên hành tinh.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 129
**Khái niệm 'Kênh ảo' (Virtual Channels - VC) trong chuẩn khung truyền CCSDS cho phép hệ thống thực hiện năng lực nào?**

- **A.** Đa hợp nhiều luồng dữ liệu độc lập trên một đường truyền
- **B.** Nâng tần số phát sóng của máy phát lên mức vô hạn định
- **C.** Tạo búp sóng anten ảo không cần dùng linh kiện vật lý
- **D.** Thu nhỏ kích thước hình học của hệ thống anten mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Ảo hóa kênh truyền giúp dữ liệu khẩn cấp có thể vượt lên truyền trước mà không bị tắc nghẽn sau các tệp ảnh lớn.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 130
**Thời gian một phiên bay qua trạm mặt đất (Pass Duration / Contact Window) của CubeSat ở quỹ đạo LEO (độ cao ~500 km) kéo dài khoảng bao lâu?**

- **A.** 5 đến 12 phút
- **B.** 45 đến 60 phút
- **C.** 20 đến 24 giờ
- **D.** 10 đến 30 giây

> **Đáp án:** **A**  
> **Giải thích:** Vận tốc bay 7.5 km/s khiến vệ tinh lướt qua bầu trời rất nhanh; tổng thời gian nhìn thấy từ chân trời này sang chân trời kia chỉ khoảng chục phút.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 131
**Định lý dung lượng kênh truyền Shannon (Shannon-Hartley Theorem) xác định giới hạn tốc độ truyền dữ liệu cực đại ($C$) dựa trên hai thông số nào?**

- **A.** Dung lượng bộ pin lưu trữ và nhiệt độ vỏ máy vệ tinh
- **B.** Khoảng cách thẳng từ vị trí vệ tinh tới tâm Mặt Trời
- **C.** Băng thông kênh truyền B và tỷ số tín hiệu trên nhiễu SNR
- **D.** Kích thước hình học của anten và trọng lượng vệ tinh

> **Đáp án:** **C**  
> **Giải thích:** Định lý Shannon đặt ra giới hạn trần vật lý tuyệt đối của tốc độ truyền tin không lỗi trên một kênh truyền có nhiễu Gaussian.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 132
**Góc ngẩng tối thiểu (Minimum Elevation Angle) của anten trạm mặt đất thường được chọn từ $5^\circ$ đến $10^\circ$ nhằm mục đích gì?**

- **A.** Tránh vật cản địa hình, giảm tạp âm nhiệt đất và suy hao khí quyển
- **B.** Tiết kiệm năng lượng điện tiêu thụ cho động cơ quay anten trạm
- **C.** Bảo đảm các phần tử chấn tử của anten không bị chạm xuống đất
- **D.** Bảo vệ thị lực của nhân viên vận hành trước bức xạ điện từ

> **Đáp án:** **A**  
> **Giải thích:** Ở góc ngẩng sát chân trời (< 5°), chiều dày khí quyển lớn và nhiễu nhiệt mặt đất làm suy giảm nghiêm trọng chất lượng đường truyền.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 133
**Tại sao trạm mặt đất bám vệ tinh LEO thường sử dụng anten phân cực tròn (như Crossed-Yagi hoặc Helical)?**

- **A.** Anten phân cực tròn có tổng trọng lượng nhẹ hơn đáng kể
- **B.** Hỗ trợ thu bắt các tín hiệu mạng không dây diện rộng công cộng
- **C.** Anten phân cực tròn không đòi hỏi phải bám theo hướng vệ tinh
- **D.** Giữ suy hao phân cực ổn định bất kể hướng quay tư thế vệ tinh

> **Đáp án:** **D**  
> **Giải thích:** Anten phân cực tròn triệt tiêu hiện tượng mờ sóng sâu (Deep Fading) do chuyển động tự quay của thân vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 134
**Thiết bị đài vô tuyến định nghĩa bằng phần mềm (SDR - Software Defined Radio như RTL-SDR) khác với máy thu thanh truyền thống ở điểm nào?**

- **A.** Hoạt động hoàn toàn độc lập mà không cần kết nối với anten
- **B.** Toàn bộ cấu trúc mạch được gia công hoàn toàn từ kim loại tấm
- **C.** Chỉ hỗ trợ giải điều chế và tái tạo tín hiệu âm thanh tương tự
- **D.** Số hóa cao tần bằng ADC, lọc và giải điều chế bằng phần mềm

> **Đáp án:** **D**  
> **Giải thích:** SDR mang lại độ linh hoạt vô hạn: có thể thay đổi phương thức điều chế (FSK, BPSK, LoRa) chỉ bằng cách đổi vài dòng code phần mềm.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 135
**Đồ thị thác nước (Waterfall FFT Display) trên giao diện phần mềm trạm mặt đất hiển thị những thông tin vật lý nào?**

- **A.** Bản đồ số mô tả chi tiết đường đi của vệ tinh trên bề mặt đất
- **B.** Biểu đồ biến thiên nhiệt độ khí quyển của các vùng lãnh thổ
- **C.** Đồ thị phổ tần số theo thời gian, cường độ biểu thị bằng màu
- **D.** Đồ thị biểu diễn cường độ dòng điện tiêu thụ của động cơ quay

> **Đáp án:** **C**  
> **Giải thích:** Đồ thị thác nước cho phép kỹ sư quan sát trực quan vệt tín hiệu Doppler uốn cong khi vệ tinh bay ngang qua trạm.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 136
**Cơ cấu quay anten trạm mặt đất (Antenna Rotator) điều khiển chuyển động của hệ thống anten theo hai trục tọa độ nào?**

- **A.** Trục lăn Roll và trục chúc Pitch
- **B.** Góc phương vị và Góc ngẩng
- **C.** Trục X và trục Y trong phòng
- **D.** Trục thời gian và trục nhiệt độ

> **Đáp án:** **B**  
> **Giải thích:** Tọa độ Az/El xác định chính xác hướng chỉ của anten tới bất kỳ vị trí nào của vệ tinh trên vòm trời địa phương.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 137
**Bộ tham số quỹ đạo hai dòng (TLE - Two-Line Elements) cung cấp tập hợp dữ liệu nào cho trạm mặt đất?**

- **A.** Mã khóa bảo mật dùng cho việc giải mã luồng dữ liệu truyền
- **B.** Hình ảnh viễn thám chụp bề mặt Trái Đất từ tải trọng quang học
- **C.** Danh sách họ tên của các kỹ sư vận hành trạm thu mặt đất
- **D.** Tập tham số Kepler mô tả quỹ đạo vệ tinh tại thời điểm chuẩn

> **Đáp án:** **D**  
> **Giải thích:** Dữ liệu TLE do mạng lưới giám sát không gian quốc tế cập nhật hàng ngày để dự báo chính xác vị trí vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 138
**Mô hình giải tích SGP4 (Simplified General Perturbations-4) được phần mềm trạm mặt đất sử dụng nhằm mục đích gì?**

- **A.** Giải mã luồng dữ liệu âm thanh số truyền từ các viễn lệnh
- **B.** Tính toán kinh phí điện năng tiêu thụ của hệ thống trạm thu
- **C.** Tính nhiễu loạn quỹ đạo từ TLE để dự báo tọa độ thời gian thực
- **D.** Thiết kế mô hình kết cấu cơ học ba chiều của vỏ bọc vệ tinh

> **Đáp án:** **C**  
> **Giải thích:** SGP4 tính ra góc Azimuth và Elevation tức thời từng giây để gửi lệnh điều khiển động cơ bám anten tự động theo vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 139
**Mối nguy hại của việc sử dụng cáp đồng trục quá dài nối từ máy thu trạm mặt đất tới anten là gì?**

- **A.** Làm sai lệch thời gian chuẩn đồng bộ giữa trạm thu và vệ tinh
- **B.** Suy hao trên cáp làm giảm tín hiệu yếu trước khi vào máy thu
- **C.** Làm tăng tải trọng cơ học đè nặng lên giá đỡ xoay của anten trạm
- **D.** Làm đứt gãy sợi cáp đồng trục do tác động của gió bão ngoài trời

> **Đáp án:** **B**  
> **Giải thích:** Mỗi mét cáp đồng trục ở tần số UHF có thể gây suy hao từ 0.2 dB đến 0.5 dB; do đó bộ LNA thường được gắn trực tiếp ngay tại chân anten.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 140
**Bộ lọc thông dải (BPF - Band Pass Filter) đặt trước tầng LNA của máy thu trạm mặt đất đóng vai trò nào?**

- **A.** Tăng cường mức công suất bức xạ điện từ của khối phát vô tuyến
- **B.** Chặn tín hiệu mạnh ngoài băng làm bão hòa máy thu trạm mặt đất
- **C.** Hạ thấp mức điện áp tĩnh điện tích tụ trên các chấn tử của anten
- **D.** Biến đổi tần số của sóng mang cao tần thu được về dải âm tần

> **Đáp án:** **B**  
> **Giải thích:** Bộ lọc BPF bảo vệ máy thu siêu nhạy không bị nghẹt bởi các nguồn phát xạ vô tuyến mặt đất lân cận.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 141
**Định lý lấy mẫu Nyquist-Shannon quy định tần số lấy mẫu tối thiểu ($f_s$) của bộ SDR để thu tín hiệu có băng thông $B$ là:**

- **A.** fs ≥ 2 × B
- **B.** fs = 100 × B
- **C.** fs = B / 2
- **D.** fs ≥ B

> **Đáp án:** **A**  
> **Giải thích:** Tần số lấy mẫu phải lớn hơn hoặc bằng hai lần tần số cao nhất của tín hiệu để tránh hiện tượng chồng lấn phổ (Aliasing).  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 142
**Phương pháp lấy mẫu trực giao I/Q (In-phase and Quadrature Sampling) trong thiết bị SDR mang lại ưu thế vượt trội nào?**

- **A.** Làm hạ nhiệt độ của bộ vi xử lý trung tâm trên máy tính trạm thu
- **B.** Giảm đáng kể trọng lượng cơ học của hệ thống chấn tử anten trạm
- **C.** Bảo toàn pha và biên độ, phân biệt rõ tần số dương và âm
- **D.** Nâng cao mức điện áp tín hiệu thu nhận được lên gấp nhiều lần

> **Đáp án:** **C**  
> **Giải thích:** Cặp tín hiệu số phức $I + jQ$ cho phép giải điều chế dễ dàng mọi phương thức điều chế hiện đại bằng thuật toán phần mềm.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 143
**Dải động (Dynamic Range) của bộ biến đổi ADC 8-bit trên thiết bị SDR giá rẻ (như RTL-SDR) đạt khoảng bao nhiêu?**

- **A.** 10 dB đến 15 dB
- **B.** 48 dB đến 50 dB
- **C.** 100 dB đến 120 dB
- **D.** 500 dB đến 1000 dB

> **Đáp án:** **B**  
> **Giải thích:** Quy tắc xấp xỉ $6.02\text{ dB/bit}$: ADC 8-bit cho dải động xấp xỉ $8 \times 6.02 \approx 48\text{ dB}$.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 144
**Bộ tiền khuếch đại gắn cột anten (Masthead Preamplifier / Masthead LNA) được lắp đặt ngay tại chân anten trạm mặt đất nhằm mục đích gì?**

- **A.** Tạo tính thẩm mỹ cho cột anten thu phát tín hiệu tại trạm đất
- **B.** Chống sét đánh lan truyền từ các đám mây dông vào hệ thống trạm
- **C.** Khuếch đại tín hiệu cực yếu tại chân anten trước khi qua cáp dài
- **D.** Đo lường hướng gió và vận tốc gió giật tại vị trí lắp đặt anten

> **Đáp án:** **C**  
> **Giải thích:** Đặt LNA trước cáp dài giúp cải thiện tỷ số tạp âm tổng của hệ thống theo công thức chuỗi tầng Friis.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 145
**Trong một phiên vệ tinh bay qua trạm mặt đất, thời điểm 'AOS' (Acquisition of Signal) được định nghĩa là:**

- **A.** Khoảnh khắc vệ tinh lặn hoàn toàn xuống dưới đường chân trời trạm
- **B.** Thời điểm vệ tinh vừa nhô lên khỏi chân trời và bắt đầu thu sóng
- **C.** Thời điểm tên lửa đẩy mang vệ tinh bắt đầu rời khỏi bệ phóng tại
- **D.** Thời điểm vệ tinh di chuyển đến vị trí cự ly gần nhất so với trạm

> **Đáp án:** **B**  
> **Giải thích:** AOS đánh dấu sự khởi đầu của cửa sổ liên lạc; anten bắt đầu chuyển động bám theo tọa độ vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 146
**Vòng hạt Ferrite (Ferrite Choke Bead) kẹp quanh vỏ ngoài cáp đồng trục tiếp sóng anten trạm mặt đất có chức năng gì?**

- **A.** Triệt dòng cao tần chế độ chung trên vỏ cáp, ngăn méo búp sóng
- **B.** Lọc sạch các thành phần tạp âm tần số âm thanh từ microphone trạm
- **C.** Nâng cao mức điện áp cung cấp cho các module điện tử trên bo mạch
- **D.** Gia tăng trọng lượng của sợi cáp đồng trục để chống gió lay lắc

> **Đáp án:** **A**  
> **Giải thích:** Ferrite choke hoạt động như một cuộn cảm Balun chặn dòng phản xạ cao tần chạy ngược về phòng máy theo vỏ bọc cáp.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 147
**Cặp byte ma thuật (Magic Bytes / Sync Word) phổ biến nào thường được đặt ở đầu cấu trúc gói tin C++ để định vị khung truyền?**

- **A.** 0x55 0xAA
- **B.** 0xFF 0xFF
- **C.** 0x00 0x00
- **D.** 0x12 0x34

> **Đáp án:** **A**  
> **Giải thích:** Mẫu bit xen kẽ $0x55 (01010101)$ và $0xAA (10101010)$ tạo ra chuỗi chuyển tiếp mức logic dày đặc giúp bộ thu bắt đúng điểm bắt đầu khung.  
> **Mục tiêu củng cố:** Hiểu cấu trúc gói viễn lệnh và cơ chế phản hồi chấp hành  

---

### Câu 148
**Trong giao thức Stop-and-Wait ARQ, biến lưu mốc thời gian bắt đầu gửi gói để tính Timeout trong C++ được gán bằng lệnh nào?**

- **A.** Gọi hàm micros() lấy mốc thời gian hệ thống theo micro-giây
- **B.** Gán mốc thời gian khởi tạo ban đầu về giá trị bằng số 0
- **C.** Gọi hàm millis() lấy mốc thời gian mili-giây tại thời điểm phát gói
- **D.** Sử dụng hàm delay(1000) tạo khoảng trễ 1 giây trước khi gửi

> **Đáp án:** **C**  
> **Giải thích:** Ghi nhận mốc thời gian hệ thống tại thời điểm phát gói tin là bước đầu tiên để kích hoạt bộ đếm thời gian Timeout.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 149
**Điều kiện kiểm tra Timeout trong vòng lặp chờ phản hồi ACK của giao thức ARQ trong C++ là:**

- **A.** Kiểm tra số byte sẵn sàng trong bộ đệm cổng nối tiếp bằng 0
- **B.** Kiểm tra mốc thời gian gửi ban đầu có lớn hơn 1000 hay không
- **C.** Lấy millis() hiện tại trừ mốc gửi ban đầu lớn hơn ngưỡng ACK_TIMEOUT_MS
- **D.** So sánh thời gian chạy hệ thống millis() bằng đúng 1000

> **Đáp án:** **C**  
> **Giải thích:** Phép trừ không phong bế xác định chính xác thời điểm thời gian chờ phản hồi đã vượt quá ngưỡng quy định (ví dụ 1000ms).  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 150
**Nếu sau khi nhận đủ các byte của gói tin mà việc tính toán lại mã CRC không trùng khớp với mã CRC ghi trong gói, hành vi xử lý của máy thu là gì?**

- **A.** Chuyển tiếp gói tin lỗi đó lên hiển thị trên màn hình trạm thu đất
- **B.** Hủy bỏ gói tin lỗi, không xử lý payload và chờ gói tiếp theo
- **C.** Vẫn chấp nhận dữ liệu bị sai lệch để xử lý tiếp trong phần mềm
- **D.** Khởi động lại toàn bộ vi điều khiển trung tâm ngay lập tức tức thì

> **Đáp án:** **B**  
> **Giải thích:** Loại bỏ gói tin hỏng bảo vệ các tầng ứng dụng cấp cao không bị sai lệch dữ liệu hoặc thực thi lệnh bậy.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 151
**Nếu mã CRC kiểm tra hoàn toàn trùng khớp, máy thu sẽ thực hiện những hành động kế tiếp nào?**

- **A.** Thay đổi tần số phát sóng của module thu phát sang một kênh khác
- **B.** Đóng cổng giao tiếp nối tiếp UART để ngăn nhận thêm các dữ liệu
- **C.** Xử lý payload, tăng biến đếm nhận và gửi gói phản hồi ACK
- **D.** Xóa toàn bộ các vùng nhớ đệm đã cấp phát bên trong bộ nhớ RAM tĩnh

> **Đáp án:** **C**  
> **Giải thích:** Sau khi xác thực tính toàn vẹn, gói tin hợp lệ được tiếp nhận và phản hồi ACK để bên phát tiếp tục truyền.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 152
**Khi phát hiện một gói tin bị thiếu trong danh sách (ví dụ gói thứ `i` chưa nhận được), trạm mặt đất có thể gửi yêu cầu phát lại bằng bản tin nào?**

- **A.** Tạo gói phản hồi loại PKT_ACK và gán trường số thứ tự seq bằng i
- **B.** Tạo gói phản hồi loại PKT_ERR và gán trường số thứ tự seq bằng i
- **C.** Tạo gói phản hồi loại PKT_CMD và gán trường số thứ tự seq bằng i
- **D.** Tạo gói phản hồi tiêu cực PKT_NACK chỉ định rõ số thứ tự mảnh bị thiếu

> **Đáp án:** **D**  
> **Giải thích:** Gói NACK chỉ định rõ số thứ tự của mảnh dữ liệu bị thiếu, kích hoạt bên phát gửi bù đúng mảnh đó (Selective Repeat).  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 153
**Để tăng tốc độ tính toán mã CRC-16 trong C++ mà không tốn chu kỳ tính toán bit-by-bit của CPU, giải pháp tối ưu là gì?**

- **A.** Tăng điện áp cung cấp cho khối vi xử lý trung tâm trên bo
- **B.** Dùng bảng tra 256 phần tử tính trước trong bộ nhớ Flash
- **C.** Vô hiệu hóa hoàn toàn bước kiểm tra tính toàn vẹn bằng CRC
- **D.** Chuyển sang sử dụng các biến số thực dấu phẩy động 64-bit

> **Đáp án:** **B**  
> **Giải thích:** Bảng tra cứu CRC xử lý nguyên 1 byte trong 1 thao tác tra mảng duy nhất, nhanh hơn gấp 8-10 lần so với vòng lặp dịch bit.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 154
**Khai báo bảng tra cứu CRC-16 trong bộ nhớ Flash của ESP32 bằng từ khóa nào để không làm tốn ô nhớ RAM?**

- **A.** Sử dụng từ khóa volatile để lưu bảng tra cứu vào bộ nhớ biến đổi
- **B.** Sử dụng từ khóa PROGMEM (hoặc const) để lưu bảng tra cứu vào bộ nhớ Flash ROM
- **C.** Cấp phát động bảng tra cứu trên vùng nhớ Heap bằng toán tử new
- **D.** Khai báo bảng tra cứu như một mảng cục bộ tự động trong thân hàm

> **Đáp án:** **B**  
> **Giải thích:** Từ khóa PROGMEM (hoặc const trong ESP32) bảo đảm bảng dữ liệu 512 byte được nạp vào Flash và đọc trực tiếp qua cache.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 155
**Tại sao tác vụ tiếp nhận lệnh đường lên (COM Rx Task) nên được gán độ ưu tiên (Priority) cao hơn tác vụ phát telemetry đường xuống?**

- **A.** Khối mạch thu vô tuyến tiêu thụ ít dòng điện hơn bộ phát
- **B.** Viễn lệnh khẩn cấp từ trạm luôn được xử lý tức thì, không trễ
- **C.** Tùy thuộc vào sở thích sắp xếp của người lập trình phần mềm
- **D.** Đường truyền lên có bước sóng ngắn hơn đường truyền xuống

> **Đáp án:** **B**  
> **Giải thích:** Ưu tiên tiếp nhận lệnh là nguyên tắc sống còn để mặt đất có thể can thiệp xử lý ngay các sự cố bất thường của vệ tinh.  
> **Mục tiêu củng cố:** Hiểu cấu trúc gói viễn lệnh và cơ chế phản hồi chấp hành  

---

### Câu 156
**Trong thuật toán tái cấu trúc ảnh từ các mảnh gói tin, làm thế nào để trạm mặt đất biết được dung lượng thực tế của bức ảnh?**

- **A.** Chuẩn mã hóa dòng bảo mật tốc độ thấp chuẩn quốc tế DES
- **B.** Mã hóa khóa đối xứng AES-128 hoặc AES-256 kèm mã HMAC
- **C.** Thuật toán mã hóa hoán vị ký tự đơn giản kiểu Caesar
- **D.** Không cần bất kỳ cơ chế mã hóa nào để tiết kiệm bộ nhớ

> **Đáp án:** **D**  
> **Giải thích:** Gói tin thông báo bắt đầu phiên truyền (Start-of-Transfer Packet) cung cấp tên tệp, dung lượng và bảng băm MD5/CRC của bức ảnh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 157
**Để yêu cầu vệ tinh gửi lại danh sách các mảnh gói tin bị mất, trạm mặt đất có thể đóng gói mảng danh sách các số thứ tự `missingSeqs[]` vào một bản tin:**

- **A.** Tạo gói tin NACK đơn lẻ cho từng mảnh gói tin bị thiếu riêng biệt
- **B.** Tạo gói tin chứa danh sách mảng số thứ tự của tất cả các gói tin bị thiếu
- **C.** Yêu cầu phát lại toàn bộ tệp tin từ gói đầu tiên cho đến gói cuối
- **D.** Tự động chèn các byte 0 thay thế cho những mảnh gói tin bị thất lạc

> **Đáp án:** **B**  
> **Giải thích:** Bản tin yêu cầu phát lại chọn lọc (Selective Repeat NACK List) gom nhiều mảnh thiếu vào một gói duy nhất, tối ưu hóa băng thông đường lên.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 158
**Để giải phóng bộ đệm nhận UART nếu gặp chuỗi dữ liệu hỏng kéo dài không tìm thấy Sync Word, giải thuật C++ là:**

- **A.** Hệ thống trạm thu mặt đất đã bị mất hoàn toàn nguồn điện lưới
- **B.** Vệ tinh đang rơi vào vùng bóng tối phía sau của Trái Đất
- **C.** Vệ tinh ở khoảng cách gần nhất và SNR đạt giá trị cực đại
- **D.** Tốc độ quay của động cơ bám hướng anten trạm đạt cực đại

> **Đáp án:** **A**  
> **Giải thích:** Dịch trượt từng byte (Sliding Window Byte-by-Byte Search) là phương pháp chuẩn để tái đồng bộ luồng dữ liệu nhị phân khi bị mất khung.  
> **Mục tiêu củng cố:** Hiểu cấu trúc gói viễn lệnh và cơ chế phản hồi chấp hành  

---

### Câu 159
**Khối mã C++ nào sau đây chuyển đổi an toàn giữa một mảng ký tự định dạng telemetry và mảng byte nhị phân để phát vô tuyến:**

- **A.** Gán trực tiếp con trỏ chuỗi vào mảng byte của gói tin bằng phép gán
- **B.** Dùng memcpy() hoặc hàm sao chép có kiểm soát độ dài để chép chuỗi vào tải trọng gói
- **C.** Chuyển đổi chuỗi sang số thực trước khi đưa vào mảng dữ liệu gói
- **D.** In chuỗi trực tiếp ra thanh ghi ngoại vi mà không qua mảng bộ đệm

> **Đáp án:** **B**  
> **Giải thích:** Cả hàm memcpy và strcpy (có kiểm soát độ dài) đều sao chép an toàn chuỗi ký tự vào mảng bộ đệm payload của gói tin nhị phân.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 160
**Để ngăn ngừa hiện tượng vệ tinh phát sóng đè lên lệnh gửi từ trạm mặt đất, giao thức truyền tin nên quy định cửa sổ lắng nghe như thế nào?**

- **A.** Trạm mặt đất tuyệt đối không được phép phát lệnh điều khiển
- **B.** Vệ tinh chỉ được phép phát sóng vô tuyến khi vào vùng tối
- **C.** Vệ tinh liên tục phát sóng công suất cao không ngừng nghỉ
- **D.** Sau chu kỳ phát viễn đo, vệ tinh duy trì thời gian lắng nghe

> **Đáp án:** **D**  
> **Giải thích:** Dành cửa sổ thời gian tĩnh cho chiều Uplink bảo đảm trạm mặt đất luôn có cơ hội chèn viễn lệnh điều khiển vào vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 161
**Thời gian của một phiên liên lạc điển hình giữa vệ tinh LEO và một trạm mặt đất kéo dài bao lâu?**

- **A.** 10 đến 12 phút mỗi lượt bay qua
- **B.** 50 đến 60 phút mỗi lượt bay qua
- **C.** 25 đến 35 giây mỗi lượt bay qua
- **D.** 12 đến 24 giờ liên tục không ngắt

> **Đáp án:** **A**  
> **Giải thích:** Do chuyển động tương đối nhanh ở quỹ đạo thấp, cửa sổ liên lạc trực tiếp (Line-of-Sight) của vệ tinh với một trạm mặt đất chỉ kéo dài khoảng 10 đến 12 phút mỗi pass.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 162
**Tổng thời gian liên lạc hữu dụng trung bình mỗi ngày giữa vệ tinh LEO với một trạm mặt đất duy nhất là bao nhiêu?**

- **A.** 40 đến 48 phút chia thành 4 phiên bay
- **B.** 5 đến 6 giờ liên tục vào ban ngày
- **C.** 10 đến 12 giờ khi qua vùng cực
- **D.** 1 đến 2 phút do suy hao khí quyển

> **Đáp án:** **A**  
> **Giải thích:** Một trạm mặt đất thường chỉ đón được khoảng 4 phiên bay thuận lợi mỗi ngày (mỗi phiên ~10-12 phút), tổng thời gian tiếp xúc thực tế chỉ khoảng 40 đến 48 phút/ngày.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 163
**Định dạng thông số quỹ đạo Two-Line Element (TLE) từ CelesTrak được trạm mặt đất dùng để làm gì?**

- **A.** Tính toán chính xác quỹ đạo chuyển động để điều khiển góc quay anten bám theo
- **B.** Giải mã khóa mật mã của các bức ảnh nén tải xuống từ bộ nhớ flash
- **C.** Đo đạc nồng độ các hạt mang điện tự do trong tầng đối lưu của khí quyển
- **D.** Kiểm tra mức độ hao mòn cơ học của các vòng bi trong động cơ tên lửa đẩy

> **Đáp án:** **A**  
> **Giải thích:** Bộ tham số TLE chứa 2 dòng dữ liệu mô tả các yếu tố quỹ đạo Keplerian tại một thời điểm, giúp phần mềm mặt đất (như Gpredict) tính góc Azimuth/Elevation để quay anten đón bắt vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 164
**Giải pháp kỹ thuật tại trạm mặt đất để duy trì kết nối khi xuất hiện hiệu ứng Doppler là gì?**

- **A.** Phần mềm tự động điều chỉnh tần số thu phát bám theo đường cong dịch tần
- **B.** Tăng kích thước vật lý của chảo anten parabol lên gấp mười lần kích thước
- **C.** Yêu cầu vệ tinh giảm vận tốc bay trên quỹ đạo khi đến gần trạm mặt đất
- **D.** Chuyển toàn bộ dữ liệu truyền thông sang dạng sóng âm thanh tần số thấp

> **Đáp án:** **A**  
> **Giải thích:** Phần mềm điều khiển trạm mặt đất liên tục tính toán độ lệch Doppler và điều khiển máy thu phát SDR bù trừ tần số thời gian thực (Programmed Doppler Control) để không bị mất khóa tín hiệu.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 165
**Loại anten định hướng phổ biến nhất dùng cho dải tần VHF/UHF tại trạm mặt đất nghiệp dư là gì?**

- **A.** Dàn anten Yagi nhiều chấn tử có độ lợi cao và chi phí chế tạo hợp lý
- **B.** Chảo parabol đường kính lớn ba mươi mét bằng thép chịu lực cao
- **C.** Anten roi đơn hướng gắn trên nóc các phương tiện giao thông cá nhân
- **D.** Dây dẫn dài treo lơ lửng bằng khí cầu bay ở tầng bình lưu khí quyển

> **Đáp án:** **A**  
> **Giải thích:** Anten mảng Yagi-Uda cung cấp độ lợi định hướng tốt (12-16 dBi), góc mở chùm sóng vừa phải dễ bám bám theo vệ tinh LEO bằng các bộ xoay Azimuth/Elevation giá rẻ.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 166
**Anten chảo parabol tại trạm mặt đất thường được ưu tiên sử dụng cho dải tần nào?**

- **A.** Dải tần cao như S-band và X-band đòi hỏi độ lợi khuếch đại rất lớn
- **B.** Dải sóng trung AM truyền thanh phục vụ phát thanh địa phương mặt đất
- **C.** Dải tần cực thấp dùng trong liên lạc xuyên qua đáy biển cho tàu ngầm
- **D.** Dải tần số âm thanh con người có thể nghe thấy trực tiếp bằng tai

> **Đáp án:** **A**  
> **Giải thích:** Chảo parabol hội tụ sóng điện từ bước sóng ngắn (S/X-band) tạo độ lợi rất cao (trên 30 dBi), cần thiết để thu các luồng dữ liệu tốc độ cao (Mbps) từ vệ tinh nhỏ.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 167
**Chức năng của gói tin quảng bá định kỳ (Broadcast Telemetry Beacon) là gì?**

- **A.** Phát thông tin trạng thái sức khỏe cơ bản cho mọi đài thu nghiệp dư trên thế giới
- **B.** Gửi mật khẩu truy cập hệ thống máy tính bay cho các trạm mặt đất thương mại
- **C.** Đo đạc nồng độ bụi không gian tích tụ trên bề mặt các tấm pin quang điện
- **D.** Cảnh báo các máy bay dân dụng tránh xa đường bay của vệ tinh trên quỹ đạo

> **Đáp án:** **A**  
> **Giải thích:** Broadcast Beacon phát tự động định kỳ (ví dụ mỗi 30 hoặc 60 giây), giúp mạng lưới cộng đồng vô tuyến nghiệp dư toàn cầu thu bắt và chuyển tiếp dữ liệu về cho nhóm nghiên cứu.  
> **Mục tiêu củng cố:** Nắm vững thuật toán kiểm tra lỗi CRC-16-CCITT và cơ chế truyền lại ARQ  

---

### Câu 168
**Trạm mặt đất gửi gói tin đồng bộ thời gian (Time Synchronization) lên vệ tinh nhằm mục đích gì?**

- **A.** Hiệu chỉnh độ trôi của đồng hồ thời gian thực RTC trên bo mạch chính OBC
- **B.** Tăng tốc độ quay của Trái Đất để rút ngắn thời gian ban đêm trên quỹ đạo
- **C.** Lập trình lại toàn bộ bảng mã lệnh xử lý của hệ điều hành nhúng trên chip
- **D.** Đo đạc chính xác nhiệt độ sôi của nước bên trong bình chứa áp suất cao

> **Đáp án:** **A**  
> **Giải thích:** Bộ dao động thạch anh trên vệ tinh chịu sự thay đổi nhiệt độ liên tục nên đồng hồ RTC luôn bị trôi; việc gửi gói tin UTC từ trạm mặt đất giúp đồng bộ lại đồng hồ vệ tinh định kỳ.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

### Câu 169
**Trang Web Cấu Hình PTITCube RF Configurator kết nối và truyền nhận lệnh cấu hình trực tiếp với module LoRa E32 / AS32 thông qua công nghệ trình duyệt nào mà không cần cài đặt phần mềm máy tính trung gian?**

- **A.** Web Serial API trên các trình duyệt hiện đại (như Google Chrome, Microsoft Edge)
- **B.** Adobe Flash Player plugin
- **C.** Giao thức mạng Bluetooth Web BLE
- **D.** Giao thức WebSocket kết nối về máy chủ điện toán đám mây

> **Đáp án:** **A**  
> **Giải thích:** Trang Web Cấu Hình PTITCube RF Configurator sử dụng Web Serial API cho phép trình duyệt web truy cập trực tiếp vào các cổng nối tiếp USB-to-UART trên máy tính để đọc và ghi tham số module LoRa.  
> **Mục tiêu củng cố:** Hiểu cấu trúc gói viễn lệnh và cơ chế phản hồi chấp hành  

---

### Câu 170
**Để thiết lập module LoRa phát quảng bá (Broadcast) đến tất cả các trạm mặt đất hoặc vệ tinh khác trong cùng kênh tần số, hai byte địa chỉ ADDH và ADDL trên Web Configurator cần được đặt là giá trị nào?**

- **A.** ADDH = 0xFF, ADDL = 0xFF (Địa chỉ 0xFFFF)
- **B.** ADDH = 0x00, ADDL = 0x00 (Địa chỉ 0x0000)
- **C.** ADDH = 0x12, ADDL = 0x34
- **D.** ADDH = 0xEE, ADDL = 0xEE

> **Đáp án:** **A**  
> **Giải thích:** Trong giao thức truyền tin LoRa E32/AS32, địa chỉ 0xFFFF (ADDH=0xFF, ADDL=0xFF) được quy ước là địa chỉ phát quảng bá (Broadcast); mọi máy thu có cùng kênh CHAN sẽ đều nhận được gói tin này.  
> **Mục tiêu củng cố:** Nắm vững cấu hình trạm mặt đất SDR, biểu đồ thác nước và phần tử quỹ đạo TLE  

---

## 📖 Doc 5.2: Công Nghệ Trải Phổ LoRa CSS & Module Ebyte E32-433T20D (22 câu)

### Câu 171
**Trong module vô tuyến thực hành LoRa Ebyte E32, vi mạch thu phát cao tần lõi được tích hợp bên trong là dòng vi mạch nào?**

- **A.** ESP32
- **B.** Semtech SX1278
- **C.** Atmega328P
- **D.** NE555

> **Đáp án:** **B**  
> **Giải thích:** Ebyte E32 đóng gói chip thu phát vô tuyến LoRa SX1278 của hãng Semtech kết hợp bộ vi điều khiển phụ quản lý giao thức AT/UART.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 172
**Tần số sóng mang trung tâm mặc định của module thực hành Ebyte E32-433T20D là bao nhiêu?**

- **A.** 2.4 GHz
- **B.** 433 MHz
- **C.** 868 MHz
- **D.** 915 MHz

> **Đáp án:** **B**  
> **Giải thích:** Module hoạt động ở dải tần số 433 MHz thuộc băng tần mở ISM / nghiệp dư.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 173
**Công suất phát bức xạ tối đa của module thực hành Ebyte E32-433T20D là bao nhiêu?**

- **A.** 10 Watt
- **B.** 1 mW
- **C.** 20 dBm
- **D.** 50 Watt

> **Đáp án:** **C**  
> **Giải thích:** Mức công suất +20 dBm (100 mW) an toàn trong phòng thí nghiệm và đủ để thử nghiệm thu phát ngoài thực địa cự ly vài km.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 174
**Module Ebyte E32 giao tiếp với vi điều khiển OBC thông qua chuẩn giao diện phần cứng nào?**

- **A.** Giao diện bus truyền thông nối tiếp I2C hai dây tốc độ chuẩn
- **B.** Giao diện bus mạng vi sai điều khiển công nghiệp chuẩn CAN
- **C.** Cổng nối tiếp UART bất đồng bộ ở mức điện áp logic TTL 3.3V
- **D.** Giao tiếp nối tiếp đồng bộ 4 dây theo chuẩn công nghiệp SPI

> **Đáp án:** **C**  
> **Giải thích:** Vi điều khiển phụ trên E32 chuyển đổi dữ liệu truyền nhận qua cổng UART đơn giản, giảm tải xử lý cho vi điều khiển chính OBC.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 175
**Hai chân cấu hình chế độ hoạt động `M0` và `M1` trên module E32 cho phép thiết lập bao nhiêu chế độ vận hành?**

- **A.** Hỗ trợ thiết lập tối đa 8 chế độ hoạt động chuyên biệt khác nhau
- **B.** Cấu hình được tới 16 trạng thái vận hành độc lập trên bo mạch
- **C.** 4 chế độ: Normal, Wake-up, Power-saving và Sleep/Program
- **D.** Chỉ cho phép chuyển đổi qua lại giữa đúng 2 chế độ cơ bản

> **Đáp án:** **C**  
> **Giải thích:** Tổ hợp logic của 2 chân M0 và M1 xác định trạng thái chức năng của module vô tuyến.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 176
**Khi cả hai chân `M0 = 0` và `M1 = 0` (đều ở mức logic LOW), module E32 hoạt động ở chế độ nào?**

- **A.** Chế độ ngủ sâu
- **B.** Chế độ hoạt động bình thường
- **C.** Chế độ cài đặt tham số
- **D.** Chế độ tự hủy

> **Đáp án:** **B**  
> **Giải thích:** Ở Mode 0 (Normal), dữ liệu gửi vào chân RXD của E32 sẽ lập tức được đóng gói và phát ra anten vô tuyến.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 177
**Khi cấu hình chân `M0 = 1` và `M1 = 1` (đều ở mức logic HIGH), module E32 chuyển sang chế độ nào?**

- **A.** Chế độ sạc pin
- **B.** Chế độ chụp ảnh
- **C.** Chế độ phát công suất cực đại
- **D.** Chế độ Sleep / Cấu hình

> **Đáp án:** **D**  
> **Giải thích:** Ở Mode 3, người dùng có thể gửi các lệnh cấu hình tốc độ baud, địa chỉ kênh và công suất phát vào bộ nhớ EEPROM của module.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 178
**Chân tín hiệu chỉ thị `AUX` trên module Ebyte E32 có đặc điểm trạng thái hoạt động nào?**

- **A.** Liên tục phát ra tín hiệu xung nhịp đồng bộ tần số 100 MHz
- **B.** Luôn duy trì cố định ở mức logic HIGH trong suốt quá trình chạy
- **C.** Chân chuyên dụng dùng để cung cấp điện áp nguồn nuôi cho mạch
- **D.** Mức HIGH khi rảnh rỗi sẵn sàng, chuyển LOW khi module đang bận

> **Đáp án:** **D**  
> **Giải thích:** Chân AUX đóng vai trò tín hiệu bắt tay phần cứng (Hardware Flow Control): Master phải chờ AUX lên HIGH mới được gửi dữ liệu tiếp theo.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 179
**Nếu vi điều khiển cố tình đẩy dữ liệu vào cổng UART của E32 trong khi chân `AUX` đang ở mức LOW, hậu quả là gì?**

- **A.** Dữ liệu bị tràn đệm FIFO nội bộ dẫn tới mất gói hoặc lỗi cấu hình
- **B.** Tốc độ truyền dữ liệu qua không gian được tự động gia tốc nhanh
- **C.** Vi điều khiển trung tâm tự động kích hoạt tiến trình khởi động lại
- **D.** Module thu phát E32 bị chập nguồn điện và hư hỏng phần cứng vĩnh

> **Đáp án:** **A**  
> **Giải thích:** Mức LOW của AUX cảnh báo bộ đệm đang bận xử lý; gửi dữ liệu lúc này có nguy cơ gây tràn bộ đệm FIFO.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 180
**Bộ đệm truyền nhận FIFO tích hợp bên trong module Ebyte E32 có dung lượng bao nhiêu byte?**

- **A.** 16 byte
- **B.** 64 byte
- **C.** 4096 byte
- **D.** 512 byte

> **Đáp án:** **D**  
> **Giải thích:** Bộ đệm 512 bytes cho phép module lưu trữ tạm thời các gói tin từ UART trước khi chuyển qua bộ điều chế vô tuyến.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 181
**Chế độ truyền 'Trong suốt' (Transparent Transmission) của module E32 hoạt động theo nguyên tắc nào?**

- **A.** Dữ liệu đưa vào RXD bên phát sẽ xuất nguyên vẹn tại TXD bên thu
- **B.** Hệ thống chỉ cho phép truyền tải duy nhất một byte dữ liệu đơn
- **C.** Toàn bộ các ký tự nhị phân truyền đi bị biến đổi thành khoảng
- **D.** Dữ liệu số được chuyển đổi thành chuỗi âm thanh để truyền phát

> **Đáp án:** **A**  
> **Giải thích:** Chế độ trong suốt biến module không dây thành một đường dây nối tiếp ảo (Virtual Serial Cable) kéo dài giữa hai thiết bị.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 182
**Chế độ truyền 'Định hướng theo địa chỉ' (Fixed-point Transmission) của E32 yêu cầu 3 byte đầu tiên gửi vào UART là gì?**

- **A.** Chuỗi ký tự định danh của người kỹ sư đang phụ trách phiên truyền
- **B.** Tọa độ địa lý thu được từ máy thu định vị toàn cầu của trạm thu
- **C.** Khóa mật khẩu kết nối vào mạng không dây cục bộ của thiết bị thu
- **D.** Byte địa chỉ cao, địa chỉ thấp và byte kênh tần số đích

> **Đáp án:** **D**  
> **Giải thích:** Truyền định hướng cho phép một trạm phát có thể chỉ định chính xác thiết bị nào trong mạng được phép nhận gói tin.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 183
**Tốc độ baud rate cổng UART giao tiếp giữa ESP32 và module E32 mặc định xuất xưởng là bao nhiêu?**

- **A.** 9600 bps
- **B.** 1200 bps
- **C.** 1000000 bps
- **D.** 115200 bps

> **Đáp án:** **A**  
> **Giải thích:** Baud rate 9600 bps là giá trị mặc định bảo đảm độ ổn định truyền nhận giữa MCU và module.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 184
**Tốc độ truyền dữ liệu qua sóng vô tuyến (Air Data Rate) của module E32 có thể cấu hình trong dải nào?**

- **A.** 0.3 kbps đến 19.2 kbps
- **B.** 1.0 bps đến 10.0 bps
- **C.** 50 Mbps đến 100 Mbps
- **D.** 500 Mbps đến 1.0 Gbps

> **Đáp án:** **A**  
> **Giải thích:** Air Data Rate càng thấp (như 0.3 kbps) thì độ nhạy thu càng cao và tầm truyền càng xa, nhưng thời gian chiếm sóng càng dài.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 185
**Khoảng cách kênh tần số (Channel Spacing) giữa các kênh cấu hình trên module E32 là bao nhiêu?**

- **A.** 10 kHz
- **B.** 10 MHz
- **C.** 100 MHz
- **D.** 1 MHz

> **Đáp án:** **D**  
> **Giải thích:** Mỗi bước nhảy kênh tăng thêm 1 MHz, cho phép chuyển đổi kênh tần số linh hoạt để tránh các nguồn nhiễu cục bộ.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 186
**Để bảo đảm an toàn khi thử nghiệm module E32 trong phòng lab, nguyên tắc bắt buộc về mặt phần cứng là gì?**

- **A.** Dữ liệu cấu hình chỉ được lưu tạm thời trên bộ nhớ RAM dễ mất
- **B.** Lưu cấu hình vào bộ nhớ Flash để giữ nguyên giá trị khi mất nguồn
- **C.** Khởi động lại toàn bộ module thu phát về cài đặt gốc ban đầu
- **D.** Chuyển module sang chế độ truyền dữ liệu không dây tốc độ cao

> **Đáp án:** **C**  
> **Giải thích:** Nếu phát sóng khi hở mạch anten, toàn bộ năng lượng cao tần sẽ phản xạ ngược lại làm cháy transistor công suất của tầng PA.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 187
**Để cấu hình module E32 vào chế độ Sleep/Program Mode nhằm ghi cài đặt thanh ghi mới, trạng thái chân GPIO cần xuất ra là:**

- **A.** Kéo đồng thời cả hai chân M0 và M1 xuống mức logic LOW
- **B.** Cấu hình chân M0 ở chế độ ngõ vào INPUT trở kháng cao
- **C.** Kéo đồng thời cả hai chân M0 và M1 lên mức logic HIGH và chờ ổn định
- **D.** Kéo chân M0 lên mức logic HIGH và kéo chân M1 xuống mức logic LOW

> **Đáp án:** **C**  
> **Giải thích:** Kéo cả M0 và M1 lên mức HIGH đưa E32 vào Mode 3; cần chờ tối thiểu 20ms để module ổn định chế độ.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 188
**Để gửi lệnh chuyển kênh tần số mới cho module E32 bằng lệnh cấu hình nhị phân qua UART trong C++, cấu trúc lệnh 3-byte bắt đầu là:**

- **A.** Gửi mảng byte cấu hình bắt đầu bằng mã lệnh đọc thông số 0xC1
- **B.** Gửi chuỗi văn bản ASCII chứa các tham số cấu hình lên module
- **C.** Gửi chuỗi byte cấu hình bắt đầu bằng 0xC0 để lưu thông số vào EEPROM
- **D.** Gửi trực tiếp tần số làm việc bằng một byte số nguyên đơn lẻ

> **Đáp án:** **C**  
> **Giải thích:** Mã 0xC0 thông báo lệnh ghi cấu hình lưu vào EEPROM của E32, theo sau bởi địa chỉ thanh ghi kênh và giá trị kênh mới.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 189
**Để cấu hình các tham số hoạt động (tần số, công suất, tốc độ truyền) cho module LoRa E32 / AS32 bằng Trang Web Cấu Hình PTITCube RF Configurator, module cần được thiết lập ở trạng thái phần cứng nào?**

- **A.** Đưa module về chế độ Cấu hình/Ngủ (Mode 3: M0 = HIGH, M1 = HIGH) và kết nối qua cổng nối tiếp ở tốc độ 9600 bps
- **B.** Đưa module về chế độ bình thường (Mode 0: M0 = LOW, M1 = LOW) và truyền ở tốc độ 115200 bps
- **C.** Tháo anten và nối tắt chân M0 xuống GND
- **D.** Ngắt chân nguồn VCC và cấp điện trực tiếp vào chân AUX

> **Đáp án:** **A**  
> **Giải thích:** Để ghi hoặc đọc các thanh ghi thông số trên module LoRa E32/AS32 thông qua Trang Web Cấu Hình (PTITCube RF Configurator), module bắt buộc phải ở Mode 3 (M0 = 1, M1 = 1) và cổng nối tiếp UART giao tiếp ở tốc độ chuẩn định danh 9600 bps.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 190
**Trong khung dữ liệu cấu hình 6-byte của module LoRa E32 / AS32, byte đầu tiên mang giá trị `0xC0` có ý nghĩa kỹ thuật gì?**

- **A.** Lưu vĩnh viễn các tham số cấu hình vào bộ nhớ EEPROM của module (tham số không bị mất khi mất điện hoặc reset)
- **B.** Lưu tạm thời các tham số cấu hình vào bộ nhớ RAM (tham số sẽ mất sau khi khởi động lại nguồn)
- **C.** Xóa sạch toàn bộ firmware nội bộ của chip SX1278
- **D.** Kích hoạt chế độ phát sóng kiểm tra công suất tối đa

> **Đáp án:** **A**  
> **Giải thích:** Byte lệnh 0xC0 chỉ thị module ghi đè các tham số cấu hình vào bộ nhớ EEPROM không bay hơi (Permanent Save), giúp module giữ nguyên cấu hình này cho các lần khởi động tiếp theo.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 191
**Nếu người dùng muốn cấu hình thử nghiệm tạm thời các thông số tần số và tốc độ của LoRa mà không muốn lưu vĩnh viễn vào EEPROM, byte lệnh đầu tiên trong khung cấu hình 6-byte được gửi từ Web Configurator là:**

- **A.** 0xC2 (Ghi thông số tạm thời vào RAM, mất sau khi reset)
- **B.** 0xC0 (Ghi cố định vào EEPROM)
- **C.** 0xFF (Xóa toàn bộ thanh ghi)
- **D.** 0x00 (Khóa không cho phép cấu hình)

> **Đáp án:** **A**  
> **Giải thích:** Mã lệnh 0xC2 chỉ thị module áp dụng ngay cấu hình vào thanh ghi RAM đang hoạt động nhưng không ghi vào EEPROM, giúp bảo vệ số lần ghi của EEPROM khi đang thử nghiệm.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

### Câu 192
**Chuỗi 3-byte nào được Trang Web Cấu Hình PTITCube RF Configurator gửi qua cổng nối tiếp ở Mode 3 để yêu cầu module E32/AS32 phản hồi các tham số cấu hình hiện tại?**

- **A.** 0xC1 0xC1 0xC1
- **B.** 0xAA 0x55 0xAA
- **C.** 0xFF 0xFF 0xFF
- **D.** 0x00 0x00 0x00

> **Đáp án:** **A**  
> **Giải thích:** Khi nhận được chuỗi lệnh 3 byte 0xC1 0xC1 0xC1 ở Mode 3 (tốc độ 9600 bps), module LoRa sẽ lập tức gửi trả về khung 6 byte chứa toàn bộ cấu hình hiện hành của nó.  
> **Mục tiêu củng cố:** Nắm vững kỹ thuật trải phổ LoRa CSS, chế độ hoạt động và sơ đồ chân module E32  

---

## 💻 Thực hành: Đóng Gói & Phát Viễn Trắc Telemetry Kèm Mã CRC-16 (Lab5-01a, Lab5-01b) (29 câu)

### Câu 193
**Hàm C++ nào sau đây cài đặt thuật toán tính mã kiểm tra CRC-16 CCITT (đa thức 0x1021) cho mảng byte dữ liệu?**

- **A.** Nhân đôi chiều dài gói tin để làm giá trị băm kiểm tra toàn vẹn
- **B.** Cộng đại số byte đầu tiên và byte cuối cùng của khung truyền
- **C.** Luôn trả về giá trị hằng số cố định 0xFFFF bất kể nội dung gói
- **D.** Tính toán theo đa thức sinh tiêu chuẩn 0x1021 qua hàm crc16_ccitt()

> **Đáp án:** **D**  
> **Giải thích:** Giải thuật chuẩn CRC-16 CCITT lặp qua từng byte, dịch bit và thực hiện phép chia đa thức XOR với giá trị $0x1021$.  
> **Mục tiêu củng cố:** Lập trình đóng gói cấu trúc viễn trắc Telemetry và tính mã kiểm tra lỗi CRC-16  

---

### Câu 194
**Đoạn mã C++ nào sau đây biểu diễn hàm gửi một gói tin cấu trúc qua cổng nối tiếp UART của module COM?**

- **A.** Tạo tiếng bíp phát thanh trên các máy thu vô tuyến của người nghe
- **B.** Tự động tắt nguồn phân hệ truyền thông để bảo vệ các linh kiện ngoài
- **C.** Gửi báo cáo sự cố phần cứng khẩn cấp về cho trung tâm điều hành đất
- **D.** Báo nhận ACK, phát hiện gói mất và yêu cầu gửi lại qua NACK

> **Đáp án:** **B**  
> **Giải thích:** Ép kiểu con trỏ cấu trúc thành mảng byte thô `(const uint8_t*)` và xuất trực tiếp bằng `Serial.write` bảo đảm truyền nguyên vẹn dữ liệu nhị phân.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 195
**Đoạn mã C++ nào sau đây trích xuất từng khối 128 byte từ tệp đang mở trên thẻ nhớ để chuẩn bị đóng gói phân mảnh?**

- **A.** Trường dữ liệu này chỉ được cấu hình duy nhất một giá trị bằng 0
- **B.** Trường này chỉ có ý nghĩa biểu thị mức điện áp nguồn pin vệ tinh
- **C.** Phân biệt loại gói: Beacon, Telemetry, Command, ACK hoặc NACK
- **D.** Chứa mã định danh cá nhân của người trực ca vận hành trạm thu đất

> **Đáp án:** **C**  
> **Giải thích:** Lệnh seek định vị con trỏ tệp đến offset tương ứng và đọc chính xác số byte của khối dữ liệu vào trường payload của gói.  
> **Mục tiêu củng cố:** Lập trình đóng gói cấu trúc viễn trắc Telemetry và tính mã kiểm tra lỗi CRC-16  

---

### Câu 196
**Đoạn mã C++ nào sau đây cài đặt cơ chế thử lại (Retry Loop) tối đa 3 lần nếu không nhận được ACK:**

- **A.** Lặp phát gói 3 lần liên tiếp có trễ delay(1000) không kiểm tra ACK
- **B.** Lặp phát gói 3 lần và chờ ACK mà không kiểm tra cờ nhận thành công
- **C.** Lặp tối đa 3 lần; gửi gói, chờ ACK và dừng sớm ngay khi nhận được ACK hợp lệ
- **D.** Sử dụng vòng lặp while tăng biến đếm phát lại kèm trễ 100 mili-giây

> **Đáp án:** **C**  
> **Giải thích:** Vòng lặp retry thử phát lại tối đa 3 lần; nếu nhận được ACK thành công thì thoát sớm khỏi vòng lặp.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 197
**Khi lập trình giao tiếp với module Ebyte E32, đoạn mã C++ nào thực hiện việc chờ đợi phần cứng an toàn cho đến khi chân AUX lên mức HIGH?**

- **A.** Giao thức truyền thông sẽ bị rơi vào trạng thái bế tắc vĩnh viễn
- **B.** Vi điều khiển trung tâm sẽ lập tức kích hoạt tiến trình tự hủy mềm
- **C.** Hết thời gian chờ Timeout, bên phát tự động truyền lại gói đó
- **D.** Bên thu sẽ tự động sinh ra một gói tin giả lập để bù vào chỗ thiếu

> **Đáp án:** **C**  
> **Giải thích:** Vòng lặp chờ chân AUX trở về trạng thái rảnh rỗi (HIGH) bảo đảm module đã hoàn tất việc phát gói cũ trước khi nhận gói mới.  
> **Mục tiêu củng cố:** Lập trình điều khiển module LoRa phát luồng byte qua cổng UART  

---

### Câu 198
**Để bổ sung cơ chế chống treo vĩnh viễn (Timeout) khi chờ chân AUX của module E32, đoạn mã C++ cải tiến là:**

- **A.** Sau khi thử lại quá số lần tối đa quy định mà vẫn không có ACK
- **B.** Khi mức điện áp của bộ pin năng lượng đạt ngưỡng sạc đầy 100% dung
- **C.** Khi vệ tinh di chuyển đến vị trí điểm cận địa của quỹ đạo bay thấp
- **D.** Khi người vận hành trạm mặt đất nhấn nút hủy phiên liên lạc trên

> **Đáp án:** **D**  
> **Giải thích:** Giới hạn thời gian chờ tối đa 2 giây giải thoát CPU khỏi nguy cơ kẹt chết nếu phần cứng module vô tuyến bị treo.  
> **Mục tiêu củng cố:** Lập trình điều khiển module LoRa phát luồng byte qua cổng UART  

---

### Câu 199
**Để đưa module E32 trở lại chế độ Normal Mode để sẵn sàng truyền nhận dữ liệu vô tuyến, lệnh C++ tương ứng là:**

- **A.** Kéo đồng thời cả hai chân M0 và M1 xuống mức logic LOW và chờ ổn định
- **B.** Kéo đồng thời cả hai chân M0 và M1 lên mức logic HIGH
- **C.** Kéo chân M0 xuống mức logic LOW và kéo chân M1 lên mức logic HIGH
- **D.** Gọi phương thức Serial1.flush() để xóa sạch bộ đệm truyền

> **Đáp án:** **A**  
> **Giải thích:** Kéo cả hai chân M0 và M1 về mức LOW chuyển module sang chế độ truyền nhận dữ liệu trong suốt.  
> **Mục tiêu củng cố:** Lập trình điều khiển module LoRa phát luồng byte qua cổng UART  

---

### Câu 200
**Đoạn mã C++ nào sau đây cài đặt Máy trạng thái hữu hạn (FSM) ở tầng thu để bóc tách luồng byte nối tiếp thành một gói tin hoàn chỉnh?**

- **A.** Khai báo 3 trạng thái: Đọc byte, Chờ byte và Dừng byte
- **B.** Khai báo 3 trạng thái: Khởi tạo cổng, Nhận dữ liệu và Đóng cổng
- **C.** Khai báo 3 trạng thái: Đọc tất cả, Gửi ACK và Xóa đệm
- **D.** Khai báo các trạng thái: Chờ đồng bộ, Đọc tiêu đề, Đọc tải trọng và Kiểm tra CRC

> **Đáp án:** **D**  
> **Giải thích:** Định nghĩa các trạng thái rời rạc giúp máy thu bóc tách từng trường dữ liệu của gói tin theo thời gian thực một cách chặt chẽ.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 201
**Đoạn mã C++ nào sau đây định dạng một gói phản hồi ACK gọn nhẹ gửi ngược về cho bên phát:**

- **A.** Gửi chuỗi ký tự ASCII ACK qua cổng nối tiếp
- **B.** Gửi mảng byte nhị phân của cấu trúc struct ACK qua Serial.write()
- **C.** Gửi chuỗi ký tự xác nhận OK kèm ngắt dòng qua Serial.print()
- **D.** Gửi một byte nhị phân đơn lẻ giá trị 1 biểu thị thành công

> **Đáp án:** **B**  
> **Giải thích:** Gói ACK có cấu trúc nhị phân chặt chẽ chứa số thứ tự của gói tin vừa được xác nhận và mã kiểm tra CRC riêng biệt.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 202
**Đoạn mã C++ nào sau đây kiểm tra xem toàn bộ các gói tin của bức ảnh đã được nhận đầy đủ hay chưa bằng mảng đánh dấu (Bitmask / Boolean Array)?**

- **A.** Kiểm tra từng phần tử mảng trạng thái bằng điều kiện so sánh rx[i] == 0
- **B.** Duyệt mảng cờ đánh dấu rx; nếu tồn tại bất kỳ phần tử nào mang giá trị false thì chưa hoàn tất
- **C.** Kiểm tra từng phần tử mảng trạng thái bằng điều kiện rx[i] != 1
- **D.** Kiểm tra từng phần tử mảng trạng thái bằng điều kiện số âm rx[i] < 0

> **Đáp án:** **B**  
> **Giải thích:** Mảng cờ đánh dấu theo dõi trạng thái nhận của từng gói con; chỉ khi tất cả các phần tử đều là true thì bức ảnh mới được ghép hoàn chỉnh.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 203
**Đoạn mã C++ nào sau đây nén các thông số kỹ thuật cốt lõi (Điện áp, SOC, Nhiệt độ, Trạng thái máy) vào một gói Beacon nhị phân nhỏ gọn chỉ 10 byte:**

- **A.** Chuyển đổi toàn bộ dữ liệu đo sang chuỗi văn bản JSON độ dài lớn
- **B.** Gửi riêng rẽ từng biến đo lường qua từng gói tin văn bản độc lập
- **C.** Mã hóa toàn bộ gói dữ liệu sang chuỗi ký tự Base64 trước khi phát
- **D.** Định nghĩa cấu trúc packed struct chứa các trường dữ liệu nhị phân rút gọn

> **Đáp án:** **D**  
> **Giải thích:** Đóng gói nhị phân cấp bit/byte giúp tối ưu hóa dung lượng gói beacon xuống chỉ vài byte, truyền đi nhanh chóng và tiết kiệm năng lượng tối đa.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 204
**Đoạn mã C++ nào sau đây bóc tách trường độ dài dữ liệu `packet.len` và kiểm tra xem có vượt quá giới hạn bộ đệm an toàn hay không:**

- **A.** Kiểm tra chiều dài gói tin luôn lớn hơn kích thước bộ đệm phần cứng
- **B.** Kiểm tra trường độ dài len nằm trong dải hợp lệ từ 1 đến kích thước tối đa cho phép
- **C.** Chỉ chấp nhận các gói tin có chiều dài bằng đúng 0 byte dữ liệu
- **D.** Bỏ qua bước kiểm tra chiều dài và giải mã trực tiếp toàn bộ mảng

> **Đáp án:** **B**  
> **Giải thích:** Kiểm tra tính hợp lệ của trường độ dài ngăn chặn triệt để lỗ hổng tấn công tràn bộ đệm (Buffer Overflow Attack) khi nhận dữ liệu vô tuyến.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 205
**Hàm C++ nào sau đây xóa sạch bộ đệm nhận của cổng Serial trước khi bắt đầu một phiên truyền thông quan trọng?**

- **A.** Tạm dừng chương trình trong 100 mili-giây để chờ cổng ổn định
- **B.** Gửi gói tin rác ra ngoài bus truyền thông để kích hoạt đường truyền
- **C.** Đọc bỏ toàn bộ byte tồn đọng trong bộ đệm bằng vòng lặp kiểm tra available()
- **D.** Khởi động lại toàn bộ vi điều khiển trước mỗi phiên truyền nhận

> **Đáp án:** **C**  
> **Giải thích:** Đọc bỏ các byte rác tồn đọng do nhiễu môi trường trước phiên liên lạc bảo đảm máy thu bắt đầu từ trạng thái sạch sẽ.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 206
**Đoạn mã C++ nào sau đây cài đặt cơ chế kiểm soát tốc độ phát sóng (Throttling / Cooldown) để bảo vệ khối khuếch đại PA không bị quá nhiệt?**

- **A.** Gọi hàm delay(100) giữa các lần đọc cổng nối tiếp
- **B.** Giới hạn số lượng gói tin phát tối đa là 5 gói mỗi ngày
- **C.** Chỉ cho phép phát sóng khi nhiệt độ ngoài trời đạt mức quy định
- **D.** Kiểm tra thời gian trôi qua giữa hai lần phát lớn hơn ngưỡng quy định của Duty Cycle

> **Đáp án:** **D**  
> **Giải thích:** Áp đặt thời gian chờ tối thiểu giữa các đợt phát sóng dài bảo vệ phần cứng khỏi hiện tượng tích tụ nhiệt nguy hiểm trong chân không.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 207
**Để mô phỏng môi trường truyền sóng chập chờn có xác suất mất gói 10% trong phòng thí nghiệm bằng C++, đoạn mã kiểm tra là:**

- **A.** Chủ động ngắt chân cấp nguồn module thu phát vô tuyến
- **B.** Sinh số ngẫu nhiên theo tỷ lệ phần trăm và bỏ qua gói lỗi
- **C.** Thay đổi ngẫu nhiên tốc độ baud của cổng truyền thông
- **D.** Chèn thêm các byte rác ngẫu nhiên vào giữa gói tin nhận

> **Đáp án:** **B**  
> **Giải thích:** Hàm random() tạo ngẫu nhiên lỗi đánh rơi gói tin để kiểm thử độ bền vững của thuật toán bắt tay tự động phát lại ARQ.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 208
**Khi truyền dữ liệu viễn đo dạng Beacon bằng mã Morse, hàm C++ nào điều khiển bật tắt sóng mang theo thời lượng của dấu Chấm (Dit)?**

- **A.** Dấu chấm dài 2 đơn vị thời gian, dấu gạch dài 6 đơn vị thời gian
- **B.** Dấu chấm và dấu gạch đều dài bằng nhau 1 đơn vị thời gian
- **C.** Dấu chấm dài 3 đơn vị thời gian, dấu gạch dài 1 đơn vị thời gian
- **D.** Dấu chấm dài 1 đơn vị thời gian, dấu gạch dài 3 đơn vị thời gian

> **Đáp án:** **D**  
> **Giải thích:** Quy ước chuẩn mã Morse: độ dài của một dấu chấm là 1 đơn vị thời gian (t), theo sau bởi khoảng lặng ngắn 1 đơn vị thời gian.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 209
**Đoạn mã C++ nào sau đây cài đặt hàng đợi phát vô tuyến (Tx Packet Queue) luồng an toàn bằng FreeRTOS:**

- **A.** Khởi tạo hàng đợi FreeRTOS có kích thước và số phần tử phù hợp qua xQueueCreate()
- **B.** Sử dụng biến toàn cục chung mà không có cơ chế khóa bảo vệ
- **C.** Dùng hàm malloc() cấp phát mảng tĩnh trong vùng nhớ ngăn xếp
- **D.** Chuyển dữ liệu qua trung gian tệp văn bản lưu trên thẻ nhớ microSD

> **Đáp án:** **A**  
> **Giải thích:** Hàng đợi FreeRTOS cho phép các tác vụ khác nhau (như tác vụ Telemetry, tác vụ Payload) đẩy gói tin vào để tác vụ COM phát tuần tự ra anten.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 210
**Tác vụ phát sóng vô tuyến (COM Tx Task) trong FreeRTOS lấy gói tin từ hàng đợi và phát đi bằng đoạn mã C++ nào?**

- **A.** Gọi hàm xQueueReceive() với thời gian chờ portMAX_DELAY để ngủ chờ sự kiện
- **B.** Dùng vòng lặp while(1) liên tục kiểm tra biến cờ báo hiệu trạng thái
- **C.** Gọi hàm delay(10) lặp đi lặp lại để kiểm tra bộ đệm nhận dữ liệu
- **D.** Khởi động lại toàn bộ tác vụ mỗi khi cần lấy mẫu dữ liệu mới

> **Đáp án:** **A**  
> **Giải thích:** Tác vụ ngủ chờ ở trạng thái Blocked cho đến khi có gói tin mới trong hàng đợi thì thức dậy để phát sóng.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 211
**Đoạn mã C++ nào sau đây kiểm tra mã xác thực `cmdAuthKey` của gói lệnh trước khi cho phép thực thi logic:**

- **A.** Chấp nhận toàn bộ các gói tin nhận được và đưa vào xử lý ngay
- **B.** Chỉ kiểm tra chiều dài của gói tin mà bỏ qua trường mã xác thực
- **C.** Thay thế mã xác thực trong gói tin bằng mã mặc định của hệ thống
- **D.** So sánh trường khóa xác thực trong gói tin với mã bí mật; nếu không khớp thì hủy gói

> **Đáp án:** **D**  
> **Giải thích:** Loại bỏ lập tức các gói tin không có khóa xác thực chính xác bảo vệ vệ tinh khỏi các can nhiễu vô tuyến độc hại ngoài ý muốn.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 212
**Đoạn mã C++ nào sau đây ghi nhận một gói tin vừa nhận được vào mảng đánh dấu tiến độ tải ảnh:**

- **A.** Tự động gửi email thông báo kết thúc phiên liên lạc vô tuyến
- **B.** Tăng gấp đôi mức điện áp cung cấp cho khối khuếch đại PA
- **C.** Chụp ảnh, cắt mảnh 128B, gán số thứ tự rồi đẩy vào hàng đợi
- **D.** Xóa toàn bộ các tệp tin hình ảnh đang lưu trữ trên thẻ nhớ

> **Đáp án:** **B**  
> **Giải thích:** Cập nhật cờ bitmask đánh dấu gói tin đã về đích an toàn, phục vụ cho việc kiểm tra các mảnh còn sót lại.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 213
**Hàm C++ nào sau đây xuất ra chuỗi báo cáo tiến độ tải ảnh (Download Progress) theo phần trăm?**

- **A.** Lấy số gói đã nhận chia cho tổng số gói của ảnh rồi nhân với 100%
- **B.** Lấy dung lượng tệp ảnh chia cho kích thước một mảnh gói tin
- **C.** Lấy thời gian truyền ảnh chia cho tốc độ baud của cổng nối tiếp
- **D.** Đếm số lượng điểm ảnh hiển thị được trên giao diện trạm mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Báo cáo trực quan tỷ lệ phần trăm khối dữ liệu ảnh đã thu thập thành công trên cửa sổ giám sát của trạm mặt đất.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 214
**Đoạn mã C++ nào sau đây cài đặt chức năng tự động đổi kênh tần số LoRa của module E32 dựa trên mức pin đo được từ phân hệ EPS:**

- **A.** Chỉ tắt hoàn toàn module phát sóng khi pin sạc đầy 100%
- **B.** Luôn giữ mức công suất phát tối đa bất kể dung lượng pin còn lại
- **C.** Giảm công suất phát xuống mức thấp khi SOC dưới 20% và tăng khi đủ pin
- **D.** Tự động thay đổi tần số phát sóng sang dải tần số thương mại khác

> **Đáp án:** **C**  
> **Giải thích:** Chủ động giảm công suất phát khi dung lượng pin xuống thấp là giải pháp quản lý năng lượng thông minh trên vệ tinh.  
> **Mục tiêu củng cố:** Lập trình điều khiển module LoRa phát luồng byte qua cổng UART  

---

### Câu 215
**Hàm C++ nào sau đây gửi bản tin kiểm tra thông suốt đường truyền (Ping Command) và đo lường thời gian đáp ứng?**

- **A.** Tạo gói tin kiểu PKT_PING, gán mốc thời gian millis() hiện tại và phát đi
- **B.** Tạo gói tin kiểu PKT_PING kèm khoảng trễ delay(100) trước khi gửi
- **C.** Gửi chuỗi văn bản ASCII PING đơn giản ra cổng nối tiếp
- **D.** Chờ đợi 100 mili-giây rồi mới kích hoạt phát bản tin kiểm tra kết nối

> **Đáp án:** **A**  
> **Giải thích:** Gắn dấu thời gian vào gói tin Ping cho phép máy thu dội lại chính xác dấu thời gian đó để tính toán độ trễ RTT hai chiều.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 216
**Đoạn mã C++ nào sau đây xử lý gói tin PING nhận được và gửi dội ngược lại bản tin PONG:**

- **A.** In chuỗi văn bản PING ra cổng nối tiếp của trạm điều hành
- **B.** Đóng gói phản hồi PKT_PONG mang nguyên mốc thời gian nhận được từ gói PING
- **C.** Đổi trường loại gói tin từ PING thành PONG ngay trên chính gói nhận
- **D.** Chờ khoảng trễ 100 mili-giây rồi phát gói ngẫu nhiên không có dữ liệu

> **Đáp án:** **B**  
> **Giải thích:** Bản tin PONG phản hồi tức thời cung cấp số liệu đo đạc chất lượng và độ sẵn sàng của kênh liên lạc vô tuyến.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 217
**Đoạn mã C++ nào sau đây cài đặt bộ phân kênh lệnh (Command Dispatcher) dựa trên trường `packet.type`:**

- **A.** Sử dụng cấu trúc switch-case nhưng chỉ xử lý duy nhất gói tin dữ liệu
- **B.** Sử dụng switch-case theo trường packet.type để phân nhánh xử lý PING, CMD, DATA
- **C.** Chỉ kiểm tra trường mã lỗi và bỏ qua mọi gói tin điều khiển
- **D.** Dùng một chuỗi các lệnh if so sánh chiều dài gói tin thay vì loại gói

> **Đáp án:** **B**  
> **Giải thích:** Cấu trúc switch-case điều hướng linh hoạt các loại bản tin khác nhau đến đúng hàm nghiệp vụ tương ứng.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 218
**Hàm C++ nào sau đây cấu hình chân tốc độ truyền UART của module E32 bằng lệnh cấu hình phần cứng:**

- **A.** Cấu hình module ở chế độ Normal Mode (M0=0, M1=0) rồi gửi chuỗi cấu hình
- **B.** Cấu hình module ở chế độ Wake-up Mode (M0=0, M1=1) rồi gửi chuỗi cấu hình
- **C.** Cấu hình module ở chế độ Power-saving Mode (M0=1, M1=0) rồi gửi cấu hình
- **D.** Đưa module về chế độ Sleep/Program Mode (M0=1, M1=1), trễ ổn định rồi ghi 6 byte cấu hình

> **Đáp án:** **D**  
> **Giải thích:** Chuỗi byte cấu hình chuẩn gửi ở Mode 3 để ghi vĩnh viễn các thông số UART và vô tuyến vào bộ nhớ của module.  
> **Mục tiêu củng cố:** Lập trình điều khiển module LoRa phát luồng byte qua cổng UART  

---

### Câu 219
**Đoạn mã C++ nào sau đây kiểm tra xem gói phân mảnh số 0 có thực sự chứa 2 byte đầu tiên của ảnh JPEG (`0xFFD8`) hay không:**

- **A.** Kiểm tra gói có số thứ tự bằng 0 và 2 byte đầu tiên phải là 0xFF 0xD8 (SOI của JPEG)
- **B.** Chỉ kiểm tra số thứ tự gói bằng 0 mà không xác thực nội dung bên trong
- **C.** Tự động xóa byte đầu tiên của mảng tải trọng dữ liệu trong gói tin
- **D.** Dùng vòng lặp chờ vô hạn cho đến khi nhận được một gói tin bất kỳ

> **Đáp án:** **A**  
> **Giải thích:** Kiểm tra tính toàn vẹn của mã mở đầu tệp SOI (Start Of Image) ngay tại gói mảnh số 0 ngăn chặn việc ghi dữ liệu hỏng xuống thẻ nhớ.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 220
**Hàm C++ nào sau đây tính toán tốc độ truyền dữ liệu hữu ích thực tế (Goodput tính bằng kbps) của một phiên truyền tệp:**

- **A.** Nhân thời gian truyền tính bằng mili-giây với hệ số 8.0
- **B.** Lấy tổng số byte nhận được chia cho 1000 để đổi sang Kilobyte
- **C.** Lấy tổng số byte nhân 8 (đổi sang bit) rồi chia cho thời gian truyền (ms)
- **D.** Gán mặc định tốc độ truyền hữu ích bằng 0 trong mọi trường hợp

> **Đáp án:** **C**  
> **Giải thích:** Công thức: $\text{Goodput (kbps)} = (\text{Bytes} \times 8) / (\text{Time}_{ms})$ cho biết lượng thông tin người dùng thực tế được truyền đi mỗi giây.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

### Câu 221
**Đoạn mã C++ nào sau đây kiểm tra xem gói tin thứ `idx` có bị đánh dấu thiếu trong mặt nạ `mask` hay không:**

- **A.** Luôn gán cờ trạng thái bị thiếu về giá trị hằng số false
- **B.** So sánh trực tiếp giá trị của mặt nạ với chỉ số của gói tin
- **C.** Thực hiện phép AND bit giữa mặt nạ với bit 1 đã dịch trái (idx - baseSeq) vị trí
- **D.** Chỉ kiểm tra giá trị mặt nạ có lớn hơn 0 hay không

> **Đáp án:** **C**  
> **Giải thích:** Phép toán dịch bit và AND với mặt nạ nhị phân 64-bit cho phép tra cứu trạng thái thiếu của từng gói tin trong tích tắc.  
> **Mục tiêu củng cố:** Lập trình truyền nhận viễn trắc và cấu hình tham số truyền thông LoRa  

---

## 💻 Thực hành: Thiết Lập Hệ Thống Truyền Thông Vệ Tinh Hai Chiều (Lab5-03) (2 câu)

### Câu 222
**Để tái tạo tệp ảnh gốc từ các mảnh gói tin nhận được tại trạm mặt đất, đoạn mã C++ ghi mảnh dữ liệu vào tệp là:**

- **A.** Mở tệp và ghi dữ liệu gói tin trực tiếp vào vị trí con trỏ hiện hành
- **B.** Mở tệp, dùng phương thức f.seek() trỏ đến đúng vị trí offset rồi mới ghi khối dữ liệu
- **C.** Mở tệp và in toàn bộ chuỗi ký tự tải trọng bằng phương thức f.print()
- **D.** Mở tệp và gọi phương thức f.append() để tự động thêm dữ liệu vào cuối tệp

> **Đáp án:** **B**  
> **Giải thích:** Lệnh seek định vị con trỏ tệp đến đúng vị trí offset dựa trên chỉ số thứ tự gói `seq`, cho phép ghi các mảnh vào đúng vị trí dù chúng đến không theo thứ tự.  
> **Mục tiêu củng cố:** Lập trình hệ thống giao tiếp vô tuyến hai chiều giữa vệ tinh và trạm mặt đất  

---

### Câu 223
**Khi nhận gói tin phản hồi ACK từ trạm mặt đất, đoạn mã C++ nào xác nhận gói ACK đó tương ứng đúng với gói tin vừa phát đi:**

- **A.** Kiểm tra loại gói tin là PKT_ACK và số thứ tự ackedSeq trùng khớp với gói đang chờ
- **B.** Chỉ kiểm tra trường số thứ tự gói nhận được có bằng số 0 hay không
- **C.** Luôn xác nhận đã nhận được phản hồi thành công mà không cần kiểm tra gói
- **D.** Chỉ kiểm tra mã loại gói PKT_ACK mà không so khớp số thứ tự gói tin

> **Đáp án:** **A**  
> **Giải thích:** Kiểm tra khớp số thứ tự `ackedSeq` bảo đảm gói xác nhận thực sự là của gói vừa gửi, tránh nhầm lẫn với các gói ACK đến muộn của các gói cũ.  
> **Mục tiêu củng cố:** Lập trình hệ thống giao tiếp vô tuyến hai chiều giữa vệ tinh và trạm mặt đất  

---

