import React, { useReducer } from "react";
import ValidationReducer from "./validationReducer";
import ValidationContext from "./validationContext";
import { TypeTask } from "../types";

const ValidationState = props => {
    const initialState = {
        value: "",
        valueInput: ""
    };

    const [state, dispatch] = useReducer(ValidationReducer, initialState);

    const setText = value => {
            dispatch({
                type: TypeTask.SET_TEXT,
                payload: value
            })
    };

    return <ValidationContext.Provider value={{ value: state.value, valueInput: state.valueInput, setText }}>{props.children}</ValidationContext.Provider>
};

export default ValidationState;
