const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const someUsers = await User.find({});
    console.log(someUsers, "someUsers");
    const newUsersShape = someUsers.map((fetchedUser) => {
      return {
        id: fetchedUser.userId,
        firstName: fetchedUser.firstName,
        lastName: fetchedUser.lastName,
        email: fetchedUser.email,
        phoneNumber: fetchedUser.phoneNumber,
        birthday: fetchedUser.birthday,
      };
    });
    res.json(newUsersShape);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    console.log(user, "fetchedUser");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newUserShape = {
      id: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      birthday: user.birthday,
    };

    res.json(newUserShape);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, phoneNumber, birthday } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId },
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        birthday,
      },
      { new: true }
    ); // `new: true` to return the updated object

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
