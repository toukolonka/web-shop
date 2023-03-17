import classNames from 'classnames';
import React from 'react';

function Burger(props){
  return(
    <div className="space-y-1.5 cursor-pointer" onClick={props.toggle}>
      <div className={classNames('w-8 h-1 bg-gray-700', { 'rotate-45 translate-y-[0.35em]': props.isOpen })}></div>
      <div className={classNames('w-8 h-1 bg-gray-700', { 'hidden': props.isOpen })}></div>
      <div className={classNames('w-8 h-1 bg-gray-700', { '-rotate-45 -translate-y-[0.35em]': props.isOpen })}></div>
    </div>
  );
}

export default React.memo(Burger);