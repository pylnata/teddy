import styled from "styled-components";
import {animated} from "react-spring";

export const Dialog = styled.div`
  align-self: flex-end;
  max-width: 500px;
  width: 30%;
  margin-right: 10%;
  z-index: 30;
  font-size: 2.6rem;
  height: 30%;

  @media screen and (max-width: 1000px) {
    width: 40%;
    margin-right: -5%;
  }
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    width: 45%;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }

  @media screen and (min-height: 1000px) {
    font-size: 3rem;
  }
`;

export const Circular = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgb(226, 226, 226);
  border-radius: 30px;
  padding: 10px 15px;

  @media screen and (min-height: 1500px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 10px;
  }

  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgb(226, 226, 226);
    width: 7%;
    padding: 5%;
    border-radius: 50%;
    position: absolute;
    bottom: -60%;
    left: -10%;

    @media screen and (max-width: 400px) {
      bottom: 0%;
    }
  }

  &:after {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgb(226, 226, 226);
    width: 5%;
    padding: 3%;
    border-radius: 50%;
    position: absolute;
    bottom: -80%;
    left: -17%;
    @media screen and (max-width: 400px) {
      bottom: -10%;
    }
  }
`;

export const Games = styled(animated.div)`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: 5% auto;`;

export const Game = styled.div`
  margin: 0 1rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0px solid #cecece;
  width: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    transition: 0.2s all;
    transform: scale(1);
    width: 80%;
    height: 80%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    @media screen and (max-width: 320px) {
      width: 25px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
