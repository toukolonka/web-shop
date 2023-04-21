const productRouter = require('express').Router();
const Product = require('../models/product');

productRouter.get('/', async (request, response) => {
  const productLimit = 10;

  const products = await Product
    .find({})
    .sort({ price: 1 })
    .limit(productLimit);

  response.json(products);
});

productRouter.get('/:id', async (request, response) => {
  const product = await Product.findById(request.params.id);
  response.json(product);
});

module.exports = productRouter;