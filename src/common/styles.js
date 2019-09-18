import styled, { keyframes } from "styled-components";

export { Nav } from "./Nav";
export { Roof } from "./Roof";

export const Game = styled.div`
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-image: ${({ filter}) => {
      return filter
        ? " linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)), "
        : "";
    }}
    url(${({ bg }) => bg});
  background-size: ${({ size }) => size};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export const Button = styled.button`
  border: 1px #77c76e solid;
  background: #60af56;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 30px;
  margin-top: 10%;
  cursor: pointer;
  font-family: "Indie Flower", cursive, -apple-system;
  text-transform: uppercase;
  transform: scale(1);
  transition: 0.2s all;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 1rem;
  }
  @media screen and (max-height: 213px) {
    margin-top: 0;
    padding: 0;
    font-size: 0.9rem;
  }
`;
