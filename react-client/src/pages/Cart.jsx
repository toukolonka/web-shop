import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import OrderForm from '../components/OrderForm';
import CartProductCard from '../components/CartProductCard';

function Cart() {
  const {
    cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalPrice,
    checkout,
  } = useContext(CartContext);
  const history = useHistory();

  async function placeOrder(recipientInfo) {
    checkout();
    const response = await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      body: JSON.stringify(
        {
          orderProducts: cartProducts,
          recipientInfo,
          userId: localStorage.getItem('user'),
        }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const orderId = await response.json();
    history.push(`/order/${orderId}`);
  }

  return (
    <>
      {cartProducts.map(product =>
        <div key={product.id}  className='my-2 w-full flex justify-between items-center'>
          <CartProductCard
            product={product}
            removeFromCart={() => removeFromCart(product.id)}
            addToCart={() => addToCart(product)}
            count={getProductQuantity(product.id)}
          />
        </div>
      )}
      { cartProducts.length > 0
        ?
        <>
          <h2 className='my-4 xs:text-left text-center font-bold'>Total price: {getTotalPrice()}€</h2>
          <OrderForm placeOrder={placeOrder} />
        </>
        :
        <p>Shopping cart is empty</p>
      }
    </>
  );
}

export default Cart;