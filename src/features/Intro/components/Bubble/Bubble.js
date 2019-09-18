import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";

import { useImagesContext } from "../../../../contexts/ImagesContext";
import Game from "./Game";

import { Dialog, Circular, Games} from "./styles";

export default props => {
  const { selectedGame, selectGame } = props;
  const { images } = useImagesContext();

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
    ref: springRef,
    immediate: selectedGame
  });

  const gamesRef = useRef();
  const propsGames = useSpring({
    from: {
      transform: `scale(${selectedGame ? 1 : 0})` },
    to: [
      {
        transform: `scale(${selectedGame ? 0 : 1})`
      }
    ],
    ref: gamesRef,
    immediate: selectedGame
  });

  useChain([springRef, gamesRef], [selectedGame ? 0 : 2, selectedGame ? 0 : 3.25]);

  return (
    <Dialog>
      <animated.div style={{ position: "relative", ...propsBubble }}>
        <Circular>Hey, where are we going?</Circular>
      </animated.div>
      <Games style={propsGames}>
        <Game click={()=>selectGame('shop')} img={images["shop-game.svg"]} />
        <Game click={()=>selectGame('puzzle')} img={images["puzzle-game.svg"]} />
      </Games>
    </Dialog>
  );
};
