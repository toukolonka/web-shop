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

lighthouseTest.describe('product page', () => {
  lighthouseTest.afterAll(() => {
    printTable('product');
  });
  Array.from({ length: numberOfTests }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      lighthouseTest(`${name} product page ${i}`, async ({ page, port }) => {
        const url = `${baseUrls[name]}/products`;
        await page.goto(url);

        await page.getByTestId('productCard100').click();

        await playAudit({
          page,
          port,
          thresholds,
          config,
          reports: getReportsConfiguration(`${name}-product-${i}`),
        });
      })
    )
  );
});