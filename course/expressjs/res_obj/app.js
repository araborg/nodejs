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
	console.log(req.get("Content-Type")); // application/json
	console.log(req.get("Accept")); // [ '*/*' ] || application/json

	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
Res obj includes:

res.headersSent

res.app

res.locals


// methods
res.cookie()

res.clearCookie()

res.send()

res.json()

res.end()

res.format()

res.render()

res.status()
*/
