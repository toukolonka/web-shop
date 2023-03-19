'use client';

import React, { useState, useEffect } from 'react';
import OrderCard from '@/components/OrderCard';

function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch(`http://localhost:8080/api/orders?userId=${localStorage.getItem('user')}`);
      const orderData = await response.json();
      setOrders(orderData);
    }
    fetchOrder();
  }, []);

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