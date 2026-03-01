// importing core module
const events = require("events");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

// console.log(eventEmitter);

// register an event
eventEmitter.on("event-1", function () {
	console.log("Hi there");
});

// emit or raise an event
eventEmitter.emit("event-1");
