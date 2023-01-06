var express = require("express");

var app = express();
let todos = [];
app.get("/todos", (req, res) => {
  //   sometimes we get 304 on client: more details here: https://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
  //   res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  //   res.header("Pragma", "no-cache");
  //   res.header("Expires", 0);
  res.send(todos);
});

app.listen(3000);
