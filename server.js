var express = require('express');
var youVsModel = require('./db.js');
var parser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static(__dirname + './client/index.html'));

app.get('/', function(req, res) {
  youVsModel.find(function(err, results) {
    if(err) {
      return console.log('err', err);
    }
    res.send(results);
  });
});

app.post('/', function(req, res) {
  var income = req.body.income;

  var income2 = new youVsModel({
    income: income
  });
  income2.save(function(err, results) {
    if(err) {
      return console.log('err', err);
    }
    res.send(results);
  });
});

app.listen(port, function() {
  console.log('listening on ', port);
});
