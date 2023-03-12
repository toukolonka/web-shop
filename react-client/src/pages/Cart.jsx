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
    getTotalQuantity,
    checkout,
  } = useContext(CartContext);
  const history = useHistory();

  const totalPrice = getTotalPrice();
  const totalProductCount = getTotalQuantity();

  async function placeOrder(recipientInfo) {
    const response = await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      body: JSON.stringify(
        {
          orderProducts: cartProducts,
          recipientInfo,
          userId: localStorage.getItem('user'),
          totalPrice,
          totalProductCount
        }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    checkout();
    const orderId = await response.json();
    history.push(`/order/${orderId}`);
  }

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
          <h2 className='my-4 xs:text-left text-center font-bold'>Total price: {totalPrice}€</h2>
          <OrderForm placeOrder={placeOrder} />
        </>
        :
        <p>Shopping cart is empty</p>
      }
    </>
  );
}

export default Cart;