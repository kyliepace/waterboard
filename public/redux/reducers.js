var actions = require('./actions.js');
var infoOrder = require('./infoOrderState.js');

var initialRepositoryState = {
    infoOrder: infoOrder,
    waterRights: "",
    infoOrderFaq: "",
    waterRightsFaq: ""
};

var infoOrderReducer= function(state, action) {
    state = state || infoOrder;
    //////////////// LOG IN ////////////////////////////////////////
    if(action.type === actions.ON_LOAD){
        console.log('reducer: on load');
        //set up first answer object with one array for each question
        var answerObject = {}; //this will be the answer object for the first water source
        for (var i = 0; i<state.questions.length; i++){
            answerObject[i] = []; //assign a new key:value pair to the object for each question
        }
        var newAnswers = Object.assign({}, state.answers, {0: answerObject});
        var newState =  Object.assign({}, state, {answers: newAnswers});
        console.log(newState);
        return newState;
    }

    //////////// CHANGE INPUT /////////////////////////////////////////////////
    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[counter].id.value to the e.target.value
        var counter = state.counter;
        var sourceCounter = state.sourceCounter;
        var question = state.questions[counter];
        var index = action.index; //which of the input bars is being changed
        var answer = action.answer; //save the input value

        //update the answers object
        var newAnswer = state.answers[sourceCounter][counter].slice(0, index).concat(answer, state.answers[sourceCounter][counter].slice(index+1));
            console.log(newAnswer); //incoming value
            console.log(state.answers[sourceCounter][counter]); //old answer array - why is this still blank?
    
            console.log('updating water source answers');
          
        var newAnswersForSource = Object.assign({}, state.answers[sourceCounter], {[counter]: newAnswer});
        console.log(newAnswersForSource);
        var newAnswersForState = Object.assign({}, state.answers, {[sourceCounter]:newAnswersForSource});
        var next = question.changeCounter[0] + counter;
        //turn off the disabled value
        var newQuestion = Object.assign({}, question, {disabled: false}); //update the question state
        var before = state.questions.slice(0, counter);
        var after = state.questions.slice(counter+1);
        var newQuestions = before.concat(newQuestion, after); 
            
        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, next: next, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        return newState;
    }

/////////////// CHOOSE FROM SELECTION ARRAY ////////////////////////////////////////////////
    if (action.type === actions.CHOOSE_OPTION){ 
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
        
        if(question.selected){ //if a multiple-choice question
             //change the answer value
            var answerIndex = action.answerIndex; //which element in the selected array has been clicked?
            console.log('answer:'+ answerIndex);
            
            //updated the selected array so that the button has selected=true
            var newArray = [false, false];
            newArray[answerIndex] = true;
            console.log(newArray);
        }
        else{ //if an input
            var selected = []
            var answerIndex = 0;
        }
        //increase question.next 
        
        var next = question.changeCounter[answerIndex]+counter; //add a specified number to the counter to calculate the next index
      
        console.log('next index: '+next);
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: answerIndex, selected: newArray, disabled: false});
        //create new question array
        var after = state.questions.slice(counter+1);
        var newQuestions = state.questions.slice(0, counter).concat(newQuestion, after); 
        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, counter: counter, next: next}); //if I don't include counter here, it doesn't get copied
        console.log('new state:')
        console.log(newState);
        return newState;
    }
    
////////////// SUBMIT ANSWER /////////////////////////////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
        //check to see if counter>questions.length and if so, send answers to server

        //if multiple choice, save answer string to state. If not multiple choice, this has already been done onChange.
        if(!question.input){
            console.log('answer index is '+question.answerIndex); //for multiple-choice questions
            if(question.selection){
                var answer = question.selection[question.answerIndex];
            }
            
            //update the state.answers array
            var newAnswerArray = state.answers[state.sourceCounter][counter].concat(answer);
            var newAnswerForSource = Object.assign({}, state.answers[state.sourceCounter], {[counter]: newAnswerArray}); //update the question object within the water source answers object within the answers object
            var newAnswersForState = Object.assign({}, state.answers, {[state.sourceCounter]: newAnswerForSource}); //update the water source answers object within the answers object
            console.log(newAnswersForState);
        }
        else{
            console.log('submitting an input-type question');
            var newAnswersForState = state.answers;
        }
        
        var next = state.next; //the value of next becomes the new counter index
        var clicks = state.clicks;
        clicks ++;
        
        var newState = Object.assign({}, state, {counter: next, clicks: clicks, answers: newAnswersForState}); //update state with new counter
        console.log('new state'); console.log(newState);
        return newState;
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