// importing core module
/*
const http = require("http");

// cr8 a server
const server = http.createServer();

// listening to d server
server.listen(3000, function () {
	console.log("Server is starting on port: 3000");
});


2.

const http = require("http");

// cr8 a server
const server = http.createServer();

server.on("connection", function () {
	// check localhost:3000 in d browser
	console.log("New connection");
});

// listening to d server
server.listen(3000, function () {
	console.log("Server is starting on port: 3000");
});

3. 
*/

const http = require("http");

// cr8 a server
const server = http.createServer(function (request, response) {
	// both request & response r obj
	console.log(request.url);
});

server.on("connection", function () {
	// check localhost:3000 in d browser
	console.log("New connection");
});

// listening to d server
server.listen(3000, function () {
	console.log("Server is starting on port: 3000");
});
