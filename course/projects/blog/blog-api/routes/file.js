const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/isAuth");

const { fileController } = require("../controllers");

const multer = require("multer");

const upload = multer({
	dest: "./upload",
});

router.post("/upload", isAuth, fileController.uploadFile);

module.exports = router;
