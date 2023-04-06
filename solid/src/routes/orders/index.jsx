import { useRouteData, createRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import OrderCard from '../../components/OrderCard';

export function routeData() {
  return createServerData$(async () => {
    const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders`);
    const data = await response.json();
    return data;
  });
}

function Orders() {
  const orders = useRouteData();

  return (
    <div className='sm:grid sm:grid-cols-2'>
      <For each={orders()}>{order =>
        <div key={order.id} className='m-2 flex justify-center items-center'>
          <OrderCard order={order} />
        </div>}
      </For>
    </div>
  );
}

export default Orders;