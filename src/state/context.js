import React, { createContext, useReducer, useContext } from 'react';
import themeReducer, { initialState as themeInit } from './reducers/theme.reducer';
import searchReducer, { initialState as searchInit } from './reducers/searchTerm.reducer';

const initialState = {
    theme: themeInit,
    searchTerm: searchInit,
};

const mainReducer = ({ theme, searchTerm }, action) => ({
    theme: themeReducer(theme, action),
    searchTerm: searchReducer(searchTerm, action),
});

const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(mainReducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
