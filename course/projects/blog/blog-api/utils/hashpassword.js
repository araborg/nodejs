const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(12, (error, salt) => {
			if (error) {
				return reject(error);
			}
		});
	});
};

module.exports = hashPassword;
