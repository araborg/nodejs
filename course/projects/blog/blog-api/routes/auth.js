const express = require("express");
const router = express.Router();

// controllers
const { authController } = require("../controllers");

// routes
router.post("/signup", authController);

module.exports = router;
