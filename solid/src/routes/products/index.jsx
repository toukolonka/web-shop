import { createResource } from "solid-js";
import { A } from "solid-start";
import ProductList from '../../components/ProductList';

async function fetchProducts() {
  const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/products/`);
  const data = await response.json();
  return data;
}

function Products() {
  const [products] = createResource(fetchProducts);

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