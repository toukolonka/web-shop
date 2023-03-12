/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const logger = require('./utils/logger');
require('dotenv').config();

const Product = require('./models/product');

mongoose
  .connect(process.env.MONGODB_URI)
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

  const products = [
    new Product({
      name: 'product 1',
      price: 100
    }),
    new Product({
      name: 'product 2',
      price: 200
    }),
    new Product({
      name: 'product 3',
      price: 300
    }),
    new Product({
      name: 'product 4',
      price: 400
    }),
    new Product({
      name: 'product 5',
      price: 500
    }),
    new Product({
      name: 'product 6',
      price: 600
    }),
    new Product({
      name: 'product 7',
      price: 700
    }),
    new Product({
      name: 'product 8',
      price: 800
    }),
    new Product({
      name: 'product 9',
      price: 900
    }),
    new Product({
      name: 'product 10',
      price: 1000
    }),
    new Product({
      name: 'product 11',
      price: 1100
    }),
    new Product({
      name: 'product 12',
      price: 1200
    }),
    new Product({
      name: 'product 13',
      price: 1300
    }),
    new Product({
      name: 'product 14',
      price: 1400
    }),
    new Product({
      name: 'product 15',
      price: 1500
    }),
    new Product({
      name: 'product 16',
      price: 1600
    }),
    new Product({
      name: 'product 17',
      price: 1700
    }),
    new Product({
      name: 'product 18',
      price: 1800
    }),
    new Product({
      name: 'product 19',
      price: 1900
    }),
    new Product({
      name: 'product 20',
      price: 2000
    }),
    new Product({
      name: 'product 21',
      price: 2100
    }),
  ];

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