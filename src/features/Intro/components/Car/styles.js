import styled from "styled-components";
import { animated } from "react-spring";

export const CarContainer = styled(animated.div)`
  position: relative;
  max-width: 450px;
  z-index: 20;
  width: 60%;

  @media screen and (max-height: 600px) {
    width: 50%;
  }

  @media screen and (max-width: 720px) and (orientation: portrait) {
    width: 60%;
  }

  @media screen and (max-width: 540px) and (orientation: portrait) {
    width: 70%;
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    width: 40%;
  }
`;

export const Car = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  background: transparent;
`;

export const CarShadow = styled.div`
  position: absolute;
  border-radius: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  width: 100%;
  top: 90%;
  height: 3rem;
`;
