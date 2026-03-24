const { check } = require("express-validator");

const signupValidator = [check("name"), check("email"), check("password")];
