import { component$, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import CartContext from './context/CartContext';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const cartProducts = useSignal([]);

  useVisibleTask$(() => {
    if (localStorage.getItem('cart')) {
      cartProducts.value = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
  });

  useContextProvider(
    CartContext,
    useSignal([])
  );

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-slate-200">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
