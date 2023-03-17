import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import { CartContext } from '../context/CartContext';
import Menu from './Menu';
import CustomLink from './CustomLink';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalQuantity } = useContext(CartContext);

  const toggleHamburger = React.useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  return (
    <>
      <nav className="border-gray-200 py-1 bg-white sticky top-0 z-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-xl w-full h-16">
          <Link to="/" className="hidden xs:flex items-center sm:ml-0">
            <span className="ml-4 self-center text-xl font-semibold whitespace-nowrap ">Web Shop</span>
          </Link>
          <div className="hidden xs:block ml-2 w-auto" id="navbar-default">
            <div className="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
              <CustomLink dataTestId="productsNavLink" to="/products">Products</CustomLink>
              <CustomLink dataTestId="ordersNavLink" to="/orders">Orders</CustomLink>
              <CustomLink dataTestId="cartNavLink" to="/cart">Cart ({getTotalQuantity()})</CustomLink>
            </div>
          </div>
          <div className='flex ml-2 items-center xs:hidden justify-between w-full text-sm font-medium py-4 px-1'>
            <Burger isOpen={menuOpen} toggle={toggleHamburger} />
            <CustomLink to="/cart">Cart ({getTotalQuantity()})</CustomLink>
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