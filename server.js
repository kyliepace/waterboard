var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
require('isomorphic-fetch');
var PDFDocument = require 'pdfkit'; //added pdfkit
var fs = require('fs'); //added fs
var infoOrderData = require('./data.js');
var waterRightdata = require('./waterRightdata.js');
var app = express();

var port =  process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser());

///////////////////// HANDLE REQUESTS TO SERVER //////////////////////////
app.post('/logIn', function(req, res){
	//client is sending idCode and password
	var idCode = req.body.idCode;
	var password = req.body.password;
	console.log(idCode);
	for(var i=0; i<infoOrderData.length; i++){
		if(infoOrderData[i].idCode === idCode && infoOrderData[i].password === password){
			var savedData = {
				owner: infoOrderData[i].owner, 
				address: infoOrderData[i].address, 
				answers: infoOrderData[i].answers,
				numSources: infoOrderData[i].numSources, 
				multParcels: infoOrderData[i].multParcels,
				reportedSources: infoOrderData[i].reportedSources	
			};
			console.log(savedData);
			res.status(200).json(savedData).end(); //if the password matches, send back some data
		}
		else{
			res.status(404).json('incorrect login').end();
		}
	}	
});

app.put('/infoOrder/submit', function(req, res){
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
	for(var i=0; i<infoOrderData.length; i++){
		if(infoOrderData[i].idCode === idCode){
			infoOrderData[i].answers = answers; //set equal to client's state
			if(answers[0][3]){
				infoOrderData[i].numSources = answers[0][3]; //set equal to the reported number of sources
			}
			else{
				infoOrderData[i].numSources = 0; //if this answer space is falsey, there must be 0 sources
			}
			var numSources = infoOrderData[i].numSources;
			infoOrderData[i].reportedSources = reportedSources; //set equal to newly calculated number of reported sources
		
			var doc = createPDF(infoOrderData[i]); //create pdf
		}
	}
	console.log('numSources: '+numSources);
	
	//send back doc
	res.status(200).json({numSources: numSources, reportedSources: reportedSources}); 
});

app.put('/waterRights/submit', function(req, res){
	var answers = req.body.answers;
	//push answers to waterRightData object
	//get index of where in the waterRightData the new answers have been stored
	var doc = createPDF(waterRightData[index]);
	//send back doc
	res.status(200); 
});

//create pdf
var createPDF = function(dataObject){
	var doc = new PDFDocument;
	doc.pipe(fs.createWriteStream('record.js')); //alternatively could doc.pipe res
	doc.font('Helvetica');
	var pages = [];
	dataObject.answers.forEach(function(answerSet){
		pages.push(createPage(answerSet)); //create a page for each source. for waterRights data, there is just one. push to pages array
	});
	var createPage = function(answerSet){ //create a page with 1 source's questions and corresponding answers
		for(var i=0; i<dataObject.questions.length; i++){
			var question = dataObject.questions[i].line;
			var answer = answerSet[i];
		}
		console.log(question);
		console.log(answer); 
		return (question, answer);
	}; 
	doc.text(pages[0]); 
	if(dataObject.reportedSources>1){ //for each reportedSource after the 1st, add a page
		var k=1;
		while(k<dataObject.reportedSources){
			doc.addPage();
			doc.text(pages[k]);
			k++;
		}
	}
	doc.end();
}


var port = (process.env.PORT || 8080);
app.listen(port);
