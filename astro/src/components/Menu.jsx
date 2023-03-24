import React, { memo } from 'react';
import CustomLink from './CustomLink';

const Menu = (props) => {
  return (
    <div className='menu hidden border-t-2'>
      <div className='flex justify-between text-sm font-medium ml-4 mr-1'>
        <CustomLink pathname={props.pathname} href="/">
            Home
        </CustomLink>
        <CustomLink pathname={props.pathname} href="/products">
            Products
        </CustomLink>
        <CustomLink pathname={props.pathname} href="/orders">
            Orders
        </CustomLink>
      </div>
    </div>
  );
};
export default memo(Menu);