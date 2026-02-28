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

// delete file
fs.unlink("./test.txt", function (error) {
	if (!error) {
		console.log("File deleted successfully");
	}
});

// console.log(data.toString());

// let data2 = fs.readFileSync("./test.txt", { encoding: "utf-8" });

// console.log(data2);

// delete file
// fs.unlinkSync("./test.txt");

// 2.

// read file

// write file

// update file

// delete file
