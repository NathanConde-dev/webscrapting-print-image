const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.netflix.com/login');

  console.log('Abriu o navegador, acessou a Netflix');
  await page.screenshot({ path: 'screenshot.png' });

})();