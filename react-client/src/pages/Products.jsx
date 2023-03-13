import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Search from '../components/Search';

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  async function fetchData() {
    const response = await fetch(`http://localhost:3001/api/products?page=${page}&search=${searchValue}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const data = await response.json();
    setProducts(data.products);
    setPageCount(data.pageCount);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
    window.scrollTo({
      top: 0,
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p >= pageCount) return p;
      return p + 1;
    });
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Filter
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </form>
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