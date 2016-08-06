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
				answers: data[i].answers,
				sources: data[i].sources, 
				multParcels: data[i].multParcels	
			};
			console.log(savedData);
			res.status(200).json(savedData).end(); //if the password matches, send back some data
		}
		else{
			res.status(404).json('incorrect login').end();
		}

	}	
});

app.put('/submit', function(req, res){
	//client is sending idCode and answers
	var idCode = req.body.idCode;
	var answers = req.body.answers;
	for(var i=0; i<data.length; i++){
		if(data[i].idCode === idCode){
			data[i].answers = answers; //set equal to client's state
			if(answers[0][3]){
				data[i].sources = answers[0][3]; //set equal to the reported number of sources
			}
			else{
				data[i].sources = 0; //if this answer space is falsey, there must be 0 sources
			}
		}
	}
	console.log(answers[0][3]);
	var numSources = answers[0][3];
	var reportedSources = answers.length;
	res.status(200).json({numSources: numSources, reportedSources: reportedSources});
});

app.listen(8080);