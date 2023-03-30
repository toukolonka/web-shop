// eslint-disable-next-line no-undef
const db = new Mongo().getDB('db');

db.createCollection('products', { capped: false });
db.createCollection('orders', { capped: false });

const products = Array.from({ length: 1000 }, (_, i) => i + 1).map(i =>
{
  return {
    name: `product ${i}`,
    price: i * 100
  };
},
);

db.products.insert(products);

const product = db.products.findOne({});

const orders = Array.from({ length: 1000 }, (_, i) => i + 1).map(i =>
{
  return {
    recipientInfo: {
      firstName: 'Touko',
      lastName: 'Lonka',
      address: 'Address 123',
    },
    products: [
      {
        product: product.id,
        quantity: i,
      },
    ],
    totalPrice: 100 * i,
    totalProductCount: i,
    createdAt: new Date(Date.now()).toISOString(),
  };
},
);

db.orders.insert(orders);