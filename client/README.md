# CubeSat-LMS: Frontend (Client)

Đây là giao diện người dùng chính của hệ thống PTIT STEM CubeSat.

## 🌟 Tính năng
- **Giao diện đa nền tảng**: Thiết kế theo phong cách Glassmorphism / Viễn tưởng hiện đại.
- **Điều hướng mượt mà**: Chuyển đổi giữa các Bài thực hành (Lab 0 -> Lab 8).
- **Mục lục tương tác**: Cấu trúc sách trực tuyến giúp xem thông số linh kiện một cách khoa học.
- **Tích hợp phần cứng**: Kết nối trực tiếp với vệ tinh thực qua **Web Serial API**.
- **Dashboard Builder**: Cho phép người dùng kéo thả, thay đổi kích thước các tiện ích (Widget) theo lưới để tự thiết kế bảng điều khiển cá nhân.

## 🛠 Ngăn xếp Công nghệ
- **React.js (v18)**
- **Vite**: Build tool siêu tốc.
- **CSS3 / CSS Modules**: Tùy chỉnh toàn bộ giao diện, không phụ thuộc framework nặng.

## 🚀 Khởi chạy Môi trường Phát triển (Dev)

1. Cài đặt các gói thư viện:
```bash
npm install
```

2. Chạy Vite Server:
```bash
npm run dev
```

Server sẽ lắng nghe tại `http://localhost:5173`. Các thay đổi trong mã nguồn sẽ được tự động cập nhật lên trình duyệt (HMR).

## 🌍 Cấu hình API

Trong môi trường phát triển (chạy `npm run dev`), Vite tự động **proxy** mọi request bắt đầu bằng `/api` sang backend tại `http://localhost:3001`.
Cấu hình này nằm trong file `vite.config.js`.

Nếu chạy bằng Docker, biến môi trường `API_URL` sẽ được truyền vào để định tuyến đến container của server.
