import React from 'react';
import { useStore } from '@nanostores/preact';
import DoubleIconButton from './DoubleIconButton';
import { addToCart, removeFromCart, cartProducts } from '../store/cartStore';

export default function AddToCartButton(props) {
  const $cartProducts = useStore(cartProducts);
  const productQuantityNumber = $cartProducts.find(p => p.id === props.product.id)?.quantity;
  const productQuantity = typeof productQuantityNumber !== 'undefined' ? productQuantityNumber : 0;
  return (
    <div className='inline-flex justify-center'>
      {productQuantity > 0
        ?
        <DoubleIconButton
          leftIcon="-"
          rightIcon="+"
          leftButtonClassNames='btn-red'
          rightButtonClassNames='btn-blue'
          handleLeftClick={() => removeFromCart(props.product.id)}
          handleRightClick={() => addToCart(props.product)}
          count={productQuantity}
        />
        :
        <button data-testid="addToCartButton" onClick={() => addToCart(props.product)} className='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
  );
}
