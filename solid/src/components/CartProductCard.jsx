import { A } from "solid-start";
import AddToCartButton from './AddToCartButton';

function CartProductCard(props) {
  return (
    <A href={`/products/${props.product.id}`} className="flex flex-col w-full items-center justify-between border rounded-lg shadow sm:flex-row sm:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 mb-4">
      <img
        className="object-cover w-full rounded-t-lg h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg"
        src={`https://picsum.photos/seed/${props.product.id}/450/300`}
        crossOrigin="anonymous"
        alt="Product image"
        width="450"
        height="300"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col justify-center items-center sm:pl-4 my-4 sm:my-0 flex-grow">
        <strong className="text-white card-text">{props.product.name}</strong>
        <p className="card-secondary-text text-gray-300">{props.product.price}€ {props.quantity && `(${props.quantity})`}</p>
      </div>
      <div className='sm:mb-0 mb-4 mx-4'>
        <AddToCartButton textClassNames="text-white" product={props.product} />
      </div>
    </A>
  );
}

export default CartProductCard;