module.exports = mw;

var {Tracer} = require('zipkin'); 
var {recorder} = require('./lib/recorder');
var CLSContext = require('zipkin-context-cls');
var ctxImpl = new CLSContext('zipkin');
var zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;
var tracer = new Tracer({ctxImpl, recorder});

function mw (options) {
   var opts = options || {};
   var svcname = opts.svcname || 'default-service-name';
   console.log('ZIPKIN MIDDLEWARE FTW!!');
   return zipkinMiddleware({
       tracer,
       serviceName: svcname
   });
}
