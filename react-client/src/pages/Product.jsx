import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DoubleIconButton from '../components/DoubleIconButton';
import { CartContext } from '../context/CartContext';

function Product() {
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, getProductQuantity } = useContext(CartContext);
  const id = useParams().id;

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
        {getProductQuantity(id) > 0
          ?
          <DoubleIconButton
            leftIcon="-"
            rightIcon="+"
            leftButtonClassNames='btn-red'
            rightButtonClassNames='btn-blue'
            handleLeftClick={() => removeFromCart(product.id)}
            handleRightClick={() => addToCart(product)}
            count={getProductQuantity(product.id)}
          />
          :
          <button onClick={() => addToCart(product)} className='btn btn-blue block'>Add to cart</button>
        }
      </>
      }
    </>
  );
}

export default Product;