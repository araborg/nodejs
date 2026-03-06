const express = require("express");

const app = express();

app.get("/users", (req, res) => {
	res.send("Users list");
});

app.get("/users/:id", (req, res) => {
	console.log(req.params);

	res.send("User detail");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 

*/
