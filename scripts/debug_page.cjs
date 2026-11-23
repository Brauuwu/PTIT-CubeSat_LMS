const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle2' });
  await page.type('input[type="email"]', 'test@stemcube.vn');
  await page.type('input[type="password"]', 'Password123!');
  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 2000));
  
  await page.goto('http://localhost:5173/lab0?lesson=document', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  console.log('Current URL:', page.url());
  const bodyText = await page.evaluate(() => document.body.innerText);
  console.log('Body Text (first 600 chars):\n', bodyText.slice(0, 600));
  await browser.close();
})();
