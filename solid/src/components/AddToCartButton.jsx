import { createSignal, createEffect } from "solid-js";
import { HydrationScript } from "solid-js/web";
import classNames from "classnames";

import { useCart } from '../context/CartContext';

export default function AddToCartButton(props) {
  const { addToCart, removeFromCart, cartProducts } = useCart();
  const [productQuantity, setProductQuantity] = createSignal(0);

  createEffect(() => {
    setProductQuantity(cartProducts().find(product => product.id === props.product.id)?.quantity);
  });

  return (
    <div className='inline-flex justify-center'>
      {productQuantity() > 0
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
          <div className={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{productQuantity()}</div>
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
      <HydrationScript />
    </div>
  );
}
