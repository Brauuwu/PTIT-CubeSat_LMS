// Tiêu đề hiển thị của Lab trong sidebar (chỉ ảnh hưởng giao diện, không đổi dữ liệu giáo trình).
// Dấu "/" là chỗ xuống dòng. Lab không có trong bảng dùng tên gốc (bỏ phần trong ngoặc).
const DISPLAY_TITLES = {
  1: 'Máy tính/trên bo mạch',
  7: 'Tích hợp hệ thống /và nhiệm vụ',
  8: 'Capstone/Mini-project',
};

export function labTitleLines(lab) {
  const text = DISPLAY_TITLES[lab.id] ?? String(lab.title || '').split('(')[0];
  return text.split('/').map(line => line.trim()).filter(Boolean);
}
