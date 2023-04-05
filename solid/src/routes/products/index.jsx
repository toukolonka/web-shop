import { createResource } from "solid-js";
import { A } from "solid-start";
import ProductCard from '../../components/ProductCard';

async function fetchProducts() {
  console.log('here');
  const response = await fetch('http://localhost:8080/api/products/');
  const data = await response.json();
  return data;
}

function Products() {
  const [products] = createResource(fetchProducts);

  return (
    <>
      <div className='xs:grid xs:grid-cols-2'>
        {products().map(product =>
          <div key={product.id} className='m-2 flex justify-center items-center'>
            <A href={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </A>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;