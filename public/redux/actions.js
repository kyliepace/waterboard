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

var SHOW_POPOVER='SHOW_POPOVER';
var showPopover = function(e, set){
	console.log(e.target.id);
	console.log(e.target);
	return{
		type: SHOW_POPOVER,
		target: e.target,
		questionSet: set, 
		id: e.target.id
	}
};
exports.SHOW_POPOVER = SHOW_POPOVER;
exports.showPopover = showPopover;

var CHANGE_INPUT = 'CHANGE_INPUT';
var changeInput = function(e){
	return{
		type: CHANGE_INPUT, 
		question: e
	}
};
exports.CHANGE_INPUT = CHANGE_INPUT;
exports.changeInput = changeInput;
