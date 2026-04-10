const express = require("express");
const router = express.Router();

// controllers
const { authController } = require("../controllers");

const {
	signupValidator,
	signinValidator,
	emailValidator,
	verifyUserValidator,
	recoverPasswordValidator,
	changePasswordValidator,
	updateProfileValidator,
} = require("../validators/auth");

const validate = require("../validators/validate");

const isAuth = require("../middlewares/isAuth");

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

router.post(
	"/recover-password",
	recoverPasswordValidator,
	validate,
	authController.recoverPassword,
);

router.put(
	"/change-password",
	changePasswordValidator,
	validate,
	isAuth,
	authController.changePassword,
);

router.put(
	"/update-profile",
	updateProfileValidator,
	isAuth,
	validate,
	authController.updateProfile,
);

router.get("/current-user", isAuth, authController.currentUser);

module.exports = router;

/*

    {
        "name": "user_1",
        "email":"user_1@gmail.com",
        "password": "123456",
        "role": 3
    }


*/
