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
