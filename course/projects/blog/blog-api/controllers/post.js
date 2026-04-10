const { File, Category, Post } = require("../models");

const addPost = async (req, res, next) => {
	/* 
        http://localhost:2000/api/v1/posts

        { "title": "Title_1", "desc": "Desc_1", "file": "", "category": "69cb982d7e704a80af638bd8" }
    */

	try {
		const { title, desc, file, category } = req.body;

		const { _id } = req.user;

		if (file) {
			const isFileExist = await File.findById(file);

			if (!isFileExist) {
				res.code = 404;

				throw new Error("File not found");
			}
		}

		const isCategoryExist = await Category.findById(category);

		if (!isCategoryExist) {
			res.code = 404;

			throw new Error("Category not found");
		}

		const newPost = new Post({
			title,
			desc,
			file,
			category,
			updatedBy: _id,
		});

		await newPost.save();

		res.status(201).json({
			code: 201,
			status: true,
			message: "Post added successfully",
		});
	} catch (error) {
		next(error);
	}
};

const updatePost = async (req, res, next) => {
	try {
		//
	} catch (error) {
		next(error);
	}
};

module.exports = { addPost, updatePost };
