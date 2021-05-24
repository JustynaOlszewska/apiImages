import React, { lazy, useContext } from 'react';
import Spinner from "../../atoms/spinner/Spinner";
import FetchContext from "../../../context/fetch/fetchContext";
import { StylesImagesList } from '../../../styles/styleComponents/StyledImagesList';
import { FromFetchContext, Photos } from "./ImagesList.model";
const ImageListElement = lazy(() => import('../../molecules/imageListElement/ImageListElement'));

const ImagesList = () => {
    const fetchContext = useContext(FetchContext);
    const { photos, loading }: FromFetchContext = fetchContext || {};

    return (
        <StylesImagesList>{loading ? <div><Spinner /></div> : photos.map((element: Photos) => {
            return (
                <ImageListElement key={element.id} photo={element} />
            )
        })}</StylesImagesList>
    );
};

export default ImagesList;