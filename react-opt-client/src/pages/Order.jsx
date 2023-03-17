import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import CartProductCard from '../components/CartProductCard';

function Order() {
  const id = useParams().id;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch(`http://localhost:8080/api/orders/${id}`);
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
      <div className='m-4 text-center xs:text-start'>
        <p>Recipient name: {order.recipientInfo.firstName} {order.recipientInfo.lastName}</p>
        <p>Delivery address: {order.recipientInfo.address}</p>
        <p>Total price: {order.totalPrice}€</p>
      </div>
      <h2 className='m-4 text-center xs:text-start'>Products</h2>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        {
          order.products.map(productObject =>
            <div key={productObject.product.id} className='mx-2'>
              <CartProductCard product={productObject.product} quantity={productObject.quantity} noButtons />
            </div>
          )
        }
      </div>
    </>
  );
}

export default Order;