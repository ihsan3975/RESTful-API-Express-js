require("dotenv").config();

const mysql = require("mysql");

// initialize mysql connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
  // multipleStatements: true
});

module.exports = connection;
