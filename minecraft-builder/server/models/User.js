const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    minecraftAccountName: String,
    // other fields as required
  },
  { strict: false } // Allows for fields not defined in the schema
);

const User = mongoose.model("User", userSchema, "users_collection");

module.exports = User;
