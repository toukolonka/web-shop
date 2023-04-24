'use client';

import React, { useContext } from 'react';
import classNames from 'classnames';
import { CartContext } from '@/context/CartContext';

export default function AddToCartButton(props) {
  const { addToCart, removeFromCart, getProductQuantity } = useContext(CartContext);
  return (
    <div className='inline-flex justify-center'>
      {getProductQuantity(props.product.id) > 0
        ?
        <div className='inline'>
          <button
            className='btn w-10 inline-flex justify-center btn-red'
            onClick={ (e) => {
              e.preventDefault();
              removeFromCart(props.product.id);
            }}
            data-testid="leftButton"
          >
            -
          </button>
          <div className={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{getProductQuantity(props.product.id)}</div>
          <button
            className='btn w-10 inline-flex justify-center btn-blue'
            onClick={ (e) => {
              e.preventDefault();
              addToCart(props.product);
            }}
            data-testid="rightButton"
          >
            +
          </button>
        </div>
        :
        <button data-testid="addToCartButton" onClick={() => addToCart(props.product)} className='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
  );
}
