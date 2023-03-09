import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Product</h1>
      { product && <h2>{product.name}</h2>}
    </>
  );
}

export default Product;