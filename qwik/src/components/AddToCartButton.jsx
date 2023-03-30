import { component$, useContext, $ } from '@builder.io/qwik';
import CartContext, { addToCart, removeFromCart, getProductQuantity } from '~/context/CartContext';

import DoubleIconButton from './DoubleIconButton';


export default component$((props) => {
  const cartProducts = useContext(CartContext);

  return (
    <div class='inline-flex justify-center'>
      {getProductQuantity(props.product.id, cartProducts) > 0
        ?
        <DoubleIconButton
          leftIcon="-"
          rightIcon="+"
          leftButtonClassNames='btn-red'
          rightButtonClassNames='btn-blue'
          handleLeftClick={$(() => removeFromCart(props.product.id, cartProducts))}
          handleRightClick={$(() => addToCart(props.product, cartProducts))}
          count={getProductQuantity(props.product.id, cartProducts)}
        />
        :
        <button data-testid="addToCartButton" onClick$={() => addToCart(props.product, cartProducts)} class='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
  );
});
