const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	console.log(req.hostname); // localhost
	console.log(req.ip); // 127.0.0.1
	console.log(req.method); // GET
	console.log(req.protocol); // http
	console.log(req.secure); // false

	// check under header tab on postman
	console.log(req.accepts()); // [ '*/*' ]
	console.log(req.get("Connection-Type")); // [ '*/*' ]

	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
Req obj includes:

req.baseUrl

req.originalUrl

req.path

req.body

req.body

req.cookies

req.query

req.params

*/
