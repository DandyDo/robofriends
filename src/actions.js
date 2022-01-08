import { CHANGE_SEARCH_FIELD, ROBOTS } from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setRobots = (array) => ({
    type: ROBOTS,
    payload: array
})