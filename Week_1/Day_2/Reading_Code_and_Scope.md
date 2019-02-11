#Reading Code and Scopes in JS

##Control Flow

[FizzBuzz Example](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoibFlCamg5OGI5U1psdTkxNDg1OVBrd2ZHWHpNIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC84TnNiR05cIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcIjlhZjhjY2M0NGUwOWZmN2M4ZmZiNDI4YWVhNzA5YTZiODVhNzM3ZjVcIl19In0)

##The Stack

The stack is basically a trace of function invocations that I have made in the order I made them. For an example, I'm going to use the factorial function to demonstrate.

Imagine that I have 4 doughnuts from Cartems:

- Maple Walnut
- Earl Grey
- Citrus Glazed
- Salted Caramel

And I wanted to figure out the ideal order... by eating these four doughnuts every day in each conceivable order. I could start with the following orders:

- MW - EG - CG - SC
- MW - EG - SC - CG
- MW - CG - EG - SC
- ...

My question is this: how many days would I be at this?

Well, I have 4 choices for the first doughnut, 3 choices for the second doughnut, 2 choices for the third, and just 1 possibility for the fourth. 4 * 3 * 2 * 1. There's a common operation for this, called factorial. It looks like "4!". The deal is that for any positive integer n, if n is greater than 0, then n! = n * (n-1) * ... 1. 0! is just 1 (because... reasons). So 4! is 4 * 3 * 2 * 1.

We can create a factorial function that takes in some number, and eventually returns another number. It opens up a frame on the stack, then closes that frame when it returns.

[Iterative Factorial](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiRDNwQ2xYdUJtZDVod0pOT2ZHNTgyWWlsb0pJIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC9tVzJyczdcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcIjFiZGQzYjg5Y2ZjODQyYjUxOWJhM2JjOTgwYTdjNzViZGExZTVmNjZcIl19In0)

There is a special property of factorials. If 4! = 4 * 3 * 2 * 1 and 3! = 3 * 2 * 1, then we could say that 4! = 4 * 3!. In fact, let's expand out the steps of this approach.

4! = 4 * 3!
   = 4 * 3 * 2!
   = 4 * 3 * 2 * 1!
   = 4 * 3 * 2 * 1
   = 4 * 3 * 2
   = 4 * 6
   = 24

As we run this version in PythonTutor, we can see the stack open and close a frame for each

[Recursive Factorial](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiNkZ5TUNabFNrTG1pandRYnRQeHd3cVJTV3M0IiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC9Ea1JIMTVcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcImE5YjFiMGM2Y2Y2NWFkZTc2MzBlOGJlODVhZjcxYjEyODVlOGMwOGNcIl19In0)

##Variable Scopes

- [Global Variable](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiRGlZa2Fva2xDQ0lvS2U4Z1g3d1VIQUdTdDJzIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC9icjhkZm9cIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcIjM0NjBlODI4YjcwOTFkNDk2NGUyM2I3NTgyMjkwYWNjZWY4NDc1OTZcIl19In0)
- [Change Global Variable from Function Scope](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiQTA0YlVJVGNMeXJMc3RJSzhKUWdLa2lNT0VVIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC93dkN1YXVcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcImM2Y2Q4YTc5MTI4MDkzNTEzZmM3MGQ1ZGQ3Mjg5OTBjYTA4ODU1MWFcIl19In0)
- [Function Variable](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiLW9zN29paGVkVDY3WGdUSXJ5ZjRhanh3X1ZVIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC9mVTE5dGlcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcImIzNzYxMmI4OTNhZjZjZDQ1N2Y5NDFjODcxMTA2Yjg5NTk3OGIwNzZcIl19In0)
- [Scope with Const and Let](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiQmdKakZQTDBEV2xySDF2NEZYOHNVeDhGbXdJIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC9yWFpBTGFcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcIjYxOWQyMTUxNjVhNWM3ODRjYmNmMjRkYmQ5MTZhNWI2NDkxOWY3ZjNcIl19In0)
- [Nested Functions](https://mandrillapp.com/track/click/30244704/goo.gl?p=eyJzIjoiUXZXQmJDR1lmaXlXdXBtdlN5Nmc3Mk9EX1NzIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dvby5nbFxcXC91cnRYMmVcIixcImlkXCI6XCI2YTI3MzM1OGZlZjk0MGU2YjE3YmVlNTExNmQyYjQ2Y1wiLFwidXJsX2lkc1wiOltcImU5NDFlOGZlYjcxMzg3YTE1Y2E3YWNlYjA1Y2YzZTMzYWZkZjVmOTVcIl19In0)