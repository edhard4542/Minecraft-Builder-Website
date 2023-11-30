const express = require("express");
require("dotenv").config();
const cors = require("cors");
const usersRoute = require("./api/users");
const userRoute = require("./api/user");
const { connectDB } = require("./database/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);

console.log("trying to hit users endpoint...");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
