const { playAudit } = require('playwright-lighthouse');
const {
  lighthouseTest,
  getReportsConfiguration,
  printTable,
  thresholds,
  apps,
  baseUrls,
  configs,
  numberOfTests,
} = require('./utils');

const config = configs[1];

lighthouseTest.describe('products page', () => {
  lighthouseTest.afterAll(() => {
    printTable('products');
  });
  Array.from({ length: numberOfTests }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      lighthouseTest(`${name} products page ${i}`, async ({ page, port }) => {
        const url = `${baseUrls[name]}/products`;
        await page.goto(url);

        console.log('URL', url, 'REPORT', `${name}-products-${i}`);

        await playAudit({
          page,
          port,
          thresholds,
          config,
          reports: getReportsConfiguration(`${name}-products-${i}`),
        });
      })
    )
  );
});