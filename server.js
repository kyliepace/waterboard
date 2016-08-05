var express = require('express');
var bodyParser = require('body-parser');
var	jsonParser = bodyParser.json();
var data = require('./data.js');

var app = express();

app.use('/', express.static('public'));
app.use(bodyParser());

app.get('/logIn', function(req, res){
	//client is sending idCode and password
	var idCode = req.body.idCode;
	var password = req.body.password;

	data.forEach(function(parcel){
		if(parcel.idCode === idCode && parcel.password === password){
			var savedData = {
				owner: parcel.owner, 
				address: parcel.address,
				answers: parcel.answers
			};
			res.status(200).json(savedData); //if the password matches, send back some data
		}
		else{
			res.status(500).json('record not found for given sign-in information');
		}
	})
})

app.listen(8080);