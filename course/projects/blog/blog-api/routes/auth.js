const express = require("express");
const router = express.Router();

// controllers
const { authController } = require("../controllers");
const { signupValidator } = require("../validators/auth");

// routes
router.post("/signup", authController.signup);

module.exports = router;
