import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Flowers = styled.div`
  position: absolute;
  right: 0;
  bottom: 25%;
  z-index: -1;
  width: 30%;
  height: 30%;
`;

export default ({ img }) => {
  const [reset, setReset] = useState(false);

  const propsFlower = useSpring({
    from: { transform: `rotate(${reset ? "15" : "-15"}deg)` },
    to: [{ transform: `rotate(${reset ? "-15" : "15"}deg)` }],
    config: { duration: 2000 },
    reset,
    onRest: () => {
      setReset(state => !state);
    }
  });

  return (
    <Flowers>
      <animated.div style={propsFlower}>
        <img
          src={img}
          alt="flower"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </animated.div>
    </Flowers>
  );
};
