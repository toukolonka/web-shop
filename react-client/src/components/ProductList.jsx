import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {props.products.map(product =>
        <div key={product.id} className='my-2 w-2/3 flex justify-between items-center'>
          <Link to={`/products/${product.id}`} className='inline-block pr-4'>
            <ProductCard product={product} />
          </Link>
          <button className='btn btn-blue' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
    </>
  );
}

export default ProductList;