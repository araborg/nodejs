const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	// throw new Error("Test error");

	console.log(xyz);

	res.send("Error handling");
});

const errorMiddleware = (error, req, res, next) => {
	// console.log(error);
	console.log(error.message); // xyz is not defined
	console.log(error.stack);

	// res.send("Custom error handling");

	next(error.message);
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error Handling:



*/
