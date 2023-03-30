import { component$, useContext, $ } from '@builder.io/qwik';
import CartContext, { addToCart, removeFromCart, getProductQuantity, getTotalPrice } from '~/context/CartContext';
import CartProductCard from '~/components/CartProductCard';
import OrderForm from '~/components/OrderForm';

export default component$(() => {
  const cartProducts = useContext(CartContext);
  const totalPrice = getTotalPrice(cartProducts);

  return (
    <>
      <div class='xs:grid sm:block xs:grid-cols-2'>
        {cartProducts.value.map(product =>
          <div key={product.id}  class='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
              removeFromCart={$(() => removeFromCart(product.id, cartProducts))}
              addToCart={$(() => addToCart(product, cartProducts))}
              count={getProductQuantity(product.id, cartProducts)}
            />
          </div>
        )}
      </div>
      { cartProducts.value.length > 0
        ?
        <>
          <strong class='mx-2 xs:text-left text-center font-bold'>Total price: {totalPrice}€</strong>
          <OrderForm />
        </>
        :
        <p class='mx-2'>Shopping cart is empty</p>
      }
    </>
  );
});