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

app.get("/student", (req, res, next) => {
	// http://localhost:8000/student
	const missingStudent = student
		.findOne({
			name: "John Doe",
		})
		.then(() => res.status(201).send("Student found successfully"))
		.catch((err) => res.status(500).send(err.message));

	console.log(missingStudent);
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   Find 1 document:
    

*/
