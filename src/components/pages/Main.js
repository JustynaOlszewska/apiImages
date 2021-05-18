import React, { lazy, useContext } from 'react';
import FetchContext from "../../context/fetch/fetchContext";
import { StyledHeaderSearch } from '../../styles/styleComponents/StyledSearch';
import { themeForm } from "../../styles/themes/buttons";
import { StyledH1 } from "../../styles/styleComponents/StyledMain";
const ImagesList = lazy(() => import('../organism/ImagesList'));
const Form = lazy(() => import('../molecules/Form.js'));
const Pagination = lazy(() => import('../organism/Pagination'));

const Main = () => {

    const fetchContext = useContext(FetchContext);
    const { loadingImages } = fetchContext || {};

    return (
        <div>
            <StyledHeaderSearch mainPage>
                <Form theme={themeForm} />            
            </StyledHeaderSearch>
            {loadingImages ?
                <>
                    <Pagination />
                    <ImagesList />
                </>
                : <StyledH1>Choose some option, please</StyledH1>}
        </div >
    );
};

export default Main;