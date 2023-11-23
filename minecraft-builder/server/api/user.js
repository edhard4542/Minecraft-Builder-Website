const express = require("express");
const User = require("../models/User"); // Make sure this path is correct for your User model
const router = express.Router();

// POST endpoint to create a new user
router.post("/", async (req, res) => {
  try {
    console.log(req.body, "req.body"); // Log the request body to see what's being sent
    const newUser = new User(req.body);
    console.log(newUser, "newUser"); // Log the new user instance after it's defined

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error); // Log the full error for debugging
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
