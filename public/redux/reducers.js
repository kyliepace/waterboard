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
   
    /////////// SUBMIT ANSWER ////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
        console.log('answer index is '+question.answerIndex);
        //check to see if counter>questions.length and if so, send answers to server

        //save answer string to state
        if(question.selection){
            var answer = question.selection[question.answerIndex];
        }
        else if(question.dropdown){
            var answer = question.dropdown[question.answerIndex];
        }
        //update the state.answers array
        var newAnswerForSource = Object.assign({}, state.answers[state.sourceCounter], {[counter]: answer}); //update the question object within the water source answers object within the answers object
        var newAnswersForState = Object.assign({}, state.answers, {[state.sourceCounter]: newAnswerForSource}); //update the water source answers object within the answers object
        console.log(newAnswersForState);
       //increase infoOrder.counter ++
        var changeCounterBy = function(){
            if(question.changeCounter.length>1){
                return question.changeCounter[question.answerIndex]//appropriate number to add to counter
            }
            else{
                return question.changeCounter[0];
            }   
        }
        console.log('the quiz will advance by'+ changeCounterBy());
        counter += changeCounterBy();
       
        return Object.assign({}, state, {counter: counter, answers: newAnswersForState}); //update state with new counter
      
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
            //updated the selected array so that the button has selected=true
            
            var newArray = [];
            question.selected.forEach(function(isTrue){
                if (question.selected.indexOf(isTrue) === answerIndex){
                    newArray.push(true); //only the index aligning with the answer index becomes true
                }
                else{
                    newArray.push(false);
                }
            });
            console.log(newArray);
        }
        else{ //if a dropdown question
            var selected = []
            var answerIndex = question.dropdown.indexOf(action.answerIndex);
        }
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: answerIndex, selected: newArray, disabled: false});
        //create new question array
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