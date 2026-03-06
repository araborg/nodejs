const express = require("express");

const app = express();

// mk use of app obj
app.get("/example", (req, res) => {
	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
