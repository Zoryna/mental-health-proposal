/*an Express server for Node.js*/
var express = require("express"),
  http = require("http"),
  appTest;

/*create the server, listen on port 3030*/
  appTest = express();
  http.createServer(appTest).listen(3030);

/*set up routes*/
  appTest.get("/test", function(req, res)) {
    res.send("welcome to the 324 test app");
  });
