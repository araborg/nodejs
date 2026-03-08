const express = require("express");
const mongodb = require("mongodb");

const app = express();

const connectionUrl = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(connectionUrl);

client
	.connect()
	.then(() => console.log("Database connection successful"))
	.catch((error) => console.log(error));

const errorMiddleware = (error, req, res, next) => {
	res.status(500).send(error.message);
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Dababase Connection:

    Install mongodb: 
    npm i mongodb
    
    start d mongo db in terminal:

    sudo systemctl start mongod

    sudo systemctl status mongod

    mongodb://localhost:27017
*/
