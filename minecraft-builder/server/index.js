const express = require("express");
require("dotenv").config();
const cors = require("cors");
const usersRoute = require("./api/users");
const { connectDB } = require("./database/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);

// app.use("/api/add-user", userRoute);

console.log("trying to hit users endpoint...");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
