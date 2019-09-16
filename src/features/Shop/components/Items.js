import React from "react";
import styled from "styled-components";
import { vegetables, fruits, other } from "../config";

const Items = styled.div`
  display: flex;
  padding: 10px;
  @media screen and (min-height: 400px) {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
    cursor: pointer;
  }
`;

const mixinLeft = `
flex-direction: row;
padding-top: 0;
justify-content: center;
align-items: center;`;

const ItemsLeft = styled(Items)`
  width: 100%;
  padding-top: 30px;
  grid-area: items-left;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    ${mixinLeft}
  }
  @media screen and (max-height: 400px) {
    ${mixinLeft}
  }
`;

const ItemsRight = styled(Items)`
  width: 100%;
  padding-top: 30px;
  grid-area: items-right;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    ${mixinLeft}
  }
  @media screen and (max-height: 400px) {
    ${mixinLeft}
  }
`;

const mixinBottom = `
justify-content: center;
align-items: center;
`;

const ItemsBottom = styled(Items)`
  grid-area: items-bottom;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    ${mixinBottom}
  }
  @media screen and (max-height: 400px) {
    ${mixinBottom}
  }
`;

export default ({ images, select }) => {
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
