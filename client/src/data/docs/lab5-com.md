# Lab 5: Phân hệ Truyền thông (COM) & Trạm Mặt Đất

---

## 📖 Doc 5.1: Cơ Sở Lý Thuyết Truyền Thông Vô Tuyến Không Gian & Cân Bằng Tuyến

### 1. Vai trò của Phân hệ Truyền thông (COM - Communication Subsystem)
Phân hệ Truyền thông được xem như "Giọng nói và Đôi tai" của CubeSat. Cho dù các phân hệ khác hoạt động hoàn hảo và thu thập được hàng nghìn bức ảnh giá trị, nếu phân hệ COM thất bại, vệ tinh sẽ vĩnh viễn trở thành một khối rác vũ trụ câm lặng. Phân hệ COM đảm nhận:
- **Tuyến truyền Đường xuống (Downlink):** Định kỳ phát sóng các gói tin tín hiệu định vị (Beacon) thông báo trạng thái sinh tồn của vệ tinh ($V_\text{bat}$, SOC, nhiệt độ) và truyền dữ liệu khoa học, hình ảnh về mặt đất.
- **Tuyến truyền Đường lên (Uplink):** Lắng nghe các mệnh lệnh viễn lệnh (Telecommands) từ Trạm mặt đất để điều khiển vệ tinh, nạp cấu hình mới hoặc kích hoạt chế độ an toàn.

### 2. Đặc tính Lan truyền Sóng Điện từ Băng tần UHF ($433\text{ MHz}$)
Băng tần sóng cực ngắn UHF (Ultra High Frequency, $300\text{ MHz} - 3\text{ GHz}$) là băng tần kinh điển cho các vệ tinh CubeSat giáo dục và nghiên cứu:
- **Khả năng Xuyên qua Tầng Điện ly (Ionospheric Penetration):** Khác với sóng ngắn HF bị phản xạ ngược lại Trái Đất, sóng vô tuyến tần số $433\text{ MHz}$ có khả năng xuyên thủng tầng điện ly của khí quyển để đi vào không gian sâu với độ suy hao tối thiểu.
- **Kích thước Ăng-ten Hợp lý:** Bước sóng $\lambda$ ở tần số $433\text{ MHz}$ là:
  $$\lambda = \frac{c}{f} = \frac{3 \times 10^8\text{ m/s}}{433 \times 10^6\text{ Hz}} \approx 0.693\text{ m} = 69.3\text{ cm}$$
  Một ăng-ten đơn cực một phần tư bước sóng ($\lambda/4$) chỉ có chiều dài xấp xỉ $17.3\text{ cm}$, rất lý tưởng để cuộn gọn gàng bên trong khung 1U trước khi bung mở ngoài không gian.

### 3. Phương trình Suy hao Truyền sóng trong Không gian Tự do (Friis FSPL)
Khi sóng điện từ lan truyền từ ăng-ten phát hình cầu ra không gian vô tận, mật độ công suất sóng bị suy giảm theo bình phương khoảng cách. Công thức suy hao truyền sóng trong không gian tự do (**Free-Space Path Loss - FSPL**) của Harald T. Friis:
$$\text{FSPL} = \left(\frac{4\pi d}{\lambda}ight)^2 = \left(\frac{4\pi d f}{c}ight)^2$$
Chuyển đổi sang đơn vị logarit Decibel (dB):
$$\text{FSPL (dB)} = 20 \log_{10}(d\text{ [km]}) + 20 \log_{10}(f\text{ [MHz]}) + 32.44$$
- **Tính toán Thực tế cho CubeSat Quỹ đạo LEO:**
  - Tần số phát sóng: $f = 433\text{ MHz}$.
  - Khoảng cách đường truyền xiên khi vệ tinh vừa mọc ở góc tà thấp ($10^\circ$ trên đường chân trời): $d \approx 800\text{ km}$.
  $$\text{FSPL (dB)} = 20 \log_{10}(800) + 20 \log_{10}(433) + 32.44 \approx 58.06 + 52.73 + 32.44 \approx \mathbf{143.23\text{ dB}}$$
- Nhận xét: Sóng vô tuyến bị suy yếu tới $143\text{ dB}$ (tương đương năng lượng bị suy giảm hơn $10^{14}$ lần) trên hành trình xuyên qua bầu khí quyển xuống mặt đất!

```mermaid
flowchart LR
    TX["Máy phát Vệ tinh
Công suất P_tx = +20 dBm (100mW)"] -->|Antenna Gain G_tx = +2 dBi| SPACE["Không gian Tự do LEO
Suy hao FSPL = -143.2 dB
Khí quyển L_atm = -1.5 dB"]
    SPACE -->|Antenna Gain G_rx = +12 dBi (Yagi)| RX["Máy thu Trạm Mặt đất
Độ nhạy S_rx = -140 dBm"]
    RX --> MARGIN["Độ Dự trữ Tuyến Link Margin >= +6 dB
(Kênh truyền Ổn định)"]
```

### 4. Phương trình Cân Bằng Tuyến Truyền Thông (Link Budget)
Bảng cân đối tuyến truyền thông tổng hợp toàn bộ các nguồn tăng ích và suy hao trên toàn bộ chuỗi thu phát:
$$P_\text{rx (dBm)} = P_\text{tx} + G_\text{tx} - L_\text{tx} - \text{FSPL} - L_\text{atm} + G_\text{rx} - L_\text{rx}$$
Trong đó:
- $P_\text{tx}$: Công suất máy phát vệ tinh ($+20\text{ dBm} = 100\text{ mW}$).
- $G_\text{tx}$: Độ tăng ích ăng-ten phát trên vệ tinh ($+2.15\text{ dBi}$ cho ăng-ten lưỡng cực Dipole).
- $L_\text{tx}, L_\text{rx}$: Tổn hao trên cáp nối và đầu nối Connector ($\approx 1.0\text{ dB}$).
- $\text{FSPL}$: Suy hao không gian tự do ($\approx 143.2\text{ dB}$).
- $L_\text{atm}$: Tổn hao hấp thụ do khí quyển và tầng điện ly ($\approx 1.5\text{ dB}$).
- $G_\text{rx}$: Độ tăng ích ăng-ten thu trạm mặt đất (ví dụ ăng-ten định hướng Yagi 9 phần tử đạt $+12.0\text{ dBi}$).
- **Công suất Thu Dự kiến ($P_\text{rx}$):**
  $$P_\text{rx} = 20 + 2.15 - 1.0 - 143.2 - 1.5 + 12.0 - 1.0 \approx \mathbf{-112.55\text{ dBm}}$$
- **Độ Dự trữ Tuyến (Link Margin):**
  Nếu bộ thu LoRa mặt đất có độ nhạy thu đạt $S_\text{rx} = -140\text{ dBm}$, thì độ dự trữ tuyến truyền thông là:
  $$\text{Margin} = P_\text{rx} - S_\text{rx} = (-112.55\text{ dBm}) - (-140\text{ dBm}) = \mathbf{+27.45\text{ dB}}$$
  Quy chuẩn không gian yêu cầu độ dự trữ tuyến truyền thông tối thiểu phải $\ge +6\text{ dB}$. Với mức dự trữ $+27.45\text{ dB}$, tuyến truyền tin của PTITCube hoạt động cực kỳ tin cậy ngay cả khi trời mưa bão.

### 5. Hiệu ứng Dịch Tần Doppler trên Quỹ đạo LEO
Do vệ tinh bay với vận tốc quỹ đạo cực lớn ($v \approx 7.6\text{ km/s}$), tần số sóng vô tuyến thu được tại trạm mặt đất bị dịch chuyển theo hiệu ứng Doppler:
$$f_\text{rx} = f_0 \left(1 + \frac{v_\text{los}}{c}ight)$$
Trong đó: $v_\text{los}$ là vận tốc dọc theo đường ngắm (Line-of-Sight Velocity).
- Khi vệ tinh vừa mọc ở phía chân trời và bay lại gần trạm: $v_\text{los} > 0$, tần số thu được dịch lên cao nhất ($+\Delta f$).
- Khi vệ tinh bay ngang qua đỉnh đầu (CPA - Closest Point of Approach): $v_\text{los} = 0$, tần số thu được đúng bằng tần số danh định $f_0$.
- Khi vệ tinh bay ra xa về phía chân trời lặn: $v_\text{los} < 0$, tần số thu được dịch xuống thấp nhất ($-\Delta f$).
- Ở băng tần $433\text{ MHz}$, độ lệch tần Doppler cực đại có thể lên tới:
  $$\Delta f_\text{max} \approx 433\text{ MHz} \times \frac{7.6\text{ km/s}}{300.000\text{ km/s}} \approx \pm \mathbf{10.97\text{ kHz}}$$
  Trạm mặt đất bắt buộc phải có thuật toán điều chỉnh tần số thu tự động (Doppler Tracking) bám theo độ dịch chuyển này để không bị mất tín hiệu.

---

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 5.1)
1. **Theo phương trình suy hao truyền sóng trong không gian tự do của Friis (FSPL), khi khoảng cách truyền tăng gấp đôi thì độ suy hao tín hiệu sẽ:**
   - A. Giảm đi một nửa công suất
   - B. Không thay đổi nếu anten chuẩn
   - C. Tăng thêm khoảng 6 dB
   - D. Giảm đi chính xác 3 dB
   - *Đáp án:* **C**
   - *Giải thích:* Công thức $FSPL \propto d^2$, do đó khi khoảng cách $d$ tăng gấp đôi ($2d$), độ suy hao công suất tăng lên $20 \log_{10}(2) \approx 6\text{ dB}$.

2. **Hiện tượng dịch tần Doppler xảy ra đối với tín hiệu vô tuyến của CubeSat quỹ đạo LEO có đặc điểm gì khi vệ tinh bay qua trạm mặt đất?**
   - A. Tần số thu cao hơn khi vệ tinh tiến lại gần, và thấp hơn khi bay ra xa
   - B. Tần số thu được luôn bằng chính xác tần số phát
   - C. Tần số thu luôn giảm dần về 0 khi vệ tinh đạt góc ngẩng cực đại
   - D. Tần số phát của vệ tinh tự động thay đổi theo nhiệt độ vỏ
   - *Đáp án:* **A**
   - *Giải thích:* Do vận tốc bay quỹ đạo LEO rất lớn (~7.7 km/s), hiệu ứng Doppler làm tần số sóng thu được tại trạm mặt đất bị dịch chuyển cao hơn khi tiếp cận và dịch thấp hơn khi rời xa.

---

## 📖 Doc 5.2: Giao Thức Đóng Gói Bản Tin, Kiểm Tra CRC-16 & Tổng Quan Chuẩn CCSDS

### 1. Cấu trúc Khung Bản Tin Viễn Trắc (Telemetry Frame Structure)
Để đảm bảo dữ liệu truyền qua không gian không bị xáo trộn, luồng byte được đóng gói thành các cấu trúc khung truyền tin tiêu chuẩn:

| Trường Dữ liệu | Độ dài | Chức năng & Ý nghĩa Kỹ thuật |
| :--- | :--- | :--- |
| **Preamble** | 4 Bytes | Chuỗi byte xen kẽ `0xAA 0xAA 0xAA 0xAA` giúp bộ thu khóa mạch đồng bộ xung bit |
| **Sync Word** | 2 Bytes | Mã đồng bộ khung cố định `0xD3 0x91` đánh dấu điểm bắt đầu gói tin hợp lệ |
| **Packet Length** | 1 Byte | Độ dài tổng số byte của phần thân gói tin Payload ($N$) |
| **Satellite ID** | 1 Byte | Mã định danh duy nhất của vệ tinh trên quỹ đạo (ví dụ `0x42`) |
| **Packet Sequence**| 2 Bytes | Số thứ tự gói tin tự tăng ($0 - 65535$), giúp trạm mặt đất phát hiện gói tin bị rơi rụng |
| **Telemetry Data** | $N - 5$ Bytes | Khối dữ liệu cảm biến: $V_\text{bat}$, SOC, Nhiệt độ, Áp suất, Gia tốc, Tọa độ GPS |
| **Checksum CRC-16**| 2 Bytes | Mã kiểm tra lỗi chu kỳ 16-bit bảo vệ tính toàn vẹn dữ liệu |

### 2. Thuật toán Kiểm tra Lỗi Chu kỳ CRC-16-CCITT
Trong không gian, nhiễu nền vũ trụ có thể làm biến dạng ngẫu nhiên một vài bit dữ liệu. Phương pháp tính tổng cộng (Checksum đơn giản) rất dễ bị lọt lưới khi hai lỗi bit triệt tiêu nhau.
- **Thuật toán CRC-16-CCITT:** Sử dụng đa thức sinh chuẩn quốc tế:
  $$G(x) = x^{16} + x^{12} + x^5 + 1 \quad (\text{Mã Hex: } \mathbf{0x1021})$$
  Giá trị khởi tạo thanh ghi: `0xFFFF`.
- Khi trạm mặt đất nhận được gói tin, nó thực hiện tính toán lại mã CRC trên toàn bộ chuỗi byte nhận được. Nếu mã CRC tính toán trùng khớp hoàn toàn với 2 byte CRC đính kèm ở cuối gói tin, gói tin được xác nhận là vẹn toàn $100\%$. Nếu sai khác dù chỉ một bit, gói tin bị loại bỏ ngay lập tức.

### 3. Giao thức Kiểm soát Luồng & Phân mảnh Gói tin
- **Cơ chế Dừng và Chờ (Stop-and-Wait ARQ - Automatic Repeat reQuest):**
  - Trạm mặt đất gửi một lệnh viễn lệnh $\to$ Vệ tinh tiếp nhận, kiểm tra CRC $\to$ Nếu hợp lệ, vệ tinh phát bản tin phản hồi `ACK` (Acknowledge) $\to$ Trạm mặt đất nhận `ACK` mới tiếp tục gửi lệnh tiếp theo. Nếu hết thời gian chờ (Time-out) mà chưa nhận được `ACK`, trạm phát lại gói tin tối đa 3 lần.
- **Kỹ thuật Phân mảnh Tệp ảnh (Packet Fragmentation):**
  - Một bức ảnh JPEG có dung lượng $30\text{ KB}$ không thể phát trong một gói tin duy nhất vì xác suất xảy ra lỗi trên gói tin lớn là rất cao.
  - Tệp ảnh được cắt nhỏ thành hàng trăm mảnh nhỏ (**Chunks**), mỗi mảnh có kích thước $64\text{ bytes}$.
  - Mỗi mảnh được gắn thêm tiêu đề: `[Image_ID, Chunk_Index, Total_Chunks]`. Trạm mặt đất đón nhận từng mảnh và ráp lại thành bức ảnh hoàn chỉnh. Nếu thiếu mảnh nào, trạm chỉ cần yêu cầu phát lại đúng mảnh đó.

### 4. Tổng quan Chuẩn Hàng không Vũ trụ CCSDS & Giao thức Nghiệp dư AX.25
- **AX.25:** Giao thức truyền dữ liệu gói kinh điển của giới vô tuyến nghiệp dư (Amateur Radio), sử dụng trường địa chỉ gọi hiệu (Callsign) định danh trạm phát và trạm thu. Được áp dụng rộng rãi trên các CubeSat thế hệ đầu.
- **CCSDS (Consultative Committee for Space Data Systems):** Tiêu chuẩn truyền thông dữ liệu không gian tối cao được liên minh NASA, ESA, JAXA ban hành. Quy định chặt chẽ các tầng giao thức từ lớp vật lý (RF & Modulation), lớp liên kết truyền dữ liệu (AOS Space Data Link Protocol) cho tới mã hóa sửa lỗi tiến tiên tiến (LDPC, Turbo Codes).

---

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 5.2)
1. **Mã kiểm tra lỗi dư thừa chu kỳ CRC-16-CCITT được đính kèm vào cuối gói tin viễn trắc nhằm mục đích kỹ thuật gì?**
   - A. Mã hóa bảo mật chống nghe lén thông tin
   - B. Định vị tọa độ của vệ tinh trong không gian
   - C. Tự động nén kích thước gói dữ liệu xuống một nửa
   - D. Phát hiện các bit dữ liệu bị sai lệch do nhiễu đường truyền không dây
   - *Đáp án:* **D**
   - *Giải thích:* CRC-16 tính toán mã kiểm tra từ toàn bộ nội dung gói tin; nếu có bất kỳ bit nào bị lật do nhiễu vô tuyến, giá trị CRC tính lại tại bên nhận sẽ không khớp giúp loại bỏ gói tin hỏng.

2. **Cấu trúc một khung tin viễn thông không gian tiêu chuẩn (CCSDS Frame) bao gồm 3 phần chính nào?**
   - A. Bootloader, Firmware, Memory Dump
   - B. Header (Tiêu đề), Payload (Dữ liệu tải), Trailer (Mã kiểm tra)
   - C. IP Address, Port Number, Gateway
   - D. Preamble, Sync Word, Frequency
   - *Đáp án:* **B**
   - *Giải thích:* Khung tin chuẩn luôn có Header chứa định danh vệ tinh và số thứ tự gói, Payload chứa số đo cảm biến, và Trailer chứa mã kiểm tra lỗi CRC.

---

## 📖 Doc 5.3: Module Truyền Thông LoRa Ebyte E32 & Kiến Trúc Trạm Mặt Đất

### 1. Công nghệ Trải phổ LoRa (Long Range Chirp Spread Spectrum - CSS)
Module **Ebyte E32-433T20D** sử dụng chip thu phát bán dẫn SX1278 của hãng Semtech ứng dụng kỹ thuật điều chế trải phổ CSS:
- Thay vì truyền tín hiệu trên một tần số cố định, năng lượng sóng được quét biến thiên liên tục theo tần số (xung Chirp).
- Khả năng giải mã tín hiệu nằm sâu dưới mức nhiễu nền (dưới Noise Floor tới $-20\text{ dB}$), mang lại độ nhạy thu vô song (lên tới $-148\text{ dBm}$) với công suất phát chỉ $100\text{ mW}$ ($+20\text{ dBm}$).
- **Các Tham số Cấu hình:**
  - **Hệ số Trải phổ (Spreading Factor - SF7 đến SF12):** SF càng lớn, tầm xa càng tăng nhưng tốc độ truyền dữ liệu (Data Rate) càng giảm.
  - **Băng thông (Bandwidth - BW):** Thường chọn $125\text{ kHz}$ cho kênh UHF.

### 2. Sơ đồ Chân & Các Chế độ Hoạt động của Module Ebyte E32
Module E32 giao tiếp với vi điều khiển OBC thông qua cổng UART chuẩn và hai chân điều khiển chế độ `M0`, `M1`:

| Chế độ Hoạt động | Chân M0 | Chân M1 | Chức năng Kỹ thuật |
| :--- | :--- | :--- | :--- |
| **Mode 0 (Normal)** | `LOW` | `LOW` | Kênh truyền nhận dữ liệu trong suốt bình thường qua cổng UART |
| **Mode 1 (Wake-up)**| `HIGH` | `LOW` | Tự động chèn thêm mã Preamble dài để đánh thức máy thu đối phương |
| **Mode 2 (Power Save)**| `LOW`| `HIGH`| Chế độ tiết kiệm điện năng, chỉ thức dậy khi phát hiện sóng đánh thức |
| **Mode 3 (Sleep/Config)**| `HIGH`| `HIGH`| Chế độ ngủ sâu; dùng để đọc/ghi thanh ghi cấu hình tần số và tốc độ baud |

- **Chân Trạng thái `AUX` (Auxiliary Indicator):**
  - Chân ngõ ra báo trạng thái bận của module:
    - Mức `LOW`: Module đang bận truyền dữ liệu ra ăng-ten hoặc bộ đệm FIFO nội bộ đang nạp dữ liệu.
    - Mức `HIGH`: Module rảnh rỗi, sẵn sàng nhận dữ liệu mới từ vi điều khiển.
  - Phần mềm bay bắt buộc phải kiểm tra `digitalRead(AUX_PIN) == HIGH` trước khi gửi byte tiếp theo qua UART.

### 3. Kiến trúc Trạm Mặt Đất (Ground Station Architecture)
Một trạm mặt đất thu nhận tín hiệu CubeSat tiêu chuẩn bao gồm:
1. **Ăng-ten Định hướng Thu sóng:** Ăng-ten Yagi-Uda hoặc ăng-ten phân cực tròn xoắn ốc (Helical Antenna) băng tần UHF có độ tăng ích cao ($10 - 14\text{ dBi}$).
2. **Khối Thu Sóng Vô tuyến Định nghĩa bằng Phần mềm (SDR - Software Defined Radio):** Các thiết bị SDR băng rộng (như RTL-SDR, HackRF, LimeSDR) kết nối máy tính qua cổng USB, số hóa toàn bộ phổ tần vô tuyến.
3. **Biểu đồ Thác Nước Phổ Tần (Waterfall Display):** Hiển thị cường độ tín hiệu theo tần số và thời gian, cho phép kỹ sư quan sát trực quan đường vệt tín hiệu của vệ tinh và độ cong dịch tần Doppler khi vệ tinh bay qua.
4. **Cơ cấu Chân đế Xoay 2 Trục (Azimuth / Elevation Rotator):** Tự động điều khiển hướng ăng-ten ngửa lên bầu trời và quay bám sát theo vị trí vệ tinh được tính toán từ tệp dữ liệu quỹ đạo hai dòng **TLE (Two-Line Element)** nhờ phần mềm Orbitron hoặc Gpredict.

---

### ❓ Câu Hỏi Củng Cố Kiến Thức (Doc 5.3)
1. **Chân tín hiệu AUX trên module viễn thông LoRa Ebyte E32 có ý nghĩa chỉ thị trạng thái nào?**
   - A. Chỉ thị trạng thái bận/rảnh: mức LOW là đang bận xử lý/truyền nhận, HIGH là rảnh
   - B. Cấp nguồn phụ trợ khi pin yếu
   - C. Chuyển đổi giữa chế độ phát và chế độ ngủ
   - D. Báo động nhiệt độ module vượt ngưỡng
   - *Đáp án:* **A**
   - *Giải thích:* Chân AUX ở mức LOW báo hiệu module đang truyền sóng hoặc bộ đệm đang bận; chương trình cần đợi AUX lên mức HIGH trước khi ghi tiếp byte dữ liệu mới vào UART.

2. **Để module LoRa E32 hoạt động ở chế độ truyền nhận vô tuyến bình thường (Normal Mode), hai chân M0 và M1 cần được cấu hình mức logic nào?**
   - A. M0 = 1, M1 = 1
   - B. M0 = 1, M1 = 0
   - C. M0 = 0, M1 = 0
   - D. M0 = 0, M1 = 1
   - *Đáp án:* **C**
   - *Giải thích:* Khi M0=0 và M1=0, module E32 hoạt động ở Normal Mode cho phép truyền nhận dữ liệu thông suốt qua cổng nối tiếp UART.

---

## 💻 Hướng Dẫn Thực Hành: Lập Trình Truyền Nhận Viễn Trắc & Lệnh Điều Hành

### 1. Đóng Gói và Phát Bản Tin Viễn Trắc Telemetry qua C++
```cpp
#include <HardwareSerial.h>

HardwareSerial LoRaSerial(1); // Sử dụng UART1 cho LoRa E32

struct __attribute__((packed)) TelemetryPacket {
    uint8_t syncWord[2];     // 0xD3, 0x91
    uint8_t packetLen;       // Kích thước gói
    uint8_t satId;           // 0x01
    uint16_t seqNum;         // Số thứ tự gói
    float vbat;              // Điện áp pin
    float temp;              // Nhiệt độ
    uint16_t crc16;          // Mã kiểm tra lỗi
};

uint16_t calcCRC16(const uint8_t *data, uint16_t len) {
    uint16_t crc = 0xFFFF;
    for (uint16_t i = 0; i < len; i++) {
        crc ^= ((uint16_t)data[i] << 8);
        for (uint8_t j = 0; j < 8; j++) {
            if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
            else crc <<= 1;
        }
    }
    return crc;
}

void sendBeacon() {
    static uint16_t count = 0;
    TelemetryPacket pkt;
    pkt.syncWord[0] = 0xD3;
    pkt.syncWord[1] = 0x91;
    pkt.packetLen = sizeof(TelemetryPacket);
    pkt.satId = 0x01;
    pkt.seqNum = count++;
    pkt.vbat = 3.92f;
    pkt.temp = 24.5f;
    pkt.crc16 = calcCRC16((uint8_t*)&pkt, sizeof(TelemetryPacket) - 2);

    LoRaSerial.write((uint8_t*)&pkt, sizeof(TelemetryPacket));
}
```

### 2. Danh mục Bài Thực hành Lab 5
- `Lab5-01a_Send_Telemetry_UART`: Cấu hình thanh ghi hoạt động cho module LoRa E32 ở Mode 3 và phát luồng byte qua UART.
- `Lab5-01b_Send_Telemetry_Library`: Đóng gói cấu trúc bản tin Telemetry chuẩn kèm mã tính CRC-16 tự động.
- `Lab5-02a_Receive_Command_UART`: Lắng nghe chuỗi dữ liệu thô từ cổng không gian và kiểm tra chuỗi đồng bộ Sync Word.
- `Lab5-02b_Receive_Command_Library`: Giải mã mệnh lệnh điều khiển từ mặt đất và kích hoạt chân chấp hành tương ứng.
- `Lab5-03_Satellite_Comm_System`: Xây dựng kịch bản truyền thông hai chiều hoàn chỉnh giữa mô hình vệ tinh và mô hình trạm mặt đất.

### ❓ Câu Hỏi Đánh Giá Kỹ Năng Thực Hành (Lab 5)
1. **Thiết bị thu sóng vô tuyến định nghĩa bằng phần mềm (SDR) tại trạm mặt đất có ưu điểm vượt trội nào?**
   - A. Tự động nạp code từ xa cho vệ tinh
   - B. Xử lý giải điều chế đa băng tần và hiển thị phổ tín hiệu (Waterfall) trực quan
   - C. Không cần kết nối anten thu vẫn bắt được sóng
   - D. Phát sóng công suất hàng nghìn Watt lên quỹ đạo
   - *Đáp án:* **B**
   - *Giải thích:* SDR số hóa trực tiếp tín hiệu RF và sử dụng phần mềm để giải điều chế, cho phép quan sát phổ tần, bù dịch tần Doppler và giải mã nhiều giao thức linh hoạt.

2. **Cơ chế Stop-and-Wait ARQ trong truyền nhận viễn lệnh mặt đất hoạt động theo chu trình nào?**
   - A. Gửi liên tục không cần quan tâm bên nhận có nhận được hay không
   - B. Tự động mã hóa lệnh thành dạng sóng analog
   - C. Chỉ nhận lệnh từ vệ tinh chứ trạm đất không được gửi lệnh
   - D. Gửi một gói lệnh, chờ gói tin phản hồi (ACK) trước khi gửi tiếp lệnh mới
   - *Đáp án:* **D**
   - *Giải thích:* ARQ (Automatic Repeat reQuest) đảm bảo gói tin lệnh được thực thi thành công: bên phát gửi 1 gói và chỉ phát tiếp khi nhận được xác nhận ACK, nếu timeout sẽ tự động phát lại.
