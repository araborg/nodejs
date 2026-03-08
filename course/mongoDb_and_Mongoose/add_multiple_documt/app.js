const express = require("express");
const mongodb = require("../find_single_documt /node_modules/mongodb/mongodb");

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
const db = client.db("schoolDb"); // schoolDb is d DB name

const student = db.collection("student"); // "student" rep each doc

app.post("/student", (req, res, next) => {
	/*
	http://localhost:8000/student

	using postman to insert one & many docs:

	console.log(req.body);

	const { name, email, age, dept } = req.body;

	student
		.insertOne({
			name: name,
			email: email,
			age: age,
			dept: dept,
		})
		.then(() => res.status(201).send("Student added successfully"))
		.catch((err) => res.status(500).send(err.message));

    Or:

	student
		.insertOne(req.body)
		.then(() => res.status(201).send("Student added successfully"))
		.catch((err) => res.status(500).send(err.message));

        
    insert many documents:
    */

	student
		// .insertMany([{}, {}])
		.insertMany(req.body)
		.then(() => res.status(201).send("Students added successfully"))
		.catch((err) => res.status(500).send(err, message));
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   Using postman to add document

   Go to Body

   Click Raw and choose JSON

   Add your obj in d body section

   Obj format using vscode:
   {
        name: "John Doe",
        email: "john@gmail.com",
        age: 22,
        dept: "CS",
    }

    Obj format using postman:
    {
        "name": "John Doe",
        "email": "john@gmail.com",
        "age": 22,
        "dept": "CS"
    }

    Adding many documts at once:
    [
        {
            "name": "John Doe",
            "email": "john1@gmail.com",
            "age": 22,
            "dept": "CS"
        },

        {
            "name": "John Doe2",
            "email": "john2@gmail.com",
            "age": 42,
            "dept": "Music"
        },

        {
            "name": "John Doe3",
            "email": "john3@gmail.com",
            "age": 92,
            "dept": "History"
        }
    ]
    

*/
