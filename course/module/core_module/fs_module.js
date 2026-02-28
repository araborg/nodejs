// importing core module

// fs = file system
let fs = require("fs");

// console.log(fs);

// srite file
fs.writeFileSync("text.txt", "hi there\n");

// to keep old text
fs.appendFileSync("text.txt", "good morning");
fs.appendFileSync("text.txt", ", Solomon");
