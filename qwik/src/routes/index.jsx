import { component$ } from '@builder.io/qwik';
import HomePageItem from '~/components/HomePageItem';

export default component$(() => {
  return (
    <>
      <h1 class='text-center mb-4'>Welcome to the Web Shop!</h1>
      <div class='xs:grid xs:grid-cols-2 home-page-items'>
        <HomePageItem dataTestid="productsItem" name="Products" href="/products" />
        <HomePageItem dataTestid="ordersItem" name="Orders" href="/orders" />
      </div>
    </>
  );
});