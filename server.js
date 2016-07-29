var express = require('express');
var bodyParser = require('body-parser');
var	jsonParser = bodyParser.json();

var app = express();

app.use('/', express.static('public'));
app.use(bodyParser());



app.listen(8080);