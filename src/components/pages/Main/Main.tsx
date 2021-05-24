import React, { lazy, useContext } from 'react';
import FetchContext from "../../../context/fetch/fetchContext";
import { StyledHeaderSearch } from '../../../styles/styleComponents/StyledSearch';
import { themeForm } from "../../../styles/themes/buttons";
import { StyledH1 } from "../../../styles/styleComponents/StyledMain";
import { LoadingImages } from "./Main.model";
const ImagesList = lazy(() => import('../../organism/imagesList/ImagesList'));
const Form = lazy(() => import('../../molecules/form/Form'));
const Pagination = lazy(() => import('../../organism/pagination/Pagination'));

const Main = () => {
    const fetchContext = useContext(FetchContext);
    const { loadingImages }: LoadingImages = fetchContext || {};
    return (
        <div>
            <StyledHeaderSearch>
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