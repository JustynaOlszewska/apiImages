import styled from 'styled-components';

export const StylesModal = styled.div`
  position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 80%;
                background: rgba(0, 0, 0, 0.15);
                & > div {
                    position: absolute;
                    background: #fff;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    padding: 15px;
                    border: 2px solid #444;
                };
`;

export const StylesContainerData = styled.div`
 height: 50%;
  overflow: hidden;
  & > img {
    height: 100%;
     width: auto;
  };
`;
