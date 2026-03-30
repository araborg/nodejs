const { check } = require("express-validator");
const { model } = require("mongoose");

const addCategoryValidator = [
	check("title").notEmpty().withMessage("Title is required"),
];

module.exports = { addCategoryValidator };
