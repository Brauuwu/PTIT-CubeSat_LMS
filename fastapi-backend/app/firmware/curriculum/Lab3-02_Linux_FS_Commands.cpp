// Reviewed classroom source for the ESP32 OBC hardware profile.
// Upstream: https://github.com/PTITCube/Lab3-02_Linux_FS_Commands/blob/eb9fa7faa73f8b001e53254f40c4307f2f52169e/src/main.cpp
/**
 * VÍ DỤ 2: QUẢN LÝ THẺ NHỚ BẰNG LỆNH KIỂU LINUX
 * 
 * Mô tả:
 * Ví dụ này mô phỏng cách nhận lệnh từ một cổng cdh (ví dụ Ground Station)
 * và chuyển nó cho Storage module xử lý như một file system của Linux.
 *
 * Các lệnh hỗ trợ: pwd, cd, ls, mkdir, rm, touch
 */

#include <Arduino.h>

#include <PTITCube.h>
#include <SD.h>

PTIT_CDH cdh;

PTIT_Storage storage;

// Check directory type before the legacy library's cd/ls command reports OK.
String checkedStorageCommand(PTIT_Storage& disk, const String& input) {
    if (!disk.isReady()) return "ERR: SD not ready";
    String command = input; command.trim();
    const int separator = command.indexOf(' ');
    String verb = separator < 0 ? command : command.substring(0, separator);
    verb.toLowerCase();
    String argument = separator < 0 ? "" : command.substring(separator + 1);
    argument.trim();
    if ((verb == "cd" || verb == "ls") && !(verb == "cd" && argument == "..")) {
        String path = argument.length() ? argument : (verb == "cd" ? "/" : disk.handleCommand("pwd"));
        if (path == ".") path = disk.handleCommand("pwd");
        if (!path.startsWith("/")) {
            const String cwd = disk.handleCommand("pwd");
            path = cwd + (cwd.endsWith("/") ? "" : "/") + path;
        }
        File directory = SD.open(path.c_str());
        if (!directory || !directory.isDirectory()) return "ERR: Not a directory: " + path;
    }
    return disk.handleCommand(input);
}

void setup() {
    cdh.begin(115200);
    while (!cdh) { delay(10); }

    cdh.println("\n[EXAMPLE] Khởi động hệ thống lưu trữ...");
    storage.init();
    
    if (storage.isReady()) {
        cdh.println("[EXAMPLE] SD Card đã sẵn sàng!");
        cdh.println("Bạn có thể gõ các lệnh sau vào ô cdh Monitor (kèm Enter/NL):");
        cdh.println("  pwd      - Xem thư mục hiện tại");
        cdh.println("  ls       - Liệt kê file và thư mục");
        cdh.println("  mkdir x  - Tạo thư mục tên x");
        cdh.println("  cd x     - Chuyển vào thư mục x");
        cdh.println("  touch x  - Tạo file x");
        cdh.println("  rm x     - Xóa file hoặc thư mục x");
    } else {
        cdh.println("[EXAMPLE] LỖI: Không tìm thấy thẻ SD.");
    }
}

void loop() {
    static String command;
    static bool discard = false;
    for (int budget = 0; budget < 64 && cdh.available(); ++budget) {
        const char c = cdh.read();
        if (c == '\n') {
            if (!discard) {
                command.trim();
                if (command.length()) {
                    cdh.println("User> " + command);
                    const String response = checkedStorageCommand(storage, command);
                    cdh.println(response.length() ? response : "ERR: Unknown command");
                }
            } else cdh.println("ERR: Command exceeds 128 bytes");
            command = ""; discard = false;
        } else if (c != '\r' && !discard) {
            if (command.length() < 128) command += c;
            else { command = ""; discard = true; }
        }
    }
    delay(5);
}
