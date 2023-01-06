While importing a module in node js file, we do not need to write './' prefix before the module name if that module is part of node or its installed in node_modules folder, and for rest of the modules(custom modules/files that we have created for the project), we need to add relative path before the module name.

eg. 
inbuilt module
var http = require('http');

for 3rd party modules that are installed in the node_modules folder
var _ = require('lodash')

for custome modules
var myModule = require('./path/to/the/file')

We do not have to write the file extension. It is default to ".js". It doesn't throw an error if we write it though.
