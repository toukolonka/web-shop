import React, { useState, useCallback, useDeferredValue } from 'react';
import FilterInput from '../components/FilterInput';
import ProductList from '../components/ProductList';
import SearchInput from '../components/SearchInput';

function Products() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const deferredSearchValue = useDeferredValue(searchValue);
  const deferredMinPrice = useDeferredValue(minPrice);
  const deferredMaxPrice = useDeferredValue(maxPrice);

  const handlePageCount = useCallback((newPageCount) => {
    setPageCount(newPageCount), [pageCount];
  });

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
        handlePageCount={handlePageCount}
        searchValue={deferredSearchValue}
        minPrice={deferredMinPrice}
        maxPrice={deferredMaxPrice}
        pageCount={pageCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
}

export default Products;