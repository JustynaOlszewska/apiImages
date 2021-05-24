import styled from "styled-components";

interface HeaderProps{
  primary?: boolean;
  back?: Array<SizePhoto>;
};
interface SizePhoto {
   full?: string;
   raw?: string;
   regular?: string;
   small?: string;
   thumb?: string; 
   };

export const StyledHeaderSearch = styled.header<HeaderProps>`
height: ${({primary}) => primary ? "100vh" : "100px"};
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ back }) => back && `url(${back.map(e => e.small)})`};
@media(min-width: 700px) and (orientation: landscape) {
   height: ${({primary}) => primary ? "100vh" : "120px"};
};
@media(min-width: 1300px) and (orientation: landscape) {
   height: ${props => props.primary ? "100vh" : "200px"};
};
 @media(min-width: 1200px) {
    background-image: ${({ back }) => back && `url(${back.map(e => e.regular)})`};
 };
`;
