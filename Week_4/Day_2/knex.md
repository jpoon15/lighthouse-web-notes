# Knex

We used Knex.js, a library for connecting to, managing, and querying SQL databases.

# Query Builder
```javascript
const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'peter'
  }
});

const query = knex('instruments')
  .select('*')
  .where('family', process.argv[2])

console.log(query.toSQL())

query.asCallback((err, result) => {
  console.log(result);
  knex.destroy()
});
```
# Migrations

Database migrations are changes to DB schema written in a general purpose language, like JavaScript. The migrations have an "up" and "down". The up describes changes to schema, and the down describes how to undo that change.

# Seeds

Seeds let us create database records, especially for development or testing.

[Git Repo](https://github.com/JoelCodes/w4d2-lecture-2018-sep-24)