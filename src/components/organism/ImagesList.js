import React, { lazy, useContext } from 'react';
import Spinner from "../modules/spinner/Spinner";
import FetchContext from "../../context/fetch/fetchContext";

import { StylesImagesList } from '../../styles/styleComponents/StyledImagesList';

const ImageListElement = lazy(() => import('../modules/ImageListElement'));

const ImagesList = () => {
    const fetchContext = useContext(FetchContext);

    return (
        fetchContext.loadingImages ?
            <StylesImagesList>{fetchContext.loading ? <div><Spinner /></div> : fetchContext.photos.map(element => {
                return (
                    <ImageListElement key={element.id} photo={element} />
                )
            })}</StylesImagesList>
            : <h1>Choose some option, please</h1>
    );
};

export default ImagesList;