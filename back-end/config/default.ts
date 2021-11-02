const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `${__dirname}/../.env.${ENV}`,
});

export default {
  port: 3000,
  dbUri: process.env.DB_URI,
};
