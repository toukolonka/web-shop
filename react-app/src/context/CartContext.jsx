import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  function getTotalQuantity() {
    let totalQuantity = 0;

    cartProducts.forEach(product => totalQuantity += product.quantity);

    return totalQuantity;
  }

  function getTotalPrice() {
    let totalPrice = 0;
    cartProducts.forEach(cartProduct => {
      totalPrice += (cartProduct.price * cartProduct.quantity);
    });
    return totalPrice;
  }

  function getProductQuantity(productId) {
    const quantity = cartProducts.find(product => product.id === productId)?.quantity;

    console.log(quantity);

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(newProduct) {
    const quantity = getProductQuantity(newProduct.id);

    if (quantity === 0) {
      setCartProducts(
        [
          ...cartProducts,
          {
            ...newProduct,
            quantity: 1
          }
        ]
      );
    } else {
      setCartProducts(
        cartProducts.map(
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
      const newProducts = cartProducts.map(
        product =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
      );
      console.log(newProducts);
      setCartProducts(newProducts);
    }
  }

  function deleteFromCart(id) {
    setCartProducts(
      cartProducts =>
        cartProducts.filter(product => {
          return product.id !== id;
        })
    );
  }

  const checkout = () => {
    setCartProducts([]);
  };

  const contextValue = {
    cartProducts,
    getTotalQuantity,
    getTotalPrice,
    getProductQuantity,
    addToCart,
    removeFromCart,
    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;