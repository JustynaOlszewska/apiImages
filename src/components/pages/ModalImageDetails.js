import React, { useContext } from 'react';

import FetchContext from "../../context/fetch/fetchContext";

import { StylesModal, StylesContainerData } from '../../styles/styleComponents/StyledModalImageDetails';

const ModalImageDetails = () => {
    const fetchContext = useContext(FetchContext);

    return (
        <StylesModal>
            <div>
                <p>Author: {fetchContext?.photo?.user?.name}</p>
                <StylesContainerData>
                    {fetchContext?.photo?.cover_photo?.urls?.thumb ?
                        <img src={fetchContext?.photo?.cover_photo?.urls?.thumb} loading="lazy" alt={fetchContext.photo.title} /> : <p>sorry</p>}
                </StylesContainerData>
                <p>Location: {fetchContext?.photo?.cover_photo?.user?.location ?
                    fetchContext?.photo?.cover_photo?.user?.location : <p>no photo</p>}</p>

            </div>
        </StylesModal>
    )
};

export default ModalImageDetails;