import { component$, useContext, $ } from '@builder.io/qwik';
import CartContext, { addToCart, removeFromCart, getProductQuantity } from '~/context/CartContext';
import classNames from 'classnames';

export default component$((props) => {
  const cartProducts = useContext(CartContext);

  return (
    <div class='inline-flex justify-center'>
      {getProductQuantity(props.product.id, cartProducts) > 0
        ?
        <div class='inline'>
          <button
            class='btn w-10 inline-flex justify-center btn-red'
            preventdefault:click 
            onClick$={() => removeFromCart(props.product.id, cartProducts)}
            data-testid="leftButton"
          >
            -
          </button>
          <div class={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{getProductQuantity(props.product.id, cartProducts)}</div>
          <button
            class='btn w-10 inline-flex justify-center btn-blue'
            preventdefault:click 
            onClick$={() => addToCart(props.product, cartProducts)}
            data-testid="rightButton"
          >
            +
          </button>
        </div>
        :
        <button data-testid="addToCartButton" onClick$={() => addToCart(props.product, cartProducts)} class='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
  );
});
