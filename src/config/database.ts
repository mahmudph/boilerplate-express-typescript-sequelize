require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    operatorsAliases: process.env.DB_OPERATOR_ALIAS,
  },
  staging: {
    username: process.env.STAGING_DB_USERNAME,
    password: process.env.STAGING_DB_PASSWORD,
    database: process.env.STAGING_DB_DATABASE,
    host: process.env.STAGING_DB_HOST,
    dialect: process.env.STAGING_DB_CONNECTION,
    operatorsAliases: process.env.STAGING_OPERATOR_ALIAS,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.PROD_DB_CONNECTION,
    operatorsAliases: process.env.PROD_OPERATOR_ALIAS,
  },
}
