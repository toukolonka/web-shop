import {
  createContextId,
} from '@builder.io/qwik';

interface CartStore {
  value: any[];
}

const CartContext = createContextId<CartStore>('cart');

export default CartContext;

export function getTotalQuantity(cartProducts: CartStore) {
  let totalQuantity = 0;

  cartProducts.value.forEach(product => totalQuantity += product.quantity);

  return totalQuantity;
}

export function getTotalPrice(cartProducts: CartStore) {
  let totalPrice = 0;

  cartProducts.value.forEach((cartProduct) => {
    totalPrice += (cartProduct.price * cartProduct.quantity);
  });
  return totalPrice;
}

export function getProductQuantity(productId: any, cartProducts: CartStore) {
  const quantity = cartProducts.value.find(product => product.id === productId)?.quantity;

  if (quantity === undefined) {
    return 0;
  }

  return quantity;
}

export function addToCart(newProduct: any, cartProducts: CartStore) {
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

  localStorage.setItem('cart', JSON.stringify(cartProducts.value));
}

export function removeFromCart(productId: any, cartProducts: CartStore) {
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

  localStorage.setItem('cart', JSON.stringify(cartProducts.value));
}

export function checkout(cartProducts: CartStore) {
  cartProducts.value = [];
  localStorage.setItem('cart', JSON.stringify(cartProducts.value));
}

function deleteFromCart(id: any, cartProducts: CartStore) {
  cartProducts.value = cartProducts.value.filter(product => product.id !== id);
}