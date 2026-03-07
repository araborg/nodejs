const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/example", (req, res, next) => {
	// localhost:8000/home;
	// res.send("<h1>Heading</h1>");

	res.render("pages/home.ejs");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
    npm i ejs
*/
