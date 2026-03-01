// importing core module
const events = require("events");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

// console.log(eventEmitter);

// register an event
eventEmitter.on("event-1", function () {
	// console.log("Hi there");
});

// emit or raise an event
// eventEmitter.emit("event-1");

// register an event with a param
eventEmitter.on("event-1", function (param) {
	console.log("Hi there");

	console.log(param);
});

// emit or raise an event with param
eventEmitter.emit("event-1", "By there");

// register an event with a param
eventEmitter.on("event-1", function (param, value, name) {
	console.log("Hi there");

	console.log(param);
	console.log(value);
	console.log(name);
});

// emit or raise an event with param
eventEmitter.emit("event-1", "By there", 10, "Julius");
