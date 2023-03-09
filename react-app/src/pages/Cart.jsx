import React, { useContext } from 'react';
import PlusMinusButton from '../components/PlusMinusButton';
import { CartContext } from '../context/CartContext';

function Cart() {
  const {
    cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalPrice
  } = useContext(CartContext);

  console.log(cartProducts);

  return (
    <>
      <h1>Cart</h1>
      {cartProducts.map(product =>
        <div key={product.id}  className='my-2'>
          <span className='pr-4'>ID: {product.id}</span>
          <PlusMinusButton
            count={getProductQuantity(product.id)}
            decrementCount={() => removeFromCart(product.id)}
            incrementCount={() => addToCart(product)}
          />
        </div>
      )}
      <h2>Total price: {getTotalPrice()}€</h2>
    </>
  );
}

export default Cart;