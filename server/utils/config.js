/* eslint-disable no-undef */
require('dotenv').config({ path : '../project.env' });

const { PORT } = process.env;
const MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI_PROD
    : process.env.MONGODB_URI_DEV;

console.log(MONGODB_URI);
module.exports = {
  MONGODB_URI,
  PORT,
};