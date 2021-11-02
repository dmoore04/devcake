require('dotenv').config({
  path: `${__dirname}/../.env`,
});

export default {
  port: 3000,
  dbUri: process.env.TEST_DB_URI,
};
