var actions = require('./actions');

var initialRepositoryState = [];

var firstReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.XXXXX) {
        return state.concat({
            // name: action.repository,
            // rating: null
        });
    }
    else if (action.type === actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        // var index = -1;
        // for (var i=0; i<state.length; i++) {
        //     var repository = state[i];
        //     if (repository.name === action.repository) {
        //         index = i;
        //         break;
        //     }
        // }

        // if (index === -1) {
        //     throw new Error('Could not find repository');
        // }

        // var before = state.slice(0, i);
        // var after = state.slice(i + 1);
        // var newRepository = Object.assign({}, repository, {rating: action.rating});
        // return before.concat(newRepository, after);
    }

    return state;
};

var combineReducers = require('redux').combineReducers;
var reducer = combineReducers({
    board: boardReducer,
    list: listReducer,
    card: cardReducer
});

exports.firstReducer = firstReducer;