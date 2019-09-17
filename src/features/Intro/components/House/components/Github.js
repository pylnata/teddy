import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const Github = styled.div`
  position: absolute;
  top: 25%;
  left: 40%;
  width: 20%;
  height: 20%;
  z-index: 29;

  @media screen and (max-width: 900px) {
    top: 23%;
    left: 38%;
  }

  @media screen and (max-width: 535px) {
    top: 20%;
  }
  > div {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
  }
`;

const Eyes = styled.div`
  position: absolute;
  top: 20%;
  left: -10%;
  z-index: 29;
  @media screen and (max-width: 500px) {
    top: 21%;
  }
`;

const Eye = styled(animated.div)`
  width: 12px;
  height: 6px;
  @media screen and (max-width: 500px) {
    width: 11px;
    height: 5px;
  }
  background: #fff;
  display: inline-block;

  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

const EyeLeft = styled(Eye)`
  margin-right: 2px;
  @media screen and (min-width: 500px) {
    margin-right: 4px;
  }
`;

const Ball = styled(animated.div)`
  width: 4px;
  height: 4px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export default (props) => {
  const [reset, setReset] = useState(false);

  const { c } = useSpring({
    from: { c: 0 },
    to: { c: 1 },
    config: { duration: 4000 },
    reset,
    onRest: () => {
      setReset(s => !s);
    }
  });

  const propsEye = {
    background: c.interpolate({
      range: [0, 0.9, 1],
      output: ["#fff", "#fff", "#42c8c6"]
    })
  };

  const propsBall = {
    background: c.interpolate({
      range: [0, 0.25, 0.5, 0.9, 1],
      output: ["#000", "#000", "#000", "#000", "#42c8c6"]
    }),
    left: c.interpolate({
      range: [0, 0.25, 0.5, 0.9, 1],
      output: ["50%", "10%", "90%", "50%", "50%"]
    })
  };

  return (
      <Github>
        <div>
        <a href="http://github.com/pylnata" title="Star me on github" style={{zIndex:1000}}>
          <Eyes>
            <EyeLeft style={propsEye}>
              <Ball style={propsBall} />
            </EyeLeft>
            <Eye style={propsEye}>
              <Ball style={propsBall} />
            </Eye>
          </Eyes>
          </a>
        </div>
      </Github>
  );
};
