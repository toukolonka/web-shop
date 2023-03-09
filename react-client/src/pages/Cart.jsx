import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PlusMinusButton from '../components/PlusMinusButton';
import { CartContext } from '../context/CartContext';
import OrderForm from '../components/OrderForm';

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
      <h1 className='my-4'>Shopping cart</h1>
      {cartProducts.map(product =>
        <div key={product.id}  className='my-2 w-2/3 flex justify-between items-center'>
          <span className='pr-4'>Product name: {product.name}</span>
          <PlusMinusButton
            count={getProductQuantity(product.id)}
            decrementCount={() => removeFromCart(product.id)}
            incrementCount={() => addToCart(product)}
          />
        </div>
      )}
      { cartProducts.length > 0
        ?
        <>
          <h2 className='my-4'>Total price: {getTotalPrice()}€</h2>
          <OrderForm placeOrder={placeOrder} />
        </>
        :
        <p>Shopping cart is empty</p>
      }
    </>
  );
}

export default Cart;