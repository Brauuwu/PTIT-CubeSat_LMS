# CubeSat-LMS: Backend (Server)

Đây là máy chủ xử lý dữ liệu và cung cấp API cho hệ thống PTIT STEM CubeSat.

## 🌟 Tính năng
- **Cung cấp API**: Xử lý các request từ Frontend.
- **Trình biên dịch Đám mây (Cloud Compiler - Đang phát triển)**: Tiếp nhận mã nguồn C++ (từ CodeMirror hoặc Blockly) của người dùng, biên dịch thành file `.bin` (Firmware) trả về cho Frontend để nạp xuống ESP32.
- **Lưu trữ dữ liệu**: Quản lý tiến trình học tập, trạng thái các bài thực hành và cấu hình Dashboard của người dùng.

## 🛠 Ngăn xếp Công nghệ
- **Node.js**
- **Express.js**: Framework tạo API nhẹ, nhanh chóng.
- **CORS / Dotenv**: Quản lý biến môi trường và chính sách bảo mật tên miền.

## 🚀 Khởi chạy Môi trường Phát triển (Dev)

1. Cài đặt các gói thư viện:
```bash
npm install
```

2. Chạy Node Server:
```bash
npm run dev
```

Server sẽ lắng nghe tại `http://localhost:3001`. (Dùng `nodemon` hoặc tương đương nếu cần tự động tải lại code).

## 📡 Danh sách API (Dự kiến)
- `POST /api/compile`: Gửi mã nguồn C/C++, nhận lại firmware `.bin`.
- `GET /api/progress`: Lấy trạng thái lưu trữ các bài Lab.
- `POST /api/progress`: Cập nhật tiến độ hoàn thành.
