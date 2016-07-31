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


var CHOOSE_OPTION = 'CHOOSE_OPTION';
var chooseOption = function(e, set){
	return{
		type: CHOOSE_OPTION,
		questionSet: set,
		id: e.target.id[0], //which line of the question array
		answer: e.target.id[2] //which option of the selection array
	}
}
exports.CHOOSE_OPTION = CHOOSE_OPTION;
exports.chooseOption = chooseOption;

var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e, set){
	console.log(e.target.id);
	return{
		type: CHANGE_INPUT, 
		questionSet: set,
		id: e.target.id,
		answer: e.target.value
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;
