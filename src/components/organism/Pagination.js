import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import PaginateContext from '../../context/paginate/paginateContext';
import ValidationContext from '../../context/validationForm/validationContext';
import FetchContext from '../../context/fetch/fetchContext';
import styled from 'styled-components';

const StyleH4 = styled.h4`
display: flex;
justify-content: center;
color: white;
&> p {
    margin: 0 5px;
}
`;

const StyleNav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 50px;

& > i.none {
display: none;
};
& > i.grey {
opacity: 0;
};
& > ul {
width:80%;
padding: 0;
display: flex;
justify-content: space-between;
text-decoration: none;
&> li {
    list-style-type: none;
};
};
`;

const Pagination = () => {

    const [indexFirstNumberPagination, setIndexFirstNumberPagination] = useState(0);

    const paginateContext = useContext(PaginateContext);
    const fetchContext = useContext(FetchContext);
    const validationContext = useContext(ValidationContext);
    const { paginate } = paginateContext || {};
    const { searchPhotos, numbersPagination, totalNumberPhotos } = fetchContext || {};
    const { value } = validationContext || {};

    const handleClickNumberPagination = number => {
        paginate(number);
        searchPhotos(value, number);
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
                <i
                    type='-8'
                    onClick={handleClickArrow}
                    className={`${!numbersPagination.length && 'none'} ${indexFirstNumberPagination === 0 && 'grey'} fas fa-chevron-left`}>
                </i>
                <ul>
                    {numbersPagination.slice(indexFirstNumberPagination, indexFirstNumberPagination + 8).map(number => <li key={number + 1}><NavLink to="/main" onClick={() => handleClickNumberPagination(number + 1)}>{number + 1}</NavLink></li>)}
                </ul>
                <i
                    type='8'
                    onClick={handleClickArrow}
                    className={`${!numbersPagination.length && 'none'} ${indexFirstNumberPagination === Math.ceil(totalNumberPhotos / 50) - 8 && 'grey'}  fas fa-chevron-right`}>
                </i>
            </StyleNav>
        </>
    );
};

export default Pagination;