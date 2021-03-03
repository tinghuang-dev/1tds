const path = require('path');
const mysql2 = require('mysql2');

require('dotenv').config({
  path: path.resolve(__dirname, '../../../.env.local'),
});

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: 'Australia/Melbourne',
    dialectOptions: {
      timezone: 'local',
    },
  },
  production: {
    username: process.env.SQL_DB_1TDS_STAGING_USERNAME,
    password: process.env.SQL_DB_1TDS_STAGING_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.SQL_DB_1TDS_STAGING_IP,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectModule: mysql2,
    timezone: 'Australia/Melbourne',
    dialectOptions: {
      timezone: 'local',
    },
  },
};
