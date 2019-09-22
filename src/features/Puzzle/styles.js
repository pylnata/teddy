import styled, { keyframes } from "styled-components";

export const GameContainer = styled.div`
  max-width: 550px;
  height: 95vh;
  max-height: 750px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 20px;

  .inner {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-10%);
  }
  .options {
    align-self: center;
    display: flex;
    justify-content: space-between;
    height: 15%;
    width: 100%;
    padding: 0 10%;
    max-height: 100px;
    @media screen and (max-height: 846px) and (orientation: portrait) {
      max-height: 70px;
//      margin-bottom: 10%;
    }
//    margin-bottom: 3%;
    > img {
      height: 100%;
      border: 2px solid #ffffff;
      padding: 0px;
      background: lightblue;
      cursor: pointer;
      transform: scale(1);
      transition: 0.1s transform;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const rotate = keyframes`
100% {
  transform: rotate(1turn);
}
`;

let height = 450;

if (window.screen.height <= 640 || window.screen.width <= 412 ) {
  height = 300;
}

if (window.screen.height <= 480) {
  height = 300;
}
if (window.screen.height <= 412) {
  height = 200;
}


export const WinContainer = styled.div`
  margin: 0 auto;
  width: ${height}px;
  //height:${height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  background: lightblue;
  > img {
    width: 100%;
   // height: 100%;
    background: lightblue;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
`;



export const Content = styled.div`
  grid-area: content;
  position: relative;
  width: ${height}px;
  height: ${height}px;
  align-self: center;
  margin: 0 auto;
  > div {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: ${height / 5}px;
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
    color: white;
    font-size: 1.6rem;
    background: lightblue;
    border: 2px #fff solid;
    background-image: url(${({ img }) => img});
    background-size: 100%;
    background-repeat: no-repeat;
  }

  > div:nth-child(5) {
    background-position: 0 0;
  }
  > div:nth-child(2) {
    background-position: 0 25%;
  }
  > div:nth-child(1) {
    background-position: 0 50%;
  }
  > div:nth-child(4) {
    background-position: 0 75%;
  }
  > div:nth-child(3) {
    background-position: 0 100%;
  }
`;
