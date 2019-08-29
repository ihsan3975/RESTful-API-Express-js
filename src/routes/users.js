const express = require("express");
const Route = express.Router();

const UserController = require("../controller/users");

Route.get("/users", UserController.getAll); //.post("/", UserController.insertData);

module.exports = Route;
