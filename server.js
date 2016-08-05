var express = require('express');
var bodyParser = require('body-parser');
var	jsonParser = bodyParser.json();
require('isomorphic-fetch');
var data = require('./data.js');

var app = express();

app.use('/', express.static('public'));
app.use(bodyParser());

app.post('/logIn', function(req, res){
	//client is sending idCode and password
	var idCode = req.body.idCode;
	var password = req.body.password;
	console.log(idCode);
	for(var i=0; i<data.length; i++){
		if(data[i].idCode === idCode && data[i].password === password){
			var savedData = {
				owner: data[i].owner, 
				address: data[i].address,
				answers: data[i].answers
			};
			console.log(savedData);
			res.status(200).json(savedData).end(); //if the password matches, send back some data
		}
		else{
			res.status(404);
		}

	}	
});

app.listen(8080);