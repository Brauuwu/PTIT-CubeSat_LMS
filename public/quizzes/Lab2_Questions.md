# Ngân hàng Câu hỏi Trắc nghiệm - Lab 2

> **Tổng số câu hỏi:** 214 câu  
> **Mục đích:** Phục vụ các câu hỏi kiểm tra, củng cố kiến thức sau mỗi phần Doc & Thực hành trên LMS theo giáo trình `curriculum.md`  

## 📖 Doc 2.1: Công nghệ Pin Li-Po, Thuật toán Sạc TP4056 & IC Đo Dung Lượng MAX17048 (141 câu)

### Câu 1
**Trong kiến trúc của một vệ tinh CubeSat, phân hệ Năng lượng (EPS - Electrical Power System) đảm nhận vai trò cốt lõi nào?**

- **A.** Điều khiển góc quay và định vị quỹ đạo vệ tinh
- **B.** Thu nhận, lưu trữ và phân phối điện cho phụ tải
- **C.** Giao tiếp sóng vô tuyến hai chiều với mặt đất
- **D.** Thu thập và xử lý hình ảnh quang học bề mặt

> **Đáp án:** **B**  
> **Giải thích:** EPS là hệ thống cung cấp năng lượng duy trì sự sống cho toàn bộ các thiết bị điện tử trên vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 2
**Nguồn năng lượng sơ cấp duy nhất mà một vệ tinh hoạt động trên quỹ đạo thấp Trái Đất (LEO) có thể khai thác liên tục là gì?**

- **A.** Bức xạ quang năng từ nguồn ánh sáng Mặt Trời
- **B.** Sóng vô tuyến điện từ phát từ trạm mặt đất
- **C.** Nhiệt lượng tỏa ra từ lò phản ứng hạt nhân
- **D.** Năng lượng hóa thạch đốt cháy bên trong vỏ

> **Đáp án:** **A**  
> **Giải thích:** Các tế bào quang điện biến đổi trực tiếp photon ánh sáng Mặt Trời thành dòng điện một chiều DC cấp cho vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 3
**Khái niệm 'Pha chiếu sáng' (Sunlight Phase) trong một chu kỳ quay quanh quỹ đạo của CubeSat được định nghĩa là gì?**

- **A.** Khoảng thời gian vệ tinh bay qua trạm mặt đất
- **B.** Khoảng thời gian vệ tinh phát tín hiệu định vị
- **C.** Khoảng thời gian vệ tinh tạm ngắt toàn bộ tải
- **D.** Khoảng thời gian vệ tinh nhận ánh sáng Mặt Trời

> **Đáp án:** **D**  
> **Giải thích:** Ở pha chiếu sáng, các tấm pin Mặt Trời vừa cấp điện cho các phân hệ hoạt động vừa nạp điện dự trữ vào pin sạc.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 4
**Khái niệm 'Pha vùng tối' (Eclipse Phase) của vệ tinh trên quỹ đạo là gì?**

- **A.** Khoảng thời gian vệ tinh bay qua cực nam Trái Đất
- **B.** Khoảng thời gian vệ tinh bị mây dày che phủ kín
- **C.** Khoảng thời gian vệ tinh tạm ngừng phát tín hiệu
- **D.** Khoảng thời gian vệ tinh ở vùng bóng tối Trái Đất

> **Đáp án:** **D**  
> **Giải thích:** Trong pha tối (khoảng 35 phút mỗi vòng quỹ đạo 95 phút), tấm pin không sinh điện và toàn bộ tải phải dùng điện từ bộ pin sạc.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 5
**Trong pha vùng tối (Eclipse), thành phần nào chịu trách nhiệm duy nhất cung cấp điện cho toàn bộ hệ thống vệ tinh?**

- **A.** Tấm pin Mặt Trời
- **B.** Ống phóng P-POD
- **C.** Bộ pin lưu trữ năng lượng hóa học
- **D.** Trạm mặt đất truyền năng lượng không dây

> **Đáp án:** **C**  
> **Giải thích:** Bộ pin sạc Li-Po/Li-ion là nguồn dự trữ điện năng độc nhất duy trì sự sống của vệ tinh trong bóng tối.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 6
**Khái niệm 'Cân bằng Năng lượng' (Energy Budget / Power Budget) của vệ tinh được hiểu là gì?**

- **A.** Bảng tổng hợp khối lượng phần cứng phân hệ nguồn
- **B.** Bảng định mức dung tích bình nhiên liệu đẩy cơ khí
- **C.** Bảng cân đối giữa năng lượng thu nhận và tiêu thụ
- **D.** Bảng chi phí tài chính cho linh kiện phân hệ nguồn

> **Đáp án:** **C**  
> **Giải thích:** Bảng dự toán năng lượng bảo đảm tổng năng lượng nạp vào trong pha sáng phải lớn hơn tổng năng lượng tiêu hao ở cả pha sáng và pha tối.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 7
**Nếu bảng cân bằng năng lượng của một vệ tinh bị âm (Năng lượng tiêu thụ trung bình lớn hơn năng lượng sinh ra từ pin Mặt Trời), hậu quả tất yếu là gì?**

- **A.** Tốc độ bay của vệ tinh trên quỹ đạo tăng cao
- **B.** Khối pin cạn dần dẫn tới mất nguồn hoàn toàn
- **C.** Bề mặt tấm pin quang điện bị nổ do quá nhiệt
- **D.** Hệ thống đẩy tự động kích hoạt rơi xuống biển

> **Đáp án:** **B**  
> **Giải thích:** Hiện tượng thâm hụt năng lượng tích lũy làm pin xả sâu liên tục dẫn tới kiệt nguồn vĩnh viễn (Power Starvation).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 8
**Để bảo đảm an toàn vận hành, hệ số dự phòng an toàn công suất (Power Margin) tối thiểu khuyến nghị khi thiết kế EPS thường là bao nhiêu?**

- **A.** 50% đến 60%
- **B.** 20% đến 30%
- **C.** 5% đến 10%
- **D.** 75% đến 90%

> **Đáp án:** **B**  
> **Giải thích:** Hệ số dự phòng 20-30% bù đắp cho sự suy giảm hiệu suất của tế bào quang điện do bức xạ và lão hóa cell pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 9
**Hiệu suất chuyển đổi quang - điện của các tế bào quang điện Si (Silicon) đơn tinh thể thông dụng hiện nay đạt khoảng bao nhiêu?**

- **A.** 18% đến 22%
- **B.** 60% đến 70%
- **C.** 95% đến 99%
- **D.** 5% đến 8%

> **Đáp án:** **A**  
> **Giải thích:** Tế bào Silicon thương mại có hiệu suất biến đổi quang điện thực tế dao động trong khoảng 18% đến 22%.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 10
**Tế bào quang điện đa tiếp giáp thế hệ mới (Multi-junction GaAs) dùng cho vệ tinh chuyên nghiệp có thể đạt hiệu suất lên tới mức nào?**

- **A.** 85% đến 95%
- **B.** 50% đến 60%
- **C.** 28% đến 32%
- **D.** 10% đến 15%

> **Đáp án:** **C**  
> **Giải thích:** Các lớp bán dẫn đa tiếp giáp (InGaP/InGaAs/Ge) hấp thụ nhiều dải bước sóng khác nhau, đạt hiệu suất phòng thí nghiệm trên 30%.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 11
**Hằng số bức xạ Mặt Trời (Solar Constant) tại vùng không gian quỹ đạo thấp quanh Trái Đất (LEO) có giá trị xấp xỉ bao nhiêu?**

- **A.** 1361 đến 1367 W/m²
- **B.** 8500 đến 9000 W/m²
- **C.** 450 đến 500 W/m²
- **D.** 4500 đến 5000 W/m²

> **Đáp án:** **A**  
> **Giải thích:** Bức xạ Mặt Trời ngoài tầng khí quyển Trái Đất (AM0) có cường độ nhiệt quang trung bình khoảng 1366 W/m².  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 12
**Một mặt tiêu chuẩn 1U (diện tích 10 cm x 10 cm = 0.01 m²) nếu gắn pin quang điện hiệu suất 20% thì công suất điện đỉnh lý thuyết tạo ra xấp xỉ là:**

- **A.** 2.0 đến 2.5 W
- **B.** 0.4 đến 0.6 W
- **C.** 45 đến 50 W
- **D.** 9.0 đến 10.5 W

> **Đáp án:** **A**  
> **Giải thích:** Công suất đỉnh: $P = 1366\text{ W/m}^2 \times 0.01\text{ m}^2 \times 0.20 \approx 2.73\text{ W}$ (chưa tính góc nghiêng ánh sáng).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 13
**Góc tới của ánh sáng Mặt Trời (Angle of Incidence) chiếu lên bề mặt tấm pin ảnh hưởng đến công suất phát điện theo quy luật nào?**

- **A.** Tỷ lệ thuận tuyến tính với độ lớn góc tới tia sáng
- **B.** Hoàn toàn không phụ thuộc vào góc chiếu tia sáng
- **C.** Tỷ lệ thuận với hàm cosin của góc tới tia sáng
- **D.** Tỷ lệ nghịch tuyến tính với nhiệt độ bề mặt pin

> **Đáp án:** **C**  
> **Giải thích:** Định luật Lambert: $P = P_{max} \times \cos(\theta)$; khi tia sáng chiếu vuông góc ($\theta = 0^\circ$), công suất đạt cực đại.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 14
**Trong giai đoạn vệ tinh bị quay lộn tự do sau khi rời ống phóng (Tumbling), công suất sinh ra từ các tấm pin Mặt Trời có đặc điểm gì?**

- **A.** Đột ngột tăng vọt lên mức công suất cực đại
- **B.** Liên tục duy trì ở mức bằng 0 trong suốt pha
- **C.** Biến thiên liên tục do góc đón quang năng đổi
- **D.** Ổn định ở mức danh định không đổi theo chu kỳ

> **Đáp án:** **C**  
> **Giải thích:** Chuyển động quay không ổn định làm diện tích hứng sáng hiệu dụng của các bề mặt thay đổi tuần hoàn theo chu kỳ quay.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 15
**Nhiệm vụ điều hòa điện áp (Power Conditioning) trong phân hệ EPS có mục tiêu kỹ thuật nào?**

- **A.** Ổn định các mức điện áp DC chuẩn cấp cho tải
- **B.** Lưu trữ dữ liệu hình ảnh khoa học từ camera
- **C.** Thay đổi trạng thái hiển thị của đèn LED báo
- **D.** Duy trì nhiệt độ khối pin trong dải danh định

> **Đáp án:** **A**  
> **Giải thích:** Điện áp pin thay đổi từ 4.2V (đầy) xuống 3.4V (cạn); mạch biến đổi nguồn phải ghim điện áp cấp tải ở giá trị chuẩn không đổi.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 16
**Nhiệm vụ phân phối điện năng (Power Distribution) trong EPS thực hiện chức năng gì?**

- **A.** Bức xạ năng lượng điện từ ra môi trường vũ trụ
- **B.** Tự động ép xung nâng cao tốc độ của vi xử lý
- **C.** Dẫn truyền dòng điện rò vào khung vỏ kim loại
- **D.** Đóng cắt cấp nguồn riêng biệt đến từng phân hệ

> **Đáp án:** **D**  
> **Giải thích:** Mạch phân phối nguồn sử dụng các khóa điện tử (MOSFET switch) để cấp hoặc ngắt nguồn độc lập cho từng khối tải trọng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 17
**Khái niệm 'Chế độ Sinh tồn' (Safe Mode / Survival Mode) của EPS được kích hoạt khi nào?**

- **A.** Khi vệ tinh hoàn thành việc chụp ảnh khoa học
- **B.** Khi trạm mặt đất gửi bản tin đồng bộ thời gian
- **C.** Khi vệ tinh vừa tách thành công khỏi ống phóng
- **D.** Khi dung lượng pin sụt dưới ngưỡng an toàn

> **Đáp án:** **D**  
> **Giải thích:** Ở chế độ Safe Mode, EPS cắt nguồn các tải nặng (camera, cảm biến) và chỉ duy trì khối xử lý tối thiểu để sạc lại pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 18
**Chế độ 'Hoạt động Bình thường' (Nominal / Mission Mode) của EPS cho phép thực hiện các tác vụ nào?**

- **A.** Kéo chốt an toàn và khởi tạo lại toàn bộ cảm biến
- **B.** Cấp nguồn đầy đủ cho các khối thực hiện nhiệm vụ
- **C.** Ngắt kết nối vi điều khiển và chỉ sạc khối pin
- **D.** Tạm ngắt hoàn toàn bộ nhớ flash để tiết kiệm pin

> **Đáp án:** **B**  
> **Giải thích:** Khi dung lượng pin ở trạng thái dồi dào (> 70%), EPS cho phép bật đầy đủ các tải công suất để hoàn thành sứ mệnh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 19
**Hiện tượng phân huỷ tế bào quang điện (Solar Cell Degradation) trên quỹ đạo LEO chủ yếu do tác nhân nào gây ra?**

- **A.** Ăn mòn hóa học do tiếp xúc với oxy và hơi nước
- **B.** Nước ngưng tụ trên bề mặt làm suy giảm bán dẫn
- **C.** Trọng lực thấp làm xáo trộn cấu trúc tinh thể
- **D.** Bức xạ ion hóa và bắn phá của oxy nguyên tử

> **Đáp án:** **D**  
> **Giải thích:** Bức xạ hạt mang điện làm hỏng mạng tinh thể chất bán dẫn, khiến công suất pin quang điện giảm khoảng 1-3% mỗi năm.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 20
**Tại sao trên vệ tinh không sử dụng các loại pin dùng một lần (Pin sơ cấp - Non-rechargeable) làm nguồn năng lượng chính?**

- **A.** Pin cạn năng lượng nhanh và không thể tái tạo
- **B.** Trọng lượng pin sơ cấp quá nặng so với kết cấu
- **C.** Giá thành chế tạo của pin sơ cấp quá đắt đỏ
- **D.** Pin sơ cấp hoàn toàn không có tính dẫn điện tốt

> **Đáp án:** **A**  
> **Giải thích:** Nhiệm vụ vệ tinh kéo dài nhiều tháng đến nhiều năm bắt buộc phải sử dụng hệ thống pin thứ cấp (pin sạc) chu kỳ dài.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 21
**Khái niệm 'Độ sâu xả' (Depth of Discharge - DoD) của bộ pin sạc được định nghĩa là gì?**

- **A.** Bề dày vật lý của khối tế bào điện hóa trong pin
- **B.** Tỷ lệ phần trăm dung lượng pin đã bị tiêu thụ
- **C.** Khoảng thời gian cần thiết để sạc đầy khối pin
- **D.** Khoảng cách cách điện giữa khối pin và khung vỏ

> **Đáp án:** **B**  
> **Giải thích:** DoD đo lường mức độ xả kiệt; ví dụ pin 1000mAh xả ra 300mAh thì độ sâu xả DoD là $30\%$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 22
**Mối quan hệ giữa độ sâu xả (DoD) và tuổi thọ chu kỳ (Cycle Life) của pin hóa học Li-Po/Li-ion là gì?**

- **A.** Xả pin sâu 100% giúp gia tăng dung lượng định mức
- **B.** Độ sâu xả càng lớn thì độ bền hóa học càng cao
- **C.** Độ sâu xả càng nhỏ thì số chu kỳ sạc xả càng tăng
- **D.** Độ sâu xả hoàn toàn không ảnh hưởng tới tuổi thọ

> **Đáp án:** **C**  
> **Giải thích:** Pin xả nông ở mức DoD 20-30% có thể đạt hàng chục nghìn chu kỳ sạc xả, trong khi xả sâu 80-100% làm pin chai nhanh chóng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 23
**Để bộ pin sạc trên CubeSat có thể hoạt động bền bỉ suốt 1-2 năm trên quỹ đạo LEO (~5000 chu kỳ sạc xả), DoD khuyến nghị nên duy trì ở mức nào?**

- **A.** 1% đến 5%
- **B.** 50% đến 80%
- **C.** 20% đến 30%
- **D.** 90% đến 100%

> **Đáp án:** **C**  
> **Giải thích:** Giới hạn DoD ở mức 20-30% bảo đảm pin duy trì đủ dung lượng qua hàng nghìn chu kỳ quỹ đạo ngày/đêm liên tục.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 24
**Khái niệm 'Trạng thái Sạc' (State of Charge - SOC) của pin được định nghĩa là gì?**

- **A.** Tỷ lệ phần trăm dung lượng điện còn lại của pin
- **B.** Mức điện áp định mức cần cấp khi sạc từ nguồn
- **C.** Khối lượng tịnh danh định của khối pin lưu trữ
- **D.** Tốc độ suy hao điện áp tức thời khi nối với tải

> **Đáp án:** **A**  
> **Giải thích:** SOC là chỉ số tỷ lệ nghịch với DoD: $\text{SOC} = 100\% - \text{DoD}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 25
**Khi mức SOC của pin rơi xuống ngưỡng 10%, EPS của vệ tinh nên thực hiện hành động khẩn cấp nào?**

- **A.** Ngắt bớt phụ tải và chuyển sang chế độ ngủ sâu
- **B.** Kích hoạt quy trình khởi động lại toàn bộ tải
- **C.** Phát tín hiệu vô tuyến liên tục về trạm thu nhận
- **D.** Kích hoạt hệ thống sưởi ấm pin ở mức tối đa

> **Đáp án:** **A**  
> **Giải thích:** Xả pin sâu dưới mức 10% sẽ đẩy điện áp tế bào xuống dưới ngưỡng chết hóa học, gây phồng pin và mất khả năng tích điện.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 26
**Yếu tố nhiệt độ môi trường ảnh hưởng như thế nào đến khả năng sạc của pin Lithium-Polymer (Li-Po)?**

- **A.** Nhiệt độ càng âm sâu thì tốc độ sạc pin càng tăng
- **B.** Nhiệt độ môi trường không ảnh hưởng phản ứng pin
- **C.** Nhiệt độ dưới 0°C dễ gây đoản mạch và hỏng pin
- **D.** Pin đạt hiệu suất nạp tối ưu khi nhiệt độ 100°C

> **Đáp án:** **C**  
> **Giải thích:** Sạc pin ở nhiệt độ âm làm các ion Li+ không kịp khuếch tán vào cấu trúc than chì, bám thành kim loại gây đoản mạch tế bào.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 27
**Để bảo đảm an toàn khi vận hành trong không gian, hệ thống EPS của vệ tinh cần trang bị mạch sấy pin (Battery Heater) khi nhiệt độ giảm xuống dưới:**

- **A.** -100°C
- **B.** 0°C
- **C.** +50°C
- **D.** -50°C

> **Đáp án:** **B**  
> **Giải thích:** Mạch sấy nhiệt điện trở chủ động làm ấm khối pin lên dải +5°C đến +20°C trước khi kích hoạt dòng sạc từ pin Mặt Trời.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 28
**Khái niệm 'Power Bus' (Đường truyền năng lượng) trong phân hệ EPS của vệ tinh chỉ thành phần nào?**

- **A.** Khối kết cấu cơ khí dùng để nâng đỡ bộ pin sạc
- **B.** Đường dây dẫn phân phối mức điện áp chung cho tải
- **C.** Ống dẫn chất lỏng làm mát cho toàn bộ linh kiện
- **D.** Cáp quang truyền dữ liệu tốc độ cao giữa các bo

> **Đáp án:** **B**  
> **Giải thích:** Power Bus là thanh cái nguồn (ví dụ 3.3V Bus hoặc Vbat Bus) cung cấp dòng điện song song cho các bo mạch ngoại vi.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 29
**Hệ thống EPS sử dụng kiến trúc 'Regulated Bus' có ưu điểm nổi bật nào so với 'Unregulated Bus'?**

- **A.** Không cần sử dụng bất kỳ linh kiện bán dẫn nào
- **B.** Hiệu suất chuyển đổi lý tưởng luôn đạt mức 100%
- **C.** Hoàn toàn không tỏa nhiệt lượng ra ngoài khung vỏ
- **D.** Duy trì điện áp cấp cho tải luôn ổn định chuẩn

> **Đáp án:** **D**  
> **Giải thích:** Regulated Bus dùng mạch ổn áp xung để triệt tiêu sự trồi sụt của pin, bảo vệ các chip số nhạy cảm với biến thiên nguồn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 30
**Nhược điểm chính của việc sử dụng ổn áp tuyến tính LDO (Low Dropout) trong phân hệ nguồn EPS là gì?**

- **A.** Kích thước vỏ đóng gói quá lớn so với chuẩn 1U
- **B.** Cấu trúc mạch bảo vệ quá phức tạp và khó tích hợp
- **C.** Phát ra xung nhiễu điện từ tần số cao vào mạch số
- **D.** Hiệu suất thấp và tỏa nhiệt lớn khi chênh áp cao

> **Đáp án:** **D**  
> **Giải thích:** Hiệu suất LDO xấp xỉ bằng $V_{out} / V_{in}$; chênh lệch áp biến thành nhiệt năng tỏa ra trên thân chip làm nóng vỏ vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 31
**Tổn hao công suất do nội trở của dây dẫn và tiếp điểm trong khối EPS được tính toán theo công thức nào?**

- **A.** P = V / I
- **B.** P = I / R²
- **C.** P = I² × R
- **D.** P = V² × I

> **Đáp án:** **C**  
> **Giải thích:** Định luật Joule-Lenz: Tổn hao nhiệt tỷ lệ với bình phương cường độ dòng điện chạy qua nội trở của đường dây.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 32
**Để giảm thiểu tổn thất năng lượng do điện trở tiếp xúc trên đường nguồn phân phối, giải pháp phần cứng tối ưu là:**

- **A.** Sử dụng dây bọc cách điện bằng nhựa tiêu chuẩn
- **B.** Giảm tiết diện đường dẫn nguồn xuống mức tối thiểu
- **C.** Tăng chiều rộng và độ dày lớp đồng dẫn trên bo
- **D.** Tăng tần số xung nhịp làm việc của vi xử lý

> **Đáp án:** **C**  
> **Giải thích:** Đường mạch rộng và dày làm giảm tối đa điện trở ký sinh $R$, hạn chế sụt áp và tỏa nhiệt khi tải tiêu thụ dòng lớn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 33
**Điện tích tĩnh điện tích tụ trên bề mặt tấm pin năng lượng Mặt Trời khi bay trong plasma không gian cần được xử lý như thế nào?**

- **A.** Xả điện tích tích tụ trực tiếp vào vi điều khiển
- **B.** Phủ lớp sơn cách điện dày lên toàn bộ mặt ngoài
- **C.** Nối mass khung kim loại và phủ lớp dẫn điện
- **D.** Để mặc cho điện tích tích tụ tự nhiên trên bề mặt

> **Đáp án:** **C**  
> **Giải thích:** Hiện tượng phóng điện hồ quang tĩnh điện (ESD) có thể phá hủy lớp tiếp giáp bán dẫn nếu không được xả tĩnh điện đồng đều về khung.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 34
**Hiện tượng 'Lạc dòng' (Dark Current / Leakage) từ bộ pin sạc chạy ngược về các tấm pin Mặt Trời trong pha tối được ngăn chặn bằng linh kiện nào?**

- **A.** Cầu chì nhiệt tự đứt khi dòng điện đảo chiều
- **B.** Tụ điện dung lượng lớn mắc song song với tấm pin
- **C.** Diode chống dòng ngược hoặc khóa Ideal Diode
- **D.** Điện trở công suất xả nhiệt mắc nối tiếp trên dây

> **Đáp án:** **C**  
> **Giải thích:** Khi không có ánh sáng, tế bào quang điện trở thành diode phân cực thuận; diode chặn ngăn pin xả ngược làm hao điện.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 35
**Ưu điểm vượt trội của mạch 'Ideal Diode Controller' sử dụng MOSFET so với diode Schottky truyền thống trong EPS là gì?**

- **A.** Không cần kết nối điện cực âm về điểm mass chung
- **B.** Chịu được mức điện áp đánh thủng lên tới 10.000V
- **C.** Sụt áp trên linh kiện cực nhỏ, giảm hao phí nguồn
- **D.** Tự dẫn dòng mà không cần tín hiệu điều khiển

> **Đáp án:** **C**  
> **Giải thích:** MOSFET có nội trở dẫn $R_{DS(on)}$ siêu nhỏ, triệt tiêu sụt áp 0.3V-0.5V kinh điển của diode bán dẫn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 36
**Một viên pin Li-Po có dung lượng 2000 mAh cấp nguồn cho hệ thống vệ tinh tiêu thụ dòng liên tục trung bình là 100 mA. Thời gian hoạt động lý thuyết là:**

- **A.** 200 giờ
- **B.** 20 giờ
- **C.** 0.5 giờ
- **D.** 2 giờ

> **Đáp án:** **B**  
> **Giải thích:** Thời gian hoạt động: $T = \text{Dung lượng} / I = 2000\text{ mAh} / 100\text{ mA} = 20\text{ giờ}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 37
**Khái niệm 'Hệ số C' (C-rate) của pin dùng để định lượng thông số nào?**

- **A.** Nhiệt độ nóng chảy danh định của vật liệu điện cực
- **B.** Tỷ lệ phần trăm than chì bên trong cực âm tế bào
- **C.** Độ bền cơ học chịu va đập của lớp vỏ bọc bên ngoài
- **D.** Tốc độ nạp xả so với dung lượng danh định của pin

> **Đáp án:** **D**  
> **Giải thích:** Hệ số 1C của pin 1000mAh là dòng 1000mA; xả ở mức 0.5C tương ứng dòng 500mA.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 38
**Khi sạc pin Li-Po ở mức dòng khuyến nghị 0.5C đối với viên pin dung lượng 1200 mAh, dòng sạc danh định cần cài đặt là:**

- **A.** 2400 mA
- **B.** 120 mA
- **C.** 600 mA
- **D.** 1200 mA

> **Đáp án:** **C**  
> **Giải thích:** Dòng sạc $0.5\text{C} = 0.5 \times 1200\text{ mA} = 600\text{ mA}$, bảo đảm an toàn hóa học và kéo dài tuổi thọ cell.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 39
**Tại sao trên vệ tinh không nên sạc pin với dòng điện quá cao (ví dụ vượt quá 1C)?**

- **A.** Làm suy giảm độ nhạy thu của khối vô tuyến
- **B.** Làm giảm khối lượng tịnh của vệ tinh trên quỹ đạo
- **C.** Sinh nhiệt lớn và tạo khí gây phồng rộp khối pin
- **D.** Khiến nhiệt độ tế bào hóa học bị hạ thấp đột ngột

> **Đáp án:** **C**  
> **Giải thích:** Dòng sạc quá lớn sinh nhiệt Joule $I^2R$ dữ dội trong cell kín chân không, có thể gây ra hiện tượng thoát nhiệt phá hủy (Thermal Runaway).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 40
**Mối nguy hiểm lớn nhất đối với pin sạc Lithium trong môi trường chân không của vũ trụ là gì?**

- **A.** Chất điện phân bị đông đặc thành tinh thể băng đá
- **B.** Bề mặt vỏ kim loại hút bụi tĩnh điện ngoài vũ trụ
- **C.** Lớp vỏ ngoài bị oxy hóa rỉ sét do bức xạ ion hóa
- **D.** Áp suất khí tích tụ gây phồng và nổ túi pin mềm

> **Đáp án:** **D**  
> **Giải thích:** Chênh lệch áp suất giữa bên trong túi pin và chân không vũ trụ làm tăng nguy cơ nứt vỡ vỏ bọc nếu pin bị quá nhiệt.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 41
**Khái niệm 'Năng lượng riêng' (Specific Energy) của pin được đo bằng đơn vị nào sau đây?**

- **A.** Ampe trên mét
- **B.** Volt trên giây
- **C.** Watt-giờ trên kilogam
- **D.** Watt

> **Đáp án:** **C**  
> **Giải thích:** Năng lượng riêng tính theo trọng lượng phản ánh mật độ tích trữ năng lượng trên một đơn vị khối lượng pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 42
**Ưu điểm chính của dòng pin Lithium-Polymer (Li-Po) so với dòng pin Li-ion vỏ trụ truyền thống (như cell 18650) là gì?**

- **A.** Vận hành bền bỉ và hoàn toàn không bị lão hóa
- **B.** Dạng túi dẹp mỏng nhẹ, tối ưu hóa đóng gói
- **C.** Điện áp hoạt động danh định cao hơn gấp mười lần
- **D.** Khả năng tự tích trữ điện không cần nạp pin

> **Đáp án:** **B**  
> **Giải thích:** Cell Li-Po dạng túi dẹp (pouch cell) dễ dàng xếp chồng vừa khít vào các khoang đáy hoặc thành bên của kết cấu CubeSat.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 43
**Điện áp danh định của một tế bào (cell) pin Li-Po tiêu chuẩn là bao nhiêu?**

- **A.** 12.0 V
- **B.** 5.0 V
- **C.** 3.7 V
- **D.** 1.2 V

> **Đáp án:** **C**  
> **Giải thích:** Điện áp làm việc trung bình (Nominal Voltage) của một tế bào hóa học Li-Po là 3.7V.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 44
**Điện áp đo được tại hai cực của tế bào pin Li-Po khi được sạc đầy 100% dung lượng ở trạng thái nghỉ là bao nhiêu?**

- **A.** 3.7 V
- **B.** 4.2 V
- **C.** 5.0 V
- **D.** 3.3 V

> **Đáp án:** **B**  
> **Giải thích:** Mức điện áp ngưỡng cắt sạc của cell Li-Po tiêu chuẩn là chính xác 4.2V (±0.05V).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 45
**Ngưỡng điện áp xả tối thiểu an toàn của một tế bào pin Li-Po để tránh phá hủy cấu trúc tinh thể điện cực là:**

- **A.** 2.0 V
- **B.** 3.0 V
- **C.** 1.0 V
- **D.** 0 V

> **Đáp án:** **B**  
> **Giải thích:** Khi điện áp tụt dưới 3.0V, cực âm đồng bị hòa tan vào dung dịch điện phân gây mất dung lượng vĩnh viễn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 46
**Khi xả pin dưới mức điện áp 2.5V, hiện tượng tiêu cực nào sẽ xảy ra bên trong cell pin Li-Po?**

- **A.** Tế bào pin tự động biến đổi thành tụ điện gốm
- **B.** Nhiệt độ cell pin tụt nhanh về độ không tuyệt đối
- **C.** Cầu nối đồng gây chập nội bộ và hỏng cell pin
- **D.** Khối pin tự kích hoạt cơ chế hồi phục dung lượng

> **Đáp án:** **C**  
> **Giải thích:** Sự hình thành đuôi gai đồng (Copper Shunts) làm chập hai cực bên trong; sạc lại cell pin xả sâu rất dễ gây cháy nổ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 47
**Chu kỳ nạp pin 2 pha CC/CV kinh điển gồm những giai đoạn nối tiếp nào?**

- **A.** Pha nạp ngắt quãng theo xung rồi chuyển sang nạp liên tục
- **B.** Pha nạp dòng không đổi rồi đến pha nạp áp không đổi
- **C.** Pha nạp điện áp tăng dần rồi xả kiệt dung lượng khối pin
- **D.** Pha nạp đảo chiều cực tính phối hợp xung điện áp âm

> **Đáp án:** **B**  
> **Giải thích:** Thuật toán CC/CV tối ưu hóa tốc độ sạc nhanh mà không làm điện áp tế bào vượt quá ngưỡng nguy hiểm 4.2V.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 48
**Trong giai đoạn Constant Current (CC) của mạch sạc, đại lượng điện nào được mạch giữ cố định?**

- **A.** Nhiệt độ môi trường
- **B.** Điện trở nội của pin
- **C.** Cường độ dòng điện nạp vào pin
- **D.** Điện áp hai cực của pin

> **Đáp án:** **C**  
> **Giải thích:** Mạch sạc hoạt động như một nguồn dòng ổn định, đẩy năng lượng vào pin làm điện áp cell tăng dần đều.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 49
**Trong giai đoạn Constant Voltage (CV) của mạch sạc, đại lượng điện nào được giữ cố định?**

- **A.** Điện áp đặt lên pin được giữ cố định ở 4.2V
- **B.** Công suất nạp vào pin tăng liên tục theo giờ
- **C.** Tần số xung nhịp chuyển mạch của khối nguồn buck
- **D.** Dòng điện nạp được duy trì ở mức danh định cao

> **Đáp án:** **A**  
> **Giải thích:** Khi áp pin chạm 4.2V, mạch chuyển sang nguồn áp 4.2V cố định; dòng điện giảm dần theo hàm mũ khi pin tiệm cận trạng thái bão hòa.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 50
**Điều kiện để mạch sạc TP4056 quyết định chấm dứt chu kỳ sạc (Charge Termination) trong pha CV là gì?**

- **A.** Khi điện áp tế bào pin hóa học vượt quá ngưỡng 5V
- **B.** Khi nhiệt độ bề mặt vỏ pin chạm ngưỡng tám mươi độ
- **C.** Khi dòng nạp sụt dưới một phần mười định mức
- **D.** Khi tổng thời gian nạp đạt mốc chính xác một giờ

> **Đáp án:** **C**  
> **Giải thích:** Khi dòng giảm xuống dưới 10% dòng cài đặt (ví dụ dưới 50mA đối với dòng 500mA), chip sạc ngắt hoàn toàn dòng nạp.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 51
**Khái niệm 'Mạch bảo vệ pin' (Battery Protection Circuit - PCM/BMS) tích hợp trên khối pin Li-Po có chức năng gì?**

- **A.** Lưu trữ dữ liệu lịch sử bay vào chip nhớ flash
- **B.** Tự ngắt pin khi quá nạp, quá xả hoặc đoản mạch
- **C.** Nâng mức điện áp danh định của cell lên gấp đôi
- **D.** Đổi dòng điện một chiều sang dạng dòng xoay chiều

> **Đáp án:** **B**  
> **Giải thích:** Mạch bảo vệ gồm IC giám sát (như DW01A) điều khiển cặp MOSFET kép ngắt cell pin tức thời khi có sự cố nguy hiểm.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 52
**Nếu phụ tải vô tình bị ngắn mạch (chập cực dương vào cực âm), mạch bảo vệ pin sẽ phản ứng như thế nào?**

- **A.** Tự gia tăng điện trở nội trên đường dẫn nguồn
- **B.** Ngay lập tức phát tín hiệu kích nổ khối tế bào
- **C.** Tiếp tục bơm dòng điện cực đại vào điểm ngắn mạch
- **D.** Ngắt nhanh khóa MOSFET tải để cách ly khối pin

> **Đáp án:** **D**  
> **Giải thích:** Cơ chế bảo vệ ngắn mạch siêu nhanh ngăn dòng phóng hàng trăm Ampe làm nóng chảy cell pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 53
**Tụ điện lọc ngõ ra của mạch nguồn EPS thường được kết hợp giữa tụ gốm MLCC và tụ Tantalum nhằm mục đích gì?**

- **A.** Tăng tính thẩm mỹ cơ khí cho bố cục của bo mạch
- **B.** Gia tăng khối lượng tổng thể của toàn bộ vệ tinh
- **C.** Thay thế hoàn toàn vai trò của bộ pin dự trữ
- **D.** Kết hợp lọc nhiễu cao tần và đáp ứng xung dòng

> **Đáp án:** **D**  
> **Giải thích:** Sự kết hợp này mang lại trở kháng nội ESR cực thấp trên toàn bộ dải tần từ tần số thấp đến hàng trăm megahertz.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 54
**Ưu điểm nổi trội của tụ điện Tantalum so với tụ điện phân nhôm (Aluminum Electrolytic) trong thiết kế CubeSat là gì?**

- **A.** Tụ Tantalum chịu được nhiệt độ của ngọn lửa hở
- **B.** Tụ Tantalum có thể biến đổi chức năng thành pin
- **C.** Tụ điện phân nhôm có giá thành chế tạo rẻ hơn
- **D.** Điện phân thể rắn không bay hơi trong chân không

> **Đáp án:** **D**  
> **Giải thích:** Chất điện phân lỏng trong tụ nhôm thông thường sẽ bay hơi nhanh chóng qua lớp gioăng cao su trong chân không, gây nổ tụ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 55
**Đường nguồn 3.3V cấp cho vi điều khiển OBC yêu cầu độ gợn sóng điện áp (Voltage Ripple) tối đa thông thường không nên vượt quá:**

- **A.** 300 mV đến 500 mV
- **B.** 100 mV đến 200 mV
- **C.** 800 mV đến 1000 mV
- **D.** 30 mV đến 50 mV

> **Đáp án:** **D**  
> **Giải thích:** Nhiễu gợn sóng nguồn quá lớn có thể làm sai lệch kết quả đo của bộ ADC và gây bất ổn định cho mạch khóa số của CPU.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 56
**Khái niệm 'Điện áp Dropout' (Dropout Voltage) của một mạch ổn áp được định nghĩa là gì?**

- **A.** Điện áp đo được khi khối pin sạc đạt mức đầy
- **B.** Mức điện áp làm vi điều khiển bị sập nguồn
- **C.** Điện áp phóng tia lửa điện giữa các điểm tiếp xúc
- **D.** Độ chênh áp tối thiểu để giữ ổn định đầu ra

> **Đáp án:** **D**  
> **Giải thích:** Nếu hiệu số $(V_{in} - V_{out})$ nhỏ hơn mức Dropout, điện áp ngõ ra sẽ tụt theo ngõ vào mà không thể giữ mức ổn định.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 57
**Trong kiến trúc nguồn của CubeSat, tại sao đường nguồn nuôi phân hệ OBC luôn được ưu tiên duy trì cao nhất?**

- **A.** Vì vi điều khiển OBC tiêu thụ ít năng lượng nhất
- **B.** Vì OBC là khối điều khiển duy trì toàn bộ vệ tinh
- **C.** Vì bo mạch OBC tích hợp đèn LED hiển thị nhịp tim
- **D.** Vì chiều dài dây dẫn từ nguồn tới OBC là ngắn nhất

> **Đáp án:** **B**  
> **Giải thích:** OBC phải luôn là thiết bị được cấp nguồn cuối cùng bị ngắt và là thiết bị đầu tiên được phục hồi sau sự cố nguồn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 58
**Khái niệm 'Power-On Reset' (POR) trong hệ thống điện tử của vệ tinh có vai trò gì?**

- **A.** Tự động khởi động lại vi điều khiển theo chu kỳ định sẵn
- **B.** Tắt nguồn toàn bộ hệ thống khi khối pin cạn kiệt dung lượng
- **C.** Xóa sạch toàn bộ cấu trúc dữ liệu trên bộ nhớ Flash SPI
- **D.** Giữ chip ở trạng thái Reset cho đến khi nguồn cấp đạt ổn định

> **Đáp án:** **D**  
> **Giải thích:** POR ngăn CPU thực thi lệnh sai lệch trong giai đoạn điện áp nguồn đang tăng dần chưa đạt mức logic ổn định.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 59
**Tại sao trên vệ tinh các đường nguồn 3.3V và 5V thường được thiết kế tách biệt giữa khối Tương tự (Analog) và khối Số (Digital)?**

- **A.** Giúp việc bố trí chân linh kiện trên bo dễ dàng
- **B.** Tăng gấp đôi khả năng tải dòng của nguồn cấp
- **C.** Tránh xung nhiễu số lan truyền sang khối tương tự
- **D.** Hoàn toàn không mang lại lợi ích kỹ thuật cụ thể

> **Đáp án:** **C**  
> **Giải thích:** Mạch số sinh ra gai nhiễu liên tục khi các cổng logic lật trạng thái; cô lập đường nguồn analog bảo đảm độ chính xác đo lường.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 60
**Chức năng 'Giám sát Dòng điện Tức thời' (Current Sensing) trên từng nhánh phân phối nguồn giúp EPS đạt được mục tiêu an toàn nào?**

- **A.** Phát hiện quá dòng hoặc ngắn mạch trên từng nhánh
- **B.** Làm mát thụ động các đường dây dẫn nguồn trên bo
- **C.** Tự động gia tăng dung lượng danh định của pin sạc
- **D.** Đo vận tốc bay tức thời của vệ tinh trên quỹ đạo

> **Đáp án:** **A**  
> **Giải thích:** Cảm biến dòng cho phép EPS ngắt kịp thời nhánh tải bị ngắn mạch trước khi toàn bộ hệ thống sập nguồn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 61
**Mạch sạc pin Lithium chuyên dụng TP4056 sử dụng thuật toán nạp thông minh nào để nạp an toàn cho pin Li-Po?**

- **A.** Thuật toán nạp dòng không đổi và áp không đổi
- **B.** Thuật toán nạp bằng chuỗi xung dòng xoay chiều
- **C.** Thuật toán nạp cưỡng bức mức điện áp vượt ngưỡng
- **D.** Thuật toán liên tục chuyển đổi giữa chu kỳ nạp xả

> **Đáp án:** **A**  
> **Giải thích:** TP4056 quản lý chính xác quá trình nạp pin Li-Po với pha dòng ổn định (CC) và pha ghim áp 4.2V (CV).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 62
**Điện áp nguồn một chiều (DC) ngõ vào danh định thích hợp để cấp cho vi mạch sạc TP4056 hoạt động tối ưu nằm trong dải nào?**

- **A.** 1.5V đến 3.0V
- **B.** 24V đến 48V
- **C.** 4.5V đến 5.5V
- **D.** 12V đến 24V

> **Đáp án:** **C**  
> **Giải thích:** TP4056 hoạt động chuẩn ở dải điện áp ngõ vào 4.5V - 5.5V, hoàn toàn tương thích với chuẩn nguồn USB hoặc mảng pin Mặt Trời 5V.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 63
**Cường độ dòng sạc tối đa mà một vi mạch sạc TP4056 tiêu chuẩn có thể cung cấp cho pin Li-Po là bao nhiêu?**

- **A.** 1000 mA
- **B.** 500 mA
- **C.** 5000 mA
- **D.** 100 mA

> **Đáp án:** **A**  
> **Giải thích:** TP4056 có khả năng cấp dòng nạp tối đa $1000\text{ mA}$ trong điều kiện tản nhiệt tối ưu trên bo mạch.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 64
**Cường độ dòng sạc nạp vào pin của vi mạch TP4056 được cấu hình bằng linh kiện phần cứng nào trên bo mạch?**

- **A.** Bằng điện trở nối từ chân lập trình xuống mass
- **B.** Bằng máy biến áp xung hạ áp tích hợp trên bo mạch
- **C.** Bằng cuộn cảm lọc nối tiếp trên đường nguồn vào
- **D.** Bằng bộ tạo dao động thạch anh tần số megahertz

> **Đáp án:** **A**  
> **Giải thích:** Dòng sạc được lập trình theo công thức: $I_{bat} = (V_{prog} / R_{prog}) \times 1200 = (1.0\text{V} / R_{prog}) \times 1200$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 65
**Nếu gắn một điện trở $R_{prog} = 1.2\text{ k}\Omega$ tại chân PROG của TP4056, dòng sạc danh định cực đại vào pin sẽ là:**

- **A.** 1000 mA
- **B.** 100 mA
- **C.** 500 mA
- **D.** 120 mA

> **Đáp án:** **A**  
> **Giải thích:** $I_{bat} = (1.0 / 1200) \times 1200 = 1.0\text{ A} = 1000\text{ mA}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 66
**Nếu muốn cấu hình dòng sạc nạp vào pin Li-Po an toàn ở mức 500 mA, giá trị điện trở $R_{prog}$ cần chọn là bao nhiêu?**

- **A.** 2.4 kOhm
- **B.** 1.2 kOhm
- **C.** 10 kOhm
- **D.** 100 Ohm

> **Đáp án:** **A**  
> **Giải thích:** $R_{prog} = (1.0\text{V} / 0.5\text{A}) \times 1200 = 2400\ \Omega = 2.4\text{ k}\Omega$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 67
**Chân số 7 (CHRG) và chân số 6 (STDBY) của vi mạch sạc TP4056 có nhiệm vụ chức năng gì?**

- **A.** Nối trực tiếp tới chân kích hoạt cuộn dây rơ le
- **B.** Điều khiển đèn LED báo đang sạc và đã sạc đầy
- **C.** Đóng vai trò làm chân giao tiếp nạp nạp phần mềm
- **D.** Thu thập thông tin nhiệt độ môi trường bên ngoài

> **Đáp án:** **B**  
> **Giải thích:** Các chân này có cấu trúc cực thu hở (Open-drain), kéo đèn LED sáng báo trạng thái sạc thực tế của khối pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 68
**Khi pin Li-Po đã được sạc đầy 100%, đèn LED trạng thái nối với chân STDBY của TP4056 sẽ có trạng thái gì?**

- **A.** Đèn nhấp nháy nhanh
- **B.** Đèn phát nổ
- **C.** Đèn tắt hoàn toàn
- **D.** Đèn STDBY bật sáng

> **Đáp án:** **D**  
> **Giải thích:** Khi chu kỳ sạc kết thúc thành công, chân CHRG ngắt mạch và chân STDBY dẫn dòng làm sáng LED báo sạc đầy.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 69
**Nếu pin Li-Po bị xả quá sâu xuống dưới 2.9V, TP4056 sẽ khởi động quá trình nạp bằng chế độ nào trước?**

- **A.** 0.01 đến 0.05 Ohm
- **B.** 10 đến 20 Ohm
- **C.** 500 đến 1000 Ohm
- **D.** 1.0 đến 2.5 Mega-Ohm

> **Đáp án:** **C**  
> **Giải thích:** Sạc nhỏ giọt bảo vệ cấu trúc hóa học của cell pin xả sâu, ngăn hiện tượng phát nhiệt đột ngột.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 70
**Nhiệt độ hoạt động an toàn của IC sạc TP4056 được kiểm soát bởi mạch bảo vệ quá nhiệt tích hợp theo cơ chế nào?**

- **A.** Gia tăng điện áp ngõ vào mạch nạp lên mức tối đa
- **B.** Kích hoạt còi báo động âm thanh bên trong vỏ
- **C.** Tự động ngắt hoàn toàn nguồn điện cấp cho vệ tinh
- **D.** Tự hạ dòng sạc khi nhiệt độ chip vượt ngưỡng nóng

> **Đáp án:** **D**  
> **Giải thích:** Vòng điều khiển nhiệt độ nội bộ (Thermal Feedback) tự động hạ dòng sạc để ngăn chip bị phá hủy do nhiệt quá mức.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 71
**Thành phần cuộn cảm (Inductor) trong mạch DC-DC Buck đóng vai trò vật lý cốt lõi nào?**

- **A.** Chuyển hóa điện năng thành nhiệt năng tiêu tán
- **B.** Ngăn chặn sóng cao tần lọt vào mạch điều khiển
- **C.** Tích trữ năng lượng từ trường và duy trì dòng tải
- **D.** Đo lường cường độ dòng điện tiêu thụ của phụ tải

> **Đáp án:** **C**  
> **Giải thích:** Cuộn cảm phối hợp với tụ điện làm phẳng dòng điện chuyển mạch, tạo ra điện áp ngõ ra DC liên tục và ổn định.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 72
**Hiệu suất chuyển đổi năng lượng của một mạch DC-DC Buck switching chất lượng cao trên vệ tinh CubeSat thường đạt khoảng:**

- **A.** 30% đến 40%
- **B.** 60% đến 70%
- **C.** 88% đến 95%
- **D.** 45% đến 55%

> **Đáp án:** **C**  
> **Giải thích:** Tổn hao đóng cắt rất nhỏ trên các transistor MOSFET hiện đại giúp mạch Buck đạt hiệu suất năng lượng trên 90%.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 73
**Khi phụ tải công suất 5V tắt không hoạt động, mạch DC-DC Boost nên được điều khiển như thế nào để tiết kiệm điện?**

- **A.** Nâng điện áp ngõ ra của bộ chuyển đổi lên mức 9V
- **B.** Đấu nối điện trở xả nhiệt phụ trợ vào mạch ra
- **C.** Kéo chân kích hoạt IC Boost xuống LOW để ngắt mạch
- **D.** Cho phép mạch tiếp tục hoạt động liên tục tự do

> **Đáp án:** **C**  
> **Giải thích:** Vô hiệu hóa bộ Boost khi không có nhu cầu tải 5V triệt tiêu dòng tiêu thụ tĩnh (Quiescent Current) của bộ biến đổi.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 74
**Vi mạch chuyên dụng MAX17048 được tích hợp trên bo mạch EPS của CubeSat đảm nhận chức năng gì?**

- **A.** Khối vi mạch tiền khuếch đại tín hiệu âm tần
- **B.** Khối vi mạch giải mã tín hiệu luồng video nén
- **C.** Khối biến đổi nguồn xoay chiều thành một chiều
- **D.** Ước lượng dung lượng pin theo thời gian thực

> **Đáp án:** **D**  
> **Giải thích:** MAX17048 giám sát chính xác điện áp tức thời và tỷ lệ phần trăm dung lượng pin còn lại của cell Li-Po.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 75
**Giao thức truyền thông nào được vi mạch MAX17048 sử dụng để gửi dữ liệu điện áp và dung lượng về cho OBC?**

- **A.** Giao thức I2C 2 dây
- **B.** Giao thức SPI 4 dây
- **C.** Giao thức UART nối tiếp
- **D.** Giao thức CAN Bus

> **Đáp án:** **A**  
> **Giải thích:** MAX17048 là thiết bị I2C Slave tiêu chuẩn, kết nối với OBC thông qua hai đường dây dữ liệu SDA và xung nhịp SCL.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 76
**Địa chỉ thiết bị I2C (7-bit I2C Address) cố định theo thiết kế phần cứng của vi mạch MAX17048 là giá trị nào sau đây?**

- **A.** 0x50
- **B.** 0x77
- **C.** 0x68
- **D.** 0x36

> **Đáp án:** **D**  
> **Giải thích:** Địa chỉ I2C 7-bit của MAX17048 được nhà sản xuất ấn định cố định trong phần cứng là 0x36 (0b0110110).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 77
**Để gửi lệnh đọc thanh ghi từ MAX17048 qua I2C, byte địa chỉ ghi (Write Address) tương ứng xuất lên bus là:**

- **A.** 0x6C
- **B.** 0xFF
- **C.** 0x36
- **D.** 0x6D

> **Đáp án:** **A**  
> **Giải thích:** Byte địa chỉ 8-bit trên đường bus I2C: 7 bit địa chỉ dịch trái 1 bit kết hợp bit R/W=0 cho ra $0x36 \times 2 = 0x6C$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 78
**Byte địa chỉ đọc (Read Address) 8-bit của MAX17048 trên bus I2C có giá trị hexa là bao nhiêu?**

- **A.** 0x6C
- **B.** 0x36
- **C.** 0x70
- **D.** 0x6D

> **Đáp án:** **D**  
> **Giải thích:** Byte đọc I2C gồm 7 bit địa chỉ kết hợp với bit R/W=1 ở vị trí LSB: $(0x36 \ll 1) | 1 = 0x6C | 1 = 0x6D$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 79
**Thuật toán độc quyền nào được tích hợp bên trong chip MAX17048 để ước tính dung lượng pin mà không cần điện trở đo dòng?**

- **A.** Thuật toán ModelGauge
- **B.** Thuật toán đếm Coulomb kinh điển
- **C.** Thuật toán Kalman Filter
- **D.** Thuật toán học sâu CNN

> **Đáp án:** **A**  
> **Giải thích:** Thuật toán ModelGauge liên tục theo dõi hành vi động của điện áp pin kết hợp với mô hình toán học của cell Li-Po.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 80
**Ưu thế vượt trội của thuật toán ModelGauge trên MAX17048 so với phương pháp đếm Coulomb truyền thống là gì?**

- **A.** Đo được mức điện áp cao lên tới một nghìn Vôn
- **B.** Vận hành bền bỉ không cần nguồn xung thạch anh
- **C.** Tự vận hành mà hoàn toàn không cần cấp điện áp
- **D.** Không cần trở shunt đo dòng điện của phụ tải

> **Đáp án:** **D**  
> **Giải thích:** Loại bỏ điện trở shunt giảm sụt áp trên đường nguồn công suất và không bị lỗi trôi tích phân dòng điện theo thời gian.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 81
**Thanh ghi `VCELL` bên trong vi mạch MAX17048 có địa chỉ thanh ghi là bao nhiêu?**

- **A.** 0x04 và 0x05
- **B.** 0x02 và 0x03
- **C.** 0x00 và 0x01
- **D.** 0xFE và 0xFF

> **Đáp án:** **B**  
> **Giải thích:** Địa chỉ thanh ghi 0x02 lưu byte cao (MSB) và 0x03 lưu byte thấp (LSB) của kết quả đo điện áp tế bào pin 16-bit.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 82
**Độ phân giải của mỗi đơn vị LSB trong thanh ghi `VCELL` của MAX17048 để tính toán điện áp thực tế là bao nhiêu?**

- **A.** 78.125 micro-Volt
- **B.** 1.0 V
- **C.** 0.1 V
- **D.** 10 mV

> **Đáp án:** **A**  
> **Giải thích:** Mỗi đơn vị LSB của thanh ghi VCELL tương ứng chính xác với $\frac{1.25\text{ mV}}{16} = 0.000078125\text{ V}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 83
**Nếu thanh ghi 16-bit `VCELL` của MAX17048 đọc được giá trị nhị phân có trọng số số nguyên là 48000, điện áp của pin là:**

- **A.** 3.00 V
- **B.** 3.75 V
- **C.** 4.20 V
- **D.** 5.00 V

> **Đáp án:** **B**  
> **Giải thích:** Điện áp pin: $V = 48000 \times 0.000078125\text{ V} = 3.75\text{ V}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 84
**Thanh ghi `SOC` (State of Charge) bên trong vi mạch MAX17048 có địa chỉ thanh ghi là bao nhiêu?**

- **A.** 0x04 và 0x05
- **B.** 0x08 và 0x09
- **C.** 0x02 và 0x03
- **D.** 0x0C và 0x0D

> **Đáp án:** **A**  
> **Giải thích:** Thanh ghi 16-bit tại địa chỉ 0x04 (MSB) và 0x05 (LSB) lưu tỷ lệ phần trăm dung lượng pin còn lại.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 85
**Cấu trúc biểu diễn dữ liệu của tỷ lệ phần trăm dung lượng pin trong thanh ghi `SOC` của MAX17048 được định dạng như thế nào?**

- **A.** Mã BCD lưu 2 chữ số thập phân
- **B.** Số nguyên đơn 8-bit từ 0 đến 100
- **C.** Byte cao lưu phần nguyên, byte thấp lưu phần lẻ
- **D.** Số thực dấu phẩy động 32-bit chuẩn IEEE

> **Đáp án:** **C**  
> **Giải thích:** Byte MSB cho biết trực tiếp số phần trăm nguyên (ví dụ 85%), còn byte LSB cung cấp độ chính xác phần lẻ $\frac{1}{256}\%$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 86
**Nếu byte cao của thanh ghi `SOC` đọc được giá trị là 0x55 (thập phân là 85), điều này có nghĩa là:**

- **A.** Dung lượng pin còn lại 55%
- **B.** Dung lượng pin còn lại 85%
- **C.** Dung lượng pin còn lại 15%
- **D.** Dung lượng pin còn lại 35%

> **Đáp án:** **B**  
> **Giải thích:** Byte cao tại thanh ghi 0x04 đại diện cho phần nguyên của mức SOC, $0x55 = 85\%$ dung lượng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 87
**Thanh ghi `MODE` (Địa chỉ 0x06) của MAX17048 hỗ trợ lệnh ghi đặc biệt nào để yêu cầu vi mạch tự khởi động lại phần mềm?**

- **A.** Ghi giá trị 0x0000 để yêu cầu tắt nguồn vi mạch
- **B.** Ghi giá trị 0xFFFF để nạp lại cấu hình mặc định
- **C.** Ghi lệnh Quick-Start để tái khởi tạo thuật toán
- **D.** Hoàn toàn không hỗ trợ lệnh tái khởi động mềm

> **Đáp án:** **C**  
> **Giải thích:** Lệnh Quick-Start ép IC tái khởi động việc ước lượng dung lượng pin dựa trên điện áp hở mạch ngay tại thời điểm đó.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 88
**Dòng điện tiêu thụ tĩnh (Quiescent Current) của vi mạch MAX17048 ở chế độ hoạt động bình thường là khoảng bao nhiêu?**

- **A.** 20 đến 25 micro-Ampe
- **B.** 3 đến 5 mili-Ampe
- **C.** 80 đến 100 mili-Ampe
- **D.** 0.8 đến 1.2 Ampe

> **Đáp án:** **A**  
> **Giải thích:** Mức tiêu thụ dòng cực thấp (~23 µA) bảo đảm việc đo lường dung lượng không làm hao tổn đáng kể năng lượng của pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 89
**Chế độ 'Sleep Mode' của MAX17048 cho phép đưa dòng tiêu thụ tĩnh của vi mạch xuống mức kỷ lục nào?**

- **A.** Dòng tiêu thụ tĩnh xấp xỉ mức năm mươi mili-Ampe
- **B.** Dòng tĩnh đạt mức ba micro-Ampe hoặc nhỏ hơn
- **C.** Dòng tiêu thụ giữ nguyên và không thể cắt giảm
- **D.** Dòng tĩnh duy trì cố định ở mức một mili-Ampe

> **Đáp án:** **B**  
> **Giải thích:** Chế độ Deep Sleep tắt hầu hết các khối ngoại vi và lõi CPU chính, chỉ duy trì khối RTC và bộ nhớ ULP nên tiêu thụ dòng cực thấp cỡ vài uA.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 90
**Khi mức điện áp của pin Li-Po giảm xuống dưới 3.3V, đồ thị phóng điện (Discharge Curve) của pin có đặc điểm gì?**

- **A.** Điện áp tăng dần trở lại
- **B.** Điện áp giữ phẳng nằm ngang
- **C.** Điện áp sụt dốc cực kỳ nhanh và đột ngột
- **D.** Dòng điện tự động tăng gấp đôi

> **Đáp án:** **C**  
> **Giải thích:** Đường đặc tuyến xả của pin Li-Po có vùng thềm rất phẳng từ 3.8V đến 3.5V, sau đó lao dốc thẳng đứng khi tụt dưới 3.4V.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 91
**Tại sao không thể chỉ dùng cầu phân áp đơn thuần kết hợp chân ADC để đo dung lượng phần trăm chính xác của pin Li-Po?**

- **A.** Vì ADC hoàn toàn không đo được áp một chiều
- **B.** Vì trở kháng cầu phân áp dễ gây đoản mạch nổ pin
- **C.** Vì đặc tuyến áp rất phẳng và biến thiên theo tải
- **D.** Vì mạch phân áp không thể chịu được mức điện áp 4V

> **Đáp án:** **C**  
> **Giải thích:** Nội trở của pin làm sụt áp khi dòng tải tăng vọt, nếu chỉ đo áp đơn thuần bằng ADC sẽ ước tính sai lệch hoàn toàn mức dung lượng pin.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 92
**Hơn nữa, nếu mắc cố định một cầu phân áp gồm hai điện trở $10\text{ k}\Omega$ trực tiếp vào hai cực pin Li-Po, nhược điểm là gì?**

- **A.** Làm gia tăng tốc độ nạp điện của khối pin sạc
- **B.** Làm suy hao và đánh thủng lớp cách điện vi mạch
- **C.** Khiến nhiệt độ bề mặt ngoài của vỏ pin tăng cao
- **D.** Gây dòng rò âm thầm xả kiệt pin khi hệ thống tắt

> **Đáp án:** **D**  
> **Giải thích:** Dòng rò $I = 4.2\text{V} / 20\text{ k}\Omega = 210\ \mu\text{A}$ tiêu hao liên tục hàng tháng trời có thể làm pin xả kiệt nếu vệ tinh nằm lâu trong kho.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 93
**Cường độ dòng điện tiêu thụ điển hình của vi điều khiển ESP32 khi hoạt động ở chế độ chạy đầy tải bình thường là bao nhiêu?**

- **A.** 8 Ampe đến 10 Ampe
- **B.** 3 Ampe đến 5 Ampe
- **C.** 1 micro-Ampe đến 5 micro-Ampe
- **D.** 50 mA đến 80 mA

> **Đáp án:** **D**  
> **Giải thích:** Mức tiêu thụ 50-80 mA khi chạy thuần CPU là gánh nặng lớn đối với bộ pin 1U nếu không có chiến lược ngủ xen kẽ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 94
**Nếu vệ tinh thức 2 giây tiêu thụ 80 mA và ngủ 58 giây tiêu thụ 0.1 mA trong chu kỳ 60 giây, dòng tiêu thụ trung bình là:**

- **A.** 80.1 mA
- **B.** 40.0 mA
- **C.** 2.76 mA
- **D.** 0.20 mA

> **Đáp án:** **C**  
> **Giải thích:** $I_{avg} = (2\text{s} \times 80\text{mA} + 58\text{s} \times 0.1\text{mA}) / 60\text{s} = (160 + 5.8) / 60 \approx 2.76\text{ mA}$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 95
**Tụ điện Tantali có ký hiệu cực tính trên thân linh kiện như thế nào so với tụ hóa thông thường?**

- **A.** Cực tính của tụ Tantali có thể đảo ngược tự do
- **B.** Tụ dán Tantali được thiết kế gồm ba chân hàn nối
- **C.** Vạch trên thân chỉ cực dương, ngược với tụ hóa
- **D.** Tụ Tantali hoàn toàn không mang tính phân cực

> **Đáp án:** **C**  
> **Giải thích:** Quy ước tụ dán Tantali: vạch màu (thường màu cam hoặc đen đậm) đánh dấu chân dương (+); hàn ngược cực sẽ gây cháy nổ linh kiện.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 96
**Mối nguy hiểm vật lý nghiêm trọng khi hàn ngược cực tính của một tụ điện Tantalum trên bo mạch nguồn là gì?**

- **A.** Linh kiện tụ điện tự biến đổi thành cuộn cảm
- **B.** Bo mạch vận hành với nhiệt độ mát mẻ và ổn định
- **C.** Đánh thủng lớp oxide gây ngắn mạch và bốc khói
- **D.** Tụ điện tự động đảo chiều điện áp phân cực

> **Đáp án:** **C**  
> **Giải thích:** Tụ Tantali có cơ chế hỏng ngắn mạch nổ nhiệt khi bị phân cực ngược hoặc quá điện áp đột ngột.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 97
**Mức điện áp định mức (Voltage Rating) khuyến nghị khi lựa chọn tụ Tantalum mắc vào đường nguồn 3.3V và 5V là bao nhiêu?**

- **A.** Chọn hệ số dự phòng tối thiểu gấp đôi
- **B.** Không cần quan tâm điện áp tụ
- **C.** Chọn đúng bằng 3.3V hoặc 5V
- **D.** Chọn loại 1.0V

> **Đáp án:** **A**  
> **Giải thích:** Quy tắc thiết kế không gian yêu cầu giảm tải điện áp (Derating) 50% cho tụ Tantalum để bảo đảm tuổi thọ và độ tin cậy.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 98
**Điện trở nội tương đương (ESR - Equivalent Series Resistance) của tụ điện có ảnh hưởng như thế nào đến khả năng lọc nguồn?**

- **A.** Trị số ESR càng lớn thì mạch lọc nguồn càng tốt
- **B.** Trị số ESR hoàn toàn không ảnh hưởng việc lọc
- **C.** Trị số ESR cao giúp nâng cao điện áp ngõ ra mạch
- **D.** ESR càng nhỏ lọc xung nhiễu và gánh dòng càng tốt

> **Đáp án:** **D**  
> **Giải thích:** Điện trở nội $ESR$ thấp cho phép tụ phóng và nạp dòng tức thời cực lớn mà không sinh nhiệt và không tạo sụt áp cục bộ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 99
**Cuộn cảm dán (SMD Inductor) dùng trong mạch DC-DC Buck của CubeSat cần chọn thông số dòng điện bão hòa (Isat) như thế nào?**

- **A.** Chọn trị số dòng bão hòa bằng đúng không Ampe
- **B.** Lớn hơn dòng đỉnh cực đại để tránh bị bão hòa từ
- **C.** Trị số bão hòa không phụ thuộc dòng điện tải
- **D.** Nhỏ hơn mức dòng điện tiêu thụ trung bình tải

> **Đáp án:** **B**  
> **Giải thích:** Nếu dòng đỉnh vượt quá $I_{sat}$, độ tự cảm $L$ sụt giảm nghiêm trọng, mạch biến thành điện trở thuần gây cháy transistor công suất.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 100
**Hiện tượng 'Thermal Runaway' (Thoát nhiệt phá hủy) trong khối pin Li-Po xảy ra khi nào?**

- **A.** Nhiệt nội quá cao tự xúc tác gây cháy nổ pin
- **B.** Bề mặt khối pin bị chiếu bởi đèn LED tín hiệu
- **C.** Khối pin cạn kiệt hoàn toàn nguồn điện tích
- **D.** Nhiệt độ môi trường của khối pin bị hạ quá thấp

> **Đáp án:** **A**  
> **Giải thích:** Sự cố quá sạc hoặc ngắn mạch sinh nhiệt kích hoạt quá trình tự phân hủy màng ngăn và chất điện phân, tạo thành đám cháy dữ dội.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 101
**Vỏ bọc bảo vệ của bộ pin Li-Po trong CubeSat thường được chế tạo bằng vật liệu gì để bảo đảm an toàn cơ khí và nhiệt?**

- **A.** Làm bằng giấy bìa cứng cách điện chuyên dụng
- **B.** Làm bằng vật liệu nhựa polyme tái chế thông dụng
- **C.** Bằng cao su tổng hợp mềm có khả năng đàn hồi cao
- **D.** Khung hợp kim nhôm có lót cách điện và dẫn nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Khung nhôm bảo vệ cell mềm chống biến dạng cơ khí khi chịu tải phóng và đóng vai trò cầu dẫn nhiệt giải tỏa nhiệt lượng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 102
**Đường ống dẫn nhiệt (Thermal Strap) nối từ hộp pin đến khung sườn vệ tinh có tác dụng gì trong môi trường chân không?**

- **A.** Làm giảm khối lượng tịnh của toàn bộ khối pin
- **B.** Truyền nhiệt từ pin ra vỏ để bức xạ vào vũ trụ
- **C.** Hút ẩm và hơi dung môi hóa học rò rỉ từ tế bào
- **D.** Dẫn dòng điện nạp dự phòng trực tiếp vào pin

> **Đáp án:** **B**  
> **Giải thích:** Trong chân không không có đối lưu không khí, dẫn nhiệt qua các thanh đồng/nhôm bện mềm là phương pháp tản nhiệt sống còn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 103
**Hiện tượng 'Cell Imbalance' (Lệch áp giữa các cell pin) trong bộ pin gồm nhiều cell mắc nối tiếp gây ra rủi ro gì?**

- **A.** Hoàn toàn không gây ra bất kỳ rủi ro nào cho pin
- **B.** Giúp khối pin vận hành mát hơn trong chân không
- **C.** Gia tăng đáng kể dung lượng định mức của khối pin
- **D.** Gây nạp quá áp hoặc xả quá sâu làm hỏng khối pin

> **Đáp án:** **D**  
> **Giải thích:** Sự chênh lệch dung lượng và nội trở giữa các cell tích lũy qua nhiều chu kỳ đòi hỏi phải có mạch cân bằng thụ động hoặc chủ động.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 104
**Mạch cân bằng pin thụ động (Passive Balancing) giải quyết hiện tượng lệch áp bằng phương pháp nào?**

- **A.** Đảo chéo vị trí các cell pin bằng rơ le cơ học
- **B.** Bơm thêm dòng điện từ bộ biến đổi nguồn phụ trợ
- **C.** Ngắt kết nối toàn bộ hệ thống nguồn để nghỉ ngơi
- **D.** Xả bớt áp của cell cao qua trở xả để cân bằng

> **Đáp án:** **D**  
> **Giải thích:** Mạch xả nhánh (Bypass Shunt) tiêu tán năng lượng dư thừa dưới dạng nhiệt để đưa mức điện áp của tất cả các cell về cùng một mốc.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 105
**Tác dụng của lớp băng keo cách điện Kapton (Polyimide) màu vàng quấn quanh khối pin EPS là gì?**

- **A.** Chịu nhiệt cao, cách điện và chống cháy lan
- **B.** Hấp thụ sóng vô tuyến phản xạ bên trong khung vỏ
- **C.** Tăng tính thẩm mỹ quang học cho khối pin lưu trữ
- **D.** Tăng cường tính dẫn điện giữa các vỏ bọc kim loại

> **Đáp án:** **A**  
> **Giải thích:** Băng dính Kapton chịu được nhiệt độ từ -269°C đến +400°C và không bị lão hóa suy biến trong chân không vũ trụ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 106
**Cầu chì tự phục hồi (Polymeric PTC Resettable Fuse) mắc trên đường nguồn pin Li-Po có chức năng bảo vệ nào?**

- **A.** Kích hoạt nhấp nháy đèn LED cảnh báo sự cố
- **B.** Gia tăng cường độ dòng sạc nạp vào cho khối pin
- **C.** Tăng trở kháng ngắt dòng khi quá tải và tự hồi
- **D.** Đo lường chính xác nhiệt độ môi trường xung quanh

> **Đáp án:** **C**  
> **Giải thích:** Cầu chì PTC bảo vệ chống quá dòng thụ động bền vững mà không cần phải thay thế linh kiện sau sự cố chập tải tạm thời.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 107
**Để khởi tạo giao tiếp I2C trên ESP32 làm thiết bị Master đọc vi mạch MAX17048, hàm thư viện cơ bản nào được gọi?**

- **A.** Sử dụng phương thức Serial.begin() để mở cổng nối tiếp
- **B.** Sử dụng phương thức SPI.begin() để bật giao tiếp bus SPI
- **C.** Sử dụng phương thức Wire.begin() để kích hoạt giao tiếp I2C Master
- **D.** Sử dụng phương thức I2C.start() để bật khối ngoại vi phần cứng

> **Đáp án:** **C**  
> **Giải thích:** Hàm Wire.begin() của thư viện Wire.h thiết lập bộ điều khiển I2C phần cứng của ESP32 ở chế độ Master.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 108
**Để chỉ định thanh ghi nội bộ cần truy cập trên MAX17048 (ví dụ thanh ghi VCELL tại địa chỉ `0x02`), lệnh tiếp theo là:**

- **A.** Sử dụng lệnh Wire.write() để ghi địa chỉ thanh ghi mục tiêu vào bộ đệm
- **B.** Sử dụng lệnh Wire.read() để đọc trực tiếp dữ liệu từ thanh ghi
- **C.** Sử dụng lệnh Wire.setRegister() để trỏ con trỏ thanh ghi nội bộ
- **D.** Sử dụng lệnh Wire.send() để phát địa chỉ thanh ghi ra đường bus

> **Đáp án:** **A**  
> **Giải thích:** Lệnh Wire.write(regAddr) ghi địa chỉ thanh ghi mục tiêu vào bộ đệm truyền của Master.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 109
**Sau khi đã ghi địa chỉ thanh ghi cần đọc vào bộ đệm, lệnh nào được gọi để thực sự phát tín hiệu ra bus và kết thúc truyền?**

- **A.** Gọi lệnh Wire.endTransmission() để gửi dữ liệu và kết thúc giao dịch
- **B.** Gọi lệnh Wire.close() để ngắt kết nối đường truyền vật lý của bus
- **C.** Gọi lệnh Wire.stop() để dừng quá trình truyền tín hiệu trên bus
- **D.** Gọi lệnh Wire.finish() để hoàn tất chu kỳ đọc ghi thanh ghi

> **Đáp án:** **A**  
> **Giải thích:** Hàm Wire.endTransmission() thực thi việc phát điều kiện START, truyền byte địa chỉ và byte thanh ghi ra đường truyền.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 110
**MAX17048 trả về dữ liệu 16-bit theo quy ước byte nào trước?**

- **A.** Cả hai byte cùng lúc
- **B.** Byte thấp trước
- **C.** Byte cao trước
- **D.** Không theo quy ước nào

> **Đáp án:** **C**  
> **Giải thích:** Thanh ghi 16-bit của MAX17048 tuân theo chuẩn Big-Endian: byte MSB tại địa chỉ n, byte LSB tại địa chỉ n+1.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 111
**Công thức C++ nào tính toán chính xác điện áp pin (đơn vị Volt) từ giá trị thô `rawVcell` 16-bit theo datasheet MAX17048?**

- **A.** Nhân giá trị thô với điện áp 3.3V rồi chia cho độ phân giải 4095
- **B.** Nhân giá trị thô với hệ số trọng số LSB danh định 0.000078125 V
- **C.** Chia trực tiếp giá trị thô cho hệ số phân dải chuẩn 1024
- **D.** Nhân giá trị thô với hệ số chuyển đổi cố định một phần nghìn

> **Đáp án:** **B**  
> **Giải thích:** Mỗi LSB có trọng số $78.125\ \mu\text{V} = 0.000078125\text{ V}$, tương đương nhân với hệ số $(1.25 / 16000)$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 112
**Nếu đọc được byte cao `soc_msb` và byte thấp `soc_lsb` từ thanh ghi SOC, công thức C++ tính phần trăm dung lượng pin chính xác (dạng float) là:**

- **A.** Lấy byte cao làm phần nguyên và cộng với byte thấp chia cho 256.0
- **B.** Dịch trái byte cao 8 vị trí rồi cộng đại số với giá trị byte thấp
- **C.** Nhân trực tiếp giá trị của byte cao với hệ số một trăm phần trăm
- **D.** Chia trực tiếp giá trị của byte thấp cho hệ số một trăm phần trăm

> **Đáp án:** **A**  
> **Giải thích:** Byte cao là phần nguyên $(0-100\%)$, byte thấp là phần thập phân chia cho $256.0$ ($\frac{1}{256}\%$).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 113
**Hậu tố `ULL` trong biểu thức `10 * 1000000ULL` có ý nghĩa gì trong ngôn ngữ lập trình C++?**

- **A.** Định nghĩa giá trị thời gian theo mili-giây
- **B.** Ký tự cú pháp không có ý nghĩa khi biên dịch
- **C.** Ép kiểu số nguyên 64-bit không dấu chống tràn số
- **D.** Chỉ thị tạo một vòng lặp vô hạn trong bộ đệm

> **Đáp án:** **C**  
> **Giải thích:** Thời gian micro-giây tăng rất nhanh, kiểu số nguyên không dấu 64-bit (uint64_t) bảo đảm lưu trữ chính xác khoảng thời gian dài.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 114
**Lệnh nào được dùng để xác định nguyên nhân đánh thức (Wakeup Cause) của ESP32 sau khi khởi động lại?**

- **A.** Gọi hàm checkWakeup() kiểm tra thanh ghi trạng thái khởi động
- **B.** Gọi hàm esp_sleep_get_wakeup_cause() truy xuất nguyên nhân đánh thức
- **C.** Gọi hàm getResetReason() kiểm tra nguyên nhân Reset của chip
- **D.** Gọi hàm system_status() kiểm tra trạng thái hoạt động của hệ thống

> **Đáp án:** **B**  
> **Giải thích:** Hàm esp_sleep_get_wakeup_cause() trả về hằng số enum xác định sự kiện đã đánh thức CPU.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 115
**Khối mã C++ nào sau đây cài đặt logic bảo vệ pin theo ngưỡng dung lượng một cách hợp lý?**

- **A.** Nếu dung lượng pin dưới 20% thì tắt tải, ngược lại nếu trên 30% thì cho phép bật tải
- **B.** Nếu dung lượng pin dưới 20% thì bật tải, ngược lại nếu trên 30% thì tiến hành tắt tải
- **C.** Bật tắt tải liên tục theo chu kỳ dao động định kỳ mỗi giây một lần
- **D.** Chỉ cho phép bật tải khi dung lượng pin đạt chính xác ngưỡng tuyệt đối 100%

> **Đáp án:** **A**  
> **Giải thích:** Khi pin yếu (SOC < 20%), hệ thống nâng thời gian ngủ lên 120 giây; khi pin khỏe, hệ thống duy trì chu kỳ ngủ ngắn 10 giây.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 116
**Để gửi lệnh phần mềm Reset (Quick-Start) tới thanh ghi `0x06` của MAX17048, chuỗi lệnh Wire C++ chuẩn là gì?**

- **A.** Sử dụng hàm esp_sleep_enable_timer_wakeup() truyền khoảng thời gian micro-giây
- **B.** Sử dụng hàm setTimerWakeup() truyền khoảng thời gian bằng mili-giây
- **C.** Sử dụng hàm timerSleep() kích hoạt đồng hồ đếm lùi phần cứng
- **D.** Cấu hình ngắt ngoài chân GPIO để đánh thức theo chu kỳ định sẵn

> **Đáp án:** **D**  
> **Giải thích:** Thanh ghi MODE (0x06) là thanh ghi 16-bit; ghi giá trị 0x4000 (byte 0x40 theo sau bởi byte 0x00) kích hoạt lệnh Quick-Start.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 117
**Trước khi thực hiện lệnh tắt nguồn phụ tải bằng chân GPIO, tại sao nên gọi hàm `delay(50)` hoặc `Serial.flush()`?**

- **A.** Để kích hoạt quy trình xả cạn khối pin lưu trữ
- **B.** Để khởi động lại hệ thống máy tính trung tâm
- **C.** Đảm bảo dữ liệu phát xong và tụ tải xả an toàn
- **D.** Để làm mát cuộn cảm trong mạch nguồn xung

> **Đáp án:** **C**  
> **Giải thích:** Độ trễ ngắn bảo đảm các giao tiếp ngoại vi kết thúc hoàn chỉnh trước khi nguồn cấp cho linh kiện bị ngắt đột ngột.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 118
**Trong một chu trình bay thực tế của vệ tinh, thứ tự các bước thực thi hợp lý trong hàm `setup()` của phân hệ EPS là gì?**

- **A.** Bật toàn bộ tải công suất, đo dung lượng pin rồi đưa hệ thống vào ngủ sâu
- **B.** Định dạng bộ nhớ lưu trữ, ngắt nguồn hệ thống rồi bật các phân hệ tải
- **C.** Khởi tạo các bus giao tiếp, đo điện áp pin rồi lựa chọn chế độ vận hành
- **D.** Đưa hệ thống vào trạng thái ngủ sâu ngay lập tức trước khi đo đạc

> **Đáp án:** **C**  
> **Giải thích:** Luôn khởi tạo giao tiếp trước, đo kiểm sức khỏe nguồn năng lượng của hệ thống rồi mới quyết định tải nào được phép bật.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 119
**Để đọc giá trị thanh ghi phiên bản phần cứng (Chip ID) hoặc trạng thái cảnh báo của MAX17048 tại thanh ghi `0x08` (CONFIG), hàm gọi là:**

- **A.** Ghi địa chỉ thanh ghi 0x08 rồi gọi Wire.requestFrom() đọc 2 byte cấu hình
- **B.** Gọi hàm Wire.writeConfig() gửi mã cấu hình trực tiếp trên đường bus
- **C.** Đọc cấu hình thanh ghi bằng hàm đặc thù Wire.getConfig()
- **D.** Đọc trực tiếp dữ liệu từ thanh ghi bằng lệnh đơn Wire.read(0x08)

> **Đáp án:** **A**  
> **Giải thích:** Trình tự chuẩn I2C: chọn địa chỉ chip, trỏ địa chỉ thanh ghi mục tiêu, phát Repeated Start và yêu cầu đọc dữ liệu.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 120
**Để tái khởi tạo lại bus I2C nếu phát hiện đường truyền bị kẹt (Bus Hang do chân SDA bị giữ ở mức LOW), giải pháp phần mềm C++ là gì?**

- **A.** Nối chân dữ liệu SDA trực tiếp vào nguồn năm Vôn
- **B.** Tắt toàn bộ hệ thống nguồn điện của máy tính bay
- **C.** Xóa toàn bộ dữ liệu lưu trữ trong bộ nhớ flash
- **D.** Tạo 9 xung clock trên chân SCL rồi khởi tạo lại

> **Đáp án:** **D**  
> **Giải thích:** Chuẩn I2C quy định phát 9 xung Clock trên chân SCL giúp thiết bị Slave đang bị kẹt nhả đường truyền dữ liệu SDA.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 121
**Nếu giá trị đọc được từ thanh ghi SOC là `0x6400`, mức phần trăm pin tương ứng là bao nhiêu?**

- **A.** 0%
- **B.** 100.0%
- **C.** 6.4%
- **D.** 64%

> **Đáp án:** **B**  
> **Giải thích:** 0x64 tương ứng số thập phân 100; phần lẻ tại byte LSB bằng 0x00 nên pin đang đầy hoàn toàn 100%.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 122
**Nếu thanh ghi SOC đọc được giá trị `0x3280`, mức phần trăm dung lượng pin tính toán được là:**

- **A.** 32.8%
- **B.** 50.5%
- **C.** 80.0%
- **D.** 25.0%

> **Đáp án:** **B**  
> **Giải thích:** Byte cao: $0x32 = 50\%$. Byte thấp: $0x80 = 128 \rightarrow 128 / 256 = 0.5\%$. Tổng là $50.5\%$.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 123
**Khi lập trình chế độ Safe Mode cho CubeSat, khối code nào thể hiện đúng nguyên tắc cắt tải không thiết yếu?**

- **A.** Cấu hình chân cấp nguồn ở chế độ ngõ vào có điện trở kéo lên
- **B.** Kéo chân điều khiển nguồn Boost và chân nguồn Payload về mức logic LOW
- **C.** Phát xung PWM với chu kỳ cực đại ra các chân điều khiển nguồn
- **D.** Kéo đồng thời tất cả các chân điều khiển nguồn lên mức logic HIGH

> **Đáp án:** **B**  
> **Giải thích:** Kéo chân kích hoạt nguồn của mạch Boost và các tải phụ xuống mức LOW ngắt toàn bộ dòng cấp, chỉ duy trì nguồn cho OBC.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 124
**Để cập nhật mảng lịch sử trượt (Sliding Window) 10 phần tử của điện áp pin trong C++, thuật toán chuẩn là gì?**

- **A.** Ghi đè giá trị đo mới vào vị trí ô nhớ ngẫu nhiên
- **B.** Xóa toàn bộ giá trị trong mảng phần tử về số 0
- **C.** Đảo ngược thứ tự toàn bộ phần tử trong mảng đo
- **D.** Dịch mảng sang trái rồi ghi giá trị mới vào cuối

> **Đáp án:** **D**  
> **Giải thích:** Cơ chế hàng đợi dịch phần tử bảo đảm mảng luôn chứa đúng 10 mẫu đo gần nhất của hệ thống.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 125
**Tại sao việc tính giá trị trung bình trượt (Moving Average) của điện áp pin lại giúp ích cho việc ra quyết định chuyển chế độ nguồn?**

- **A.** Khử các xung sụt áp tức thời do phụ tải xung
- **B.** Giúp làm hạ nhiệt độ vận hành của khối tế bào pin
- **C.** Tăng tốc độ nạp điện cho khối pin lưu trữ bay
- **D.** Tăng dung lượng lưu trữ thực tế của khối pin sạc

> **Đáp án:** **A**  
> **Giải thích:** Lọc trung bình trượt đóng vai trò như một bộ lọc thông thấp số, loại bỏ các gai sụt áp cục bộ khi phụ tải bật tắt.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 126
**Khái niệm trễ ngưỡng (Hysteresis) trong thuật toán bảo vệ nguồn của EPS có mục đích kỹ thuật gì?**

- **A.** Chống bật tắt liên tục quanh ngưỡng đổi chế độ
- **B.** Giảm bớt tốc độ xung nhịp hoạt động của vi xử lý
- **C.** Giúp khối pin vận hành mát hơn trong chân không
- **D.** Gia tăng điện trở tiếp xúc giữa các dây nối nguồn

> **Đáp án:** **A**  
> **Giải thích:** Ví dụ: Ngắt tải khi áp tụt dưới 3.3V, nhưng chỉ bật lại tải khi áp đã sạc hồi phục vượt trên 3.6V.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 127
**Khi truyền dữ liệu telemetry của EPS qua cổng Serial, định dạng mã kiểm tra tổng đơn giản (Checksum XOR 8-bit) được tính toán như thế nào trong C++?**

- **A.** Cộng dồn số học tất cả các byte dữ liệu trong khung tin lại với nhau
- **B.** Gán mã kiểm tra mặc định cố định bằng giá trị hexa 0xFF
- **C.** Nhân độ dài của khung dữ liệu với hệ số nguyên bằng hai
- **D.** Khởi tạo mã bằng 0 và thực hiện phép toán XOR bit tuần tự với từng byte dữ liệu

> **Đáp án:** **D**  
> **Giải thích:** Toán tử XOR bit (`^=`) tích lũy qua từng byte trong mảng dữ liệu tạo ra mã kiểm tra tính toàn vẹn gói tin gọn nhẹ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 128
**Trong phần mềm EPS chuyên nghiệp, hàm `assert(v >= 0.0f && v <= 5.0f);` có tác dụng gì trong giai đoạn thử nghiệm?**

- **A.** Tự động giải phóng biến điện áp khỏi bộ nhớ đệm
- **B.** Gia tăng tốc độ nạp điện cho khối pin lưu trữ bay
- **C.** Tự động nâng mức điện áp đo được lên năm Vôn
- **D.** Dừng chương trình nếu điện áp nằm ngoài dải đo

> **Đáp án:** **D**  
> **Giải thích:** Cơ chế assert bắt các lỗi suy biến dữ liệu nghiêm trọng ngay trong pha thử nghiệm tích hợp trước khi phóng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 129
**Nguyên tắc cốt lõi trong bài toán cân bằng năng lượng của phân hệ nguồn EPS là gì?**

- **A.** Năng lượng sinh ra trong một chu kỳ phải lớn hơn tổng năng lượng tiêu thụ
- **B.** Năng lượng pin mặt trời luôn phải bằng đúng năng lượng phát sóng vô tuyến
- **C.** Chỉ được phép sử dụng năng lượng nạp từ pin khi vệ tinh ở vùng ánh sáng
- **D.** Tổng dung lượng khối pin dự trữ phải tăng liên tục theo thời gian bay

> **Đáp án:** **A**  
> **Giải thích:** Để duy trì hoạt động lâu dài trên quỹ đạo, điện năng do pin mặt trời tạo ra trong pha sáng phải lớn hơn tổng điện năng toàn bộ vệ tinh tiêu thụ trong cả pha sáng lẫn pha tối.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 130
**Hạn chế lớn nhất của phương án cánh pin mặt trời xòe (Solar Paddle) trên vệ tinh nhỏ là gì?**

- **A.** Chỉ sinh được năng lượng khi hệ thống điều khiển tư thế hướng đúng Mặt Trời
- **B.** Không thể gấp gọn lại trong không gian ống phóng tiêu chuẩn của tên lửa
- **C.** Có trọng lượng riêng quá nhẹ làm mất cân bằng trọng tâm cấu trúc cơ học
- **D.** Làm gia tăng đột ngột nhiệt độ bên trong các bo mạch điện tử trung tâm

> **Đáp án:** **A**  
> **Giải thích:** Cánh pin mặt trời bung xòe có diện tích lớn nhưng đòi hỏi hệ thống định hướng tư thế (ADCS) phải hoạt động chính xác để hướng bề mặt pin vuông góc với tia nắng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 131
**Hiện tượng nào xảy ra ngay sau khi CubeSat tách khỏi ống phóng POD trên tên lửa đẩy?**

- **A.** Vệ tinh quay tự do không kiểm soát quanh các trục với tốc độ góc ban đầu
- **B.** Vệ tinh lập tức dừng quay tuyệt đối nhờ vào từ trường tự nhiên của vỏ nhôm
- **C.** Các tấm pin mặt trời tự động sinh ra dòng điện xoay chiều công suất lớn
- **D.** Toàn bộ các vi điều khiển trên bo mạch tự động chuyển sang chế độ ngủ sâu

> **Đáp án:** **A**  
> **Giải thích:** Lực đẩy của lò xo trong ống phóng POD luôn tạo ra một mô-men quay ban đầu khiến CubeSat bị quay đảo tự do (Tumbling) với tốc độ góc nhất định.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 132
**Yêu cầu bắt buộc về ngân sách nguồn điện khi vệ tinh chuyển sang chế độ Safe Mode là gì?**

- **A.** Đảm bảo công suất phát luôn lớn hơn công suất tiêu thụ tối thiểu
- **B.** Kích hoạt toàn bộ các tải công suất cao để xả nhanh khối pin sạc
- **C.** Tắt hoàn toàn đường nguồn cấp cho máy thu tín hiệu lệnh mặt đất
- **D.** Ngắt kết nối vật lý giữa khối pin quang điện và bộ nạp năng lượng

> **Đáp án:** **A**  
> **Giải thích:** Quy tắc Net-Positive Power trong Safe Mode yêu cầu cắt bỏ mọi tải ngoại vi không thiết yếu, sao cho dòng điện sạc từ pin mặt trời luôn bù đắp được dòng tiêu thụ cơ bản.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 133
**Độ sâu xả pin tối đa (Depth of Discharge - DoD) trong pha bóng tối thường khuyến nghị là bao nhiêu?**

- **A.** Khoảng ba mươi phần trăm để duy trì tuổi thọ chu kỳ nạp xả của pin
- **B.** Khoảng tám mươi phần trăm để khai thác triệt để dung lượng hóa học
- **C.** Khoảng mười phần trăm để tránh hiện tượng nóng chân cực kết nối
- **D.** Khoảng chín mươi lăm phần trăm theo quy chuẩn hàng không dân dụng

> **Đáp án:** **A**  
> **Giải thích:** Trong mỗi quỹ đạo LEO (khoảng 90 phút có 35 phút bóng tối), giới hạn DoD dưới 30% giúp các tế bào pin Lithium duy trì hàng ngàn chu kỳ nạp xả mà không bị suy thoái dung lượng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 134
**Công nghệ nạp năng lượng MPPT (Maximum Power Point Tracking) đem lại lợi ích gì cho CubeSat?**

- **A.** Tối ưu hóa điểm làm việc của pin mặt trời để thu được công suất lớn nhất
- **B.** Tự động xoay hướng bề mặt tấm pin mặt trời hướng về phía Trạm Không gian
- **C.** Lọc sạch các hạt bức xạ ion hóa gamma trước khi dòng điện vào mạch sạc
- **D.** Chuyển đổi trực tiếp quang năng thành tín hiệu truyền thông vô tuyến số

> **Đáp án:** **A**  
> **Giải thích:** MPPT liên tục điều chỉnh trở kháng tải để tế bào quang điện luôn vận hành tại điểm cực đại trên đường đặc tính P-V dưới sự thay đổi liên tục của ánh sáng và nhiệt độ.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 135
**Nguy cơ tiềm ẩn nguy hiểm nhất đối với pin Lithium trong môi trường chân không nhiệt độ cao là gì?**

- **A.** Hiện tượng bốc hơi chất điện phân gây phồng rộp và nguy cơ phát nổ
- **B.** Hiện tượng oxy hóa cực dương do lượng oxy tự do trong khoang rò rỉ
- **C.** Điện trở tiếp xúc của các điện cực pin tự động giảm về mức bằng không
- **D.** Khối lượng của pin bị suy giảm liên tục theo thời gian hoạt động bay

> **Đáp án:** **A**  
> **Giải thích:** Áp suất chân không vũ trụ kết hợp với nhiệt độ cao khiến dung dịch điện phân dạng lỏng trong pin có xu hướng giãn nở, phồng túi và tiềm ẩn nguy cơ nổ phá hủy vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 136
**Giải pháp nào được sử dụng để duy trì nhiệt độ khối pin trong pha bóng tối (Eclipse)?**

- **A.** Sử dụng các thanh điện trở nhiệt điều khiển tự động bởi cảm biến nhiệt
- **B.** Kích hoạt quạt tản nhiệt đối lưu luân chuyển không khí trong khoang kín
- **C.** Bật đèn chiếu sáng công suất lớn đặt bên trong các ngăn chứa pin
- **D.** Bơm dung dịch làm mát tuần hoàn khép kín quanh các bề mặt tế bào pin

> **Đáp án:** **A**  
> **Giải thích:** Trong vùng tối không có ánh sáng, nhiệt độ có thể giảm sâu dưới 0 độ C; mạch điều khiển sẽ kích hoạt điện trở nhiệt (Heater) để giữ nhiệt độ pin trong dải an toàn (0 - 45 độ C).  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 137
**Cầu chì tự phục hồi (PTC Polyfuse) trên các nhánh cấp nguồn có đặc tính bảo vệ nào?**

- **A.** Tự động tăng mạnh điện trở khi quá dòng để ngắt mạch và tự phục hồi khi nguội
- **B.** Nóng chảy đứt rời dây kim loại vĩnh viễn cần kỹ sư lên quỹ đạo thay thế
- **C.** Đảo chiều cực tính điện áp cung cấp để triệt tiêu dòng rò của vi mạch
- **D.** Phát tín hiệu sóng cao tần về trạm mặt đất thông báo vị trí chập mạch

> **Đáp án:** **A**  
> **Giải thích:** Cầu chì polymer nhiệt PTC (Polymeric Positive Temperature Coefficient) tăng vọt trở kháng khi dòng quá mức làm nóng nó; khi ngắt sự cố và nguội đi, nó tự động dẫn điện trở lại.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 138
**Các thông số đo xa Housekeeping quan trọng hàng đầu của phân hệ EPS gửi về trạm là gì?**

- **A.** Điện áp khối pin sạc, dòng điện nạp xả và nhiệt độ các tế bào lưu trữ
- **B.** Tọa độ địa lý của trạm mặt đất và danh sách thành viên kíp trực ca
- **C.** Số lượng ảnh chụp còn lưu trong bộ nhớ và độ nét của từng bức ảnh
- **D.** Tốc độ xung nhịp hiện tại của vi xử lý trung tâm trên bo mạch chính

> **Đáp án:** **A**  
> **Giải thích:** Điện áp pin, dòng sạc từ pin mặt trời, dòng tiêu thụ của các phân hệ và nhiệt độ pin là những dữ liệu sống còn phản ánh tình trạng sức khỏe cốt lõi của vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 139
**Tế bào quang điện mặt trời hiệu suất cao sử dụng trong vệ tinh không gian thường là loại nào?**

- **A.** Tế bào quang điện đa mối nối Gallium Arsenide hiệu suất cao
- **B.** Tế bào silicon vô định hình giá rẻ dùng cho máy tính bỏ túi
- **C.** Màng pin hữu cơ dẻo hấp thụ quang năng trong môi trường lỏng
- **D.** Tấm thu nhiệt mặt trời làm nóng ống dẫn khí nén áp suất cao

> **Đáp án:** **A**  
> **Giải thích:** Các tấm pin mặt trời chuyên dụng cho không gian thường dùng công nghệ Triple-Junction InGaP/GaAs/Ge đạt hiệu suất chuyển đổi quang năng trên 30% trong điều kiện chiếu sáng AM0.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 140
**Tại sao diode bảo vệ chống dòng ngược bắt buộc phải mắc nối tiếp với các tấm pin mặt trời?**

- **A.** Ngăn dòng điện từ khối pin sạc phóng ngược làm nóng các tấm pin trong bóng tối
- **B.** Khuếch đại biên độ dòng điện sinh ra khi cường độ ánh sáng chiếu tới quá yếu
- **C.** Biến đổi dòng điện một chiều từ tế bào quang điện thành dòng điện xoay chiều
- **D.** Đo đạc chính xác góc tới của tia bức xạ mặt trời chiếu vào bề mặt thân vệ tinh

> **Đáp án:** **A**  
> **Giải thích:** Khi đi vào vùng tối Trái Đất (Eclipse), điện áp tấm pin mặt trời bằng 0; nếu không có Blocking Diode, pin sạc sẽ xả ngược dòng điện qua pin mặt trời gây lãng phí và nóng hỏng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

### Câu 141
**Quy trình giải phóng năng lượng tồn dư của pin (Passivation) khi kết thúc vòng đời được tiến hành thế nào?**

- **A.** Bật tải điện trở nội bộ để xả kiệt dung lượng điện tích và cô lập vĩnh viễn
- **B.** Truyền lệnh kích hoạt nổ vi cơ khí để tách khối pin rơi ra khỏi thân vệ tinh
- **C.** Nạp thêm dòng điện quá mức từ pin mặt trời để làm đứt cầu chì bảo vệ mạch
- **D.** Chuyển toàn bộ năng lượng điện tích còn lại sang tích trữ trong từ trường cuộn cảm

> **Đáp án:** **A**  
> **Giải thích:** Kỹ sư gửi lệnh kích hoạt mạch xả tải sâu (Discharge Resistor) đưa điện áp pin về 0V và ngắt các đường sạc, triệt tiêu nguy cơ phát nổ do quá nhiệt hóa học trong tương lai.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý pin Li-Po, thuật toán sạc CC/CV và giao tiếp I2C thanh ghi MAX17048  

---

## 💻 Thực hành: Lập Trình Đọc Pin & Quản Lý Nguồn MAX17048 (Lab2-01a, Lab2-01b) (37 câu)

### Câu 142
**Tại sao mạch biến đổi nguồn xung (Switching DC-DC Converter) lại được ưu tiên tuyệt đối trên các vệ tinh CubeSat?**

- **A.** Tạo ra điện áp xoay chiều tần số cao cho phụ tải
- **B.** Giá thành chế tạo linh kiện mạch xung gần bằng 0
- **C.** Hiệu suất chuyển đổi rất cao và sinh ít nhiệt
- **D.** Hoàn toàn không cần dùng cuộn cảm hoặc tụ lọc

> **Đáp án:** **C**  
> **Giải thích:** Hiệu suất cao tiết kiệm từng mili-oát năng lượng quý giá trên không gian và giảm áp lực tản nhiệt thụ động.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 143
**Đơn vị đo dung lượng pin phổ biến 'milliampere-hour' (mAh) biểu thị đại lượng vật lý nào?**

- **A.** Lượng điện tích pin có thể giải phóng theo giờ
- **B.** Mức công suất tức thời cực đại của bộ pin sạc
- **C.** Điện áp hở mạch lớn nhất khi sạc đầy khối tế bào
- **D.** Trở kháng tương đương xoay chiều giữa hai cực pin

> **Đáp án:** **A**  
> **Giải thích:** Dung lượng $1000\text{ mAh}$ có nghĩa là viên pin có khả năng cung cấp dòng điện $1000\text{ mA}$ trong 1 giờ hoặc $100\text{ mA}$ trong 10 giờ.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 144
**Mạch biến đổi DC-DC Boost (Tăng áp / Step-Up) trong phân hệ EPS của CubeSat có chức năng chính là gì?**

- **A.** Làm chậm tần số xung nhịp của vi điều khiển OBC
- **B.** Nâng áp pin lên mức cao hơn cấp cho tải công suất
- **C.** Phóng điện tích dư thừa ra ngoài vỏ kim loại
- **D.** Giảm điện áp nguồn từ 12V xuống mức 5V một chiều

> **Đáp án:** **B**  
> **Giải thích:** Mạch Boost cần thiết để tạo ra đường nguồn 5.0V công suất từ nguồn pin hóa học đơn cell 3.7V.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 145
**Khi cần cấp nguồn cho cụm cảm biến đo đạc viễn trắc thông qua thư viện EPS, vi điều khiển OBC thực hiện thao tác nào?**

- **A.** Kích hoạt chế độ Deep Sleep của toàn hệ thống
- **B.** Gọi hàm `eps.setBuckState(true)` để đóng mạch công tắc bán dẫn kích hoạt khối hạ áp cấp nguồn
- **C.** Tắt toàn bộ bus I2C và SPI
- **D.** Nối trực tiếp nguồn pin vào chân tín hiệu I2C

> **Đáp án:** **B**  
> **Giải thích:** Gọi `eps.setBuckState(true)` kích hoạt mạch chuyển mạch nguồn để đóng điện cho bộ hạ áp 3.3V nuôi cụm cảm biến hoạt động.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 146
**Sau khi gọi lệnh đóng nguồn cấp cho cụm cảm biến (`eps.setBuckState(true)`), tại sao chương trình điều khiển cần chờ một khoảng trễ (delay khoảng 50 - 100 ms) trước khi khởi tạo hoặc đọc dữ liệu từ cảm biến?**

- **A.** Để chờ vi điều khiển OBC hạ bớt nhiệt độ vận hành
- **B.** Để mạch nguồn ổn định điện áp đầu ra (Soft-start) và nạp đầy các tụ lọc nguồn, tránh lỗi giao tiếp bus I2C/SPI
- **C.** Để chờ sóng vô tuyến truyền về trạm mặt đất
- **D.** Để xóa sạch bộ nhớ đệm Flash của vi điều khiển

> **Đáp án:** **B**  
> **Giải thích:** Mạch nguồn xung cần thời gian khởi động mềm (Soft-start) và nạp điện cho các tụ lọc bypass để điện áp 3.3V đạt mức danh định ổn định, tránh hiện tượng cảm biến bị reset hoặc lỗi treo bus I2C.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 147
**Mặc định trong môi trường lập trình C++ cho ESP32, hàm `Wire.begin()` sử dụng cặp chân GPIO nào cho SDA và SCL?**

- **A.** GPIO 18 và GPIO 19
- **B.** GPIO 4 và GPIO 5
- **C.** GPIO 21 và GPIO 22
- **D.** GPIO 1 và GPIO 3

> **Đáp án:** **C**  
> **Giải thích:** Trên cấu hình chân mặc định của ESP32, Wire gán chân GPIO 21 làm đường dữ liệu SDA và GPIO 22 làm đường xung SCL.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 148
**Nếu trên phần cứng bo mạch EPS, đường I2C được nối vào chân GPIO khác, cú pháp C++ nào dùng để cấu hình chân tùy chọn?**

- **A.** Gọi hàm Wire.begin() với hai tham số chân GPIO chỉ định cho SDA và SCL
- **B.** Gọi phương thức Wire.config() để định tuyến lại đường truyền tín hiệu
- **C.** Gọi phương thức Wire.setPin() để thiết lập chân ngoại vi trước khi chạy
- **D.** Gọi phương thức Wire.init() để khởi động lại bộ điều khiển bus I2C

> **Đáp án:** **A**  
> **Giải thích:** Hàm Wire.begin(int sda, int scl) cho phép người lập trình chỉ định bất kỳ chân GPIO ngõ ra nào làm bus I2C.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 149
**Để thiết lập tốc độ xung nhịp cho bus I2C giao tiếp với MAX17048 đạt tốc độ chuẩn 100 kHz, lệnh C++ nào được dùng?**

- **A.** Gọi phương thức Wire.setClock() với tham số tần số 100000 Hz
- **B.** Gọi phương thức Wire.frequency() với giá trị tần số 100 kHz
- **C.** Gọi phương thức Wire.setSpeed() với hệ số phân tần chuẩn 100
- **D.** Gọi phương thức Wire.baudrate() với tham số tốc độ truyền 100000

> **Đáp án:** **A**  
> **Giải thích:** Hàm Wire.setClock(100000) thiết lập tần số xung nhịp trên đường SCL là 100 kHz (Standard Mode).  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 150
**Để bắt đầu giao dịch truyền dữ liệu tới vi mạch MAX17048 có địa chỉ `0x36`, lệnh C++ nào được gọi đầu tiên?**

- **A.** Gọi phương thức Wire.start() truyền địa chỉ thiết bị mục tiêu
- **B.** Gọi phương thức Wire.beginTransmission() truyền địa chỉ thiết bị mục tiêu
- **C.** Gọi phương thức Wire.writeHeader() để mở khung truyền giao thức
- **D.** Gọi phương thức Wire.sendAddress() để quét tìm thiết bị trên bus

> **Đáp án:** **B**  
> **Giải thích:** Hàm Wire.beginTransmission(address) lưu địa chỉ slave vào hàng đợi và chuẩn bị phát điều kiện START trên bus.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 151
**Tham số `false` trong hàm `Wire.endTransmission(false)` có ý nghĩa kỹ thuật gì trong giao thức I2C?**

- **A.** Ra lệnh ngắt hoạt động của đường bus I2C
- **B.** Xóa sạch toàn bộ dữ liệu trong vùng đệm I2C
- **C.** Hủy bỏ ngay gói tin truyền hiện tại trên bus
- **D.** Phát cờ Repeated START và giữ quyền điều khiển bus

> **Đáp án:** **D**  
> **Giải thích:** Repeated START giữ bus không bị giải phóng, ngăn chặn các master khác xen vào giữa quá trình trỏ thanh ghi và đọc dữ liệu.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 152
**Để yêu cầu vi mạch MAX17048 trả về 2 byte dữ liệu từ thanh ghi 16-bit, lệnh C++ nào được sử dụng?**

- **A.** Sử dụng lệnh Wire.getData() truyền địa chỉ thiết bị và số byte yêu cầu
- **B.** Sử dụng lệnh Wire.receive() truyền số byte cần tiếp nhận từ đường bus
- **C.** Sử dụng lệnh Wire.requestFrom() truyền địa chỉ thiết bị và số lượng 2 byte
- **D.** Sử dụng lệnh Wire.read() truyền số lượng byte cần trích xuất khỏi bộ đệm

> **Đáp án:** **C**  
> **Giải thích:** Hàm Wire.requestFrom(address, quantity) phát xung nhịp SCL để nhận số lượng byte dữ liệu mong muốn từ Slave.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 153
**Hàm `Wire.requestFrom(0x36, 2)` trả về giá trị gì để người lập trình kiểm tra việc nhận dữ liệu?**

- **A.** Số byte thực tế mà Slave phản hồi thành công
- **B.** Địa chỉ phần cứng danh định của vi mạch Slave
- **C.** Mức điện áp tức thời đọc được từ bộ pin sạc
- **D.** Luôn trả về giá trị bằng không trong mọi lần

> **Đáp án:** **A**  
> **Giải thích:** Nếu số byte trả về bằng đúng số byte yêu cầu, giao dịch đọc I2C đã diễn ra thành công.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 154
**Đoạn mã C++ nào sau đây đọc lần lượt 2 byte dữ liệu từ hàng đợi nhận I2C?**

- **A.** Gọi phương thức Wire.read() hai lần liên tiếp để nhận từng byte
- **B.** Gọi phương thức Wire.receive() hai lần liên tiếp từ hàng đợi nhận
- **C.** Gọi phương thức Wire.get() hai lần liên tiếp từ thanh ghi đệm
- **D.** Gọi phương thức Wire.in() hai lần liên tiếp từ cổng ngoại vi

> **Đáp án:** **A**  
> **Giải thích:** Mỗi lần gọi Wire.read() sẽ lấy ra 1 byte từ bộ đệm nhận I2C theo thứ tự thời gian.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 155
**Đoạn mã ghép hai byte `msb` và `lsb` thành một giá trị số nguyên không dấu 16-bit `rawVcell` là:**

- **A.** Dịch trái byte MSB 8 vị trí rồi thực hiện phép toán OR bit với byte LSB
- **B.** Dịch trái byte LSB 8 vị trí rồi thực hiện phép toán OR bit với byte MSB
- **C.** Nhân trực tiếp giá trị số học của hai byte MSB và LSB với nhau
- **D.** Cộng đại số trực tiếp giá trị của hai byte MSB và LSB lại với nhau

> **Đáp án:** **A**  
> **Giải thích:** Dịch byte MSB sang trái 8 vị trí rồi thực hiện phép OR bit với byte LSB để tạo thành giá trị 16-bit nguyên vẹn.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 156
**Để đọc tỷ lệ phần trăm dung lượng pin (SOC) từ thanh ghi `0x04` của MAX17048, giá trị địa chỉ thanh ghi truyền vào `Wire.write()` là:**

- **A.** 0x36
- **B.** 0x04
- **C.** 0x02
- **D.** 0x06

> **Đáp án:** **B**  
> **Giải thích:** Địa chỉ 0x04 là thanh ghi MSB của chỉ số trạng thái nạp SOC trong bảng thanh ghi của MAX17048.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 157
**Hàm C++ nào sau đây kiểm tra sự có mặt của vi mạch MAX17048 trên đường bus I2C?**

- **A.** Thực hiện kiểm tra thăm dò thiết bị bằng hàm Wire.check()
- **B.** Gọi hàm Wire.endTransmission() và kiểm tra mã trạng thái trả về bằng 0
- **C.** Thực hiện lệnh gửi xung kiểm tra bằng hàm Wire.ping()
- **D.** Thực hiện kiểm tra sự tồn tại ngoại vi bằng hàm Wire.detect()

> **Đáp án:** **B**  
> **Giải thích:** Lệnh endTransmission() trả về mã 0 khi nhận được bit ACK từ thiết bị Slave, khẳng định IC đang hoạt động và đáp ứng bus.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 158
**Nếu mã trả về của `Wire.endTransmission()` khác 0 (ví dụ mã 2 hoặc 4), điều này chỉ thị lỗi gì?**

- **A.** Thiết bị đã truyền nhận và phản hồi dữ liệu đúng
- **B.** Không nhận được ACK do lỏng dây hoặc mất nguồn IC
- **C.** Tần số xung nhịp bus I2C đang chạy vượt quá mức
- **D.** Bộ đệm truyền nhận dữ liệu tạm thời bị tràn

> **Đáp án:** **B**  
> **Giải thích:** Mã lỗi 2 chỉ thị NACK truyền địa chỉ (Address NACK), mã 3 là NACK truyền dữ liệu, mã 4 là lỗi phần cứng trên bus.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 159
**Để in thông số điện áp và dung lượng pin với định dạng 2 chữ số thập phân ra cổng Serial, lệnh C++ nào là phù hợp nhất?**

- **A.** Sử dụng hàm esp_deep_sleep_start() đưa hệ thống vào trạng thái ngủ sâu
- **B.** Sử dụng hàm delay() để tạm dừng chương trình trong thời gian mong muốn
- **C.** Sử dụng vòng lặp while(1) vô hạn để giữ nguyên trạng thái hiện tại
- **D.** Gọi hàm system_off() ngắt toàn bộ nguồn cấp của vi điều khiển

> **Đáp án:** **B**  
> **Giải thích:** delay() khóa cứng luồng thực thi trong số mili-giây chỉ định; trong các hệ thống đòi hỏi đa nhiệm mượt mà, kỹ thuật non-blocking bằng millis() được ưu tiên hơn.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 160
**Tại sao sau khi gọi hàm `Wire.endTransmission()`, việc kiểm tra mã trả về của hàm lại là nguyên tắc lập trình bắt buộc trong phần mềm vệ tinh?**

- **A.** Khai báo biến với từ khóa volatile trong bộ nhớ chương trình
- **B.** Sử dụng thuộc tính RTC_DATA_ATTR đặt biến trên phân vùng nhớ RTC SRAM
- **C.** Khai báo biến dạng hằng số const trong phân vùng bộ nhớ Flash
- **D.** Sử dụng từ khóa static cục bộ bên trong hàm vòng lặp chính loop()

> **Đáp án:** **A**  
> **Giải thích:** Bắt lỗi trả về ngăn ngừa tình trạng code tiếp tục đọc dữ liệu rác từ bus đang bị hỏng hoặc treo.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 161
**Nếu hàm `Wire.requestFrom(0x36, 2)` trả về giá trị là 0, điều này có nghĩa là gì?**

- **A.** Dung lượng phần trăm của pin sạc đang bằng không
- **B.** Không nhận được byte phản hồi nào từ MAX17048
- **C.** Đường truyền bus I2C đang hoạt động ở tần số 0Hz
- **D.** Thiết bị Slave đã gửi thành công 2 byte dữ liệu

> **Đáp án:** **B**  
> **Giải thích:** Giá trị trả về bằng 0 biểu thị lỗi đường truyền hoặc IC không phản hồi xung nhịp của Master.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 162
**Đoạn mã C++ nào sau đây biểu diễn hàm đọc điện áp pin an toàn có cơ chế kiểm tra lỗi từ MAX17048?**

- **A.** Luôn trả về giá trị điện áp giả định cố định 3.7V mà không giao tiếp I2C
- **B.** Gọi đọc dữ liệu trực tiếp và trả về giá trị 0.0V trong mọi tình huống
- **C.** Khởi tạo lại bus I2C và trả về giá trị điện áp 1.0V mặc định
- **D.** Kiểm tra mã lỗi endTransmission; nếu thất bại trả về -1.0V, nếu thành công tính điện áp

> **Đáp án:** **D**  
> **Giải thích:** Hàm đọc có kiểm tra mã trả về của endTransmission, trả về -1.0 nếu lỗi bus và tính toán chính xác điện áp nếu thành công.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 163
**Hàm C++ nào sau đây giúp chuyển đổi nhanh giá trị SOC đọc được từ MAX17048 thành số nguyên phần trăm (0 - 100%) mà không cần xử lý phần lẻ?**

- **A.** Yêu cầu đọc 1 byte từ thanh ghi SOC 0x04 và trả về giá trị đọc được
- **B.** Ép kiểu giá trị điện áp chuẩn 3.3V sang số nguyên phần trăm
- **C.** Kiểm tra số lượng byte sẵn có trong bộ đệm nhận của bus I2C
- **D.** Trả về giá trị mặc định cố định bằng 100% trong mọi trường hợp

> **Đáp án:** **A**  
> **Giải thích:** Chỉ cần đọc đúng 1 byte MSB tại thanh ghi 0x04 là đã có ngay giá trị phần trăm nguyên của mức pin còn lại.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 164
**Để tắt mạch DC-DC Boost triệt để khi hoàn thành tác vụ tải công suất nhằm tiết kiệm điện, lệnh C++ tương ứng là:**

- **A.** Xuất mức logic LOW ra chân điều khiển BOOST_EN_PIN để ngắt mạch
- **B.** Xóa sạch bộ đệm truyền nối tiếp bằng lệnh Serial.flush()
- **C.** Chuyển cấu hình chân BOOST_EN_PIN sang ngõ ra OUTPUT
- **D.** Xuất mức logic HIGH ra chân điều khiển BOOST_EN_PIN để ngắt mạch

> **Đáp án:** **A**  
> **Giải thích:** Kéo chân Enable xuống mức LOW (0V) đưa IC Boost vào trạng thái Shutdown với dòng tiêu thụ tĩnh dưới 1 µA.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 165
**Đoạn mã kiểm tra điều kiện sạc đầy pin từ MAX17048 có dạng nào sau đây?**

- **A.** Kiểm tra phần trăm dung lượng pin bằng chính xác số không tuyệt đối
- **B.** Kiểm tra phần trăm dung lượng pin sụt giảm dưới ngưỡng năm mươi phần trăm
- **C.** Kiểm tra điện áp pin sụt giảm dưới ngưỡng ba Vôn định mức
- **D.** Kiểm tra dung lượng đạt trên 98% kết hợp điện áp pin đạt trên 4.15V

> **Đáp án:** **D**  
> **Giải thích:** Trạng thái sạc đầy đạt được khi cả hai chỉ số SOC tiệm cận 100% và điện áp hai cực tiệm cận ngưỡng cắt sạc 4.2V.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 166
**Để định dạng gói dữ liệu Telemetry của phân hệ EPS gửi về cổng giám sát nối tiếp dưới dạng chuỗi JSON, cú pháp an toàn là:**

- **A.** Sử dụng hàm snprintf() định dạng chuỗi an toàn kèm giới hạn kích thước đệm
- **B.** Sử dụng hàm sprintf() định dạng chuỗi không kiểm soát giới hạn bộ đệm
- **C.** In trực tiếp tên biến dưới dạng chuỗi ký tự cố định ra cổng Serial
- **D.** Sao chép chuỗi JSON tĩnh cố định vào mảng ký tự bằng hàm strcpy()

> **Đáp án:** **A**  
> **Giải thích:** Chuỗi JSON chuẩn hóa cho phép các giao diện web dashboard dễ dàng phân tích và hiển thị trực quan các thông số nguồn.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 167
**Biến khai báo `RTC_DATA_ATTR float lastVoltage = 0.0f;` có khả năng nào sau đây?**

- **A.** Đo trực tiếp điện áp pin mà không cần bus I2C
- **B.** Gây hư hỏng dữ liệu trong phân vùng bộ nhớ tĩnh
- **C.** Lưu áp chu kỳ trước để tính độ sụt áp sau ngủ
- **D.** Tự động gia tăng giá trị định mức khi ngủ sâu

> **Đáp án:** **C**  
> **Giải thích:** Lưu trữ điện áp phiên trước trong RTC RAM cho phép tính toán độ dốc tiêu hao năng lượng $dV/dt$ giữa các chu kỳ bay.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 168
**Tại sao trong mã nguồn C++ của EPS không bao giờ nên để vòng lặp rỗng `while(Wire.available() == 0);` mà không có cơ chế thoát hiểm (Timeout)?**

- **A.** Tránh treo hệ thống vĩnh viễn nếu Slave bị lỗi
- **B.** Vì chuẩn bus I2C nghiêm cấm dùng vòng lặp rỗng
- **C.** Vì vòng lặp rỗng làm vi điều khiển bị quá nhiệt
- **D.** Vì vòng lặp làm tiêu hao nhanh dung lượng của pin

> **Đáp án:** **A**  
> **Giải thích:** Nguyên tắc sống còn của phần mềm nhúng hàng không vũ trụ là mọi vòng chờ ngoại vi bắt buộc phải có giới hạn thời gian Timeout.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 169
**Đoạn mã C++ nào sau đây bổ sung cơ chế kiểm tra Timeout chuẩn khi chờ dữ liệu I2C?**

- **A.** Dùng vòng lặp for đếm số lần cố định và gọi hàm kiểm tra thời gian chờ
- **B.** Gọi hàm delay() tạm dừng hoàn toàn chương trình để chờ dữ liệu tới
- **C.** Dùng vòng lặp while kiểm tra số byte khả dụng kết hợp thoát lặp khi hết thời gian Timeout
- **D.** Dùng vòng lặp while chờ dữ liệu vô hạn không có điều kiện thoát

> **Đáp án:** **C**  
> **Giải thích:** Nếu sau 50 mili-giây mà chưa đủ 2 byte dữ liệu, lệnh break sẽ cưỡng bức thoát khỏi vòng lặp, giải phóng CPU xử lý lỗi.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 170
**Khi lập trình hàm đọc I2C, việc gán giá trị trả về của `Wire.read()` vào biến kiểu `uint8_t` (thay vì `int`) giúp đạt mục tiêu gì?**

- **A.** Tự động đảo ngược thứ tự các bit trong thanh ghi
- **B.** Tăng độ chính xác đo điện áp thêm mười phần trăm
- **C.** Đúng kích thước 1 byte không dấu và tránh lỗi dấu
- **D.** Tăng tốc độ baud rate truyền nhận trên đường bus

> **Đáp án:** **C**  
> **Giải thích:** Dữ liệu byte thô từ bus I2C là số nguyên không dấu 8-bit; gán sai kiểu có dấu có thể làm sai lệch giá trị khi dịch bit.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 171
**Trong quá trình ngắt nguồn cụm cảm biến (`eps.setBuckState(false)`), tại sao vi điều khiển OBC vẫn có thể hoạt động bình thường và xuất nhật ký viễn trắc ra Serial?**

- **A.** Nhờ kiến trúc phân tách độc lập các nhánh nguồn: OBC được cấp nguồn từ nhánh điều áp liên tục riêng, độc lập với nhánh hạ áp có thể ngắt mở của cụm tải cảm biến
- **B.** Vì OBC tự sinh ra dòng điện từ bức xạ vũ trụ
- **C.** Vì cổng Serial tự cấp điện ngược trở lại cho vi điều khiển
- **D.** Vì tụ điện trên bo OBC có thể duy trì hoạt động trong nhiều tuần mà không cần nguồn

> **Đáp án:** **A**  
> **Giải thích:** Hệ thống EPS phân tách các nhánh nguồn chuyên biệt: vi điều khiển OBC được nuôi bởi nhánh nguồn chính duy trì liên tục (Always-on), trong khi ngõ ra của nhánh nguồn tải (Switched Bus) chỉ cấp cho các cảm biến tiêu thụ điện ngắt quãng.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 172
**Lệnh `Wire.setClock(400000);` cấu hình bus I2C hoạt động ở chế độ nào?**

- **A.** Chế độ tốc độ cao
- **B.** Chế độ tiêu chuẩn
- **C.** Chế độ siêu tốc
- **D.** Chế độ siêu chậm

> **Đáp án:** **A**  
> **Giải thích:** Tần số 400 kHz là chuẩn Fast Mode, giúp giảm thời gian chiếm dụng bus khi đọc ghi dữ liệu từ IC.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 173
**Đoạn mã C++ nào sau đây giúp chuyển đổi an toàn từ giá trị điện áp số thực sang chuỗi ký tự hiển thị?**

- **A.** Nhân trực tiếp giá trị số thực điện áp với hệ số một trăm
- **B.** Sử dụng hàm dtostrf() chuyển đổi số thực sang mảng chuỗi ký tự có định dạng
- **C.** Ép kiểu dữ liệu trực tiếp từ số thực sang kiểu ký tự char đơn lẻ
- **D.** Gán trực tiếp giá trị biến số thực vào mảng chuỗi ký tự

> **Đáp án:** **B**  
> **Giải thích:** Hàm dtostrf(val, width, prec, buf) là hàm chuẩn trong C nhúng để biến đổi số thực float thành mảng ký tự không gây phân mảnh RAM.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 174
**Trong chiến lược quản lý năng lượng EPS, nếu chương trình bay duy trì cấp nguồn liên tục cho toàn bộ cụm cảm biến (`eps.setBuckState(true)`) ngay cả khi không có lịch đo đạc, hậu quả kỹ thuật nào sẽ xảy ra?**

- **A.** Cảm biến sẽ bị tăng gấp đôi độ phân giải đo
- **B.** Cụm cảm biến tiêu thụ điện năng liên tục và làm cạn kiệt năng lượng pin dự trữ của vệ tinh trong thời kỳ bay vào vùng bóng tối Trái Đất (Eclipse)
- **C.** Tốc độ xử lý của vi điều khiển OBC bị giảm một nửa
- **D.** Module viễn thông LoRa tự động chuyển sang chế độ truyền dữ liệu tốc độ cao

> **Đáp án:** **B**  
> **Giải thích:** Việc không ngắt nguồn cụm cảm biến khi rảnh rỗi sẽ gây thất thoát năng lượng dự trữ, khiến pin vệ tinh nhanh chóng cạn kiệt trong thời kỳ bóng tối (Eclipse) khi pin Mặt Trời không sản sinh ra điện năng.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 175
**Hàm C++ nào sau đây tính giá trị điện áp trung bình của mảng 10 phần tử trong RTC SRAM?**

- **A.** Cộng giá trị của phần tử đầu tiên và phần tử cuối cùng trong mảng
- **B.** Lấy giá trị phần tử ở vị trí giữa mảng chia cho mười
- **C.** Tính trung bình cộng của phần tử đầu tiên và phần tử cuối cùng
- **D.** Tính tổng toàn bộ mười phần tử trong mảng rồi chia cho mười

> **Đáp án:** **D**  
> **Giải thích:** Tính tổng các phần tử trong mảng rồi chia cho số lượng phần tử là giải thuật chuẩn xác để tính giá trị trung bình trượt.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 176
**Đoạn mã C++ nào sau đây cài đặt chính xác logic trễ ngưỡng (Hysteresis) cho việc bật/tắt tải công suất?**

- **A.** Cắt tải khi điện áp dưới 3.3V và chỉ đóng tải lại khi điện áp hồi phục trên 3.6V
- **B.** Đóng tải khi điện áp dưới 3.3V và ngắt tải khi điện áp vượt quá 3.6V
- **C.** Đảo trạng thái đóng ngắt của tải tuần hoàn liên tục theo từng chu kỳ
- **D.** So sánh điện áp bằng chính xác 3.3V để quyết định trạng thái đóng ngắt

> **Đáp án:** **A**  
> **Giải thích:** Khoảng trễ 0.3V giữa ngưỡng ngắt (3.3V) và ngưỡng phục hồi (3.6V) loại bỏ hoàn toàn hiện tượng dao động lật trạng thái liên tục.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 177
**Các đường bus điện áp phân phối chuẩn phổ biến nhất trong hệ thống EPS của CubeSat là gì?**

- **A.** Đường bus ổn áp ba phẩy ba vôn và đường bus ổn áp năm vôn danh định
- **B.** Đường điện xoay chiều hai trăm hai mươi vôn tần số năm mươi héc
- **C.** Đường một chiều bốn mươi tám vôn dùng cho trạm viễn thông mặt đất
- **D.** Đường nguồn một chiều một phẩy hai vôn dành riêng cho động cơ đẩy

> **Đáp án:** **A**  
> **Giải thích:** Hầu hết các linh kiện vi điều khiển, cảm biến và mô-đun truyền thông CubeSat hoạt động trên hai mức nguồn chuẩn ổn áp là 3.3V và 5.0V (cùng với đường pin thô Unregulated Bus).  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

### Câu 178
**Hiện tượng dòng điện khởi động đột biến (Inrush Current) gây ra rủi ro gì cho hệ thống nguồn?**

- **A.** Làm sụt áp tức thời trên đường bus nguồn khiến vi điều khiển bị khởi động lại
- **B.** Làm đảo ngược từ trường cực bắc và cực nam của Trái Đất tác động lên vỏ
- **C.** Làm biến đổi tần số dao động thu phát vô tuyến của mạch cao tần phân hệ
- **D.** Làm tăng đột ngột khối lượng của các tụ điện hóa học trên bo mạch nguồn

> **Đáp án:** **A**  
> **Giải thích:** Khi đóng điện cho các tải dung kháng lớn, dòng Inrush có thể làm sụt áp đường 3.3V xuống dưới ngưỡng Brownout Reset của CPU, khiến vi điều khiển bị khởi động lại liên tục.  
> **Mục tiêu củng cố:** Lập trình đọc điện áp, dung lượng pin qua I2C và quản lý phân hệ EPS bằng thư viện  

---

## 📖 Doc 2.2: Quản lý Rủi ro Sụt áp Brownout, Ngắt An toàn Phóng & Kỹ thuật Power Gating (25 câu)

### Câu 179
**Để đáp ứng tiêu chuẩn an toàn phóng (Launch Safety Requirements), bộ pin sạc của CubeSat bắt buộc phải trải qua thử nghiệm nào?**

- **A.** Thử nghiệm ngâm khối pin trong dung dịch nước muối
- **B.** Thử nghiệm thả rơi tự do khối pin từ độ cao lớn
- **C.** Thử nghiệm đốt nóng trực tiếp bằng ngọn lửa hở
- **D.** Thử rung động phóng, sốc nhiệt và chân không nhiệt

> **Đáp án:** **D**  
> **Giải thích:** Thử nghiệm TVAC mô phỏng chính xác áp suất cực thấp ($10^{-5}\text{ Torr}$) và dải nhiệt độ khắc nghiệt trên quỹ đạo.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 180
**Hiện tượng 'Sụt áp nguồn' (Voltage Brownout) trên vệ tinh CubeSat thường xảy ra trong tình huống nào?**

- **A.** Khi bức xạ Mặt Trời chiếu thẳng góc lên tấm pin
- **B.** Khi phụ tải bật đột ngột làm sụt áp nguồn cấp
- **C.** Khi vệ tinh di chuyển qua đường xích đạo Trái Đất
- **D.** Khi vi điều khiển trung tâm chuyển sang ngủ sâu

> **Đáp án:** **B**  
> **Giải thích:** Dòng tải đỉnh tức thời làm rơi áp trên nội trở pin và cuộn cảm, khiến đường nguồn 3.3V sụt nhanh làm CPU bị reset.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 181
**Giải pháp hiệu quả nhất để ngăn chặn lỗi Brownout do xung dòng khởi động của tải công suất cao là gì?**

- **A.** Ngắt hoàn toàn và vĩnh viễn phụ tải công suất cao
- **B.** Dùng mạch khởi động mềm và tụ tích năng lượng
- **C.** Tháo bỏ hoàn toàn bộ pin sạc lưu trữ trên vệ tinh
- **D.** Thu hẹp tiết diện các đường dây dẫn nguồn trên bo

> **Đáp án:** **B**  
> **Giải thích:** Khởi động mềm hạn chế độ dốc tăng dòng ($di/dt$), triệt tiêu hiện tượng sụt áp nguồn đột ngột.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 182
**Công tắc hành trình (Deployment Limit Switch / Kill Switch) trên vệ tinh CubeSat thường được bố trí tại vị trí cơ khí nào?**

- **A.** Bố trí tại vị trí trung tâm của bảng mạch nguồn
- **B.** Đặt sâu bên trong vỏ bọc cơ khí của khối pin sạc
- **C.** Bố trí ở chân thanh ray dẫn hướng góc đáy vệ tinh
- **D.** Hàn cố định ngay trên bề mặt tấm pin quang điện

> **Đáp án:** **C**  
> **Giải thích:** Đầu thanh ray là điểm tì cơ học trực tiếp vào đáy hoặc vách của ống phóng P-POD trong suốt giai đoạn phóng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 183
**Trạng thái cơ học của công tắc hành trình tại chân ray trong suốt giai đoạn vệ tinh nằm bên trong ống phóng P-POD là gì?**

- **A.** Bị khóa chặt bằng đai ốc kim loại trên thanh ray
- **B.** Tự do bung ra hoàn toàn ngoài không gian vũ trụ
- **C.** Liên tục đảo trạng thái đóng ngắt do rung chấn cơ
- **D.** Bị ép nén chặt, giữ tiếp điểm ở trạng thái hở mạch

> **Đáp án:** **D**  
> **Giải thích:** Lực ép cơ học của lòng ống phóng giữ công tắc ở vị trí nén, ngắt toàn bộ đường dẫn từ pin sạc vào hệ thống bo mạch.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 184
**Thời điểm công tắc hành trình tại chân ray tự động bật chuyển trạng thái đóng mạch cấp nguồn cho vệ tinh là khi nào?**

- **A.** Ngay thời điểm tên lửa đẩy bắt đầu rời bệ phóng
- **B.** Sau khi vệ tinh vận hành ổn định trên quỹ đạo
- **C.** Khi nhận được bức điện kích hoạt từ trạm mặt đất
- **D.** Khi vệ tinh thoát hoàn toàn khỏi ống phóng P-POD

> **Đáp án:** **D**  
> **Giải thích:** Khi rời khỏi mép ống phóng, chốt công tắc mất điểm tì và lò xo đẩy tiếp điểm đóng lại, kích hoạt nguồn điện.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 185
**Mục tiêu an toàn tối thượng của việc trang bị công tắc hành trình tại chân thanh ray của CubeSat là gì?**

- **A.** Tránh phát sóng hoặc chập nguồn trong ống phóng
- **B.** Tăng tốc độ nạp điện cho bộ pin trong khoang hàng
- **C.** Chống hiện tượng trầy xước bề mặt ray dẫn hướng cơ
- **D.** Đo độ bền cơ học của khung vỏ trong lúc phóng

> **Đáp án:** **A**  
> **Giải thích:** Quy định nghiêm ngặt của nhà cung cấp phóng yêu cầu vệ tinh phải 'chết điện' hoàn toàn khi nằm trong tên lửa đẩy.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 186
**Theo tiêu chuẩn thiết kế quốc tế của CubeSat, sau khi công tắc hành trình đóng điện, vệ tinh phải thực thi quy định nào sau đây?**

- **A.** Bật máy phát vô tuyến công suất tối đa tức thời
- **B.** Im lặng vô tuyến và không bung anten trong 30 phút
- **C.** Xóa sạch toàn bộ dữ liệu trên chip nhớ flash
- **D.** Kích hoạt cơ cấu an toàn để kiểm tra bung anten

> **Đáp án:** **B**  
> **Giải thích:** Khoảng lặng 30 phút bảo đảm vệ tinh đã bay cách tên lửa mẹ một khoảng cách an toàn trước khi kích hoạt bức xạ RF và cơ cấu bung.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 187
**Khái niệm 'Chốt an toàn RBF' (Remove Before Flight Pin) trên thân vệ tinh CubeSat có chức năng cơ khí nào?**

- **A.** Chốt ngắt điện cơ học khi thử nghiệm mặt đất
- **B.** Cảm biến nhiệt độ môi trường ngoài khung vỏ
- **C.** Vít kim loại cố định bảng mạch vào khung sườn
- **D.** Anten đơn cực dùng để thu tín hiệu điều khiển bay

> **Đáp án:** **A**  
> **Giải thích:** Chốt RBF ngăn ngừa tình trạng vệ tinh vô tình cấp nguồn ngoài ý muốn trong quá trình tích hợp và vận chuyển mặt đất.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 188
**Thời điểm chốt an toàn Remove Before Flight (RBF) được kỹ sư rút ra khỏi thân vệ tinh CubeSat là khi nào?**

- **A.** Ngay khi bắt đầu quy trình chế tạo bảng mạch in
- **B.** Trước khi nạp vệ tinh vào ống phóng tại bệ phóng
- **C.** Sau khi vệ tinh đã bay ổn định trên quỹ đạo LEO
- **D.** Tuyệt đối không bao giờ được rút chốt an toàn ra

> **Đáp án:** **B**  
> **Giải thích:** RBF pin được rút ra ở bước thao tác cuối cùng (Last-minute operation) ngay trước khi đóng nắp ống phóng P-POD.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 189
**Để bảo đảm độ tin cậy ngắt mạch tuyệt đối (Fault Tolerance), phân hệ EPS thường mắc các công tắc hành trình chân ray theo sơ đồ nào?**

- **A.** Nối trực tiếp công tắc vào chân nạp cổng USB
- **B.** Mắc song song công tắc với cuộn cảm nguồn buck
- **C.** Mắc nối tiếp hoặc dự phòng kép ở các chân ray
- **D.** Chỉ dùng một công tắc cơ học duy nhất cho bo

> **Đáp án:** **C**  
> **Giải thích:** Kiến trúc dự phòng kép bảo đảm nếu một công tắc bị kẹt thì vệ tinh vẫn ngắt mạch an toàn hoặc bật nguồn thành công.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 190
**Trên phân hệ Năng lượng (EPS) của bộ kit vệ tinh, đầu ra của mạch hạ áp (DC-DC Buck Converter) chịu trách nhiệm cấp nguồn cho thành phần nào?**

- **A.** Ăng-ten LoRa công suất cao
- **B.** Toàn bộ cụm cảm biến đo đạc ngoại vi
- **C.** Mạch sạc pin TP4056
- **D.** Cổng nạp USB máy tính

> **Đáp án:** **B**  
> **Giải thích:** Mạch hạ áp chuyển đổi điện áp pin xuống 3.3V ổn định chuyên trách nuôi cụm cảm biến, giúp dễ dàng ngắt/bật nguồn cảm biến độc lập.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 191
**Tại sao trong kiến trúc phần cứng CubeSat, việc đóng/ngắt nguồn các phân hệ tải (Power Gating) được điều khiển tập trung thông qua các hàm thư viện EPS chuẩn hóa thay vì can thiệp thủ công rời rạc?**

- **A.** Để tiết kiệm dung lượng pin bằng cách giảm kích thước mã nguồn
- **B.** Để không cần dùng đến điện trở kéo nội trên vi điều khiển
- **C.** Để đảm bảo tính đóng gói an toàn phần cứng, đồng bộ trạng thái quản lý nguồn toàn hệ thống và tránh xung đột chân ngoại vi
- **D.** Để tự động tăng công suất phát của module viễn thông LoRa

> **Đáp án:** **C**  
> **Giải thích:** Chuẩn hóa điều khiển qua thư viện EPS giúp trừu tượng hóa phần cứng, tránh xung đột chân I/O giữa các phân hệ và đảm bảo trạng thái nguồn điện của vệ tinh được quản lý tập trung, an toàn.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 192
**Chiến lược tiết kiệm năng lượng 'Chu kỳ công tác thấp' (Duty-cycling) trong thiết kế CubeSat được áp dụng như thế nào?**

- **A.** Tắt hoàn toàn khối pin và vận hành nhờ siêu tụ
- **B.** Bật tối đa công suất hoạt động liên tục toàn tải
- **C.** Phần lớn ngủ sâu, chỉ thức vài giây để đo đạc
- **D.** Xả cạn điện áp khối pin lưu trữ về mức không Vôn

> **Đáp án:** **C**  
> **Giải thích:** Duty-cycling giúp giảm dòng tiêu thụ trung bình từ hàng chục mA xuống chỉ còn vài trăm micro-ampe, bảo toàn dung lượng pin tối đa.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 193
**Bộ dò sụt nguồn (Brownout Detector - BOD) tích hợp bên trong phần cứng của ESP32 có ngưỡng điện áp ngắt mặc định khoảng:**

- **A.** Ngưỡng ngắt trong khoảng từ 3.10V đến 3.30V
- **B.** Ngưỡng ngắt trong khoảng từ 2.43V đến 2.70V
- **C.** Ngưỡng ngắt trong khoảng từ 4.80V đến 5.00V
- **D.** Ngưỡng ngắt trong khoảng từ 0.90V đến 1.10V

> **Đáp án:** **B**  
> **Giải thích:** Nếu điện áp chân VDD tụt dưới ~2.5V, bộ BOD phần cứng lập tức kích hoạt reset để bảo vệ tính toàn vẹn của thanh ghi Flash.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 194
**Khi kiểm tra dung lượng pin từ IC MAX17048, nếu phát hiện dung lượng pin xuống mức nguy cấp (ví dụ SOC < 20%), hệ thống quản lý nguồn EPS nên thực hiện thao tác nào đối với mạch hạ áp?**

- **A.** Xuất mức 0 ra GPIO 4 để bật cảm biến liên tục
- **B.** Kéo GPIO 4 lên mức 1 để ngắt hạ áp tiết kiệm pin
- **C.** Tăng tần số lấy mẫu cảm biến lên mười lần
- **D.** Phát lệnh reset liên tục vi điều khiển trung tâm

> **Đáp án:** **B**  
> **Giải thích:** Khi pin nguy cấp, quy trình sa thải phụ tải (Load Shedding) yêu cầu ngắt dòng mạch hạ áp (GPIO 4 = 1) để loại bỏ tải tiêu thụ của cảm biến.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 195
**Khi lập trình điều khiển mạch DC-DC Boost bằng chân GPIO (ví dụ chân `BOOST_EN_PIN`), lệnh nào để kích hoạt bật nguồn 5V?**

- **A.** Đọc điện áp ngõ vào tương tự bằng hàm analogRead()
- **B.** Xuất mức logic HIGH ra chân điều khiển BOOST_EN_PIN để bật mạch
- **C.** Xuất mức logic LOW ra chân điều khiển BOOST_EN_PIN để bật mạch
- **D.** Chuyển cấu hình chân BOOST_EN_PIN sang ngõ vào thả nổi INPUT

> **Đáp án:** **B**  
> **Giải thích:** Chân Enable của các IC nguồn thường tích cực mức cao (Active-High); xuất mức HIGH (3.3V) sẽ bật mạch Boost hoạt động.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 196
**Nếu muốn cấu hình cờ cảnh báo sụt áp pin (ALRT pin) trong thanh ghi CONFIG của MAX17048, người lập trình cần thực hiện thao tác gì?**

- **A.** Ngắt toàn bộ nguồn cấp cho đường bus I2C ngoại vi
- **B.** Ghi ngưỡng cảnh báo vào 5 bit thấp của CONFIG
- **C.** Nhấn nút reset phần cứng trên bo mạch thử nghiệm
- **D.** Đọc liên tục thanh ghi điện áp VCELL nhiều lần

> **Đáp án:** **B**  
> **Giải thích:** Thanh ghi CONFIG cho phép cài đặt ngưỡng phần trăm pin tối thiểu để kích hoạt cờ cảnh báo Alert.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 197
**Trong hàm loop() của bài thực hành Lab2-02_Power_Saving, cơ chế định thời nào được sử dụng để duy trì thời gian nghỉ tắt mạch hạ áp (SENSOR_OFF_DURATION)?**

- **A.** Bộ định thời RTC Timer đánh thức từ Deep Sleep
- **B.** Hàm delay() hoặc kỹ thuật kiểm tra mốc thời gian millis()
- **C.** Ngắt ngoài từ công tắc hành trình
- **D.** Tín hiệu đồng bộ từ trạm phát sóng

> **Đáp án:** **B**  
> **Giải thích:** Hệ thống chạy vòng lặp tuần tự hoặc định thời non-blocking để luân phiên bật tắt nguồn phụ tải (Power Gating) mà không sử dụng cơ chế deep sleep.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 198
**Trong cấu trúc hàm `setup()` của OBC, tại sao việc khởi tạo các chân điều khiển nguồn (như BOOST_EN) nên được đặt ở những dòng lệnh đầu tiên?**

- **A.** Định hình mức logic tránh tải lơ lửng hao dòng rò
- **B.** Để xóa sạch toàn bộ mã nguồn cũ lưu trong bộ nhớ
- **C.** Để ngắt kết nối hoàn toàn đường truyền bus I2C
- **D.** Tăng tốc độ quay ổn định của vệ tinh trên quỹ đạo

> **Đáp án:** **A**  
> **Giải thích:** Định hình mức logic dứt khoát cho các chân điều khiển nguồn ngay khi khởi động ngăn ngừa sốc dòng và bảo đảm an toàn hệ thống.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 199
**Ưu điểm kỹ thuật lớn nhất của phương án dán pin mặt trời trên thân (Body Mount) là gì?**

- **A.** Khả năng sinh điện ổn định không phụ thuộc vào tư thế xoay của vệ tinh
- **B.** Cung cấp mật độ công suất trên diện tích cao hơn pin cánh xòe ba lần
- **C.** Tự động hạ nhiệt độ bề mặt vỏ vệ tinh xuống dưới mức âm mười độ C
- **D.** Không cần sử dụng mạch bảo vệ chống dòng ngược từ khối pin sạc

> **Đáp án:** **A**  
> **Giải thích:** Pin dán thân trên cả 6 mặt giúp CubeSat luôn có bề mặt đón nhận bức xạ mặt trời ngay cả khi vệ tinh bị quay mất kiểm soát (tumbling) hoặc hệ thống ADCS bị hỏng.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 200
**Mạch ngắt bảo vệ hạ áp (Low Voltage Cutoff) trong khối EPS có vai trò gì?**

- **A.** Cô lập tải tiêu thụ khi điện áp pin sụt xuống dưới ngưỡng nguy hiểm
- **B.** Kích hoạt còi báo động bằng âm thanh tần số cao bên trong khoang
- **C.** Tăng điện áp đầu ra của các tấm pin quang điện lên gấp đôi định mức
- **D.** Đảo cực dòng điện nạp vào các cực tế bào pin để làm sạch bản cực

> **Đáp án:** **A**  
> **Giải thích:** Khi điện áp tế bào pin Li-ion giảm xuống dưới ngưỡng an toàn (thường là 3.0V - 3.2V), mạch ngắt hạ áp sẽ ngắt nguồn tải để tránh hiện tượng phân rã điện cực không thể phục hồi.  
> **Mục tiêu củng cố:** Nắm vững cơ chế ngắt an toàn RBF, bảo vệ sụt áp Brownout và kỹ thuật Power Gating  

---

### Câu 201
**Chốt an toàn Remove Before Flight (RBF) trên thân CubeSat có chức năng cơ bản nào?**

- **A.** Ngắt toàn bộ đường cấp nguồn pin để đảm bảo an toàn khi lưu kho và vận chuyển
- **B.** Khóa chặt các bánh đà phản lực ngăn không cho quay tự do trong hộp chứa
- **C.** Che chắn bụi bẩn cho ống kính máy ảnh quang học độ phân giải cao trên vệ tinh
- **D.** Ngăn chặn các phân tử khí chân không tràn vào khoang điều khiển điện tử

> **Đáp án:** **A**  
> **Giải thích:** Chốt RBF là cầu nối ngắt điện vật lý. Trong suốt quá trình tích hợp, thử nghiệm mặt đất và vận chuyển, chốt được cắm để ngăn vệ tinh vô tình khởi động ngoài ý muốn.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 202
**Công tắc hành trình Deployment Switch ở góc thanh ray CubeSat được kích hoạt khi nào?**

- **A.** Khi vệ tinh được đẩy hoàn toàn ra khỏi ống phóng POD vào không gian
- **B.** Khi vệ tinh bắt đầu được nạp đầy tải trọng nhiên liệu rắn tại bãi phóng
- **C.** Khi tên lửa đẩy bắt đầu kích hoạt động cơ giai đoạn tách tầng đầu tiên
- **D.** Khi vệ tinh nhận được lệnh điều khiển đầu tiên truyền lên từ mặt đất

> **Đáp án:** **A**  
> **Giải thích:** Khi còn nằm trong ống phóng POD, công tắc hành trình bị nén giữ ở trạng thái hở mạch; ngay khi trượt ra ngoài không gian, công tắc bung ra đóng mạch cấp nguồn cho vệ tinh.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

### Câu 203
**Quy định an toàn phóng quốc tế yêu cầu thời gian trễ tối thiểu sau khi bật nguồn là bao lâu?**

- **A.** Trễ tối thiểu ba mươi phút trước khi bung anten hoặc phát sóng vô tuyến
- **B.** Trễ năm giây để các tụ điện trên bo mạch được nạp đầy năng lượng điện
- **C.** Trễ hai mươi bốn giờ để vệ tinh ổn định quỹ đạo bay quanh Trái Đất
- **D.** Trễ mười phút để các cảm biến nhiệt độ đạt trạng thái cân bằng nhiệt

> **Đáp án:** **A**  
> **Giải thích:** Quy định an toàn của các nhà cung cấp phóng (như NASA, JAXA) yêu cầu vệ tinh giữ im lặng tuyệt đối tối thiểu 30 phút sau khi tách để không ảnh hưởng đến tên lửa và các vệ tinh khác.  
> **Mục tiêu củng cố:** Nắm vững nguyên lý công tắc ngắt an toàn phóng và giám sát sụt áp Brownout  

---

## 💻 Thực hành: Điều Khiển Power Gating Cấp Nguồn Cảm Biến (Lab2-02) (11 câu)

### Câu 204
**Mạch biến đổi DC-DC Buck (Hạ áp / Step-Down) trong phân hệ EPS thực hiện biến đổi điện áp như thế nào?**

- **A.** Đổi nguồn một chiều sang dạng xoay chiều cao thế
- **B.** Hạ áp pin xuống mức 3.3V ổn định cấp cho hệ thống
- **C.** Nâng mức điện áp của khối pin sạc lên ngưỡng 12V
- **D.** Giữ nguyên mức điện áp đầu vào truyền tới tải

> **Đáp án:** **B**  
> **Giải thích:** Mạch Buck chuyển đổi hiệu quả từ mức áp pin cao hơn xuống mức áp 3.3V chuẩn cho toàn bộ mạch số.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 205
**Chân GPIO nào trên vi điều khiển OBC được sử dụng để điều khiển dòng điện đi vào mạch hạ áp cấp nguồn cảm biến?**

- **A.** GPIO 25
- **B.** GPIO 4
- **C.** GPIO 16
- **D.** GPIO 21

> **Đáp án:** **B**  
> **Giải thích:** Chân GPIO 4 được kết nối tới mạch khống chế dòng vào của IC hạ áp; chân GPIO 25 đã được bố trí cho ngoại vi khác.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 206
**Trong phân hệ nguồn EPS của CubeSat, khi thực hiện kỹ thuật cô lập nguồn (Power Gating) bằng phương thức `eps.setBuckState()`, thao tác nào sẽ ngắt hoàn toàn nguồn cấp cho cụm tải cảm biến?**

- **A.** Gọi `eps.setBuckState(false)` để điều khiển công tắc bán dẫn mở mạch, ngắt dòng cấp cho cụm cảm biến
- **B.** Gọi `eps.setBuckState(true)` để tăng gấp đôi dòng điện cấp cho cảm biến
- **C.** Cấu hình cổng UART về trạng thái ngắt kết nối
- **D.** Đặt tốc độ xung nhịp I2C về 0 Hz

> **Đáp án:** **A**  
> **Giải thích:** Gọi `eps.setBuckState(false)` sẽ điều khiển khóa điện tử mở mạch, ngắt hoàn toàn dòng điện đi vào bộ hạ áp cấp nguồn cho cụm cảm biến, giúp tiết kiệm triệt để năng lượng khi cảm biến không hoạt động.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 207
**Kỹ thuật Power Gating (khống chế nguồn chu kỳ) bằng cách bật/tắt mạch hạ áp cảm biến mang lại lợi ích gì cho CubeSat?**

- **A.** Ép xung vi điều khiển trung tâm lên tốc độ cao
- **B.** Triệt tiêu dòng rò tĩnh cảm biến, tiết kiệm pin
- **C.** Làm mát trực tiếp và giải nhiệt cho khối tế bào
- **D.** Tăng cường cự ly phát sóng vô tuyến đường dài

> **Đáp án:** **B**  
> **Giải thích:** Các cảm biến tiêu tốn dòng rò liên tục nếu cấp nguồn thường trực; cắt dòng vào mạch hạ áp đưa dòng tiêu thụ của cảm biến về 0 mA.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 208
**Trong mã nguồn C++ bài thực hành Lab2-02_Power_Saving, câu lệnh nào được dùng để cấu hình chân điều khiển mạch hạ áp ở hàm setup()?**

- **A.** Cấu hình chân điều khiển ở chế độ ngõ ra OUTPUT bằng hàm pinMode()
- **B.** Cấu hình chân điều khiển ở chế độ ngõ vào INPUT bằng hàm pinMode()
- **C.** Cấu hình chân số 25 ở chế độ ngõ ra OUTPUT bằng hàm pinMode()
- **D.** Gắn hàm ngắt ngoài attachInterrupt() vào chân tín hiệu điều khiển

> **Đáp án:** **A**  
> **Giải thích:** Chân GPIO 4 điều khiển công tắc dòng vào mạch hạ áp nên phải được cấu hình là ngõ ra số OUTPUT.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 209
**Để ngắt dòng điện đi vào mạch hạ áp (tắt cụm cảm biến) nhằm tiết kiệm năng lượng, lệnh C++ nào được thực thi?**

- **A.** Xuất mức logic LOW ra chân điều khiển để ngắt khóa bán dẫn P-MOSFET
- **B.** Xuất mức logic HIGH ra chân điều khiển để ngắt khóa bán dẫn P-MOSFET
- **C.** Sử dụng hàm analogWrite() đưa mức điện áp điều khiển về 0V
- **D.** Đọc trạng thái logic ngõ vào của chân điều khiển bằng digitalRead()

> **Đáp án:** **B**  
> **Giải thích:** Theo chuẩn phần cứng đã quy định, GPIO 4 mức 1 (HIGH) sẽ khóa dòng đi vào mạch hạ áp, cắt nguồn ra tải cảm biến.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 210
**Để cho phép dòng điện đi vào mạch hạ áp (cấp nguồn 3.3V cho cảm biến đo đạc), lệnh C++ nào được thực thi?**

- **A.** Xuất mức logic HIGH ra chân điều khiển khóa nguồn P-MOSFET
- **B.** Xuất mức logic LOW ra chân điều khiển để kích dẫn khóa nguồn P-MOSFET
- **C.** Chuyển chân điều khiển sang chế độ ngõ vào INPUT bằng pinMode()
- **D.** Ngắt toàn bộ hoạt động của bus I2C bằng lệnh Wire.end()

> **Đáp án:** **B**  
> **Giải thích:** Xuất mức 0 (LOW) ra GPIO 4 kích hoạt khóa mạch cho dòng chạy vào mạch hạ áp, cung cấp nguồn cho cụm cảm biến.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 211
**Cặp macro định nghĩa nào sau đây phản ánh chính xác quy ước điều khiển nguồn mạch hạ áp trong mã nguồn Lab2-02?**

- **A.** #define BUCK_ON HIGH và #define BUCK_OFF LOW
- **B.** #define BUCK_POWER_ON LOW và #define BUCK_POWER_OFF HIGH
- **C.** #define BUCK_POWER_ON 1 và #define BUCK_POWER_OFF 0
- **D.** #define BUCK_ENABLE 25 và #define BUCK_DISABLE 4

> **Đáp án:** **B**  
> **Giải thích:** Hệ thống sử dụng logic mức 0 cho phép dòng (POWER_ON = LOW) và mức 1 ngắt dòng (POWER_OFF = HIGH).  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 212
**Đoạn mã C++ nào sau đây được sử dụng để cấu hình chân `BOOST_EN_PIN` ở trạng thái ban đầu an toàn trong hàm `setup()`?**

- **A.** Cấu hình chân ở chế độ ngõ vào INPUT thả nổi không xác định
- **B.** Cấu hình chân ở chế độ ngõ vào INPUT_PULLUP có trở kéo lên
- **C.** Xuất ngay mức logic HIGH ra chân để kích hoạt tải tức thì
- **D.** Cấu hình chân OUTPUT và lập tức xuất mức LOW giữ tải ở trạng thái tắt

> **Đáp án:** **D**  
> **Giải thích:** Cấu hình chân là OUTPUT và ngay lập tức kéo xuống mức LOW bảo đảm phụ tải công suất không bị kích hoạt ngoài ý muốn khi vừa bật nguồn.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 213
**Giả sử khối cảm biến tiêu thụ 25 mA khi bật. Nếu chu kỳ đo là 6.5 giây, trong đó mạch hạ áp chỉ bật 1.5 giây và tắt 5.0 giây, tỷ lệ tiết kiệm năng lượng xấp xỉ bao nhiêu % so với bật liên tục?**

- **A.** 10%
- **B.** 30%
- **C.** 77%
- **D.** 95%

> **Đáp án:** **C**  
> **Giải thích:** Hệ số làm việc Duty Cycle = 1.5 / 6.5 ≈ 23%, do đó tiết kiệm được khoảng 100% - 23% = 77% điện năng tiêu thụ của cụm cảm biến.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

### Câu 214
**Trạng thái khởi tạo an toàn nhất cho phân hệ cấp nguồn cảm biến phụ tải trong hàm `setup()` ngay khi vệ tinh vừa khởi động lại là gì?**

- **A.** Lập tức cấp nguồn tối đa cho toàn bộ các thiết bị cảm biến và động cơ cùng lúc
- **B.** Khởi tạo ở trạng thái ngắt nguồn phụ tải (`eps.setBuckState(false)`) để bảo đảm dòng khởi động an toàn, tránh sụt áp đột ngột (Brownout) khi hệ thống vừa bật
- **C.** Bật/tắt liên tục công tắc nguồn với tần số 100 kHz
- **D.** Khởi tạo ở chế độ phát xung PWM điều chỉnh điện áp

> **Đáp án:** **B**  
> **Giải thích:** Khởi tạo ở trạng thái ngắt phụ tải giúp giảm thiểu dòng khởi động đỉnh (Inrush Current), ngăn ngừa sụt áp nguồn cấp (Brownout Reset) trong lúc vi điều khiển và các khối chức năng lõi đang ổn định.  
> **Mục tiêu củng cố:** Lập trình điều khiển đóng ngắt nguồn hạ áp cảm biến để tiết kiệm năng lượng quỹ đạo  

---

