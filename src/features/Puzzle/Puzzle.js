import React, { useState, useEffect } from "react";

import { Game, Nav, Loader } from "../../common/styles";
import { GameContainer, WinContainer, Puzzles } from "./styles";

import DraggableList from "./components/DraggableList";

import bg from "./images/bg.png";

export default () => {
  const [images, setImages] = useState({});
  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [completed, setCompleted] = useState(false);



  // import and preload images
  useEffect(() => {
    const importedImages = {};
    const r = require.context("./images/", true, /\.(png|jpe?g|svg)$/);
    let i = 0;
    r.keys().forEach(item => {
      const importedImg = r(item);
      importedImages[
        item.replace("./", "").replace("items/", "")
      ] = importedImg;
      const img = new Image();
      img.onload = () => {
        i++;
        setImagesReadyCnt(i);
      };
      img.src = importedImg;
    });

    setImages(importedImages);
    setCurrentImage(importedImages["1.png"]);
  }, []);

  let content = (
    <DraggableList items={"1 2 3 4 5".split(" ")} setCompleted={setCompleted} img={currentImage} />
  );

  if (completed) {
    content = (
      <WinContainer>
          <img src={currentImage} alt="" />
      </WinContainer>
    );
  }

  const select = (event) => {
    const image = event.target.closest("img");
    if(image) {
        setCurrentImage(image.src);
        setCompleted(false);
      }
  }

  if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
    return (
      <Game bg={bg} size="400px" filter="1">
        <Loader />
      </Game>
    );
  }

  return (
    <Game bg={bg} size="400px" filter="1">
      <Nav type="back" to="/shop" />
      <GameContainer>
        <Puzzles >
          <div className="left" onClick={select}>
            <img src={images["1.png"]} alt="" />
            <img src={images["2.png"]} alt="" />
            <img src={images["3.png"]} alt="" />
            <img src={images["4.png"]} alt="" />
          </div>

            {content}
        </Puzzles>
      </GameContainer>
    </Game>
  );
};
