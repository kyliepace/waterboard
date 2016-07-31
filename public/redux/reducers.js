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
        var changeCounterBy = function(){
            if(question.length>1){
                return question[0].changeCounter[0]; //appropriate number to add to counter
            }
            else{
                return question.changeCounter[0]; //appropriate number to add to counter
            }
            
        }
        console.log(question.changeCounter);
        console.log(changeCounterBy());
        counter += changeCounterBy();
        console.log(counter);

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

        //update the question
        var newQuestion = Object.assign({}, question, {answer: answer});
        var before = state[questionSet].questions.slice(0, counter);
        var after = state[questionSet].questions.slice(counter+1);
        var newQuestions = before.concat(newQuestion, after);
        console.log(newQuestions);

        //increase infoOrder.counter ++
        var changeCounterBy = function(){
            return question.changeCounter[answer]; //appropriate number to add to counter
        }
        console.log(question.changeCounter);
        console.log(changeCounterBy());
        counter += changeCounterBy();
        console.log(counter);

        //update the state
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