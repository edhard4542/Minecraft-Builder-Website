const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  //   phoneNumber: String,
});

const User = mongoose.model("User", userSchema, "users_collection");

module.exports = User;
