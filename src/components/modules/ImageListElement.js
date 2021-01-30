import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { StylesLazyLoadImage, StylesSection } from '../../styles/styleComponents/StyledImageListElement';

import FetchContext from "../../context/fetch/fetchContext";

const ImageListElement = ({ photo }) => {

    const fetchContext = useContext(FetchContext);

    let location = useLocation();

    const getId = () => {
        fetchContext.getPhoto(photo.id)

    };
    return (
        <StylesSection>
            <NavLink to={{
                pathname: `/photo/${photo.id}`,
                state: { background: location }
            }} onClick={getId}>
                <StylesLazyLoadImage 
            src={photo.cover_photo.urls.small} 
            loading="lazy" alt={photo.title} /></NavLink>
        </StylesSection>
    );
};

export default ImageListElement;