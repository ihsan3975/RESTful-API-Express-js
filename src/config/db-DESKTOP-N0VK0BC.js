require("dotenv").config();

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "property_inventories",
  multipleStatements: true
});

module.exports = connection;
