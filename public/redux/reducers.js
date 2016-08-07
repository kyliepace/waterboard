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
    //////////////// ON LOAD ////////////////////////////////////////
    if(action.type === actions.ON_LOAD){
        console.log('reducer: on load');
        //set up first answer object with one array for each question
        var answerObject = {}; //this will be the answer object for the first water source
        for (var i = 0; i<state.questions.length; i++){
            answerObject[i] = []; //assign a new key:value pair to the object for each question
            
        }
        var newAnswers = Object.assign({}, state.answers, {0: answerObject, 1: answerObject, 2: answerObject, 3:answerObject, 4: answerObject});
        var newState =  Object.assign({}, state, {answers: newAnswers});
        console.log(newState);
        return newState;
    }

    //////////// LOG IN SUCCESS //////////////////////////
    if(action.type === actions.LOG_IN_SUCCESS){
        var data = action.data;
        //update state to include data.owner, data.address, data.answers as well as updated counters
        var counter = state.next; //the value of next becomes the new counter index
        var clicks = state.clicks + 1;

        //update the state answers if they have already been saved to server
        if(data.answers){ 
            var answers = data.answers;
        }
        else{
            var answers = state.answers;
        }
        
        var newState = Object.assign({}, state, {answers: answers, owner: data.owner, address: data.address, counter: counter, next: 2, clicks: clicks, sources: data.sources, multParcels: data.multParcels, reportedSources: data.reportedSources})
        return newState;
    }
    /////////// CHANGE SOURCE COUNTER//////////////////////////
    if(action.type === actions.CHANGE_SOURCE){
        var newSourceCounter = action.index;
        var newState = Object.assign({}, state, {sourceCounter: newSourceCounter});
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
        // validate text input
        console.log('type of answer '+typeof(answer) + 'must be '+question.validate[index]);
        
        var error = [];
        question.error.forEach(function(message){
            error.push(message); //copy error array
        });
        if(typeof(answer)===question.validate[index]){
             //update the answers object
             var newAnswerArray = [];
             for(var i=0; i<question.input.length; i++){
                if(state.answers[sourceCounter][counter][i]){
                    newAnswerArray.push(state.answers[sourceCounter][counter][i]); //copy the state.answer value
                }
                else{
                    newAnswerArray.push(""); //if nothing has been saved there yet, push a blank placeholder
                }
             }
            newAnswerArray[index] = answer;
            console.log('updating water source answer');
            console.log(newAnswerArray);
            var newAnswersForSource = Object.assign({}, state.answers[sourceCounter], {[counter]: newAnswerArray});
            console.log(newAnswersForSource);
            var newAnswersForState = Object.assign({}, state.answers, {[sourceCounter]:newAnswersForSource});
            
            var next = question.changeCounter[0] + counter; //set new next value
            //turn off the disabled value and clear any error message
            error[index]="";
            var newQuestion = Object.assign({}, question, { error: error, disabled: false}); //update the question state
            var before = state.questions.slice(0, counter);
            var after = state.questions.slice(counter+1);
            var newQuestions = before.concat(newQuestion, after);        
            
            //update the state
            var newState = Object.assign({}, state, {questions: newQuestions, next: next, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
            return newState; 
        }
        else{ //if the input isn't the correct typeof
            if(question.validate[index]==='string'){
                error[index]=('this shouldn\'t be a number');
            }
            else if(question.validate[index]==='number'){
                error[index]=('please enter a number');
            }
            else{
                error[index]=('hmmm, something\'s not right here');
            }
            var newQuestion = Object.assign({}, question, {error: error, disabled: true});
            var before = state.questions.slice(0, counter);
            var after = state.questions.slice(counter+1);
            var newQuestions = before.concat(newQuestion, after);        
            //update the state
            var newState = Object.assign({}, state, {questions: newQuestions}); //update only the questions
            return newState; 
        }
                 
    }

/////////////// CHOOSE FROM SELECTION ARRAY ////////////////////////////////////////////////
    if (action.type === actions.CHOOSE_OPTION){ //only for multiple-choice questions
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
        var answer = question.selection[action.answerIndex]; //which answer?
        
         //change the answer value
        var answerIndex = action.answerIndex; //which element in the selected array has been clicked?
        console.log('answer:'+ answerIndex);
        
        //updated the selected array so that the button has selected=true
        var newArray = [];
        if(question.mult){
            question.selected.forEach(function(select){
                newArray.push(select);
            }); //copy the question.selected array
            newArray[answerIndex]=!question.selected[answerIndex]; //toggle
        }
        else{
            question.selected.forEach(function(){
                newArray.push(false);
            }); //fill newArray with false
            newArray[answerIndex] = true; //make the selected one true
        }
        console.log(newArray);

        //update the answer array
        var newAnswerArray = [];
        for(var i=0; i<newArray.length; i++){
            if(newArray[i]===true){
                newAnswerArray.push(question.selection[i]); //push that value into the array
            }
            else{
                newAnswerArray.push(""); //push a blank placeholder
            }
        };

        //increase question.next        
        var next = question.changeCounter[answerIndex]+counter; //add a specified number to the counter to calculate the next index
      
        console.log('next index: '+next);
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: answerIndex, selected: newArray, disabled: false});
        //create new question array
        var after = state.questions.slice(counter+1);
        var newQuestions = state.questions.slice(0, counter).concat(newQuestion, after); 
        
        //update the state.answers array
        // var newAnswerArray = state.answers[state.sourceCounter][counter].concat(newAnswerArray);
        var newAnswerForSource = Object.assign({}, state.answers[state.sourceCounter], {[counter]: newAnswerArray}); //update the question object within the water source answers object within the answers object
        var newAnswersForState = Object.assign({}, state.answers, {[state.sourceCounter]: newAnswerForSource}); //update the water source answers object within the answers object
        console.log('new answers for state');
        console.log(newAnswersForState);

        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, counter: counter, next: next, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        console.log('new state:')
        console.log(newState);
        return newState;
    }
    
////////////// SUBMIT ANSWER /////////////////////////////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        var counter = state.counter;
        var question = state.questions[counter]; //which question?
  
        var counter = state.next; //the value of next becomes the new counter index
        var clicks = state.clicks;
        clicks ++;
        
        var newState = Object.assign({}, state, {counter: counter, clicks: clicks}); //update state with new counter
        console.log('new state'); console.log(newState);
        return newState;
    }

    /////////////// SUBMIT SUCCESS//////////////
    if(action.type === actions.SUBMIT_SUCCESS){
        console.log('successfully submitted source info');
        //print out copy of answers

        console.log(action.data.numSources); //check number of reported water sources
        var numSources = action.data.numSources;
        var reportedSources = action.data.reportedSources; 

        //if more water sources reported than submitted, sourceCounter ++ and counter to 4. 
        //alert that we are taking them to report for an additional source
        if(numSources > reportedSources){
            var newSourceCounter = state.sourceCounter +1;
            console.log(newSourceCounter);
            alert('This source is submitted! It looks like you have at least one more source to report for this property. Let\'s report it now.');
            var newState = Object.assign({}, state, {counter: 1, numSources:numSources, reportedSources: reportedSources, sourceCounter: newSourceCounter, clicks: 3, next: 2}) //next should be 5 at the point we're re-entering the form
            return newState;
        }

        //if state.mult === true, take back to login screen.
        else if(state.multParcels === true){
            alert('It looks like you\'re done with this parcel, but our records indicate that you own more parcels subject to the Info Order. Please log in with your next APN/ID Code.');
            var newState = Object.assign({}, state, {counter: 0, numSources: null, reportedSources: null });
            location.reload(true);
        }

        else{
            var newState = Object.assign({}, state, {counter: 1001});
            return newState;
        }
        
    }

    //////// SUBMIT NOT SUCCESS///////////
    if(action.type === actions.SUBMIT_NOT_SUCCESS){

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