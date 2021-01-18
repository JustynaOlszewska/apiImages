import styled from "styled-components";

export const StylesImagesList = styled.div`
display: flex;
 justify-content: center;
 width: 100%;
 flex-direction: column;
 @media(min-width:500px) {
     flex-wrap: wrap;
     flex-direction: row;

 };
`;
