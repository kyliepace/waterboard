var SUBMIT_ANSWER= 'SUBMIT_ANSWER';
var submitAnswer = function(set) {
	console.log('action: submitAnswer');
    return {
        type: SUBMIT_ANSWER,
        questionSet: set
    }
};
exports.SUBMIT_ANSWER = SUBMIT_ANSWER;
exports.submitAnswer = submitAnswer;

//if question.dropdown or question.selection, then choose option instead of changing input
var CHOOSE_OPTION = 'CHOOSE_OPTION';
var chooseOption = function(e, set){
	return{
		type: CHOOSE_OPTION,
		questionSet: set,
		answer: e.target.id //which option of the selection array
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

//if question.input, then update the state when form is changed
var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e, set){
	console.log(e.target.id);
	return{
		type: CHANGE_INPUT, 
		questionSet: set,
		answer: e.target.value
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;
