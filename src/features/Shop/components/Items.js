import React from "react";
import styled from "styled-components";

import { useImagesContext } from "../../../contexts/ImagesContext";

import { vegetables, fruits, other } from "../config";

const Items = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;
  @media screen and (max-width: 768px) and (orientation: portrait) {
    height: 15%;
    min-height: 30px;
    width: 100%;
  }
  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
    //width: 100%;
    //height: 100%;


    @media screen and (max-width: 768px) {
      max-width: 40px;
      max-height: 40px;
    }

    @media screen and (max-width: 320px) {
      max-width: 25px;
      max-height: 25px;
    }

    @media screen and (max-height: 412px) {
      max-width: 30px;
      max-height: 30px;
    }

    @media screen and (max-height: 320px) {
      max-width: 25px;
      max-height: 25px;
    }

    @media screen and (max-height: 213px) {
      max-width: 20px;
      max-height: 20px;
    }

  }
`;

const mixinLeft = `
flex-direction: row;
padding-top: 0;
align-items: center;`;

const ItemsLeft = styled(Items)`
  width: 100%;
  padding-top: 50px;
  grid-area: items-left;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) and (orientation: portrait) {
    ${mixinLeft}
  }

`;

const ItemsRight = styled(Items)`
  width: 100%;
  padding-top: 50px;
  grid-area: items-right;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  @media screen and (max-width: 768px) and (orientation: portrait) {
    ${mixinLeft}
  }
`;


const ItemsBottom = styled(Items)`
  grid-area: items-bottom;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 5%;
  @media screen and (min-width: 768px) and (orientation: portrait) {
    //width: 100%;
  }


`;

export default ({ select }) => {
  const { images } = useImagesContext();

  return (
    <>
      <ItemsLeft>
        {vegetables.map((name, i) => (
          <div key={i}>
            <img src={images[name + ".svg"]} alt={name} onClick={select} />
          </div>
        ))}
      </ItemsLeft>

      <ItemsRight>
        {other.map((name, i) => (
          <div key={i}>
            <img src={images[name + ".svg"]} alt={name} onClick={select} />
          </div>
        ))}
      </ItemsRight>

      <ItemsBottom>
        {fruits.map((name, i) => (
          <div key={i}>
            <img src={images[name + ".svg"]} alt={name} onClick={select} />
          </div>
        ))}
      </ItemsBottom>
    </>
  );
};
