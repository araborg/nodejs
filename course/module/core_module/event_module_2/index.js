// importing core module
const events = require("events");

const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

// emit or raise an event with param
eventEmitter.emit("event-1", { msg: "by there", age: "28", name: "Julius" });
