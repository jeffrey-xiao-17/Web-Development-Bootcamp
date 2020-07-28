const express = require('express')
const app = express();

app.get('/', function(request, response) {
  response.send("Hello!");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: jeffrey.xiao1@gmail.com");
})

app.get("/about", function(req, res) {
  res.send("My name is Jeffrey and I like to code!");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});