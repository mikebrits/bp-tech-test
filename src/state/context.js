import React, { createContext, useReducer, useContext } from 'react';
import generalReducer, { initialState as generalInit } from './reducers/general.reducer';
import searchReducer, { initialState as searchInit } from './reducers/searchTerm.reducer';

const initialState = {
    general: generalInit,
    searchTerm: searchInit,
};

const mainReducer = ({ theme, searchTerm }, action) => ({
    general: generalReducer(theme, action),
    searchTerm: searchReducer(searchTerm, action),
});

const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(mainReducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
