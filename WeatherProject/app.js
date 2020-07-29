const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const https = require('https');


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
  const apiKey = "57f611bf4cf3758482af0ca8f0b0f099";
  const city = req.body.city;
  const unit = "imperial";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${unit}`;
  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write("<h1>The weather is currently "+desc+".</h1>");
      res.write("<h1>The temperature in "+city+" is "+temp+" degrees Celcius.</h1>");
      res.write("<img src="+imageURL+">");
      res.send();
    });
  });
});

