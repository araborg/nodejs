const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
	{
		title: { type: String, required: true },

		desc: String,

		// d user here mimic dt in User schema
		updatedBy: {
			type: mongoose.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},

	{ timestamps: true },
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
