const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/example", (req, res, next) => {
	res.format({
		"text/plain": () => {
			res.send("Plain text response");
		},
	});
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
    npm i ejs
*/
