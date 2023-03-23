const { expect } = require('@playwright/test');
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

lighthouseTest.describe('order page', () => {
  lighthouseTest.afterAll(() => {
    printTable('order');
  });
  Array.from({ length: numberOfTests }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      lighthouseTest(`${name} order page ${i}`, async ({ page, port }) => {
        const url = `${baseUrls[name]}/products`;
        await page.goto(url);

        await page.getByTestId('productCard100').click();

        await page.getByTestId('addToCartButton').click();

        const cartUrl = `${baseUrls[name]}/cart`;
        await page.goto(cartUrl);

        page.screenshot({ path: `screenshots/screenshot-${name}-order-${i}-cart.png` });

        await expect((page).getByTestId('firstNameInput')).toBeVisible();

        await page.getByTestId('firstNameInput').fill('Touko');
        await page.getByTestId('lastNameInput').fill('Lonka');
        await page.getByTestId('addressInput').fill('Address 123');

        await page.getByTestId('placeOrderButton').click();

        await page.getByTestId('confirmButton').click();

        await expect((page).getByText(/Order on/)).toBeVisible();

        await playAudit({
          page,
          port,
          thresholds,
          config,
          reports: getReportsConfiguration(`${name}-order-${i}`),
        });
      })
    )
  );
});