'use strict';
var fs = require('fs');

 exports.get = function(event, context) {
//   var contents = fs.readFileSync("public/index.html");
   context.succeed({
     statusCode: 200,
     body: "hello bb: " + JSON.stringify(event),
     headers: {'Content-Type': 'text/html'}
   });
 };
