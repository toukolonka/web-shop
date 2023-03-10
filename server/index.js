const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
const logger = require('./utils/logger');

const Product = require('./models/product');
const Order = require('./models/order');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

app.get('/api/products', async (_, response) => {
  const products = await Product.find({});
  response.json(products);
});

app.get('/api/products/:id', async (request, response) => {
  const product = await Product.findById(request.params.id);
  response.json(product);
});

app.get('/api/orders/:id', async (request, response) => {
  const order = await Order
    .findById(request.params.id)
    .populate({
      path: 'products',
      type: Array,
      populate: {
        path: 'product',
        model: 'Product',
      },
    });
  response.json(order);
});

app.post('/api/orders', async (request, response) => {
  const { orderProducts, recipientInfo, userId } = request.body;

  const products = orderProducts.map((product) => ({
    product: product.id,
    quantity: product.quantity
  }));

  const order = new Order({
    userId,
    recipientInfo,
    products,
    createdAt: new Date(Date.now()).toISOString()
  });

  const newOrder = await order.save();

  response.json(newOrder._id);
});

const PORT = config.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});