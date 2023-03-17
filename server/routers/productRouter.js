const productRouter = require('express').Router();
const Product = require('../models/product');

const PRODUCTS_PER_PAGE = 50;

productRouter.get('/', async (request, response) => {
  const { page, search, minPrice, maxPrice } = request.query;

  const searchQuery = {
    name: { $regex: search, $options: 'i' },
    $and: [{ price: { $gte: !minPrice ? 0 : minPrice } }, { price: { $lte: !maxPrice ? Infinity : maxPrice } } ]
  };

  const documentCount = await Product.countDocuments(searchQuery);

  const products = await Product
    .find(searchQuery)
    .skip((page - 1) * PRODUCTS_PER_PAGE)
    .limit(PRODUCTS_PER_PAGE);

  const pageCount = Math.ceil(documentCount / PRODUCTS_PER_PAGE);

  response.json({
    products,
    pageCount,
  });
});

productRouter.get('/:id', async (request, response) => {
  const product = await Product.findById(request.params.id);
  response.json(product);
});

module.exports = productRouter;