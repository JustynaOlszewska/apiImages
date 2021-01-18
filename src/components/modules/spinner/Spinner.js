import React from 'react';
import spinner from './spinner.gif';

import { Img } from '../../../styles/styleComponents/StyledSpinner';

const Spinner = () => {
    return (
        <>
            <Img src={spinner} loading="lazy" alt="loading..." />
        </>
    );
};

export default Spinner;
