import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import AddToCartButton from "../../components/AddToCartButton";

export function routeData({ params }) {
  return createServerData$(async ([id]) => {
    const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/products/${id}`);
    const data = await response.json();
    return data;
  }, { key: () => [params.id] });
}
 
export default function Product() {
  const product = useRouteData();

  return (
    <Show
      when={product()}
      fallback={<div>Loading...</div>}
    >
      <div className='mx-2'>
        <div>
          <img
            className={'rounded-t-lg rounded-lg'}
            src={`https://picsum.photos/seed/${product().id}/600/300`}
            crossOrigin="anonymous"
            alt="Product image"
            width="600"
            height="300"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col items-center p-5">
            <strong className='mb-2 card-text text-gray-700'>{product().name}</strong>
            <p className='mb-3 card-secondary-text text-gray-600'>{product().price}€</p>
            <AddToCartButton product={product()} />
          </div>
        </div>
      </div>
    </Show>
  );
}