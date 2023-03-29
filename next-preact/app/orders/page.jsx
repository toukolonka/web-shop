import React from 'react';
import OrderCard from '@/components/OrderCard';

async function getOrders() {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    `http://${process.env.SERVER_HOST_NAME}:8080/api/orders`,
    { cache: 'no-store' }
  );
  const orderData = await response.json();

  return orderData;
}

async function Orders() {
  const orders = await getOrders();
  if (!orders) {
    return <div>Loading...</div>;
  }

  if (orders.length === 0) {
    return <div className='m-4'>No orders.</div>;
  }

  return (
    <div className='sm:grid sm:grid-cols-2'>
      {orders.map(order =>
        <div key={order.id} className='m-2 flex justify-center items-center'>
          <OrderCard order={order} />
        </div>)}
    </div>
  );
}

export default Orders;