import { createResource } from "solid-js";
import { useParams } from "solid-start";
import { format } from 'date-fns';
import CartProductCard from '../../components/CartProductCard';

async function fetchOrder(id) {
  const response = await fetch(
    `http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/orders/${id}`,
  );
  const data = await response.json();
  return data;
}

function Order() {
  const { id } = useParams();
  const [order] = createResource(id, fetchOrder);

  return (
    <Show
      when={order()}
      fallback={<div>Loading...</div>}
    >
      <h1 className='text-center'>Order on {format(new Date(order().createdAt), 'dd.MM.yyyy HH:mm')}</h1>
      <div className='m-4 text-center xs:text-start'>
        <p>Recipient name: {order().recipientInfo.firstName} {order().recipientInfo.lastName}</p>
        <p>Delivery address: {order().recipientInfo.address}</p>
        <p>Total price: {order().totalPrice}€</p>
      </div>
      <h2 className='m-4 text-center xs:text-start'>Products</h2>
      <div className='xs:grid sm:block xs:grid-cols-2'>
        <For each={order().products}>{productObject =>
          <div key={productObject.product.id} className='mx-2'>
            <CartProductCard product={productObject.product} quantity={productObject.quantity} noButtons />
          </div>}
        </For>
      </div>
    </Show>
  );
}

export default Order;