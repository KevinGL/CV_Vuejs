import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', {waitUntil: 'networkidle0'});
  await page.pdf({ path: 'cv.pdf', format: 'A4', printBackground: true, margin: { top: "4mm", right: "2mm", bottom: "4mm", left: "2mm" } });
  await browser.close();
})();
