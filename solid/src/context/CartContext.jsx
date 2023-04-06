import { createSignal, createContext, useContext, createEffect } from "solid-js";

export const CartContext = createContext({});

export function CartContextProvider(props){
  const [cartProducts, setCartProducts] = createSignal(props.value || []);

  createEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts()));
  });

  function getTotalQuantity() {
    let totalQuantity = 0;

    cartProducts().forEach(product => totalQuantity += product.quantity);

    return totalQuantity;
  }

  function getTotalPrice() {
    let totalPrice = 0;
    cartProducts().forEach(cartProduct => {
      totalPrice += (cartProduct.price * cartProduct.quantity);
    });
    return totalPrice;
  }

  function getProductQuantity(productId) {
    const quantity = cartProducts().find(product => product.id === productId)?.quantity;

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
          ...cartProducts(),
          {
            ...newProduct,
            quantity: 1
          }
        ]
      );
    } else {
      setCartProducts(
        cartProducts().map(
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
      const newProducts = cartProducts().map(
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
      cartProducts().filter(product => {
          return product.id !== id;
        })
    );
  }

  function checkout() {
    setCartProducts([]);
  }

  const contextValue = {
    cartProducts,
    setCartProducts,
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

export function useCart() { return useContext(CartContext); }