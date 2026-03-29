const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const isAuth = async (req, res, next) => {
	try {
		const authorization =
			req.headers.authorization &&
			req.headers.authorization.split(" ");

		const token =
			authorization.length > 1 ? authorization[1] : null;

		console.log(token);

		if (token) {
			const payload = jwt(token, jwtSecret);
			console.log(payload);
		} else {
			res.code = 400;

			throw new Error("Token is required");
		}

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = isAuth;
