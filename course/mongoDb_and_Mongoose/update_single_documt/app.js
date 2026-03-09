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

// find students
app.get("/student", (req, res, next) => {
	const { dept } = req.query; // req.query & not req.body
	console.log(dept);

	student
		.find({ dept: dept })
		.toArray()
		.then((data) => res.status(200).json(data)) // notice we use data here
		.catch((err) => res.status(500).send(err.message));
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   Find 1 document:
    

*/
