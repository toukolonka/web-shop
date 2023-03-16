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
            width: 1847,
            height: 1068,
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
            width: 1847,
            height: 1068
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('http://localhost:3000/');
        await Promise.all(promises);
    }
    await flow.snapshot({stepName: 'Home page opened', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=productsItem] > strong'
            ],
            [
                'xpath///*[@data-testid="productsItem"]/strong'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=productsItem] > strong'
            ],
            [
                'xpath///*[@data-testid="productsItem"]/strong'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 15.71246337890625,
            y: 8,
          },
        });
    }
    await flow.snapshot({stepName: 'Products page opened', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Search'
            ],
            [
                '[data-testid=searchButton]'
            ],
            [
                'xpath///*[@data-testid="searchButton"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Search'
            ],
            [
                '[data-testid=searchButton]'
            ],
            [
                'xpath///*[@data-testid="searchButton"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 101.39996337890625,
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
                '[data-testid=searchButton]'
            ],
            [
                'xpath///*[@data-testid="searchButton"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Search'
            ],
            [
                '[data-testid=searchButton]'
            ],
            [
                'xpath///*[@data-testid="searchButton"]'
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
                '[data-testid=minPriceInput]'
            ],
            [
                'xpath///*[@data-testid="minPriceInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Minimum price'
            ],
            [
                '[data-testid=minPriceInput]'
            ],
            [
                'xpath///*[@data-testid="minPriceInput"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 97.39996337890625,
            y: 31.399993896484375,
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
                '[data-testid=minPriceInput]'
            ],
            [
                'xpath///*[@data-testid="minPriceInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Minimum price'
            ],
            [
                '[data-testid=minPriceInput]'
            ],
            [
                'xpath///*[@data-testid="minPriceInput"]'
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
                '[data-testid=maxPriceInput]'
            ],
            [
                'xpath///*[@data-testid="maxPriceInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Maximum price'
            ],
            [
                '[data-testid=maxPriceInput]'
            ],
            [
                'xpath///*[@data-testid="maxPriceInput"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 117.39996337890625,
            y: 19.399993896484375,
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
                '[data-testid=maxPriceInput]'
            ],
            [
                'xpath///*[@data-testid="maxPriceInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Maximum price'
            ],
            [
                '[data-testid=maxPriceInput]'
            ],
            [
                'xpath///*[@data-testid="maxPriceInput"]'
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
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'html'
            ],
            [
                'xpath//html'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'html'
            ],
            [
                'xpath//html'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 556,
            y: 233,
          },
        });
    }
    await flow.snapshot({stepName: 'Search terms filled', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=productCard1300] > div'
            ],
            [
                'xpath///*[@data-testid="productCard1300"]/div'
            ],
            [
                'text/product 131300€'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=productCard1300] > div'
            ],
            [
                'xpath///*[@data-testid="productCard1300"]/div'
            ],
            [
                'text/product 131300€'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 50.5999755859375,
            y: 8.79998779296875,
          },
        });
    }
    await flow.snapshot({stepName: 'Product page opened', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Add to cart'
            ],
            [
                '[data-testid=addToCartButton]'
            ],
            [
                'xpath///*[@data-testid="addToCartButton"]'
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
                '[data-testid=addToCartButton]'
            ],
            [
                'xpath///*[@data-testid="addToCartButton"]'
            ],
            [
                'text/Add to cart'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 84.39996337890625,
            y: 31,
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
                '[data-testid=rightButton]'
            ],
            [
                'xpath///*[@data-testid="rightButton"]'
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
                '[data-testid=rightButton]'
            ],
            [
                'xpath///*[@data-testid="rightButton"]'
            ],
            [
                'text/+'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 33.39996337890625,
            y: 31,
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
                '[data-testid=cartNavLink]'
            ],
            [
                'xpath///*[@data-testid="cartNavLink"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Cart (2)'
            ],
            [
                '[data-testid=cartNavLink]'
            ],
            [
                'xpath///*[@data-testid="cartNavLink"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 40.40625,
            y: 2.799999237060547,
          },
        });
    }
    await flow.snapshot({stepName: 'Cart page opened', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=firstNameInput]'
            ],
            [
                'xpath///*[@data-testid="firstNameInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=firstNameInput]'
            ],
            [
                'xpath///*[@data-testid="firstNameInput"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 155.39996337890625,
            y: 13.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=firstNameInput]'
            ],
            [
                'xpath///*[@data-testid="firstNameInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=firstNameInput]'
            ],
            [
                'xpath///*[@data-testid="firstNameInput"]'
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
                '[data-testid=lastNameInput]'
            ],
            [
                'xpath///*[@data-testid="lastNameInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=lastNameInput]'
            ],
            [
                'xpath///*[@data-testid="lastNameInput"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 35.39996337890625,
            y: 11.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=lastNameInput]'
            ],
            [
                'xpath///*[@data-testid="lastNameInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=lastNameInput]'
            ],
            [
                'xpath///*[@data-testid="lastNameInput"]'
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
                '[data-testid=addressInput]'
            ],
            [
                'xpath///*[@data-testid="addressInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=addressInput]'
            ],
            [
                'xpath///*[@data-testid="addressInput"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 178.39996337890625,
            y: 17.79998779296875,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '[data-testid=addressInput]'
            ],
            [
                'xpath///*[@data-testid="addressInput"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '[data-testid=addressInput]'
            ],
            [
                'xpath///*[@data-testid="addressInput"]'
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
                '[data-testid=placeOrderButton]'
            ],
            [
                'xpath///*[@data-testid="placeOrderButton"]'
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
                '[data-testid=placeOrderButton]'
            ],
            [
                'xpath///*[@data-testid="placeOrderButton"]'
            ],
            [
                'text/Place order'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 321.39996337890625,
            y: 25.199981689453125,
          },
        });
    }
    await flow.snapshot({stepName: 'Modal opened', ...options});
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Confirm'
            ],
            [
                '[data-testid=confirmButton]'
            ],
            [
                'xpath///*[@data-testid="confirmButton"]'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Confirm'
            ],
            [
                '[data-testid=confirmButton]'
            ],
            [
                'xpath///*[@data-testid="confirmButton"]'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 20.39996337890625,
            y: 15.5999755859375,
          },
        });
    }
    await flow.snapshot({stepName: 'Order page opened', ...options});

    await browser.close();

    const report = await flow.generateReport();
    fs.writeFileSync('reports/buy.report.html', report);
    open('reports/buy.report.html', {wait: false});

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
