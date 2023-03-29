import React, { memo } from 'react';
import CustomLink from './CustomLink';

const Menu = (props) => {
  return (
    <>
      { props.isOpen &&
      <div className='border-t-2'>
        <div className='flex justify-between text-sm font-medium ml-4 mr-1'>
          <CustomLink href="/" onClick={props.setOpen}>
            Home
          </CustomLink>
          <CustomLink href="/products" onClick={props.setOpen}>
            Products
          </CustomLink>
          <CustomLink href="/orders" onClick={props.setOpen}>
            Orders
          </CustomLink>
        </div>
      </div>}
    </>
  );
};
export default memo(Menu);