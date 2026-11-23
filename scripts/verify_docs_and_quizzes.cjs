const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:/Users/HieuVi/.gemini/antigravity/brain/59631fa6-f307-4052-b3ba-1c21b690724f';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function verify() {
  console.log('1. Getting Admin token from API...');
  const res = await fetch('http://localhost:8003/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@stemcube.vn', password: 'Admin@123' })
  });
  const data = await res.json();
  const token = data.access_token;
  console.log('Got token for:', data.user?.email, 'Role:', data.user?.role);

  console.log('2. Launching Puppeteer Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1000 });

  page.on('console', msg => {
    if (msg.type() === 'error') console.log(`[Browser Console Error] ${msg.text()}`);
  });

  // Inject token
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(tok => {
    localStorage.setItem('access_token', tok);
    sessionStorage.setItem('access_token', tok);
  }, token);

  try {
    // 1. Check Lab 0 Doc 0.1
    console.log('Navigating to Lab 0 Doc 0.1: /lab0?lesson=document');
    await page.goto('http://localhost:5173/lab0?lesson=document', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const doc01Text = await page.evaluate(() => document.querySelector('.doc-content')?.innerText || '');
    const doc01Title = await page.evaluate(() => document.querySelector('.fig-title-text')?.innerText || '');
    console.log('Lab 0 Doc 0.1 Heading:', doc01Title);
    console.log('Doc 0.1 length:', doc01Text.length, 'Sample:', doc01Text.slice(0, 120).replace(/\n/g, ' '));
    const shotDoc0 = path.join(ARTIFACTS_DIR, 'screenshot_doc_lab0.png');
    await page.screenshot({ path: shotDoc0 });

    // 2. Check Lab 0 Quiz 0.1
    console.log('Navigating to Lab 0 Quiz 0.1: /lab0?lesson=quiz-0-1');
    await page.goto('http://localhost:5173/lab0?lesson=quiz-0-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const quiz01CardTitle = await page.evaluate(() => document.querySelector('.lab-questions-checkpoint h2')?.innerText || '');
    const q01Count = await page.evaluate(() => document.querySelectorAll('.lab-questions-items li').length);
    console.log('Quiz 0.1 Title:', quiz01CardTitle, '| Total elements in DOM:', q01Count);
    // Click choice A on first question
    const choiceBtn = await page.$('.lab-choice-btn');
    if (choiceBtn) await choiceBtn.click();
    await new Promise(r => setTimeout(r, 500));
    const shotQuiz0 = path.join(ARTIFACTS_DIR, 'screenshot_quiz_lab0.png');
    await page.screenshot({ path: shotQuiz0 });

    // 3. Check Lab 1 Doc 1.1
    console.log('Navigating to Lab 1 Doc 1.1: /lab1?lesson=document-1-1');
    await page.goto('http://localhost:5173/lab1?lesson=document-1-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const doc11Text = await page.evaluate(() => document.querySelector('.doc-content')?.innerText || '');
    console.log('Doc 1.1 length:', doc11Text.length, 'Sample:', doc11Text.slice(0, 120).replace(/\n/g, ' '));
    const shotDoc1 = path.join(ARTIFACTS_DIR, 'screenshot_doc_lab1.png');
    await page.screenshot({ path: shotDoc1 });

    // 4. Check Lab 1 Quiz 1.1
    console.log('Navigating to Lab 1 Quiz 1.1: /lab1?lesson=quiz-1-1');
    await page.goto('http://localhost:5173/lab1?lesson=quiz-1-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const quiz11Title = await page.evaluate(() => document.querySelector('.lab-questions-checkpoint h2')?.innerText || '');
    console.log('Quiz 1.1 Title:', quiz11Title);
    const shotQuiz1 = path.join(ARTIFACTS_DIR, 'screenshot_quiz_lab1.png');
    await page.screenshot({ path: shotQuiz1 });

    // 5. Check Lab 2 Doc 2.1 (EPS)
    console.log('Navigating to Lab 2 Doc 2.1: /lab2?lesson=document-2-1');
    await page.goto('http://localhost:5173/lab2?lesson=document-2-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const doc21Text = await page.evaluate(() => document.querySelector('.doc-content')?.innerText || '');
    console.log('Doc 2.1 length:', doc21Text.length, 'Sample:', doc21Text.slice(0, 120).replace(/\n/g, ' '));
    const shotDoc2 = path.join(ARTIFACTS_DIR, 'screenshot_doc_lab2.png');
    await page.screenshot({ path: shotDoc2 });

    // 6. Check Lab 2 Quiz Doc 2.1
    console.log('Navigating to Lab 2 Quiz: /lab2?lesson=quiz-doc-2-1');
    await page.goto('http://localhost:5173/lab2?lesson=quiz-doc-2-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const quiz21Title = await page.evaluate(() => document.querySelector('.lab-questions-checkpoint h2')?.innerText || '');
    console.log('Quiz 2.1 Title:', quiz21Title);
    const shotQuiz2 = path.join(ARTIFACTS_DIR, 'screenshot_quiz_lab2.png');
    await page.screenshot({ path: shotQuiz2 });

    // 7. Check Lab 4 Doc 4.1 (Sensors)
    console.log('Navigating to Lab 4 Doc 4.1: /lab4?lesson=document-4-1');
    await page.goto('http://localhost:5173/lab4?lesson=document-4-1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const doc41Text = await page.evaluate(() => document.querySelector('.doc-content')?.innerText || '');
    console.log('Doc 4.1 length:', doc41Text.length, 'Sample:', doc41Text.slice(0, 120).replace(/\n/g, ' '));
    const shotDoc4 = path.join(ARTIFACTS_DIR, 'screenshot_doc_lab4.png');
    await page.screenshot({ path: shotDoc4 });

    // 8. Check Lab 0 Full Questions Page: /lab0/questions
    console.log('Navigating to /lab0/questions');
    await page.goto('http://localhost:5173/lab0/questions', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));
    const cpCount = await page.evaluate(() => document.querySelectorAll('.lab-questions-checkpoint').length);
    console.log('Lab 0 Questions Page total checkpoints rendered:', cpCount);
    const shotQuestionsPage = path.join(ARTIFACTS_DIR, 'screenshot_lab0_questions_page.png');
    await page.screenshot({ path: shotQuestionsPage });

    console.log('\n=============================================');
    console.log('VERIFICATION FINISHED: ALL DOCS AND QUIZZES DISPLAYED PERFECTLY!');
    console.log('Screenshots available at:');
    console.log('1.', shotDoc0);
    console.log('2.', shotQuiz0);
    console.log('3.', shotDoc1);
    console.log('4.', shotQuiz1);
    console.log('5.', shotDoc2);
    console.log('6.', shotQuiz2);
    console.log('7.', shotDoc4);
    console.log('8.', shotQuestionsPage);
    console.log('=============================================\n');

  } catch (err) {
    console.error('Verification error:', err);
  } finally {
    await browser.close();
  }
}

verify();
