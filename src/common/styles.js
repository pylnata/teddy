import styled, { keyframes }  from "styled-components"
import bg from "../features/Shop/images/bg.png";

export const Game = styled.div`
justify-content: center;
height: 100%;
min-height: 100vh;
width: 100%;
background-image: url(${bg});
display: flex;
justify-content: space-between;
align-items: center;
`

const hourglass = keyframes`
0% {
  transform: rotate(0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
50% {
  transform: rotate(900deg);
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
100% {
  transform: rotate(1800deg);
}`;

export const Loader = styled.div`
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${hourglass} 1.2s infinite;
  }
`;
