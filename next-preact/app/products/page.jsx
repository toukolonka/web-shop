import React from 'react';
import ProductList from '@/components/ProductList';

async function getProducts() {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    `http://${process.env.SERVER_HOST_NAME}:8080/api/products/`
  );
  const data = await response.json();
  return data;
}

async function Products() {
  const products = await getProducts();

  return (
    <>
      <ProductList
        products={products}
      />
    </>
  );
}

export default Products;