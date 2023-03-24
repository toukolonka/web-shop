import React, { useState, useEffect, useRef } from 'react';
import FilterInput from './FilterInput';
import SearchInput from './SearchInput';

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const isFirstRender = useRef(true);


  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      //router.push(`/products?page=1&search=${searchValue}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, minPrice, maxPrice]);

  return (
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
  );
}
