const express = require("express");
const mongodb = require("mongodb");

const app = express();

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
		.then(() => res.status(201).send("Student added successfully"))
		.catch((err) => res.status(500).send(err.message));
});

// find one student
// app.get("/student/:id", (req, res, next) => {
app.get("/student", (req, res, next) => {
	// http://localhost:8000/student

	// student
	// 	// .findOne({ name: "John Doe2" })
	// 	.findOne({ email: "john3@gmail.com" })
	// 	.then((data) => res.status(200).json(data)) // notice we use data here
	// 	.catch((err) => res.status(500).send(err.message));

	// using postman url
	// http://localhost:8000/student?email=john1@gmail.com

	// const { email } = req.query; // req.query & not req.body
	// console.log(email);

	const { id } = req.params; // req.query & not req.body
	console.log(id);
	// console.log(email);

	student
		// .findOne({ name: "John Doe2" })
		.findById({ _id: id })
		// .findOne({ email: email })
		.then((data) => res.status(200).json({ data: data })) // notice we use data here
		.catch((err) => res.status(500).send(err.message));
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   Find 1 document:
    

*/
