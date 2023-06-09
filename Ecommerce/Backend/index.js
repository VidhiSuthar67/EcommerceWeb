const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// MONGODB CONNECTION
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// Model
const userModel = mongoose.model("user", userSchema);

// API
app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  /*userModel.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
  });*/

  const data = findOne({ email: email });
  if (!data) {
      res.send({ message: "Successfully Signup" });
  }
  {
      res.send({ message: "Email is already register" });
  }
});
app.listen(PORT, () => console.log("Server is Running at : " + PORT));
