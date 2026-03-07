const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	res.send("This is example page");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
   200: Success

   201: Success & Created

   400: Bad Request

   401: Unauthorized

   403: Forbidden

   500:

   100 - 199:

   200 - 299:

   300 - 399:

   400 - 499

   402

   499





*/
