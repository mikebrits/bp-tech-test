import {UPDATE_SEARCH_TERM} from "../constants";

const initialState = {
    searchTerm: ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload.term
            };
        default: return state;
    }
}