var express = require('express');
var bodyParser = require('body-parser');
var	jsonParser = bodyParser.json();
require('isomorphic-fetch');
var data = require('./data.js');

var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;

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
				multParcels: data[i].multParcels,
				reportedSources: data[i].reportedSources	
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

	//check how many sources have been reported
	var reportedSources = 0;
	
	for (var j=0; j<5; j++){
		if(answers[j][4].length>1){ //this is the array of answers to the question 'what is the water source'
			var reportedSources = reportedSources + 1; 
			console.log(reportedSources);
		}
	}
	console.log('reported sources: '+reportedSources)

	//find number of indicated sources
	for(var i=0; i<data.length; i++){
		if(data[i].idCode === idCode){
			data[i].answers = answers; //set equal to client's state
			if(answers[0][3]){
				data[i].sources = answers[0][3]; //set equal to the reported number of sources
			}
			else{
				data[i].sources = 0; //if this answer space is falsey, there must be 0 sources
			}
			var numSources = data[i].sources;
			data[i].reportedSources = reportedSources; //set equal to newly calculated number of reported sources
		}
	}
	console.log('numSources: '+numSources);

	
	res.status(200).json({numSources: numSources, reportedSources: reportedSources});
});
var port = (process.env.PORT || 8080);
app.listen(port);