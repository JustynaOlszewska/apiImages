import { TypeTask } from "../types";

const ValidationReducer = (state, action) => {
    switch (action.type) {
        case TypeTask.SET_TEXT:
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
