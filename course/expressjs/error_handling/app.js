const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	res.send("Error handling");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error Handling:
    


*/
