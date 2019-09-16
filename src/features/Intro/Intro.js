import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Car from "./components/Car/Car";
import Bubble from "./components/Bubble/Bubble";
import House from "./components/House/House";
import Rain from "./components/Rain";
import Sun from "./components/Sun";
import Ballon from "./components/Ballon";
import Bird from "./components/Bird";
import Rainbow from "./components/Rainbow";
import { Loader } from "../../common/styles";

const Intro = styled.div`height: 100vh;
width: 100%;
max-width: 2000px;
max-height: 1280px;
min-height: 213px;
margin: 0 auto;
position: relative;
background-image: url(${({img}) => img});
background-size: cover;
background-position: -3px 15%;
background-repeat: no-repeat;
overflow: hidden;
@media screen and (orientation: portrait) {
  background-position-x: 65%;
}
@media screen and (orientation: portrait) and (min-height: 800px) {
  background-position-x: 60%;
}

@media screen and (max-width: 1000px) {
  background-position-x: 80%;
}

@media screen and (max-width: 384px) {
  background-position-x: 85%;
}`


const CarWithBubble = styled.div`
  position: absolute;
  z-index: 1000;
  width: 90%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 6%;
  @media screen and (orientation: landscape) {
    max-height: 99vh;
  }
  @media screen and (orientation: portrait) {
    padding-bottom: 20%;
  }
  @media screen and (max-height: 960px) and (orientation: portrait) {
    padding-bottom: 35%;
  }
  @media screen and (max-height: 640px) and (orientation: portrait) {
    padding-bottom: 25%;
  }
  @media screen and (max-height: 424px) {
    padding-bottom: 3%;
  }
`;

export default props => {
  const [selectedGame, setSelectedGame] = useState(false);
  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const [images, setImages] = useState({});

  // import and preload images
  useEffect(() => {
    const importedImages = {};
    const r = require.context("./images/", false, /\.(png|jpe?g|svg)$/);
    let i = 0;
    r.keys().forEach(item => {
      const importedImg = r(item);
      importedImages[item.replace("./", "")] = importedImg;
      const img = new Image();
      img.onload = () => {
        i++;
        setImagesReadyCnt(i);
      };
      img.src = importedImg;
    });
    setImages(importedImages);
  }, []);

  const selectGameHandler = event => {
    setSelectedGame(true);
    setTimeout(() => props.history.push("/shop"), 1500);
  };

  if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
    return (
      <Intro img={images["bg.svg"]}>
        <Loader />
      </Intro>
    );
  }
  return (
    <Intro img={images["bg.svg"]}>
      <Sun img={images["sun.svg"]} />
      <Ballon img={images["ballon.svg"]} />
      <Bird images={images} />
      <House images={images} />
      <Rain img={images["rain.svg"]} />
      <Rainbow img={images["rainbow.png"]} />
      <CarWithBubble>
        <Bubble
          selectedGame={selectedGame}
          selectGame={selectGameHandler}
          images={images}
        />
        <Car selectedGame={selectedGame} images={images} />
      </CarWithBubble>
    </Intro>
  );
};
