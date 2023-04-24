import React from 'react';
import { useStore } from '@nanostores/preact';
import classNames from 'classnames';
import { addToCart, removeFromCart, cartProducts } from '../store/cartStore';

export default function AddToCartButton(props) {
  const $cartProducts = useStore(cartProducts);
  const productQuantityNumber = $cartProducts.find(p => p.id === props.product.id)?.quantity;
  const productQuantity = typeof productQuantityNumber !== 'undefined' ? productQuantityNumber : 0;
  return (
    <div className='inline-flex justify-center'>
      {productQuantity > 0
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
          <div className={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{productQuantity}</div>
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
