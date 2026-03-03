const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", function (buffer) {
	console.log(buffer);
});
