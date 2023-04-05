import { component$, useResource$, Resource } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { useLocation } from '@builder.io/qwik-city';
import CartProductCard from '~/components/CartProductCard';
import { format } from 'date-fns';

export default component$(() => {
  const id = useLocation().params.id;

  const order = useResource$(async () => {
    const response = isBrowser ?
      await fetch(`http://localhost:8080/api/orders/${id}`) :
      await fetch(`http://host.docker.internal:8080/api/orders/${id}`);
    const data = await response.json();
    return data;
  });

  return (
    <Resource
      value={order}
      onPending={() => <div>Loading...</div>}
      onResolved={(order) => (
        <>
          <h1 class='text-center'>Order on {format(new Date(order.createdAt), 'dd.MM.yyyy HH:mm')}</h1>
          <div class='m-4 text-center xs:text-start'>
            <p>Recipient name: {order.recipientInfo.firstName} {order.recipientInfo.lastName}</p>
            <p>Delivery address: {order.recipientInfo.address}</p>
            <p>Total price: {order.totalPrice}€</p>
          </div>
          <h2 class='m-4 text-center xs:text-start'>Products</h2>
          <div class='xs:grid xs:grid-cols-2 sm:block'>
            {order.products.map(productObject =>
              <div key={productObject.product.id} class='mx-2'>
                <CartProductCard product={productObject.product} quantity={productObject.quantity} noButtons />
              </div>
            )}
          </div>
        </>
      )}
    />
  );
});