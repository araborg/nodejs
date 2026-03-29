const express = require("express");
const router = express.Router();

// controllers
const { authController } = require("../controllers");

const {
	signupValidator,
	signinValidator,
	emailValidator,
	verifyUserValidator,
} = require("../validators/auth");

const validate = require("../validators/validate");

// routes
router.post("/signup", signupValidator, validate, authController.signup);

router.post("/signin", signinValidator, validate, authController.signin);

router.post(
	"/send-verification-email",
	emailValidator,
	validate,
	authController.verifyCode,
);

router.post(
	"/verify-user",
	verifyUserValidator,
	validate,
	authController.verifyUser,
);

router.post(
	"/forgot-password-code",
	emailValidator,
	validate,
	authController.forgotPasswordCode,
);

// router.post = ("/recover-password")

module.exports = router;

/*

    {
        "name": "user_1",
        "email":"user_1@gmail.com",
        "password": "123456",
        "role": 3
    }


*/
