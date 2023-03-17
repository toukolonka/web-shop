// eslint-disable-next-line no-undef
const db = new Mongo().getDB('db');

db.createCollection('products', { capped: false });

const products = Array.from({ length: 1000 }, (_, i) => i + 1).map(i =>
{
  return {
    name: `product ${i}`,
    price: i * 100
  };
},
);

db.products.insert(products);
