import { INCREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: [],
    initialvalue: ""
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: action.value + 1
            });        
        case SET_DIFF:
            return Object.assign({}, state, {
                initialvalue: action.initialvalue
            });
        default:
            return state;
    }
};


// const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }

const counterApp = combineReducers({
    counter,
    // extra
});

export default counterApp;
