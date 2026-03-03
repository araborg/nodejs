// importing core module
// const events = require("events");

// const { EventEmitter } = events;

// const eventEmitter = new EventEmitter();

const eventEmitter = require("./app");

// emit or raise an event with param
// eventEmitter.emit("event-1", { msg: "by there", age: "28", name: "Julius" });

// run node indes.js in the terminal

// 2.
eventEmitter.emit("event-1");
