## Node.js -> CommonJs

While importing a module in node js file, we do not need to write './' prefix before the module name if that module is part of node or its installed in node_modules folder, and for rest of the modules(custom modules/files that we have created for the project), we need to add relative path before the module name.

eg. 
inbuilt module
var http = require('http');

for 3rd party modules that are installed in the node_modules folder
var _ = require('lodash')

for custome modules
var myModule = require('./path/to/the/file')

We do not have to write the file extension. It is default to ".js". It doesn't throw an error if we write it though.

## Node.js -> Executing Node

Node wraps each file in IIFE and also pass a few arguments to it
  module
  exports
  __dirname
  etc...
  
we can use exports as manu time in the file to export anything.
eg. 
exports.function1 = function(){}
exports.function2 = function(){}
exports.someVariable = "some variable"

we can use module.exports only once in the file
eg.
module.exports = {
  function1: ()=>{},
  function2: ()=>{}
}

Why we do this?
exports = module.exports

## Node.js -> Express

Node has http library. using this library we can create a web server in node. But this is too much code and also error prone.
It is better to use some library like expressjs to create a web server.

There are some alternatives to express and some of the are build on top of express.
Sailsjs
Hapi
koa
StrongLoop


## Node.js -> Using express

some time we get 304 in the client, this is because client sends 'cache-control': 'max-age=0' header. the workaround for this can be found here 'cache-control': 'max-age=0'

consider this url:
client: /api/v1/get/:123
endpoint: /api/v1/get/:id
we can use path variable using req.params.id in the backend

## Node.js -> Exercise 1 Solution

we can send a file using res.sendFile(file_path) 
This will read the full file and then return that file to the client
we can also add a callback function to handle the error and send appropriate response

## Node.js -> Exercise 2 Solution

we can use these middleware to handle post data in the incoming request
app.use(express.json());
app.use(express.urlencoded());

## Middleware -> Types of Middleware

application-level
router-level
error-handling
built-in
third-party

## Middleware -> Middleware examples

We can create our own middleware
In most of the cases a middleware is a higher level function that takes some options and return a new function, the function that is returned is our actual middleware
we can pass an array of middleware to any route as a second argument
