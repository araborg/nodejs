const { Category } = require("../models");

const addCategory = async (req, res, next) => {
	try {
		const { title, desc } = req.body;

		const { _id } = req.user;

		const isCategoryExist = await Category.findOne({ title });

		if (isCategoryExist) {
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { addCategory };
