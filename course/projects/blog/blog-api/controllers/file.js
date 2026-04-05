const uploadFile = async (req, res, next) => {
	// http://localhost:2000/api/v1/file/upload

	try {
		res.json({ ok: true });
	} catch (error) {
		next(error);
	}
};

module.exports = { uploadFile };
