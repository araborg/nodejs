const express = require("express");

const app = express();

// middleware
app.use(express.json());

app.post("/example", (req, res, next) => {
	// console.log(req.body);

	const data = req.body;
	console.log(data);

	const { name, email } = req.body;

	res.send("This is example response");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* to cr8 body on postman:
click body --> raw--> json

{
    "name": "babs",
    "email": "arababs2015#gmail.com"
}

*/
