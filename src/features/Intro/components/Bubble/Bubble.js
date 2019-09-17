import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";
import styled from "styled-components";

import Game from "./Game";

const Dialog = styled.div`
  align-self: flex-end;
  max-width: 500px;
  width: 30%;
  margin-right: 10%;
  z-index: 30;
  font-size: 2.6rem;
  height: 30%;

  @media screen and (max-width: 1000px) {
    width: 40%;
    margin-right: -10%;
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

const Circular = styled.div`
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

const Games = styled(animated.div)`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: 5% auto;`;

export default props => {
  const { selectedGame, selectGame, images } = props;

  const springRef = useRef();
  const propsBubble = useSpring({
    from: {
      opacity: selectedGame ? 1 : 0,
      transform: `scale(${selectedGame ? 1 : 0}) translateY(30px)`
    },
    to: [
      {
        opacity: selectedGame ? 0 : 1,
        transform: `scale(${selectedGame ? 0 : 1}) translateY(30px)`
      },
      {
        opacity: selectedGame ? 0 : 1,
        transform: `scale(${selectedGame ? 0 : 1}) translateY(0px)`,
        config: { duration: 250 }
      }
    ],
    ref: springRef
  });

  const gamesRef = useRef();
  const propsGames = useSpring({
    from: { transform: `scale(${selectedGame ? 1 : 0})` },
    to: [
      {
        transform: `scale(${selectedGame ? 0 : 1})`
      }
    ],
    ref: gamesRef
  });

  useChain([springRef, gamesRef], [selectedGame ? 0 : 2, 3.25]);

  return (
    <Dialog>
      <animated.div style={{ position: "relative", ...propsBubble }}>
        <Circular>Hello! Where are we going?</Circular>
      </animated.div>
      <Games style={propsGames}>
        <Game click={()=>selectGame('shop')} img={images["shop-game.svg"]} />
        <Game click={()=>selectGame('puzzle')} img={images["puzzle-game.svg"]} />
      </Games>
    </Dialog>
  );
};
