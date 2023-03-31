import React, { memo, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ProductCard from './ProductCard';
const DoubleIconButton = lazy(() => import('./DoubleIconButton'));

function ProductList(props) {
  if (props.products.length === 0) {
    return <div className='m-4'>No products found.</div>;
  }

  return (
    <>
      <div className='xs:grid xs:grid-cols-2'>
        {props.products.map(product =>
          <div key={product.id} className='m-2 flex justify-center items-center'>
            <Link to={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </Link>
          </div>
        )}
      </div>
      <div className='flex justify-center my-2'>
        <Suspense fallback={<div></div>}>
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
        </Suspense>
      </div>
    </>
  );
}

export default memo(ProductList);