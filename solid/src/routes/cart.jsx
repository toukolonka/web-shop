import { createSignal, createEffect } from "solid-js";
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

  const [products, setProducts] = createSignal([]);

  createEffect(() => {
    setProducts(cartProducts());
  });

  return (
    <>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        <For each={products()}>{product =>
          <div key={product.id} className='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
              addToCart={() => addToCart(product)}
              count={() => getProductQuantity(product.id)}
            />
          </div>}
        </For>
      </div>
      <Show
        when={products().length > 0}
        fallback={<p className='mx-2'>Shopping cart is empty</p>}
      >
        <>
          <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {isServer ? 0 : getTotalPrice()}€</strong>
          <OrderForm />
        </>
      </Show>
    </>
  );
}

export default Cart;