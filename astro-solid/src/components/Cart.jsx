import { useStore } from '@nanostores/solid';
import OrderForm from './OrderForm';
import CartProductCard from './CartProductCard';
import { cartProducts, removeFromCart, addToCart, getProductQuantity } from '../store/cartStore';

function Cart() {
  const $cartProducts = useStore(cartProducts);
  const totalPrice = $cartProducts().length > 0
    ? $cartProducts().reduce((sum, product) => sum += product.quantity * product.price, 0)
    : 0;

  return (
    <>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        <For each={$cartProducts()}>{product =>
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
        when={$cartProducts().length > 0}
        fallback={<p className='mx-2'>Shopping cart is empty</p>}
      >
        <>
          <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {totalPrice}€</strong>
          <OrderForm />
        </>
      </Show>
    </>
  );
}

export default Cart;