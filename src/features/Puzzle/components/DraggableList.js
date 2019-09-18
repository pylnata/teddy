import React, { useRef } from "react";

import clamp from "lodash-es/clamp";
import { isEqual } from "lodash-es";
import swap from "lodash-move";
import { useGesture } from "react-use-gesture";
import { useSprings, animated, interpolate } from "react-spring";

import { Content } from "../styles";

let temp = 100;

//if(window.screen.height <= 768) {
//  temp = 80;
//}

if(window.screen.height <= 640 || window.screen.width <= 412 ) {
  temp = 70;
}

if(window.screen.height <= 480 ) {
  temp = 60;
}
if(window.screen.height <= 412   ) {
  temp = 40;
}


// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? {
        y: curIndex * temp + y,
        scale: 1,
        zIndex: "1",
        shadow: 15,
        immediate: n => n === "y" || n === "zIndex"
      }
    : {
        y: order.indexOf(index) * temp,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false
      };

export default ({ items, setCompleted, img }) => {
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useGesture(vars => {
    const {
      args: [originalIndex],
      down,
      delta: [, y]
    } = vars;
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * temp + y) / temp),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder;

    if (vars.event.type === "mouseup" || vars.event.type === "touchend") {
      if (isEqual(newOrder, [4, 1, 0, 3, 2])) {
        setCompleted(true);
      }
    }

  });
  return (
    <Content img={img} height={temp}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            transform: interpolate(
              [y, scale],
              (y, s) => `translate3d(0,${y}px,0) scale(${s})`
            )
          }}
//          children={items[i]}
        />
      ))}
    </Content>
  );
};
