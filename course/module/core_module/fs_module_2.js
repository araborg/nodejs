/*

// importing core module

// 1.

// fs = file system
let fs = require("fs");

console.log(fs);

// write file: asynchronous
fs.writeFile("test.txt", "hi there", function (error) {
	if (!error) {
		console.log("File created sucessfully");
	}
});

console.log("This is sync");

// to keep old text
fs.appendFile("test.txt", ". You are welcome!", function (error) {
	if (!error) {
		console.log("File updated sucessfully");
	}
});

console.log("This is sync");


// read file
let data = fs.readFile("./test.txt", function (error, data) {
	if (!error) {
		console.log(data.toString());
	}
});

console.log(data);

let data2 = fs.readFile(
	"./test.txt",
	{ encoding: "utf-8" },
	function (error, data) {
		if (!error) {
			console.log(data);
		}
	},
);

console.log(data2);

*/
let fs = require("fs");

// write file: asynchronous
fs.writeFile("test.txt", "hi there", function (error) {
	if (!error) {
		console.log("File created sucessfully");
	}
});

// delete file: synchronous
fs.unlink("./test.txt", function (error) {
	if (!error) {
		console.log("File deleted successfully");
	}
});
