import { component$ } from '@builder.io/qwik';
import DoubleIconButton from './DoubleIconButton';

export default component$((props) => {
  return (
    <a href={`/products/${props.product.id}`} class="flex flex-col w-full items-center justify-between border rounded-lg shadow sm:flex-row sm:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 mb-4">
      <img
        class="object-cover w-full rounded-t-lg h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
        src={`https://picsum.photos/seed/${props.product.id}/450/300`}
        crossOrigin="anonymous"
        alt="Product image"
        width="450"
        height="300"
        loading="lazy"
        decoding="async"
      />
      <div class="flex flex-col justify-center items-center pl-4 my-4 sm:my-0 flex-grow">
        <strong class="text-white card-text">{props.product.name}</strong>
        <p class="card-secondary-text text-gray-300">{props.product.price}€ {props.quantity && `(${props.quantity})`}</p>
      </div>
      { !props.noButtons &&
        <div class='m-4'>
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
    </a>
  );
});