import React from 'react';

function PlusMinusButton(props) {
  return (
    <div className='inline'>
      <button className='btn btn-red inline' onClick={props.decrementCount}>-</button>
      <span className='px-4'>{props.count}</span>
      <button className='btn btn-blue inline' onClick={props.incrementCount}>+</button>
    </div>
  );
}

export default PlusMinusButton;