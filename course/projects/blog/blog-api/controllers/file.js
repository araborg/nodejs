const path = require("path");
const { validateExtension } = require("../validators/file");

const uploadFile = async (req, res, next) => {
	// http://localhost:2000/api/v1/file/upload

	try {
		const { file } = req;

		if (!file) {
			res.code = 400;

			throw new Error("File is not selected");
		}

		const ext = path.extname(file.originalname);

		const isValidExt = validateExtension(ext);

		if (!isValidExt) {
			res.code = 400;

			throw new Error("Only .jpg or .jpeg or .png is allowed");
		}

		res.json({ ok: true });
	} catch (error) {
		next(error);
	}
};

module.exports = { uploadFile };
