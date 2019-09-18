import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Game, Nav } from "../../common/styles";
import { GameContainer, WinContainer, Puzzles } from "./styles";

import DraggableList from "./components/DraggableList";

import bg from "./images/bg.png";

import { useImagesContext } from "../../contexts/ImagesContext";
import { useSpring, animated } from "react-spring";

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

  const propsImage = useSpring({
    from: { transform: "scale(1)" },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }]
  });

  if (completed) {
    content = (
      <WinContainer>
        <img src={currentImage} alt=""  />
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
    <Game bg={bg} size="400px" filter="1">
      <Nav type="back" to="/shop" />
      <GameContainer>
          <div className="options" onClick={select}>
            <img src={images["1.png"]} alt="" />
            <img src={images["2.png"]} alt="" />
            <img src={images["3.png"]} alt="" />
            <img src={images["4.png"]} alt="" />
          </div>
          <div className="inner">
          {content}
          </div>
      </GameContainer>
    </Game>
  );
};
