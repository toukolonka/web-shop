import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Order() {
  const id = Number(useParams().id);
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
      <h1 className='my-4'>Order Summary</h1>
      <ul>
        <li>Order ID: {order.id}</li>
        <li>User ID: {order.user}</li>
        <li>Date: {order.createdAt}</li>
        <li>Recipient name: {order.recipient.firstName} {order.recipient.lastName}</li>
        <li>Delivery address: {order.recipient.address}</li>
      </ul>
      <h2 className='mt-4'>Products</h2>
      {
        order.products.map(product =>
          <div key={product.id}>
            {product.name} ({product.quantity} * {product.price}€)
          </div>
        )
      }
    </>
  );
}

export default Order;