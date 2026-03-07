const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/example", (req, res) => {
	// http://localhost:8000/example

	const cookies = req.cookies;
	console.log(cookies);

	// to mk d cookies available on d client side
	res.cookie("name", "Arabambi");
	// check d cookies section on d lower section of postman

	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
Cookies r small data stored on client side

npm i cookie-parser
*/
