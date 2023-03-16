import { launch } from 'puppeteer';
import fs from 'fs';
import open from 'open';
import {startFlow} from 'lighthouse/lighthouse-core/fraggle-rock/api.js';

(async () => {
    const browser = await launch({
      args:[
        '--start-maximized'
      ],
      headless: false
    });
    const page = await browser.newPage();

    const options = {
      configContext: {
        settingsOverrides: {
          screenEmulation: {
            mobile: false,
            width: 1800,
            height: 1080,
          },
          formFactor: 'desktop',
        },
      },
    }

    const flow = await startFlow(page, {name: 'Single Navigation'});
    await flow.navigate('http://localhost:3000/', options);

    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1920,
            height: 1080
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('http://localhost:3000/');
        await Promise.all(promises);
    }
    await flow.snapshot({stepName: 'Home page opened'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=products-home-page-item]'
            ],
            [
                'xpath///*[@data-testid="products-home-page-item"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=products-home-page-item]'
            ],
            [
                'xpath///*[@data-testid="products-home-page-item"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 104.39996337890625,
            y: 157,
          },
        });
    }
    await flow.snapshot({stepName: 'Products page opened'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Search'
            ],
            [
                '#root > div > div > form > input.input.flex-grow.flex-shrink-0.w-full.inline-block'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[1]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Search'
            ],
            [
                '#root > div > div > form > input.input.flex-grow.flex-shrink-0.w-full.inline-block'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[1]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 109.39996337890625,
            y: 17,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Search'
            ],
            [
                '#root > div > div > form > input.input.flex-grow.flex-shrink-0.w-full.inline-block'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[1]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Search'
            ],
            [
                '#root > div > div > form > input.input.flex-grow.flex-shrink-0.w-full.inline-block'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[1]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '3')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '3');
        } else {
          await changeElementValue(element, '3');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Minimum price'
            ],
            [
                '#root > div > div > form > input:nth-child(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[2]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Minimum price'
            ],
            [
                '#root > div > div > form > input:nth-child(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[2]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 49.39996337890625,
            y: 24.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Minimum price'
            ],
            [
                '#root > div > div > form > input:nth-child(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[2]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Minimum price'
            ],
            [
                '#root > div > div > form > input:nth-child(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[2]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '1000')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '1000');
        } else {
          await changeElementValue(element, '1000');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Maximum price'
            ],
            [
                '#root > div > div > form > input:nth-child(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[3]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Maximum price'
            ],
            [
                '#root > div > div > form > input:nth-child(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[3]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 210.39996337890625,
            y: 9.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Maximum price'
            ],
            [
                '#root > div > div > form > input:nth-child(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[3]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Maximum price'
            ],
            [
                '#root > div > div > form > input:nth-child(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/input[3]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '2000')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '2000');
        } else {
          await changeElementValue(element, '2000');
        }
    }
    await flow.snapshot({stepName: 'Search terms filled'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#root > div > div > div.xs\\:grid.xs\\:grid-cols-2 > div > a > div > div'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[1]/div/a/div/div'
            ],
            [
                'text/product 131300€'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#root > div > div > div.xs\\:grid.xs\\:grid-cols-2 > div > a > div > div'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[1]/div/a/div/div'
            ],
            [
                'text/product 131300€'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 160.5999755859375,
            y: 15.79998779296875,
          },
        });
    }
    await flow.snapshot({stepName: 'Product page opened'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Add to cart'
            ],
            [
                '#root > div > div > div > div > div > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div/div/button'
            ],
            [
                'text/Add to cart'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Add to cart'
            ],
            [
                '#root > div > div > div > div > div > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div/div/button'
            ],
            [
                'text/Add to cart'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 67.39996337890625,
            y: 30,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/+'
            ],
            [
                '#root > div > div > div > div > div > div > div > button.btn.w-10.inline-flex.justify-center.btn-blue'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div/div/div/button[2]'
            ],
            [
                'text/+'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/+'
            ],
            [
                '#root > div > div > div > div > div > div > div > button.btn.w-10.inline-flex.justify-center.btn-blue'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div/div/div/button[2]'
            ],
            [
                'text/+'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 21.39996337890625,
            y: 21,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Cart (2)'
            ],
            [
                '#navbar-default > div > a:nth-child(3)'
            ],
            [
                'xpath///*[@id="navbar-default"]/div/a[3]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Cart (2)'
            ],
            [
                '#navbar-default > div > a:nth-child(3)'
            ],
            [
                'xpath///*[@id="navbar-default"]/div/a[3]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 36.40625,
            y: 23.799999237060547,
          },
        });
    }
    await flow.snapshot({stepName: 'Cart page opened'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#first_name'
            ],
            [
                'xpath///*[@id="first_name"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#first_name'
            ],
            [
                'xpath///*[@id="first_name"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 216.39996337890625,
            y: 14.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#first_name'
            ],
            [
                'xpath///*[@id="first_name"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#first_name'
            ],
            [
                'xpath///*[@id="first_name"]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'Touko')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'Touko');
        } else {
          await changeElementValue(element, 'Touko');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#last_name'
            ],
            [
                'xpath///*[@id="last_name"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#last_name'
            ],
            [
                'xpath///*[@id="last_name"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 68.39996337890625,
            y: 23.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#last_name'
            ],
            [
                'xpath///*[@id="last_name"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#last_name'
            ],
            [
                'xpath///*[@id="last_name"]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'Lonka')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'Lonka');
        } else {
          await changeElementValue(element, 'Lonka');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#address'
            ],
            [
                'xpath///*[@id="address"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#address'
            ],
            [
                'xpath///*[@id="address"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 219.39996337890625,
            y: 28.79998779296875,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#address'
            ],
            [
                'xpath///*[@id="address"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#address'
            ],
            [
                'xpath///*[@id="address"]'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'Address 123')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'Address 123');
        } else {
          await changeElementValue(element, 'Address 123');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Place order'
            ],
            [
                '#root > div > div > form > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/button'
            ],
            [
                'text/Place order'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Place order'
            ],
            [
                '#root > div > div > form > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/form/button'
            ],
            [
                'text/Place order'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 277.39996337890625,
            y: 25.199981689453125,
          },
        });
    }
    await flow.snapshot({stepName: 'Modal opened'});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Confirm'
            ],
            [
                '#portal > div.fixed.top-1\\/2.left-1\\/2.-translate-y-1\\/2.-translate-x-1\\/2.bg-white.p-12.z-\\[1000\\].rounded > div > button.btn.btn-green.mx-2.mb-2.w-24'
            ],
            [
                'xpath///*[@id="portal"]/div[2]/div/button[2]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Confirm'
            ],
            [
                '#portal > div.fixed.top-1\\/2.left-1\\/2.-translate-y-1\\/2.-translate-x-1\\/2.bg-white.p-12.z-\\[1000\\].rounded > div > button.btn.btn-green.mx-2.mb-2.w-24'
            ],
            [
                'xpath///*[@id="portal"]/div[2]/div/button[2]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 48.39996337890625,
            y: 4.5999755859375,
          },
        });
    }
    await flow.snapshot({stepName: 'Order page opened'});

    await browser.close();

    const report = await flow.generateReport();
    fs.writeFileSync('flow.report.html', report);
    open('flow.report.html', {wait: false});

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
      await element.select(value);
      await element.evaluateHandle((e) => {
        e.blur();
        e.focus();
      });
    }

    async function changeElementValue(element, value) {
      await element.focus();
      await element.evaluate((input, value) => {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
