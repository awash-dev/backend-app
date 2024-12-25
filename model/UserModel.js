const mongoose = require("mongoose");

// Define the User schema with timestamps
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create the User model
const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
