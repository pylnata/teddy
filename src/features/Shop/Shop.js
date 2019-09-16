import React, { useState, useEffect, useCallback } from "react";

import Bag from "./components/Bag/Bag";
import Items from "./components/Items";
import Nav from "./components/Nav";
import Roof from "./components/Roof";
import Control from "./components/Control";

import { Game, Loader } from "../../common/styles";
import { GameContainer, ShopContainer } from "./styles";

import { vegetables, fruits, other } from "./config";

const Shop = props => {
  const [images, setImages] = useState({});
  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const [productsToBuy, setProductsToBuy] = useState([]);
  const [status, setStatus] = useState(null); // playing, fail, win
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const setRandomItems = useCallback(() => {
    const productsToBuy = vegetables
      .concat(fruits)
      .concat(other)
      .map(item => {
        return Array.from({ length: 4 }).fill(item);
      })
      .reduce((acc, arr) => acc.concat(arr), [])
      .sort(() => 0.5 - Math.random())
      .slice(0, 12)
      .sort()
      .reduce((acc, val) => {
        const newItem = {
          selected: false,
          name: val
        };
        return [...acc, newItem];
      }, []);
    setProductsToBuy(productsToBuy);
  }, []);

  // import and preload images
  useEffect(() => {
    const importedImages = {};
    const r = require.context("./images/", true, /\.(png|jpe?g|svg)$/);
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
    setRandomItems();
  }, [setRandomItems]);


  if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
    return (
      <Game>
        <Loader />
      </Game>
    );
  }



  const fail = () => {
    setStatus("fail");
  };

  const win = () => {
    setStatus("win");
  };

  const reset = () => {
    setStatus("playing");
    setRandomItems();
  };

  const select = e => {
    const foundIndex = productsToBuy.findIndex(
      item => e.target.alt === item.name && !item.selected
    );
    if (foundIndex !== -1) {
      const newProductsToBuy = [...productsToBuy];
      newProductsToBuy[foundIndex] = {
        ...productsToBuy[foundIndex],
        selected: true
      };
      setProductsToBuy(newProductsToBuy);
      setSelectedIndex(foundIndex);
      if (newProductsToBuy.findIndex(item => item.selected === false) === -1) {
        win();
      }
    }
  };

  return (
    <Game>
      <Nav type="back" />
      <GameContainer>
        <Roof />

        <ShopContainer>
          <Bag
            productsToBuy={productsToBuy}
            images={images}
            reset={reset}
            status={status}
            selectedIndex={selectedIndex}
          />

          <Control fail={fail} />
        </ShopContainer>

        <Items images={images} select={select} />
      </GameContainer>

      <Nav type="next" />
    </Game>
  );
};

export default Shop;
