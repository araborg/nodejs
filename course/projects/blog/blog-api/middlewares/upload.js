const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./upload");
	},

	filename: (req, file, callback) => {
		// original_file_name_12_digit_random_number.ext
		const originalName = file.originalname;
		const extension = path.extname(originalName);
		const filename = originalName.replace(extension, "");
		const compressedFilename = filename.split(" ").join("_");
	},
});

const upload = multer({
	storage: storage,
});

module.exports = upload;
