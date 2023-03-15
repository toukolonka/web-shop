// eslint-disable-next-line no-undef
const db = new Mongo().getDB('db');

db.createCollection('products', { capped: false });

const products = [
  {
    name: 'product 1',
    price: 100
  },
  {
    name: 'product 2',
    price: 200
  },
  {
    name: 'product 3',
    price: 300
  },
  {
    name: 'product 4',
    price: 400
  },
  {
    name: 'product 5',
    price: 500
  },
  {
    name: 'product 6',
    price: 600
  },
  {
    name: 'product 7',
    price: 700
  },
  {
    name: 'product 8',
    price: 800
  },
  {
    name: 'product 9',
    price: 900
  },
  {
    name: 'product 10',
    price: 1000
  },
  {
    name: 'product 11',
    price: 1100
  },
  {
    name: 'product 12',
    price: 1200
  },
  {
    name: 'product 13',
    price: 1300
  },
  {
    name: 'product 14',
    price: 1400
  },
  {
    name: 'product 15',
    price: 1500
  },
  {
    name: 'product 16',
    price: 1600
  },
  {
    name: 'product 17',
    price: 1700
  },
  {
    name: 'product 18',
    price: 1800
  },
  {
    name: 'product 19',
    price: 1900
  },
  {
    name: 'product 20',
    price: 2000
  },
  {
    name: 'product 21',
    price: 2100
  },
];

db.products.insert(products);
