import { persistentAtom } from '@nanostores/persistent';

const cartProducts = persistentAtom('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

function getTotalQuantity() {
  let totalQuantity = 0;

  cartProducts.value.forEach(product => totalQuantity += product.quantity);

  return totalQuantity;
}

function getTotalPrice() {
  let totalPrice = 0;
  cartProducts.value.forEach(cartProduct => {
    totalPrice += (cartProduct.price * cartProduct.quantity);
  });
  return totalPrice;
}

function getProductQuantity(productId) {
  const quantity = cartProducts.value.find(product => product.id === productId)?.quantity;

  if (quantity === undefined) {
    return 0;
  }

  return quantity;
}

function addToCart(newProduct) {
  const quantity = getProductQuantity(newProduct.id);

  if (quantity === 0) {
    cartProducts.set(
      [
        ...cartProducts.value,
        {
          ...newProduct,
          quantity: 1
        }
      ]
    );
  } else {
    cartProducts.set(
      cartProducts.value.map(
        product =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
      )
    );
  }
}

function removeFromCart(productId) {
  const quantity = getProductQuantity(productId);

  if(quantity === 0) {
    return;
  }
  else if(quantity === 1) {
    deleteFromCart(productId);
  } else {
    const newProducts = cartProducts.value.map(
      product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
    );
    cartProducts.set(newProducts);
  }
}

function deleteFromCart(id) {
  cartProducts.set(
    cartProducts.value.filter(product => {
      return product.id !== id;
    })
  );
}

function checkout() {
  cartProducts.set([]);
}

export {
  cartProducts,
  getTotalQuantity,
  getTotalPrice,
  getProductQuantity,
  addToCart,
  removeFromCart,
  checkout,
};