const { test, chromium } = require('@playwright/test');
const { playAudit } = require('playwright-lighthouse');

const thresholds = {
  performance: 50,
  accessibility: 50,
  "best-practices": 50,
  seo: 50,
  pwa: 10,
};

test('open home page', async () => {
  const browser = await chromium.launch({
    args: ['--remote-debugging-port=9222'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('/');

  await playAudit({
    page: page,
    port: 9222,
    thresholds,
  });

  await page.close();
  await browser.close();
});
