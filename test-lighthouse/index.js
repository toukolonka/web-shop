import fs from 'fs';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import lighthouseDefaultConfig from './node_modules/lighthouse/core/config/default-config.js';
import lighthouseDesktopConfig from './node_modules/lighthouse/core/config/lr-desktop-config.js';
import lighthouseMobileConfig from './node_modules/lighthouse/core/config/lr-mobile-config.js';

const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance'], port: chrome.port};
const runnerResult = await lighthouse('http://localhost:3006/products', options, lighthouseDefaultConfig);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
fs.writeFileSync('./reports/lhreport.json', reportHtml);

// `.lhr` is the Lighthouse Result as a JS object
console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

await chrome.kill();