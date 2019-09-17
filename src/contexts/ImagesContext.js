import React, { createContext, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "../common/styles";

const Background = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${({img}) => img});
background-size: cover;
background-position: -3px 15%;
background-repeat: no-repeat;
`

export const ImagesContext = createContext({
  images: {}
});

export const useImagesContext = () => useContext(ImagesContext);

export const ImagesProvider = props => {
  const [images, setImages] = useState({});
  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const { r } = props;

  // import and preload images
  useEffect(() => {
    const importedImages = {};
    let i = 0;
    r.keys().forEach(item => {
      const importedImg = r(item);
      importedImages[item.replace("./", "").replace("items/", "")] = importedImg;
      const img = new Image();
      img.onload = () => {
        i++;
        setImagesReadyCnt(i);
      };
      img.src = importedImg;
    });
    setImages(importedImages);
  }, [r]);

  if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
    return (
      <Background img={images["bg.svg"]}>
        <Loader />
      </Background>
    );
  }

  return (
    <ImagesContext.Provider value={{ images }}>
      {props.children}
    </ImagesContext.Provider>
  );
};

export const ImagesConsumer = ImagesContext.Consumer;
