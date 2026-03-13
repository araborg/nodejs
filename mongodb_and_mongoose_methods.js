/*
Add/Cr8 a doc:

mongodb methods:

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

// name your db
const db = client.db("schoolDb");

const student = db.collection("student");

insertOne:
    student
		.insertOne({
			name: "John Doe",
			email: "john@gmail.com",
			age: 22,
			dept: "CS",
		})


mongoose methods:

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ds is import to receive json data 4rm postman
app.use(express.json());

// connect to db: note d  diff
const connectionUrl = "mongodb://localhost:27017/schoolDb";

mongoose
	.connect(connectionUrl)
	.then(() => console.log("Database connection successful"))
	.catch((error) => console.log(error));

const studentSchema = mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	dept: String,
});

const Student = mongoose.model("student", studentSchema);


    // req.body comes from postman
    const { name, email, age, dept } = req.body;

    // cr8 d obj inside d route
    const newStudent = new Student({
        name: name,
        email: email,
        age: age,
        dept: dept,
    });

    await newStudent.save();
    
    // This will also work:
    const newStudent = new Student(req.body);
    
    await newStudent.save();

--------------------

Add/Cr8 multiple docs:
mongodb methods:



mongoose methods:




====================================

Read a doc:
mongodb methods:



mongoose methods:




--------------------

Read multiple doc:
mongodb methods:



mongoose methods:




====================================

Update a doc:
mongodb methods:



mongoose methods:




--------------------

Update multiple docs:
mongodb methods:



mongoose methods:




====================================

Delete a doc:
mongodb methods:



mongoose methods:




--------------------

Delete multiple docs:
mongodb methods:



mongoose methods:




====================================




*/
