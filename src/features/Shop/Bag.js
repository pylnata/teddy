import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default props => {
  const { productsToBuy, images, status, selectedIndex } = props;

  //status = 'win'

  const propsSelected = useSpring({
    from: { transform: "scale(1)" },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }]
  });

  return (
    <div className="shopping-cart">
      <div className="task">
        {status !== 'playing' && <div className="shopping-cart__bear"></div> }

        {status !== 'playing' && (
            <div className="shopping-cart__inner">
            <div className="rules">
              {status === 'win' && 'Well done!'}
              {status === 'fail' && 'Try one more time!'}
              {!status && 'Click at products and pack a bag in 25 seconds!'}
            </div>
          </div>
        )}


        {productsToBuy.map((item, i) => (
          <div key={`p${i}`} className="task__item">
            <animated.div
              className={`item ${item.selected ? null : "gray"}`}
              style={
                item.selected && selectedIndex === i ? propsSelected : null
              }
            >
              {item.name}
              <img src={images[item.name + ".svg"]} alt="" />
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};
