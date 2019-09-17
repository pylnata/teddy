import React from "react";
import styled from "styled-components";

const RoofContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
`;

const RoofEl = styled.div`
  border-radius: 0 0 50% 50%;
  background-color: #e74c3c;
  width: 90px;
  height: 50px;
  @media screen and (max-height: 667px) {
    height: 20px;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

const Roof = () => {
  const content = Array.from({ length: 11 }, (v, k) => k).map((v, i) => (
    <RoofEl key={i}></RoofEl>
  ));

  return <RoofContainer>{content}</RoofContainer>
};

export { Roof };
