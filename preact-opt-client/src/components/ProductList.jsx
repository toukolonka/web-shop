import React, { useState, useRef, useEffect, useDeferredValue, memo } from 'react';
import RenderIfVisible from 'react-render-if-visible';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import DoubleIconButton from './DoubleIconButton';
import ProductCard from './ProductCard';

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const firstRender = useRef(true);

  const deferredProducts = useDeferredValue(products);

  async function fetchData() {
    const response = await fetch(`http://localhost:8080/api/products?page=${props.page}&search=${props.searchValue}&minPrice=${props.minPrice}&maxPrice=${props.maxPrice}`);
    const data = await response.json();
    setProducts(data.products);
    props.handlePageCount(data.pageCount);
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [props.searchValue, props.minPrice, props.maxPrice]);

  useEffect(() => {
    fetchData();
  }, [props.page]);

  if (deferredProducts.length === 0) {
    return <div className='m-4'>No products found.</div>;
  }

  return (
    <>
      <div className='xs:grid xs:grid-cols-2'>
        {deferredProducts.map(product =>
          <RenderIfVisible key={product.id}>
            <div className='m-2 flex justify-center items-center'>
              <Link to={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
                <ProductCard product={product} />
              </Link>
            </div>
          </RenderIfVisible>
        )}
      </div>
      <div className='flex justify-center my-2'>
        <DoubleIconButton
          leftIcon="<"
          rightIcon=">"
          leftButtonDisabled={props.page <= 1}
          rightButtonDisabled={props.page >= props.pageCount}
          leftButtonClassNames={classNames('btn-blue', { 'btn-disabled' : props.page <= 1 })}
          rightButtonClassNames={classNames('btn-blue', { 'btn-disabled' : props.page >= props.pageCount })}
          handleLeftClick={props.handlePrevious}
          handleRightClick={props.handleNext}
          count={props.page}
        />
      </div>
    </>
  );
}

export default memo(ProductList);