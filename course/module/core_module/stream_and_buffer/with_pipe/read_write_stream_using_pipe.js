const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("output2.txt");

readStream.pipe(writeStream);
