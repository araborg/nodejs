const Todo = require("../models/Todo");
const moment = require("moment");

const homeController = async (req, res, next) => {
	try {
		const todos = await Todo.find({}).sort({ createdAt: -1 });

		res.locals.moment = moment;

		res.render("index", { title: "List todo", todos: todos });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
