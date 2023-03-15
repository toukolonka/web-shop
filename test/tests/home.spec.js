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

lighthouseTest.describe('home page', () => {
  lighthouseTest('open home page', async ({ page, port }) => {
    await page.goto('/');

    await expect((page).getByText('Welcome to the Web Shop!')).toBeVisible();

    await playAudit({
      page,
      port,
      thresholds,
    });
  });

  lighthouseTest('navigate to products page', async ({ page, port }) => {
    await page.goto('/');

    await page.getByTestId('products-home-page-item').click();

    await expect(page.getByPlaceholder('Search')).toBeVisible();
    await expect(page.getByPlaceholder('Minimum price')).toBeVisible();
    await expect(page.getByPlaceholder('Maximum price')).toBeVisible();

    await playAudit({
      page,
      port,
      thresholds,
    });
  });

  lighthouseTest('navigate to orders page', async ({ page, port }) => {
    await page.goto('/');

    await page.getByTestId('orders-home-page-item').click();

    await expect(page.getByText('No orders')).toBeVisible();

    await playAudit({
      page,
      port,
      thresholds,
    });
  });
});