const express = require("express");

const app = express();

// route
const admin = express.Router();
const student = express.Router();

app.use("/admin", admin);
app.use("/student", student);

admin.get("/home", (req, res, next) => {
	console.log(req.baseUrl); // admin
	console.log(req.originalUrl); // admin/home
	console.log(req.path); // home

	// localhost:8000/admin/home
	res.send("Admin home route");
});

student.get("/home", (req, res, next) => {
	// localhost:8000/student/home
	res.send("Student home route");
});

app.get("/home", (req, res, next) => {
	// localhost:8000/home;
	res.send("Common home route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
