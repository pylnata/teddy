import styled from "styled-components";

import bag from "../../images/bag.png";
import filter from "../../images/filter.svg";



export const Rules = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items:center;
  font-size: 2rem;
  background-color: #fff;
  color: #333;
  padding: 3rem;
  width: 40%;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 991px) {
    font-size: 1.6rem;
    padding: 1rem;
    width: 70%;
  }

  @media screen and (max-height: 320px) {
    font-size: 1rem;
    width: 45%;
  }

  @media screen and (max-height: 213px) {
    height: 70%;
    width: auto;
  }


`;
export const Container = styled.div`
  grid-area: cart;
  background-image: url(${bag});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;
  position: relative;
  width: 70%;
`;

export const Task = styled.div`
  position: relative;
  width: 65%;
  height: 55%;
  margin-left: 1%;
  display: grid;
  grid-template-columns: repeat(4, minmax(24%, 1fr));
  grid-template-rows: repeat(3, minmax(24%, 1fr));
  grid-gap: 1%;

  @media screen and (max-height: 960px) and (orientation: portrait) {
    height: 42%;
  }

  @media screen and (max-width: 846px) and (orientation: landscape) {
    width: 59%;
  }

  > div {
    background-image: linear-gradient(
      to right bottom,
      rgba(0,0,0, 0.1),
      rgba(0,0,0, 0.2)
    );
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
      min-width: 20px;
      min-height: 20px;
    }
    &.gray {
      filter: url(${filter}#grayscale);
      filter: gray;
      -webkit-filter: grayscale(1);
    }
  }
`;
