const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// built-in middleware
app.use(express.json());
app.use(cookieParser());

// error handling middleware
const middleware1 = (req, res, next) => {
	// throw new Error("Error from middleware 1");

	// using next fxn to return error
	// next("Error from middleware 1");

	// in case no error
	next();
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

    npm i cookie-parser


*/
