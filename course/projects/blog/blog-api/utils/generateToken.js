const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	const token = jwt.sign({
		_id: user._id,
		name: user.name,
		email: user.email,
		role: user.role,
	});
};

module.exports = generateToken;
