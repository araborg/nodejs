/*
Add/Cr8 a doc:
mongodb methods:
const express = require("express");
const mongodb = require("mongodb");

const app = express();

// connect to db
const connectionUrl = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(connectionUrl);

client
	.connect()
	.then(() => console.log("Database connection successful"))
	.catch((error) => console.log(error));

// add single documt
const db = client.db("schoolDb");

const student = db.collection("student");

insertOne



mongoose methods:
const mongoose = require("mongoose");




--------------------

Add/Cr8 multiple docs:
mongodb methods:



mongoose methods:




====================================

Read a doc:
mongodb methods:



mongoose methods:




--------------------

Read multiple doc:
mongodb methods:



mongoose methods:




====================================

Update a doc:
mongodb methods:



mongoose methods:




--------------------

Update multiple docs:
mongodb methods:



mongoose methods:




====================================

Delete a doc:
mongodb methods:



mongoose methods:




--------------------

Delete multiple docs:
mongodb methods:



mongoose methods:




====================================




*/
