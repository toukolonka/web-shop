import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/products?page=${page}`);
      const data = await response.json();
      setProducts(data.products);
      setPageCount(data.pageCount);
    }
    fetchData();
  }, [page]);

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p >= pageCount) return p;
      return p + 1;
    });
  }

  return (
    <>
      <h1>Products</h1>
      <ProductList
        products={products}
        page={page}
        pageCount={pageCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
}

export default Products;