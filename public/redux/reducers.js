var actions = require('./actions.js');
var infoOrder = require('./infoOrderState.js');

var initialRepositoryState = {
	infoOrder: infoOrder,
	waterRights: {
		questions: [],
		counter: 0
	},
	infoOrderFaq: {
		questions: [],
		counter: 0
	},
	waterRightsFaq: {
		questions: [],
		counter: 0
	}
};

var infoOrderReducer= function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.SUBMIT_ANSWER) {
        //send infoOrder.questions[counter] to server and increase infoOrder.counter ++
        return state;
    }
    if (action.type === actions.SHOW_POPOVER){ 
    //change the infoOrder.questions[counter].id.show to true or false
    //by rebuilding the relevent question and concating it into the state    
        var questionSet = action.questionSet;
        var counter = state[questionSet].counter;
        var id = action.id;
        var target = action.target; //get all the information passed from the component
        var question = state[questionSet].questions[counter][id]; //id the question
        
        var newPopover = Object.assign({}, question, {show: !question.show, target: target});
        var before = state[questionSet].questions[counter].slice(0,counter); //cut out the selected question from that view's list of questions
        var after = state[questionSet].questions[counter].slice(counter+1);
        var newView = before.concat(newPopover, after);
        console.log(newView);
        return state;
    }
    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[counter].id.value to the e.target.value
    }
    return state;
};

var infoOrderFaqReducer= function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.SUBMIT_ANSWER) {
        return state;
    }
   
    return state;
};

var waterRightsReducer= function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.SUBMIT_ANSWER) {
        return state;
    }
   
    return state;
};

var waterRightsFaqReducer= function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.SUBMIT_ANSWER) {
        return state;
    }
   
    return state;
};

var combineReducers = require('redux').combineReducers;
var reducer = combineReducers({
    infoOrder: infoOrderReducer,
    waterRights: waterRightsReducer,
    infoOrderFaq: infoOrderFaqReducer,
    waterRightsFaq: waterRightsFaqReducer
});

exports.reducer = reducer;