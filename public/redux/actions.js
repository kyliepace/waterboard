var ON_LOAD= 'ON_LOAD';
var onLoad = function(e) {
	console.log('action: onLoad');
    return {
        type: ON_LOAD
    }
};
exports.ON_LOAD = ON_LOAD;
exports.onLoad = onLoad;

var LOG_IN_SUCCESS= 'LOG_IN_SUCCESS';
var logInSuccess = function(e) {
	console.log('action: logInSuccess');
    return {
        type: LOG_IN_SUCCESS
    }
};
exports.LOG_IN_SUCCESS = LOG_IN_SUCCESS;
exports.logInSuccess = logInSuccess;


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
