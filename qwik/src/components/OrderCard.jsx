import { component$ } from '@builder.io/qwik';
import { format } from 'date-fns';

export default component$((props) => {
  return (
    <a href={`/orders/${props.order.id}`} class="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
      <strong class="mb-2 card-text text-white">Order on {format(new Date(props.order.createdAt), 'dd.MM.yyyy HH:mm')}</strong>
      <p class="card-secondary-text text-gray-300">{props.order.totalPrice}€ ({props.order.totalProductCount} products)</p>
    </a>
  );
});