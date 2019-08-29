const connection = require("../config/db");

exports.getAll = function(req, res) {
  connection.query(
    "SELECT product.id, name, category, description, image, quantity, date_added, date_updated FROM product INNER JOIN category on category.id = product.id_category",
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
};

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

exports.insertData = (req, res) => {
  const {
    name,
    description,
    image,
    id_category,
    quantity,
    date_added,
    date_updated
  } = req.body;

  connection.query(
    "INSERT INTO `product` (name, description, image, id_category, quantity, date_added, date_updated) values (?, ?, ?, ?, ?, ?, ?)",
    [name, description, image, id_category, quantity, date_added, date_updated],
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
    date_added,
    date_updated
  } = req.body;

  if (
    !name ||
    !description ||
    !image ||
    !id_category ||
    !quantity ||
    !date_added ||
    !date_updated
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
        date_updated,
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
            message: "Cannot delete data with id: " + req.params.id,
            coba: "nilaii" + results.affectedRows
          });
        }
      }
    }
  );
};

exports.getOther = function(req, res) {
  console.log("someone access 404");
  res.send("404 Not Found!");
};
