require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const URL =
  process.env.DB_SERVER +
  "://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  "@cluster0.kespz.mongodb.net/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//db connection
mongoose.connect(URL, options).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});


