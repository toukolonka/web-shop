import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import ProductList from '../../components/ProductList';

export function routeData() {
  return createServerData$(async () => {
    const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/products/`);
    const data = await response.json();
    return data;
  });
}

function Products() {
  const products = useRouteData();

  return (
    <Show
      when={products()}
      fallback={<div>Loading...</div>}
    >
      <ProductList
        products={products()}
      />
    </Show>
  );
}

export default Products;