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

		// { "dept" : "Chemistry" }
		const { dept } = req.body;

		// const studentObj = await Student.findById(id);
		const studentObj = await Student.findOne({ _id: id }); // _id is d key coming 4rm mongodb
		// findOne can take oda obj keys & nt only id

		studentObj.dept = dept;

		studentObj.save();

		res.status(200).json({ message: "Student updated successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// update many student
app.put("/student/multiple", async (req, res, next) => {
	try {
		// notice how space word (Computer Science) was passed
		// http://localhost:8000/student/multiple?dept=Computer Science

		// const { dept } = req.query;
		// const { age } = req.body;

		// await Student.updateMany({ dept: dept }, { age: age });

		// http://localhost:8000/student/multiple?age=52
		const { age } = req.query;
		const { dept } = req.body;

		// // console.log(typeof age); // string

		await Student.updateMany({ age: age }, { dept: dept });

		res.status(200).json({ message: "Students updated successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// get a student
app.get("/student/single", async (req, res, next) => {
	try {
		// http://localhost:8000/student/single?email=oloko_oluwole@gmail.com

		const { email } = req.query;

		const student = await Student.findOne({ email: email });

		res.status(200).json({ data: student });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// get a student using id
app.get("/student/single/:studentId", async (req, res, next) => {
	try {
		// ds didn't work
		// const { id } = req.params;
		// const student = await Student.findById({ _id: id });

		// it will work unless we used id in d route
		// app.get("/student/single/:id", async (req, res, next) => {}

		// http://localhost:8000/student/single/69b1232f0e7cc3c6c6909075

		const { studentId } = req.params;

		// console.log(studentId);

		const student = await Student.findById({ _id: studentId });

		res.status(200).json({ data: student });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// get multiple student
app.get("/student/multiple", async (req, res, next) => {
	try {
		const { dept } = req.query;

		const students = await Student.find({ dept: dept });

		res.status(200).json({ data: students });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// get multiple student using

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
