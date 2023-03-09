import React from 'react';

function ProductCard(props) {
  return (
    <h2>{props.product.name} ({props.product.price}€)</h2>
  );
}

export default ProductCard;