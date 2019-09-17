import React from "react";
import { useSpring, config } from "react-spring";

import { useImagesContext } from "../../../../contexts/ImagesContext";
import Tyres from "./components/Tyres";
import Brum from "./components/Brum";
import Gaz from "./components/Gaz";
import Dino from "./components/Dino";

import {CarContainer, Car, CarShadow } from "./styles";

export default props => {
  const { selectedGame } = props;
  const { images } = useImagesContext();

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
