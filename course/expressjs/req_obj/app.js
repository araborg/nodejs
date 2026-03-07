const express = require("express");

app.get("/example", (req, res) => {
	console.log(req.hostname);

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
