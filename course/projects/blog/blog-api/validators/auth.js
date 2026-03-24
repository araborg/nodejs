const { check } = require("express-validator");

const signupValidator = [
	check("name").notEmpty().withMessage("Name is required"),
	check("email"),
	check("password"),
];
