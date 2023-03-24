import React from 'react';
import { useStore } from '@nanostores/react';
import CartProductCard from './CartProductCard';
import { cartProducts, removeFromCart, addToCart, getProductQuantity } from '../store/cartStore';
import OrderForm from './OrderForm';

function Cart() {
  const $cartProducts = useStore(cartProducts);
  const totalPrice = $cartProducts.length > 0
    ? $cartProducts.reduce((sum, product) => sum += product.quantity * product.price, 0)
    : 0;
  return (
    <div className='text-center mb-4' >
      <div className='xs:grid sm:block xs:grid-cols-2'>
        {$cartProducts.map(product =>
          <div key={product.id}  className='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
              addToCart={() => addToCart(product)}
              count={getProductQuantity(product.id)}
            />
          </div>
        )}
      </div>
      { $cartProducts.length > 0
        ?
        <>
          <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {totalPrice}€</strong>
          <OrderForm />
        </>
        :
        <p className='mx-2'>Shopping cart is empty</p>
      }
    </div>
  );
}

export default Cart;