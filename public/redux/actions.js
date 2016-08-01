var SUBMIT_ANSWER= 'SUBMIT_ANSWER';
var submitAnswer = function(e) {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_ANSWER
    }
};
exports.SUBMIT_ANSWER = SUBMIT_ANSWER;
exports.submitAnswer = submitAnswer;

//if question.dropdown or question.selection, then choose option instead of changing input
var CHOOSE_OPTION = 'CHOOSE_OPTION';
var chooseOption = function(e){
	console.log('choose option ' +e.target);
	if(e.target.value){
		console.log('dropdown selected ' + e.target.value);
		var index = e.target.value;
	}
	else{
		var index = e.target.id;
	}
	return{
		type: CHOOSE_OPTION,
		answerIndex: index //which option of the selection array
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

//if question.input, then update the state when form is changed
var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e){
	console.log(e.target.id);
	return{
		type: CHANGE_INPUT, 
		answer: e.target.value
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;
