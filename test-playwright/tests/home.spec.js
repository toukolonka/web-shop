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

lighthouseTest.describe('home page', () => {
  lighthouseTest.afterAll(() => {
    printTable('home');
  });
  Array.from({ length: numberOfTests }, (_, i) => i + 1).forEach((i) =>
    apps.forEach((name) =>
      lighthouseTest(`${name} home page ${i}`, async ({ page, port }) => {
        const url = `${baseUrls[name]}/`;
        await page.goto(url);

        await playAudit({
          page,
          port,
          thresholds,
          config,
          reports: getReportsConfiguration(`${name}-home-${i}`),
        });
      })
    )
  );
});