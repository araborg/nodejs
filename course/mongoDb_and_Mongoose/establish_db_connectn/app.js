const express = require("express");

const app = express();

// built-in middleware
app.use(express.json());
app.use(cookieParser());

const errorMiddleware = (error, req, res, next) => {
	res.status(500).send(error.message);
};

app.get("/example", (req, res) => {
	res.send("Example route");
});

app.use(errorMiddleware);

// listen 4 d server
app.listen(8000, () => {
	console.log("Server is running on port: 8000");
});

/* 
    Error handling middleware

    npm i cookie-parser


*/
