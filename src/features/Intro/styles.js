import styled from "styled-components";

export const Intro = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2000px;
  max-height: 1280px;
  min-height: 213px;
  margin: 0 auto;
  position: relative;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: -3px 15%;
  background-repeat: no-repeat;
  overflow: hidden;
  @media screen and (orientation: portrait) {
    background-position-x: 65%;
  }
  @media screen and (orientation: portrait) and (min-height: 800px) {
    background-position-x: 60%;
  }

  @media screen and (max-width: 1000px) {
    background-position-x: 80%;
  }

  @media screen and (max-width: 384px) {
    background-position-x: 85%;
  }
`;

export const CarWithBubble = styled.div`
  position: absolute;
  z-index: 1000;
  width: 90%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 6%;
  @media screen and (orientation: landscape) {
    max-height: 99vh;
  }
  @media screen and (orientation: portrait) {
    padding-bottom: 20%;
  }
  @media screen and (max-height: 960px) and (orientation: portrait) {
    padding-bottom: 35%;
  }
  @media screen and (max-height: 640px) and (orientation: portrait) {
    padding-bottom: 25%;
  }
  @media screen and (max-height: 424px) {
    padding-bottom: 3%;
  }
`;

export const Bottom = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
  width: 100%;
  font-size: 1.6rem;
  z-index: 1000;
  bottom: 1%;
  color: #fff;
  a,
  a:link,
  a:active,
  a:visited {
    color: #ffffff;
  }
`;
