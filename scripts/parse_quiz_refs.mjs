import fs from 'fs';
import path from 'path';

for (let lab = 0; lab <= 8; lab++) {
  const filePath = path.resolve(`../quizzes/Lab${lab}_Questions.csv`);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  const refs = new Set();
  
  // parse csv lines
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // naive split accounting for quotes at the end
    const lastQuote = line.lastIndexOf('"');
    if (lastQuote > 0) {
      const prevQuote = line.lastIndexOf('"', lastQuote - 1);
      if (prevQuote >= 0) {
        refs.add(line.slice(prevQuote + 1, lastQuote));
        continue;
      }
    }
    const parts = line.split(',');
    refs.add(parts[parts.length - 1].trim());
  }
  console.log(`Lab ${lab}:`, Array.from(refs));
}
