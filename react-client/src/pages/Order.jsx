import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

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
      <h1 className='my-4'>Order Summary</h1>
      <ul>
        <li>Order ID: {order.id}</li>
        <li>User ID: {order.userId}</li>
        <li>Date: {format(new Date(order.createdAt), 'dd.MM.yyyy')}</li>
        <li>Recipient name: {order.recipientInfo.firstName} {order.recipientInfo.lastName}</li>
        <li>Delivery address: {order.recipientInfo.address}</li>
      </ul>
      <h2 className='mt-4'>Products</h2>
      {
        order.products.map(productObject =>
          <div key={productObject.product.id}>
            {productObject.product.name} ({productObject.quantity} * {productObject.product.price}€)
          </div>
        )
      }
    </>
  );
}

export default Order;