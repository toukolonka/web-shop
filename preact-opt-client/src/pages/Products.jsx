import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('http://localhost:8080/api/products/');
      const products = await response.json();
      setProducts(products);
    }

    getProducts();
  }, []);


  return (
    <>
      <ProductList
        products={products}
      />
    </>
  );
}

export default Products;