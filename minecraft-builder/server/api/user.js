const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("inside of get call");
  try {
    const someUsers = await User.find({});
    console.log(someUsers, "someUsers");
    res.json(someUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;