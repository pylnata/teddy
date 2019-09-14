import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Timer from "./Timer";
import Bag from "./Bag";

import "./Shop.scss";

/*
import tomato from "../../assets/img/items/tomato.svg";
import onion from "../../assets/img/items/onion.svg";
import potato from "../../assets/img/items/potato.svg";
import broccoli from "../../assets/img/items/broccoli.svg";
import cabbage from "../../assets/img/items/cabbage.svg";
import carrot from "../../assets/img/items/carrot.svg";

import watermelon from "../../assets/img/items/watermelon.svg";
import bananas from "../../assets/img/items/bananas.svg";
import grape from "../../assets/img/items/grapes.svg";
import orange from "../../assets/img/items/orange.svg";
import apple from "../../assets/img/items/apple.svg";
import strawberry from "../../assets/img/items/strawberry.svg";
import pineapple from "../../assets/img/items/pineapple.svg";

import milk from "../../assets/img/items/milk.svg";
import pasta from "../../assets/img/items/pasta.svg";
import croissant from "../../assets/img/items/croissant.svg";
import mustard from "../../assets/img/items/mustard.svg";
import cake from "../../assets/img/items/cake.svg";
import eggs from "../../assets/img/items/eggs.svg";
import jam from "../../assets/img/items/jam.svg";
*/

const vegetables = [
  "tomato",
  "onion",
  "potato",
  "broccoli",
  "cabbage",
  "carrot"
];
const fruits = [
  "watermelon",
  "bananas",
  "grapes",
  "orange",
  "apple",
  "strawberry",
  "pineapple"
];
const other = ["milk", "pasta", "croissant", "mustard", "eggs", "jam"];

const Shop = props => {
  const [images, setImages] = useState({});
  const [productsToBuy, setProductsToBuy] = useState([]);
  const [status, setStatus] = useState(null); // playing, fail, win
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);
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
    const r = require.context("./images/items/", false, /\.(png|jpe?g|svg)$/);
    r.keys().forEach(item => {
      importedImages[item.replace("./", "")] = r(item);
    });
    setImages(importedImages);

    setRandomItems();
  }, [setRandomItems]);

  const propsBalloon = useSpring({
    from: { transform: `scale(0)` },
    to: { transform: `scale(${status === "fail" ? 1 : 0})` },
    delay: 1000
  });

  if (Object.keys(images).length < 1) {
    // not imported
    return null;
  }

  const roof = Array.from({ length: 11 }, (v, k) => k).map((v, i) => (
    <div key={i} className="roof__el"></div>
  ));

  const fail = () => {
    setStatus("fail");
    setShowFailMessage(true);
  };

  const win = () => {
    setStatus("win");
    setShowFailMessage(false);
    setShowWinMessage(true);
  };

  const reset = () => {
    setStatus("playing");
    setShowFailMessage(false);
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

  const timer = <Timer onRestHandler={fail} />;

  return (
    <div className="game-shop">
      {/*
      <Modal modalClosed={reset} show={showFailMessage}>
        Try next time!
      </Modal>
*/}

      <div className="nav nav--back">
        <Link to="/" title="Back to home">
          &larr;
        </Link>
      </div>

      <div className="shop">
        <div className="roof">{roof}</div>

        <div className="shop-main">
          <Bag
            productsToBuy={productsToBuy}
            images={images}
            reset={reset}
            status={status}
            selectedIndex={selectedIndex}
          />

          <div className="shop-main__right">
              <button onClick={reset} className="btn" style={{opacity: status !== "playing" ? 1: 0 }}>
                Play!
              </button>

            <div className="control">
              <div className="control__timer-container">
                {showFailMessage ? (
                  <>
                    <div className="confetti-button animate" />
                    <animated.div
                      style={propsBalloon}
                      className="control__timer control__timer--noactive"
                    >
                      25
                    </animated.div>
                    <div className="control__timer-before"></div>
                  </>
                ) : status === "playing" ? (
                  timer
                ) : (
                  <>
                  <div className="control__timer control__timer--noactive">
                    25
                  </div>
                  <div className="control__timer-before"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="items items--left">
          {vegetables.map((name, i) => (
            <div key={i}>
              <img src={images[name + ".svg"]} alt={name} onClick={select} />
            </div>
          ))}
        </div>

        <div className="items items--right">
          {other.map((name, i) => (
            <div key={i}>
              <img src={images[name + ".svg"]} alt={name} onClick={select} />
            </div>
          ))}
        </div>

        <div className="items items--bottom">
          {fruits.map((name, i) => (
            <div key={i}>
              <img src={images[name + ".svg"]} alt={name} onClick={select} />
            </div>
          ))}
        </div>
      </div>

      <div className="nav nav--next">
        <Link to="/" title="Next game">
          &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Shop;
