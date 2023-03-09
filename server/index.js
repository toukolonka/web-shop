const express = require('express');
const app = express();
const cors = require('cors');

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

app.get('/api/products', (_, response) => {
  response.json(products);
});

app.get('/api/products/:id', (request, response) => {
  const id = Number(request.params.id);
  const product = products.find(product => product.id === id);
  response.json(product);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});