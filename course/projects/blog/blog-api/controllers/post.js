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
	// http://localhost:2000/api/v1/posts/69d8bd970d853bfee5589e97

	try {
		const { id } = req.params;

		const { _id } = req.user;

		const { title, desc, file, category } = req.body;

		if (file) {
			const isFileExist = await File.findById(file);

			if (!isFileExist) {
				res.code = 404;

				throw new Error("File not found");
			}
		}

		if (category) {
			const isCategoryExist = await Category.findById(category);

			if (!isCategoryExist) {
				res.code = 404;

				throw new Error("Category not found");
			}
		}

		const post = await Post.findById(id);

		if (!post) {
			res.code = 404;

			throw new Error("Post not found");
		}

		post.title = title ? title : post.title;
		post.desc = desc;
		// post.file = file;
		post.category = category ? category : post.category;
		post.updatedBy = _id;

		await post.save();

		res.status(200).json({
			code: 200,
			status: true,
			message: "Post updated successfully",
			data: { post },
		});
	} catch (error) {
		next(error);
	}
};

const deletePost = async (req, res, next) => {
	// http://localhost:2000/api/v1/posts/69d8bd970d853bfee5589e97

	try {
		const { id } = req.params;

		const post = await Post.findById(id);

		if (!post) {
			res.code = 404;

			throw new Error("Post not found");
		}

		await Post.findByIdAndDelete(id);

		res.status(200).json({
			code: 200,
			status: true,
			message: "Post deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

const getPosts = async (req, res, next) => {
	// http://localhost:2000/api/v1/posts

	// http://localhost:2000/api/v1/posts?size=5&page=3

	try {
		const { page, size, q, category } = req.query;

		// console.log(page, size);

		const pageNumber = parseInt(page) || 1;
		const sizeNumber = parseInt(size) || 10;

		let query = {};

		if (q) {
			const search = new RegExp(q, "i");

			query = {
				$or: [{ title: search }],
			};
		}

		if (category) {
			query = { ...query, category };
		}

		console.log(category);

		const total = await Post.countDocuments(query);

		const pages = Math.ceil(total / sizeNumber);

		const posts = await Post.find(query)
			.populate("file")
			.populate("category")
			.populate(
				"updatedBy",
				"-password -verificationCode -forgotPasswordCode",
			)
			// .sort({ updatedBy: -1 })
			.sort({ _id: -1 })
			.skip((pageNumber - 1) * sizeNumber)
			.limit(sizeNumber);

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get post list successfully",
			data: { posts, total, pages },
		});
	} catch (error) {
		next(error);
	}
};

const getPost = async (req, res, next) => {
	// http://localhost:2000/api/v1/posts/69d8ceabc5314fd4d87b1a2e

	try {
		const { id } = req.params;

		const post = await Post.findById(id)
			.populate("file")
			.populate("category")
			.populate(
				"updatedBy",
				"-password -verificationCode -forgotPasswordCode",
			);

		if (!post) {
			res.code = 404;

			throw new Error("Post not found");
		}

		res.status(200).json({
			code: 200,
			status: true,
			message: "Get post successfully",
			data: { post },
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { addPost, updatePost, deletePost, getPosts, getPost };
