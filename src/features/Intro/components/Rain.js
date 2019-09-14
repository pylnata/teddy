import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Rain = styled(animated.div)`
width: 15%;
height: 15%;
background-image: url(${({ img }) => img});
background-size: 50%;
background-repeat: repeat-x;
position: fixed;
right: 100px;
transform: rotate(-25deg);
@media screen and (max-width: 768px) {
  right: 20px;
  width: 100px;
  height: 100px;
  }
}
`;

export default ({ img }) => {
  const [reset, setReset] = useState(0);
  const propsRain = useSpring({
    from: { top: "20%", opacity: 1 },
    to: { top: "30%", opacity: 0 },
    reset: reset < 3,
    onRest: () => {setReset(state => state + 1)},
    config: { duration: 700 },
  });

  return <Rain img={img} style={propsRain} />;
};
