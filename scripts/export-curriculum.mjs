// The original JS files are server seed inputs only; never import them in the UI.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { LABS } from '../src/data/labs.js';
import { getLessonsForLab } from '../src/data/curriculum.js';
import { lessonReadingContent } from '../src/data/lesson-reading.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Lab 0 scaffold content lives on the server side. Quiz and lab-test answer files in this folder are never read here.
const labDir = labId => resolve(root, `fastapi-backend/app/firmware/curriculum/lab${labId}`);
const LAB_FILES = { 0: {
  overview: 'video-0-1.json', 'video-0-2': 'video-0-2.json', document: 'doc-0-1.md', 'document-0-2': 'doc-0-2.md',
  'summary-0': 'summary-0.md', components: 'practice-explorer.json',
},
  1: { 'video-1-1': 'video-1-1.json', 'video-1-2': 'video-1-2.json', 'video-1-5': 'video-1-3.json',
    'document-1-1': 'doc-1-1.md', 'document-1-2': 'doc-1-2.md', 'doc-1-3': 'doc-1-3.md', 'doc-1-4': 'doc-1-4.md',
    'doc-1-5': 'doc-1-5.md', 'doc-1-6': 'doc-1-6.md', 'doc-1-7': 'doc-1-7.md', 'doc-1-8': 'doc-1-8.md' } };
const labText = (labId, id) => readFileSync(resolve(labDir(labId), LAB_FILES[labId][id]), 'utf8').replaceAll(String.fromCharCode(13), '').trim();
const labJson = (labId, id) => JSON.parse(labText(labId, id));
const hasLabFile = (labId, id) => !!LAB_FILES[labId]?.[id];
const LAB1_GROUP = { 'video-1-1': 0, 'document-1-1': 0, 'quiz-1-1': 0, 'video-1-2': 0, 'document-1-2': 0, 'quiz-1-2': 0,
  'doc-1-3': 1, 'quiz-1-3': 1, 'Lab1-01_Blink_LED': 1, 'Lab1-02_Control_Multiple_LEDs': 1, 'Lab1-03_PWM_LED': 1, 'quiz-1-4': 1,
  'doc-1-4': 2, 'quiz-1-5': 2, 'Lab1-03_Button': 2, 'Lab1-04_LED_Button': 2, 'quiz-1-6': 2,
  'doc-1-5': 3, 'quiz-1-7': 3, 'Lab1-05_7_Segment_LED': 3, 'quiz-1-8': 3,
  'doc-1-6': 4, 'quiz-1-9': 4, 'Lab1-06_Serial_Communication': 4, 'Lab1-07_Serial_Control_LED': 4, 'quiz-1-10': 4 };
const objectives = [
  ['', 'Tổng quan các phân hệ'], ['Vi điều khiển và Web IDE|LED|Nút nhấn|LED 7 đoạn|UART|WiFi và Web Server|Tổng hợp', 'Web IDE và kết nối OBC'],
  ['Nguồn và pin|Đo điện áp pin|Thư viện pin|Tiết kiệm năng lượng', 'Đọc điện áp, giải thích kết quả, minh chứng chế độ tiết kiệm năng lượng'],
  ['MicroSD/SPI|Ghi log|Quản lý file qua lệnh|Task/scheduler và Mutex|Watchdog và sự kiện', 'File log đọc được, xử lý lỗi thẻ nhớ, lịch chạy task và minh chứng phục hồi khi treo'],
  ['Môi trường|IMU|GPS|Camera|Tích hợp cảm biến', 'Dữ liệu từng cảm biến và bài tổng hợp; đối chiếu cấu hình phần cứng'],
  ['Gửi telemetry|Nhận lệnh|Liên lạc hai chiều', 'Bản tin gửi/nhận, phản hồi lệnh, xử lý tình huống mất kết nối'],
  ['Lắp ráp cơ khí', 'Checklist lắp ráp và minh chứng khung vệ tinh hoàn chỉnh'],
  ['Chương trình tổng hợp|RTOS', 'Kiểm tra tích hợp, giải thích luồng dữ liệu và kết quả nhiệm vụ'],
  ['Yêu cầu nhiệm vụ|Thiết kế|Triển khai|Báo cáo/demo', 'Mã nguồn, cấu hình dashboard, dữ liệu demo và báo cáo theo rubric'],
];
function groupFor(lab, item, index, count) {
  const groups = objectives[lab][0].split('|').filter(Boolean);
  const id = item.id;
  let group = 0;
  if (lab === 1) group = LAB1_GROUP[id] ?? 5;
  else if (lab === 2) group = /Power_Saving|document-2-2/.test(id) ? 3 : /01b/.test(id) ? 2 : /01a|video-2-2|Detect_Battery/.test(id) ? 1 : 0;
  else if (lab === 3) group = /Watchdog|Event_Driven|video-3-4|document-3-4/.test(id) ? 4 : /Scheduler|video-3-3|document-3-3/.test(id) ? 3 : /02_Linux|document-3-cli/.test(id) ? 2 : /01b/.test(id) ? 1 : 0;
  else if (lab === 4) group = /Read_All|Camera_Multiplexer|document-4-3|document-4-sensors|video-4-5/.test(id) ? 4 : /04[a-b]?_Camera|document-4-camera/.test(id) ? 3 : /03[a-c]?_GPS|Detect_GPS|video-4-4|document-4-gnss|document-4-2/.test(id) ? 2 : /02[a-b]?_IMU|Detect_IMU|video-4-3|document-4-imu/.test(id) ? 1 : 0;
  else if (lab === 5) group = /03_Satellite|video-5-3|document-5-2/.test(id) ? 2 : /02[a-b]?_Receive/.test(id) ? 1 : 0;
  else if (lab === 7) group = /RTOS|video-7-2|document-7-[23]/.test(id) ? 1 : 0;
  else if (lab === 8) group = item.type === 'summary' ? 3 : /Custom_Mission|video-8-2/.test(id) ? 2 : /document-8/.test(id) ? 1 : 0;
  if (item.type === 'summary') group = groups.length - 1;
  return groups[Math.max(0, group)] || `Phần ${index + 1}/${count}`;
}
const legacy = LABS.map(lab => ({ ...lab, lessons: getLessonsForLab(lab.id).map(item => ({ ...item,
  reading: item.type === 'document' ? lessonReadingContent(lab, item) : '',
})) }));
// Self-review checkpoints (`checkpointId`, Lab 2-8) and the legacy Lab Test page exist only in the legacy view;
// the course model appends its own server-graded labtest below. Lab 0/1 `quiz` lessons are server-graded and exported.
const legacyOnly = item => item.type === 'labtest' || (item.type === 'quiz' && !!item.checkpointId);
const labs = LABS.map(lab => {
  const source = getLessonsForLab(lab.id).filter(item => !legacyOnly(item));
  const lessons = source.map((item, index) => {
    const type = item.type === 'summary' ? 'document' : item.type === 'components' || item.type === 'assembly' ? 'practice' : item.type;
    const lab0 = !!LAB_FILES[lab.id];
    const content = { group: groupFor(lab.id, item, index, source.length), estimated_minutes: null, todos: [] };
    if (type === 'video') {
      if (hasLabFile(lab.id, item.id)) Object.assign(content, labJson(lab.id, item.id));
      else content.url = item.videoUrl || '';
      content.url = content.url || '';
      content.todos.push('TODO GV: cung cấp URL video thật và thời lượng.');
    }
    if (type === 'document') {
      // Server scaffold files win once they have content; empty placeholders keep the existing topic reading.
      content.markdown = (hasLabFile(lab.id, item.id) && labText(lab.id, item.id)) || (item.type === 'summary' ? `# Tổng kết\n\n${item.description || lab.description}\n\n## Minh chứng đầu ra\n\n${objectives[lab.id][1]}` : item.id === 'document' ? '' : lessonReadingContent(lab, item));
      if (!content.markdown) content.todos.push(`TODO GV: bổ sung tài liệu Lab ${lab.id}.`);
    }
    if (type === 'practice') {
      content.exercise_id = item.exerciseCode || '';
      content.repository_url = item.repositoryUrl || '';
      content.mode = item.type === 'components' ? 'exploration' : item.type === 'assembly' ? 'assembly' : 'hardware';
      content.instructions = '';
      if (hasLabFile(lab.id, item.id)) Object.assign(content, labJson(lab.id, item.id));
      content.evidence = objectives[lab.id][1];
      content.todos.push('TODO GV: bổ sung hướng dẫn, rubric, kết quả mong đợi và lỗi thường gặp từ học liệu đã duyệt.');
    }
    if (type === 'quiz') {
      // Answers stay server-only; the seed carries just the slot id and readiness flag.
      content.bank_key = item.id;
      content.bank_ready = false;
      content.todos.push('TODO GV: soạn và duyệt câu hỏi kiểm tra (đáp án chỉ lưu ở server).');
    }
    const completionKind = type === 'practice' ? 'teacher_review' : type === 'video' ? 'watched_ratio' : type === 'quiz' ? 'quiz_pass' : 'read_confirmation';
    return { id: item.id, lab_id: lab.id, type, order_no: index, title: item.type === 'summary' && !hasLabFile(lab.id, item.id) ? 'Tổng kết' : item.title,
      content, completion_rule: { kind: completionKind, ...(type === 'video' ? { ratio: 0.9 } : {}), ...(type === 'quiz' ? { pass_score: null } : {}) },
      preview_allowed: item.id === 'components',
      default_enabled: type !== 'video' && type !== 'quiz', default_required: type === 'document' && !!content.markdown };
  });
  if (lab.id >= 2) {
    const groups = objectives[lab.id][0].split('|');
    lessons.sort((a, b) => groups.indexOf(a.content.group) - groups.indexOf(b.content.group));
    lessons.forEach((item, index) => { item.order_no = index; });
  }
  lessons.push({ id: `labtest-${lab.id}`, lab_id: lab.id, type: 'labtest', order_no: lessons.length, title: `Kiểm tra cuối Lab ${lab.id}`,
    content: { todos: [`TODO GV: ngân hàng ${lab.id === 1 ? 10 : 20} câu chưa được soạn/duyệt.`], bank_ready: false }, completion_rule: { kind: 'quiz_pass', pass_score: 4 }, preview_allowed: false, default_enabled: false, default_required: false });
  return { id: lab.id, order_no: lab.id, title: lab.title,
    objectives: lab.description, estimated_minutes: 0, groups: objectives[lab.id][0].split('|').filter(Boolean), evidence: objectives[lab.id][1], lessons };
});
// Hash and compare with LF endings so a Windows (autocrlf) checkout matches a Linux one.
const lf = text => text.replace(/\r\n/g, '\n');
const sourceHash = createHash('sha256');
for (const path of ['src/data/curriculum.js', 'src/data/labs.js', 'src/data/lesson-reading.js', 'scripts/export-curriculum.mjs', ...Object.entries(LAB_FILES).flatMap(([labId, files]) => Object.values(files).map(name => `fastapi-backend/app/firmware/curriculum/lab${labId}/${name}`))]) sourceHash.update(lf(readFileSync(resolve(root, path), 'utf8')));
const output = JSON.stringify({ course_id: 'cubesat', course_title: 'CubeSAT Learning Platform', source_hash: sourceHash.digest('hex'), labs, legacy }, null, 2) + '\n';
const target = resolve(root, 'fastapi-backend/app/firmware/curriculum/seed.json');
if (process.argv.includes('--check')) {
  if (lf(readFileSync(target, 'utf8')) !== output) throw new Error('Curriculum seed snapshot is stale. Run node scripts/export-curriculum.mjs');
} else writeFileSync(target, output);
console.log(`Curriculum: ${labs.length} labs, ${labs.reduce((n, lab) => n + lab.lessons.length, 0)} lessons; seed snapshot ${process.argv.includes('--check') ? 'verified' : 'exported'}.`);
