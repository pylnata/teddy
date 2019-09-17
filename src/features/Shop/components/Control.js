import React from "react";
import styled from "styled-components";

import { Timer, PlayingTimer } from "./Timer";

import bear from "../images/bear.svg";

const Control = styled.div`
  padding-top: 10%;
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Bear = styled.div`
  width: 100%;
  height: 30%;
  background-image: url(${bear});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  position: absolute;
  top: 70%;
  right: -35%;
`;

export default ({ status, fail }) => {
  return (
    <Control>
      <div style={{ minHeight: "40%", width: "100%" }}>
        {status !== "playing" ? (
          <Timer status={status} />
        ) : (
          <PlayingTimer onRestHandler={fail} />
        )}
      </div>
      <Bear />
    </Control>
  );
};
