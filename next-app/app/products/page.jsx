import React from 'react';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';

async function getProducts(params) {
  const { page, search, minPrice, maxPrice } = params;
  const response = await fetch(
    `http://localhost:8080/api/products?page=${page}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  const data = await response.json();
  return data;
}

async function Products({ searchParams }) {
  const { page, search, minPrice, maxPrice } = searchParams;

  const pageParam = Number(page) ? Number(page) : 1;
  const searchParam = search ? search : '';
  const minPriceParam = minPrice ? minPrice : '';
  const maxPriceParam = maxPrice ? maxPrice : '';

  const params = {
    page: pageParam,
    search: searchParam,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam
  };

  const productData = await getProducts(params);
  const products = productData.products;
  const pageCount = productData.pageCount;

  return (
    <>
      <SearchForm />
      <ProductList
        products={products}
        pageCount={pageCount}
        params={params}
      />
    </>
  );
}

export default Products;