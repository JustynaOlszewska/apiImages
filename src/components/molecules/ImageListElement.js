import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { StylesLazyLoadImage, StylesSection } from '../../styles/styleComponents/StyledImageListElement';
import FetchContext from "../../context/fetch/fetchContext";

const ImageListElement = ({ photo }) => {
    const { id, cover_photo: { urls: { small } = {} } = {}, title } = photo || {};
    const fetchContext = useContext(FetchContext);
    const { getPhoto } = fetchContext || {};
    let location = useLocation();

    const getId = () => {
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