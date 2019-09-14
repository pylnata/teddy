import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

const Satellite = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 21%;
  top: -5%;
}
`;

const SatelliteLine = styled(animated.div)`
  border: solid 2px rgb(214, 212, 212);
  border-color: rgb(214, 212, 212) transparent transparent transparent;
  border-radius: 50%/20px 20px 0 0;
  position: absolute;
  transform: rotate(45deg);
  height: 100%;
  left: 15%;
`;

export default () => {
  const [reset, setReset] = useState(false);

  const trail = useTrail(3, {
    config: { duration: 1500 },
    opacity: 0,
    top: "-50%",
    width: 80,
    from: { opacity: 1, top: "30%", width: 20 },
    onRest: () => setReset(state => !state),
    reset
  });
  return (
    <Satellite>
      {trail.map((props, index) => (
        <SatelliteLine
          key={index}
          className="satellite-line"
          style={props}
        ></SatelliteLine>
      ))}
    </Satellite>
  );
};
