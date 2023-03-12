import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DoubleIconButton from '../components/DoubleIconButton';
import ProductCard from '../components/ProductCard';
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

  const addToCartButton = product
    ?
    <div className='inline-flex justify-center'>
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
        <button onClick={() => addToCart(product)} className='btn btn-blue block w-32'>Add to cart</button>
      }
    </div>
    :
    null;

  return (
    <>
      { product &&
      <>
        <div className="">
          <ProductCard product={product} addToCartButton={addToCartButton} />
        </div>
      </>
      }
    </>
  );
}

export default Product;