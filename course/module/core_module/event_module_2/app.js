// importing core module

// 1
// const events = require("events");

// const { EventEmitter } = events;

// const eventEmitter = new EventEmitter();

// // register an event with a param
// eventEmitter.on("event-1", function (obj) {
// 	console.log("Hi there");

// 	console.log(obj);
// });

// // export eventEmitter
// module.exports = eventEmitter;

// 2
const events = require("events");
const fs = require("fs");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

// register an event with a param
eventEmitter.on("event-1", function (content) {
	fs.writeFile("test.txt", content, function (error) {
		if (!error) {
			console.log("File created successfully!");
		}
	});
});

// export eventEmitter
module.exports = eventEmitter;
