import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('.');
const DOCS_SRC = path.resolve('../docs');
const QUIZZES_SRC = path.resolve('../quizzes');

const BACKEND_DOCS = path.resolve('fastapi-backend/data/docs');
const PUBLIC_DOCS = path.resolve('public/docs');
const CURRICULUM_LAB = labId => path.resolve(`fastapi-backend/app/firmware/curriculum/lab${labId}`);

// Ensure directories
for (const dir of [BACKEND_DOCS, PUBLIC_DOCS]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 1. Map of each Doc Lesson ID to the section header in docs/lab*.md
// Lab 0: lab0-intro.md
// Lab 1: lab1-obc.md
// Lab 2: lab2-eps.md
// Lab 3: lab3-cdh.md
// Lab 4: lab4-sensor.md
// Lab 5: lab5-com.md
// Lab 6: lab6-structure.md
// Lab 7: lab7-integration.md
// Lab 8: lab8-capstone.md

const DOC_MAPPINGS = {
  0: {
    file: 'lab0-intro.md',
    sections: [
      { id: 'document', match: /## 📖 Doc 0\.1:/, endMatch: /## 📖 Doc 0\.2:/ },
      { id: 'document-0-2', match: /## 📖 Doc 0\.2:/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  1: {
    file: 'lab1-obc.md',
    sections: [
      { id: 'document-1-1', match: /## 📖 Doc 1\.1:/, endMatch: /## 📖 Doc 1\.2:/ },
      { id: 'document-1-2', match: /## 📖 Doc 1\.2:/, endMatch: /## 📖 Doc 1\.3:/ },
      { id: 'doc-1-3', match: /### [0-9]+\. Cấu hình Kênh & Điều chế Xung|## 📖 Doc 1\.3:/, endMatch: /### [0-9]+\. Nút nhấn|## 📖 Doc 1\.4:/, fallback: 'led_pwm' },
      { id: 'doc-1-4', match: /### [0-9]+\. Nút nhấn|## 📖 Doc 1\.4:/, endMatch: /## 📖 Doc 1\.3:|## 📖 Doc 1\.5:/, fallback: 'button_debounce' },
      { id: 'doc-1-5', match: /## 📖 Doc 1\.3: Nguyên lý Vi mạch Dịch bit/, endMatch: /## 📖 Doc 1\.4: Giao tiếp/ },
      { id: 'doc-1-6', match: /## 📖 Doc 1\.4: Giao tiếp Nối tiếp Bất đồng bộ UART/, endMatch: /## 📖 Doc 1\.5: Lý thuyết Mạng/ },
      { id: 'doc-1-7', match: /## 📖 Doc 1\.5: Lý thuyết Mạng Không dây Wi-Fi/, endMatch: /## 📖 Doc 1\.6: Quy chuẩn Lập trình/ },
      { id: 'doc-1-8', match: /## 📖 Doc 1\.6: Quy chuẩn Lập trình C\+\+ Định thời Non-blocking/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  2: {
    file: 'lab2-eps.md',
    sections: [
      { id: 'document-2-1', match: /## 📖 Doc 2\.1:/, endMatch: /## 📖 Doc 2\.2:/ },
      { id: 'document-2-2', match: /## 📖 Doc 2\.2:/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  3: {
    file: 'lab3-cdh.md',
    sections: [
      { id: 'document-3-1', match: /## 📖 Doc 3\.1:/, endMatch: /## 📖 Doc 3\.2:/ },
      { id: 'document-3-cli', match: /## 📖 Doc 3\.2:/, endMatch: /## 📖 Doc 3\.3:/ },
      { id: 'document-3-3', match: /## 📖 Doc 3\.3:/, endMatch: /## 📖 Doc 3\.4:/ },
      { id: 'document-3-4', match: /## 📖 Doc 3\.4:/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  4: {
    file: 'lab4-sensor.md',
    sections: [
      { id: 'document-4-1', match: /## 📖 Doc 4\.1:/, endMatch: /## 📖 Doc 4\.2:/ },
      { id: 'document-4-imu', match: /## 📖 Doc 4\.2:/, endMatch: /## 📖 Doc 4\.3:/ },
      { id: 'document-4-gnss', match: /## 📖 Doc 4\.3:/, endMatch: /## 📖 Doc 4\.4:/ },
      { id: 'document-4-2', match: /## 📖 Doc 4\.4:/, endMatch: /## 📖 Doc 4\.5:/ },
      { id: 'document-4-camera', match: /## 📖 Doc 4\.5:/, endMatch: /## 📖 Doc 4\.6:/ },
      { id: 'document-4-sensors', match: /## 📖 Doc 4\.7: Kiến Trúc Thu Thập/, endMatch: /## 💻 Hướng Dẫn/ },
      { id: 'document-4-3', match: /## 📖 Doc 4\.6: IC Chuyển Mạch Multiplexer/, endMatch: /## 📖 Doc 4\.7:/ }
    ]
  },
  5: {
    file: 'lab5-com.md',
    sections: [
      { id: 'document-5-1', match: /## 📖 Doc 5\.1:/, endMatch: /## 📖 Doc 5\.2:/ },
      { id: 'document-5-lora', match: /## 📖 Doc 5\.3: Module Truyền Thông LoRa/, endMatch: /## 💻 Hướng Dẫn/ },
      { id: 'document-5-2', match: /## 📖 Doc 5\.2: Giao Thức Đóng Gói/, endMatch: /## 📖 Doc 5\.3:/ }
    ]
  },
  6: {
    file: 'lab6-structure.md',
    sections: [
      { id: 'document-6-1', match: /## 📖 Doc 6\.1:/, endMatch: /## 📖 Doc 6\.2:/ },
      { id: 'document-6-2', match: /## 📖 Doc 6\.2:/, endMatch: /## 📖 Doc 6\.3:/ },
      { id: 'document-6-3', match: /## 📖 Doc 6\.3:/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  7: {
    file: 'lab7-integration.md',
    sections: [
      { id: 'document-7-1', match: /## 📖 Doc 7\.1:/, endMatch: /## 📖 Doc 7\.2:/ },
      { id: 'document-7-2', match: /## 📖 Doc 7\.2:/, endMatch: /## 📖 Doc 7\.3:/ },
      { id: 'document-7-3', match: /## 📖 Doc 7\.3:/, endMatch: /## 💻 Hướng Dẫn/ }
    ]
  },
  8: {
    file: 'lab8-capstone.md',
    sections: [
      { id: 'document-8-1', match: /## 📖 Doc 8\.1:/, endMatch: /## 📖 Doc 8\.2:/ },
      { id: 'document-8-widgets', match: /## 📖 Doc 8\.2:/, endMatch: /## 📖 Doc 8\.3:/ },
      { id: 'document-8-2', match: /## 📖 Doc 8\.3:/, endMatch: /$|\n# / }
    ]
  }
};

console.log('--- Generating docs ---');
const extractedDocs = {};

for (const [labId, config] of Object.entries(DOC_MAPPINGS)) {
  const fullPath = path.join(DOCS_SRC, config.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing ${fullPath}`);
    continue;
  }
  const text = fs.readFileSync(fullPath, 'utf8').replaceAll('\r', '');
  
  // Also save entire lab doc
  fs.writeFileSync(path.join(BACKEND_DOCS, config.file), text, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DOCS, config.file), text, 'utf8');

  for (const sec of config.sections) {
    const startIdx = text.search(sec.match);
    if (startIdx === -1) {
      console.warn(`[Lab ${labId}] Cannot find match for ${sec.id}`);
      continue;
    }
    const subText = text.slice(startIdx);
    let endIdx = subText.slice(10).search(sec.endMatch);
    let secContent = '';
    if (endIdx !== -1) {
      secContent = subText.slice(0, endIdx + 10).trim();
    } else {
      secContent = subText.trim();
    }
    extractedDocs[sec.id] = secContent;

    // Save individual doc file
    const docFilename = `${sec.id}.md`;
    fs.writeFileSync(path.join(BACKEND_DOCS, docFilename), secContent, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_DOCS, docFilename), secContent, 'utf8');

    // Also in curriculum folder if lab folder exists
    const labFolder = CURRICULUM_LAB(labId);
    if (fs.existsSync(labFolder)) {
      fs.writeFileSync(path.join(labFolder, docFilename), secContent, 'utf8');
    }
    console.log(`Saved doc: Lab ${labId} -> ${sec.id} (${secContent.length} chars)`);
  }
}

console.log('Total extracted docs:', Object.keys(extractedDocs).length);
