import React from 'react';
import AddToCartButton from './AddToCartButton';

function CartProductCard(props) {
  return (
    <a href={`/products/${props.product.id}/`} className="flex flex-col w-full items-center justify-between border rounded-lg shadow sm:flex-row sm:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 mb-4">
      <img
        className="object-cover w-full rounded-t-lg h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
        src={`https://picsum.photos/seed/${props.product.id}/450/300`}
        crossOrigin="anonymous"
        alt="Product image"
        width="450"
        height="300"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col justify-center items-center pl-4 my-4 sm:my-0 flex-grow">
        <strong className="text-white card-text">{props.product.name}</strong>
        <p className="card-secondary-text text-gray-300">{props.product.price}€ {props.quantity && `(${props.quantity})`}</p>
      </div>
      <div className='m-4'>
        <AddToCartButton textClassNames="text-white" product={props.product} />
      </div>
    </a>
  );
}

export default CartProductCard;