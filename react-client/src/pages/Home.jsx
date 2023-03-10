import React from 'react';
import HomePageItem from '../components/HomePageItem';

function Home() {
  return (
    <>
      <h1 className='flex justify-center mb-4'>Welcome to the Web Shop!</h1>
      <div className='flex justify-center flex-wrap'>
        <HomePageItem name="Products" to="/products" />
        <HomePageItem name="Orders" to="/orders" />
      </div>
    </>
  );
}

export default Home;