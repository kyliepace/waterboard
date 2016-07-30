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
        var questionSet = action.questionSet;
        var counter = state[questionSet].counter;
        var question = state[questionSet].questions[counter][id]; //id the question
        //send infoOrder.questions[counter] to server 

        //increase infoOrder.counter ++
        var answer = state[questionSet].questions[counter]; //gets the set of questions on view
        var index = 0;
        for (var i=0; i<answer.length; i++){
            if(answer[i].selection){
                index = answer[i].selection.indexOf(answer[i].answer); //find which of the selection choices was clicked
            }
        } //if the question has a drop-down list or a set of possible answer, update the index to reflect whichever was chosen
        console.log(index);
        var changeCounterBy = function(){
            return answer[0].changeCounter[index]; //appropriate number to add to counter
        }
        console.log(changeCounterBy());
        counter += changeCounterBy();
        var newCounter = Object.assign({}, state[questionSet], {counter: counter}); //update state with new counter
        // var before = state[questionSet].slice(0, state[questionSet].length - 1);
        // var after = state[questionSet].slice(state[questionSet].length);
        // before.concat(newCounter, after);
        // console.log(before);
        return Object.assign({}, state, {[questionSet]: newCounter});
      
    }
    if (action.type === actions.SHOW_POPOVER){ 
        var questionSet = action.questionSet;
        var counter = state[questionSet].counter;
        var id = action.id;
        var question = state[questionSet].questions[counter][id]; //id the question
    //change the infoOrder.questions[counter].id.show to true or false by rebuilding the relevent question and concating it into the state    
        var target = action.target; //get all the information passed from the component
        var newPopover = Object.assign({}, question, {show: !question.show, target: target});
        var before = state[questionSet].questions[counter].slice(0,counter); //cut out the selected question from that view's list of questions
        var after = state[questionSet].questions[counter].slice(counter+1);
        var newView = before.concat(newPopover, after);
        console.log('popover'+newView);
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