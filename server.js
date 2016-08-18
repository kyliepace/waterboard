var express = require('express');
var jsonParser = require('body-parser').json();
require('isomorphic-fetch');
var PDFDocument = require('pdfkit'); 
var fs = require('fs'); 
var infoOrderData = require('./data.js');
var waterRightsData = require('./waterRightsdata.js');
var app = express();

var port =  process.env.PORT || 8080;
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser());

///////////////////// HANDLE REQUESTS TO SERVER //////////////////////////
app.post('/logIn', function(req, res){
	//client is sending idCode and password
	var idCode = req.body.idCode;
	var password = req.body.password;
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
			res.status(200).json(savedData).end(); //if the password matches, send back some data
		}
	}	
});

app.post('/infoOrder/submit', function(req, res){
	//client is sending idCode and answers
	var idCode = req.body.idCode;
	var answers = req.body.answers;
	var questions = req.body.questions;
	//check how many sources have been reported
	var reportedSources = 0;
	for (var j=0; j<5; j++){ //find number of indicated sources
		if(answers[j][4].length>1){ //this is the array of answers to the question 'what is the water source'
			var reportedSources = reportedSources + 1; 
		}
	}
	
	for(var i=0; i<infoOrderData.length; i++){ //update server database
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
			
			var sources = []; //this will be an array. each element is a set of answers.
			for (var j=0; j<reportedSources; j++){
				sources.push(infoOrderData[i].answers[j]);
			}
			//send back pdf
			var doc = createPDF(questions, sources); //create pdf from array of each water source
			doc.pipe(res);
			res.status(200).json({numSources: numSources, reportedSources: reportedSources});
		}
		else{
			res.status(404);
		}
	}
});

app.post('/waterRights/submit', function(req, res){
	var answers = req.body.answers;
	var questions = req.body.questions;
	waterRightsData.push({questions: questions, answers: answers, owner: answers[0][0][0]}); //push answers to waterRightData object
	var sources = [];
	sources.push(answers); //there will be only one element
	var doc = createPDF(questions, sources);
	doc.pipe(res); //send back doc
	res.status(200); 
});

//create pdf
var createPDF = function(questions, sources){
	var doc = new PDFDocument;
	doc.font('Helvetica');
	var questions = questions;
	//define function that will be used later
	var createPage = function(answerSet){ //create a page with 1 source's questions and corresponding answers
		for(var i=0; i<questions.length; i++){
			var question = questions[i].line;
			var answer = answerSet[i];
		}
		return ([question, answer]);	
	}; 
	
	var pages = [];
	sources.forEach(function(answerSet){
		pages.push(createPage(answerSet)); //create a page for each source. for waterRights data, there is just one. push to pages array
	});
	doc.text(pages[0]); 
	if(sources.length>1){ //for each reportedSource after the 1st, add a page
		var k=1;
		while(k<sources.length){
			doc.addPage();
			doc.text(pages[k]);
			k++;
		}
	}
	return doc;
}

var port = (process.env.PORT || 8080);
app.listen(port);