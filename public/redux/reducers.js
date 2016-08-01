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
    state = state || infoOrder;
    for (var i=0; i<state.questions.length; i++){
        state.answers.concat({}); //add an empty object to the answers array for every question
    }
    /////////// SUBMIT ANSWER ////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        var counter = state.counter;
        //check to see if counter>questions.length and if so, send answers to server

        var question = state.questions[counter]; //which question?
        console.log('answer index is '+question.answerIndex);
        //push answer to state.answers
        // if(question.value){
        //     var answer = question.value;
        // }
        if(question.selection){
            var answer = question.selection[question.answerIndex];
        }
        else if(question.dropdown){
            var answer = question.dropdown[question.answerIndex];
        }
        var newAnswers = state.answers.slice(0,counter).concat({answer}, state.answers.slice(counter+1));

       //increase infoOrder.counter ++
        var changeCounterBy = function(){
            if(question.changeCounter.length>1){
                return question.changeCounter[question.answerIndex]//appropriate number to add to counter
            }
            else{
                return question.changeCounter[0];
            }   
        }
        console.log(question.changeCounter);
        console.log(changeCounterBy());
        counter += changeCounterBy();
        console.log(counter);

        return Object.assign({}, state, {counter: counter, answers: newAnswers}); //update state with new counter
      
    }
//////////// CHANGE INPUT /////////////////////////////////////////////////
    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[counter].id.value to the e.target.value
    }

/////////////// CHOOSE OPTION ////////////////////////////////////////////////
    if (action.type === actions.CHOOSE_OPTION){ 
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
        
        if(question.selected){ //if a multiple-choice question
             //change the answer value
            var answerIndex = action.answerIndex;
            console.log('answer:'+ answerIndex);
            //updated the selected array
            var selected = question.selected.slice(0,answerIndex).concat(true, question.selected.slice(answerIndex+1));
            console.log(selected);
        }
        else{ //if a dropdown question
            var selected = []
            var answerIndex = question.dropdown.indexOf(action.answerIndex);
        }
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: answerIndex, selected: selected, disabled: false});
        //create new array of questions
        var before = state.questions.slice(0, counter);
        var after = state.questions.slice(counter+1);
        var newQuestions = before.concat(newQuestion, after); 
        console.log(newQuestions);
        //update the state
        return Object.assign({}, state, {questions: newQuestions, counter: counter}); //if I don't include counter here, it doesn't get copied
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