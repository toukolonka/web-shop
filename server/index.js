const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');

const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

const PORT = config.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});