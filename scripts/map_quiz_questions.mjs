import fs from 'fs';
import path from 'path';
import { parse } from 'node:path';

// Parse CSV with proper RFC 4180 quote support
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
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
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

for (let lab = 0; lab <= 8; lab++) {
  const csvPath = path.resolve(`../quizzes/Lab${lab}_Questions.csv`);
  if (!fs.existsSync(csvPath)) continue;
  const content = fs.readFileSync(csvPath, 'utf8');
  const rows = parseCsv(content);
  const header = rows[0];
  const refIdx = header.indexOf('source_reference');
  const promptIdx = header.indexOf('prompt');

  const refCounts = {};
  for (let i = 1; i < rows.length; i++) {
    const ref = rows[i][refIdx]?.trim() || 'UNKNOWN';
    refCounts[ref] = (refCounts[ref] || 0) + 1;
  }
  console.log(`\n=== LAB ${lab} (Total ${rows.length - 1} questions) ===`);
  for (const [ref, count] of Object.entries(refCounts)) {
    console.log(`  [${count} q] ${ref}`);
  }
}
