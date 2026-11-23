import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.resolve('fastapi-backend/data/docs');
const READING_FILE = path.resolve('src/data/lesson-reading.js');

// Read existing lesson-reading.js
const currentCode = fs.readFileSync(READING_FILE, 'utf8');

// Find where READING_NOTES ends
const notesEndIdx = currentCode.indexOf('export function lessonReadingContent');
if (notesEndIdx === -1) {
  console.error('Could not find lessonReadingContent in file');
  process.exit(1);
}

const readingDocs = {};
const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md') && !f.startsWith('lab'));
for (const f of files) {
  const id = f.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(DOCS_DIR, f), 'utf8');
  readingDocs[id] = content;
}

const newReadingDocsCode = `export const READING_DOCS = ${JSON.stringify(readingDocs, null, 2)};\n\n`;

const newFunctionCode = `export function lessonReadingContent(lab, lesson) {
  const full = READING_DOCS[lesson.id];
  if (full) {
    return full.includes(lesson.title) ? full : \`# \${lesson.label}: \${lesson.title}\\n\\n\${full}\`;
  }
  const notes = READING_NOTES[lesson.id] || [];
  return \`# \${lesson.label}: \${lesson.title}\\n\\n\${notes.join('\\n\\n')}\\n\\n## Tự kiểm tra\\n\\n- Giải thích các khái niệm bằng sơ đồ hoặc ví dụ.\\n- Xác định cấu hình phần cứng và cách quan sát kết quả cho bài thực hành liên quan.\\n- Ghi lại điểm chưa rõ để đối chiếu khi chạy chương trình.\\n\\nMục tiêu Lab \${lab.id}: \${lab.description}\\n\\n[Lộ trình và các kho bài thực hành PTITCube](https://github.com/PTITCube)\\n\`;
}
`;

const updatedCode = currentCode.slice(0, notesEndIdx) + '\n' + newReadingDocsCode + newFunctionCode;

fs.writeFileSync(READING_FILE, updatedCode, 'utf8');
console.log('Updated src/data/lesson-reading.js with READING_DOCS successfully!');
