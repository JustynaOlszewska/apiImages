import React, { lazy, useContext } from 'react'
import { useHistory, } from 'react-router-dom';

import FetchContext from "../../context/fetch/fetchContext";

import { StylesContainerData, StylesModal } from '../../styles/styleComponents/StyledModal';

const Spinner = lazy(() => import('../modules/spinner/Spinner'));

const Modal = () => {

    const fetchContext = useContext(FetchContext);

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
        fetchContext.clearPhoto();
    };

    return (
        <StylesModal onClick={back}>
            {fetchContext.loading ? <div><Spinner /></div> :
                <div>
                    <p>Author: {fetchContext?.photo?.user?.name}</p>
                    <StylesContainerData>
                        {fetchContext?.photo?.cover_photo?.urls?.thumb ?
                            <img src={fetchContext?.photo?.cover_photo?.urls?.thumb} loading="lazy" alt={fetchContext.photo.title} /> : "no photo"}
                    </StylesContainerData>
                    <p>Location: {fetchContext?.photo?.cover_photo?.user?.location ?
                        fetchContext?.photo?.cover_photo?.user?.location : "no location"}</p>
                    <button type="button" onClick={back}>
                        Close
          </button>
                </div>
            }
        </StylesModal>
    );
};

export default Modal;
