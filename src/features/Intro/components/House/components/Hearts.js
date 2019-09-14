import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const Hearts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heart = styled(animated.div)`
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  z-index: -3;
  position: absolute;
  top: 25%;
  left: 11%;
  margin-top: -20px;
  @media screen and (max-width: 768px) {
    top: 30%;
  }
`;

export default ({ img }) => {
  const initialItems = [
    { key: 0, x: 5, width: "5%" },
    { key: 1, x: -3, width: "10%" },
    { key: 2, x: 5, width: "7%" },
    { key: 3, x: -3, width: "10%" },
    { key: 4, x: 5, width: "5%" }
  ];

  const [items, setList] = useState(initialItems);

  const removeFromList = React.useCallback(() => {
    var nItems = [...items];
    nItems.pop();
    setList(nItems);
  }, [items]);

  const transitions = useTransition(items, item => item.key, {
    initial: { xy: "1,0, 0", opacity: 1, transform: " scale(1)" },
    from: { xy: "1,0, 0", opacity: 1, transform: " scale(1)" },
    enter: { xy: "1,0, 0", opacity: 1, transform: " scale(1)" },
    leave: { xy: "2.4,-300, 1", opacity: 0, transform: " scale(1.5)" },
    config: { duration: 5000 },
    onRest: () => {
      if (items.length === 0) setList(initialItems);
    }
  });

  React.useEffect(() => {
    const t = setInterval(() => {
      removeFromList();
    }, 1500);
    return () => {
      clearInterval(t);
    };
  }, [removeFromList]);

  return (
    <Hearts>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <Heart
              key={key}
              img={img}
              style={{
                ...props,
                width: item.width,
                height: item.width,
                transform: props.xy.interpolate(xy => {
                  const a = xy.split(",");
                  return ` translate(${a[2] * item.x * 15}px, ${
                    a[1]
                  }px) scale(${a[0]})`;
                })
              }}
            ></Heart>
          )
      )}
    </Hearts>
  );
};
