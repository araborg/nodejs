const path = require("path");
const { validateExtension } = require("../validators/file");

const { uploadFileToS3, signedUrl } = require("../utils/awsS3");
const { File } = require("../models");

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

		const key = await uploadFileToS3({ file, ext });

		if (key) {
			const newFile = new File({
				key: key,
				size: file.size,
				mimetype: file.mimetype,
				createdBy: req.user._id,
			});

			console.log(newFile);

			await newFile.save();
		}

		// res.json({ ok: true });
		res.status(201).json({
			code: 201,
			status: true,
			message: "File uploaded successfully",
			data: { key },
		});
	} catch (error) {
		next(error);
	}
};

const getSignedUrl = async (req, res, next) => {
	// http://localhost:2000/api/v1/file/signed-url?key=2457887799877

	try {
		const { key } = req.query;

		const url = await signedUrl(key);

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get signed url successfully",
			data: { url },
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { uploadFile, getSignedUrl };
