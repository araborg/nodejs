const express = require("express");

const app = express();

// ds is import to receive json data 4rm postman
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017";

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
    

*/
