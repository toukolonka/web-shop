import classNames from 'classnames';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductCard(props) {
  return (
    <div data-testid={`productCard${props.product.price}`}>
      <LazyLoadImage
        className={classNames('rounded-t-lg', { 'rounded-lg': props.addToCartButton })}
        src={`https://picsum.photos/seed/${props.product.id}/600/300`}
        crossOrigin="anonymous"
        alt="Product image"
        width="600"
        height="300"
      />
      <div className="flex flex-col items-center p-5">
        <strong className={classNames('mb-2 card-text', { 'text-white': !props.addToCartButton }, { 'text-gray-700': props.addToCartButton })}>{props.product.name}</strong>
        <p className={classNames('mb-3 card-secondary-text', { 'text-gray-300': !props.addToCartButton }, { 'text-gray-600': props.addToCartButton })}>{props.product.price}€</p>
        {props.addToCartButton}
      </div>
    </div>
  );
}

export default ProductCard;