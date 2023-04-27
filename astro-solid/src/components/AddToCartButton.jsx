import classNames from "classnames";
import { createSignal, createEffect } from "solid-js";
import { useStore } from '@nanostores/solid';
import { addToCart, removeFromCart, cartProducts } from '../store/cartStore';

export default function AddToCartButton(props) {
  const [productQuantity, setProductQuantity] = createSignal(0);
  const $cartProducts = useStore(cartProducts);
  
  createEffect(() => {
    setProductQuantity($cartProducts().find(p => p.id === props.product.id)?.quantity);
  }, [$cartProducts]);

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
    </div>
  );
}
