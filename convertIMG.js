import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 1131 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'cv.png', fullPage: true });
  await browser.close();
})();