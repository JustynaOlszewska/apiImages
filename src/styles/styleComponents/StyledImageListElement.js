import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';

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
 @media(min-width: 800px) {
    min-width: 200px;
    height: 250px;
 };
 @media(min-width: 1000px) {
    height: 350px;
 };
 @media(min-width: 1200px) {
    height: 450px;
 };
`;
