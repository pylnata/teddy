import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Dino = styled(animated.div)`width: 30%;
position: absolute;
left: 18%;
z-index: -2;
img {
  width: 100%;
}`

export default ({img, selectedGame}) => {
  const propsDino = useSpring({
    from: {
      top: selectedGame ? "22%" : "-15%"
    },
    to: [
      {
        top: selectedGame ? "-200px" : "-15%",
        config: { duration: 1000 }
      }
    ],
  });

  return (
    <Dino style={propsDino}>
      <img src={img} alt="dino" />
    </Dino>
  );
};
