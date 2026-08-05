# PTIT STEM CubeSat - Hệ thống Quản lý Học tập

Chào mừng bạn đến với kho lưu trữ mã nguồn của **CubeSat-LMS**! Đây là hệ thống bảng điều khiển trực quan (Dashboard) và nền tảng học tập (LMS) được thiết kế riêng cho dự án vệ tinh PTIT STEM CubeSat.

Hệ thống cho phép người dùng:

1. **Học tập trực quan**: Khám phá kiến trúc các phân hệ của một vệ tinh thực tế (OBC, EPS, IMU, GPS, LoRa, v.v.) qua giao diện 3D và tài liệu tương tác (Mô phỏng Lab 0).
2. **Lập trình kéo thả (Blockly)**: Tạo thuật toán điều khiển vệ tinh không cần viết mã.
3. **IDE Tích hợp**: Viết code, biên dịch (Cloud Compiler) và nạp thẳng (Flash) xuống vệ tinh qua Web Serial API ngay trên trình duyệt.
4. **Dashboard Telemetry**: Giám sát dữ liệu viễn thông thời gian thực từ vệ tinh.

## 🏗 Cấu trúc Dự án

Dự án được chia thành 2 phần chính:

- `/client`: Frontend được xây dựng bằng **React.js + Vite** (Giao diện người dùng, Khối kéo thả, Code Editor, Bảng điều khiển).
- `/server`: Backend được xây dựng bằng **Node.js + Express** (Xử lý API, Lưu trữ tiến trình, Trình biên dịch đám mây).

*Xem thêm chi tiết tại `client/README.md` và `server/README.md`.*

## 🚀 Hướng dẫn Cài đặt & Khởi chạy

### Cách 1: Sử dụng Docker (Khuyên dùng)

Hệ thống đã được đóng gói sẵn với Docker Compose. Bạn chỉ cần cài đặt Docker Desktop và chạy lệnh sau ở thư mục gốc:

```bash
docker compose up -d --build
```

- Frontend (Client) sẽ chạy tại: `http://liocalhost:5173`
- Backend (Server) sẽ chạy tại: g`http://localhost:3001`

*(Để dừng hệ thống, chạy lệnh `docker compose down`)*

### Cách 2: Chạy thủ công bằng NPM

Nếu bạn muốn phát triển và chỉnh sửa code trực tiếp:

**1. Khởi động Backend:**

```bash
cd server
npm install
npm run dev
```

**2. Khởi động Frontend:** Mở một terminal mới:

```bash
cd client
npm install
npm run dev
```

## 🛠 Công nghệ Sử dụng

- **Frontend**: React 18, Vite, React Router, CodeMirror (IDE), Blockly (Kéo thả).
- **Backend**: Node.js, Express.
- **Triển khai**: Docker, Docker Compose.
- **Thiết kế**: Giao diện Glassmorphism / Sci-fi Space / Dark & Light Mode.
