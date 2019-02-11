# Cookies and Authentication with KV

Hey everyone,

Great class. Sorry for it running longer (9:05AM to 11:23AM. Yikes!)

### Most importantly

Focus on your approach...

You're here to get good at learning new things. Becoming good at Debugging is one very important skill that you need to hone. But How?

**Work incrementally: - Error First!** Deliberately get to the see the error before anything else. Make sure you have a hypothesis before of what the error should be (it's okay to be wrong!) - Incremental Steps: Take very small steps (what can I write next to solve my error and this error alone?). Also, when writing a solution make sure it's a testable line of code (how will I test this?)

This was my first lecture with you so I needed to focus on this more than I would normally. I know it was emphasized in week 1 but it is very easy to try and lose sight of this important skill during the intensity of each day ("I want to move fast in order to keep up!").

**If you follow the above technique, you will actually move faster!** Why? Because you will debug better, and a BIG part of software development (let alone learning software development) is debugging.

Okay, with that said, let's talk about the technical topics for today.

### HTTP and Cookies

**Statelessness**

What does "HTTP is stateless" mean? First, what does "state" even mean?

State = memory
Statelessness in HTTP means that the connection ends between the client and server after the response (and no state (data) needs to be stored on either side).
You can think of the server having amnesia (server: "wait, who are you again? I don't believe we've met." you: "uhhh, seriously KV?")

**Pros of a Stateless protocol**

A lot more simple for the user and the developer to implement
Works really well (and quickly) for a transactional relationship ("hey, give me x" ==> "ok here you go")
Every request is independent of the other
We can handle many concurrent requests (many requests at the same) without complexity

**Cons of a Stateless protocol**

Not able to easily keep track of context
Context has to be provided each time
Good for transactional but not for long running conversations (real time apps, etc. More on this later in Week 6 when we cover WebSockets!)

### A Life Without Cookies

Cookies help work around this memory problem that the server has. But first, is there a workaround without cookies?

Situation:

There's a form on GET /login which takes in username and password
KV Submits to a post route POST /login which will verify if it matches
Problem: Every subsequent request needs to REMEMBER that they are now logged in and logged in as KV.
One possible (bad) solution: Append the username to every request

Example: GET /urls?username=KV

**Problems:**

1- Every link now is going to need to append the above 2- People can just start guessing usernames easily 3- Can no longer share those URLs with people 4- If you close the tab with the URL and come back to that page you've lost the state

The reason for exploring this is to really understand how it compares with cookies and which of these problems above are actually solved by cookies vs not.

Aside: Someone once asked me during this lecture Can IP addresses help? Good question... Nope. They change based on location, type of connection and time. They are shared by multiple clients as well and therefore not unique.

### Intro To Cookies

In general, we learned that Cookies:

- Are used to remember information about a "client" (ie browser / user)
- Stored as Key-value pair of data (same k=v format as query string in the URL)
- Stored on/by the client (Browser, etc)
- Readable/Writable by the client (eg: document.cookie; we didn't talk about it but it is possible, unsurprisingly since we can change cookies via DevTools)
- Readable/Writable by the the server (eg: "Set-Cookie" response header)
- When set on the server, it sends back a Set-Cookie: response header for the browser to then update its cookies
- Each stored cookie is then transmitted by the client to the server with every HTTP request to that same domain (via "Cookie" header)

Basically, we've moved the k=v solution from the URL to the HTTP header. That's all cookies are.

- Therefore, still not to be trusted (can be tampered with)!
- Can "sign" them to make sure their content has not been tampered
- Should be sent over HTTPS if sensitive.

**Original problems from above:**

1- ~Every link now is going to need to append the above~ (solved) 2- People can just start guessing usernames easily (NOT SOLVED) 3- ~Can no longer share those URLs with people~ (solved) 4- ~If you close the tab with the URL and come back to that page you've lost the state~ (solved)

It looks like we need to do more to solve the problem of security, because it is only partially solved (see item 2 above).

### Security Problems & Solutions

**Problem 1:** If the connection is over HTTP someone can still sniff out that information over WiFi or other means and then use that encrypted value to impersonate you. They can see what username and password you POST to the server, as well as read the cookies (and other data) being transmitted back and forth. One example of this was done via the popular

This is called "Session Hijacking" and in this case it would be done via a "~Man~Person in the middle attack".

For this reason, we need to secure the entire communication using SSL encryption at the HTTP level. Use HTTPS basically.

With this the entire HTTP communication (request and response) are fully encrypted. YAY! Problem solved. But we have other security problems ...

**Problem 2:** Using HTTP for all the pages avoids this Person in the middle attack problem. But what about the fact that our cookie is username=KV. Anyone can start guessing usernames until one works! You saw me do this where I switched it to DB and easily took over Don Burks!

Solution: Encrypt (and "sign") the cookies. This will mean that no one can tamper with or understand by that data except our server. Using the cookie-session published node module is one way to do this easily (it does it by default!).

Aside: This has lead to confusion among students in the past thinking that "session cookies are therefore always encrypted cookies". It just so happens that the cookie-session module encrypts by default (because it would be crazy not to!). More on session cookies below.

HTTPS + Encrypted cookies are therefore solutions that should be used together, because they work together to solve both problems.

### Session Cookie

We didn't get to talk about this (limited in time, sorry).

Session cookies are nothing special. The only thing different is their expiration. Instead an *expiration date+, they expire when the browser _"feels like it".*

In the past browser cookies would get cleared when you terminated the browser completely (not just close a tab). But recently Chrome and some other browsers have changed that behaviour.

Basically: when you read "session cookie", just understand that it's still a cookie. Nothing more, nothing less.

### Hashing

**Problem 3**: One other problem we identified is that passwords cannot and should not be stored as clear text. Otherwise it is easier for people with access to the Database (DB) to use those credentials for logging in into that service but also other services (people do reuse passwords.)

We could encrypt the passwords before storing them into our database. However encryption implies that we can still read the original value by decrypting them later. In the case of passwords, we don't need to nor should be able to get the original password again.

**Enter Hashing**

Hashing can be used to solve other class of problems too, but it's also very commonly used for passwords.

We quickly looked at one hashing algorithm/function called bcrypt. I believe it's the most popular option for password hashing.

Instead of storing cleartext passwords, we "hash" them which is essentially "one way encryption" (original data is lost and cannot be retrieved and the hashed value is expected to be unique enough such that no other password value will generate the same unique hashed value).

Whenever a user attempts login, we need to re-hash their login attempt's password and compare the hashed value with the one we have stored from before.

### Code

You can look at the [language selection demo](https://github.com/jugonzal/lhl-lectures/tree/master/w2d4-cookies/language_selection) for the most basic features of cookies.

Check the user authentication demo for the [full code](https://github.com/jugonzal/lhl-lectures/tree/master/w2d4-cookies/user_authentication).

Note: This isn't the code we wrote in class but the code that I based my demos off. Thank you to Juan, our instructor in Toronto for the awesome notes.

That's all for now.

Thanks for sticking with me and sorry for running class a bit late. I'm a bit rusty ;)