import React, { lazy, useEffect, useContext } from 'react';
import FetchContext from "../../context/fetch/fetchContext";
import { StyledHeaderSearch } from '../../styles/styleComponents/StyledSearch';
const Search = lazy(() => import('../molecules/Search'));

const HeaderSearch = () => {
    const fetchContext = useContext(FetchContext);

    const { getRandomPhoto, randomPhoto } = fetchContext || {};

    useEffect(() => {
        getRandomPhoto()
        //eslint-disable-next-line
    }, []);

    return (
        <StyledHeaderSearch back={randomPhoto && randomPhoto} primary>
            <Search />
        </StyledHeaderSearch >
    );
};

export default HeaderSearch;