const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const PORT = 8000;

const connectMongodb = require("./init/mongodb");

const todoRoute = require("./routes/todo");

// init app
const app = express();

// mongodb connection
connectMongodb();

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // app.use()
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
