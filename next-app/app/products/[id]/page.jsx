import React from 'react';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';

async function getProduct(id) {
  const response = await fetch(`http://localhost:8080/api/products/${id}`);
  const data = await response.json();
  return data;
}

async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className='mx-2'>
      <div>
        <Image
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
  );
}

export default Product;