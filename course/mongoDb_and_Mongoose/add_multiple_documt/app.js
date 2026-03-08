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

app.post("/student", (req, res, next) => {
	// http://localhost:8000/student
	student
		.insertOne({
			name: "John Doe",
			email: "john@gmail.com",
			age: 22,
			dept: "CS",
		})
		.then(() => res.status(201).send("Student added successfully"))
		.catch((err) => res.status(500).send(err.message));
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   
    

*/
