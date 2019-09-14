import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Balloon = styled(animated.div)`
  width: 30%;
  height: 30%;
  position: fixed;
  left: 50%;
  top: 5rem;
  z-index: -3;
  background-image: url(${({img}) => img});
  background-repeat: no-repeat;
  @media screen and (max-width: 600px) {
    left: 25%;
  }
  @media screen and (max-width: 600px) and (orientation: portrait) {
    display: none;
  }
`;

export default ({img}) => {
  const propsBallon = useSpring({
    from: { top: "50%" },
    to: { top: "-50%" },
    config: { duration: 6000 },
    delay: 250
  });

  return <Balloon style={propsBallon} img={img} />;
};
