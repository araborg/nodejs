const mongoose = require("mongoose");

const connectMongodb = async () => {
	try {
		await mongoose.connect();
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = connectMongodb;
