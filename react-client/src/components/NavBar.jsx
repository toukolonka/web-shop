import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function NavBar() {
  const { getTotalQuantity } = useContext(CartContext);
  return (
    <nav className="border-gray-200 py-1 bg-white">
      <div className="container flex flex-wrap products-center justify-between mx-auto max-w-xl w-full">
        <Link to="/" className="flex products-center ml-2 sm:ml-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">Web Shop</span>
        </Link>
        <div className="block w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/cart">Cart ({getTotalQuantity()})</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props} className='block py-2 pr-4 hover:scale-110 text-gray-700'>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;