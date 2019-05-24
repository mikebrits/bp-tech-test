import { UPDATE_SEARCH_TERM } from '../constants';

export const updateSearchTerm = term => ({
    type: UPDATE_SEARCH_TERM,
    payload: {
        term,
    },
});
