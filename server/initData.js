/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const config = require('./utils/config');

const Product = require('./models/product');

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

const initData = async () => {
  await Product.deleteMany({})
    .then(() => {
      logger.info('Deleted all products');
    });

  const products = Array.from({ length: 1000 }, (_, i) => i + 1).map(i =>
  {
    return new Product({
      name: `product ${i}`,
      price: i * 100
    });
  },
  );

  await Product.insertMany(products);
};

initData()
  .then(() => {
    logger.info('Successfully initialized data');
    mongoose.connection.close();
  })
  .catch((error) => {
    logger.error('Error initializing data:', error.message);
    mongoose.connection.close();
  });