import { component$ } from '@builder.io/qwik';

export default component$((props) => {
  const datetime = new Date(props.order.createdAt);

  return (
    <a href={`/orders/${props.order.id}`} class="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
      <strong class="mb-2 card-text text-white">Order on {datetime.toLocaleDateString('fi-FI')}</strong>
      <p class="card-secondary-text text-gray-300">{props.order.totalPrice}€ ({props.order.totalProductCount} products)</p>
    </a>
  );
});