import React from 'react';
import AddToCartButton from '@/components/AddToCartButton';

export async function getProducts(id = false) {
  let response;
  if (id) {
    // eslint-disable-next-line no-undef
    response = await fetch(`http://${process.env.SERVER_HOST_NAME}:8080/api/products/${id}`);
  } else {
    // eslint-disable-next-line no-undef
    response = await fetch(`http://${process.env.SERVER_HOST_NAME}:8080/api/products/`);
  }
  const data = await response.json();
  return data;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

async function Product({ params }) {
  const product = await getProducts(params.id);

  return (
    <div className='mx-2'>
      <div>
        <img
          className={'rounded-t-lg rounded-lg'}
          src={`https://picsum.photos/seed/${product.id}/600/300`}
          crossOrigin="anonymous"
          alt="Product image"
          width="600"
          height="300"
          loading="lazy"
          decoding="async"
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