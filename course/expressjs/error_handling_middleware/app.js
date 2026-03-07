const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
	throw new Error("Error from middleware 1");
};

const middleware2 = (req, res, next) => {
	console.log("Middleware 2");

	next();
};

app.use(middleware1);
app.use(middleware2);

app.get("/example", (req, res) => {
	res.send("Example route");
});

const errorMiddleware = (error, req, res, next) => {
	console.log(error);

	res.status(500).send("Response from error middleware");
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error handling middleware

   


*/
