import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard(props) {
  const datetime = new Date(props.order.createdAt);

  return (
    <Link to={`/orders/${props.order.id}`} className="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
      <strong className="mb-2 card-text text-white">Order on {datetime.toLocaleDateString('fi-FI')}</strong>
      <p className="card-secondary-text text-gray-300">{props.order.totalPrice}€ ({props.order.totalProductCount} products)</p>
    </Link>
  );
}

export default OrderCard;