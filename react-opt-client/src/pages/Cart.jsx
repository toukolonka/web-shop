import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import OrderForm from '../components/OrderForm';
import CartProductCard from '../components/CartProductCard';
import DoubleIconButton from '../components/DoubleIconButton';

function Cart() {
  const {
    cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalPrice,
  } = useContext(CartContext);

  const totalPrice = useMemo(() => getTotalPrice(), [cartProducts]);

  return (
    <>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        {cartProducts.map(product =>
          <div key={product.id}  className='m-2 flex justify-between items-center'>
            <CartProductCard
              product={product}
            >
              <div className='m-4'>
                <DoubleIconButton
                  leftIcon="-"
                  rightIcon="+"
                  textClassNames='text-white'
                  leftButtonClassNames='btn-red'
                  rightButtonClassNames='btn-blue'
                  handleLeftClick={removeFromCart}
                  handleRightClick={addToCart}
                  count={getProductQuantity(product.id)}
                />
              </div>
            </CartProductCard>
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