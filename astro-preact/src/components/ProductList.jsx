import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import FilterInput from './FilterInput';
import SearchInput from './SearchInput';
import ProductCard from './ProductCard';
import DoubleIconButton from './DoubleIconButton';

const PRODUCTS_PER_PAGE = 1000000;

function ProductList(props) {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [searchValue, minPrice, maxPrice]);

  const pageCount = Math.ceil(props.products.length / PRODUCTS_PER_PAGE);

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

  const productsForPage = props.products
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
      <div className='xs:grid xs:grid-cols-2'>
        {productsForPage.map(product =>
          <div key={product.id} className='m-2 flex justify-center items-center'>
            <a href={`/products/${product.id}/`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </a>
          </div>
        )}
      </div>
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

export default ProductList;