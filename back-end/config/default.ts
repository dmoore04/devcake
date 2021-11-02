require('dotenv').config({
  path: `${__dirname}/../.env`,
});

export default {
  port: 3000,
  devUri: process.env.DB_URI,
  testUri: process.env.TEST_DB_URI,
};
