const { kMaxLength } = require("buffer");
const { timeStamp } = require("console");
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

// Schema
/*
const todoSchema = mongoose.Schema({
	desc: String,
    });
    
    */
const todoSchema = mongoose.Schema(
	{
		// title: String,

		// title: { type: String, required: true, unique: true, kMaxLength: 20, minLenth: 5, trim: true,},

		title: {
			type: String,
			required: true,
		},

		desc: String,
	},

	{ timeStamp: true },
);

const Todo = mongoose.model("todoApp", todoSchema);

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // app.use()

// routes
app.get("/", (req, res, next) => {
	try {
		res.render("index", { title: "List todo" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/add-todo", (req, res, next) => {
	try {
		res.render("newTodo", { title: "New todo" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/update-todo", (req, res, next) => {
	try {
		res.render("updateTodo", { title: "Update todo" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/delete-todo", (req, res, next) => {
	try {
		res.render("deleteTodo", { title: "Delete todo" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
