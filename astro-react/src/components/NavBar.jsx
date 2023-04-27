import React, { useState, useCallback, useEffect } from 'react';
import { useStore } from '@nanostores/react';

import Burger from './Burger';
import Menu from './Menu';
import CustomLink from './CustomLink';
import { cartProducts } from '../store/cartStore';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const $cartProducts = useStore(cartProducts);

  useEffect(() => {
    setTotalQuantity($cartProducts.reduce((sum, product) => sum += product.quantity, 0));
  }, []);

  const toggleHamburger = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  return (
    <>
      <nav className="border-gray-200 py-1 px-2 bg-white sticky top-0 z-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-xl w-full h-16">
          <a href="/" className="hidden xs:flex items-center sm:ml-0">
            <span className="ml-4 self-center text-xl font-semibold whitespace-nowrap ">Web Shop</span>
          </a>
          <div className="hidden xs:block ml-2 w-auto" id="navbar-default">
            <div className="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
              <CustomLink dataTestId="productsNavLink" href="/products">Products</CustomLink>
              <CustomLink dataTestId="ordersNavLink" href="/orders">Orders</CustomLink>
              <CustomLink dataTestId="cartNavLink" href="/cart">Cart ({totalQuantity})</CustomLink>
            </div>
          </div>
          <div className='flex ml-2 items-center xs:hidden justify-between w-full text-sm font-medium py-4 px-1'>
            <Burger isOpen={menuOpen} toggle={toggleHamburger} />
            <CustomLink href="/cart">Cart ({totalQuantity})</CustomLink>
          </div>
        </div>
        <div className='xs:hidden'>
          <Menu isOpen={menuOpen} setOpen={toggleHamburger} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;