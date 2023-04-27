import { component$, useResource$, Resource } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import OrderCard from '~/components/OrderCard';

export default component$(() => {
  const orders = useResource$(async () => {
    const response = isBrowser ?
      await fetch(`http://localhost:8080/api/orders/`) :
      await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/`);
    const data = await response.json();
    return data;
  });

  return (
    <Resource
      value={orders}
      onPending={() => <div>loading...</div>}
      onResolved={orders => (
        <div class='sm:grid sm:grid-cols-2'>
          {orders.map(order =>
            <div key={order.id} class='m-2 flex justify-center items-center'>
              <OrderCard order={order} />
            </div>)}
        </div>
      )}
    />
  );
});