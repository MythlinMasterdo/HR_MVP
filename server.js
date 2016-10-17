var express = require('express');
var db = require('./db.js');
var parser = require('body-parser');

var app = express();

app.use(parser.json());

app.get('/', function() {
  
});
