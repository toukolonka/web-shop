import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import OrderProductCard from '../../components/OrderProductCard';

export function routeData({ params }) {
  return createServerData$(async ([id]) => {
    const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/${id}`);
    const data = await response.json();
    return data;
  }, { key: () => [params.id] });
}

function Order() {
  const order = useRouteData();

  const getDatetimeString = (createdAt) => {
    const datetime = new Date(createdAt);
    const options = { hour: 'numeric', minute: 'numeric' };
    return `${datetime.toLocaleDateString('fi-FI')} ${datetime.toLocaleTimeString('en-GB', options)}`;
  };

  return (
    <Show
      when={order()}
      fallback={<div>Loading...</div>}
    >
      <h1 className='text-center'>Order on {getDatetimeString(order().createdAt)}</h1>
      <div className='m-4 text-center xs:text-start'>
        <p>Recipient name: {order().recipientInfo.firstName} {order().recipientInfo.lastName}</p>
        <p>Delivery address: {order().recipientInfo.address}</p>
        <p>Total price: {order().totalPrice}€</p>
      </div>
      <h2 className='m-4 text-center xs:text-start'>Products</h2>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        <For each={order().products}>{productObject =>
          <div key={productObject.product.id} className='mx-2'>
            <OrderProductCard product={productObject.product} quantity={productObject.quantity} />
          </div>}
        </For>
      </div>
    </Show>
  );
}

export default Order;