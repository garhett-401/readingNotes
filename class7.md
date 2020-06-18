## Read Class 07

#### Express Middleware
- Series of functions that the req "goes through"
Each function receives request, response and next as parameters
Types of middleware: Application and Route
Application Middleware
Error Handling
Bringing in other routes
Applies Defaults
JSON, Body and Form Parsing
Runs on every request

-Route Middleware
Dealing with specific things for a route
Generally, things many routes would participate in
Are you logged in?
What is your IP?
Have we seen you here before?

Use this for...

- Logging
-Dynamic Model Loading
-Browser, Location, User spec content
- consistent Data transition/modeling/preparation (pre render)


### Server Testing
Generally, avoid starting the actual server for testing
Instead, export your server as a module in a library
Then, you can use supertest to run your tests
This will hit your routes as though your server was running, without actually starting it
That’s one less thing to go wrong (eliminate variables when testing!)
Additionally, you can wrap superagent in a module (the demo code created an agent.js module that does this)
Doing this, allows you set up a “mock” of this new agent module
Create a folder called __mocks__ where the agent.js file is with an agent.js file in it
When you invoke jest.mock() on the agent file in your test, jest is smart enough to use that mocks version instead of the real one
Why is this cool? We can 100% fake every call to the API. Again – you don’t want your tests of the web server to be dependent on the API running, so mock (fake) it, so that you are testing only the interface to the API, not the actual data
You test the data/veracity of the API when you write your API tests, not web server tests…

### Application-level middleware
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

<p><code>
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
</code></p>

### Links

[using express middleware](https://expressjs.com/en/guide/using-middleware.html)
[express middleware](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)
[using express routing](https://expressjs.com/en/guide/routing.html)
[supertest](https://github.com/visionmedia/supertest)
[express middleware list](https://expressjs.com/en/resources/middleware.html)
[http status codes](https://www.restapitutorial.com/httpstatuscodes.html)