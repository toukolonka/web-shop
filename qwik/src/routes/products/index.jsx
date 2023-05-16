/* eslint-disable qwik/loader-location */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import ProductList from '~/components/ProductList';

export const useProductsDetails = routeLoader$(async () => {
  const response = await fetch(`http://${import.meta.env.VITE_SERVER_HOST_NAME}:8080/api/products/`);
  const data = await response.json();
  return data;
});

export default component$(() => {
  const products = useProductsDetails();

  return (
    <ProductList products={products.value}/>
  );
});