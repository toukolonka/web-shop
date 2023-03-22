'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import ProductCard from './ProductCard';
import DoubleIconButton from './DoubleIconButton';

function ProductList(props) {
  const { page, search, minPrice, maxPrice } = props.params;
  const router = useRouter();

  const newUrl = (newPage) => `/products?page=${newPage}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  function handlePrevious() {
    if (page === 1) return;
    router.push(newUrl(page - 1));
    window.scrollTo({
      top: 0,
    });
  }

  function handleNext() {
    if (page >= props.pageCount) return;
    router.push(newUrl(page + 1));
    window.scrollTo({
      top: 0,
    });
  }

  if (props.products.length === 0) {
    return <div className='m-4'>No products found.</div>;
  }

  return (
    <>
      <div className='xs:grid xs:grid-cols-2'>
        {props.products.map(product =>
          <div key={product.id} className='m-2 flex justify-center items-center'>
            <Link href={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </Link>
          </div>
        )}
      </div>
      <div className='flex justify-center my-2'>
        <DoubleIconButton
          leftIcon="<"
          rightIcon=">"
          leftButtonDisabled={page <= 1}
          rightButtonDisabled={page >= props.pageCount}
          leftButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page <= 1 })}
          rightButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page >= props.pageCount })}
          handleLeftClick={handlePrevious}
          handleRightClick={handleNext}
          count={page}
        />
      </div>
    </>
  );
}

export default ProductList;