const express = require("express");

const app = express();

// middleware
app.use(express.json());

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 

*/
