import React from "react";
import { useSpring, animated } from "react-spring";

import { useImagesContext } from "../../../../contexts/ImagesContext";

import { Rules, Task, Container } from "./styles";
import { Button } from "../../../../common/styles";

export default props => {
  const { productsToBuy, status, selectedIndex, reset} = props;
  const { images } = useImagesContext();

  const propsSelected = useSpring({
    from: { transform: "scale(1)" },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }]
  });

  return (
    <Container>
        {status !== 'playing' && (
            <Rules>
              { (status === 'win' ) && (<>Well done!</>)}
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
              <img src={images[item.name + ".svg"]} alt={item.name} />
            </animated.div>
        ))}
      </Task>
    </Container>
  );
};
