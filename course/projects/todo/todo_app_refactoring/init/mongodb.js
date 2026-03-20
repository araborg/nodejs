const mongoose = require("mongoose");

// db init
// const connectionUrl = "mongodb://localhost:27017/todoDb";

const connectMongodb = async () => {
	try {
		await mongoose.connect(process.env.CONNECTION_URL);

		console.log("Database connection successfull");
	} catch (error) {
		console.log(error.message);

		process.exit(1);
	}
};

module.exports = connectMongodb;
