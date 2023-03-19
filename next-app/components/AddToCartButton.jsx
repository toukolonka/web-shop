'use client';

import React, { useContext } from 'react';
import DoubleIconButton from './DoubleIconButton';
import { CartContext } from '@/context/CartContext';

export default function AddToCartButton(props) {
  const { addToCart, removeFromCart, getProductQuantity } = useContext(CartContext);
  return (
    <div className='inline-flex justify-center'>
      {getProductQuantity(props.product.id) > 0
        ?
        <DoubleIconButton
          leftIcon="-"
          rightIcon="+"
          leftButtonClassNames='btn-red'
          rightButtonClassNames='btn-blue'
          handleLeftClick={() => removeFromCart(props.product.id)}
          handleRightClick={() => addToCart(props.product)}
          count={getProductQuantity(props.product.id)}
        />
        :
        <button data-testid="addToCartButton" onClick={() => addToCart(props.product)} className='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
  );
}
