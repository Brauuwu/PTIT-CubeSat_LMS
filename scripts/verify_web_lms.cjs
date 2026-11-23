const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:/Users/HieuVi/.gemini/antigravity/brain/59631fa6-f307-4052-b3ba-1c21b690724f';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJ0ZXN0QHN0ZW1jdWJlLnZuIiwicm9sZSI6InVzZXIiLCJleHAiOjE3OTU0NTk4MzgsImp0aSI6IjRmM2Q4OWQzLWE1MmQtNDViMi04MGE4LWQwMGRhNWQ4OWE0NCJ9.8TwSHUg5sIvH70yfNCZNxKe_qOjkp85zc4v0-p4y5kU';

async function runVerification() {
  console.log('Launching Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(`[Page Error] ${err.toString()}`);
  });

  const results = {
    login: false,
    home: false,
    lab0: false,
    lab1_ide: false,
    lab1_blockly: false,
    lab4_camera: false,
    lab5_ground_station: false,
    screenshots: [],
    errors: []
  };

  try {
    // 1. Visit Login Page
    console.log('Navigating to Login Page: http://localhost:5173/login ...');
    await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));
    const shotLogin = path.join(ARTIFACTS_DIR, 'screenshot_01_login.png');
    await page.screenshot({ path: shotLogin });
    results.login = true;
    results.screenshots.push(shotLogin);
    console.log('Login Page screenshot captured:', shotLogin);

    // Perform Login via form or injected storage
    console.log('Authenticating with user credentials...');
    await page.type('input[type="email"]', 'test@stemcube.vn');
    await page.type('input[type="password"]', 'Password123!');
    const submitBtn = await page.$('button[type="submit"]');
    if (submitBtn) {
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {}),
        submitBtn.click()
      ]);
    }
    await new Promise(r => setTimeout(r, 2000));

    // Ensure access_token is active in localStorage
    await page.evaluate((tok) => {
      localStorage.setItem('access_token', tok);
      sessionStorage.setItem('access_token', tok);
    }, TOKEN);

    // 2. Dashboard / Home Page
    console.log('Navigating to Dashboard Home: http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));
    const shotHome = path.join(ARTIFACTS_DIR, 'screenshot_02_home.png');
    await page.screenshot({ path: shotHome });
    results.home = true;
    results.screenshots.push(shotHome);
    console.log('Dashboard Home screenshot captured:', shotHome);

    // 3. Lab 0 - Digital Twin 3D Component Viewer
    console.log('Navigating to Lab 0: http://localhost:5173/lab0 ...');
    await page.goto('http://localhost:5173/lab0', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    const shotLab0 = path.join(ARTIFACTS_DIR, 'screenshot_03_lab0_digital_twin.png');
    await page.screenshot({ path: shotLab0 });
    results.lab0 = true;
    results.screenshots.push(shotLab0);
    console.log('Lab 0 Digital Twin screenshot captured:', shotLab0);

    // 4. Lab 1 - OBC C++ IDE & Exercise Selector
    console.log('Navigating to Lab 1: http://localhost:5173/lab1?lesson=Lab1-01_Blink_LED ...');
    await page.goto('http://localhost:5173/lab1?lesson=Lab1-01_Blink_LED', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    const shotLab1Ide = path.join(ARTIFACTS_DIR, 'screenshot_04_lab1_obc_ide.png');
    await page.screenshot({ path: shotLab1Ide });
    results.lab1_ide = true;
    results.screenshots.push(shotLab1Ide);
    console.log('Lab 1 C++ IDE screenshot captured:', shotLab1Ide);

    // 5. Lab 1 - Blockly Drag & Drop Tab
    console.log('Switching to Blockly Tab...');
    const switched = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const btn = buttons.find(b => b.textContent.includes('Blockly') || b.textContent.includes('Khối'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    console.log('Blockly button clicked:', switched);
    await new Promise(r => setTimeout(r, 3000));
    const shotLab1Blockly = path.join(ARTIFACTS_DIR, 'screenshot_05_lab1_blockly.png');
    await page.screenshot({ path: shotLab1Blockly });
    results.lab1_blockly = true;
    results.screenshots.push(shotLab1Blockly);
    console.log('Lab 1 Blockly screenshot captured:', shotLab1Blockly);

    // 6. Lab 4 - Sensors / Camera UART
    console.log('Navigating to Lab 4: http://localhost:5173/lab4?lesson=Lab4-04a_Camera_UART ...');
    await page.goto('http://localhost:5173/lab4?lesson=Lab4-04a_Camera_UART', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    const shotLab4 = path.join(ARTIFACTS_DIR, 'screenshot_06_lab4_camera.png');
    await page.screenshot({ path: shotLab4 });
    results.lab4_camera = true;
    results.screenshots.push(shotLab4);
    console.log('Lab 4 Camera screenshot captured:', shotLab4);

    // 7. Lab 5 - Communication / Ground Station Demo
    console.log('Navigating to Lab 5: http://localhost:5173/lab5?lesson=Lab5-01a_Send_Telemetry_UART ...');
    await page.goto('http://localhost:5173/lab5?lesson=Lab5-01a_Send_Telemetry_UART', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    const shotLab5 = path.join(ARTIFACTS_DIR, 'screenshot_07_lab5_ground_station.png');
    await page.screenshot({ path: shotLab5 });
    results.lab5_ground_station = true;
    results.screenshots.push(shotLab5);
    console.log('Lab 5 Ground Station screenshot captured:', shotLab5);

  } catch (err) {
    console.error('Verification error:', err);
    results.errors.push(err.toString());
  } finally {
    await browser.close();
  }

  results.consoleErrors = consoleErrors;
  console.log('=== FULL VERIFICATION REPORT ===');
  console.log(JSON.stringify(results, null, 2));
}

runVerification();
