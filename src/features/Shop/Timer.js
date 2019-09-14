import React from "react";
import { useSpring, animated } from "react-spring";

export default props => {
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
      <animated.div className="control__timer" style={propsTimer2}>
        {propsTimer2.text}
      </animated.div>
      <div className="control__timer-before"></div>
    </>
  );
};
