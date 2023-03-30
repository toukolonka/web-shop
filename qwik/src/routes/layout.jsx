import { component$, Slot, useVisibleTask$, useContext } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import NavBar from '~/components/NavBar.jsx';
import CartContext from '~/context/CartContext';

// eslint-disable-next-line qwik/loader-location
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: 'hello world',
  };
});

export default component$(() => {
  const cartProducts = useContext(CartContext);

  useVisibleTask$(() => {
    if (localStorage.getItem('cart')) {
      cartProducts.value = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart', JSON.stringify(cartProducts.value));
    }
  });

  return (
    <div class="page">
      <main>
        <NavBar />
        <div class='mx-auto max-w-xl w-full my-2'>
          <div class='mx-2'>
            <Slot />
          </div>
        </div>
      </main>
    </div>
  );
});
