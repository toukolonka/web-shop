/* eslint-disable qwik/loader-location */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import AddToCartButton from '~/components/AddToCartButton';

export const useProductDetails = routeLoader$(async (requestEvent) => {
  const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/products/${requestEvent.params.id}`);
  const product = await response.json();
  return product;
});

export default component$(() => {
  const product = useProductDetails();
  return (
    <div class='mx-2'>
      <div>
        <img
          class={'rounded-t-lg rounded-lg'}
          src={`https://picsum.photos/seed/${product.value.id}/600/300`}
          crossOrigin="anonymous"
          alt="Product image"
          width="600"
          height="300"
        />
        <div class="flex flex-col items-center p-5">
          <strong class='mb-2 card-text text-gray-700'>{product.value.name}</strong>
          <p class='mb-3 card-secondary-text text-gray-600'>{product.value.price}€</p>
          <AddToCartButton product={product.value} />
        </div>
      </div>
    </div>
  );
});

export const onStaticGenerate = async () => {
  const response = await fetch(`http://${process.env.VITE_SERVER_HOST_NAME}:8080/api/products/`);
  const data = await response.json();
  const ids = data.map((product) => product.id);

  return {
    params: ids.map((id) => {
      return { id };
    }),
  };
};