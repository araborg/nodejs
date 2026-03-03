/*
1.

const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", function (buffer) {
	console.log(buffer.toString());
});


2.


const fs = require("fs");

const readStream = fs.createReadStream("./data.txt", { encoding: "utf-8" });

readStream.on("data", function (buffer) {
	console.log(buffer);
});


3.
*/

const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

let content = [];

readStream.on("data", function (buffer) {
	content.push(buffer);
	// console.log(buffer);
});
