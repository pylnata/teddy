import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

import Tyres from "./components/Tyres";
import Brum from "./components/Brum";
import Gaz from "./components/Gaz";
import Dino from "./components/Dino";

const CarContainer = styled(animated.div)`
  position: relative;
  max-width: 450px;
  z-index: 20;
  width: 60%;

  @media screen and (max-height: 600px) {
    width: 50%;
  }

  @media screen and (max-width: 720px) and (orientation: portrait) {
    width: 60%;
  }

  @media screen and (max-width: 540px) and (orientation: portrait) {
    width: 70%;
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    width: 40%;
  }
`;

const Car = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  background: transparent;
`;

const CarShadow = styled.div`
  position: absolute;
  border-radius: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  width: 100%;
  top: 90%;
  height: 3rem;
`;

export default props => {
  const { selectedGame, images } = props;

  let propsCar = useSpring({
    from: { left: selectedGame ? "32%" : "-10%" },
    to: { left: selectedGame ? "100%" : "32%" },
    config: selectedGame ? { duration: 1000 } : config.slow,
    delay: 250
  });

  const { c } = useSpring({
    from: { c: 0 },
    c: 1,
    config: { duration: 2000, mass: 1, tension: 280, friction: 60 },
    delay: 250
  });

  let propsCarStart = {
    left: c.interpolate({
      range: [0, 0.95, 1],
      output: ["-10%", "33%", "32%"]
    })
  };

  if (!selectedGame) {
    propsCar = { ...propsCarStart };
  }

  return (
    <CarContainer style={propsCar}>
      <Car>
        <img src={images["car.png"]} alt="car" />
        <Tyres img={images["tyre3.svg"]} />
        <Gaz />
        <CarShadow />
        <Brum />
      </Car>
      <Dino selectedGame={selectedGame} img={images["dino3.svg"]} />
    </CarContainer>
  );
};
