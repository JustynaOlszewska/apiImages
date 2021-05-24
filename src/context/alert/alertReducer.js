import { TypeTask } from "../types";

const alertReducer = (state, action) => {

    switch (action.type) {
        case TypeTask.SET_ALERT:
            return {
                alert: action.payload
            }
        case TypeTask.REMOVE_ALERT:
            return null;

        default:
            return state
    }
}
export default alertReducer