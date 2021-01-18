import styled from "styled-components";

import unsplash640 from "../../images/unsplash640.jpg"
import unsplash1920 from "../../images/unsplash1920.jpg"

export const StyledHeaderSearch = styled.header`
height: ${props => props.primary ? "100vh" : "200px"};
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-size: cover;
background-repeat: no-repeat;
 background-image: url(${unsplash640});
 @media(min-width: 768px) {
width: 80vw;
};
@media(min-width: 700px) and (orientation: landscape) {
   height: ${props => props.primary ? "100vh" : "300px"};
};
@media(min-width: 1300px) and (orientation: landscape) {
   height: ${props => props.primary ? "100vh" : "400px"};
};
 @media(min-width: 1200px) {
    background-image: url(${unsplash1920});
 };
`;