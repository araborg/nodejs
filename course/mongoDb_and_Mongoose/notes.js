/*
A database is a storage where we store data.

Database is a secure, persistent optimized storage 
where we can save data, update data, delete data or page,

or get data in a optimized and secured way.

There are mainly two types of database:
1. Relational database management system (RDBMS) -SQL
e.g: MySql, PostgreSql, Oracle, Sqlite

2. Non relational database - NoSQL
e.g: MongoDB, CouchDB, CouchBase

To install mongoDB:
https://www.mongodb.com/docs/v7.0/tutorial/install-mongodb-on-ubuntu/


To start mongoDB:
sudo systemctl start mongod

sudo systemctl status mongod

To stop:
sudo systemctl stop mongod

To restart:
sudo systemctl restart mongod

To install mongoDB compass:
https://www.mongodb.com/try/download/compass

sudo dpkg -i mongodb-compass_1.49.2_amd64.deb


========================================

Wthat is ODM?
ODM: Object Data Modeling


Benefits of mongoose:
1. Abstraction from low level MongoDB driver

2. Relationship between NoSQL data

3. Provide schema validation

4. 

5. 


Number one .

That means we are setting a layer between NodeJS application and MongoDB, which is mongoose, which

makes our life more easier.

 we already talked about.

MongoDB is a non-relational database, but still we need relationship between this data and mongoose

will help us to maintain this relationship.

I'll show the relationship when we do our final project.

.

Earlier, we added name email as an department to student database.

But if we wish, we can add more fields.

But it's not practical.

We should have a fixed schema for example.

Within that schema we can define which field you can add and which field cannot add.

You can also define field data type.

For example name can be string, s can be number etcetera.

We'll talk about schema in upcoming video.

Object data mapping which I already talked about some time ago.

And finally we write around 40% less code if we use mongoose.






*/
