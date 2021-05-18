import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import PaginateContext from '../../context/paginate/paginateContext';
import ValidationContext from '../../context/validationForm/validationContext';
import FetchContext from '../../context/fetch/fetchContext';
import { StyleH4, StyleNav, StyleUl, StyleLi, StyleI } from "../../styles/styleComponents/StyledPagination";

const Pagination = () => {

    const [indexFirstNumberPagination, setIndexFirstNumberPagination] = useState(0);

    const paginateContext = useContext(PaginateContext);
    const fetchContext = useContext(FetchContext);
    const validationContext = useContext(ValidationContext);
    const { paginate } = paginateContext || {};
    const { searchPhotos, numbersPagination, totalNumberPhotos } = fetchContext || {};
    const { valueInput } = validationContext || {};

    const handleClickNumberPagination = number => {
        paginate(number);
        searchPhotos(valueInput, number);
    };

    const handleClickArrow = event => {
        const typeArrow = parseInt(event.target.getAttribute('type'))

        if (typeArrow === -8 && indexFirstNumberPagination <= 1) return
        else if (typeArrow === 8 && indexFirstNumberPagination >= numbersPagination.length - 8) return

        setIndexFirstNumberPagination(indexFirstNumberPagination + typeArrow)
    };

    return (
        <>
            <StyleH4>A list of all pages: <p>{Math.ceil(totalNumberPhotos / 50)}</p></StyleH4>
            <StyleNav>
                <StyleI
                    none={!numbersPagination.length ? "none" : undefined}
                    grey={indexFirstNumberPagination === 0}
                    type='-8'
                    onClick={handleClickArrow}
                    className="fas fa-chevron-left">
                </StyleI>
                <StyleUl>
                    {numbersPagination.slice(indexFirstNumberPagination, indexFirstNumberPagination + 8).map(number => <StyleLi key={number + 1}><NavLink to="/main" onClick={() => handleClickNumberPagination(number + 1)}>{number + 1}</NavLink></StyleLi>)}
                </StyleUl>
                <StyleI
                    type='8'
                    onClick={handleClickArrow}
                    none={!numbersPagination.length ? "none" : undefined}
                    grey={indexFirstNumberPagination === Math.ceil(totalNumberPhotos / 50) - 8}
                    className="fas fa-chevron-right">
                </StyleI>
            </StyleNav>
        </>
    );
};

export default Pagination;