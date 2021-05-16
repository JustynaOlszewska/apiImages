import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize};

html {
  box-sizing: border-box;
  font-size: 16px;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Roboto',sans-serif;
  display: flex;
  justify-content: center;
  margin: 0 auto; 
  background: linear-gradient(45deg, rgba(255, 142, 83,0.5) 30%, rgba(0,0,0,0.5) 90%);
  background-repeat: no-repeat;
  background-size: cover;
};
`;

export default GlobalStyle;