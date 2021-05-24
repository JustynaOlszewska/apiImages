import React, { lazy, useEffect, useContext } from 'react';
import FetchContext from "../../../context/fetch/fetchContext";
import { StyledHeaderSearch } from '../../../styles/styleComponents/StyledSearch';
import { Photo } from "./HeaderSearch.model";
const Search = lazy(() => import('../../molecules/search/Search'));

const HeaderSearch = () => {
    const fetchContext = useContext(FetchContext);

    const { getRandomPhoto, randomPhoto }: Photo = fetchContext || {};

    useEffect((): void => {
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