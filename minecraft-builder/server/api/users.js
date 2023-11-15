const express = require("express");
const axios = require("axios");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  //   try {
  //   const allUsers = await User.find({ firstName: "Travis" });
  //     //   console.log(folders);
  //     res.status(200).json(allUsers);
  //   } catch (error) {
  //     console.log(error);
  //   }
  try {
    // const users = await db.getCollection("users").find().toArray();

    const allUsers = await User.find().toArray();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
