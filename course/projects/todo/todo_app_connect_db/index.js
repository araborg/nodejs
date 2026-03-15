const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

// init app
const app = express();

// db init
const connectionUrl = "mongodb://localhost:27017/todoDb";

mongoose
	.connect(connectionUrl)
	.then(() => console.log("Database connection successfull"))
	.catch((err) => console.log(err.message));

// view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res, next) => {
	try {
		res.render("index");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
