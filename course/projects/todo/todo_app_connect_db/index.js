const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

// init app
const app = express();

const connectionUrl = "mongodb://localhost:27/todoDb";

mongoose
	.connect(connectionUrl)
	.then()
	.catch((err) => console.log(err));

// view engine
app.set("view engine", "ejs");

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
