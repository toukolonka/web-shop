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

const apps = ['react', 'reactOpt', 'preact'];

const baseUrls = {
  react: 'http://localhost:3000',
  reactOpt: 'http://localhost:3001',
  preact: 'http://localhost:3002'
};

testSuites(apps);

function testSuites(names) {
  lighthouseTest.describe('home page', () => {
    lighthouseTest.afterAll(() => {
      printTable('home');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
        lighthouseTest(`${name} home page ${i}`, async ({ page, port }) => {
          const url = `${baseUrls[name]}/`;
          await page.goto(url);

          await playAudit({
            page,
            port,
            thresholds,
            reports: getReportsConfiguration(`${name}-home-${i}`),
          });
        })
      )
    );
  });

  lighthouseTest.describe('products page', () => {
    lighthouseTest.afterAll(() => {
      printTable('products');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
        lighthouseTest(`${name} products page ${i}`, async ({ page, port }) => {
          const url = `${baseUrls[name]}/products`;
          await page.goto(url);

          await playAudit({
            page,
            port,
            thresholds,
            reports: getReportsConfiguration(`${name}-products-${i}`),
          });
        })
      )
    );
  });

  lighthouseTest.describe('product page', () => {
    lighthouseTest.afterAll(() => {
      printTable('product');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
        lighthouseTest(`${name} product page ${i}`, async ({ page, port }) => {
          const url = `${baseUrls[name]}/products`;
          await page.goto(url);

          await page.getByTestId('productCard100').click();

          await playAudit({
            page,
            port,
            thresholds,
            reports: getReportsConfiguration(`${name}-product-${i}`),
          });
        })
      )
    );
  });

  lighthouseTest.describe('cart page', () => {
    lighthouseTest.afterAll(() => {
      printTable('cart');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
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
            reports: getReportsConfiguration(`${name}-cart-${i}`),
          });
        })
      )
    );
  });

  lighthouseTest.describe('order page', () => {
    lighthouseTest.afterAll(() => {
      printTable('order');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
        lighthouseTest(`${name} order page ${i}`, async ({ page, port }) => {
          const url = `${baseUrls[name]}/products`;
          await page.goto(url);

          await page.getByTestId('productCard100').click();

          await page.getByTestId('addToCartButton').click();

          const cartUrl = `${baseUrls[name]}/cart`;
          await page.goto(cartUrl);

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
  });

  lighthouseTest.describe('orders page', () => {
    lighthouseTest.afterAll(() => {
      printTable('orders');
    });
    Array.from({ length: 5 }, (_, i) => i + 1).forEach((i) =>
      names.forEach((name) =>
        lighthouseTest(`${name} orders page ${i}`, async ({ page, port }) => {
          const url = `${baseUrls[name]}/products`;
          await page.goto(url);

          await page.getByTestId('productCard100').click();

          await page.getByTestId('addToCartButton').click();

          const cartUrl = `${baseUrls[name]}/cart`;
          await page.goto(cartUrl);

          await page.getByTestId('firstNameInput').fill('Touko');
          await page.getByTestId('lastNameInput').fill('Lonka');
          await page.getByTestId('addressInput').fill('Address 123');

          await page.getByTestId('placeOrderButton').click();

          await page.getByTestId('confirmButton').click();

          await expect((page).getByText(/Order on/)).toBeVisible();

          const ordersUrl = `${baseUrls[name]}/orders`;
          await page.goto(ordersUrl);

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
  });
}