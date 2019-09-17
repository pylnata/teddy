import React, { useEffect, useState } from "react"


const Preloader = (props) => {

  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const [images, setImages] = useState({});

  // import and preload images
  useEffect(() => {
    const importedImages = {};
    const r = require.context("../features/Intro/images/", false, /\.(png|jpe?g|svg)$/);
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


  if (Object.keys(images).length === imagesReadyCnt && imagesReadyCnt > 0) {
    return <>{props.children}</>
  }

  if (Object.keys(images).length < 1) {
    return "Loading ...";
  }


}


export default Preloader;
