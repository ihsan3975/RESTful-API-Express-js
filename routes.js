const express = require("express");
const route = express.Router();
const verify = require("./verify");

var productController = require("./product/controller");
var categoryController = require("./category/controller");
var userController = require("./user/controller");
route
  .get("/products", productController.getAll)
  .get("/products/:id", productController.getId)
  .patch(
    "/products/qty/:act/:id/:calc",
    verify.verifyToken,
    productController.addRed
  )
  .post("/products/users", verify.verifyToken, productController.insertData)
  .put("/products/users/:id", verify.verifyToken, productController.updateData)
  .delete(
    "/products/users/:id",
    verify.verifyToken,
    productController.deleteData
  )

  .get("/category", categoryController.getAll_cat)
  .get("/category/:id", categoryController.getId_cat)
  .post(
    "/category/users",
    verify.verifyToken,
    categoryController.insertData_cat
  )
  .put(
    "/category/users/:id",
    verify.verifyToken,
    categoryController.updateData_cat
  )
  .delete(
    "/category/users/:id",
    verify.verifyToken,
    categoryController.deleteData_cat
  )

  .post("/login", userController.login)
  .post("/register", userController.register);
module.exports = route;
