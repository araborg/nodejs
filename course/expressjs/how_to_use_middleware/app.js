const express = require("express");

const app = express();

/*
const middleware1 = (req, res, next) => {
	console.log("middleware 1");

	next();
};

const middleware2 = (req, res, next) => {
	console.log("middleware 2");

	res.send("Response from middleware 2");
};

const middleware3 = (req, res, next) => {
	console.log("middleware 3");

	next();
};

const middleware4 = (req, res, next) => {
	console.log("middleware 4");

	next();
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);

================================

const middleware1 = (req, res, next) => {
	console.log("middleware 1");

	next();
};

const middleware2 = (req, res, next) => {
	console.log("middleware 2");

	next();
};

const middleware3 = (req, res, next) => {
	console.log("middleware 3");

	next();
};

const middleware4 = (req, res, next) => {
	console.log("middleware 4");

	next();
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);


*/

const middleware1 = (obj) => {
	return (req, res, next) => {
		console.log("middleware 1");

		req.name = obj.name;
		req.author = obj.author;
		req.year = obj.year;

		next();
	};
};

const middleware2 = (req, res, next) => {
	console.log("middleware 2");

	next();
};

app.use(middleware1({ name: "Nodejs", author: "Jahid", year: 2026 }));
app.use(middleware2);

app.get("/example", (req, res) => {
	console.log(req.name);
	console.log(req.author);
	console.log(req.year);

	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    


*/
