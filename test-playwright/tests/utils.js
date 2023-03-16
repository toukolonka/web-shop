const { chromium } = require('playwright');
const { test } = require('@playwright/test');

function getRandomInt() {
  const min = 4000;
  const max = 5000;
  return Math.floor(Math.random() * (max - min) + min);
}

const lighthouseTest = test.extend({
  port: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      // eslint-disable-next-line no-unused-vars
      await use(getRandomInt());
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`, '--disable-extensions'],
      });
      await use(browser);
    },
    { scope: 'worker' },
  ],
});

module.exports = { lighthouseTest };