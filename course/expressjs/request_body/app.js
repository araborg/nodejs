const express = require("express");

const app = express();

app.post("/example", (req, res, next) => {
	console.log(req);

	const data = req.body;
	console.log(data);
	res.send("This is example response");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

// to cr8 body on postman:
// click body --> raw--> json
