import React, { memo } from 'react';
import { format } from 'date-fns';

function OrderCard(props) {
  return (
    <div className='m-2 flex justify-center items-center'>
      <a href={`/orders/${props.order.id}`} className="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <strong className="mb-2 card-text text-white">Order on {format(new Date(props.order.createdAt), 'dd.MM.yyyy HH:mm')}</strong>
        <p className="card-secondary-text text-gray-300">{props.order.totalPrice}€ ({props.order.totalProductCount} products)</p>
      </a>
    </div>
  );
}

export default memo(OrderCard);