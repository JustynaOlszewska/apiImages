import React, { useReducer } from 'react';
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { REMOVE_ALERT, SET_ALERT } from "../types";

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        setTimeout(() => {
            return dispatch({ type: REMOVE_ALERT })
        }, 10000);
    };

    return <AlertContext.Provider value={{ alert: state, setAlert }}>{props.children}</AlertContext.Provider>
};

export default AlertState;
