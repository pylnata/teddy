import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import {TimerCss, TimerThreadCss} from "./styles";

const Timer = styled(animated.div)`${TimerCss}`;
const TimerThread = styled.div`${TimerThreadCss}`;

const PlayingTimer = props => {
  const propsTimer = useSpring({
    from: { number: 25, transform: "scale(1)" },
    to: [{ number: 0, transform: "scale(1.4)", config: { duration: 25000 } }],
    number: 0,
    onRest: props.onRestHandler,
    reset: props.reset
  });

  let propsTimer2 = {
    ...propsTimer,
    text: propsTimer.number.interpolate(n => {
      return n.toFixed();
    })
  };

  return (
    <>
      <Timer style={propsTimer2}>
        {propsTimer2.text}
      </Timer>
      <TimerThread />
    </>
  );
};

export { PlayingTimer }
