const express = require("express");

const app = express();

app.get("/example", (req, res) => {
	res.send("middleware");
});

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Middleware is a function in wc we access req &
    res obj. 

    A middleware function can do three types of tasks:
    (assuming we have 4 middlewares)

    1. It can call next function to handover request 
    to next middleware function.

    2. It can direct response back to client, for 
    example middleware two direct back response to 
    client hence request will not pass to middleware 
    three and middleware four.

    3. Middleware can throw an error and error catching 
    middleware can catch this error.


    Types of middleware:
    1. App levl middleware

    2. Route level middleware

    3. Error handling middleware

    4. Built-in middleware

    5. Third-party middleware


*/
