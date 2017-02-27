# lb-zipkin

A middleware layer to make using zipkin in loopback easier

## usage 

Creating a loopback project and install zipkin middleware
```
% lb project_name
% cd project_name
% npm install lb-zipkin -S
```

Then open the file in `project_name/server/middleware.json` and add this configuration in the initial section. 

The params `svcname` and `baseurl` are optional and will be defaulted to the options shown below. 

```
...
    "lb-zipkin": {
             "params": {
               "svcname": "default-service-name",
               "baseurl": "http://localhost:4411"
             }
    }

```

## development

Ensure that you symlink the root folder to the projects in the fixtures folder before running the tests.

i.e.

```
% ln -s PATH_TO_REPO PATH_TO_REPO/tests/fixtures/simple/node_modules/lb-zipkin
```

Ensure you have a zipkin instance that is running locally

```
% npm test
```

