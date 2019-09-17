import React from "react";
import styled from "styled-components";

import Hearts from "./components/Hearts";
import Github from "./components/Github";
import Satellite from "./components/Satellite";
import Spider from "./components/Spider";
import Flower from "./components/Flower";

import { useImagesContext } from "../../../../contexts/ImagesContext";

const House = styled.div`
  width: 29%;
  min-width: 200px;
  max-width: 800px;
  position: absolute;
  left: 2%;
  bottom: 33%;
  z-index: 10;

  img { width: 100% };

  @media screen and (max-width: 1024px) {
    left: 1rem;
    bottom: 35%;
    width: 35%;
  }

  @media screen and (orientation: portrait) {
    width: 60%;
    bottom: 45%;
  }

  @media screen and (max-width: 800px) {
    width: 40%;
  }

  @media screen and (max-height: 700px) {
    bottom: 35%;
  }

  @media screen and (max-height: 700px) and (orientation: portrait) {
    bottom: 50%;
  }
`;

export default () => {

  const { images } = useImagesContext();

  return (
    <House>
      <div style={{position: 'relative'}}>
        <img src={images["house4.png"]} alt="house" />
        <Satellite />
        <Github />
        <Spider img={images["spider.svg"]} />
        <Flower img={images["flower1.svg"]} />
      </div>
      <Hearts img={images["heart.svg"]} />
    </House>
  );
};
