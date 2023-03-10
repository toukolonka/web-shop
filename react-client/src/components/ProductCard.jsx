import classNames from 'classnames';
import React from 'react';

function ProductCard(props) {
  return (
    <div>
      <img className="rounded-t-lg" src={`https://picsum.photos/seed/${props.product.id}/600/400`} alt="Product image" />
      <div className="flex flex-col items-center p-5">
        <h5 className={classNames('mb-2', 'text-2xl', 'font-bold', 'tracking-tight', { 'text-white': !props.addToCartButton }, { 'text-gray-700': props.addToCartButton })}>{props.product.name}</h5>
        <p className="mb-3 font-normal text-gray-400">{props.product.price}€</p>
        {props.addToCartButton}
      </div>
    </div>
  );
}

export default ProductCard;