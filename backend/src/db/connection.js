const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;