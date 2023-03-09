import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Product() {
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, getProductQuantity } = useContext(CartContext);
  const id = Number(useParams().id);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Product</h1>
      { product &&
      <>
        <h2>{product.name}</h2>
        <button onClick={() => addToCart(product)} className='btn btn-blue block my-2'>Add to cart</button>
        {getProductQuantity(id) > 0 && <button onClick={() => removeFromCart(id)} className='btn btn-red'>Remove from cart</button>}
      </>
      }
    </>
  );
}

export default Product;