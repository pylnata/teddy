import React from "react";
import { animated, useSpring } from "react-spring";
import styled, { keyframes } from "styled-components";

import { useImagesContext } from "../../../contexts/ImagesContext";

const fly = props => keyframes`
0%{
  background-image: url(${props.images['bird1.png']});
}
50% {
  background-image: url(${props.images['bird2.png']});
}
100% {
  background-image: url(${props.images['bird1.png']});
}
`;

const Bird = styled(animated.div)`
background-image: url(${props => props.images['bird1.png']});
position: absolute;
  left: 30%;
  top: 2%;
  width: 15%;
  height: 15%;
  z-index: 15;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${fly} 0.5s infinite forwards;
  overflow: hidden;
  @media screen and (min-height: 800px) {
    top: 10%;
  }
`;

export default () => {
  const { images } = useImagesContext();

  const propsBird = useSpring({
    from: { left: "30%", transform: "scale(1)", opacity: 1 },
    to: [
      {
        left: "90%",
        transform: "scale(0.2)",
        opacity: 1,
        config: { duration: 22000 }
      },
      {
        left: "90%",
        transform: "scale(0)",
        opacity: 0,
        config: { duration: 100 }
      }
    ]
  });

  return <Bird style={propsBird} images={images} />;
};
