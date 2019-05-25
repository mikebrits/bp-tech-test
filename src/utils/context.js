import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    theme: 'light',
    searchTerm: ''
};

const StateContext = createContext(initialState);

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload.theme,
            };
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
            };
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(contextReducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
