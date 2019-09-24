import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Game, Nav } from "../../common/styles";
import { GameContainer, WinContainer } from "./styles";

import DraggableList from "./components/DraggableList";


import { useImagesContext } from "../../contexts/ImagesContext";

export default () => {
  const { images } = useImagesContext();
  const [currentImage, setCurrentImage] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    disablePageScroll();
    return ()=> {
      enablePageScroll();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(images).length > 0) {
      setCurrentImage(images["1.png"]);
    }
  }, [images]);

  let content = (
    <DraggableList
      items={"1 2 3 4 5".split(" ")}
      setCompleted={setCompleted}
      img={currentImage}
    />
  );


  if (completed) {
    content = (
      <WinContainer>
        <img src={currentImage} alt="puzzle"  />
      </WinContainer>
    );
  }

  const select = event => {
    const image = event.target.closest("img");
    if (image) {
      setCurrentImage(image.src);
      setCompleted(false);
    }
  };

  return (
    <Game bg={images["bg.png"]} size="400px" filter="1" style={{paddingRight: '10%'}}>
      <Nav type="back" to="/shop" />
      <GameContainer>
          <div className="options" onClick={select}>
            <img src={images["1.png"]} alt="puzzle1" />
            <img src={images["2.png"]} alt="puzzle2" />
            <img src={images["3.png"]} alt="puzzle3" />
            <img src={images["4.png"]} alt="puzzle4" />
          </div>
          <div className="inner">
          {content}
          </div>
      </GameContainer>
    </Game>
  );
};
