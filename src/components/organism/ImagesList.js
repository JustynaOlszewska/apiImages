import React, { lazy, useContext } from 'react';
import Spinner from "../molecules/spinner/Spinner";
import FetchContext from "../../context/fetch/fetchContext";
import { StylesImagesList } from '../../styles/styleComponents/StyledImagesList';
const ImageListElement = lazy(() => import('../molecules/ImageListElement'));

const ImagesList = () => {

    const fetchContext = useContext(FetchContext);
    const { photos, loading } = fetchContext || {};

    return (
        <StylesImagesList>{loading ? <div><Spinner /></div> : photos.map(element => {
            return (
                <ImageListElement key={element.id} photo={element} />
            )
        })}</StylesImagesList>
    );
};

export default ImagesList;