# SQL from our Apps

## What is SQL?

SQL | Mongo
--- | ---
Relational | Document
Database -> Tables -> Records | Database -> Collections -> Documents
Schema First, then data | What's a "schema"? We're just storing JSON
In the same record, Foreign Key / Join  | Cross-Collection / JSON Hierarchy

## What are we doing today?

When we learned Mongo, we used the shell (UI) and wrote programs with the driver (API). Yesterday, you learned how to query with the psql shell. Today is all about using the pg driver.

## pg package
```javascript
node db-query.js "String'; DROP TABLE instruments --"
```

## Async

Synchronous

```javascript
function getUrlsForUser(userId){/* */}

const userUrls = getUrlsForUser(req.session.userId);
doSomethingWith(userUrls);
Asynchronous Callback

function getUrlsForUser(userId, cb){ /* */ }

getUrlsForUser(req.session.userId, (err, urlsForUser) => {
  doSomethingWith(urlsForUser);
});
```
Asynchronous w/ Promises
```javascript
function getUrlsForUser(userId){ /* */ }

const userUrlsPromise = getUrlsForUser(req.session.userId);
userUrlsPromise
  .then((urlsForUser) => {
    doSomethingWith(urlsForUser)
  })
```
Demo

For this demo, we converted everything to use a psql database using the pg library.

[Git Repo](https://github.com/JoelCodes/w4d2-lecture-2018-sep-24)
