import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Tyre = styled.div`
  width: 15%;
  height: 15%;
  position: absolute;
  z-index: 2;
  bottom: 10%;
  left: 11%;
`;
const TyreFront = styled(Tyre)`
  left: 62%;
`;

export default ({img}) => {
  let propsTyre = useSpring({
    width: '100%',
    height: 'auto',
    from: { transform: "rotate(0deg)" },
    to: [{ transform: "rotate(1080deg)", config: { duration: 2000 } }],
    delay: 250
  });
  return (
    <>
      <Tyre>
        <animated.img style={propsTyre} src={img} alt="tyre" />
      </Tyre>

      <TyreFront>
        <animated.img style={propsTyre} src={img} alt="tyre" />
      </TyreFront>
    </>
  );
};
