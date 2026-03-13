/*
Mongodb and Monggose methods:
=============================

mongodb methods:
----------------

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

// collectns/doc
const student = db.collection("student");

ds can be:
const users = db.collection("users");
const books = db.collection("books"); etc


Add/Cr8 a doc:
--------------

insertOne():

    student
		.insertOne({
			name: "John Doe",
			email: "john@gmail.com",
			age: 22,
			dept: "CS",
		})

Or: 
    student.insertOne(req.body)


mongoose methods:
-----------------

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ds is import to receive json data 4rm postman
app.use(express.json());

// connect to db: note d  diff
const connectionUrl = "mongodb://localhost:27017/schoolDb";

// d name of d db was added to d url

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
    
    // This will also work: i.e recieving obj 4rm postman
    const newStudent = new Student(req.body);
    
    await newStudent.save();

    
mongodb methods:
    
Add/Cr8 multiple docs:
----------------------

insertMany():

    student
		// .insertMany([{}, {}]) // adding students 4rm code editor
		.insertMany(req.body)
		.then(() => res.status(201).send("Students added successfully"))
		.catch((err) => res.status(500).send(err.message));


mongoose methods:
-----------------

insertMany():

Student.insertMany(
    {
        name: "Student 1",
        email: "student_1@gmail.com",
        age: 22,
        dept: "Computer Science",
    }, 

    {
        name: "Student 2",
        email: "student_2@gmail.com",
        age: 30,
        dept: "Computer Science",
    }
):

await Student.insertMany(req.body);


====================================


mongodb methods:
----------------

Read a doc:

findOne():

    // req.query & not req.body
    const { email } = req.query; 

    student
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

    
// get multiple students irrespective of query using empty obj
find({}):

const students = await Student.find({});


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


findOne():
// findOne can take oda obj keys & nt only id

    const { id } = req.params; // params uses id

    const { dept } = req.body;

    // _id is d key coming 4rm mongodb
    const studentObj = await Student.findOne({ _id: id }); 
    
    // const studentObj = await Student.findById(id);

    studentObj.dept = dept;

    studentObj.save();

    res.status(200).json({ message: "Student updated successfully" });

--------------------

Update multiple docs:

mongodb methods:

updateMany(): 

	const { age } = req.query;

	const { dept } = req.body;

	student
		.updateMany(
			{ age: parseInt(age) }, // req.query

			{ $set: { dept: dept } },
		) // 3 objs
		.then((data) => {
			res
                .status(200)
                .json({
					message: "Students updated successfully",

					updatedStudents: data,
				});
		})
		.catch((error) => res.status(500).json({ message: error.message }));


mongoose methods:

updateMany():

    const { age } = req.query;

    const { dept } = req.body;

    // console.log(typeof age); // string

    await Student.updateMany({ age: age }, { dept: dept });

    res.status(200).json({ message: "Students updated successfully" });


====================================

Delete a doc:
mongodb methods:

findOneAndDelete():

    const { email } = req.query;

	student
		.findOneAndDelete({ email: email })
		.then(() => res.status(200).send("Student successfully deleted"))
		.catch((err) => res.status(500).send({ message: err.message }));


mongoose methods:

findOneAndDelete():

    const { email } = req.query;

    const student = await Student.findOneAndDelete({ email });
    res.status(200).json({ message: student });


findByIdAndDelete():
    const { id } = req.params;

    // const student = await Student.findByIdAndDelete({ _id: id });
    const student = await Student.findByIdAndDelete(id);
    
    res.status(200).json({ message: student });

--------------------

Delete multiple docs:
mongodb methods:

deleteMany():

    const { dept } = req.query;

	student
		.deleteMany({ dept: dept })
		.then(() =>
			res.status(200).send({ message: "Students successfully deleted" }),
		)
		.catch((err) => req.status(500).send({ message: err.message }));


mongoose methods:

deleteMany():

    const { dept } = req.query;

    // ds deletes all d student with d dept passed as query
    await Student.deleteMany({ dept: dept });


// delete all students irrespective of queries/params
deleteMany({}):

await Student.deleteMany({});


====================================


*/
