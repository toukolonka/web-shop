import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function OrderCard(props) {
  return (
    <Link to={`/orders/${props.order.id}`} className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <strong className="mb-2 card-text text-white">Order on {format(new Date(props.order.createdAt), 'dd.MM.yyyy HH:mm')}</strong>
      <p className="card-secondary-text text-gray-300">{props.order.totalPrice}€ ({props.order.totalProductCount} products)</p>
    </Link>
  );
}

export default OrderCard;