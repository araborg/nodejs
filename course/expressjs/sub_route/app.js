const express = require("express");

const app = express();

// route
const admin = express.Router();
const student = express.Router();

app.use("/admin", admin);
app.use("/student", student);

admin.get("/home", (res, req, next) => {
	res.send("Admin home route");
});

student.get("/home", (res, req, next) => {
	res.send("Student home route");
});

app.get("/home", (res, req, next) => {
	res.send("Common home route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
