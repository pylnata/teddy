import React, { useState, useEffect, useCallback } from "react";

import Bag from "./components/Bag/Bag";
import Items from "./components/Items";
import { Nav, Roof } from "../../common/styles";
import Control from "./components/Control";

import { Game } from "../../common/styles";
import { GameContainer, ShopContainer } from "./styles";

import { vegetables, fruits, other } from "./config";
import bg from "./images/bg.png";


import tomato from "./images/items/tomato.svg";
import onion from "./images/items/onion.svg";
import potato from "./images/items/potato.svg";
import broccoli from "./images/items/broccoli.svg";
import cabbage from "./images/items/cabbage.svg";
import carrot from "./images/items/carrot.svg";

import watermelon from "./images/items/watermelon.svg";
import bananas from "./images/items/bananas.svg";
import grape from "./images/items/grapes.svg";
import orange from "./images/items/orange.svg";
import apple from "./images/items/apple.svg";
import strawberry from "./images/items/strawberry.svg";
import pineapple from "./images/items/pineapple.svg";

import milk from "./images/items/milk.svg";
import pasta from "./images/items/pasta.svg";
import croissant from "./images/items/croissant.svg";
import mustard from "./images/items/mustard.svg";
import cake from "./images/items/cake.svg";
import eggs from "./images/items/eggs.svg";
import jam from "./images/items/jam.svg";


const Shop = props => {

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

  useEffect(() => {
    setRandomItems();
  }, [setRandomItems]);


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
    if (status !== "playing") return;
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
    <Game bg={bg} size="cover">
      <Nav type="back" to="/" />
      <GameContainer>
        <Roof />

        <ShopContainer>
          <Bag
            productsToBuy={productsToBuy}
            reset={reset}
            status={status}
            selectedIndex={selectedIndex}
          />

          <Control fail={fail} status={status} />
        </ShopContainer>

        <Items select={select} />
      </GameContainer>

      <Nav type="next" to="/puzzle" />
    </Game>
  );
};

export default Shop;
