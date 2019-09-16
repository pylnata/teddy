import React from "react";
import { animated, useSpring } from "react-spring";
import styled, { keyframes } from "styled-components";

import {TimerCss, TimerThreadCss} from "./styles";

const Timer = styled(animated.div)`${TimerCss}`;
const TimerThread = styled(animated.div)`${TimerThreadCss}`;

const balloonColorLight = '#c0392b';

const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}`;

const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;

const Bum = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  bottom: 20%;
  left: 10%;
  display: block;
  border-radius: 50%;
  padding: 0rem;
  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 100px;
    height: 100%;
    left: 0;
    z-index: 1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }
  &:before {
    top: -35%;
    display: block;
    animation: ${topBubbles} ease-in-out 0.75s forwards;
    background-image: radial-gradient(
        circle,
        ${balloonColorLight} 50%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${balloonColorLight} 50%,
        transparent 30%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${balloonColorLight} 35%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%);
    background-size: 2% 2%, 4% 4%, 7% 7%, 4% 4%, 9% 9%, 5% 5%,
      3% 3%, 5% 5%, 2% 2%;
  }
  &:after {
    display: block;
    animation: ${bottomBubbles} ease-in-out 0.75s forwards;
    bottom: -35%;
    background-image: radial-gradient(
        circle,
        ${balloonColorLight} 50%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${balloonColorLight} 35%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%);
    background-size: 5% 5%, 6% 6%, 7% 7%, 8% 8%, 9% 9%, 10% 10%,
      5% 5%;
  }
`;

const FailTimer = () => {
  const propsBalloon = useSpring({
    from: { transform: `scale(0)` },
    to: { transform: `scale(1)` },
    delay: 1000
  });

  const propsThread = useSpring({
    from: { transform: `scale(0)` },
    to: { transform: `scale(1)` },
    delay: 1000
  });

  return (
    <>
      <Bum />
      <Timer style={propsBalloon}>
        25
      </Timer>
      <TimerThread style={propsThread} />
    </>
  );
};

export { FailTimer }
