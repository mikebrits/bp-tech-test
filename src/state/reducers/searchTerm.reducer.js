export const initialState = "";

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return action.payload.searchTerm;
        default:
            return state;
    }
};
