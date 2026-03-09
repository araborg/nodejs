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
ODM: Object Data Modeling. It is a db concept

Here O stands for object and this object means 
JavaScript object.

It is much more easier if we can think of 
everything as object in JavaScript.

NodejsApp ------------------> mongoose 
    |                             |
    | Object                      |
    | mapping                     |
    |                             |
    V                             V
mongodb <----------------------mongoDriver


Benefits of mongoose:
1. Abstraction from low level MongoDB driver

2. Relationship between NoSQL data

3. Provide schema validation

4. Object data mapping

5. 40% less code







*/
