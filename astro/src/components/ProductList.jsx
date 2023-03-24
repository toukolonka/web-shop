import React, { useState, useEffect, useRef } from 'react';
import FilterInput from './FilterInput';
import SearchInput from './SearchInput';
import ProductCard from './ProductCard';

function ProductList(props) {
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current) {
      setProducts(props.products);
      isFirstRender.current = false;
      return;
    }
    setProducts(props.products.filter(product =>
      product.name.includes(searchValue) &&
        product.price >= (Number(minPrice) ? Number(minPrice) : 0) &&
        product.price <= (Number(maxPrice) ? Number(maxPrice) : Infinity)));

  }, [searchValue, minPrice, maxPrice]);

  if (props.products.length === 0) {
    return <div className='m-4'>No products found.</div>;
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
      <div className='xs:grid xs:grid-cols-2'>
        {products.map(product =>
          <div key={product.id} className='m-2 flex justify-center items-center'>
            <a href={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;