import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import { TimerCss, TimerThreadCss, Bum } from "./styles";

const Timer = styled(animated.div)`
  ${TimerCss}
`;
const TimerThread = styled(animated.div)`
  ${TimerThreadCss}
`;

const TimerDefault = ({ status }) => {
  const propsBalloon = useSpring({
    from: { transform: `scale(0)` },
    to: { transform: `scale(1)` },
    delay: !status ? 0 : 1000
  });

  const propsThread = useSpring({
    from: { transform: `scale(0)` },
    to: { transform: `scale(1)` },
    delay: !status? 0 : 1000
  });

  return (
    <>
      {status === "fail" ? <Bum /> : null}

      <Timer style={propsBalloon}>25</Timer>
      <TimerThread style={propsThread} />
    </>
  );
};

export { TimerDefault as Timer };
