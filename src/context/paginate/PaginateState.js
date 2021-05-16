import React, { useReducer } from "react";
import PaginateReducer from "./paginateReducer";
import PaginateContext from "./paginateContext";
import { SET_PAGINATION } from "../types";

const PaginateState = props => {
    const initialState = {
        currentPage: 1,
    };
    const [state, dispatch] = useReducer(PaginateReducer, initialState);

    const paginate = (number) => {
        dispatch({
            type: SET_PAGINATION,
            payload: number
        });
    };
    return <PaginateContext.Provider value={{ currentPage: state.currentPage, paginate }}>{props.children}</PaginateContext.Provider>
}

export default PaginateState;