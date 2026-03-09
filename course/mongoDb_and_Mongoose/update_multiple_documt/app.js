const express = require("express");
const mongodb = require("mongodb");

const app = express();

// ds is import to receive json data 4rm postman
app.use(express.json());

// connect to db
const connectionUrl = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(connectionUrl);

client
	.connect()
	.then(() => console.log("Database connection successful"))
	.catch((error) => console.log(error));

// add single documt
const db = client.db("schoolDb");

const student = db.collection("student");

// add multiple students
app.post("/student", (req, res, next) => {
	// http://localhost:8000/student

	// console.log(req.body);

	student
		.insertMany(req.body)
		// .then(() => res.status(201).send("Student added successfully"))
		.then((data) => res.status(201).json(data))
		.catch((err) => res.status(500).send(err.message));
});

// find many students
app.get("/student", (req, res, next) => {
	// http://localhost:8000/student?dept=CS

	const { dept } = req.query; // req.query & not req.body
	// console.log(dept);

	student
		.find({ dept: dept })
		.toArray()
		.then((data) => res.status(200).json(data)) // notice we use data here
		.catch((err) => res.status(500).send(err.message));
});

// update a student
app.put("/student", (req, res, next) => {
	// http://localhost:8000/student?email=john2@gmail.com

	// note d diff: req.query & req.body?

	const { email } = req.query;

	const { dept, age } = req.body;

	student
		// .findOneAndUpdate({ email }, { $set: { dept: dept } }) // 2 objs
		.findOneAndUpdate(
			{ email }, // req.query

			// { $set: { dept: dept } },
			{ $set: { dept: dept, age: age } }, // req.body

			// { returnDocument: "before" },
			{ returnDocument: "after" },
		) // 3 objs
		.then((data) => {
			console.log(data);

			res
				//
				.status(200)
				.json({
					message: "Student updated successfully",
					updatedStudent: data,
				});
		})
		.catch((error) => res.status(500).json({ message: error.message }));
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   Find 1 document:
    

*/
