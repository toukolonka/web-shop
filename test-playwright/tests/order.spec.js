import { test, expect } from '@playwright/test';

const apps = ['react', 'reactOpt', 'preact', 'preactOpt', 'next', 'astro', 'astroPreact'];

const baseUrls = {
  react: 'http://localhost:3000',
  reactOpt: 'http://localhost:3001',
  preact: 'http://localhost:3002',
  preactOpt: 'http://localhost:3003',
  next: 'http://localhost:3004',
  astro: 'http://localhost:3005',
  nextPreact: 'http://localhost:3006',
  astroPreact: 'http://localhost:3007',
};

test.describe('order page', () => {
  Array.from({ length: 10 }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      test(`${name} order a product ${i}`, async ({ page }) => {
        const startTime = new Date();

        const url = `${baseUrls[name]}/`;
        await page.goto(url);

        await page.getByTestId('productsItem').click();

        await page.getByTestId('productCard100').click();

        await page.getByTestId('addToCartButton').click();

        await page.getByTestId('cartNavLink').click();

        await expect((page).getByTestId('firstNameInput')).toBeVisible();

        await page.getByTestId('firstNameInput').fill('Touko');
        await page.getByTestId('lastNameInput').fill('Lonka');
        await page.getByTestId('addressInput').fill('Address 123');

        await page.getByTestId('placeOrderButton').click();

        await page.getByTestId('confirmButton').click();

        const endTime = new Date();
        const timeDiff = endTime - startTime;
        console.log(timeDiff);
      })
    )
  );
});