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
	// note d diff: req.query & req.body?

	// http://localhost:8000/student?email=john2@gmail.com
	const { email } = req.query;

	// updating 1 item
	// { "dept": "Yoruba" }
	// const { dept } = req.body;

	// updating 2 or more items
	//    { "dept":"Yoruba", "age":100 }
	const { dept, age } = req.body;

	student
		// .findOneAndUpdate({ email }, { $set: { dept: dept } }) // 2 objs
		.findOneAndUpdate(
			{ email },

			//
			// { $set: { dept: dept } },
			{ $set: { dept: dept, age: age } },

			//
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

// update many students
app.put("/student", (req, res, next) => {
	// http://localhost:8000/student?age=92

	// note d diff: req.query & req.body?

	const { age } = req.query;
	// console.log(typeof age);

	const { dept } = req.body;

	student
		.updateMany(
			{ age: parseInt(age) }, // req.query

			// { $set: { dept: dept } },
			{ $set: { dept } }, // req.body
		) // 3 objs
		.then((data) => {
			// console.log(data);

			res.status(200)
				//
				.json({
					message: "Students updated successfully",

					updatedStudents: data,
				});
		})
		.catch((error) => res.status(500).json({ message: error.message }));
});

// delete a student
app.delete("/student", (req, res, next) => {
	// http://localhost:8000/student?email=john1@gmail.com

	const { email } = req.query;

	student
		.findOneAndDelete({ email: email })
		.then(() => res.status(200).send("Student successfully deleted"))
		.catch((err) => res.status(500).send({ message: err.message }));
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
    

*/
