import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductList(props) {
  return (
    <>
      {props.products.map(product =>
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      )}
    </>
  );
}

export default ProductList;