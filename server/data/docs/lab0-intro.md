# Lab 0: Giới thiệu Tổng quan Kỹ thuật Không gian & Vệ tinh CubeSat

---

## 📖 Doc 0.1: Lịch sử CubeSat, Tiêu chuẩn Kỹ thuật & Môi trường Quỹ đạo LEO

### 1. Lịch sử Phát triển và Triết lý Tiêu chuẩn Hóa CubeSat
Vệ tinh siêu nhỏ tiêu chuẩn **CubeSat** được khởi xướng vào năm 1999 thông qua sự hợp tác lịch sử giữa Giáo sư **Jordi Puig-Suari** (Đại học Bách khoa Bang California - CalPoly, San Luis Obispo) và Giáo sư **Bob Twiggs** (Đại học Stanford). Mục tiêu nguyên bản của dự án là thiết lập một tiêu chuẩn kích thước và giao diện cơ khí đồng nhất, giúp sinh viên đại học có thể tự tay thiết kế, chế tạo, thử nghiệm và vận hành một vệ tinh nhân tạo thực thụ trong khoảng thời gian phù hợp với chu kỳ đào tạo (1 - 2 năm) với ngân sách chỉ bằng một phần nghìn so với các vệ tinh truyền thống.

Trước khi CubeSat ra đời, ngành công nghiệp vũ trụ bị chi phối bởi các vệ tinh lớn có khối lượng từ vài trăm kilogam đến hàng tấn, chi phí phát triển lên tới hàng trăm triệu USD và thời gian chuẩn bị kéo dài hàng thập kỷ. Bất kỳ một sai sót nhỏ nào cũng dẫn đến thiệt hại khổng lồ, khiến các kỹ sư có xu hướng cực kỳ bảo thủ, chỉ sử dụng các linh kiện điện tử chuyên dụng chống bức xạ (Radiation-Hardened) thế hệ cũ và đắt đỏ. 

CubeSat đã tạo nên một cuộc cách mạng mang tính đột phá (New Space Revolution) dựa trên ba trụ cột triết lý cốt lõi:
1. **Tiêu chuẩn Hóa Cơ khí & Giao diện Phóng (Standardized Form Factor & Deployment):** Quy định kích thước khối lập phương cố định giúp các nhà cung cấp tên lửa đẩy dễ dàng tích hợp vệ tinh vào các khoang chứa tiêu chuẩn mà không cần thiết kế lại cơ cấu gá phóng cho từng sứ mệnh.
2. **Khai thác Linh kiện Thương mại Sẵn có (COTS - Commercial Off-The-Shelf):** Tận dụng bước nhảy vọt của ngành công nghiệp bán dẫn tiêu dùng (vi xử lý ARM/ESP32, cảm biến MEMS, pin Lithium-Ion điện thoại). Mặc dù linh kiện COTS không được bọc chắn bức xạ chuyên dụng, các kỹ sư vũ trụ hiện đại áp dụng các giải pháp kiến trúc hệ thống, thuật toán tự sửa lỗi và cơ chế dự phòng đa tầng để đạt độ tin cậy bay mong muốn với giá thành cực thấp.
3. **Đóng gói Kín Giảm Thiểu Rủi ro cho Tên lửa Mẹ (Containerized Launch Integration):** Vệ tinh được nhốt hoàn toàn bên trong ống phóng dạng hộp kín có nắp đậy (như P-POD). Mọi nguy cơ bung vỡ chi tiết, đoản mạch hay phát sóng ngoài ý muốn đều bị cô lập hoàn toàn, bảo vệ an toàn tuyệt đối cho tên lửa đẩy và tải trọng thương mại chính.

```mermaid
timeline
    title Lịch sử Phát triển của Chuẩn CubeSat và Kỷ nguyên New Space
    1999 : Khởi xướng tiêu chuẩn 1U bởi GS. Jordi Puig-Suari (CalPoly) & GS. Bob Twiggs (Stanford)
    2003 : Chuyến bay đầu tiên đưa 6 vệ tinh CubeSat 1U của các trường đại học lên quỹ đạo (tên lửa Rokot)
    2006 : Ra mắt tiêu chuẩn mở rộng CubeSat Design Specification (CDS) hỗ trợ cấu hình 2U và 3U
    2012 : Vệ tinh F-1 của FSpace (Việt Nam) được phóng lên quỹ đạo từ Trạm Vũ trụ Quốc tế ISS
    2014 : Bùng nổ chòm vệ tinh thương mại Planet Labs Dove (hơn 100 vệ tinh 3U chụp ảnh toàn cầu)
    2018 : Sứ mệnh MarCO (NASA JPL) - Cặp đôi CubeSat 6U đầu tiên bay liên hành tinh hỗ trợ tàu InSight đổ bộ Sao Hỏa
    Hiện nay : Mở rộng lên 6U, 12U, 27U; tích hợp động cơ đẩy ion và liên kết quang học laser liên vệ tinh
```

---

### 2. Phân loại Vệ tinh Nhỏ (SmallSat) theo Khối lượng
Trong thang phân loại quốc tế của Liên đoàn Hàng không Vũ trụ Quốc tế (IAF) và NASA, các vệ tinh nhỏ (SmallSat) được định danh chính xác dựa trên khối lượng ướt khi phóng (Wet Mass bao gồm cả nhiên liệu nếu có):

| Nhóm Vệ tinh | Khối lượng Phóng ($M$) | Ví dụ Điển hình & Cấu hình CubeSat |
| :--- | :--- | :--- |
| **Minisatellite (Vệ tinh nhỏ)** | $100\text{ kg} \le M < 500\text{ kg}$ | Vệ tinh viễn thám cao cấp, chòm vệ tinh Starlink v1 |
| **Microsatellite (Vệ tinh siêu nhỏ)** | $10\text{ kg} \le M < 100\text{ kg}$ | Vệ tinh VNREDSat-1 (115 kg), CubeSat 12U - 27U |
| **Nanosatellite (Vệ tinh nano)** | $1\text{ kg} \le M < 10\text{ kg}$ | **Chuẩn CubeSat tiêu chuẩn: 1U (1.33 kg), 2U, 3U, 6U** |
| **Picosatellite (Vệ tinh pico)** | $0.1\text{ kg} \le M < 1\text{ kg}$ | Vệ tinh dạng bản mạch PocketQube ($5 \times 5 \times 5\text{ cm}$), Chipsat |
| **Femtosatellite (Vệ tinh femto)** | $M < 0.1\text{ kg}$ ($< 100\text{ g}$) | Vệ tinh vi mạch đơn màng mỏng (Sprite, KickSat) |

---

### 3. Thông số Hình học Tiêu chuẩn 1U (1 Unit) theo Quy chuẩn CalPoly
Một vệ tinh CubeSat đơn vị cơ sở (1U) phải tuân thủ nghiêm ngặt các quy định kích thước trong tài liệu đặc tả **CubeSat Design Specification (CDS)** do Đại học CalPoly ban hành để đảm bảo vệ tinh có thể trượt vừa vặn trơn tru bên trong ống phóng mà không bao giờ bị kẹt:

```mermaid
flowchart LR
    subgraph Dimensions_1U ["📐 THÔNG SỐ CƠ HỌC TIÊU CHUẨN CUBESAT 1U"]
        direction TB
        Body["Khối Thân Chính: 100.0 x 100.0 x 100.0 mm
(Dung sai gia công: ± 0.1 mm)"]
        Rails["4 Thanh Ray Trượt (Rails): Dài 113.5 mm
Bề rộng tiếp xúc: ≥ 8.5 mm, Bán kính bo: ≥ 1.0 mm"]
        Mass["Khối lượng Cho phép: M ≤ 1.33 kg (Chuẩn truyền thống)
Mở rộng tối đa: ≤ 2.00 kg (Chuẩn cập nhật hiện đại)"]
        CoM["Độ lệch Trọng tâm (Center of Mass):
Nằm trong bán kính 20 mm tính từ tâm hình học"]
    end
```

| Thông số Kỹ thuật | Tiêu chuẩn Quy định | Ý nghĩa Kỹ thuật & Dung sai Kiểm định |
| :--- | :--- | :--- |
| **Kích thước Thân cơ sở ($X \times Y$)** | $100.0 \times 100.0\text{ mm}$ | Dung sai cực kỳ nghiêm ngặt $\pm 0.1\text{ mm}$; kiểm tra bằng dưỡng đo cơ khí (Go/No-Go Gauge). |
| **Chiều dài Dọc trục Ray ($Z$)** | $113.5\text{ mm}$ | Tính từ mặt phẳng đáy ray đến đỉnh ray. Các thanh ray nhô ra $6.5\text{ mm}$ ở mỗi đầu để ngăn các mặt bên chạm đáy. |
| **Bề rộng Thanh ray (Rails)** | Tối thiểu $8.5\text{ mm}$ | Tiếp xúc trực tiếp với rãnh dẫn hướng của ống phóng POD để chịu tải trọng rung động. |
| **Bán kính Bo viền Ray** | Tối thiểu $1.0\text{ mm}$ | Bán kính lượn góc nhẵn bóng nhằm loại bỏ hoàn toàn các gờ sắc nhọn gây cào xước ống phóng. |
| **Độ nhám Bề mặt Ray ($R_a$)** | $R_a \le 0.8\text{ }\mu\text{m}$ | Bề mặt ray trượt phải được mài bóng kỹ thuật cao để giảm thiểu lực ma sát trượt khi bung. |
| **Xử lý Bề mặt Ray (Hard Anodize)** | Anodize Cứng Type III | Tạo lớp gốm oxit nhôm dày ($25 - 50\text{ }\mu\text{m}$) cách điện, chống mài mòn và chống hàn nguội trong chân không. |
| **Vùng Cấm Nhô (Keep-out Zone)** | Tối đa $6.5\text{ mm}$ | Không có bất kỳ linh kiện, đầu ốc vít hay thấu kính nào được nhô ra khỏi bề mặt ngoài vượt quá $6.5\text{ mm}$. |
| **Vị trí Trọng tâm (CoM)** | Cách tâm hình học $\le 20\text{ mm}$ | Phân bố khối lượng lệch tâm vượt chuẩn sẽ tạo mô-men xoắn gây rung lắc ống phóng và kẹt khi đẩy. |

---

### 4. Cơ chế Phóng P-POD & J-SSOD
CubeSat không được gắn trực tiếp lên tên lửa đẩy mà bắt buộc phải nằm trong một hệ thống phóng dạng hộp kín chuyên dụng:
1. **P-POD (Poly-Picosatellite Orbital Deployer):** Phát triển bởi CalPoly, là ống phóng kinh điển bằng hợp kim nhôm Al 7075-T6. Một ống P-POD tiêu chuẩn có thể chứa một vệ tinh 3U hoặc ba vệ tinh 1U xếp chồng nối tiếp nhau.
2. **J-SSOD (JEM Small Satellite Orbital Deployer):** Hệ thống phóng vệ tinh lắp đặt trên Module Kibo của Nhật Bản thuộc Trạm Vũ trụ Quốc tế ISS. Các phi hành gia đưa bộ phóng ra ngoài không gian qua cửa điều áp (Air Lock) và cánh tay robot Kibo sẽ định hướng ống phóng về phía sau quỹ đạo ISS để đẩy CubeSat ra ngoài.

```mermaid
sequenceDiagram
    autonumber
    participant Rocket as Tên lửa Đẩy / Trạm ISS
    participant Deployer as Ống phóng POD (P-POD / J-SSOD)
    participant CubeSat as Vệ tinh CubeSat 1U
    participant Space as Không gian Quỹ đạo LEO

    Rocket->>Deployer: Gửi xung điện kích hoạt nhả chốt cửa (NEA)
    Deployer->>Deployer: Mở nắp cửa ống phóng; giải phóng lò xo đẩy chính
    Deployer->>CubeSat: Lò xo đáy tạo xung lực đẩy dọc thanh ray (Vận tốc thoát: 1.0 - 1.5 m/s)
    CubeSat->>Space: Tách ly hoàn toàn khỏi ống phóng vào quỹ đạo tự do
    CubeSat->>CubeSat: Công tắc hành trình (Deployment Switch) bật lên: Cấp nguồn cho bo EPS
    CubeSat->>CubeSat: Bắt đầu đếm ngược thời gian im lặng vô tuyến bắt buộc (30 phút)
```

- **Lò xo đẩy chính (Ejection Spring):** Đặt tại đáy ống phóng, cung cấp lực đẩy tuyến tính ổn định để phóng vệ tinh với vận tốc tương đối từ $1.0\text{ m/s}$ đến $1.5\text{ m/s}$, tránh nguy cơ vệ tinh bay lơ lửng ngay cửa ống gây va chạm với tên lửa.
- **Lò xo tách tầng (Deployment Plungers):** Lắp ở đỉnh các thanh ray trượt. Khi hai vệ tinh CubeSat xếp chồng trong cùng một ống phóng rời khỏi cửa, các lò xo plunger nhỏ sẽ lập tức đẩy hai vệ tinh dạt xa nhau để ngăn ngừa va chạm thứ cấp.
- **Công tắc Hành trình Phóng (Deployment Switch / Inhibit Switch):** Lắp ở chân thanh ray trượt. Khi vệ tinh nằm trong ống phóng, nắp hoặc ray đè chặt công tắc ở trạng thái ngắt mạch điện (Open circuit). Khi vệ tinh vừa trượt ra ngoài không gian, công tắc bung ra, đóng mạch điện kết nối pin sạc với hệ thống phân phối nguồn EPS.
- **Quy tắc Im lặng Vô tuyến 30 Phút (30-Minute Radio Silence Rule):** Theo yêu cầu an toàn phóng quốc tế của CalPoly, NASA và JAXA, CubeSat **bắt buộc phải giữ im lặng vô tuyến hoàn toàn trong ít nhất 30 phút đầu tiên** sau khi rời ống phóng. Trong khoảng thời gian này, vi điều khiển không được phát sóng radio, không được kích hoạt đốt nhiệt bung anten hay mở các tấm pin để tránh gây nhiễu cho các thiết bị điều khiển của tên lửa đẩy và các vệ tinh khác phóng cùng cụm.

---

### 5. Môi trường Vật lý Khắc nghiệt tại Quỹ đạo Trái Đất Tầm thấp (LEO)
Quỹ đạo LEO (Low Earth Orbit) nằm ở độ cao từ $160\text{ km}$ đến $2000\text{ km}$ so với mực nước biển (phổ biến nhất cho CubeSat là $400 - 600\text{ km}$, tương đương quỹ đạo trạm ISS $~410\text{ km}$). Môi trường không gian tại đây đặt ra những thử thách kỹ thuật cực đoan:

#### A. Môi trường Chân không Cực cao (Ultra-High Vacuum)
Áp suất khí quyển tại độ cao $500\text{ km}$ suy giảm xuống chỉ còn khoảng $10^{-6}\text{ Pa}$ đến $10^{-8}\text{ Pa}$ ($10^{-8} - 10^{-10}\text{ Torr}$), so với áp suất khí quyển tiêu chuẩn tại mặt đất là $101.325\text{ kPa}$ ($760\text{ Torr}$):
- **Triệt tiêu Hoàn toàn Truyền nhiệt Đối lưu:** Định luật làm mát đối lưu Fourier/Newton $\dot{Q} = h A (T_s - T_\infty)$ hoàn toàn biến mất do không có phân tử khí chuyển động tự do. Toàn bộ nhiệt lượng sinh ra từ CPU, mạch sạc pin và máy phát sóng chỉ có thể:
  1. Dẫn nhiệt (**Conduction**) qua đồng của bo mạch in PCB và khung kim loại nhôm.
  2. Bức xạ nhiệt (**Radiation**) từ bề mặt ngoài của thân vệ tinh vào không gian sâu.
- **Hiện tượng Thoát khí Vật liệu (Outgassing):** Dưới áp suất chân không cực thấp, các hợp chất hữu cơ dễ bay hơi, dung môi tồn dư, chất hóa dẻo trong polyme, băng keo và chất cách điện sẽ thoát ra khỏi bề mặt vật liệu. Các hạt khí này bay lơ lửng và nhanh chóng ngưng tụ lạnh lên bề mặt quang học của ống kính camera làm mờ đục ảnh chụp, hoặc phủ lên tế bào quang điện làm sụt giảm công suất sạc. Tiêu chuẩn **ASTM E595** của NASA quy định vật liệu không gian phải đạt:
  $$\text{TML (Total Mass Loss)} \le 1.0\% \quad \text{và} \quad \text{CVCM (Collected Volatile Condensable Material)} \le 0.1\%$$
- **Hiện tượng Hàn nguội Chân không (Cold Welding):** Trong không khí mặt đất, bề mặt kim loại luôn được bao phủ bởi một màng oxit mỏng tự nhiên và lớp phân tử ẩm. Trong môi trường chân không sâu, lớp oxit này bị triệt tiêu hoặc mài mòn. Khi hai bề mặt kim loại trần cùng loại (nhất là nhôm hoặc thép không gỉ) tiếp xúc trực tiếp dưới lực siết mạnh, các mạng tinh thể kim loại sẽ liên kết tự do, dính chặt vào nhau như được hàn nóng chảy. Đây là lý do các thanh ray CubeSat bắt buộc phải mạ **Anodize cứng Type III** (lớp gốm $Al_2O_3$ siêu cứng ngăn cách tiếp xúc kim loại trực tiếp).

#### B. Môi trường Bức xạ Vũ trụ & Hạt Mang điện Năng lượng Cao
Không gian LEO không được tầng khí quyển dày bảo vệ hoàn toàn, vệ tinh liên tục bị bắn phá bởi các chùm hạt proton từ gió Mặt Trời, tia vũ trụ ngân hà (Galactic Cosmic Rays - GCR) và các điện tử bị bẫy trong hai vành đai bức xạ Van Allen:

```mermaid
flowchart TD
    subgraph Radiation_Effects ["☢️ TÁC ĐỘNG BỨC XẠ KHÔNG GIAN LÊN LINH KIỆN BÁN DẪN"]
        direction TB
        TID["TID (Total Ionizing Dose)
Liều tích lũy dài hạn:
Tích tụ điện tích trong lớp cách điện SiO2,
dịch chuyển điện áp ngưỡng MOSFET,
tăng dòng rò tĩnh làm chip chết dần."]
        
        SEE["SEE (Single Event Effects)
Sự cố tức thời do 1 hạt ion năng lượng cao:"]
        
        SEU["SEU (Single Event Upset):
Đảo trạng thái bit logic (0 -> 1 hoặc 1 -> 0)
trong RAM/Register (Lỗi mềm - Soft Error)."]
        
        SEL["SEL (Single Event Latchup):
Kích hoạt thyristor ký sinh SCR trong CMOS,
tạo ngắn mạch nguồn - đất, dòng vọt cao
thiêu cháy chip vĩnh viễn nếu không ngắt điện!"]
        
        SEFI["SEFI (Single Event Functional Interrupt):
Treo toàn bộ CPU, bus đóng băng hoặc reset bất ngờ."]
        
        SEE --> SEU
        SEE --> SEL
        SEE --> SEFI
    end
```

- **Giải pháp Giảm nhẹ trên CubeSat:**
  - Sử dụng mạch giám sát dòng điện tức thời trên chip EPS để phát hiện SEL và ngắt nguồn cưỡng bức (Power Cycling) trong vài mili-giây trước khi chip bị phá hủy vì nhiệt.
  - Sử dụng bộ định thời chó canh phần cứng độc lập (**Hardware Watchdog Timer**) để tự động khởi động lại OBC khi gặp lỗi treo phần mềm hoặc SEFI.
  - Sử dụng mã sửa sai Hamming / ECC (Error-Correcting Code) và thuật toán lưu trữ dự phòng ba lần (**TMR - Triple Modular Redundancy**) trong bộ nhớ để sửa lỗi lật bit SEU.

#### C. Khí Oxy Nguyên tử (Atomic Oxygen - AO)
Ở độ cao $200 - 600\text{ km}$, bức xạ cực tím tử ngoại (UV) năng lượng cao từ Mặt Trời bẻ gãy các liên kết phân tử oxy hai nguyên tử ($O_2$) trong tầng nhiệt khí quyển thành các gốc **oxy nguyên tử tự do ($O$)**. Khi vệ tinh bay với vận tốc quỹ đạo siêu thanh $\sim 7.7\text{ km/s}$, các nguyên tử oxy này va chạm trực diện với bề mặt đón gió của vệ tinh với động năng khoảng $5\text{ eV}$. Khí oxy nguyên tử có tính oxy hóa cực mạnh, ăn mòn nhanh chóng các bề mặt mạ bạc, ăn mòn polyme Kapton và phá hủy các lớp phủ quang học.

#### D. Cân bằng Nhiệt Quỹ đạo (Thermal Equilibrium in Space)
Nhiệt độ của CubeSat trong không gian là kết quả của sự cân bằng động học giữa tổng công suất nhiệt hấp thụ và tổng công suất nhiệt bức xạ ra vũ trụ:

$$\dot{Q}_{\text{in}} + Q_{\text{internal}} = \dot{Q}_{\text{out}}$$

Trong đó:
1. **Nhiệt Hấp thụ ($\dot{Q}_{\text{in}}$):**
   - **Bức xạ Mặt Trời Trực tiếp ($Q_{\text{solar}}$):** Hằng số Mặt Trời tại quỹ đạo Trái Đất $G_{sc} \approx 1361\text{ W/m}^2$. Công suất hấp thụ:
     $$Q_{\text{solar}} = \alpha \cdot A_{\text{proj}} \cdot G_{sc}$$
     (với $\alpha$ là hệ số hấp thụ quang học của bề mặt vỏ, $A_{\text{proj}}$ là diện tích hình chiếu vuông góc với tia nắng).
   - **Bức xạ Phản xạ từ Trái Đất (Earth Albedo - $Q_{\text{albedo}}$):** Trái Đất phản xạ lại không gian trung bình khoảng $30\%$ ($a \approx 0.30$) thông lượng ánh sáng Mặt Trời:
     $$Q_{\text{albedo}} = \alpha \cdot A_{\text{earth}} \cdot G_{sc} \cdot a \cdot F_{\text{sat-earth}}$$
   - **Bức xạ Hồng ngoại Phát ra từ Trái Đất (Earth Infrared - $Q_{\text{IR}}$):** Bản thân Trái Đất phát xạ nhiệt hồng ngoại như một vật đen ở nhiệt độ $\sim 255\text{ K}$, với thông lượng trung bình $q_{\text{IR}} \approx 237\text{ W/m}^2$:
     $$Q_{\text{IR}} = \varepsilon \cdot A_{\text{earth}} \cdot q_{\text{IR}} \cdot F_{\text{sat-earth}}$$
2. **Nhiệt Nội sinh ($Q_{\text{internal}}$):** Công suất tiêu tán nhiệt từ các linh kiện điện tử đang hoạt động (CPU OBC, mạch sạc pin EPS, mạch khuếch đại công suất PA của module truyền thông LoRa).
3. **Nhiệt Bức xạ ra Không gian Sâu ($\dot{Q}_{\text{out}}$):** Theo định luật bức xạ vật đen **Stefan-Boltzmann**:
   $$\dot{Q}_{\text{out}} = \varepsilon \cdot \sigma \cdot A_{\text{total}} \cdot (T_{\text{sat}}^4 - T_{\text{space}}^4)$$
   (với $\varepsilon$ là hệ số phát xạ hồng ngoại của vật liệu vỏ, hằng số Stefan-Boltzmann $\sigma = 5.67 \times 10^{-8}\text{ W/(m}^2\text{K}^4)$, $A_{\text{total}}$ là tổng diện tích bức xạ $6$ mặt của CubeSat, $T_{\text{space}} \approx 2.7\text{ K} \approx -270.45^\circ\text{C}$).

```mermaid
graph TD
    Sun["☀️ MẶT TRỜI
G_sc = 1361 W/m²"] -->|Bức xạ trực tiếp Q_solar| Sat["🛰️ CUBESAT 1U
(Cân bằng nhiệt T_sat)"]
    Earth["🌍 TRÁI ĐẤT
(Albedo a ≈ 0.30 & IR ≈ 237 W/m²)"] -->|Phản xạ Albedo & Hồng ngoại IR| Sat
    Elec["⚡ Nguồn nội sinh Q_internal
(MCU, EPS, Mạch phát LoRa)"] -->|Tỏa nhiệt Joule| Sat
    Sat -->|Bức xạ Stefan-Boltzmann ε·σ·A·T⁴| Space["🌌 KHÔNG GIAN SÂU
(T_space ≈ 2.7 K)"]
```

- **Biên độ Biến thiên Nhiệt:**
  - **Pha Ban ngày (Sunlight):** Vệ tinh hấp thụ nhiệt mặt trời tối đa, nhiệt độ bề mặt ngoài có thể tăng vọt lên $+80^\circ\text{C}$ đến $+100^\circ\text{C}$.
  - **Pha Vùng tối (Eclipse):** Khi vệ tinh đi vào vùng khuất bóng của Trái Đất ($\approx 35\text{ phút}$ mỗi vòng bay), $Q_{\text{solar}} = 0$ và $Q_{\text{albedo}} = 0$, vệ tinh liên tục mất nhiệt vào vũ trụ, nhiệt độ vỏ tụt dốc xuống $-40^\circ\text{C}$ đến $-50^\circ\text{C}$.
  - Trung bình mỗi ngày vệ tinh trải qua $15 - 16$ chu kỳ sốc nhiệt nóng - lạnh cực đoan, đòi hỏi thiết kế nhiệt thụ động (**Passive Thermal Control**) bằng cách tính toán tỷ số $\alpha/\varepsilon$ của các lớp phủ bề mặt (như băng keo Kapton, mạ niken hoặc sơn anodize đen).

#### E. Động học Quỹ đạo & Thời gian Suy thoái (Orbital Decay)
1. **Vận tốc Quỹ đạo Cân bằng (Orbital Velocity):**
   Vệ tinh duy trì quỹ đạo tròn khi lực hấp dẫn cân bằng hoàn toàn với lực hướng tâm:
   $$\frac{G M_E m}{(R_E + h)^2} = \frac{m v^2}{R_E + h} \implies v = \sqrt{\frac{G M_E}{R_E + h}} = \sqrt{\frac{\mu}{r}}$$
   Với hằng số hấp dẫn Trái Đất $\mu = G M_E \approx 398600.44\text{ km}^3/\text{s}^2$, bán kính Trái Đất $R_E \approx 6378.14\text{ km}$. Ở độ cao $h = 500\text{ km}$:
   $$v = \sqrt{\frac{398600.44}{6378.14 + 500}} \approx 7.613\text{ km/s} \approx 27400\text{ km/h}$$
2. **Chu kỳ Quỹ đạo (Orbital Period):**
   $$T = 2\pi \sqrt{\frac{(R_E + h)^3}{\mu}} = 2\pi \sqrt{\frac{(6878.14)^3}{398600.44}} \approx 5677\text{ giây} \approx 94.6\text{ phút}$$
   Trong một ngày đêm Trái Đất ($24\text{ giờ}$), vệ tinh hoàn thành:
   $$N = \frac{24 \times 60}{94.6} \approx 15.22\text{ vòng/ngày}$$
3. **Lực Cản Khí quyển & Quy tắc 25 Năm (IADC 25-Year Rule):**
   Mặc dù rất loãng, tầng khí quyển tàn dư vẫn tạo ra lực cản khí động học:
   $$F_{\text{drag}} = \frac{1}{2} \rho v^2 C_d A$$
   (với $\rho$ là mật độ không khí, $C_d \approx 2.2$ là hệ số cản của khối lập phương, $A$ là diện tích cản gió). Lực cản này liên tục tiêu hao cơ năng của vệ tinh, làm độ cao quỹ đạo giảm dần (Orbital Decay) cho đến khi vệ tinh rơi vào tầng khí quyển dày và bốc cháy hoàn toàn:
   - Độ cao $< 200\text{ km}$ : Vệ tinh rơi và bốc cháy chỉ trong vài ngày.
   - Độ cao $300 - 400\text{ km}$ : Tuổi thọ quỹ đạo kéo dài vài tháng đến $1 - 2$ năm (quỹ đạo lý tưởng cho CubeSat giáo dục).
   - Độ cao $500 - 600\text{ km}$ : Tuổi thọ quỹ đạo từ $5$ đến $25$ năm.
   - Độ cao $> 800\text{ km}$ : Tồn tại hàng trăm năm, trở thành rác vũ trụ nguy hiểm nếu không có động cơ khử quỹ đạo.
   - **Quy chuẩn IADC / Liên Hợp Quốc:** Ủy ban Điều phối Rác Vũ trụ Quốc tế (IADC) quy định mọi vệ tinh LEO sau khi kết thúc sứ mệnh phải tự động khử quỹ đạo và bốc cháy trong vòng không quá **25 năm**. Vệ tinh cũng phải thực hiện quy trình **Thụ động hóa (Passivation)**: xả kiệt dung lượng pin sạc và giải phóng toàn bộ năng lượng dư thừa để tránh nguy cơ phát nổ tạo thành các mảnh vụn không gian.

---

## 📖 Doc 0.2: Kiến trúc Hệ thống Vệ tinh 1U & 6 Phân hệ Cốt lõi

### 1. Kiến trúc Hệ thống Phân rã theo Khối Chức năng
Một vệ tinh CubeSat là một hệ sinh thái cơ điện tử phức tạp thu nhỏ. Hệ thống được chia tách thành hai nhóm lớn:
1. **Hệ thống Nền tảng (Bus System):** Tập hợp các phân hệ kỹ thuật cơ bản chịu trách nhiệm duy trì sự sống, cung cấp năng lượng, bảo vệ cơ học, xử lý lệnh và duy trì liên lạc với Trái Đất.
2. **Tải trọng Sứ mệnh (Payload):** Thiết bị hoặc cảm biến chuyên dụng phục vụ mục tiêu khoa học, thương mại hoặc thử nghiệm công nghệ cụ thể của chuyến bay (ví dụ: camera chụp ảnh bề mặt, máy thu tín hiệu hàng hải AIS/ADS-B, cảm biến đo bức xạ hoặc mô-đun phát hiện cháy rừng).

```mermaid
flowchart TD
    subgraph CubeSat_Architecture ["🛰️ KIẾN TRÚC PHÂN HỆ VỆ TINH CUBESAT 1U"]
        direction TB
        
        subgraph BUS ["HỆ THỐNG NỀN TẢNG (BUS SYSTEM)"]
            EPS["⚡ Phân hệ Năng lượng (EPS)
Pin quang điện, Pin sạc Li-Po,
Bộ sạc TP4056 & Mạch giám sát MAX17048"]
            
            OBC_CDH["🧠 Phân hệ Máy tính & C&DH
Vi điều khiển lõi kép ESP32,
RTOS Scheduler & Thẻ nhớ MicroSD FAT32"]
            
            COM["📡 Phân hệ Truyền thông (COM)
Module thu phát vô tuyến LoRa 433 MHz,
Anten monopole 1/4 bước sóng"]
            
            STR["🏗️ Phân hệ Cấu trúc Cơ khí (STR)
Khung nhôm Al 6061-T6, ray trượt Anodized,
Cọc đồng PC/104 & Công tắc hành trình"]
            
            ADCS["🧭 Phân hệ Xác định & Điều khiển Tư thế (ADCS)
Cảm biến quán tính 6-DoF MPU6500,
Từ kế 3 trục QMC5883L & Động cơ rung tạo lực"]
        end
        
        subgraph PAYLOAD ["TẢI TRỌNG SỨ MỆNH (PAYLOAD)"]
            CAM["📷 Tải trọng Viễn thám
Camera OV2640 2MP JPEG,
Module định vị toàn cầu GNSS L76X"]
            ENV["🌡️ Cảm biến Môi trường Khí quyển
Cảm biến áp suất khí quyển & nhiệt độ BMP280"]
        end
        
        EPS -->|Đường nguồn 3.3V & 5V ổn áp| OBC_CDH
        EPS -->|Đường nguồn 3.3V & 5V ổn áp| COM
        EPS -->|Đường nguồn 3.3V & 5V ổn áp| ADCS
        EPS -->|Đường nguồn 3.3V & 5V ổn áp| PAYLOAD
        
        OBC_CDH <-->|Bus I2C (SDA / SCL)| EPS
        OBC_CDH <-->|Bus I2C (SDA / SCL)| ADCS
        OBC_CDH <-->|Bus I2C (SDA / SCL)| ENV
        OBC_CDH <-->|Bus UART (TX / RX)| COM
        OBC_CDH <-->|Bus UART (TX / RX)| CAM
        OBC_CDH <-->|Bus SPI (MOSI/MISO/SCK/CS)| OBC_CDH
    end
```

---

### 2. Chi tiết Chức năng & Thông số 6 Phân hệ Cốt lõi

#### 1. Phân hệ Xử lý & Quản lý Dữ liệu Lệnh (OBC / C&DH)
- **Hạt nhân Xử lý:** Sử dụng vi điều khiển 32-bit lõi kép **ESP32-WROOM-32** (kiến trúc Xtensa LX6) với xung nhịp danh định lên tới $240\text{ MHz}$, bộ nhớ $520\text{ KB SRAM}$ nội bộ và $4\text{ MB SPI Flash}$ lưu trữ chương trình điều khiển.
- **Vai trò:**
  - Thực thi máy trạng thái nhiệm vụ (Mission Finite State Machine - FSM).
  - Thu thập định kỳ dữ liệu viễn trắc sinh tồn (Housekeeping Telemetry).
  - Giải mã và kiểm tra bản quyền các gói tin viễn lệnh (Telecommand) từ trạm mặt đất gửi lên.
  - Quản lý nhật ký dữ liệu bay (Flight Log) trên thẻ nhớ microSD định dạng FAT32 qua giao tiếp SPI tốc độ cao.
  - Giám sát sức khỏe hệ thống và kích hoạt cơ chế tự phục hồi lỗi FDIR khi có sự cố.

#### 2. Phân hệ Năng lượng Điện (EPS - Electrical Power System)
- **Thành phần:**
  - **Nguồn Thu:** 4 bề mặt ngoài của CubeSat gắn các cell pin mặt trời đơn tinh thể (Monocrystalline Solar Cells) với hiệu suất chuyển đổi quang điện khoảng $19 - 22\%$.
  - **Nguồn Lưu trữ:** 1 pack pin sạc Lithium-Polymer (Li-Po) đơn cell dung lượng $1200 - 2000\text{ mAh}$, điện áp danh định $3.7\text{V}$ (ngắt xả an toàn ở $3.0\text{V}$, sạc đầy ở $4.2\text{V}$).
  - **Mạch Quản lý Sạc:** IC sạc chuyên dụng **TP4056** điều khiển thuật toán sạc hai giai đoạn CC/CV (Constant Current / Constant Voltage) với dòng sạc danh định $1000\text{ mA}$ kèm cảm biến nhiệt điện trở NTC giám sát quá nhiệt pin.
  - **Mạch Chuyển đổi Nguồn DC-DC:** Bộ chuyển đổi giảm áp Buck hiệu suất cao ($> 90\%$) hạ điện áp biến thiên của pin ($3.0 - 4.2\text{V}$) xuống đường nguồn ổn định $3.3\text{V}$ (cấp cho MCU, cảm biến I2C) và bộ chuyển đổi tăng áp Boost $5.0\text{V}$ (cấp cho module LoRa, GPS).
  - **Mạch Giám sát Nhiên liệu (Fuel Gauge):** Chip giám sát **MAX17048** đo chính xác điện áp pin và tính toán phần trăm dung lượng còn lại (State of Charge - SOC) theo thuật toán ModelGauge độc quyền qua giao tiếp I2C, không cần điện trở shunt gây tổn hao năng lượng.

#### 3. Phân hệ Cảm biến & Tải trọng Sứ mệnh (Sensors & Payload)
- **Cảm biến Khí quyển BMP280:** Cảm biến áp suất vi cơ điện tử MEMS của Bosch, dải đo áp suất $300 - 1100\text{ hPa}$, dải nhiệt độ $-40^\circ\text{C}$ đến $+85^\circ\text{C}$. OBC sử dụng công thức khí áp chuẩn quốc tế (ICAO Barometric Formula) để suy ra độ cao khí quyển tương đối:
  $$h = 44330 \cdot \left[1 - \left(\frac{P}{P_0}\right)^{0.1903}\right]$$
- **Cảm biến Quán tính 6-DoF MPU6500:** Tích hợp 3 trục gia tốc kế (Accelerometer) đo gia tốc thẳng và 3 trục con quay hồi chuyển (Gyroscope) đo vận tốc góc quay quanh 3 trục $X, Y, Z$. Đặt gần trọng tâm vệ tinh để giảm thiểu gia tốc quán tính ký sinh.
- **Cảm biến Từ trường QMC5883L:** Từ kế 3 trục độ nhạy cao đo cường độ từ trường Trái Đất ($B_x, B_y, B_z$), giúp OBC tính toán góc phương vị La bàn (Heading):
  $$\text{Heading} = \text{atan2}(B_y, B_x) \cdot \frac{180}{\pi}$$
- **Module Định vị Toàn cầu GNSS L76X:** Bắt sóng đồng thời hệ thống định vị GPS (Mỹ) và GLONASS (Nga), xuất các câu tin chuẩn NMEA 0183 (như bản tin tọa độ phẳng GPRMC và bản tin độ cao geoid GPGGA) qua cổng UART ở tốc độ $9600\text{ bps}$.
- **Tải trọng Viễn thám Camera OV2640:** Cảm biến ảnh CMOS độ phân giải 2 Megapixel ($1600 \times 1200\text{ pixel}$), tích hợp bộ nén ảnh phần cứng chuẩn JPEG giúp giảm dung lượng tệp ảnh xuống còn $20 - 50\text{ KB}$, phù hợp để truyền tải qua kênh vô tuyến băng thông hẹp.

#### 4. Phân hệ Truyền thông Viễn thông (COM - Communication Subsystem)
- **Phần cứng Thu phát:** Module vô tuyến công nghệ trải phổ **LoRa (Long Range) Ebyte E32**, hoạt động ở băng tần UHF $433\text{ MHz}$ (công suất phát cực đại $20\text{ dBm} \approx 100\text{ mW}$ hoặc bản mở rộng $30\text{ dBm} \approx 1\text{ W}$).
- **Công nghệ Điều chế:** Kỹ thuật trải phổ Chirp Spread Spectrum (CSS) mang lại độ nhạy thu tín hiệu cực kỳ ấn tượng (xuống tới $-138\text{ dBm}$), cho phép giải mã thành công tín hiệu yếu bị chìm sâu dưới ngưỡng sàn nhiễu nhiệt (Noise floor) mà các bộ điều chế FSK/OOK truyền thống hoàn toàn bất lực.
- **Hệ thống Anten:** Anten đơn cực (Monopole) dài $1/4$ bước sóng ($\lambda/4$). Với tần số $f = 433\text{ MHz}$:
  $$\lambda = \frac{c}{f} = \frac{3 \times 10^8\text{ m/s}}{433 \times 10^6\text{ Hz}} \approx 0.6928\text{ m} = 69.28\text{ cm} \implies L_{\text{anten}} = \frac{\lambda}{4} \approx 17.32\text{ cm}$$
  Anten được chế tạo từ lá thước cuộn thép lò xo đàn hồi (Spring steel tape measure), có thể cuộn tròn gọn ghẽ bên trong khoang thân và tự động bật thẳng bung ra ngoài nhờ lực đàn hồi cơ học sau khi rời khỏi ống phóng.

#### 5. Phân hệ Kết cấu Cơ khí (Structure Subsystem)
- **Vật liệu Chế tạo:** Khung sườn hộp được phay CNC chính xác từ hợp kim nhôm hàng không vũ trụ **Al 6061-T6** (hoặc Al 7075-T6). Nhôm 6061-T6 có tỷ số độ bền trên khối lượng rất cao, khả năng gia công hoàn hảo và tính dẫn nhiệt tốt ($k \approx 167\text{ W/(m}\cdot\text{K)}$) giúp truyền dẫn nhiệt lượng từ các bo mạch bên trong ra vỏ ngoài.
- **Tiêu chuẩn Ngăn xếp Bo mạch (PC/104):** Các bo mạch in phân hệ có kích thước vuông chuẩn $90 \times 96\text{ mm}$, được định vị xếp chồng song song lên nhau thông qua 4 cọc đồng lục giác (Standoffs) chiều cao tiêu chuẩn $16\text{ mm}$ và bắt chặt bằng bu-lông ren Inox không gỉ A2-70.
- **Keo Khóa Ren (Threadlocker):** Rung động âm học khốc liệt khi phóng tên lửa (tần số $20 - 2000\text{ Hz}$, gia tốc lên tới $15\text{ g}$) dễ làm các ốc vít bị nới lỏng tự tháo. Toàn bộ các mối ghép bu-lông bắt buộc phải được nhỏ keo khóa ren kỵ khí độ thoát khí thấp (như Loctite 222 hoặc Loctite 242).

#### 6. Phân hệ Điều khiển & Ổn định Tư thế (ADCS)
- **Nhiệm vụ:** Sau khi tách khỏi ống phóng, vệ tinh thường bị xoay tròn tự do không kiểm soát (Tumbling) với vận tốc góc có thể lên tới vài chục độ/giây. ADCS chịu trách nhiệm dập tắt chuyển động quay (Detumbling) và định hướng thân vệ tinh về hướng mong muốn (hướng anten về trạm mặt đất hoặc hướng tấm pin về Mặt Trời).
- **Trên Bộ Kit Giáo dục PTITCube:**
  - **Xác định Tư thế:** Thu thập dữ liệu từ cảm biến quán tính 6 trục MPU6500 và từ kế QMC5883L, nạp vào thuật toán bộ lọc bù (Complementary Filter) hoặc thuật toán định hướng Mahony/Madgwick để ước lượng bộ ba góc tư thế Euler: góc lắc ngang (**Roll**), góc ngẩng (**Pitch**) và góc phương vị hướng (**Yaw**).
  - **Cơ cấu Chấp hành Thực nghiệm:** Trang bị động cơ rung lệch tâm (ERM - Eccentric Rotating Mass) và còi chip âm báo. Khi mô phỏng điều khiển tư thế trên lab, OBC kích hoạt xung điều chế độ rộng PWM điều khiển động cơ rung để sinh ra mô-men phản lực cơ học tương ứng, minh họa trực quan nguyên lý ổn định tư thế bằng bánh đà phản lực (Reaction Wheel).

---

## 💻 Hướng Dẫn Thực Hành: Khám Phá Mô Hình 3D & Thông Số Phân Hệ

### 1. Mục tiêu Bài Thực hành Lab 0
- Làm quen với giao diện học tập tương tác trực quan 3D trên nền tảng **CubeSat-LMS**.
- Nắm vững vị trí không gian, cách thức bố trí ngăn xếp và mối liên kết cơ điện tử giữa các linh kiện thuộc 6 phân hệ CubeSat 1U.
- Tra cứu bảng đặc tả thông số kỹ thuật (Datasheet / Spec) chi tiết của từng chip IC, cảm biến và module phần cứng.
- Rèn luyện kỹ năng quan sát hình học không gian, phân biệt rõ ràng giữa ranh giới cơ khí của thân vệ tinh và thanh ray trượt tiêu chuẩn.

### 2. Hướng dẫn Tương tác Không gian 3D trên Web LMS
Trình mô phỏng 3D của CubeSat-LMS được xây dựng trên nền tảng WebGL mượt mà, cho phép người học thao tác không gian đa chiều trực tiếp trên trình duyệt mà không cần cài đặt phần mềm ngoài:

```mermaid
flowchart TD
    subgraph UI_Controls ["🖱️ THAO TÁC ĐIỀU KHIỂN KHÔNG GIAN 3D"]
        direction TB
        Rotate["🔄 XOAY GÓC NHÌN (ORBIT)
Nhấp & Giữ CHUỘT TRÁI, sau đó rê chuột
để quay 360 độ quanh tâm vệ tinh."]
        
        Pan["↔️ TRƯỢT TỊNH TIẾN (PAN)
Nhấp & Giữ CHUỘT PHẢI (hoặc Shift + Chuột Trái)
để tịnh tiến khung nhìn sang trái, phải, lên, xuống."]
        
        Zoom["🔍 PHÓNG TO / THU NHỎ (ZOOM)
Cuộn CON LĂN CHUỘT (Scroll Wheel)
để phóng to sát linh kiện hoặc thu nhỏ toàn cảnh."]
        
        Click["👆 TRA CỨU LINH KIỆN (COMPONENT VIEWER)
Nhấp CHUỘT TRÁI trực tiếp lên một linh kiện 3D
để mở Bảng Thông số Kỹ thuật (Spec Card) chi tiết."]
    end
```

### 3. Quy trình Thực hiện Bài Thực hành Từng bước
1. **Bước 1 - Khởi động Trình duyệt & Mở Trình Mô phỏng 3D:**
   - Truy cập vào hệ thống CubeSat-LMS, đăng nhập tài khoản học viên và mở **Lab 0: Tổng quan Kỹ thuật Không gian**.
   - Chờ mô hình 3D của vệ tinh CubeSat 1U tải hoàn tất vào bộ nhớ đồ họa WebGL.
2. **Bước 2 - Khám phá Khung sườn Cơ khí & Thanh ray Trượt:**
   - Sử dụng thao tác xoay (Orbit) quan sát 4 thanh ray nhôm anodize cứng ở 4 góc dọc theo trục Z.
   - Quan sát công tắc hành trình phóng (Deployment Switch) bố trí ở mặt đáy của thanh ray.
   - Xác định vùng cấm nhô linh kiện ($6.5\text{ mm}$) so với mặt phẳng các thanh ray.
3. **Bước 3 - Khám phá Tầng Bo mạch Đáy (Tầng 1: Nguồn & Máy tính Trung tâm):**
   - Phóng to vào tầng bo mạch dưới cùng.
   - Nhấp chuột vào vi xử lý **ESP32-WROOM-32** để xem bảng thông số (2 nhân 240 MHz, 520 KB SRAM, 4 MB Flash).
   - Nhấp chuột vào mạch sạc pin **TP4056**, pack pin sạc **Li-Po 3.7V** và chip đo dung lượng pin **MAX17048**.
4. **Bước 4 - Khám phá Tầng Bo mạch Giữa (Tầng 2: Cảm biến & Viễn thông LoRa):**
   - Nhấp chọn cảm biến quán tính 6 trục **MPU6500** và cảm biến từ kế **QMC5883L**.
   - Nhấp chọn cảm biến môi trường áp suất khí quyển và nhiệt độ **BMP280**.
   - Nhấp chọn module truyền thông vô tuyến dải rộng **LoRa 433 MHz** và module định vị **GNSS L76X**.
5. **Bước 5 - Khám phá Tầng Đỉnh & Tải trọng Viễn thám (Tầng 3: Camera & Anten):**
   - Quan sát cụm camera viễn thám **OV2640 2 Megapixel** hướng qua lỗ khoét tròn trên tấm nắp đỉnh nhôm.
   - Quan sát cơ cấu cuộn lá thép anten thước cuộn $433\text{ MHz}$ và dây cước giữ nhiệt bung anten (Burn-wire).
6. **Bước 6 - Báo cáo Kết quả & Đối chiếu Bảng Thông số:**
   - Điền đầy đủ các thông số điện áp hoạt động, dòng điện tiêu thụ và giao thức truyền thông của từng linh kiện vào Báo cáo Thực hành Lab 0 theo mẫu quy định.
