const isAuth = async (req, res, next) => {
	try {
		console.log(req.headers);

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = isAuth;
