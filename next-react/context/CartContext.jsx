'use client';

import React, { createContext, useEffect, useState, useRef } from 'react';

export const CartContext = createContext({});

const CartContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCartProducts(JSON.parse(localStorage.getItem('cart')));
    } else {
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

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

  function checkout() {
    setCartProducts([]);
  }

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