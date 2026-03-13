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

insertOne():
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

save():
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

insertMany():
    student
		// .insertMany([{}, {}]) // adding students 4rm code editor
		.insertMany(req.body)
		.then(() => res.status(201).send("Students added successfully"))
		.catch((err) => res.status(500).send(err.message));


mongoose methods:

insertMany():

await Student.insertMany(req.body);


====================================

Read a doc:
mongodb methods:

findOne():

    // req.query & not req.body
    const { email } = req.query; 

    student
		// .findOne({ name: "John Doe2" })
		.findOne({ email: email })
		.then((data) => res.status(200).json(data)) // notice we use data here
		.catch((err) => res.status(500).send(err.message));


findById():
student.findById(): does not work with mongodb

mongoose methods:

findOne():

    const { email } = req.query;

    const student = await Student.findOne({ email: email });

findById():
    const student = await Student.findById({ _id: studentId });


--------------------

Read multiple doc:

mongodb methods:

find().toArray():

    student
		.find({ age: parseInt(age) }) // mk use of a commmon value e.g age, subject, gender
		.toArray() // note ds method
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).send(err, message));


mongoose methods:

find():
    const { dept } = req.query;

    const students = await Student.find({ dept: dept });


====================================

Update a doc:
mongodb methods:

findOneAndUpdate() with $set:{}:

	const { email } = req.query;

	// updating 2 or more items
	const { dept, age } = req.body;

	student
		.findOneAndUpdate(
			{ email },

			{ $set: { dept: dept, age: age } },

			{ returnDocument: "after" },
		) // 3 objs
		.then((data) => {
			res
				.status(200)
				.json({
					message: "Student updated successfully",
					updatedStudent: data,
				});
		})
		.catch((error) => res.status(500).json({ message: error.message }));


mongoose methods:

findOneAndUpdate():

    const { email } = req.query; // query uses ?

    const { dept } = req.body;

    await Student.findOneAndUpdate({ email: email }, { dept: dept }); // 2 objs


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
