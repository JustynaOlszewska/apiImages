import styled, { css } from "styled-components";
interface AnimationProps {
  readonly animation: boolean;
}
export const StylesAlert = styled.div<AnimationProps>`
  height: 20px;
  position: absolute;
  z-index: 3;
  background-color: black;
  color: white;
  border: 2px solid grey;
  padding: 10px;
  transform: translateX(0);
  opacity: 0;
   @keyframes mymove {
  0% {  transform: translateX(0); opacity: 0}
  30%{ transform: translateX(50%); opacity: 1}
  100%{ transform: translateX(100%); opacity: 0}
}
  ${({animation}) => animation === true && css`
       animation: mymove 5s 1;
  `}  
`;