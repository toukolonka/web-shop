/* eslint-disable qwik/loader-location */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import OrderProductCard from '~/components/OrderProductCard';

export const useOrderDetails = routeLoader$(async (requestEvent) => {
  const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/${requestEvent.params.id}`);
  const order = await response.json();
  return order;
});

export default component$(() => {
  const order = useOrderDetails();

  const getDatetimeString = (createdAt) => {
    const datetime = new Date(createdAt);
    const options = { hour: 'numeric', minute: 'numeric' };
    return `${datetime.toLocaleDateString('fi-FI')} ${datetime.toLocaleTimeString('en-GB', options)}`;
  };

  return (
    <>
      <h1 class='text-center'>Order on {getDatetimeString(order.value.createdAt)}</h1>
      <div class='m-4 text-center xs:text-start'>
        <p>Recipient name: {order.value.recipientInfo.firstName} {order.value.recipientInfo.lastName}</p>
        <p>Delivery address: {order.value.recipientInfo.address}</p>
        <p>Total price: {order.value.totalPrice}€</p>
      </div>
      <h2 class='m-4 text-center xs:text-start'>Products</h2>
      <div class='xs:grid xs:grid-cols-2 sm:block'>
        {order.value.products.map(productObject =>
          <div key={productObject.product.id} class='mx-2'>
            <OrderProductCard product={productObject.product} quantity={productObject.quantity} />
          </div>
        )}
      </div>
    </>
  );
});