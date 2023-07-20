var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
// 
var model = require('./model/db.js');  //

var app = express();

app.use(express.static('public'));
app.use(cors());

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// REST API /teams GET route
app.route('/sites/')
  .get(function (req, res) {  
    model.getSites(req, res);
  })
app.route('/weatherdata/live')
  .get(function (req, res) {  
    model.getWeatherLiveData(req, res);
     
  })
app.route('/weatherdata/today/:datenow')
  .get(function (req, res) {  
    model.getWeatherData(req, res);
     
  })
app.route('/weatherdata/sitedata/:sitename')
  .get(function (req, res) {  
    model.getWeatherDataBySiteName(req, res);
     
  })
  //  use this code
  // .post(function(req, res) {
  //   model.postTeam(req, res);
  // })


var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
