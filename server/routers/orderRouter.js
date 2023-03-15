const orderRouter = require('express').Router();
const Order = require('../models/order');

orderRouter.get('/', async (request, response) => {
  const { userId } = request.query;
  const orders = await Order
    .find({ userId })
    .sort({ createdAt: 'desc' });
  response.json(orders);
});

orderRouter.get('/:id', async (request, response) => {
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

orderRouter.post('/', async (request, response) => {
  const { orderProducts, recipientInfo, userId, totalPrice, totalProductCount } = request.body;

  const products = orderProducts.map((product) => ({
    product: product.id,
    quantity: product.quantity
  }));

  const order = new Order({
    userId,
    recipientInfo,
    products,
    createdAt: new Date(Date.now()).toISOString(),
    totalPrice,
    totalProductCount,
  });

  const newOrder = await order.save();

  response.json(newOrder._id);
});

module.exports = orderRouter;