import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import OrderForm from '../components/OrderForm';
import CartProductCard from '../components/CartProductCard';

function Cart() {
  const {
    cartProducts,
    getTotalPrice,
  } = useContext(CartContext);

  const totalPrice = getTotalPrice();

  return (
    <>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        {cartProducts.map(product =>
          <div key={product.id}  className='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
            />
          </div>
        )}
      </div>
      { cartProducts.length > 0
        ?
        <>
          <strong className='mx-2 xs:text-left text-center font-bold'>Total price: {totalPrice}€</strong>
          <OrderForm />
        </>
        :
        <p className='mx-2'>Shopping cart is empty</p>
      }
    </>
  );
}

export default Cart;