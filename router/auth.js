const express = require("express");
const { register } = require("../controller/auth/RegisterController");
const { login } = require("../controller/auth/LoginController");
const { ProfileUpdate } = require("../controller/auth/ProfileUpdate");
const upload = require("../config/userMulter");

const router = express.Router();

// Registration route
router.post("/register", register);

// Login route
router.post("/login", login);

// Profile update route
router.put("/profile/:id", upload.single("profileImage"), ProfileUpdate);

module.exports = router;