const mongoose = require("mongoose");

//require("dotenv").config(); // syntax of including env file
const dbconnect = () => {
  mongoose.connect('mongodb://localhost:27017/DataBase')
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((error) => {
      console.log("issue in DB");
      console.error(error.message);
    });
  // if we have to feed the env into process then we have to install .env library
};

module.exports = dbconnect;
