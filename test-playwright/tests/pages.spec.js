const { expect } = require('@playwright/test');
const { lighthouseTest } = require('./utils');
const { playAudit } = require('playwright-lighthouse');

const thresholds = {
  performance: 50,
  accessibility: 50,
  'best-practices': 50,
  seo: 50,
  pwa: 10,
};

const reports = (prefix) => {
  return {
    formats: {
      html: true,
    },
    name: `${prefix}-page`,
    directory: 'reports',
  };
};

lighthouseTest.describe('pages', () => {
  lighthouseTest('home page', async ({ page, port }) => {
    await page.goto('/');

    await playAudit({
      page,
      port,
      thresholds,
      reports: reports('home'),
    });
  });

  lighthouseTest('products page', async ({ page, port }) => {
    await page.goto('/products');

    await playAudit({
      page,
      port,
      thresholds,
      reports: reports('products'),
    });
  });

  lighthouseTest('product page', async ({ page, port }) => {
    await page.goto('/products');

    await page.getByTestId('productCard100').click();

    await expect((page).getByText(/product/)).toBeVisible();

    await playAudit({
      page,
      port,
      thresholds,
      reports: reports('product'),
    });
  });

  lighthouseTest('cart page', async ({ page, port }) => {
    await page.goto('/products');

    await page.getByTestId('productCard100').click();

    await expect((page).getByText(/product/)).toBeVisible();

    await page.getByTestId('addToCartButton').click();

    await page.goto('/cart');

    await playAudit({
      page,
      port,
      thresholds,
      reports: reports('cart'),
    });
  });

  lighthouseTest('order page', async ({ page, port }) => {
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
      reports: reports('order'),
    });
  });

  lighthouseTest('orders page', async ({ page, port }) => {
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
      reports: reports('orders'),
    });
  });
});