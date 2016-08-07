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
var chooseOption = function(e, counter){
	console.log('choose option ');
	var index = e.target.id;
	
	return{
		type: CHOOSE_OPTION,
		counter: counter,
		answerIndex: index //which option of the selection array
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

//////////  if question.input, then update the state when form is changed////////////////////
var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e, counter){
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
	console.log('counter is '+ counter);
	return{
		type: CHANGE_INPUT, 
		index: e.target.name,
		answer: answer,
		counter: counter
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;

////// when next arrow is clicked ///////////////
var SUBMIT_ANSWER= 'SUBMIT_ANSWER';
var submitAnswer = function(counter) {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_ANSWER, 
        counter: counter
    }
};
exports.SUBMIT_ANSWER = SUBMIT_ANSWER;
exports.submitAnswer = submitAnswer;


////////// SUBMIT WATER SOURCE ////////////////////////////
var submitSource = function(idCode, answers){
	return function(dispatch){
		var url='/submit';
		var data= JSON.stringify({idCode: idCode, answers: answers});
		var params={
			headers: {'Content-Type': 'application/json'},
			method: 'PUT',
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
