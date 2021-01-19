import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';
// import LazyImg from 'react-lazy-loading-image'

export const StylesSection = styled.section`
text-align: center;
border: 2px solid black;
margin: 5px 1px;
`;

export const StylesLazyLoadImage = styled(LazyLoadImage)`
height: 150px;
 width: auto;
 text-align:center;
 @media(min-width: 600px) {
   min-width: 130px;
    height: 200px;
 };
`;
