import React, { lazy } from 'react';

import { StyledHeaderSearch } from '../../styles/styleComponents/StyledSearch';

const ImagesList = lazy(() => import('../organism/ImagesList'));
const Search = lazy(() => import('../pages/HeaderSearch'));

const Main = () => {
    return (
        <div>
            <StyledHeaderSearch mainPage>
                <Search />
            </StyledHeaderSearch>
            <ImagesList />
        </div>
    );
};

export default Main;