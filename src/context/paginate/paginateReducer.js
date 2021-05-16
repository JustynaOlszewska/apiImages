import { SET_PAGINATION } from "../types";

const PaginateReducer = (state, action) => {
    switch (action.type) {
        case SET_PAGINATION:
            return {
                ...state,
                currentPage: action.paylad
            }
        default:
            return state
    }
};

export default PaginateReducer;
