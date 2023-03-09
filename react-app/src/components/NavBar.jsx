import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="border-gray-200 py-1 bg-white">
      <div className="container flex flex-wrap products-center justify-between mx-auto max-w-xl w-full">
        <Link to="/" className="flex products-center ml-2 sm:ml-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">Web Shop</span>
        </Link>
        <div className="block w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/cart">Cart</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const classNames = 'block py-2 pr-4 text-gray-700 hover:scale-110';
  const className = isActive ? (classNames + ' text-blue-700') : classNames;

  return (
    <li>
      <Link to={to} {...props} className={className}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;