require("dotenv").config();
const connection = require("../db");
exports.getAll_cat = function(req, res) {
  connection.query("SELECT category.id, category FROM category", function(
    err,
    results,
    fields
  ) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: "Successfully get all data Category!",
        data: results
      });
    }
  });
};

exports.getId_cat = function(req, res) {
  connection.query(
    "SELECT * FROM `category` WHERE `id` = ?",
    req.params.id,
    function(err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        if (results.length > 0) {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get single data!",
            data: results
          });
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: "No data found!",
            data: results
          });
        }
      }
    }
  );
};

exports.insertData_cat = (req, res) => {
  const { id, category } = req.body;

  connection.query(
    "INSERT INTO `category` (id, category) values (?, ?)",
    [id, category],
    function(err, results) {
      if (err) {
        console.log(err);
        res.status(400).json({
          status: 400,
          message: "Error add new data!"
        });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Successfully add new data!",
          data: req.body
        });
      }
    }
  );
};

exports.updateData_cat = function(req, res) {
  const { id, category } = req.body;

  if (!category) {
    res.status(300).json({
      status: 300,
      error: true,
      message: "Nothing updated"
    });
  } else {
    connection.query(
      "UPDATE `category` SET category = ? WHERE `id` = ?",
      [category, req.params.id],
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully update data with id: " + req.params.id,
            data: req.body
          });
        }
      }
    );
  }
};

exports.deleteData_cat = function(req, res) {
  connection.query(
    "DELETE from `category` WHERE `id` = ?",
    [req.params.id],
    function(err, results) {
      if (err) {
        console.log(err);
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully delete data with id: " + req.params.id
          });
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: "Cannot delete data with id: " + req.params.id
          });
        }
      }
    }
  );
};
