import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { StylesLazyLoadImage, StylesSection } from '../../../styles/styleComponents/StyledImageListElement';
import FetchContext from "../../../context/fetch/fetchContext";
import {PhotoProps, Getphoto } from "./ImageListElement.model";

const ImageListElement = ({ photo }: PhotoProps) => {
    const { id, cover_photo: { urls: { small = ""} = {} } = {}, title } = photo || {};
    const fetchContext = useContext(FetchContext);
    const { getPhoto }: Getphoto = fetchContext || {};
    const location = useLocation();

    const getId = (): void => {
        getPhoto(id);
    };

    return (
        <StylesSection>
            <NavLink to={{
                pathname: `/photo/${id}`,
                state: { background: location }
            }} onClick={getId}>
                <StylesLazyLoadImage
                    src={small}
                    loading="lazy" alt={title} /></NavLink>
            {!small && <p>ups, where is this photo?</p>}
        </StylesSection>
    );
};

export default ImageListElement;