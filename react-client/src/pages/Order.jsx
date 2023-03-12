import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import CartProductCard from '../components/CartProductCard';

function Order() {
  const id = useParams().id;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch(`http://localhost:3001/api/orders/${id}`);
      const orderData = await response.json();
      setOrder(orderData);
    }
    fetchOrder();
  }, []);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='text-center'>Order on {format(new Date(order.createdAt), 'dd.MM.yyyy HH:mm')}</h1>
      <p className='text-center'>Recipient name: {order.recipientInfo.firstName} {order.recipientInfo.lastName}</p>
      <p className='text-center'>Delivery address: {order.recipientInfo.address}</p>
      <p className='text-center'>Total price: {order.totalPrice}€</p>
      <h2 className='my-4 text-center'>Products</h2>
      {
        order.products.map(productObject =>
          <div key={productObject.product.id} className='mx-2'>
            <CartProductCard product={productObject.product} quantity={productObject.quantity} noButtons />
          </div>
        )
      }
    </>
  );
}

export default Order;