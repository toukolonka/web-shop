import { component$, useResource$, Resource } from '@builder.io/qwik';
import ProductList from '~/components/ProductList';

export default component$(() => {
  const products = useResource$(async () => {
    const response = await fetch(
      'http://localhost:8080/api/products'
    );
    const data = await response.json();
    return data;
  });

  return (
    <>
      <Resource
        value={products}
        onPending={() => <div>loading...</div>}
        onResolved={products => (
          <ProductList products={products}/>
        )}
      />
    </>
  );
});