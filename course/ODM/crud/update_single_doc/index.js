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

// Schema
const studentSchema = mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	dept: String,
});

const Student = mongoose.model("student", studentSchema);

// add single student
app.post("/student/single", async (req, res, next) => {
	try {
		// http://localhost:8000/student/single

		const { name, email, age, dept } = req.body;

		const newStudent = new Student({
			name: name,
			email: email,
			age: age,
			dept: dept,
		});

		await newStudent.save();

		res.status(200).json({ message: "Student added successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// add multiple student
app.post("/student/multiple", async (req, res, next) => {
	// http:localhost:8000/student/multiple

	try {
		await Student.insertMany(req.body);

		res.status(200).json({ message: "Students added successfully" });
	} catch (error) {
		res.send(500).json({ message: error.message });
	}
});

// update a student
app.put("/student/single", async (req, res, next) => {
	try {
		// http://localhost:8000/student/single?email=student_2@gmail.com

		// { "dept":"Medicine&Surgery" }

		const { email } = req.query; // query uses ?

		const { dept } = req.body;

		// console.log(email, dept);

		await Student.findOneAndUpdate({ email: email }, { dept: dept }); // 2 objs

		res.status(200).json({ message: "Student updated successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// update a student using id
app.put("/student/single/:id", async (req, res, next) => {
	try {
		// http://localhost:8000/student/single/69b11fcc4ee66372b62fa5d9

		const { id } = req.params; // params uses id

		// { "dept" : "Pharmacy" }
		const { dept } = req.body;

		const studentObj = await Student.findById(id);
		studentObj.dept = dept;

		studentObj.save();

		res.status(200).json({ message: "Student updated successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

const errorMiddleware = (error, req, res, next) => {
	res.status(500).send((err) => err.message);
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Mongoose
        
    What to install:
    npm init

    nodemon:
    npm i nodemon

    express:
    npm i express

    mongodb:
    npm i mongodb

    mongoose:
    npm i mongoose

*/
