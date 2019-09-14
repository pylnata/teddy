import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Brum = styled(animated.div)`
  position: absolute;
  top: -50%;
  left: 35%;
  width: 100%;
  transform: rotate(-10deg);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  background: linear-gradient(to right, transparent, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

export default () => {
  let propsBrum = useSpring({
    from: { backgroundPosition: "-500%" },
    to: [
      { backgroundPosition: "500%", config: { duration: 1000 } },
      { backgroundPosition: "-500%", config: { duration: 0 } },
      { backgroundPosition: "500%", config: { duration: 1000 } },
      { backgroundPosition: "-500%", config: { duration: 0 } }
    ]
  });

  return (
    <Brum style={propsBrum}>
      Brum.. Brum..
    </Brum>
  );
};
