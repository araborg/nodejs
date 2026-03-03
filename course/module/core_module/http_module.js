// importing core module
const http = require("http");

// cr8 a server
const server = http.createServer();

server.on("connection", function () {
	console.log("New connection");
});

// listening to d server
server.listen(3000, function () {
	console.log("Server is starting on port: 3000");
});
