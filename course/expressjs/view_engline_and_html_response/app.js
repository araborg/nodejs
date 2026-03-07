const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/example", (req, res, next) => {
	// localhost:8000/example;
	// res.send("<h1>Heading</h1>");

	// res.render("pages/home.ejs");

	// res.render("test.ejs");

	res.render("test.ejs", { name: "babs", email: "test@gmail.com" });
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
    npm i ejs
*/
