var actions = require('./actions.js');

var initialRepositoryState = [];

var firstReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.SUBMIT_ANSWER) {
        return state;
    }
   
    return state;
};

// var combineReducers = require('redux').combineReducers;
// var reducer = combineReducers({
//     board: boardReducer,
//     list: listReducer,
//     card: cardReducer
// });

exports.firstReducer = firstReducer;