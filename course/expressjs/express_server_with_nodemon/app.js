const express = require("express");

const app = express();

// console.log(app);

// mk use of app obj
app.get("/", (req, res) => {
	res.send("This is the home page");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
