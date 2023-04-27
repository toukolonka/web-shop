import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';

function Product() {
  const [product, setProduct] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <>
      { product &&
      <div className='mx-2'>
        <div>
          <img
            className={'rounded-t-lg rounded-lg'}
            src={`https://picsum.photos/seed/${product.id}/600/300`}
            crossOrigin="anonymous"
            alt="Product image"
            width="600"
            height="300"
          />
          <div className="flex flex-col items-center p-5">
            <strong className='mb-2 card-text text-gray-700'>{product.name}</strong>
            <p className='mb-3 card-secondary-text text-gray-600'>{product.price}€</p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Product;