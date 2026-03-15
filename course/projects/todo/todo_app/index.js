const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

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
app.use(express.static(path.join(__dirname, "public"))); // app.use()

// routes
app.get("/", (req, res, next) => {
	try {
		res.render("index");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/add-todo", (req, res, next) => {
	try {
		res.render("newTodo");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/update-todo", (req, res, next) => {
	try {
		res.render("updateTodo");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/delete-todo", (req, res, next) => {
	try {
		res.render("deleteTodo");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
