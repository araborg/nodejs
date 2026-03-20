const express = require("express");

const router = express.Router();

// const todo = require("../controllers/todo");
const {
	homeController,
	addTodoFormController,
	updateTodoFormController,
	deleteTodoPageController,
	addTodoController,
	updateTodoController,
	deleteTodoController,
} = require("../controllers/todo");

// gets
// router.get("/", todo.homeController);
router.get("/", homeController);

// router.get("/add-todo", todo.addTodoFormController);
router.get("/add-todo", addTodoFormController);

// router.get("/update-todo", todo.updateTodoFormController);
router.get("/update-todo", updateTodoFormController);

// router.get("/delete-todo", todo.deleteTodoPageController);
router.get("/delete-todo", deleteTodoPageController);

// posts
// router.post("/add-todo", todo.addTodoController);
router.post("/add-todo", addTodoController);

// router.post("/update-todo/:id", todo.updateTodoController);
router.post("/update-todo/:id", updateTodoController);

// get
// router.get("/confirm-delete", todo.deleteTodoController);
router.get("/confirm-delete", deleteTodoController);

module.exports = router;
