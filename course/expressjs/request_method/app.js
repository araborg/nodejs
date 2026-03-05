const express = require("express");

const app = express();

// app.get(), app.post(), app.put(), app.patch(), app.delete()

// mk use of app obj
app.get("/", (req, res) => {
	res.send("This is the get method");
});

app.post("/", (req, res) => {
	res.send("This is the post method");
});

app.put("/", (req, res) => {
	res.send("This is the put method");
});

app.patch("/", (req, res) => {
	res.send("This is the patch method");
});

app.delete("/", (req, res) => {
	res.send("This is the delete method");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
