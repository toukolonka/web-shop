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
const { playAudit } = require('playwright-lighthouse');

const config = configs[1];

lighthouseTest.describe('cart page', () => {
  lighthouseTest.afterAll(() => {
    printTable('cart');
  });
  Array.from({ length: numberOfTests }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      lighthouseTest(`${name} cart page ${i}`, async ({ page, port }) => {
        const url = `${baseUrls[name]}/products`;
        await page.goto(url);

        await page.getByTestId('productCard100').click();

        await page.getByTestId('addToCartButton').click();

        const cartUrl = `${baseUrls[name]}/cart`;
        await page.goto(cartUrl);

        await playAudit({
          page,
          port,
          thresholds,
          config,
          reports: getReportsConfiguration(`${name}-cart-${i}`),
        });
      })
    )
  );
});