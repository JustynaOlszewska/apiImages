import React, { useReducer } from 'react';
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { TypeTask } from "../types";

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: TypeTask.SET_ALERT,
            payload: { msg, type }
        });

        setTimeout(() => {
            return dispatch({ type: TypeTask.REMOVE_ALERT })
        }, 5000);
    };

    return <AlertContext.Provider value={{ alert: state, setAlert }}>{props.children}</AlertContext.Provider>
};

export default AlertState;
