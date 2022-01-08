import { CHANGE_SEARCH_FIELD, ROBOTS } from './constants.js';

const initialState =  {
    robots: [],
    searchField: '',
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case (ROBOTS):
            return ({ ...state,  robots: action.payload });
        case (CHANGE_SEARCH_FIELD):
            return ({ ...state,  searchField: action.payload });
        default:
            return state;
    }
}