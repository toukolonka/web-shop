import { createSignal, createEffect, on } from "solid-js";
import { A } from "solid-start";

import ProductCard from './ProductCard';
import DoubleIconButton from './DoubleIconButton';
import FilterInput from './FilterInput';
import SearchInput from './SearchInput';

const PRODUCTS_PER_PAGE = 10;

function ProductList(props) {
  const [page, setPage] = createSignal(1);
  const [searchValue, setSearchValue] = createSignal('');
  const [minPrice, setMinPrice] = createSignal('');
  const [maxPrice, setMaxPrice] = createSignal('');
  const [productsForPage, setProductsForPage] = createSignal([]);

  const pageCount = Math.ceil(props.products.length / PRODUCTS_PER_PAGE);

  createEffect(on(searchValue, () => {
    if (page() !== 1) {
      setPage(1);
    }
  }));
  createEffect(on(minPrice, () => {
    if (page() !== 1) {
      setPage(1);
    }
  }));
  createEffect(on(maxPrice, () => {
    if (page() !== 1) {
      setPage(1);
    }
  }));

  createEffect(() => {
    setProductsForPage(props.products
      .filter(product =>
        product.name.includes(searchValue()) &&
        product.price >= (Number(minPrice()) ? Number(minPrice()) : 0) &&
        product.price <= (Number(maxPrice()) ? Number(maxPrice()) : Infinity))
      .slice((page() - 1) * PRODUCTS_PER_PAGE, page() * PRODUCTS_PER_PAGE)
    );
  });

  function handlePrevious() {
    if (page() === 1) return;
    setPage(p => p - 1);
    window.scrollTo({
      top: 0,
    });
  }

  function handleNext() {
    if (page() >= pageCount) return;
    setPage(p => p + 1);
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <>
      <form className='flex flex-wrap mx-2 ml-2'>
        <SearchInput
          searchValue={searchValue()}
          setSearchValue={setSearchValue}
        />
        <FilterInput
          placeholder="Minimum price"
          value={minPrice()}
          setFilterValue={setMinPrice}
          dataTestId="minPriceInput"
        />
        <FilterInput
          placeholder="Maximum price"
          value={maxPrice()}
          setFilterValue={setMaxPrice}
          dataTestId="maxPriceInput"
        />
      </form>
      <div className='xs:grid xs:grid-cols-2'>
        <For each={productsForPage()}>{product =>
          <div className='m-2 flex justify-center items-center'>
            <A href={`/products/${product.id}`} className="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </A>
          </div>}
        </For>
      </div>
      <div className='flex justify-center my-2'>
        <DoubleIconButton
          leftIcon="<"
          rightIcon=">"
          leftButtonDisabled={page() <= 1}
          rightButtonDisabled={page() >= pageCount}
          leftButtonClassNames='btn-blue'
          rightButtonClassNames='btn-blue'
          handleLeftClick={handlePrevious}
          handleRightClick={handleNext}
          count={page()}
        />
      </div>
    </>
  );
}

export default ProductList;