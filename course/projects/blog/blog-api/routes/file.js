const express = require("express");
const router = express.Router();

const { fileController } = require("../controllers");

const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

router.post(
	"/upload",
	isAuth,
	upload.single("image"),
	// upload.array("image", 3),
	fileController.uploadFile,
);

router.get("/signed-url", isAuth, fileController.getSignedUrl);

router.delete("/delete-file", isAuth, fileController.deleteFile);

module.exports = router;
