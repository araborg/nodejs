const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

const { fileController } = require("../controllers");

router.post(
	"/upload",
	isAuth,
	upload.single("image"),
	fileController.uploadFile,
);

module.exports = router;
