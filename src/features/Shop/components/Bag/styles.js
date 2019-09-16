import styled from "styled-components";

import bag from "../../images/bag.png";
import filter from "../../images/filter.svg";

export const Button = styled.div`
  border: 1px #77c76e solid;
  background: #60af56;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 30px;
  margin-top: 10%;
  cursor: pointer;
  font-family: "Indie Flower", cursive, -apple-system;
  text-transform: uppercase;
  transform: scale(1);
  transition: 0.2s all;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 1rem;
  }
  @media screen and (max-height: 213px) {
    margin-top: 0;
    padding: 0;
    font-size: .9rem;
  }

`;

export const Rules = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
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
  display: grid;
  grid-template-columns: repeat(4, minmax(24%, 1fr));
  grid-template-rows: repeat(3, minmax(24%, 1fr));
  grid-gap: 1%;

  @media screen and (min-width:500px) and (max-height: 667px) and (orientation: portrait) {
    height: 42%;
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
