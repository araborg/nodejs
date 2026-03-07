const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/example", (req, res, next) => {
	res.format({
		"text/plain": () => {
			res.send("Plain text response");
		},
	},
	res.format({
		"application/json": () => {
			res.json({name: "Babs", email: "araborg@gmail.com"});
		},
	},
	res.format({
		"text/html": () => {
			res.render("pages/home.ejs");
		},
	},

);
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
    npm i ejs
*/
