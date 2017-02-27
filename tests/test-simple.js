// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: lb-zipkin
// This file is licensed under the Apache License 2.0.
// License text available at https://opensource.org/licenses/Apache-2.0

var http = require('http');
var test = require('tap').test;

test('simple test', function(t) {

   var options = {
      host: 'localhost',
      port: 3000,
      path: '/api/Messages/greet?msg=test'
   };
   callback = function(response) {
      var str = '';
      response.on('data', function (chunk) {
         str += chunk;
      });
   
      response.on('end', function() {
         var val = JSON.parse(str);
         t.equal(val.greeting, 'Sender says test to receiver');
         t.end();
      });

};

   http.request(options, callback).end();

});
