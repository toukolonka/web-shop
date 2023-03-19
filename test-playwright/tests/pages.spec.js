const { expect } = require('@playwright/test');
const { lighthouseTest, getReportsConfiguration, printTable } = require('./utils');
const { playAudit } = require('playwright-lighthouse');

const thresholds = {
  performance: 50,
  accessibility: 50,
  'best-practices': 50,
  seo: 50,
  pwa: 10,
};

lighthouseTest.afterAll(() => {
  printTable();
});

testSuites(['react', 'react-opt', 'preact']);

function testSuites(names) {
  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} home page ${i}`, async ({ page, port }) => {
        await page.goto('/');

        await playAudit({
          page,
          port,
          thresholds,
          reports: getReportsConfiguration(`${name}-home-${i}`),
        });
      })
    )
  );

  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} products page ${i}`, async ({ page, port }) => {
        await page.goto('/products');

        await playAudit({
          page,
          port,
          thresholds,
          reports: getReportsConfiguration(`${name}-products-${i}`),
        });
      })
    )
  );

  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} product page ${i}`, async ({ page, port }) => {
        await page.goto('/products');

        await page.getByTestId('productCard100').click();

        await expect((page).getByText(/product/)).toBeVisible();

        await playAudit({
          page,
          port,
          thresholds,
          reports: getReportsConfiguration(`${name}-product-${i}`),
        });
      })
    )
  );

  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} cart page ${i}`, async ({ page, port }) => {
        await page.goto('/products');

        await page.getByTestId('productCard100').click();

        await expect((page).getByText(/product/)).toBeVisible();

        await page.getByTestId('addToCartButton').click();

        await page.goto('/cart');

        await playAudit({
          page,
          port,
          thresholds,
          reports: getReportsConfiguration(`${name}-cart-${i}`),
        });
      })
    )
  );

  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} order page ${i}`, async ({ page, port }) => {
        await page.goto('/products');

        await page.getByTestId('productCard100').click();

        await expect((page).getByText(/product/)).toBeVisible();

        await page.getByTestId('addToCartButton').click();

        await page.goto('/cart');

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
          reports: getReportsConfiguration(`${name}-order-${i}`),
        });
      })
    )
  );

  Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
    names.forEach((name) =>
      lighthouseTest(`${name} orders page ${i}`, async ({ page, port }) => {
        await page.goto('/products');

        await page.getByTestId('productCard100').click();

        await expect((page).getByText(/product/)).toBeVisible();

        await page.getByTestId('addToCartButton').click();

        await page.goto('/cart');

        await page.getByTestId('firstNameInput').fill('Touko');
        await page.getByTestId('lastNameInput').fill('Lonka');
        await page.getByTestId('addressInput').fill('Address 123');

        await page.getByTestId('placeOrderButton').click();

        await page.getByTestId('confirmButton').click();

        await expect((page).getByText(/Order on/)).toBeVisible();

        await page.goto('/orders');

        await expect((page).getByText(/Order on/)).toBeVisible();

        await playAudit({
          page,
          port,
          thresholds,
          reports: getReportsConfiguration(`${name}-orders-${i}`),
        });
      })
    )
  );
}