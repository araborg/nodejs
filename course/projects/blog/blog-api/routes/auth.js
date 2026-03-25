const express = require("express");
const router = express.Router();

// controllers
const { authController } = require("../controllers");
const { signupValidator } = require("../validators/auth");
const validate = require("../validators/validate");

// routes
router.post("/signup", signupValidator, validate, authController.signup);
router.post("/signin", authController.signin);

module.exports = router;
