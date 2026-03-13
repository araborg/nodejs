const express = require("express");

const fs = require("fs");

const app = express();

app.get("/example", (req, res, next) => {
	//
	fs.readFile("test.txt", (error, data) => {
		if (data) {
			res.send(data);
		}

		if (error) {
			next(error);
		}
	});
});

/*
app.get("/example", (req, res) => {
	// throw new Error("Test error");

	console.log(xyz);

	res.send("Error handling");
});
*/

const errorMiddleware = (error, req, res, next) => {
	// console.log(error);
	console.log(error.message); // xyz is not defined
	console.log(error.stack);

	// res.send("Custom error handling");

	// using next()
	// next(error.message);
	next(error.stack);
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error Handling:



*/
