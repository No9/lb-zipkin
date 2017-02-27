/* eslint-env browser */
const {BatchRecorder} = require('zipkin');
const {HttpLogger} = require('zipkin-transport-http');

// Send spans to Zipkin asynchronously over HTTP
const recorder = function(baseurl) {
     
   return new BatchRecorder({
      logger: new HttpLogger({
         endpoint: `${baseurl}/api/v1/spans`
      })
   });
};

module.exports = recorder;

