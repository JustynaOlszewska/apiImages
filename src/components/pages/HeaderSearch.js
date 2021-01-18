import React, { lazy } from 'react';

import { StyledHeaderSearch } from '../../styles/styleComponents/StyledSearch';

const Search = lazy(() => import('../modules/Search'));

const HeaderSearch = () => {
    
    return (
            <StyledHeaderSearch primary>
                <Search />
            </StyledHeaderSearch >
    );
};

export default HeaderSearch;