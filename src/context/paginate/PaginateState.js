import React, { useReducer } from "react";
import PaginateReducer from "./paginateReducer";
import PaginateContext from "./paginateContext";
import { TypeTask } from "../types";

const PaginateState = props => {
    const initialState = {
        currentPage: 1,
        indexFirstNumberPagination: 0,
    };
    const [state, dispatch] = useReducer(PaginateReducer, initialState);

    const paginate = (number) => {
        dispatch({
            type: TypeTask.SET_PAGINATION,
            payload: number
        });
    };

    const setIndexFirstNumberPagination = (typeArrow) => {
        dispatch({
            type: TypeTask.SET_INDEX_FIRST_NUMBER,
            payload: typeArrow
        })
    };

    return <PaginateContext.Provider value={{ indexFirstNumberPagination: state.indexFirstNumberPagination, currentPage: state.currentPage, paginate, setIndexFirstNumberPagination }}>{props.children}</PaginateContext.Provider>
}

export default PaginateState;