import {
  createContextId,
} from '@builder.io/qwik';

const CartContext = createContextId('cart');
export default CartContext;

export function getTotalQuantity(cartProducts) {
  let totalQuantity = 0;

  cartProducts.value.forEach(product => totalQuantity += product.quantity);

  return totalQuantity;
}

export function getProductQuantity(productId, cartProducts) {
  const quantity = cartProducts.value.find(product => product.id === productId)?.quantity;

  if (quantity === undefined) {
    return 0;
  }

  return quantity;
}

export function addToCart(newProduct, cartProducts) {
  const quantity = getProductQuantity(newProduct.id, cartProducts);

  if (quantity === 0) {
    cartProducts.value = [
      ...cartProducts.value,
      {
        ...newProduct,
        quantity: 1
      }
    ];
  } else {
    cartProducts.value = cartProducts.value.map(product =>
      product.id === newProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }
}

export function removeFromCart(productId, cartProducts) {
  const quantity = getProductQuantity(productId, cartProducts);

  if(quantity === 0) {
    return;
  }
  else if(quantity === 1) {
    deleteFromCart(productId, cartProducts);
  } else {
    const newProducts = cartProducts.value.map(
      product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
    );
    cartProducts.value = newProducts;
  }
}

function deleteFromCart(id, cartProducts) {
  cartProducts.value = cartProducts.value.filter(product => product.id !== id);
}