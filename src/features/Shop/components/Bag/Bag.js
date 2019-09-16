import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import { Button, Rules, Task, Container } from "./styles";

import list from "../../images/done.svg";

export default props => {
  const { productsToBuy, images, status, selectedIndex, reset} = props;

  //status = 'win'

  const propsSelected = useSpring({
    from: { transform: "scale(1)" },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }]
  });

  return (
    <Container>
        {status !== 'playing' && (
            <Rules>
              {status === 'win' && (<><img src={list} alt="" /> Well done!</>)}
              {status === 'fail' && 'Try one more time!'}
              {!status && 'Click at products and pack a bag in 25 seconds!'}
              <Button onClick={reset}>New game!</Button>
            </Rules>
        )}

      <Task>
        {productsToBuy.map((item, i) => (
            <animated.div key={`p${i}`}
              className={`item ${item.selected ? null : "gray"}`}
              style={
                item.selected && selectedIndex === i ? propsSelected : null
              }
            >
              {/* item.name */}
              <img src={images[item.name + ".svg"]} alt="" />
            </animated.div>
        ))}
      </Task>
    </Container>
  );
};
