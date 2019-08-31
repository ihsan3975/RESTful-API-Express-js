require("dotenv").config();
const connection = require("../db");

exports.getId = function(req, res) {
  connection.query(
    "SELECT * FROM `product` WHERE `id` = ?",
    req.params.id,
    function(err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        if (results.length > 0) {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get data!",
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

exports.insertData = (req, res) => {
  const {
    name,
    description,
    image,
    id_category,
    quantity,
    date_added
  } = req.body;

  connection.query(
    "INSERT INTO `product` (name, description, image, id_category, quantity, date_added, date_updated) values (?, ?, ?, ?, ?, ?, ?)",
    [name, description, image, id_category, quantity, date_added, new Date()],
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

exports.updateData = function(req, res) {
  const {
    name,
    description,
    image,
    id_category,
    quantity,
    date_added
  } = req.body;

  if (
    !name ||
    !description ||
    !image ||
    !id_category ||
    !quantity ||
    !date_added
  ) {
    res.status(300).json({
      status: 300,
      error: true,
      message: "Nothing updated"
    });
  } else {
    connection.query(
      "UPDATE `product` SET name = ?, description = ?, image = ?, id_category = ?, quantity = ?, date_added = ?, date_updated = ? WHERE `id` = ?",
      [
        name,
        description,
        image,
        id_category,
        quantity,
        date_added,
        new Date(),
        req.params.id
      ],
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

exports.deleteData = function(req, res) {
  connection.query(
    "DELETE from `product` WHERE `id` = ?",
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

exports.addRed = function(req, res) {
  const act = req.params.act;
  const calc = req.params.calc;
  if (act == "add") {
    var query = `UPDATE product SET quantity = quantity+${calc} WHERE id = ?`;
  } else if (act == "reduce") {
    var query = `UPDATE product SET quantity = quantity-${calc} WHERE id = ? AND quantity >= ${calc}`;
  }
  connection.query(query, [req.params.id], function(err, results) {
    if (err) {
      console.log(err);
    } else {
      if (results.affectedRows == 0) {
        res.status(350).json({
          status: 350,
          error: true,
          message: "Number must be lower than quantity: " + req.params.id
          // data: results
        });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Succesfully change quantity: " + req.params.id
          // data: results
        });
      }
    }
  });
};

exports.searchProduct = function(req, res) {
  var key = `%${req.query.key}%`;

  connection.query(`SELECT * FROM product WHERE name LIKE ?`, key, function(
    err,
    results
  ) {
    if (err) {
      console.log(err);
    } else {
      // console.log(key);
      res.status(200).json({
        status: 200,
        error: false,
        message: "Successfully search: " + req.query.key,
        data: results
      });
    }
  });
};

exports.getAll = function(req, res) {
  var sortBy = req.query.sortBy || "id";
  var sort = req.query.sort || "ASC";
  var limit = req.query.limit || 3;
  var page = (req.query.page - 1) * limit || 0;
  var key = `%${req.query.key}%`;
  var query = `SELECT product.id, name, description, image, category, quantity, date_added, date_updated FROM product INNER JOIN category on category.id = product.id_category`;

  if (req.query.key) {
    connection.query(
      query +
        ` WHERE name LIKE ?` +
        ` ORDER BY ${sortBy} ${sort} LIMIT ${page} , ${limit}`,
      key,
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get all data!",
            data: results
          });
        }
      }
    );
  } else {
    connection.query(
      query + ` ORDER BY ${sortBy} ${sort} LIMIT ${page} , ${limit}`,
      function(err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get all data!",
            data: results
          });
        }
      }
    );
  }
};
