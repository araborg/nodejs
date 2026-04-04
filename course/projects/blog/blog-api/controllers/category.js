const { Category, User } = require("../models");

const addCategory = async (req, res, next) => {
	// http://localhost:2000/api/v1/category

	try {
		const { title, desc } = req.body;

		const { _id } = req.user;

		const isCategoryExist = await Category.findOne({ title });

		if (isCategoryExist) {
			res.code = 400;

			throw new Error("Category already exist");
		}

		const user = await User.findById(_id);

		if (!user) {
			res.code = 404;

			throw new Error("User not found");
		}

		const newCategory = new Category({
			title: title,
			desc: desc,
			updatedBy: _id,
		});

		await newCategory.save();

		res.status(200).json({
			code: 200,
			status: true,
			message: "Category added successfully",
		});
	} catch (error) {
		next(error);
	}
};

const updateCategory = async (req, res, next) => {
	// http://localhost:2000/api/v1/category/69cb97ea7e704a80af638bd3

	try {
		const { id } = req.params;

		const { _id } = req.user;

		const { title, desc } = req.body;

		const category = await Category.findById(id);

		if (!category) {
			res.code = 404;

			throw new Error();
		}

		const isCategoryExist = await Category.findOne({ title });

		// ds prevents dublicate titles
		if (
			isCategoryExist &&
			isCategoryExist.title === title &&
			String(isCategoryExist._id) !== String(category._id)
		) {
			res.code = 400;

			throw new Error("Title already exist");
		}

		category.title = title ? title : category.title;
		category.desc = desc;

		category.updatedBy = _id;

		await category.save();

		res.status(200).json({
			code: 200,
			status: true,
			message: "Category updated successfully",
			data: { category },
		});
	} catch (error) {
		next(error);
	}
};

const deleteCategory = async (req, res, next) => {
	// http://localhost:2000/api/v1/category/69cb97ea7e704a80af638bd3

	try {
		const { id } = req.params;

		const category = await Category.findById(id);

		if (!category) {
			res.code = 404;

			throw new Error("Category not found");
		}

		await Category.findByIdAndDelete(id);

		res.status(200).json({
			code: 200,
			status: true,
			message: "Category deleted successfully",
			data: { category },
		});
	} catch (error) {
		next(error);
	}
};

/*
specific category or all categories
const getCategories = async (req, res, next) => {
	try {
		// http://localhost:2000/api/v1/category?q=desc_1
		// http://localhost:2000/api/v1/category?q=title_1

		// searching for specific category using query
		const { q } = req.query;

		let query = {};

		if (q) {
			const search = RegExp(q, "i");

			query = { $or: [{ title: search }, { desc: search }] };
		}

		const categories = await Category.find(query);

		// searching for all categories
		// const categories = await Category.find({});
		// http://localhost:2000/api/v1/category

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get category list successfully",
			data: { categories },
		});
	} catch (error) {
		next(error);
	}
};
*/

// specific category or all categories and paginatn
const getCategories = async (req, res, next) => {
	// http://localhost:2000/api/v1/category?size=5&page=2

	try {
		const { q, size, page } = req.query;

		let query = {};

		const sizeNumber = parseInt(size) || 10;
		const pageNumber = parseInt(page) || 1;

		if (q) {
			const search = RegExp(q, "i");

			query = { $or: [{ title: search }, { desc: search }] };
		}

		// const totalDoc = await Category.countDocuments({});
		const totalDoc = await Category.countDocuments(query);

		const pages = Math.ceil(totalDoc / sizeNumber);

		const categories = await Category.find(query)
			.skip((pageNumber - 1) * sizeNumber)
			.limit(sizeNumber)
			.sort({ updatedBy: -1 });

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get category list successfully",
			data: { categories, totalDoc, pages },
		});
	} catch (error) {
		next(error);
	}
};

const getCategory = async (req, res, next) => {
	// http://localhost:2000/api/v1/category/69d0f0b9b1a3b6c40a9e895f

	try {
		const { id } = req.params;

		const category = await Category.findById(id);

		if (!category) {
			res.code = 404;

			throw new Error("Category not found");
		}

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get category successfully",
			data: { category },
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	addCategory,
	updateCategory,
	deleteCategory,
	getCategories,
	getCategory,
};
