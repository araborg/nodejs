const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const generateToken = (user) => {
	const token = jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
		},

		jwtSecret,

		{
			expiresIn: "7d",
		},
	);

	return token;
};

module.exports = generateToken;

/*
Run this command:
node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"

*/
