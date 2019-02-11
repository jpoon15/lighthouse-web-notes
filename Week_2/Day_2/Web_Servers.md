# Web Servers 101

### HTTP Requests from the Other Side

Yesterday was all about writing HTTP clients, which sent HTTP requests, and consumed HTTP responses. For the rest of the week, we'll be creating HTTP servers, which catch HTTP request and provide HTTP responses.

[Node Http Demos](https://gist.github.com/JoelCodes/1ad85c51f63c81ebbd485aaa0692fda2)

### Express

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

[Express Demos](https://gist.github.com/JoelCodes/2788c4ac701f8d101e2c768c5a89c4e4)

### EJS Template

There are many templating languages out there, including Pug, Jade, Slim, Razor, Handlebars, Mustache, and more. We'll be using EJS (Embedded JavaScript), which is basically a port of ERB (Embedded Ruby). It will look mostly like HTML, but with some tags for including data and control flow mechanisms.

The res.render function does a few things:

- Finds the appropriate template
- Takes some data and makes HTML (template + data = HTML)
- It sets the Response's content-type header to application/html
- It sets that HTML as the body of the response
- It sends the response.

- <%= data %>

- <%- someHtml %>

- <% someCode %>

[EJS Demos](https://gist.github.com/JoelCodes/edcc4b262662f47c7d9c09bef0e5a1c7)