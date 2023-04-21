import { component$ } from '@builder.io/qwik';

import ProductCard from './ProductCard';

export default component$((props) => {
  return (
    <div class='xs:grid xs:grid-cols-2'>
      {props.products.map(product =>
        <div key={product.id} class='m-2 flex justify-center items-center'>
          <a href={`/products/${product.id}`} class="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
            <ProductCard product={product} />
          </a>
        </div>
      )}
    </div>
  );
});
