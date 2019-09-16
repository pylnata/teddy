import React from "react";
import styled from "styled-components";

const Roof = styled.div`
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
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export default () => {
  const content = Array.from({ length: 11 }, (v, k) => k).map((v, i) => (
    <RoofEl key={i}></RoofEl>
  ));

  return <Roof>{content}</Roof>
};
