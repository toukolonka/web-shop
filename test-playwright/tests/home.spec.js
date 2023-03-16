const { test } = require('@playwright/test');
const { chromium } = require('playwright');
const { startFlow } = require('lighthouse/lighthouse-core/fraggle-rock/api.js');
const fs = require('fs');
const open = require('open');

test.describe('home page', () => {
  test('open home page', async () => {
    const port = 9222;
    const browser = await chromium.launch({
      args: [`--remote-debugging-port=${port}`, '--disable-extensions'],
      headless: false,
    });
    const page = await browser.newPage();

    page.target = function() {
      return {
        createCDPSession() {
          return page.context().newCDPSession(page);
        },
      };
    };

    const flow = await startFlow(page, { name: 'Single Navigation' });
    await flow.navigate('http://localhost:3000/');

    const productLink = await page.getByTestId('products-home-page-item');

    await flow.snapshot({ stepName: 'Home page opened' });

    productLink.click();

    await flow.snapshot({ stepName: 'Products page opened' });

    /* await page.getByPlaceholder('Search').fill('10');
    await page.getByPlaceholder('Search').blur(); */

    page.target = function() {
      return {
        createCDPSession() {
          return page.context().newCDPSession(page);
        },
      };
    };

    await page.getByText('product 10').click();

    const addToCartButton = page.getByText('Add to cart');

    await flow.snapshot({ stepName: 'Product page opened' });

    await addToCartButton.click();

    await page.getByRole('link', { name: 'Cart (1)' }).click();

    await page.getByText('Place order');

    await flow.snapshot({ stepName: 'Cart page opened' });

    await browser.close();

    const report = await flow.generateReport();
    fs.writeFileSync('flow.report.html', report);
    open('flow.report.html', { wait: false });
  });
});