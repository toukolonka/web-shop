import React from 'react';
import { format } from 'date-fns';
import CartProductCard from '@/components/CartProductCard';

async function getOrder(id) {
  const response = await fetch(
    `http://localhost:8080/api/orders/${id}`,
    {
      next: { revalidate: 10 },
    },
  );
  const data = await response.json();

  return data;
}

async function Order({ params }) {
  const order = await getOrder(params.id);

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