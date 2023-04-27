import ProductCard from './ProductCard';

function ProductList(props) {
  return (
    <div className='xs:grid xs:grid-cols-2'>
      <For each={props.products}>{product =>
        <div className='m-2 flex justify-center items-center'>
          <a href={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
            <ProductCard product={product} />
          </a>
        </div>}
      </For>
    </div>
  );
}

export default ProductList;