const express = require("express");

const app = express();

const errorMiddleware = (error, req, res, next) => {
	res.status(500).send(error.message);
};

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Dababase Connection:

    Install mongodb: 
    npm i mongodb
    
    

*/
