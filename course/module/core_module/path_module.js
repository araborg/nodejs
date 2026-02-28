let path = require("path");

// console.log(path);
// console.log(typeof path);

let myPath =
	"/home/babatunde/Documents/coding/nodejs/course/module/core_module/path_module.js";

let parseParth = path.parse(myPath);

console.log(parseParth);

// dirname
let dirname = path.dirname(myPath);

console.log(dirname);
