import React from "react";
import styled from "styled-components";

const Game = styled.div`
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

export default ({ img, click }) => (
  <Game>
    <img src={img} width="100" height="100" alt="shop game" onClick={click} />
  </Game>
);
