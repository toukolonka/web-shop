/* eslint-disable no-undef */
require('dotenv').config({ path : '../project.env' });

const { PORT } = process.env;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};