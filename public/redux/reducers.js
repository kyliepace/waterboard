var actions = require('./actions.js');
var infoOrder = require('./infoOrderState.js');
var infoOrderFAQ = require('./infoOrderFAQState.js');
var waterRights = require('./waterRightsState.js');
var waterRightsFAQ = require('./waterRightsFAQState.js');


var infoOrderReducer= function(state, action) {
    state = state || infoOrder;
    //////////////// ON LOAD ////////////////////////////////////////
    if(action.type === actions.ON_LOAD){
        console.log('reducer: on load');    
        console.log('url counter is at '+ action.counter);

        //if already in local storage, use that
        //if counter > 0 then we're not at the login screen and do want
        if(localStorage.getItem('infoOrder') && action.counter>0){
            var storage = JSON.parse(localStorage.getItem('infoOrder')); 
            // we want to keep the localStorage counter value in cases when the page is refreshed, but not when the user is logging in again
            console.log('from storage', storage); 
            var newState = Object.assign({}, state, storage); //copy state and update with stored values    
        }
        else{ //otherwise we are at the login screen and don't want the local storage, if it's even there
            console.log('reset state');
            //set up first answer object with one array for each question
            var answerObject = {}; //this will be the answer object for the first water source
            for (var i = 0; i<state.questions.length; i++){
                answerObject[i] = []; //assign a new key:value pair to the object for each question
                
            }
            var newAnswers = Object.assign({}, state.answers, {0: answerObject, 1: answerObject, 2: answerObject, 3:answerObject, 4: answerObject});
            var newState =  Object.assign({}, state, {answers: newAnswers, questions: state.questions});
            console.log(newState);  
            localStorage.setItem('infoOrder', newState);   //update localStorage   
        } 
        return newState;
    }

    //////////// LOG IN SUCCESS //////////////////////////
    if(action.type === actions.LOG_IN_SUCCESS){
        console.log('reducer: log in success');
        var data = action.data;
        if(data.answers){ //update the state answers if they have already been saved to server
            var answers = data.answers;
        }
        else{
            var answers = state.answers;
        }
        var newState = Object.assign({}, state, {answers: answers, owner: data.owner, address: data.address, numSources: data.numSources, multParcels: data.multParcels, reportedSources: data.reportedSources})
        localStorage.setItem('infoOrder', newState); //update local storage
        return newState;
    }
    /////////// CHANGE SOURCE COUNTER//////////////////////////
    if(action.type === actions.CHANGE_SOURCE){
        console.log('reducer: change source counter');
        var newSourceCounter = action.index;
        var newState = Object.assign({}, state, {sourceCounter: newSourceCounter});
        localStorage.setItem('infoOrder', JSON.stringify(newState));
        return newState;
    }

    //////////// CHANGE INPUT /////////////////////////////////////////////////
    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[index].id.value to the e.target.value
        var index = parseInt(action.index); //question index
        var sourceCounter = state.sourceCounter;
        var question = state.questions[index];
        var answerIndex = parseInt(action.answerIndex); //which of the input bars is being changed
        var answer = action.answer; //save the input value
        // validate text input
        console.log('type of answer '+typeof(answer) + 'must be '+question.validate[answerIndex]);
        
        var error = [];
        question.error.forEach(function(message){
            error.push(message); //copy error array
        });

        if(typeof(answer)===question.validate[answerIndex]){
            var disabled = false;
            var validationState = 'success';
             //update the answers object
             var newAnswerArray = [];
             for(var i=0; i<question.input.length; i++){
                if(state.answers[sourceCounter][index][i]){
                    newAnswerArray.push(state.answers[sourceCounter][index][i]); //copy the state.answer value
                }
                else{
                    newAnswerArray.push(""); //if nothing has been saved there yet, push a blank placeholder
                }
             }
            newAnswerArray[answerIndex] = answer;
            console.log('updating water source answer');
            console.log(newAnswerArray);
            var newAnswersForSource = Object.assign({}, state.answers[sourceCounter], {[index]: newAnswerArray});
            console.log(newAnswersForSource);
            var newAnswersForState = Object.assign({}, state.answers, {[sourceCounter]:newAnswersForSource});
            
            //clear any error message
            error[answerIndex]="";
            
        }
        else{ //if the input isn't the correct typeof
            var disabled = true;
            var validationState = 'error';
            if(question.validate[answerIndex]==='string'){
                error[answerIndex]=('this shouldn\'t be a number');
            }
            else if(question.validate[answerIndex]==='number'){
                error[answerIndex]=('please enter a number');
            }
            else{
                error[answerIndex]=('hmmm, something\'s not right here');
            }
            var newAnswersForState = Object.assign({}, state.answers); //new answers will be the same as old answers
        }

        var newQuestion = Object.assign({}, question, { error: error, disabled: disabled, validationState: validationState}); //update the question state
        var before = state.questions.slice(0, index);
        var after = state.questions.slice(index+1);
        var newQuestions = before.concat(newQuestion, after);        
        
        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        return newState; 
                 
    }

/////////////// CHOOSE FROM SELECTION ARRAY ////////////////////////////////////////////////
    if (action.type === actions.CHOOSE_OPTION){ //only for multiple-choice questions
        var index = parseInt(action.index);
        var question = state.questions[index]; //which question?
        var answer = question.selection[action.answerIndex]; //which answer?
        
        //updated the selected array so that the button has selected=true
        var newArray = [];
        if(question.mult){
            question.selected.forEach(function(select){
                newArray.push(select);
            }); //copy the question.selected array
            newArray[action.answerIndex]=!question.selected[action.answerIndex]; //toggle
        }
        else{
            question.selected.forEach(function(){
                newArray.push(false);
            }); //fill newArray with false
            newArray[action.answerIndex] = true; //make the selected one true
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
        var next = question.changeCounter[action.answerIndex]; //add a specified number to the counter to calculate the next index
        console.log('next question: '+next);
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: action.answerIndex, selected: newArray, disabled: false, next: next});
        //create new question array
        var after = state.questions.slice(index+1);
        var newQuestions = state.questions.slice(0, index).concat(newQuestion, after); 
        
        //update the state.answers array
        // var newAnswerArray = state.answers[state.sourceCounter][counter].concat(newAnswerArray);
        var newAnswerForSource = Object.assign({}, state.answers[state.sourceCounter], {[index]: newAnswerArray}); //update the question object within the water source answers object within the answers object
        var newAnswersForState = Object.assign({}, state.answers, {[state.sourceCounter]: newAnswerForSource}); //update the water source answers object within the answers object
        console.log('new answers for state');
        console.log(newAnswersForState);

        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        console.log('new state:')
        console.log(newState);
        return newState;
    }
    
////////////// SUBMIT ANSWER /////////////////////////////////////////////
    if (action.type === actions.SUBMIT_ANSWER) {
        console.log('reducer: submit answer');
        var newState = Object.assign({}, state);
        localStorage.setItem('infoOrder', JSON.stringify(newState)); //update local storage
        return newState;
    }

    /////////////// SUBMIT SUCCESS//////////////
    if(action.type === actions.SUBMIT_SUCCESS){
        console.log('successfully submitted source info');
        //print out copy of answers

        console.log(action.data.numSources); //check number of reported water sources
        var numSources = action.data.numSources;
        var reportedSources = action.data.reportedSources; 
        //if more water sources reported than submitted, sourceCounter ++ and counter to 1. 
        //alert that we are taking them to report for an additional source
        //send back to user overview page and then from there, to water source question (4)
        if(numSources > reportedSources){
            var newSourceCounter = state.sourceCounter +1;
            console.log(newSourceCounter);
            alert('This source is submitted! It looks like you have at least one more source to report for this property. Let\'s report it now.');
            //change questions[1].next to 4 so that re-logging in will skip the question about the number of sources?
            var newQuestion = Object.assign({}, infoOrder.questions[1], {next: 4});
            //update question array
            var after = infoOrder.questions.slice(2);
            var newQuestions = infoOrder.questions.slice(0, 1).concat(newQuestion, after); 
            var newState = Object.assign({}, state, {numSources:numSources, reportedSources: reportedSources, 
                sourceCounter: newSourceCounter, questions: newQuestions}) ;
                //questions should be re-set so that multiple choice questions don't appear re-selected
            //update local storage
            localStorage.setItem('infoOrder', JSON.stringify(newState)); //save state to localStorage
            return newState;
        }

        //if state.mult === true, take back to login screen.
        else if(numSources <= reportedSources && state.multParcels === true){
            alert('It looks like you\'re done with this parcel, but our records indicate that you own more parcels subject to the Info Order. Please log in with your next APN/ID Code.');
            var newState = Object.assign({}, state, {numSources: numSources, reportedSources: reportedSources, moreParcels: true });
            //reset local storage 
            localStorage.setItem('infoOrder', JSON.stringify(newState)); //save state to localStorage
        }

        else{
            var newState = Object.assign({}, state, {complete: true, moreParcels: false, moreSources: false, numSources: numSources, reportedSources: reportedSources}); //indicate that they are all done?
            //need to get to the Final component
            console.log(newState);
            return newState; //do not update localStorage
        }      
    }

    //////// SUBMIT NOT SUCCESS///////////
    if(action.type === actions.SUBMIT_NOT_SUCCESS){
        return state;
    }
    return state;
};



var infoOrderFaqReducer= function(state, action) {
    state = state || infoOrderFAQ;
    ////////////// SUBMIT ANSWER /////////////////////////////////////////////
    if (action.type === actions.SUBMIT_INFO_ORDER_FAQ) {
        return state;
    }  
    return state;
};

var waterRightsReducer= function(state, action) {
    state = state || waterRights;
     //////////////// ON LOAD ////////////////////////////////////////
    if(action.type === actions.ON_LOAD_WR){
        console.log('reducer: on load');    
        console.log('url counter is at '+ action.counter);
        //if already in local storage, use that
        if(localStorage.getItem('waterRights') && action.counter > 0){
            var storage = JSON.parse(localStorage.getItem('waterRights')); 
            console.log('from storage', storage); 
            var newState = Object.assign({}, state, storage); //copy state and update with stored values    
        }
        else{ //otherwise we need to set up answers object
            console.log('reset state and set waterRights in localStorage');
            //set up first answer object with one array for each question
            var answerObject = {}; //this will be the answer object for the first water source
            for (var i = 0; i<state.questions.length; i++){
                answerObject[i] = []; //assign a new key:value pair to the object for each question
            }
            var newAnswers = Object.assign({}, state.answers, {0: answerObject});
            var newState =  Object.assign({}, state, {answers: newAnswers, questions: state.questions});
            localStorage.setItem('waterRights', JSON.stringify(newState)); //set localStorage
            console.log(newState);  
        } 
        return newState;
    }
    
     //////////// CHANGE INPUT /////////////////////////////////////////////////
    if (action.type === actions.CHANGE_INPUT_WR){
        var index = parseInt(action.index); //question index
        var question = state.questions[index];
        var answerIndex = parseInt(action.answerIndex); //which of the input bars is being changed
        var answer = action.answer; //save the input value
        // validate text input
        console.log('type of answer '+typeof(answer) + 'must be '+question.validate[answerIndex]);
        var error = [];
        question.error.forEach(function(message){
            error.push(message); //copy error array
        });
        if(typeof(answer)===question.validate[answerIndex]){
            var disabled = false;
            var validationState = 'success';
             //update the answers object
             var newAnswerArray = [];
             for(var i=0; i<question.input.length; i++){
                if(state.answers[0][index][i]){
                    newAnswerArray.push(state.answers[0][index][i]); //copy the state.answer value
                }
                else{
                    newAnswerArray.push(""); //if nothing has been saved there yet, push a blank placeholder
                }
             }
            newAnswerArray[answerIndex] = answer;
            console.log('updating water source answer');
            var newAnswersForSource = Object.assign({}, state.answers[0], {[index]: newAnswerArray});
            var newAnswersForState = Object.assign({}, state.answers, {[0]:newAnswersForSource});
            //clear any error message
            error[answerIndex]="";
        }
        else{ //if the input isn't the correct typeof
            var disabled = true;
            var validationState = 'error';
            if(question.validate[answerIndex]==='string'){
                error[answerIndex]=('this shouldn\'t be a number');
            }
            else if(question.validate[answerIndex]==='number'){
                error[answerIndex]=('please enter a number');
            }
            else{
                error[answerIndex]=('hmmm, something\'s not right here');
            }
            var newAnswersForState = Object.assign({}, state.answers); //new answers will be the same as old answers
        }
        var newQuestion = Object.assign({}, question, { error: error, disabled: disabled, validationState: validationState}); //update the question state
        var before = state.questions.slice(0, index);
        var after = state.questions.slice(index+1);
        var newQuestions = before.concat(newQuestion, after);        
        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        return newState; 
    }
/////////////// CHOOSE FROM SELECTION ARRAY ////////////////////////////////////////////////
    if (action.type === actions.CHOOSE_OPTION_WR){ //only for multiple-choice questions
        var index = parseInt(action.index);
        var question = state.questions[index]; //which question?
        var answer = question.selection[action.answerIndex]; //which answer?
        //updated the selected array so that the button has selected=true
        var newArray = [];
        question.selected.forEach(function(){
            newArray.push(false);
        }); //fill newArray with false
        newArray[action.answerIndex] = true; //make the selected one true
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
        var next = question.changeCounter[action.answerIndex]; //add a specified number to the counter to calculate the next index
        console.log('next question: '+next);
        //update the question with new answer index and un-disable next arrow
        var newQuestion = Object.assign({}, question, {answerIndex: action.answerIndex, selected: newArray, disabled: false, next: next});
        //create new question array
        var after = state.questions.slice(index+1);
        var newQuestions = state.questions.slice(0, index).concat(newQuestion, after); 
        //update the state.answers array
        // var newAnswerArray = state.answers[state.sourceCounter][counter].concat(newAnswerArray);
        var newAnswerForSource = Object.assign({}, state.answers[0], {[index]: newAnswerArray}); //update the question object within the water source answers object within the answers object
        var newAnswersForState = Object.assign({}, state.answers, {[0]: newAnswerForSource}); //update the water source answers object within the answers object
        console.log('new answers for state');
        console.log(newAnswersForState);
        //update the state
        var newState = Object.assign({}, state, {questions: newQuestions, answers: newAnswersForState}); //if I don't include counter here, it doesn't get copied
        console.log('new state:')
        console.log(newState);
        return newState;
    }
    ////////////// SUBMIT ANSWER /////////////////////////////////////////////
    if (action.type === actions.SUBMIT_ANSWER_WR) {
        console.log('reducer: submit answer');
        var newState = Object.assign({}, state);
        localStorage.setItem('waterRights', JSON.stringify(newState));//set localStorage
        return newState;
    } 
    return state;
};

var waterRightsFaqReducer= function(state, action) {
    state = state || waterRightsFAQ;
    if (action.type === actions.SUBMIT_WR_FAQ) {
        return state;
    }
    return state;
};

var combineReducers = require('redux').combineReducers;
var reducer = combineReducers({
    infoOrder: infoOrderReducer,
    waterRights: waterRightsReducer,
    infoOrderFAQ: infoOrderFaqReducer,
    waterRightsFAQ: waterRightsFaqReducer
});

exports.reducer = reducer;
