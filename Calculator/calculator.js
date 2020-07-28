const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.listen(port, function() {
  console.log(`Calculator app listenening at localhost:${port}`);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send("The result of the calculation is: "+(num1 + num2));
  // res.send("Thanks for posting that!");
});

/* BMI CALCULATOR */

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  res.send("Your BMI is: " + Math.round(weight / Math.pow(height, 2)));
});


