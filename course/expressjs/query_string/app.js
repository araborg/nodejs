const express = require("express");

const app = express();

app.get("/users", (req, res) => {
	res.send("Users list");
});

app.get("/users/:userId", (req, res) => {
	const { userId } = req.params;

	// localhost:8000/users/2?query
	// localhost:8000/users/2?name=babatunde&email=babatunde@gmail.com

	const { name, email } = req.query;
	console.log(name, email); // babatunde babatunde@gmail.com

	res.send("User id : " + userId + " detail");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    userId i.e params is a string and nt a number
*/
