const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	// http://localhost:8000/example

	const cookies = req.cookies;
	console.log(cookies);

	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
Cookies r small data stored on client side

*/
