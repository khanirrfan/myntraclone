// setup data layer
// we need this to track basket
import React, { createContext, useReducer, useContext, Children } from "react";
// THIS IS THE DATA LAYER
export const StateContext = createContext();

// build provider

export const StateProvider = ({ reducer, initialState }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState) }>
        {Children }
    </StateContext.Provider>
);