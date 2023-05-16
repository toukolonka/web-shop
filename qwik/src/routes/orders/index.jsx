/* eslint-disable qwik/loader-location */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import OrderCard from '~/components/OrderCard';

export const useOrdersDetails = routeLoader$(async () => {
  const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/`);
  const data = await response.json();
  return data;
});

export default component$(() => {
  const orders = useOrdersDetails();

  return (
    <div class='sm:grid sm:grid-cols-2'>
      {orders.value.map(order =>
        <div key={order.id} class='m-2 flex justify-center items-center'>
          <OrderCard order={order} />
        </div>)}
    </div>
  );
});