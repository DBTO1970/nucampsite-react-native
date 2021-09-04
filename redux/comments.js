import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [], id: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            
            return {
                ...state,
                comments: [], 
                id: comments.length,
                comments: action.payload

            };

        default:
            return state;
    }
};