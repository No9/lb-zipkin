// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: lb-zipkin
// This file is licensed under the Apache License 2.0.
// License text available at https://opensource.org/licenses/Apache-2.0

module.exports = mw;

var {Tracer} = require('zipkin'); 
var CLSContext = require('zipkin-context-cls');
var ctxImpl = new CLSContext('zipkin');
var zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;

function mw (options) {
  
   var opts = options || {};
   var svcname = opts.svcname || 'default-service-name';
   var baseurl = opts.baseurl || 'http://localhost:9411';
   var m_recorder = require('./lib/recorder');
   var recorder = m_recorder(baseurl);
   var tracer = new Tracer({ctxImpl, recorder});
   
   return zipkinMiddleware({
       tracer,
       serviceName: svcname
   });
}
