import React, { memo } from 'react';
import CustomLink from './CustomLink';

const Menu = (props) => {
  return (
    <>
      { props.isOpen &&
      <div className='border-t-2'>
        <div className='flex justify-between text-sm font-medium ml-4 mr-1'>
          <CustomLink to="/" onClick={props.setOpen}>
            Home
          </CustomLink>
          <CustomLink to="/products" onClick={props.setOpen}>
            Products
          </CustomLink>
          <CustomLink to="/orders" onClick={props.setOpen}>
            Orders
          </CustomLink>
        </div>
      </div>}
    </>
  );
};
export default memo(Menu);