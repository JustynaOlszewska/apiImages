import styled from "styled-components";
import {
  NavLink
} from "react-router-dom";

interface ThemeProps {
  theme: Theme;
};

interface Theme {
  bg: string;
    col: string;
}
export const StyledForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
& > button {
  background-color: rgba(255, 142, 83,0.5);
& *{
  color: #454441;
  text-decoration: none;
};
};
`;

export const StyledContainerInput = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  @media (min-width: 1279px), (min-height: 1000px)and (orientation: portrait) {
    height: 120px;
  };
`;

export const StyledInput = styled.input`
  position: absolute; 
  width: 98%; 
  height: 50%;
  left: 50%; 
  transform: translateX(-50%);
  top: 0;
  text-indent: 7%;
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 25%; 
  left: 3%;
  transform: translateY(-25%);
  color: black;
  text-shadow: 0px 0px black;
`;

export const StyledButton = styled.button<ThemeProps>`
  position: absolute;
  bottom: 0; 
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.bg};
`;

export const StyledNavLink = styled(NavLink)<ThemeProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.col};
`;