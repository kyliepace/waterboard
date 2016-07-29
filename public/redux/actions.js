var SUBMIT_ANSWER= 'SUBMIT_ANSWER';
var submitAnswer = function() {
    return {
        type: SUBMIT_ANSWER
    }
};
exports.SUBMIT_ANSWER = SUBMIT_ANSWER;
exports.submitAnswer = submitAnswer;

var showPopover = function(e){
	return{
		type: SHOW_POPOVER,
		question: e
	}
};
exports.SHOW_POPOVER = SHOW_POPOVER;
exports.showPopover = showPopover;

var changeInput = function(e){
	return{
		type: CHANGE_INPUT, 
		question: e
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;
