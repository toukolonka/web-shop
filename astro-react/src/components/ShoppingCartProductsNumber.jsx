import React from 'react';
import { useStore } from '@nanostores/react';

import { cartProducts } from '../store/cartStore';

export default function ShoppingCartProductsNumber() {
  const $cartProducts = useStore(cartProducts);
  const totalQuantity = $cartProducts.length > 0
    ? $cartProducts.reduce((sum, product) => sum += product.quantity, 0)
    : 0;
  return (
    <span>
      {totalQuantity}
    </span>
  );
}
