import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FilterInput from '../components/FilterInput';
import ProductList from '../components/ProductList';
import SearchInput from '../components/SearchInput';

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const history = useHistory();
  const firstRender = useRef(true);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const pageParam = searchParams.get('page');
  const searchParam = searchParams.get('search');
  const minPriceParam = searchParams.get('minPrice');
  const maxPriceParam = searchParams.get('maxPrice');

  const noSearchParams = !searchParam && !minPriceParam && !maxPriceParam;

  async function fetchData() {
    const response = await fetch(`http://localhost:8080/api/products?page=${page}&search=${searchValue}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const data = await response.json();
    setProducts(data.products);
    setPageCount(data.pageCount);
  }

  useEffect(() => {
    Number(pageParam) && setPage(Number(pageParam));
    searchParam && setSearchValue(searchParam);
    Number(minPriceParam) && setMinPrice(Number(minPriceParam));
    Number(maxPriceParam) && setMaxPrice(Number(maxPriceParam));
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      (Number(pageParam) === 1 || !pageParam) && noSearchParams && fetchData();
      return;
    }

    history.push({
      pathname: 'products',
      search: `?page=${page}&search=${searchValue}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    });
    fetchData();
  }, [page, searchValue, minPrice, maxPrice]);

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
        />
        <FilterInput
          placeholder="Maximum price"
          value={maxPrice}
          setFilterValue={setMaxPrice}
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