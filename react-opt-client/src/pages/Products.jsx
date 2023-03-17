import React, { useState, useCallback, useDeferredValue } from 'react';
import classNames from 'classnames';
import DoubleIconButton from '../components/DoubleIconButton';
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
    console.log(newPageCount);
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
      />
      <div className='flex justify-center my-2'>
        <DoubleIconButton
          leftIcon="<"
          rightIcon=">"
          leftButtonDisabled={page <= 1}
          rightButtonDisabled={page >= pageCount}
          leftButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page <= 1 })}
          rightButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page >= pageCount })}
          handleLeftClick={handlePrevious}
          handleRightClick={handleNext}
          count={page}
        />
      </div>
    </>
  );
}

export default Products;