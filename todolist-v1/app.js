const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// Index (home) route
app.get("/", function(req, res) {
  res.render('list', {listTitle: date.getDate(), newListItems: items});
});

app.post("/", function(req, res) {
  if (req.body.list === "Work") {
    workItems.push(req.body.item);
    res.redirect("/work");
  } else {
    items.push(req.body.item);
    res.redirect("/");
  }
});

// Work Route
app.get("/work", function(req, res) {
  res.render('list', {listTitle: "Work", newListItems: workItems});
});

// About Route
app.get("/about", function(req, res) {
  res.render("about");
})