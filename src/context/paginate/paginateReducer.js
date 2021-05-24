import { TypeTask } from "../types";

const PaginateReducer = (state, action) => {
    switch (action.type) {
        case TypeTask.SET_PAGINATION:
            return {
                ...state,
                currentPage: action.paylad
            }
        case TypeTask.SET_INDEX_FIRST_NUMBER:
            return {
                ...state,
                indexFirstNumberPagination: state.indexFirstNumberPagination + action.payload
            }
        default:
            return state
    }
};

export default PaginateReducer;
