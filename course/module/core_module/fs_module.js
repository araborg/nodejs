// importing core module

// 1.

// fs = file system
let fs = require("fs");

// console.log(fs);

// write file
fs.writeFileSync("test.txt", "hi there\n");

// to keep old text
fs.appendFileSync("test.txt", "good morning");
fs.appendFileSync("test.txt", ", Solomon");

// read file
let data = fs.readFileSync("./test.txt");

console.log(data.toString());

let data2 = fs.readFileSync("./test.txt", { encoding: "utf-8" });

console.log(data2);

// delete file
fs.unlinkSync("./test.txt");
