const express = require("express");

const app = express();

// app.get(), app.post(), app.put(), app.patch(), app.delete()

// mk use of app obj
app.get("/", (req, res, next) => {
	res.send("This is the home page");
});

app.get("/example", (req, res, next) => {
	res.send("This is the get method");
});

app.post("/example", (req, res, next) => {
	res.send("This is the post method");
});

app.put("/example", (req, res, next) => {
	res.send("This is the put method");
});

app.patch("/example", (req, res, next) => {
	res.send("This is the patch method");
});

app.delete("/example", (req, res, next) => {
	res.send("This is the delete method");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
