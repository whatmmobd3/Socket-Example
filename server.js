var express = require("express");
var app = express();
var port = 3000;

var http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("First");
});

http.listen(port, function () {
  console.log("Listening on port " + port);
});
