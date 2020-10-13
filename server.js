var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Userconnected " + socket.id);
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
