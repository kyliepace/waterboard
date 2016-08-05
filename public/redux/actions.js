require('isomorphic-fetch');

var ON_LOAD= 'ON_LOAD';
var onLoad = function(e) {
	console.log('action: onLoad');
    return {
        type: ON_LOAD
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
			{
				method: 'GET',
				body: data
			}
		};
		return fetch(url, params).then(function(res){
			if(res.state<200 || res.status >= 300){
				var error = new Error(res.statusText)
				error.res = res
				throw error;
			}
			return res;
		})
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			console.log(data);
			return dispatch(
				logInSuccess(data);
			);
		})
		.catch(function(error){
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

//////  if question.dropdown or question.selection, then choose option instead of changing input
var CHOOSE_OPTION = 'CHOOSE_OPTION';
var chooseOption = function(e){
	console.log('choose option ');
	var index = e.target.id;
	
	return{
		type: CHOOSE_OPTION,
		answerIndex: index //which option of the selection array
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

//////////  if question.input, then update the state when form is changed////////////////////
var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e){
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
	return{
		type: CHANGE_INPUT, 
		index: e.target.name,
		answer: answer
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;

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
