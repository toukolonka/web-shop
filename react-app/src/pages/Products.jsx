import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} />
    </>
  );
}

export default Products;