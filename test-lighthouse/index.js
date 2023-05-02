import fs from 'fs';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import {
  printTable,
  apps,
  baseUrls,
  numberOfTests,
  configs,
} from './utils.js';

async function test(name, i, page, path) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'error', output: 'json', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse(`${baseUrls[name]}/${path}`, options, configs.lighthouseMobileConfig);

  const report = runnerResult.report;
  fs.writeFileSync(`./reports/${name}-${page}-${i}-audit.json`, report);

  await chrome.kill();
}

// const page = process.argv[2];

if (!fs.existsSync('./reports')){
  fs.mkdirSync('./reports');
}

const pages = ['home', 'products', 'product', 'orders', 'order', 'cart'];

for (const page of pages) {
  let path = page;

  if (page === 'home') {
    path = '';
  } else if (page === 'order') {
    const response = await fetch('http://localhost:8080/api/orders');
    const orders = await response.json();
    const exampleOrder = orders[0];
    const id = exampleOrder.id;
    path = `orders/${id}`;
  } else if (page === 'product') {
    const response = await fetch('http://localhost:8080/api/products/');
    const products = await response.json();
    const exampleProduct = products[0];
    const id = exampleProduct.id;
    path = `products/${id}`;
  }

  for (let i = 0; i < numberOfTests; i++) {
    for (let j = 0; j < apps.length; j++) {
      console.log(`Testing page: ${page}, app: ${apps[j]}, index: ${i}`)
      await test(apps[j], i, page, path);
    }
  }

  printTable(page);
}