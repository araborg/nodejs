const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/example", (req, res, next) => {
	// to see result go to postman req header and adjust d accept section
	res.format({
		"text/plain": () => {
			res.send("Plain text response");
		},
		"application/json": () => {
			res.json({ name: "Babs", email: "araborg@gmail.com" });
		},
		"text/html": () => {
			res.render("pages/home.ejs");
		},
		default: () => {
			res.send("Nothing matched");
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
