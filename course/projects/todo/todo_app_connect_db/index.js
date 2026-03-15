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
	.catch((err) => console.log(err));

// view engine
app.set("view engine", "ejs");

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
