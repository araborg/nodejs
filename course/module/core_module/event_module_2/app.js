// importing core module
const events = require("events");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

// register an event with a param
eventEmitter.on("event-1", function (obj) {
	console.log("Hi there");

	console.log(obj);
});

// export eventEmitter
module.exports = eventEmitter;
