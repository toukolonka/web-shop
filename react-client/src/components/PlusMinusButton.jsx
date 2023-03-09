import React from 'react';

function PlusMinusButton(props) {
  return (
    <div className='inline'>
      <button className='btn btn-red inline' onClick={props.decrementCount}>-</button>
      <div className='inline-flex w-12 justify-center'>{props.count}</div>
      <button className='btn btn-blue inline' onClick={props.incrementCount}>+</button>
    </div>
  );
}

export default PlusMinusButton;