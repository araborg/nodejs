const mongoose = require("mongoose");

// Schema
const todoSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		desc: String,
	},

	{ timestamps: true },
);

const Todo = mongoose.model("todoApp", todoSchema);
