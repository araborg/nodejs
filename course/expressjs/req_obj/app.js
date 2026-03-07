const express = require("express");

app.get("/example", (req, res) => {
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
