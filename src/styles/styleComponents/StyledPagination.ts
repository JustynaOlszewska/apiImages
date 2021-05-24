import styled from 'styled-components';
interface IconProps {
    none: string | undefined;
    grey: boolean;
    type?: string;
};

export const StyleH4 = styled.h4`
display: flex;
justify-content: center;
color: white;
&> p {
    margin: 0 5px;
}
`;

export const StyleNav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 50px;
cursor: pointer;
`;

export const StyleUl = styled.ul`
width:80%;
padding: 0;
display: flex;
justify-content: space-between;
text-decoration: none;
`;

export const StyleLi = styled.li`
    list-style-type: none;
`;

export const StyleI = styled.i<IconProps>`
display: ${({ none }) => none === "none" && "none"};
opacity: ${({ grey }) => grey && 0};
`;