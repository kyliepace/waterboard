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
    
    /////////// SUBMIT ANSWER ////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        var questionSet = action.questionSet;
        var counter = state[questionSet].counter;
        var question = state[questionSet].questions[counter]; //which question?
        //send infoOrder.questions[counter] to server 

        //increase infoOrder.counter ++
        var index = 0;
        for (var i=0; i<question.length; i++){
            if(question[i].selection){
                index = question[i].selection.indexOf(question[i].question); //find which of the selection choices was clicked
            }
        } //if the question has a drop-down list or a set of possible answer, update the index to reflect whichever was chosen
        console.log(index);
        var changeCounterBy = function(){
            return question[0].changeCounter[index]; //appropriate number to add to counter
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

    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[counter].id.value to the e.target.value
    }

    if (action.type === actions.CHOOSE_OPTION){
        //change the answer value
        var questionSet = action.questionSet;
        var counter = state[questionSet].counter;
        var question = state[questionSet].questions[counter]; //which question?
        console.log(question);
        var answer = action.answer;
        console.log('answer:'+answer);

        //increase infoOrder.counter ++
        var changeCounterBy = function(){
            return question.changeCounter[answer]; //appropriate number to add to counter
        }
        console.log(question.changeCounter);
        console.log(changeCounterBy());
        counter += changeCounterBy();
        console.log(counter);
        var newQuestion = Object.assign({}, question, {answer: answer});
        
        var before = state[questionSet].questions.slice(0, counter);
        var after = state[questionSet].questions.slice(counter+1);
        var newQuestions = before.concat(newQuestion, after);
        var newObject = {questions: newQuestions, counter: counter};
        return Object.assign({}, state, {[questionSet]: newObject});
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