import React, { useState, useEffect } from 'react';
import FilterInput from '../components/FilterInput';
import ProductList from '../components/ProductList';
import SearchInput from '../components/SearchInput';

const PRODUCTS_PER_PAGE = 10;

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  async function fetchData() {
    const response = await fetch('http://localhost:8080/api/products/');
    const products = await response.json();
    setProducts(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [searchValue, minPrice, maxPrice]);

  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  function handlePrevious() {
    if (page === 1) return;
    setPage(page - 1);
    window.scrollTo({
      top: 0,
    });
  }

  function handleNext() {
    if (page >= pageCount) return;
    setPage(page + 1);
    window.scrollTo({
      top: 0,
    });
  }

  const productsForPage = products
    .filter(product =>
      product.name.includes(searchValue) &&
      product.price >= (Number(minPrice) ? Number(minPrice) : 0) &&
      product.price <= (Number(maxPrice) ? Number(maxPrice) : Infinity))
    .slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);


  return (
    <>
      <form className='flex flex-wrap mx-2 ml-2'>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <FilterInput
          placeholder="Minimum price"
          value={minPrice}
          setFilterValue={setMinPrice}
          dataTestId="minPriceInput"
        />
        <FilterInput
          placeholder="Maximum price"
          value={maxPrice}
          setFilterValue={setMaxPrice}
          dataTestId="maxPriceInput"
        />
      </form>
      <ProductList
        page={page}
        products={productsForPage}
        pageCount={pageCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
}

export default Products;