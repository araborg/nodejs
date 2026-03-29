const isAuth = async (req, res, next) => {
	try {
		const authorization =
			req.headers.authorization &&
			req.headers.authorization.split(" ");

		console.log(authorization);

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = isAuth;
