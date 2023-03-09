const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let products = [
  {
    id: 1,
    name: 'PC',
    price: '100',
  },
  {
    id: 2,
    name: 'Mac',
    price: '500',
  }
];

let order = [];
let recipient = {};
let user = null;

app.get('/api/products', (_, response) => {
  response.json(products);
});

app.get('/api/products/:id', (request, response) => {
  const id = Number(request.params.id);
  const product = products.find(product => product.id === id);
  response.json(product);
});

app.get('/api/orders/:id', (_, response) => {
  response.json({
    id: 123,
    createdAt: Date.now(),
    products: order,
    recipient,
    user,
  });
});

app.post('/api/orders', (request, response) => {
  const { orderProducts, recipientInfo, userId } = request.body;
  console.log(userId);
  order = orderProducts;
  recipient = recipientInfo;
  user = userId;
  response.json(123);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});