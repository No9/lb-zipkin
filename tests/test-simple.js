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
