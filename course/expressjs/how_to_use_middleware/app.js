const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
	console.log("middleware 1");

	next();
};

app.use(middleware1);

app.get("/example", (req, res) => {
	res.send("Example route");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    


*/
