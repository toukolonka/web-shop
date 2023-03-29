import React, { memo } from 'react';

function Burger(props){
  return(
    <div className="space-y-1.5 cursor-pointer hamburger" onClick={props.toggle}>
      <div className='hamburger-line1 w-8 h-1 bg-gray-700'></div>
      <div className='hamburger-line2 w-8 h-1 bg-gray-700'></div>
      <div className='hamburger-line3 w-8 h-1 bg-gray-700'></div>
    </div>
  );
}

export default memo(Burger);