import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [], id: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const uniqueId = comments.length;
            return {
                ...comments, errMess: null, id: uniqueId, comment: action.payload
            };

        default:
            return state;
    }
};