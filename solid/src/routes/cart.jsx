import { isServer } from "solid-js/web";

import { useCart } from '~/context/CartContext';
import OrderForm from '~/components/OrderForm';
import CartProductCard from '~/components/CartProductCard';

function Cart() {
  const {
    cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  return (
    <Show
      when={cartProducts()}
      fallback={<div>Loading...</div>}
    >
      <div className='xs:grid sm:block xs:grid-cols-2'>
        <For each={cartProducts()}>{product =>
          <div key={product.id}  className='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
              addToCart={() => addToCart(product)}
              count={() => getProductQuantity(product.id)}
            />
          </div>}
        </For>
      </div>
      <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {isServer ? 0 : getTotalPrice()}€</strong>
      <Show
        when={cartProducts() && cartProducts().length > 0}
        fallback={<p className='mx-2'>Shopping cart is empty</p>}
      >
        <OrderForm />
      </Show>
    </Show>
  );
}

export default Cart;