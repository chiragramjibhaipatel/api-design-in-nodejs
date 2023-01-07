var express = require("express");
const path = require("path");

var app = express();
let todos = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'), function (err){
    res.status(500).send("Not Found");
  });
})
app.get("/todos", (req, res) => {
  //   sometimes we get 304 on client: more details here: https://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
  //   res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  //   res.header("Pragma", "no-cache");
  //   res.header("Expires", 0);
  res.send(todos);
});

app.listen(3000);
console.log("listening on PORT 3000");
