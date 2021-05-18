import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';
import FetchContext from "../../context/fetch/fetchContext";
import { StylesContainerData, StylesModal } from '../../styles/styleComponents/StyledModal';
const Spinner = lazy(() => import('../atoms/spinner/Spinner'));

const Modal = () => {

    const fetchContext = useContext(FetchContext);
    const { clearPhoto, loading, photo: { user: { name } = {}, cover_photo: { urls: { small } = {}, user: { location } = {} } = {}, title } = {} } = fetchContext || {};

    const history = useHistory();

    const back = e => {
        e.stopPropagation();
        history.goBack();
        clearPhoto();
    };

    return (
        <StylesModal onClick={back}>
            {loading ? <div><Spinner /></div> :
                <div>
                    <p>Author: {name}</p>
                    <StylesContainerData>
                        {small ?
                            <img src={small} loading="lazy" alt={title} /> : "no photo"}
                    </StylesContainerData>
                    <p>Location: {location ? location : "no location"}</p>
                    <button type="button" onClick={back}>
                        Close
          </button>
                </div>
            }
        </StylesModal>
    );
};

export default Modal;
