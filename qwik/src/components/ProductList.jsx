import { component$, useTask$, useSignal, $ } from '@builder.io/qwik';

import classNames from 'classnames';
import ProductCard from './ProductCard';
import DoubleIconButton from './DoubleIconButton';
import FilterInput from './FilterInput';
import SearchInput from './SearchInput';

const PRODUCTS_PER_PAGE = 50;

export default component$((props) => {
  const page = useSignal(1);
  const searchValue = useSignal('');
  const minPrice = useSignal('');
  const maxPrice = useSignal('');
  const productsForPage = useSignal([]);

  useTask$(async ({ track }) => {
    track(() => searchValue.value);
    track(() => minPrice.value);
    track(() => maxPrice.value);
    if (page !== 1) {
      page.value = 1;
    }
  });

  useTask$(async ({ track }) => {
    track(() => searchValue.value);
    track(() => minPrice.value);
    track(() => maxPrice.value);
    track(() => page.value);

    productsForPage.value = props.products
      .filter(product =>
        product.name.includes(searchValue.value) &&
        product.price >= (Number(minPrice.value) ? Number(minPrice.value) : 0) &&
        product.price <= (Number(maxPrice.value) ? Number(maxPrice.value) : Infinity))
      .slice((page.value - 1) * PRODUCTS_PER_PAGE, page.value * PRODUCTS_PER_PAGE);
  });



  const pageCount = Math.ceil(props.products.length / PRODUCTS_PER_PAGE);

  const handlePrevious = $(() => {
    if (page.value === 1) return;
    page.value--;
  });

  const handleNext = $(() => {
    if (page.value >= pageCount) return;
    page.value++;
  });

  return (
    <>
      <form class='flex flex-wrap mx-2 ml-2'>
        <SearchInput
          searchValue={searchValue}
        />
        <FilterInput
          placeholder="Minimum price"
          filterValue={minPrice}
          dataTestId="minPriceInput"
        />
        <FilterInput
          placeholder="Maximum price"
          filterValue={maxPrice}
          dataTestId="maxPriceInput"
        />
      </form>
      <div class='xs:grid xs:grid-cols-2'>
        {productsForPage.value.map(product =>
          <div key={product.id} class='m-2 flex justify-center items-center'>
            <a href={`/products/${product.id}`} class="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
              <ProductCard product={product} />
            </a>
          </div>
        )}
      </div>
      <div class='flex justify-center my-2'>
        <DoubleIconButton
          leftIcon="<"
          rightIcon=">"
          leftButtonDisabled={page.value <= 1}
          rightButtonDisabled={page.value >= pageCount}
          leftButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page.value <= 1 })}
          rightButtonClassNames={classNames('btn-blue', { 'btn-disabled' : page.value >= pageCount })}
          count={page.value}
          handleLeftClick={handlePrevious}
          handleRightClick={handleNext}
        />
      </div>
    </>
  );
});
