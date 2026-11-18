// Lab3-02 shell replies, read in Vietnamese. Pure so the decoder tests can cover it.
const ERRORS = {
  'ERR: SD not ready': 'Thẻ SD chưa sẵn sàng',
  'ERR: Directory not found': 'Không tìm thấy thư mục',
  'ERR: Unknown command': 'Lệnh không được hỗ trợ',
};

/** Vietnamese reading of the shell reply. The raw reply is always shown next to it. */
export function describeShellResult(event) {
  const reply = event.reply ?? event.text ?? '';
  if (event.phase === 'error') {
    if (ERRORS[reply]) return ERRORS[reply];
    if (reply.startsWith('ERR: Not a directory')) return 'Đường dẫn không phải thư mục';
    if (/^ERR: \w+ <path>$/.test(reply)) return 'Thiếu tên file / thư mục';
    return 'Thiết bị báo lỗi, lệnh không thực hiện được';
  }
  const path = reply.replace(/^OK:\s*\S+\s*/, '') || '/';
  switch (event.verb) {
    case 'pwd': return `Thư mục hiện tại: ${reply}`;
    case 'cd': return `Đã chuyển tới ${path}`;
    case 'ls': return `Đã liệt kê ${path}${event.entries != null ? ` · ${event.entries} mục` : ''}`;
    case 'mkdir': return `Đã tạo thư mục ${path}`;
    case 'rmdir': return `Đã xóa thư mục ${path}`;
    case 'rm': return `Đã xóa ${path}`;
    case 'touch': return `Đã tạo file ${path} (giữ nguyên nếu đã có)`;
    default: return 'Thiết bị đã thực hiện lệnh';
  }
}
