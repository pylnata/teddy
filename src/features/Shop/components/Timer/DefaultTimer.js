import React from "react";
import styled from "styled-components";

import { TimerCss, TimerThreadCss } from "./styles";

const Timer = styled.div`
  ${TimerCss}
`;
const TimerThread = styled.div`
  ${TimerThreadCss}
`;

const DefaultTimer =() => (
  <>
    <Timer>25</Timer>
    <TimerThread />
  </>
);

export { DefaultTimer }
