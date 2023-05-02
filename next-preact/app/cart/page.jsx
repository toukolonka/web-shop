'use client';

import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import OrderForm from '@/components/OrderForm';
import CartProductCard from '@/components/CartProductCard';

function Cart() {
  const {
    cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        {cartProducts.map(product =>
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
      { cartProducts.length > 0
        ?
        <>
          <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {getTotalPrice()}€</strong>
          <OrderForm />
        </>
        :
        <p className='mx-2'>Shopping cart is empty</p>
      }
    </>
  );
}

export default Cart;