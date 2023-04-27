import { component$, useResource$, Resource } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { useLocation } from '@builder.io/qwik-city';
import OrderProductCard from '~/components/OrderProductCard';

export default component$(() => {
  const id = useLocation().params.id;

  const order = useResource$(async () => {
    const response = isBrowser ?
      await fetch(`http://localhost:8080/api/orders/${id}`) :
      await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/${id}`);
    const data = await response.json();
    return data;
  });

  const getDatetimeString = (createdAt) => {
    const datetime = new Date(createdAt);
    const options = { hour: 'numeric', minute: 'numeric' };
    return `${datetime.toLocaleDateString('fi-FI')} ${datetime.toLocaleTimeString('en-GB', options)}`;
  };

  return (
    <Resource
      value={order}
      onPending={() => <div>Loading...</div>}
      onResolved={(order) => (
        <>
          <h1 class='text-center'>Order on {getDatetimeString(order.createdAt)}</h1>
          <div class='m-4 text-center xs:text-start'>
            <p>Recipient name: {order.recipientInfo.firstName} {order.recipientInfo.lastName}</p>
            <p>Delivery address: {order.recipientInfo.address}</p>
            <p>Total price: {order.totalPrice}€</p>
          </div>
          <h2 class='m-4 text-center xs:text-start'>Products</h2>
          <div class='xs:grid xs:grid-cols-2 sm:block'>
            {order.products.map(productObject =>
              <div key={productObject.product.id} class='mx-2'>
                <OrderProductCard product={productObject.product} quantity={productObject.quantity} />
              </div>
            )}
          </div>
        </>
      )}
    />
  );
});