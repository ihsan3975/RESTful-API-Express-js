require("dotenv").config();
exports.verifyToken = function(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers.auth;
  const jwt = require("jsonwebtoken");
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader;
    // Next middleware
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log("Sucsess!");
        next();
      }
    });
  }
};
