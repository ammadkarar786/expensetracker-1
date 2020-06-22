import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
///define initial state
const initialState = {
    transaction: [

    ]
}
//create Context
export const GlobalContext = createContext(initialState)
//provider
export const GloabalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction

        }} >
            {children}

        </GlobalContext.Provider>
    );

}


