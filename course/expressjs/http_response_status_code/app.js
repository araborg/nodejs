const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	// res.status(200);
	// res.status(201);
	res.status(400);
	// res.status(401);

	res.send("This is example page");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

   200: Success

   201: Success & Created

   400: Bad Request

   401: Unauthorized

   403: Forbidden

   404: Not found

   500: Internal Server Error

   100 - 199: Informational Response

   200 - 299: Successful Response

   300 - 399: Redirection Message

   400 - 499: Client Error Response

   500 - 599: Server Error Response

   402

   499





*/
