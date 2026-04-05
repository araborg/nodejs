const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./upload");
	},
});

const upload = multer({
	storage: storage,
});

module.exports = upload;
