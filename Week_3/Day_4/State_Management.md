# State management and persistence

## Databases

Data persistence - Giving our application the ability to save its data across restarts

## Request lifecycle

1. Client make a request to our application
2. Application receives request
3. Application makes a request to database for information needed
4. Once data is acquired, format it and build response
5. Send response to client

## Why do we Database?

- Text files are slow
- Text files are also prone to typos
- Text files can only be opened by one request at a time

## DBMS - Database management system

The role of a DBMS is to efficiently store and retrieve data.

### Flavours of DBMS

1. SQL - Structured Query Language, used for relational database Examples: MySQL(Percona, MariaDB), PostgreSQL, MSSQL, Oracle, SQLite

2. NoSQL - Document storage database, key-value storage Examples: MongoDB, CouchDB, Redis, CockroachDB, Hadoop, Cassandra

3. Graph - Nodes and edges Examples: Neo4j

### Commonalities

1. CRUD - Create, Read, Update, Delete
2. BREAD - Browse, Read, Edit, Add, Delete

### Query

Its own language, SQL has its own query language, graph DB's have their own language, NoSQL tends to use JS.

### Databases have to have their own connection

We use what are called 'sockets'. Two-way communication, typically always on.

You can also make a new connection for each request.

## MongoDB

Stores its data in 'collections'. Collections are like 'nouns' for your application.

Mongo is schema-less

### Schema

Structure of your database (tables, fields)

### Indexing

How databases make looking up data efficient.

Every DBMS adds a primary key to each record. (id is the standard, in MongoDB it's *_id*)

### CLI Access

We use the command mongo to access the MongoDB CLI. It is a JavaScript REPL that allows us to run queries against the MongoDB database.
```javascript

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/intro';

const client = new MongoClient(url);

client.connect(function(err) {

  const db = client.db("intro");

//  const results = db.collection('users').find({admin: true}).toArray();
  const results = db.collection('flipflops').find().toArray();

  results.then(data => {
    data.forEach(flipflop => {
      console.log("=--------------=");
      console.log("Colour: ", flipflop.color);
      //console.log("Name: ", user.name);
      //console.log("Title: ", user.title);
    });
  });
});
```
Take a look at the .each() method at the end of this [documentation](http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/#read-methods)

