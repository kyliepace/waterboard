var actions = require('./actions.js');

var initialRepositoryState = {
	infoOrder: {
		questions: [
            {   0:{line: 'APN', 
                value: "",
                show: false, 
                popover: 'found on your letter. For most people, this is the same as your Accessor\'s Parcel Number'
                }, 
                1:{line: 'password', 
                value: "",
                show: false,
                popover: 'found on your letter. Capitalization does matter'
                }
            },
            {   0:{line: 'How many sources of water do you have?',
                value: "",
                show: false,
                popover: ''
                }
        }],
		counter: 0
	},
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
        //change the infoOrder.questions[counter].key.show to true or false
    }
    if (action.type === actions.CHANGE_INPUT){
        //change the infoOrder.questions[counter].key.value to the e.target.value
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