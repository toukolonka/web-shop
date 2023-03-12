import React from 'react';
import { Link } from 'react-router-dom';
import DoubleIconButton from './DoubleIconButton';

function CartProductCard(props) {
  return (
    <Link to={`/products/${props.product.id}`} className="flex flex-col w-full items-center justify-between border rounded-lg shadow sm:flex-row sm:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 mb-4">
      <img className="object-cover w-full rounded-t-lg h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg" src={`https://picsum.photos/seed/${props.product.id}/600/400`} alt="Product image" />
      <div className="flex sm:flex-row flex-col justify-center items-center p-4 leading-normal">
        <h5 className="sm:mr-4 text-2xl font-bold tracking-tight text-white">{props.product.name}</h5>
        <p className="font-normal text-gray-400">{props.product.price}€ {props.quantity && `(${props.quantity})`}</p>
      </div>
      { props.noButtons
        ?
        <div />
        :
        <div className='m-4'>
          <DoubleIconButton
            leftIcon="-"
            rightIcon="+"
            textClassNames='text-white'
            leftButtonClassNames='btn-red'
            rightButtonClassNames='btn-blue'
            handleLeftClick={props.removeFromCart}
            handleRightClick={props.addToCart}
            count={props.count}
          />
        </div>
      }
    </Link>
  );
}

export default CartProductCard;