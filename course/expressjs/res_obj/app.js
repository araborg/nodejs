const express = require("express");

const app = express();

// redirect
app.get("/test", (res, req) => {
	res.setEncoding("Test response");
});

app.get("/example", (req, res) => {
	// res.end()

	// res.send("Example route");

	// res.json({
	// 	name: "Babatunde",
	// 	email: "babs@gmail.com",
	// });

	res.redirect("/test");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/*
Res obj includes:

res.headersSent

res.app

res.locals


// methods
res.cookie()

res.clearCookie()

res.send()

res.json()

res.end()

res.format()

res.render()

res.status()

res.sendStatus()

res.location()

res.redirect()

res.set()

res.get()

*/
