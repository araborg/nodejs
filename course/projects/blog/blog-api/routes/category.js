const express = require("express");
const router = express.Router();

const { categoryController } = require("../controllers");
const { addCategoryValidator } = require("../validators/category");

const validate = require("../validators/validate");
const isAuth = require("../middlewares/isAuth");

router.post("/", addCategoryValidator, validate, isAuth categoryController.addCategory);

module.exports = router;
