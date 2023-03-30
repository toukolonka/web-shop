import { component$, useSignal, useContext } from '@builder.io/qwik';

import CustomLink from './CustomLink';
import Burger from './Burger';
import Menu from './Menu';
import CartContext, { getTotalQuantity } from '~/context/CartContext';

export default component$(() => {
  const cartProducts = useContext(CartContext);
  const menuOpen = useSignal(false);

  return (
    <nav class="border-gray-200 py-1 px-2 bg-white sticky top-0">
      <div class="container flex flex-wrap items-center justify-between mx-auto max-w-xl w-full h-16">
        <a href="/" class="hidden xs:flex items-center sm:ml-0">
          <span class="ml-4 self-center text-xl font-semibold whitespace-nowrap">Web Shop</span>
        </a>
        <div class="hidden xs:block ml-2 w-auto" id="navbar-default">
          <div class="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
            <CustomLink dataTestId="productsNavLink" href="/products">Products</CustomLink>
            <CustomLink dataTestId="ordersNavLink" href="/orders">Orders</CustomLink>
            <CustomLink dataTestId="cartNavLink" href="/cart">Cart ({getTotalQuantity(cartProducts)})</CustomLink>
          </div>
        </div>
        <div class='flex ml-2 items-center xs:hidden justify-between w-full text-sm font-medium py-4 px-1'>
          <Burger isOpen={menuOpen} />
          <CustomLink href="/cart">Cart ({getTotalQuantity(cartProducts)})</CustomLink>
        </div>
      </div>
      <div class='xs:hidden'>
        <Menu isOpen={menuOpen} />
      </div>
    </nav>
  );
});
