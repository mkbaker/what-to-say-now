import { combineReducers } from 'redux';

const editContentReducer = (state = [], action) => {
    // console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_EDIT_CONTENT`:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    editContentReducer,
  });