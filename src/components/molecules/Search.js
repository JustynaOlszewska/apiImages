import React, { lazy } from 'react';
import { StyledSection } from '../../styles/styleComponents/StyledInput';
import { themeSearch } from "../../styles/themes/buttons";
const Alert = lazy(() => import('../organism/Alert'));
const Form = lazy(() => import('./Form'));

const Search = () => {
 
    return (
        <StyledSection>
            <h1>Images search app</h1>
            <p>The internet's source of freely-usable images</p>
            <p>Powered by creators everywhere.</p>
            <Form theme={themeSearch} />
            <p>Trending: lorem, ipsum, dolor,</p>
            <Alert />
        </StyledSection>
    );
};

export default Search;