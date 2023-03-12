import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Burger from './Burger';
import { CartContext } from '../context/CartContext';
import Menu from './Menu';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalQuantity } = useContext(CartContext);

  const toggleHamburger = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="border-gray-200 py-1 bg-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-xl w-full h-16">
          <Link to="/" className="hidden xs:flex items-center ml-2 sm:ml-0">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">Web Shop</span>
          </Link>
          <div className="hidden xs:block ml-2 w-auto" id="navbar-default">
            <div className="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/orders">Orders</CustomLink>
              <CustomLink to="/cart">Cart ({getTotalQuantity()})</CustomLink>
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

export function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  const isActive = to !== '/' && location.pathname.startsWith(to) || location.pathname === to;

  return (
    <Link
      to={to}
      {...props}
      className={classNames('block', 'py-2', 'pr-4', 'hover:scale-110', { 'text-blue-700': isActive }, { 'text-gray-700': !isActive })}
    >
      {children}
    </Link>
  );
}

export default NavBar;