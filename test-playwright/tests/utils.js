const { chromium } = require('playwright');
const { test } = require('@playwright/test');
const fs = require('fs');
const glob = require('glob');

function getRandomInt() {
  const min = 4000;
  const max = 5000;
  return Math.floor(Math.random() * (max - min) + min);
}

const lighthouseTest = test.extend({
  port: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      await use(getRandomInt());
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`, '--disable-extensions'],
        // headless: false,
      });
      await use(browser);
    },
    { scope: 'worker' },
  ],
});

function getReportsConfiguration(prefix) {
  return {
    formats: {
      json: true,
      html: true,
    },
    name: `${prefix}-audit`,
    directory: 'reports',
  };
}

function median(values) {
  const amount = values.length;

  if (amount % 2) {
    // For example, length is 5 -> pick 2nd from a zero-indexed array
    return values[Math.floor(amount / 2)];
  }

  // For example, length is 6 -> pick average of indices 2 and 3
  return (
    (values[Math.floor(amount / 2)] + values[Math.floor(amount / 2) - 1]) / 2
  );
}

function average(values) {
  const sum = values.reduce((a, b) => a + b, 0);

  return sum / values.length;
}

function readAudits(pageType, auditType) {
  const files = glob.sync('reports/' + pageType + '*-audit.json');

  const audits = files.map((f) => fs.readFileSync(f)).map((d) => JSON.parse(d));

  return audits.map((a) => a['audits'][auditType]['numericValue']);
}

function printTable() {
  // Check the output JSON files for possible audits
  const auditTypes = [
    'first-contentful-paint',
    'largest-contentful-paint',
    'interactive',
    'max-potential-fid',
    'server-response-time',
  ];
  const calculatedRows = {
    react: {},
    reactOpt: {},
  };

  auditTypes.forEach((auditType) => {
    const reactValues = readAudits('react-', auditType);
    const reactOptValues = readAudits('react-opt-', auditType);

    calculatedRows.react[auditType] = {
      firstRun: reactValues[0],
      median: median(reactValues.slice(1)),
      average: average(reactValues.slice(1)),
    };

    calculatedRows.reactOpt[auditType] = {
      firstRun: reactOptValues[0],
      median: median(reactOptValues.slice(1)),
      average: average(reactOptValues.slice(1)),
    };
  });

  class Table {
    constructor(name, fcp1, fcp2, fcp3, lcp1, lcp2, lcp3, tti1, tti2, tti3, fid1, fid2, fid3, srt1, srt2, srt3) {
      this.name = name;
      this.fcp1 = fcp1;
      this.fcp_med = fcp2;
      this.fcp_avg = fcp3;
      this.lcp1 = lcp1;
      this.lcp_med = lcp2;
      this.lcp_avg = lcp3;
      this.tti1 = tti1;
      this.tti_med = tti2;
      this.tti_avg = tti3;
      this.fid1 = fid1;
      this.fid_med = fid2;
      this.fid_avg = fid3;
      this.srt1 = srt1;
      this.srt_med = srt2;
      this.srt_avg = srt3;
    }
  }

  function getTable(name, property) {
    return new Table(
      name,
      Math.round(calculatedRows[property]['first-contentful-paint'].firstRun),
      Math.round(calculatedRows[property]['first-contentful-paint'].median),
      Math.round(calculatedRows[property]['first-contentful-paint'].average),
      Math.round(calculatedRows[property]['largest-contentful-paint'].firstRun),
      Math.round(calculatedRows[property]['largest-contentful-paint'].median),
      Math.round(calculatedRows[property]['largest-contentful-paint'].average),
      Math.round(calculatedRows[property]['interactive'].firstRun),
      Math.round(calculatedRows[property]['interactive'].median),
      Math.round(calculatedRows[property]['interactive'].average),
      Math.round(calculatedRows[property]['max-potential-fid'].firstRun),
      Math.round(calculatedRows[property]['max-potential-fid'].median),
      Math.round(calculatedRows[property]['max-potential-fid'].average),
      Math.round(calculatedRows[property]['server-response-time'].firstRun),
      Math.round(calculatedRows[property]['server-response-time'].median),
      Math.round(calculatedRows[property]['server-response-time'].average)
    );
  }

  const rows = [
    ['React', 'react'],
    ['React optimized', 'reactOpt']
  ];

  // eslint-disable-next-line no-console
  console.table(rows.map((row) => getTable(row[0], row[1])));
}

module.exports = { lighthouseTest, getReportsConfiguration, printTable };