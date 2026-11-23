import fs from 'fs';
import path from 'path';

// Parse CSV with proper quote handling
function parseCsv(content) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 1 || (currentRow.length === 1 && currentRow[0] !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }
  return rows;
}

const BACKEND_DOCS = path.resolve('fastapi-backend/data/docs');
const PUBLIC_DOCS = path.resolve('public/docs');
const DOCS_SRC = path.resolve('../docs');
const QUIZZES_SRC = path.resolve('../quizzes');

for (const dir of [BACKEND_DOCS, PUBLIC_DOCS]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 1. EXTRACT ALL 35 DOC LESSONS
const DOCS_CONFIG = [
  // LAB 0
  {
    labId: 0, file: 'lab0-intro.md',
    sections: [
      { id: 'document', start: '## 📖 Doc 0.1:', end: '## 📖 Doc 0.2:' },
      { id: 'document-0-2', start: '## 📖 Doc 0.2:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 1
  {
    labId: 1, file: 'lab1-obc.md',
    sections: [
      { id: 'document-1-1', start: '## 📖 Doc 1.1:', end: '## 📖 Doc 1.2:' },
      { id: 'document-1-2', start: '## 📖 Doc 1.2:', end: '## 📖 Doc 1.3:' },
      { id: 'doc-1-3', start: '## 📖 Doc 1.3:', end: '## 📖 Doc 1.4:' },
      { id: 'doc-1-4', start: '## 📖 Doc 1.4:', end: '## 📖 Doc 1.5:' },
      { id: 'doc-1-5', start: '## 📖 Doc 1.3: Nguyên lý Vi mạch Dịch bit', end: '## 📖 Doc 1.4: Giao tiếp' },
      { id: 'doc-1-6', start: '## 📖 Doc 1.4: Giao tiếp Nối tiếp Bất đồng bộ UART', end: '## 📖 Doc 1.5: Lý thuyết Mạng' },
      { id: 'doc-1-7', start: '## 📖 Doc 1.5: Lý thuyết Mạng Không dây Wi-Fi', end: '## 📖 Doc 1.6: Quy chuẩn Lập trình' },
      { id: 'doc-1-8', start: '## 📖 Doc 1.6: Quy chuẩn Lập trình C++ Định thời Non-blocking', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 2
  {
    labId: 2, file: 'lab2-eps.md',
    sections: [
      { id: 'document-2-1', start: '## 📖 Doc 2.1:', end: '## 📖 Doc 2.2:' },
      { id: 'document-2-2', start: '## 📖 Doc 2.2:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 3
  {
    labId: 3, file: 'lab3-cdh.md',
    sections: [
      { id: 'document-3-1', start: '## 📖 Doc 3.1:', end: '## 📖 Doc 3.2:' },
      { id: 'document-3-cli', start: '## 📖 Doc 3.2:', end: '## 📖 Doc 3.3:' },
      { id: 'document-3-3', start: '## 📖 Doc 3.3:', end: '## 📖 Doc 3.4:' },
      { id: 'document-3-4', start: '## 📖 Doc 3.4:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 4
  {
    labId: 4, file: 'lab4-sensor.md',
    sections: [
      { id: 'document-4-1', start: '## 📖 Doc 4.1:', end: '## 📖 Doc 4.2:' },
      { id: 'document-4-imu', start: '## 📖 Doc 4.2:', end: '## 📖 Doc 4.3:' },
      { id: 'document-4-gnss', start: '## 📖 Doc 4.3:', end: '## 📖 Doc 4.4:' },
      { id: 'document-4-2', start: '## 📖 Doc 4.4:', end: '## 📖 Doc 4.5:' },
      { id: 'document-4-camera', start: '## 📖 Doc 4.5:', end: '## 📖 Doc 4.6:' },
      { id: 'document-4-3', start: '## 📖 Doc 4.6: IC Chuyển Mạch Multiplexer', end: '## 📖 Doc 4.7:' },
      { id: 'document-4-sensors', start: '## 📖 Doc 4.7:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 5
  {
    labId: 5, file: 'lab5-com.md',
    sections: [
      { id: 'document-5-1', start: '## 📖 Doc 5.1:', end: '## 📖 Doc 5.2:' },
      { id: 'document-5-2', start: '## 📖 Doc 5.2: Giao Thức Đóng Gói', end: '## 📖 Doc 5.3:' },
      { id: 'document-5-lora', start: '## 📖 Doc 5.3: Module Truyền Thông LoRa', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 6
  {
    labId: 6, file: 'lab6-structure.md',
    sections: [
      { id: 'document-6-1', start: '## 📖 Doc 6.1:', end: '## 📖 Doc 6.2:' },
      { id: 'document-6-2', start: '## 📖 Doc 6.2:', end: '## 📖 Doc 6.3:' },
      { id: 'document-6-3', start: '## 📖 Doc 6.3:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 7
  {
    labId: 7, file: 'lab7-integration.md',
    sections: [
      { id: 'document-7-1', start: '## 📖 Doc 7.1:', end: '## 📖 Doc 7.2:' },
      { id: 'document-7-2', start: '## 📖 Doc 7.2:', end: '## 📖 Doc 7.3:' },
      { id: 'document-7-3', start: '## 📖 Doc 7.3:', end: '## 💻 Hướng Dẫn' }
    ]
  },
  // LAB 8
  {
    labId: 8, file: 'lab8-capstone.md',
    sections: [
      { id: 'document-8-1', start: '## 📖 Doc 8.1:', end: '## 📖 Doc 8.2:' },
      { id: 'document-8-widgets', start: '## 📖 Doc 8.2:', end: '## 📖 Doc 8.3:' },
      { id: 'document-8-2', start: '## 📖 Doc 8.3:', end: null }
    ]
  }
];

const docContentMap = {};

for (const group of DOCS_CONFIG) {
  const filePath = path.join(DOCS_SRC, group.file);
  const text = fs.readFileSync(filePath, 'utf8').replaceAll('\r', '');

  // Copy full doc file too
  fs.writeFileSync(path.join(BACKEND_DOCS, group.file), text, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DOCS, group.file), text, 'utf8');

  for (const sec of group.sections) {
    let startIdx = text.indexOf(sec.start);
    if (startIdx === -1) {
      console.warn(`Start marker "${sec.start}" not found in ${group.file}`);
      continue;
    }
    let endIdx = sec.end ? text.indexOf(sec.end, startIdx + sec.start.length) : -1;
    let content = endIdx !== -1 ? text.slice(startIdx, endIdx).trim() : text.slice(startIdx).trim();

    // Clean up trailing separators
    content = content.replace(/\n---\s*$/, '').trim();

    docContentMap[sec.id] = content;

    fs.writeFileSync(path.join(BACKEND_DOCS, `${sec.id}.md`), content, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_DOCS, `${sec.id}.md`), content, 'utf8');

    const labDir = path.resolve(`fastapi-backend/app/firmware/curriculum/lab${group.labId}`);
    if (fs.existsSync(labDir)) {
      fs.writeFileSync(path.join(labDir, `${sec.id}.md`), content, 'utf8');
    }
  }
}
console.log(`Extracted ${Object.keys(docContentMap).length} doc sections.`);

// 2. PARSE AND MAP QUESTIONS TO CHECKPOINTS
// Load existing lab-questions.js to get the exact checkpoint IDs
const checkpointMap = {
  // Lab 0
  'doc-0-1': { lab: 0, match: /Doc 0\.1/i },
  'doc-0-2': { lab: 0, match: /Doc 0\.2/i },
  'practice-0': { lab: 0, match: /Thực hành|Mô Hình/i },

  // Lab 1
  'doc-1-1': { lab: 1, match: /Doc 1\.1/i },
  'doc-1-2': { lab: 1, match: /Doc 1\.2/i },
  'doc-1-3': { lab: 1, match: /Doc 1\.3/i },
  'practice-1-led': { lab: 1, match: /Thực hành.*LED/i },
  'doc-1-4': { lab: 1, match: /Doc 1\.4/i },
  'practice-1-button': { lab: 1, match: /Nút Nhấn/i },
  'doc-1-5': { lab: 1, match: /Doc 1\.5/i },
  'practice-1-74hc595': { lab: 1, match: /74HC595/i },
  'doc-1-6': { lab: 1, match: /Doc 1\.6/i },
  'practice-1-uart': { lab: 1, match: /Thực hành.*UART/i },
  'doc-1-7': { lab: 1, match: /Doc 1\.7/i },
  'doc-1-8': { lab: 1, match: /Doc 1\.8/i },
  'practice-1-wifi': { lab: 1, match: /WiFi/i },

  // Lab 2
  'doc-2-1': { lab: 2, match: /Doc 2\.1/i },
  'practice-2-max17048': { lab: 2, match: /MAX17048|Thực hành: Lập Trình Đọc Pin/i },
  'doc-2-2': { lab: 2, match: /Doc 2\.2/i },
  'practice-2-power': { lab: 2, match: /Power Gating|Tiết Kiệm Điện/i },

  // Lab 3
  'doc-3-1': { lab: 3, match: /Doc 3\.1/i },
  'practice-3-sd': { lab: 3, match: /MicroSD|Lưu Trữ/i },
  'doc-3-2': { lab: 3, match: /Doc 3\.2/i },
  'practice-3-cli': { lab: 3, match: /Shell CLI|Dòng Lệnh/i },
  'doc-3-3': { lab: 3, match: /Doc 3\.3/i },
  'practice-3-rtos': { lab: 3, match: /FreeRTOS/i },
  'doc-3-4': { lab: 3, match: /Doc 3\.4/i },
  'practice-3-wdt-event': { lab: 3, match: /Watchdog/i },

  // Lab 4
  'doc-4-1': { lab: 4, match: /Doc 4\.1/i },
  'practice-4-bmp280': { lab: 4, match: /BMP280/i },
  'doc-4-2': { lab: 4, match: /Doc 4\.2/i },
  'practice-4-imu': { lab: 4, match: /IMU|MPU6500|La Bàn/i },
  'doc-4-3': { lab: 4, match: /Doc 4\.3/i },
  'practice-4-nmea-raw': { lab: 4, match: /Định Vị GNSS|NMEA.*thô/i },
  'doc-4-4': { lab: 4, match: /Doc 4\.4/i },
  'practice-4-nmea-decode': { lab: 4, match: /Giải Mã Dữ Liệu.*GNSS|Giải mã NMEA/i },
  'doc-4-5': { lab: 4, match: /Doc 4\.5/i },
  'practice-4-camera': { lab: 4, match: /Camera/i },
  'doc-4-6': { lab: 4, match: /Doc 4\.7/i },
  'practice-4-all-sensors': { lab: 4, match: /Đa Cảm Biến/i },
  'doc-4-7': { lab: 4, match: /Doc 4\.6/i },
  'practice-4-mux': { lab: 4, match: /Multiplexer|74HC4066/i },

  // Lab 5
  'doc-5-1': { lab: 5, match: /Doc 5\.1/i },
  'doc-5-2': { lab: 5, match: /Doc 5\.2/i },
  'practice-5-lora': { lab: 5, match: /LoRa/i },
  'doc-5-3': { lab: 5, match: /Doc 5\.3/i },
  'practice-5-ground': { lab: 5, match: /Trạm Mặt Đất|Hai Chiều/i },

  // Lab 6
  'doc-6-1': { lab: 6, match: /Doc 6\.1/i },
  'doc-6-2': { lab: 6, match: /Doc 6\.2/i },
  'doc-6-3': { lab: 6, match: /Doc 6\.3/i },
  'practice-6-frame': { lab: 6, match: /Lắp Ráp|Khung Cơ Khí/i },

  // Lab 7
  'doc-7-1': { lab: 7, match: /Doc 7\.1/i },
  'practice-7-superloop': { lab: 7, match: /Tuần Tự|Non-blocking/i },
  'doc-7-2': { lab: 7, match: /Doc 7\.2/i },
  'doc-7-3': { lab: 7, match: /Doc 7\.3/i },
  'practice-7-rtos': { lab: 7, match: /FreeRTOS.*Quỹ Đạo|Đa Nhiệm/i },

  // Lab 8
  'doc-8-1': { lab: 8, match: /Doc 8\.1/i },
  'doc-8-2': { lab: 8, match: /Doc 8\.2/i },
  'doc-8-3': { lab: 8, match: /Doc 8\.3/i },
  'practice-8-capstone': { lab: 8, match: /Capstone|Sứ Mệnh Không Gian/i }
};

// Parse questions per lab
const labParsedQuestions = {};
for (let lab = 0; lab <= 8; lab++) {
  const csvFile = path.join(QUIZZES_SRC, `Lab${lab}_Questions.csv`);
  if (!fs.existsSync(csvFile)) continue;
  const content = fs.readFileSync(csvFile, 'utf8');
  const rows = parseCsv(content);
  const header = rows[0];
  const promptIdx = header.indexOf('prompt');
  const c1TextIdx = header.indexOf('choice_1_text');
  const c2TextIdx = header.indexOf('choice_2_text');
  const c3TextIdx = header.indexOf('choice_3_text');
  const c4TextIdx = header.indexOf('choice_4_text');
  const refIdx = header.indexOf('source_reference');

  const questions = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const prompt = row[promptIdx]?.trim();
    if (!prompt) continue;

    // Check rules:
    // - No fixed GPIO pin numbers questions (e.g. "GPIO 21 là chân gì?")
    // - No camera EMI noise interfering with GPS questions
    if (/nhiễu EMI.*(giữa camera|ảnh hưởng GPS)|camera.*gây nhiễu.*GPS/i.test(prompt)) continue;

    const ref = row[refIdx]?.trim() || '';
    questions.push({
      prompt,
      choices: [
        { id: 'A', text: row[c1TextIdx]?.trim() || '' },
        { id: 'B', text: row[c2TextIdx]?.trim() || '' },
        { id: 'C', text: row[c3TextIdx]?.trim() || '' },
        { id: 'D', text: row[c4TextIdx]?.trim() || '' },
      ],
      ref
    });
  }
  labParsedQuestions[lab] = questions;
}

// Group questions by checkpoint
const checkpointQuestions = {};
for (const [cpId, config] of Object.entries(checkpointMap)) {
  const labQuestions = labParsedQuestions[config.lab] || [];
  const matched = labQuestions.filter(q => config.match.test(q.ref) || config.match.test(q.prompt));
  // Pick between 4 and 8 representative questions per checkpoint
  const selected = (matched.length > 0 ? matched : labQuestions).slice(0, 8);
  checkpointQuestions[cpId] = selected.map((q, idx) => ({
    id: `q-${cpId}-${idx + 1}`,
    type: 'single_choice',
    prompt: q.prompt,
    choices: q.choices
  }));
  console.log(`Checkpoint ${cpId}: ${checkpointQuestions[cpId].length} questions`);
}

// 3. GENERATE UPDATED src/data/lab-questions.js
const labQuestionsSource = `// End-of-lab question outline, following the "❓ Câu hỏi kiểm tra" items of the PTITCube syllabus
// (https://github.com/PTITCube, profile README). Each checkpoint follows either a Doc or a practice group.
//
// A question may only carry what the learner sees while answering:
//   { id: 'q1', type: 'single_choice' | 'multiple_choice' | 'true_false' | 'short_answer',
//     prompt: '...', choices: [{ id: 'A', text: '...' }] }
// Never put correct answers or explanations here — this file ships in the browser bundle.
// Graded questions belong in the server-side Lab Test bank (AGENTS.md rule 5).

const doc = (id, label, topics, questions = []) => ({ id, kind: 'doc', label, topics, exercises: [], questions });
const practice = (id, label, topics, exercises, questions = []) => ({ id, kind: 'practice', label, topics, exercises, questions });

export const LAB_QUESTION_SETS = {
  0: {
    summary: 'Nắm vững cấu trúc tổng thể và mối tương quan phối hợp giữa các phân hệ trên vệ tinh.',
    checkpoints: [
      doc('doc-0-1', 'Câu hỏi kiểm tra Doc 0.1', 'Lịch sử CubeSat, thông số tiêu chuẩn 1U, cơ chế nhả chốt lò xo P-POD và các hiện tượng vật lý LEO (thoát khí, hàn nguội, SEU/SEL/TID, chu kỳ nhiệt 95 phút).', ${JSON.stringify(checkpointQuestions['doc-0-1'] || [], null, 6)}),
      doc('doc-0-2', 'Câu hỏi kiểm tra Doc 0.2', 'Chức năng hạt nhân, luồng dữ liệu viễn trắc/viễn lệnh và cơ chế phối hợp giữa 6 phân hệ CubeSat.', ${JSON.stringify(checkpointQuestions['doc-0-2'] || [], null, 6)}),
      practice('practice-0', 'Câu hỏi kiểm tra Thực hành', 'Nhận diện trực quan vị trí bo mạch, cổng kết nối, ăng-ten và thông số kỹ thuật từng linh kiện trên mô hình 3D.', [], ${JSON.stringify(checkpointQuestions['practice-0'] || [], null, 6)}),
    ],
  },
  1: {
    summary: 'Hoàn thiện kỹ năng lập trình nhúng C++ cơ bản và điều khiển toàn diện các linh kiện ngoại vi của bo mạch OBC.',
    checkpoints: [
      doc('doc-1-1', 'Câu hỏi kiểm tra Doc 1.1', 'Kiến trúc lõi kép Xtensa LX6, bản đồ bộ nhớ SRAM/Flash, các chân Strapping Pins nguy hiểm (GPIO 0, 2, 12, 15) và bảng chân GPIO an toàn.', ${JSON.stringify(checkpointQuestions['doc-1-1'] || [], null, 6)}),
      doc('doc-1-2', 'Câu hỏi kiểm tra Doc 1.2', 'Quy trình biên dịch Cloud Server, cơ chế bắt tay Web Serial API của trình duyệt và tốc độ baud nạp firmware.', ${JSON.stringify(checkpointQuestions['doc-1-2'] || [], null, 6)}),
      doc('doc-1-3', 'Câu hỏi kiểm tra Doc 1.3', 'Nguyên lý diode phát quang, định luật Ohm tính điện trở hạn dòng, cấu trúc kênh LEDC và công thức tính chu kỳ xung PWM.', ${JSON.stringify(checkpointQuestions['doc-1-3'] || [], null, 6)}),
      practice('practice-1-led', 'Câu hỏi kiểm tra Thực hành LED', 'Khối chức năng mã nguồn: pinMode(), digitalWrite(), mảng chân GPIO, các hàm cấu hình PWM (ledcSetup(), ledcAttachPin(), ledcWrite()) và giải thuật điều chế Duty Cycle.',
        ['Lab1-01_Blink_LED', 'Lab1-02_Control_Multiple_LEDs', 'Lab1-03_PWM_LED'], ${JSON.stringify(checkpointQuestions['practice-1-led'] || [], null, 6)}),
      doc('doc-1-4', 'Câu hỏi kiểm tra Doc 1.4', 'Mức logic hở mạch (Floating), mạch điện trở kéo lên nội và hiện tượng nảy tiếp điểm cơ khí (Contact Bounce).', ${JSON.stringify(checkpointQuestions['doc-1-4'] || [], null, 6)}),
      practice('practice-1-button', 'Câu hỏi kiểm tra Thực hành Nút Nhấn', 'Khối code đọc digitalRead(), biến trạng thái chốt (Toggle) và giải thuật lọc chống rung phần mềm với thời gian trễ kiểm tra.',
        ['Lab1-03_Button', 'Lab1-04_LED_Button'], ${JSON.stringify(checkpointQuestions['practice-1-button'] || [], null, 6)}),
      doc('doc-1-5', 'Câu hỏi kiểm tra Doc 1.5', 'Thanh ghi dịch 8-bit và thanh ghi chốt (Storage Register), giản đồ xung chân DS, SH_CP, ST_CP và bảng mã Anode/Cathode chung.', ${JSON.stringify(checkpointQuestions['doc-1-5'] || [], null, 6)}),
      practice('practice-1-74hc595', 'Câu hỏi kiểm tra Thực hành 74HC595', 'Cấu trúc hàm shiftOut(), thứ tự truyền bit MSBFIRST/LSBFIRST, thao tác chốt latchPin bằng cặp lệnh LOW/HIGH và mảng mẫu byte hiển thị.',
        ['Lab1-05_7_Segment_LED'], ${JSON.stringify(checkpointQuestions['practice-1-74hc595'] || [], null, 6)}),
      doc('doc-1-6', 'Câu hỏi kiểm tra Doc 1.6', 'Khung truyền UART (Start bit, Data bits, Parity bit, Stop bit), tốc độ baud và bộ đệm phần cứng FIFO.', ${JSON.stringify(checkpointQuestions['doc-1-6'] || [], null, 6)}),
      practice('practice-1-uart', 'Câu hỏi kiểm tra Thực hành UART', 'Khối code Serial.available(), Serial.read(), cấu trúc switch-case giải mã ký tự điều khiển và kỹ thuật định dạng in ấn.',
        ['Lab1-06_Serial_Communication', 'Lab1-07_Serial_Control_LED'], ${JSON.stringify(checkpointQuestions['practice-1-uart'] || [], null, 6)}),
      doc('doc-1-7', 'Câu hỏi kiểm tra Doc 1.7', 'Sóng WiFi 2.4GHz, địa chỉ IP động DHCP và IP tĩnh, giao thức HTTP cổng 80 và các phương thức GET/POST.', ${JSON.stringify(checkpointQuestions['doc-1-7'] || [], null, 6)}),
      doc('doc-1-8', 'Câu hỏi kiểm tra Doc 1.8', 'Tác hại của hàm chặn delay() trong phần mềm bay, kiểu unsigned long của millis() và phép trừ chống lỗi tràn số sau 49.7 ngày.', ${JSON.stringify(checkpointQuestions['doc-1-8'] || [], null, 6)}),
      practice('practice-1-wifi', 'Câu hỏi kiểm tra Thực hành WiFi & Web Server', 'Khối code WiFi.begin(), WiFi.softAP(), đăng ký định tuyến server.on(), xử lý chuỗi phản hồi HTML và vòng lặp Non-blocking server.handleClient().',
        ['Lab1-08_WiFi_Connection', 'Lab1-09_WiFi_AP_Mode', 'Lab1-10_Web_Server_LED'], ${JSON.stringify(checkpointQuestions['practice-1-wifi'] || [], null, 6)}),
    ],
  },
  2: {
    summary: 'Nắm vững phương pháp quản lý, tối ưu hóa và bảo vệ nguồn điện cho vệ tinh.',
    checkpoints: [
      doc('doc-2-1', 'Câu hỏi kiểm tra Doc 2.1', 'Đường đặc tính phóng điện pin Li-Po, 2 pha sạc CC/CV của TP4056, hiệu suất nguồn xung Buck/Boost, địa chỉ 7-bit 0x36 và thanh ghi 0x02 (VCELL), 0x04 (SOC) của MAX17048.', ${JSON.stringify(checkpointQuestions['doc-2-1'] || [], null, 6)}),
      practice('practice-2-max17048', 'Câu hỏi kiểm tra Thực hành Nguồn & MAX17048', 'Ghép 2 byte thành số nguyên 16-bit, hệ số phân giải 78.125 µV, hàm đóng gói getBatteryVoltage() và phương pháp phát hiện pin yếu.',
        ['Lab2-01a_Battery_I2C', 'Lab2-01b_Battery_Library'], ${JSON.stringify(checkpointQuestions['practice-2-max17048'] || [], null, 6)}),
      doc('doc-2-2', 'Câu hỏi kiểm tra Doc 2.2', 'Công tắc hành trình ray phóng, chốt RBF, mạch Reset Brownout BOD và kỹ thuật điều khiển dòng vào hạ áp để cắt dòng tiêu thụ tĩnh của khối cảm biến.', ${JSON.stringify(checkpointQuestions['doc-2-2'] || [], null, 6)}),
      practice('practice-2-power', 'Câu hỏi kiểm tra Thực hành Tiết Kiệm Điện', 'Khối code điều khiển chân khống chế dòng vào hạ áp, quy tắc logic (0 bật / 1 ngắt), thời gian chờ ổn định điện áp ngõ ra (100 ms) và hiệu quả giảm dòng rò.',
        ['Lab2-02_Power_Saving'], ${JSON.stringify(checkpointQuestions['practice-2-power'] || [], null, 6)}),
    ],
  },
  3: {
    summary: 'Thiết lập hộp đen lưu trữ dữ liệu quỹ đạo và xây dựng nền tảng phần mềm đa nhiệm tin cậy cao.',
    checkpoints: [
      doc('doc-3-1', 'Câu hỏi kiểm tra Doc 3.1', '4 đường tín hiệu SPI (MOSI, MISO, SCK, CS), cực tính và pha xung nhịp (CPOL/CPHA Mode 0), bảng phân bổ tệp FAT32 và bộ đệm 512 byte trong RAM.', ${JSON.stringify(checkpointQuestions['doc-3-1'] || [], null, 6)}),
      practice('practice-3-sd', 'Câu hỏi kiểm tra Thực hành Thẻ Nhớ MicroSD', 'Khối code SD.begin(), mở tệp với cờ FILE_APPEND, ghi chuỗi CSV timestamp,v,soc và vai trò của flush() để tránh mất dữ liệu khi mất nguồn.',
        ['Lab3-01a_MicroSD_SPI', 'Lab3-01b_MicroSD_Library'], ${JSON.stringify(checkpointQuestions['practice-3-sd'] || [], null, 6)}),
      doc('doc-3-2', 'Câu hỏi kiểm tra Doc 3.2', 'Kiến trúc phân tích cú pháp dòng lệnh (Lexer/Parser), tách token bằng khoảng trắng, phân tách mã lệnh và tham số điều khiển vệ tinh từ xa.', ${JSON.stringify(checkpointQuestions['doc-3-2'] || [], null, 6)}),
      practice('practice-3-cli', 'Câu hỏi kiểm tra Thực hành Shell CLI', 'Duyệt thư mục openNextFile(), đọc xuất nội dung read(), xóa tệp SD.remove() và đo dung lượng thẻ nhớ SD.usedBytes().',
        ['Lab3-02_Linux_FS_Commands'], ${JSON.stringify(checkpointQuestions['practice-3-cli'] || [], null, 6)}),
      doc('doc-3-3', 'Câu hỏi kiểm tra Doc 3.3', 'Định thời chiếm quyền (Preemption), cấu trúc TCB, tương tranh tài nguyên dùng chung, bài học Mars Pathfinder và kế thừa ưu tiên (Priority Inheritance) của Mutex.', ${JSON.stringify(checkpointQuestions['doc-3-3'] || [], null, 6)}),
      practice('practice-3-rtos', 'Câu hỏi kiểm tra Thực hành FreeRTOS', 'Hàm xTaskCreatePinnedToCore(), vòng lặp tác vụ for(;;), hàm nhả CPU vTaskDelay() và cặp hàm xSemaphoreTake() / xSemaphoreGive().',
        ['Lab3-03_Multitasking_Scheduler'], ${JSON.stringify(checkpointQuestions['practice-3-rtos'] || [], null, 6)}),
      doc('doc-3-4', 'Câu hỏi kiểm tra Doc 3.4', 'Cơ chế đếm ngược của WDT, phân biệt IWDT và TWDT, quy trình "cho chó ăn" (Feed/Reset WDT).', ${JSON.stringify(checkpointQuestions['doc-3-4'] || [], null, 6)}),
      practice('practice-3-wdt-event', 'Câu hỏi kiểm tra Thực hành Watchdog & Event', 'Cấu hình esp_task_wdt_init(), đăng ký esp_task_wdt_add(), gọi định kỳ esp_task_wdt_reset() và truyền nhận dữ liệu qua hàng đợi xQueueSend() / xQueueReceive().',
        ['Lab3-04_Watchdog_And_Event', 'Lab3-05_Event_Driven_Queue'], ${JSON.stringify(checkpointQuestions['practice-3-wdt-event'] || [], null, 6)}),
    ],
  },
  4: {
    summary: 'Xây dựng hệ sinh thái thu thập dữ liệu đa cảm biến và tải trọng quang học hoàn chỉnh.',
    checkpoints: [
      doc('doc-4-1', 'Câu hỏi kiểm tra Doc 4.1', 'Chân Open-Drain I2C, điều kiện START/STOP trên SDA/SCL, ACK/NACK, địa chỉ 0x76 của BMP280 và công thức độ cao khí áp.', ${JSON.stringify(checkpointQuestions['doc-4-1'] || [], null, 6)}),
      practice('practice-4-bmp280', 'Câu hỏi kiểm tra Thực hành BMP280', 'Đọc chuỗi byte Wire.read(), bù phi tuyến với hệ số hiệu chuẩn (dig_T, dig_P) và tính độ cao theo công thức Hypsometric.',
        ['Lab4-01a_Environment_I2C', 'Lab4-01b_Environment_Library'], ${JSON.stringify(checkpointQuestions['practice-4-bmp280'] || [], null, 6)}),
      doc('doc-4-2', 'Câu hỏi kiểm tra Doc 4.2', 'Cấu trúc cảm biến MEMS, trôi dạt (Drift) của con quay, nhiễu tần số cao của gia tốc kế và hệ số α = 0.98 trong bộ lọc bù.', ${JSON.stringify(checkpointQuestions['doc-4-2'] || [], null, 6)}),
      practice('practice-4-imu', 'Câu hỏi kiểm tra Thực hành IMU MPU6500', 'Đọc số nguyên 16-bit bù 2, đổi ra đơn vị g và °/s, thuật toán tích phân vận tốc góc và xuất log trực quan 3 trục.',
        ['Lab4-02a_IMU_I2C', 'Lab4-02b_IMU_Library'], ${JSON.stringify(checkpointQuestions['practice-4-imu'] || [], null, 6)}),
      doc('doc-4-3', 'Câu hỏi kiểm tra Doc 4.3', 'Băng tần L1 1575.42 MHz, ăng-ten gốm Patch, khuếch đại LNA, thời gian chốt vị trí TTFF (Cold/Warm/Hot Start) và tốc độ baud 9600 của L76X.', ${JSON.stringify(checkpointQuestions['doc-4-3'] || [], null, 6)}),
      practice('practice-4-nmea-raw', 'Câu hỏi kiểm tra Thực hành Đọc NMEA thô', 'Khởi tạo UART2, gom ký tự vào bộ đệm dòng, kiểm tra ký tự bắt đầu $ và ký tự kết thúc \\r\\n.',
        ['Lab4-03a_GPS_UART'], ${JSON.stringify(checkpointQuestions['practice-4-nmea-raw'] || [], null, 6)}),
      doc('doc-4-4', 'Câu hỏi kiểm tra Doc 4.4', 'Các trường câu tin RMC/GGA/GSA, tách trường bằng dấu phẩy, đổi tọa độ ddmm.mmmm sang độ thập phân và kiểm tra Checksum XOR (*hh).', ${JSON.stringify(checkpointQuestions['doc-4-4'] || [], null, 6)}),
      practice('practice-4-nmea-decode', 'Câu hỏi kiểm tra Thực hành Giải mã NMEA', 'Hàm strchr(), strtok(), tính Checksum XOR giữa $ và *, kiểm tra cờ hợp lệ A/V trước khi dùng dữ liệu.',
        ['Lab4-03b_GPS_Library', 'Lab4-03c_GPS_PTITCube'], ${JSON.stringify(checkpointQuestions['practice-4-nmea-decode'] || [], null, 6)}),
      doc('doc-4-5', 'Câu hỏi kiểm tra Doc 4.5', 'Xung nhịp XCLK 10-20 MHz, cấu hình SCCB, nén JPEG phần cứng, byte bắt đầu SOI 0xFFD8, kết thúc EOI 0xFFD9 và giao thức bắt tay OBC-CAM.', ${JSON.stringify(checkpointQuestions['doc-4-5'] || [], null, 6)}),
      practice('practice-4-camera', 'Câu hỏi kiểm tra Thực hành Camera OV2640', 'Gửi lệnh bắt tay p, đọc chuỗi SIZE:n, nhận luồng byte ảnh JPEG nhị phân, ghi trực tiếp theo khối vào MicroSD và gửi DONE.',
        ['Lab4-04a_Camera_UART', 'Lab4-04b_Camera_Library'], ${JSON.stringify(checkpointQuestions['practice-4-camera'] || [], null, 6)}),
      doc('doc-4-6', 'Câu hỏi kiểm tra Doc 4.6', 'Chu trình lấy mẫu tuần tự đa cảm biến, cấu trúc gói viễn trắc hợp nhất (Unified Struct) và cách chọn chu kỳ lấy mẫu theo hằng số thời gian vật lý.', ${JSON.stringify(checkpointQuestions['doc-4-6'] || [], null, 6)}),
      practice('practice-4-all-sensors', 'Câu hỏi kiểm tra Thực hành Đa Cảm Biến', 'Gom cấu trúc struct TelemetryPacket, gắn dấu thời gian millis(), đọc tuần tự BMP280, MPU6500, GPS và in bảng Serial.',
        ['Lab4-05_Read_All_Sensors'], ${JSON.stringify(checkpointQuestions['practice-4-all-sensors'] || [], null, 6)}),
      doc('doc-4-7', 'Câu hỏi kiểm tra Doc 4.7', 'Khóa chuyển mạch tương tự 4 kênh 74HC4066, nguyên tắc chuyển mạch Break-Before-Make và giải pháp dồn kênh UART giữa Camera và GNSS.', ${JSON.stringify(checkpointQuestions['doc-4-7'] || [], null, 6)}),
      practice('practice-4-mux', 'Câu hỏi kiểm tra Thực hành Multiplexer', 'Khối code điều khiển chân chọn kênh: ngắt Camera, chờ 10ms, bật GPS để đọc tọa độ; chụp ảnh xong trả lại kênh GPS.',
        ['Lab4-06_Camera_Multiplexer'], ${JSON.stringify(checkpointQuestions['practice-4-mux'] || [], null, 6)}),
    ],
  },
  5: {
    summary: 'Thiết lập tuyến liên lạc không gian hai chiều tin cậy cao giữa vệ tinh và trạm mặt đất.',
    checkpoints: [
      doc('doc-5-1', 'Câu hỏi kiểm tra Doc 5.1', 'Băng tần UHF 433 MHz, phương trình suy hao Friis FSPL, cân bằng tuyến (Link Budget), dự trữ phai (Fade Margin) và độ dịch tần Doppler (±9.5 kHz).', ${JSON.stringify(checkpointQuestions['doc-5-1'] || [], null, 6)}),
      doc('doc-5-2', 'Câu hỏi kiểm tra Doc 5.2', 'Điều chế trải phổ Chirp CSS, hệ số trải phổ SF (7-12), băng thông BW, chân M0/M1/AUX và công suất phát 20 dBm (100 mW) của E32-433T20D.', ${JSON.stringify(checkpointQuestions['doc-5-2'] || [], null, 6)}),
      practice('practice-5-lora', 'Câu hỏi kiểm tra Thực hành LoRa E32', 'Khởi tạo UART1, kiểm tra chân AUX ở mức HIGH trước khi gửi, giải thuật truyền chuỗi viễn trắc định kỳ và xử lý bộ đệm nhận không đồng bộ.',
        ['Lab5-01a_Send_Telemetry_UART', 'Lab5-01b_Send_Telemetry_Library', 'Lab5-02a_Receive_Command_UART', 'Lab5-02b_Receive_Command_Library'], ${JSON.stringify(checkpointQuestions['practice-5-lora'] || [], null, 6)}),
      doc('doc-5-3', 'Câu hỏi kiểm tra Doc 5.3', 'Cấu trúc khung viễn trắc (Header, Payload, CRC), đa thức CRC-16-CCITT (0x1021), cơ chế sửa sai ARQ Stop-and-Wait và mô hình trạm mặt đất Web.', ${JSON.stringify(checkpointQuestions['doc-5-3'] || [], null, 6)}),
      practice('practice-5-ground', 'Câu hỏi kiểm tra Thực hành Trạm Mặt Đất', 'Đóng gói chuỗi JSON/CSV kèm mã CRC16, phát qua LoRa, phía thu kiểm tra CRC, tách trường dữ liệu và chuyển tiếp lên Dashboard LMS.',
        ['Lab5-03_Satellite_Comm_System'], ${JSON.stringify(checkpointQuestions['practice-5-ground'] || [], null, 6)}),
    ],
  },
  6: {
    summary: 'Làm chủ các quy chuẩn cơ khí hàng không vũ trụ và hoàn thiện lắp ráp cấu trúc CubeSat 1U.',
    checkpoints: [
      doc('doc-6-1', 'Câu hỏi kiểm tra Doc 6.1', 'Vai trò chịu tải cơ học, tản nhiệt dẫn truyền, che chắn bức xạ, tiếp địa đẳng thế và chống hàn nguội trong chân không.', ${JSON.stringify(checkpointQuestions['doc-6-1'] || [], null, 6)}),
      doc('doc-6-2', 'Câu hỏi kiểm tra Doc 6.2', 'Hợp kim nhôm hàng không Al 6061-T6, quy trình xử lý bề mặt Anodize cứng Type III cho ray trượt, lớp phủ Alodine tiếp địa và tiêu chuẩn thoát khí ASTM E595 (TML < 1%, CVCM < 0.1%).', ${JSON.stringify(checkpointQuestions['doc-6-2'] || [], null, 6)}),
      doc('doc-6-3', 'Câu hỏi kiểm tra Doc 6.3', 'Chuẩn ngăn xếp PC/104, bu lông rỗng thông hơi chống rò rỉ ảo (Virtual Leak), keo khóa ren kỵ khí Loctite 222, bảng cân đối khối lượng (Mass Budget) và vị trí trọng tâm CoM (±20 mm).', ${JSON.stringify(checkpointQuestions['doc-6-3'] || [], null, 6)}),
      practice('practice-6-frame', 'Câu hỏi kiểm tra Thực hành Khung Cơ Khí', 'Trình tự xếp chồng các tầng bo, quy tắc siết bu lông theo đường chéo đối xứng, kiểm tra dung sai kích thước 1U (100 × 100 × 113.5 mm) và độ phẳng thanh ray.',
        [], ${JSON.stringify(checkpointQuestions['practice-6-frame'] || [], null, 6)}),
    ],
  },
  7: {
    summary: 'Tích hợp toàn diện 6 phân hệ thành một hệ thống hoạt động đồng bộ và mô phỏng sứ mệnh không gian.',
    checkpoints: [
      doc('doc-7-1', 'Câu hỏi kiểm tra Doc 7.1', 'Năm thách thức kỹ thuật khi tích hợp 1U (tranh chấp bus I2C/SPI, sụt áp Brownout tải đỉnh, nhiễu LoRa EMI, tản nhiệt chân không, deadlock) và mô hình Super-loop Non-blocking.', ${JSON.stringify(checkpointQuestions['doc-7-1'] || [], null, 6)}),
      practice('practice-7-superloop', 'Câu hỏi kiểm tra Thực hành Phần mềm Bay Tuần tự', 'Kỹ thuật chia chu kỳ lấy mẫu độc lập bằng biến millis(), đọc cảm biến, ghi MicroSD và phát LoRa không dùng bất kỳ lệnh delay() nào.',
        ['Lab7-01_Full_Satellite_Program'], ${JSON.stringify(checkpointQuestions['practice-7-superloop'] || [], null, 6)}),
      doc('doc-7-2', 'Câu hỏi kiểm tra Doc 7.2', 'Kiến trúc phần mềm bay 4 tầng (BSP, Subsystem Driver, Middleware, Application), máy trạng thái sứ mệnh FSM (BOOT, SAFE, NOMINAL, COMMS, CRITICAL) và chiến lược tự phục hồi FDIR.', ${JSON.stringify(checkpointQuestions['doc-7-2'] || [], null, 6)}),
      doc('doc-7-3', 'Câu hỏi kiểm tra Doc 7.3', 'Sổ tay vận hành bay FOM, quy trình phiên liên lạc trạm mặt đất (AOS, Handshake, Data Dump, LOS), chu kỳ quỹ đạo LEO 95 phút và mô phỏng vùng tối (Eclipse) 35 phút.', ${JSON.stringify(checkpointQuestions['doc-7-3'] || [], null, 6)}),
      practice('practice-7-rtos', 'Câu hỏi kiểm tra Thực hành Phần mềm Bay Đa Nhiệm', 'Phân chia tác vụ đa nhiệm FreeRTOS: Task_Sensor (Core 1), Task_Storage (Core 1), Task_Comms (Core 0), truyền dữ liệu qua Queue và đồng bộ bus bằng Mutex.',
        ['Lab7-02_RTOS_Satellite_System'], ${JSON.stringify(checkpointQuestions['practice-7-rtos'] || [], null, 6)}),
    ],
  },
  8: {
    summary: 'Vận dụng tư duy Kỹ thuật Hệ thống thiết kế, lập trình và bảo vệ đồ án sứ mệnh CubeSat độc lập.',
    checkpoints: [
      doc('doc-8-1', 'Câu hỏi kiểm tra Doc 8.1', 'Phương pháp luận Kỹ thuật Hệ thống (Systems Engineering), quy trình vòng đời dự án NASA/ESA (Pre-Phase A đến Phase F), ma trận kiểm định MECE và phương pháp Test/Analysis/Inspection/Demo.', ${JSON.stringify(checkpointQuestions['doc-8-1'] || [], null, 6)}),
      doc('doc-8-2', 'Câu hỏi kiểm tra Doc 8.2', 'Nguyên tắc lựa chọn khối trực quan hóa Dashboard LMS (Radial Gauge, Line Chart, 3D Attitude, GPS Map, Uplink Console) và ánh xạ trường dữ liệu Telemetry.', ${JSON.stringify(checkpointQuestions['doc-8-2'] || [], null, 6)}),
      doc('doc-8-3', 'Câu hỏi kiểm tra Doc 8.3', 'Kiến trúc 3 đề tài Capstone chuyên sâu: Cảnh báo Cháy rừng (AI/Edge Detection), Nông nghiệp Thông minh IoT (Store-and-Forward) và Tìm kiếm Cứu nạn SAR (Emergency Beacon Relay).', ${JSON.stringify(checkpointQuestions['doc-8-3'] || [], null, 6)}),
      practice('practice-8-capstone', 'Câu hỏi kiểm tra Thực hành Đồ án Capstone', 'Hoàn thiện mã nguồn bay độc lập, kết nối bộ giả lập viễn trắc Telemetry Simulator, xuất bản Dashboard LMS và lập báo cáo nghiệm thu kỹ thuật.',
        ['Lab8-01_Custom_Mission'], ${JSON.stringify(checkpointQuestions['practice-8-capstone'] || [], null, 6)}),
    ],
  },
};

export const labQuestionsUrl = labId => '/lab' + labId + '/questions';
export function getLabQuestionSet(labId) { return LAB_QUESTION_SETS[labId] || null; }
`;

fs.writeFileSync(path.resolve('src/data/lab-questions.js'), labQuestionsSource, 'utf8');
console.log('Updated src/data/lab-questions.js successfully!');
