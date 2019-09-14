import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Gaz = styled(animated.div)`
  position: absolute;
  left: -6rem;
  bottom: 4rem;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  @media screen and (max-width: 490px) {
    width: 30px;
    height: 30px;
    bottom: 3rem;
    left: -3.5rem;
  }
`;

const GazMedium = styled(animated.div)`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  left: -10rem;
  bottom: 5rem;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 490px) {
    width: 20px;
    height: 20px;
    bottom: 3.5rem;
    left: -6rem;
  }
`;

const GazSmall = styled(animated.div)`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  left: -12rem;
  bottom: 6rem;
  width: 20px;
  height: 20px;

  @media screen and (max-width: 490px) {
    width: 10px;
    height: 10px;
    bottom: 4rem;
    left: -7.5rem;
  }
`;

export default () => {
  // TODO to useTrail

  const spring = {
    from: { opacity: 1, transform: "scale(1)" },
    to: [
      { opacity: 0.5, transform: "scale(1.3)", config: { duration: 250 } },
      { opacity: 0, transform: "scale(0)", config: { duration: 250 } },
      { opacity: 0.5, transform: "scale(1.3)", config: { duration: 250 } },
      { opacity: 0, transform: "scale(0)", config: { duration: 250 } },
      { opacity: 0.5, transform: "scale(1.3)", config: { duration: 250 } },
      { opacity: 0, transform: "scale(0)", config: { duration: 250 } },
      { opacity: 0.5, transform: "scale(1.3)", config: { duration: 250 } },
      { opacity: 0, transform: "scale(0)", config: { duration: 250 } }
    ]
  };

  let propsGaz = useSpring(spring);
  let propsGazBefore = useSpring({ ...spring, delay: 250 });
  let propsGazAfter = useSpring({ ...spring, delay: 550 });

 
  return (
    <>
      <Gaz style={propsGaz} />
      <GazMedium style={propsGazBefore} />
      <GazSmall style={propsGazAfter} />
    </>
  );
};
