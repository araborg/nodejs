const express = require("express");

const app = express();

app.post("/example", (req, res, next) => {
	res.send("This is example response");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
