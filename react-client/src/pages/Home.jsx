import React from 'react';
import HomePageItem from '../components/HomePageItem';

function Home() {
  return (
    <>
      <h1 className='flex justify-center mb-4'>Welcome to the Web Shop!</h1>
      <div className='xs:grid xs:grid-cols-2'>
        <HomePageItem dataTestid="products-home-page-item" name="Products" to="/products" />
        <HomePageItem dataTestid="orders-home-page-item" name="Orders" to="/orders" />
      </div>
    </>
  );
}

export default Home;