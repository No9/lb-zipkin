// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: lb-zipkin
// This file is licensed under the Apache License 2.0.
// License text available at https://opensource.org/licenses/Apache-2.0

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

