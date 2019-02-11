# CRUD with Express

Today we practiced more using express and built a simple CRUD (Create, Read, Update, Delete) app. Below is a summary of our lecture.

## Review

Q: What is HTTP? - Help client and server communicate - Transfer resources

Q: What is HTTP Client? - A software that make a HTTP request to the server

Q: What is HTTP Server? - A software that sends HTTP response to the client

## Route Design

Route is HTTP Method + Path.

Design the routes using RESTful convention.

**As a user, I can visit a home page**

GET /

**As a user, I can see a list of starships**

GET /starships

**As a user, I can create a starship**

GET /starships/new POST /starships

**As a user, I can udpate a specific starship**

GET /starships/:id/edit PATCH /starships/:id

**As a user, I can view a specific starship**

GET /starships/:id

**As a user, I can remove a starship**

DELETE /starships/:id

## Code

Code used in the lecture is here: https://github.com/rbao/w2d3-20181003

