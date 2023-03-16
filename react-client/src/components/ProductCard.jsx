import classNames from 'classnames';
import React from 'react';

function ProductCard(props) {
  return (
    <div data-testid={`productCard${props.product.price}`}>
      <img
        className={classNames('rounded-t-lg', { 'rounded-lg': props.addToCartButton })}
        src={`https://picsum.photos/seed/${props.product.id}/800/400`}
        alt="Product image"
        width="800"
        height="400"
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