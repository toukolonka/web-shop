/* eslint-disable no-undef */
require('dotenv').config({ path : '../project.env' });

const { PORT } = process.env;
const MONGODB_URI =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI_PROD;

module.exports = {
  MONGODB_URI,
  PORT,
};