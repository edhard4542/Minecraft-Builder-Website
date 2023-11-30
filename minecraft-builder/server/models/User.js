const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  birthday: String,
});

const User = mongoose.model("User", userSchema, "users_collection");

module.exports = User;
