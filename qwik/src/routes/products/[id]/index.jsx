import { component$, useResource$, Resource } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import AddToCartButton from '~/components/AddToCartButton';

export default component$(() => {
  const id = useLocation().params.id;

  const product = useResource$(async () => {
    const response = await fetch(`http://localhost:8080/api/products/${id}`);
    const data = await response.json();
    return data;
  });

  return (
    <Resource
      value={product}
      onPending={() => <div>Loading...</div>}
      onResolved={(product) => (
        <div class='mx-2'>
          <div>
            <img
              class={'rounded-t-lg rounded-lg'}
              src={`https://picsum.photos/seed/${product.id}/600/300`}
              crossOrigin="anonymous"
              alt="Product image"
              width="600"
              height="300"
            />
            <div class="flex flex-col items-center p-5">
              <strong class='mb-2 card-text text-gray-700'>{product.name}</strong>
              <p class='mb-3 card-secondary-text text-gray-600'>{product.price}€</p>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      )}
    />
  );
});
