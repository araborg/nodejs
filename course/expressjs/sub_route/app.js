const express = require("express");

const app = express();

const admin = express.Router();
const student = express.Router();

app.use("/admin", admin);
app.use("/student", student);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});
