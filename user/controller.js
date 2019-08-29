require("dotenv").config();
const connection = require("../db");
const jwt = require("jsonwebtoken");
exports.login = function(req, res) {
  const email = req.body.email;
  connection.query(`SELECT * FROM userstable WHERE email = ?`, email, function(
    err,
    results
  ) {
    if (err) throw err;
    var user = {
      id: results[0]["id"],
      name: results[0]["full_name"],
      email: results[0]["email"]
    };
    jwt.sign({ user: user }, process.env.SECRET_KEY, function(err, token) {
      res.json({
        token: token
      });
    });
  });
};

exports.register = function(req, res) {
  const { full_name, email, password } = req.body;

  connection.query(
    "INSERT INTO `userstable` (full_name, email, password) values (?, ?, ?)",
    [full_name, email, password],
    function(err, results) {
      if (err) {
        console.log(err);
        res.status(400).json({
          status: 400,
          message: "Register Error!"
        });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Register Sucsess!",
          data: req.body
        });
      }
    }
  );
};
