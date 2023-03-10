import React, { useState, useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch(`http://localhost:3001/api/orders?userId=${localStorage.getItem('user')}`);
      const orderData = await response.json();
      setOrders(orderData);
    }
    fetchOrder();
  }, []);

  if (!orders) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='my-4'>My orders</h1>
      {orders.map(order => <div key={order.id}>{order.id}</div>)}
    </>
  );
}

export default Orders;