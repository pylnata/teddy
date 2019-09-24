import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";

const Spider = styled.div`
  position: absolute;
  top: 50%;
  left: 13%;
  width: 20px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__img {
    width: 20px;
    height: 20px;
    margin-top: -5px;
  }
`;

const SpiderLine = styled(animated.div)`
  margin-top: -13px;
  width: 1px;
  background-color: #333;
  height: 20px;
`;

const SpiderImg = styled.div`
width: 20px;
height: 20px;
margin-top: -5px;
`;

export default ({ img }) => {
  const [toggleSpider, setToggleSpider] = useState(false);
  const propsLine = useSpring({
    from: { height: toggleSpider ? 50 : 0 },
    to: [{ height: toggleSpider ? 15 : 50 }],
    config: { ...config.gentle, duration: 2000 },
    delay: 1000,
    onRest: () => {
      setToggleSpider(state => !state);
    }
  });

  return (
    <Spider>
      <SpiderLine style={propsLine} />
      <SpiderImg><img src={img} alt="spider" /></SpiderImg>
    </Spider>
  );
};
