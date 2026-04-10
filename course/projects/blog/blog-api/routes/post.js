const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const { postController } = require("../controllers");

router.post("/", isAuth, postController.addPost);

module.exports = router;
