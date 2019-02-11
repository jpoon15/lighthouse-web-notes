# Errors and Promises

Labbers!

Thanks for putting up with me folks. Notes are below :)

1. Errors

Errors are things we should expect as much as possible. What if we try to read a file from disk that isn't there? What if an API call fails?

Most languages give us some things for handling errors. That thing is often a try/catch control flow that is built into the language. JS has this. So do many other languages like Ruby, Python, Java, C++, etc, etc.

## Error Takeaways

try/catch is a thing built into the language.
JS will jump into the catch with the first Error that is thrown within the try code.
Important: This only works for non-async (ie synchronous) code. For eg: readFileSync throws an error that we can catch.
In the catch, we can reference the error object incase we need to inspect the error.
For Async code, try/catch won't jump into the catch and therefore is useless if there's a async callback function inside which throws the error (later).
That's why node employs/suggests the pattern of passing an error object as the first argument into callbacks, and then use if/else to check for errors. (err, results) => { ... }. It avoids try/catch for async code, basically.

2. Promises

_After errors, we then talked about promises for the second half of lecture._

Promises are an alternative to using callbacks directly for handling async control flow. They are considered a better pattern since you can do more with them. Many libraries including the built-in window.fetch using the Promise pattern instead of the traditional callback pattern that you're used to seeing.

The "new" versions of jQuery and MongoDB etc all prefer and encourage you to use Promises, but may still support callbacks as well (backwards compatibility).

You've used promises already, but this lecture is about introducing them formally (finally) so that you really understand them.

As I mentioned at the beginning of lecture, the more important thing here is to learn how to learn. I use incremental steps, hypothesis, intentionally cause errors, and use reasoning and deduction to learn a new concept like Promises. That process is really important b/c, if you're lucky, you're always faced with new things to learn, and the mindset of learning through experimentation (and of course documentation) will help you feel comfortable with that fact.

## Properties of promises:

You can call then on a promise (among other things)
The then takes a callback which is provided the "resolved" value from the promise. (Eg: the resulting http response object from a fetch call).
thens are chainable (this implies that thens return promises)
thens are "piped" (return from prev then acts as input to next then. Similar to piping unix commands together like ls -al | grep 'a' | wc)
A then can itself return a promise, at which point future thens on that chain are resolved when the returned promise is resolved. (We saw this with the res.json() which returns a promise and not the json data itself)
Each then is resolved when its previous data is made available (if it's a promise then it ought to get resolved first b/c we care about the outcome in our thens )

**Do we NEED promises?**

No, we can achieve the outcome with nesting a bunch of callbacks too! Promises help us clean up code where many async things are happening.

**Is there more to promises?**

Yes, we didn't have time to cover [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) in this lecture, but some other lectures previously did go into it. There are others like [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

Once you understan what we covered in lecture today, you can also write functions that return promises!

**Writing functions that return Promises**

We did not have time to go into creating functions that return promises.

This is something other lecturers have done. Itdoes help us further understand how functions like fetch work and also helps us follow the same Promise pattern when creating functions that do async work. However, it's the next step and may be too early to jump into for this lecture, imho.

The next step after that is to use the ES2017 async/await. You should google these examples (Kowsheek also talks about them a bit, see his notes at the bottom).

## Code Examples

https://gist.github.com/kvirani/b0ec5d090ad6dd0c17de2e5b42e059f3

## Other noteworthy Lectures & resources

[Joel](https://gist.github.com/kvirani/0794b950dcd0e3012add87e5a9f10464)
[Kowsheek (Toronto)](https://gist.github.com/kvirani/f944bf1f111e5f6a2194d8ce1cc468ca)
http://callbackhell.com/

That's all for now. Good luck with your midterm projects!

