const express = require("express");

const router = express.Router();

const todo = require("../controllers/todo");

// pages
router.get("/", todo.homeController);

router.get("/add-todo", todo.addTodoController);

router.get("/update-todo", todo.updateTodoFormController);

router.get("/delete-todo", todo.deleteTodoPageController);

// routes
router.post("/add-todo", todo.addTodoController);

module.exports = router;
