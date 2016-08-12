require('isomorphic-fetch');

var ON_LOAD= 'ON_LOAD';
var onLoad = function(counter) {
	console.log('action: onLoad');
    return {
        type: ON_LOAD, 
        counter: counter
    }
};
exports.ON_LOAD = ON_LOAD;
exports.onLoad = onLoad;

var ON_LOAD_WR= 'ON_LOAD_WR';
var onLoadWr = function(counter) {
	console.log('action: onLoad');
    return {
        type: ON_LOAD_WR, 
        counter: counter
    }
};
exports.ON_LOAD_WR = ON_LOAD_WR;
exports.onLoadWr = onLoadWr;

//////// LOG IN ////////////////
var logIn = function(idCode, password){
	return function(dispatch){
		var url='/logIn';
		var data= JSON.stringify({idCode: idCode, password: password});
		var params={
			headers: {'Content-Type': 'application/json'},
			method: 'POST',
			body: data
		};
		return fetch(url, params).then(function(res){
			if(res.state<200 || res.status >= 300){
				var error = new Error(res.statusText)
				console.log(error);
				error.res = res
				throw error;
			}
			return res;
		})
		.then(function(res){
			console.log(res);
			return res.json();
		})
		.then(function(data){
			console.log(data);
			return dispatch(
				logInSuccess(data)
			);
		})
		.catch(function(error){
			console.log(error);
			return dispatch(
				logInNotSuccess(error)
			);
		});
	}
};
exports.logIn = logIn;

////////// LOG IN SUCCESS////////////////
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var logInSuccess = function(data){
	console.log('successful login');
	return{
		type: LOG_IN_SUCCESS,
		data: data
	}
};
exports.LOG_IN_SUCCESS = LOG_IN_SUCCESS;
exports.logInSuccess = logInSuccess;

/////////// LOG IN NOT SUCCESSFUL //////////////
var LOG_IN_NOT_SUCCESS = 'LOG_IN_NOT_SUCCESS';
var logInNotSuccess = function(error){
	console.log('unsuccessful login');
	return{
		type: LOG_IN_NOT_SUCCESS,
		error: error
	}
};
exports.LOG_IN_NOT_SUCCESS = LOG_IN_NOT_SUCCESS;
exports.logInNotSuccess = logInNotSuccess;

var CHANGE_SOURCE = 'CHANGE_SOURCE';
var changeSource = function(e){
	console.log(e.target.value);
	return{
		type: CHANGE_SOURCE, 
		index: e.target.value
	}
};
exports.CHANGE_SOURCE = CHANGE_SOURCE;
exports.changeSource = changeSource;

//////  if question.dropdown or question.selection, then choose option instead of changing input
var CHOOSE_OPTION = 'CHOOSE_OPTION';
var chooseOption = function(e, index){
	console.log('choose option ');
	
	return{
		type: CHOOSE_OPTION,
		index: index, 
		answerIndex: e.target.id
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

var CHOOSE_OPTION_WR = 'CHOOSE_OPTION_WR';
var chooseOptionWr = function(e, index){
	console.log('choose option ');
	return{
		type: CHOOSE_OPTION_WR,
		index: index, 
		answerIndex: e.target.id
	}
}
exports.CHOOSE_OPTION_WR = CHOOSE_OPTION_WR;
exports.chooseOptionWr = chooseOptionWr;

//////////  if question.input, then update the state when form is changed////////////////////
var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e, index){
	console.log(e.target.name);
	if(e.target.value===""){
		var answer = "";
	}
	else if(isNaN(e.target.value)){ //for letters
		var answer = e.target.value;
		console.log('input is not numeric '+answer);
	}
	else{
		var answer = parseInt(e.target.value);
		console.log('input is numeric' + answer); 
	}
	console.log('index is '+ index);
	return{
		type: CHANGE_INPUT, 
		answerIndex: e.target.name,
		answer: answer,
		index: index
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;

var CHANGE_INPUT_WR = 'CHANGE_INPUT_WR';
var changeInputWr = function(e, index){
	console.log(e.target.name);
	if(e.target.value===""){
		var answer = "";
	}
	else if(isNaN(e.target.value)){ //for letters
		var answer = e.target.value;
		console.log('input is not numeric '+answer);
	}
	else{
		var answer = parseInt(e.target.value);
		console.log('input is numeric' + answer); 
	}
	console.log('index is '+ index);
	return{
		type: CHANGE_INPUT_WR, 
		answerIndex: e.target.name,
		answer: answer,
		index: index
	}
};
exports.CHANGE_INPUT_WR = CHANGE_INPUT_WR;
exports.changeInputWr = changeInputWr;

////// when next arrow is clicked ///////////////
var SUBMIT_ANSWER= 'SUBMIT_ANSWER';
var submitAnswer = function() {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_ANSWER
    }
};
exports.SUBMIT_ANSWER = SUBMIT_ANSWER;
exports.submitAnswer = submitAnswer;

var SUBMIT_ANSWER_WR= 'SUBMIT_ANSWER_WR';
var submitAnswerWr = function() {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_ANSWER_WR
    }
};
exports.SUBMIT_ANSWER_WR = SUBMIT_ANSWER_WR;
exports.submitAnswerWr = submitAnswerWr;

var SUBMIT_INFO_ORDER_FAQ= 'SUBMIT_INFO_ORDER_FAQ';
var submitInfoOrderFaq = function() {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_INFO_ORDER_FAQ
    }
};
exports.SUBMIT_INFO_ORDER_FAQ = SUBMIT_INFO_ORDER_FAQ
exports.submitInfoOrderFaq = submitInfoOrderFaq;


////////// SUBMIT WATER SOURCE ////////////////////////////
var submitSource = function(idCode, answers, questions){
	return function(dispatch){
		var url='/infoOrder/submit';
		var data= JSON.stringify({idCode: idCode, answers: answers, questions: questions});
		var params={
			headers: {'Content-Type': 'application/json'},
			method: 'POST',
			body: data
		};
		return fetch(url, params).then(function(res){
			if(res.state<200 || res.status >= 300){
				var error = new Error(res.statusText)
				console.log(error);
				error.res = res
				throw error;
			}
			return res;
		})
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			return dispatch(
				submitSuccess(data)
			);
		})
		.catch(function(error){
			console.log(error);
			return dispatch(
				submitNotSuccess(error)
			);
		});
	}
};
exports.submitSource = submitSource;

//// SUBMIT WATER RIGHT //////////
var submitRight = function(answers, questions){
	return function(dispatch){
		var url='/waterRight/submit';
		var data= JSON.stringify({answers: answers, questions: questions});
		var params={
			headers: {'Content-Type': 'application/json'},
			method: 'POST',
			body: data
		};
		return fetch(url, params).then(function(res){
			if(res.state<200 || res.status >= 300){
				var error = new Error(res.statusText)
				console.log(error);
				error.res = res
				throw error;
			}
			return res;
		})
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			return dispatch(
				submitSuccess(data)
			);
		})
		.catch(function(error){
			console.log(error);
			return dispatch(
				submitNotSuccess(error)
			);
		});
	}
};
exports.submitRight = submitRight;

////////// SUBMIT SUCCESS////////////////////
var SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
var submitSuccess = function(data){
	console.log('successful submit');
	return{
		type: SUBMIT_SUCCESS, 
		data: data
	}
};
exports.SUBMIT_SUCCESS = SUBMIT_SUCCESS;
exports.submitSuccess = submitSuccess;

/////////// SUBMIT NOT SUCCESS ////////////////
var SUBMIT_NOT_SUCCESS = 'SUBMIT_NOT_SUCCESS';
var submitNotSuccess = function(){
	console.log('not successful submit');
	return{
		type: SUBMIT_NOT_SUCCESS
	}
};
exports.SUBMIT_NOT_SUCCESS = SUBMIT_NOT_SUCCESS;
exports.submitNotSuccess = submitNotSuccess;
