const express = require("express");

const app = express();

app.get("/example", (req, res, next) => {
	// localhost:8000/home;
	res.send("Common home route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
