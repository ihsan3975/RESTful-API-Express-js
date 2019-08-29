require("dotenv").config();

// import dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const UserRoute = require("./routes");
const cors = require("cors");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", UserRoute);
