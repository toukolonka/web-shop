import HomePageItem from '~/components/HomePageItem';

function Home() {
  return (
    <>
      <h1 className='text-center mb-4'>Welcome to the Web Shop!</h1>
      <div className='xs:grid xs:grid-cols-2 home-page-items'>
        <HomePageItem dataTestid="productsItem" name="Products" href="/products" />
        <HomePageItem dataTestid="ordersItem" name="Orders" href="/orders" />
      </div>
    </>
  );
}

export default Home;
