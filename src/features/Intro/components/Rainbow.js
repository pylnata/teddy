import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Rainbow = styled(animated.div)`
position: absolute;
width: 30%;
height: 100%;
right: 5%;
transform: rotate(9deg);
overflow: hidden;
@media screen and  (orientation: portrait) {
  width: 50%;
  height: 50%;
  transform: rotate(-17deg);
  right: -20%;
}
background-image: url(${({img}) => img});
background-repeat: no-repeat;
z-index: -3;
background-size: 100%;
`;


export default ({img}) => {
  const propsRainbow = useSpring({
    from: { top: "50%", opacity: 0 },
    to: [{ top: "30%", opacity: 1, config: { duration: 500 } }],
    delay: 2750
  });

  return <Rainbow style={propsRainbow} img={img} />;
};
