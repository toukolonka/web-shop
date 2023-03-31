import { component$, useResource$, Resource } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import ProductList from '~/components/ProductList';

export default component$(() => {
  const products = useResource$(async () => {
    const response = isBrowser ?
      await fetch('http://localhost:8080/api/products/') :
      await fetch(`http://${process.env.SERVER_HOST_NAME}:8080/api/products/`);
    const data = await response.json();
    return data;
  });

  return (
    <Resource
      value={products}
      onPending={() => <div>loading...</div>}
      onResolved={products => (
        <ProductList products={products}/>
      )}
    />
  );
});