const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

// pages
app.get("/", async (req, res, next) => {
	try {
		const todos = await Todo.find({}).sort({ createdAt: -1 });

		res.locals.moment = moment;

		res.render("index", { title: "List todo", todos: todos });
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

// routes
app.post("/add-todo", async (req, res, next) => {
	try {
		const { title, desc } = req.body;

		if (!title) {
			return res.status(400).json({ message: "Title is required" });
		}

		const newTodo = new Todo({ title, desc });

		await newTodo.save();

		res.redirect("/");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
