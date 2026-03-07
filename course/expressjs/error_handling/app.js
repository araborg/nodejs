const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	// throw new Error("Test error");

	console.log(xyz);

	res.send("Error handling");
});

const errorMiddleware = (error, req, res, next) => {
	console.log(error);

	res.send("Custom error");
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error Handling:



*/
