import { SET_TEXT } from "../types";

const ValidationReducer = (state, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                value: action.payload,
                valueInput: state.value
            }
        default:
            return state
    }
};

export default ValidationReducer;
