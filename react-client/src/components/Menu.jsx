import React from 'react';
import { CustomLink } from './NavBar';

const Menu = (props) => {
  return (
    <div>
      { props.isOpen &&
      <div className='flex justify-between text-sm font-medium mx-4'>
        <CustomLink to="/" onClick={props.setOpen}>
          Home
        </CustomLink>
        <CustomLink to="/products" onClick={props.setOpen}>
          Products
        </CustomLink>
        <CustomLink to="/orders" onClick={props.setOpen}>
          Orders
        </CustomLink>
      </div>}
    </div>
  );
};
export default Menu;